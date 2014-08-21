var debug = require('debug');
var log = debug('app:fs:log');
var error = debug('app:fs:error');

var fs = require("q-io/fs");
var q = require('q');
var path = require('path');
module.exports = function(socket){

	socket.on('readdir', function (data){
		var dirPath = data.path;
		log('readdir ' + dirPath)
		var list;
		q.fcall(function(){
			return fs.list(dirPath)
		})
		.then(function(results){
			list = results;
			var promises = [];
			for (var key in list){
				console.log(list[key])
				promises.push(fs.stat(path.join(dirPath,list[key])))
			}
			return q.all(promises);
		})
		.then(function(stats){
			list = statHandler(dirPath,list,stats);
			socket.emit('directory',{path:dirPath,data:list});
			log('readdir end ' + dirPath)
		})
		.catch(function(err){
			socket.emit('directory',{path:dirPath,error:err});
			error(err);
		})
		.done();
	})

}


function statHandler(dirPath,list,stats){
	var runtime = new Date().getTime();
	var newList = [];
	for(var key in list){
		var filename = list[key];
		var stat = stats[key];
		var type;
		if(stat.isFile()){
			type = 'file';
		}
		else if(stat.isDirectory()){
			type = 'directory';
		}
		var node= stat.node
		node.filename = filename;
		node.mode = parseInt(stat.node.mode.toString(8), 10);
		node.type = type;
		node.path = path.join(dirPath,filename)
		newList.push(node)
	}
	runtime = new Date().getTime() - runtime;
	log('readdir runtime is ' + runtime );
	return newList;
}

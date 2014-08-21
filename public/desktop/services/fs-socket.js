module.exports = function(desktop){

	desktop.service('$fsSocket',['$q',FsSocket]);
}


function FsSocket($q){
	this.$q = $q;
	this.socket = io('/fs');
	this.socket.on('connect', function (data) {
		console.log('connect success');
	});
}


FsSocket.prototype.readdir = function(dirPath){
	var deferred = this.$q.defer();

	this.socket.on('directory',function(data){
		if(data.error){
			return deferred.reject(error)
		}
		deferred.resolve(data);
	})

	this.socket.emit('readdir',{path:dirPath});
	return deferred.promise;

}
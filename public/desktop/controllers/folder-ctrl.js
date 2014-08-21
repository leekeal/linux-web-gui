module.exports = function(controller){
	controller('folderCtrl',['$scope','$fsSocket',folderCtrl])
}



function folderCtrl($scope,$fsSocket){
	var readdir = $fsSocket.readdir('/usr');
	$scope.currentPath = '/usr';
	readdir.then(function(data){
		//console.log(data);
		$scope.list = data.data;
	})


	$scope.events = {};
	$scope.events.open = function(file){
		if (file.type == 'directory') {
			var readdir = $fsSocket.readdir(file.path);
			readdir.then(function(data){
				console.log(data);
				$scope.list = data.data;
				$scope.currentPath = file.path;
				
			})
		}
	}

	$scope.events.openParent = function(){
		var currentPath = $scope.currentPath.split('/');
		currentPath.pop();
		var parentDir = currentPath.join('/');
		console.log(parentDir);
		var readdir = $fsSocket.readdir(parentDir);
		readdir.then(function(data){
			//console.log(data);
			$scope.list = data.data;
		})		
	}
}

/*var currentPath = file.path.split('/');
				currentPath.pop();
				var parentDir = currentPath.join('/');
				console.log(parentDir);*/

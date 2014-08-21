module.exports = function(controller){
	controller('testCtrl',['$scope','$fsSocket',testCtrl])
}







function testCtrl ($scope,$fsSocket){
	/*events*/
	var events = $scope.events = {};

	events.test = function(){
		
		var readdir = $fsSocket.readdir('/Users/leeke/');
		readdir.then(function(data){
			console.log(data)
		})
	};


}
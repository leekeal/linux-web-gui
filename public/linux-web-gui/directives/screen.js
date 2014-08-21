var linuxGui = require('../linux-gui');

linuxGui.directive('screen',['$rootScope',function($rootScope) {
	return {
		restrict: 'C',
		templateUrl: $rootScope.tpl + 'screen.html',
		scope:true,
		controller:['$scope','$element',screenCtrl],
	};
}]);


function screenCtrl ($scope,$element){
	// var body = $element('#body');
	console.log('screen controller working')

	$scope.events.addInstance = function(event){
		console.log('addInstance')
		console.log(event)
	}
}


linuxGui.directive('screenBody',['$rootScope',function($rootScope) {
	return {
		restrict: 'C',
		template:'',
		scope:true,

		link:function($scope,$element,$attrs){
			console.log($element)
		}
	};
}]);



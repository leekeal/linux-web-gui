var linuxGui = require('../linux-gui');

// /*-------  
// screen body 
// -------*/
linuxGui.directive('screenBody',['$rootScope','$compile',function($rootScope,$compile) {
	return {
		restrict: 'C',
		scope:true,
		link:function(scope,element,attrs){
			scope.options = {} 
			scope.options.zIndex = 0;
		}
	};
}]);



// /*-------  
// screen dashboard 
// -------*/


// linuxGui.directive('screenDashboard',['$rootScope','$compile',function($rootScope,$compile) {
// 	return {
// 		restrict: 'C',
// 		scope:true,
// 		link:function(scope,element,attrs){


// 		}
// 	};
// }]);




linuxGui.controller('screenDashboardCtrl',['$scope','$compile','$element',function($scope,$compile,$element){
	$scope.events = {}
	$scope.events.createGuiInstance = function(){
		var template = '<gui-instance></gui-instance>';
		var content = $compile(template)($scope);
		$('.screen .screen-body').append(content);
	}

	$scope.dashboardSwitch = "screen-dashboard-close";
	$scope.events.dashboardSwitch = function(){
		if($scope.dashboardSwitch == "screen-dashboard-open"){
			$scope.dashboardSwitch = "screen-dashboard-close";
		}else{
			$scope.dashboardSwitch = "screen-dashboard-open";
		}
	}
}])








var linuxGui = require('../linux-gui');



linuxGui.directive('screen',['$rootScope','$compile',function($rootScope,$compile) {
	return {
		restrict: 'C',
		scope:true,
		link:function(scope,element,attrs){
			scope.options = {} 
			scope.options.zIndex = 0;
		}
	};
}]);


/*-------  
screen dashboard 
-------*/
linuxGui.directive('screenDashboard',['$rootScope','$compile',function($rootScope,$compile) {
	return {
		restrict: 'C',
		scope:true,
		link:function(scope,element,attrs){

			// 开启状态，始终显示在最前面
			scope.$watch('options.zIndex',function(nValue){
				if(scope.dashboardSwitch == "screen-dashboard-open"){
					var zIndex = 	scope.options.zIndex + 1
					element.css('z-index',zIndex)
				}
			})



		}
	};
}]);




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




/*-------  
screen body 
-------*/
linuxGui.controller('screenBodyCtrl',['$scope','$compile','$element',function($scope,$compile,$element){
}])




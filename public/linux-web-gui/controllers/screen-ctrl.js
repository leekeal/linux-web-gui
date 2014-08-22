var linuxGui = require('../linux-gui');
var $ = require('jquery');

linuxGui.controller('screenBodyCtrl',['$scope','$compile','$element',function($scope,$compile,$element){

}])


linuxGui.controller('screenDashboardCtrl',['$scope','$compile','$element',function($scope,$compile,$element){
	$scope.events.createGuiInstance = function(){
		var template = '<div class="gui-instance"></div>';
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
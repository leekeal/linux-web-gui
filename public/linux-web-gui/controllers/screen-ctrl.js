var linuxGui = require('../linux-gui');
var $ = require('jquery');

linuxGui.controller('screenBodyCtrl',['$scope','$compile','$element',function($scope,$compile,$element){

}])


linuxGui.controller('screenDashboardCtrl',['$scope','$compile',function($scope,$compile){
	$scope.events.addInstance = function(){
		var template = '<gui-instance></gui-instance>';
		var content = $compile(template)($scope);
		$('.screen .screen-body').append(content);
	}
}])
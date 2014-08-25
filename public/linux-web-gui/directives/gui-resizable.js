var linuxGui = require('../linux-gui');
linuxGui.directive('guiResizable',['$rootScope','$compile',function($rootScope,$compile) {
	return {
		restrict: 'E',
		templateUrl:$rootScope.tpl + 'gui-resizable.html',
		replace:true,
		transclude : true,
		link:function(scope,element,attrs,ctrl,transclude){
			
		}
	};
}]);

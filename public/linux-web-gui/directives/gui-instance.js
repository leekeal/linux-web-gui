var linuxGui = require('../linux-gui');
linuxGui.directive('guiInstance',['$rootScope',function($rootScope) {
	return {
		restrict: 'E',
		templateUrl: $rootScope.tpl + 'gui-instance.html',
		scope:true,
	};
}]);
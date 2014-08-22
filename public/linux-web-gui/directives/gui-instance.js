var linuxGui = require('../linux-gui');
linuxGui.directive('guiInstance',['$rootScope',function($rootScope) {
	return {
		restrict: 'C',
		templateUrl: $rootScope.tpl + 'gui-instance.html',
		scope:true,
	};
}]);
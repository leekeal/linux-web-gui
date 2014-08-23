var linuxGui = require('../linux-gui');
linuxGui.directive('guiWindow',['$rootScope',function($rootScope) {
	return {
		restrict: 'E',
		templateUrl:$rootScope.tpl + 'gui-window.html',
		replace:true,
		transclude : true,
		link:function(scope,element,attrs){
			console.log(12312)
		}
	};
}]);
var linuxGui = require('../linux-gui');
linuxGui.directive('guiWindow',['$rootScope','$compile',function($rootScope,$compile) {
	return {
		restrict: 'E',
		templateUrl:$rootScope.tpl + 'gui-window.html',
		replace:true,
		transclude : true,
		link:function(scope,element,attrs,ctrl,transclude){



			/*处理显示顺序*/
			var screenOptions = element.offsetParent().scope().options;
			element.mousedown(function(){
				// 如果点的是自己，就不增加z-index
				if(screenOptions.zIndex == element.css('z-index')){
					return;
				}
				screenOptions.zIndex++;
				element.css('z-index',screenOptions.zIndex);
			})
			
			// var content = transclude();
			// var header = content.find('.gui-window-header-body');
			// header = $compile(header)(scope);
			// $(element).find('.gui-window-header').append(header)

			// var body = content.find('.gui-window-body');
			// body = $compile(body)(scope);
			// $(element).append(body)

		}
	};
}]);

linuxGui.directive('guiWindowHeader',['$rootScope',function($rootScope) {
	return {
		restrict: 'E',
		templateUrl:$rootScope.tpl + 'gui-window-header.html',
		replace:true,
		transclude : true,
		link:function(scope,element,attrs){
		}
	};
}]);
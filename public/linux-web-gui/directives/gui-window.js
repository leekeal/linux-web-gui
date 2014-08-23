var linuxGui = require('../linux-gui');
linuxGui.directive('guiWindow',['$rootScope',function($rootScope) {
	return {
		restrict: 'C',
		link:function(scope,element,attrs){



			/*改变gui-screen的显示优先级，这里的scope.options通过原型继承 在screen的指令里设置*/

			element.mousedown(function(){
				scope.options.zIndex++;
				scope.$digest();
				element.css('z-index',scope.options.zIndex);
			})


			
		}
	};
}]);
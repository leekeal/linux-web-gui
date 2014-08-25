var linuxGui = require('../linux-gui');
linuxGui.directive('guiResizable',['$rootScope','$compile',function($rootScope,$compile) {
	return {
		restrict: 'E',
		templateUrl:$rootScope.tpl + 'gui-resizable.html',
		replace:true,
		transclude : true,
		link:function(scope,element,attrs,ctrl,transclude){

			var parent = element.parent();

			var handlers = element.find('.gui-resizable-handler');

			var direction = null;
			var oldOffset = null;
			handlers.mousedown(function(event){
				direction = $(event.target).attr('direction').split('-');
				console.log(direction)
			})

			$(document).mouseup(function(event){
				direction = null;
				oldOffset = null;
			})

			
			$(document).mousemove(function(event){

				if(!direction) return


					var offset = {top: event.clientY, left: event.clientX};
				if(!oldOffset){
					oldOffset = offset;
					return ;
				}

				var change = {}
				change.width = offset.left - oldOffset.left;
				change.height = offset.top - oldOffset.top;
				oldOffset = offset;

				if(direction.length == 2){
					resizeHandler[direction[0]](parent,change);
					resizeHandler[direction[1]](parent,change);
				}else{
					resizeHandler[direction[0]](parent,change);
				}

			})


			


		}
	};
}]);


var resizeHandler = {}

resizeHandler.up = function (target,change){

	target.height(target.height() - change.height);
	var position = target.position(); 
	target.css('top',position.top + change.height);
}


resizeHandler.down = function(target,change){
	target.height(target.height() + change.height);
}


resizeHandler.left = function(target,change){
	target.width(target.width() - change.width);
	var position = target.position(); 
	target.css('left',position.left + change.width);

}

resizeHandler.right = function(target,change){
	target.width(target.width() + change.width);
}

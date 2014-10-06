var linuxGui = require('../linux-gui');
/*
* drag move范围外鼠标移动，跟随移动，但不出范围，待实现.
*/
linuxGui.directive('guiDrag',['$rootScope',function($rootScope) {
	return {
		restrict:'E',
		scope:{
			dragBy:'@',
			dragIn:'@',
			dragScope:'@',
			// dragMove:'@', 
		},
		link:function(scope,element,attrs){
			console.log('guiDrag')
			dragBody = element.parent();
			var dragBy 
			if(scope.dragBy){
				dragBy = dragBody.find(scope.dragBy);
			}else{
				var dragBy = dragBody;
			}
			var dragIn = scope.dragIn  || dragBody.offsetParent();

			// var dragMove = scope.dragMove || dragIn;
			// dragMove = $(dragMove);

			dragIn = $(dragIn);
			

	

			var dragScope = scope.dragScope || true;
			var mousedown = false;


			
			dragBy.mousedown(function(){
				mousedown = true;
				dragBody.css('transition','none');
				dragBy.css("cursor", 'move');

			})


			$(document).mouseup(function(){
				

				mousedown = false;
				oldOffset = null;
				dragBy.css("cursor", 'auto');
			})


			var oldOffset = null;

			dragIn.mousemove(function(event){
				if(!mousedown) return;

				var offset = {top: event.clientY, left: event.clientX};;
				if(!oldOffset){
					oldOffset = offset;
					return;
				}

				var position = dragBody.position();
				var left = position.left + (offset.left - oldOffset.left);
				var top = position.top + (offset.top - oldOffset.top);

				// 范围限定在 dragIn之内
				if(dragScope == true){
					if(left < 0 || top < 0 || left+dragBody.width() > dragIn.width() || top+dragBody.height() > dragIn.height()){
						return;
					}
					// left = left < 0 ? 0 : left;
					// top = top < 0 ? 0 : top; 
					// left = left+dragBody.width() > dragIn.width() ? dragIn.width() - dragBody.width() : left; 
					// top = top+dragBody.height() > dragIn.height() ? dragIn.height() - dragBody.height() : top;
				}


				dragBody.css('left',left);
				dragBody.css('top',top);
				oldOffset = offset;

			})
			


		},/*-  link -*/
	};
}]);



var linuxGui = require('../linux-gui');

linuxGui.directive('guiDrag',['$rootScope',function($rootScope) {
	return {
		restrict:'A',
		scope:{
			dragBy:'@',
			dragIn:'@',
			dragScope:'@',
		},
		link:function($scope,$element,$attrs){

			var dragBy 
			if($scope.dragBy){
				dragBy = $element.find($scope.dragBy);
			}else{
				var dragBy = $element;
			}

			var dragIn = $scope.dragIn  || $element.parent();
			dragIn = $(dragIn);

			var dragScope = $scope.dragScope || true;
			var mousedown = false;



			dragBy.mousedown(function(){
				console.log('mousedown')
				mousedown = true;
				$element.css('transition','none');
				dragBy.css("cursor", 'move');

			})


			$(document).mouseup(function(){
				console.log('mouseup')

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

				var position = $element.position();
				var left = position.left + (offset.left - oldOffset.left);
				var top = position.top + (offset.top - oldOffset.top);

				console.log(dragScope)
				// 范围限定在 dragIn之内
				if(dragScope == true){
					if(left < 0 || top < 0 || left+$element.width() > dragIn.width() || top+$element.height() > dragIn.height()){
						return;
					}
				}


				$element.css('left',left);
				$element.css('top',top);
				oldOffset = offset;

			})
			


		},/*-  link -*/
	};
}]);



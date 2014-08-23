var linuxGui = require('../linux-gui');

linuxGui.directive('guiDraggable',['$rootScope',function($rootScope) {
	return {
		restrict:'A',
		scope:{
			dragBy:'@',
			dragIn:'@',
			guiDraggable:'@'
		},
		link:function($scope,$element,$attrs){

			


			var dragBy = $element.find($scope.dragBy)
			var dragIn = $scope.dragIn =  $scope.dragIn || $element.parent();
			dragBy.css("cursor", 'move');




			$(dragBy).on('mousedown',function(event){
				

				if($scope.guiDraggable == 'false'){
					return
				}

				$scope.mousedown = true;
				$element.css('transition','none');

				
			})



			$(document).on('mouseup',function(){

				$scope.mousedown = false;
	

				if($scope.mousemove){
		

					$scope.mousemove = false;
					$scope.removeWatchMouseOffset();
				}
			})



			$(dragIn).on('mousemove',function(event){
				if($scope.mousedown){
					// mousedown and mousemove both are true start to move
					if(!$scope.mousemove){ 
						$scope.removeWatchMouseOffset = $scope.$watch('mouseOffset',changePosition);
						$scope.mousemove = true;
					}
			
					$scope.mouseOffset = {top: event.clientY, left: event.clientX};
					$scope.$apply();
				}
			});




			function changePosition(nValue,oValue){

				if(!nValue || !oValue) return;
				var offset = $element.position();
				$element.css('left',offset.left + (nValue.left - oValue.left))
				$element.css('top',offset.top + (nValue.top - oValue.top))
			};

		},/*-  link -*/
	};
}]);



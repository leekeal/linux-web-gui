var linuxGui = require('../linux-gui');

linuxGui.directive('guiDraggable',['$rootScope',function($rootScope) {
	return {
		restrict:'A',
		scope:{
			dragBy:'@',
		},
		link:function($scope,$element,$attrs){
			var dragBy = $element.find($scope.dragBy)
	
			dragBy.css("cursor", 'move');


			$(dragBy).on('mousedown',function(){
				$scope.mousedown = true;
				$element.css('transition','none');
				
			})

			$(dragBy).on('mouseup',function(){
				$scope.mousedown = false;
				$scope.dragStart = false;
				$scope.removeWatchMouseOffset();
				

			})
			// $('.screen-body').on('mouseleave',function(event){
			// 	$scope.mousedown = false;
			// 	$scope.dragStart = false;
			// 	$scope.removeWatchMouseOffset();
				
			// });


			$('.screen-body').on('mousemove',function(event){

				if($scope.mousedown){
					if(!$scope.dragStart){
						$scope.removeWatchMouseOffset = $scope.$watch('mouseOffset',changePosition);
						$scope.dragStart = true;
					}

					$scope.mouseOffset = {top: event.clientY, left: event.clientX};
					$scope.$apply();
				}
			});





			function changePosition(nValue,oValue){
				if(!nValue || !oValue) return;
				var offset = $element.offset();
				$element.css('left',offset.left + (nValue.left - oValue.left))
				$element.css('top',offset.top + (nValue.top - oValue.top))
			};

		},
	};
}]);



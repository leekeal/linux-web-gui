var linuxGui = require('../linux-gui');


/**
*Gui instance
*/
linuxGui.directive('guiInstance',['$rootScope',function($rootScope) {
	return {
		restrict: 'E',
		templateUrl: $rootScope.tpl + 'gui-instance.html',
		scope:true,
		replace:true,
		controller:'guiInstanceCtrl',
		link:function(scope,element){
			console.log('guiInstance')

		}
	};
}]);




linuxGui.controller('guiInstanceCtrl',['$scope','$element',function($scope,$element){
	var events = $scope.events = {}
	var options = $scope.options = {};

	events.fullscreenToggle = function(){


		if(!$scope.guiScreenFull){
			options.offset = $element.offset();
			options.width = $element.width();
			options.height = $element.height();
			updateElement({top:0,left:0},'100%','100%')
			$scope.guiScreenFull = true;
		}else{
			$scope.guiScreenFull = false;
			updateElement(options.offset,options.width,options.height)
		}
	}


	function updateElement(offset,width,height){
		$element.css('transition','all 0.5s ease-in-out');
		$element.width(width);
		$element.height(height)
		$element.offset(offset);
	}

}])



/**
*Gui desktop toolbar
*/

linuxGui.controller('guiDesktopToolbarCtrl',['$scope',function($scope){
	var events = $scope.events = {}
	var options = $scope.options = {};

}])
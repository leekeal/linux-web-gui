var angular = require('angular');
var linuxGui = angular.module('linuxGui', []); //创建一个angular模块

linuxGui.run(['$rootScope',function($rootScope){
	$rootScope.tpl = 'linux-web-gui/templates/'
}])

module.exports = linuxGui;
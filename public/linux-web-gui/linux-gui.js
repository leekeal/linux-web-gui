var angular = require('angular');
var linuxGui = angular.module('linuxGui', []); //创建一个angular模块

linuxGui.run(['$rootScope',function($rootScope){
	$rootScope.events = {}; /*初始化事件对象，方面基础的控制器按约定添加事件*/
	$rootScope.tpl = 'linux-web-gui/templates/'
}])

module.exports = linuxGui;
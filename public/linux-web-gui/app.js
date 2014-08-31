// var angular = require('angular');


// var linuxGui = angular.module('linuxGui', []); //创建一个angular模块
var linuxGui = require('./linux-gui')




//load services
require('./services/fs-socket')(linuxGui); //创建一个测试控制器


//load directives
require('./directives/screen');
require('./directives/gui-instance');
require('./directives/gui-window');
require('./directives/gui-drag');
require('./directives/gui-resizable');
require('./directives/gui-resize-reposition');


// load controllers


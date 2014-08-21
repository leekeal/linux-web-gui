// var angular = require('angular');


// var linuxGui = angular.module('linuxGui', []); //创建一个angular模块
var linuxGui = require('./linux-gui')
var controller = linuxGui.controller; 




//load services
require('./services/fs-socket')(linuxGui); //创建一个测试控制器


//load directives
require('./directives/screen');

// load controllers
require('./controllers/folder-ctrl')(controller) 

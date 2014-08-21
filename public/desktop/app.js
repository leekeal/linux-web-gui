var angular = require('angular');


var desktop = angular.module('desktop', []); //创建一个angular模块
var controller = desktop.controller; 


//load services
require('./services/fs-socket')(desktop) //创建一个测试控制器


// load controllers
require('./controllers/test-ctrl')(controller) //创建一个测试控制器


require('./controllers/folder-ctrl')(controller) 

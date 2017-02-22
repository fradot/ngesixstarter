import angular from 'angular';

let homeModule = angular.module('app.home', []);

import HomeConfig from './home.config';
homeModule.config(HomeConfig);

// Controllers
import HomeController from './home.controller';
homeModule.controller('HomeController', HomeController);


export default homeModule;

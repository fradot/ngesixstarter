import angular from 'angular';

import UsersService from './services/users-service.js';
import UsersController from './controllers/users-controller.js';

export default angular.module('ngesixstarter', [])
        .service('UsersService', UsersService)
        .controller('UsersController',['UsersService',UsersController]);

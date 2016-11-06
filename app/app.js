import angular from 'angular';

import UsersService from './services/users-service.js';

export default angular.module('api.users', [])
        .service('UsersService', UsersService);

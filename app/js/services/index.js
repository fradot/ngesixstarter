import angular from 'angular';

let servicesModule = angular.module('app.services', []);

import UsersService from './users.service';
servicesModule.service('UsersService', UsersService);

export default servicesModule;

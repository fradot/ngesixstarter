import angular from 'angular';
import appConstants from './config/app.constants';
import appConfig from './config/app.config';
import 'angular-ui-router';


// TODO: N.B. https://github.com/gothinkster/angularjs-realworld-example-app
import './services';
import './home';

const requires = [
  'ui.router',
  'app.services',
  'app.home'
];

export default angular.module('ngesixstarter', requires)
        .constant('AppConstants', appConstants)
        .config(appConfig);

angular.bootstrap(document, ['ngesixstarter'], {
  strictDi: true
});

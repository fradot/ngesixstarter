function HomeConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.home', {
    url: '/',
    controller: 'HomeController',
    controllerAs: '$ctrl',
    templateUrl: './js/home/home.html',
    title: 'Home'
  });

}

export default HomeConfig;

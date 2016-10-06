'use strict';

angular.module('nightlife.routes',[])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('home', {
    url: '/home',
    templateUrl: 'views/home.html',    
    controller: 'HomeCtrl'
  })
  .state('signin', {
    url: '/signin',
    templateUrl: 'views/signin.html'
  })
  .state('signup', {
    url: '/signup',
    templateUrl: 'views/signup.html'
  })

  $urlRouterProvider.otherwise('/home');
})
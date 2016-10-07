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
    templateUrl: 'views/signin.html',
    controller: 'SigninCtrl'
  })
  .state('signup', {
    url: '/signup',
    templateUrl: 'views/signup.html',
    controller: 'SignupCtrl'
  })

  $urlRouterProvider.otherwise('/home');
})
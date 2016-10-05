'use strict';

var app = angular.module("nightlife", [
  'ui.router'])
  // 'nightlife.controllers',
  // 'nightlife.services'])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('navbar',{
    url: "",
    templateUrl: "views/navbar.html",
    controller: function($scope, $http) {
        // (localStorage.token)
        // ? $scope.loggedOn = true;
        // : $scope.loggedOn = false;
        $scope.loggedOn = false;
    },
    abstract: true
  })

  .state('navbar.home', {
    url: '/home',
    templateUrl: 'views/home.html',    
    controller: function($scope, $http) {
        console.log('yes');

        // $http.get('/api').then(function(x) {
        //   console.log(x);
        // })

        $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
    }
  })
  .state('navbar.signin', {
    url: '/signin',
    templateUrl: 'views/signin.html'
  })
  .state('navbar.signup', {
    url: '/signup',
    templateUrl: 'views/signup.html'
  })

  $urlRouterProvider.otherwise('/home');
})

 // views: {
  // 	'side-menu-bb': {
  // 		templateUrl: "views/home.html",
  // 		// controller: 'ScheduleCtrl'
  // 	}
  // }
'use strict';

angular.module('nightlife.controllers')

.controller('HomeCtrl', function($scope, $state, $timeout, User, Api) { 
    $scope.auth = User.isAuthenticated();
    // $scope.auth = false
    $scope.loading = true;
    $scope.nodata = false;
    
    (localStorage.city)
    ? $scope.city = localStorage.city
    : $scope.city = ''
    
    $scope.signout = function() {
      localStorage.removeItem("token");
      $state.go("signin");
    }

    $scope.goingTo = function(bar) {
      console.log(bar.id);
    }

    $scope.getCity = function(city) {
      console.log(city);
      $scope.city = city;
      $scope.loading = true;
      $scope.nodata = false;
      if(city === "Dallas" || city === '') {
       $scope.data = Api.barsInDallas();
       console.log($scope.data);
       $scope.loading = false; 
      }
      else {
        Api.barsInCity("New York").then(function(json) {
          console.log(json)
          $scope.data = json.data.businesses
          $scope.loading = false;
          
          if(typeof $scope.data === "undefined"){
            $scope.nodata = true;
          }
        })
      }
    }
    
    $scope.data = Api.barsInDallas()
    $scope.loading = false;
})
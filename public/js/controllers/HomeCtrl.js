'use strict';

angular.module('nightlife.controllers')

.controller('HomeCtrl', function($scope, $state, $timeout, User, Api) { 
    $scope.auth = User.isAuthenticated();
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
      if($scope.auth) {
        User.goingToBar(bar.id)
      }
      else {
        $state.go("signup");
      }
    }

    $scope.getCity = function(city) {
      $scope.city = city;
      $scope.loading = true;
      $scope.nodata = false;
      if(city === "Dallas" || city === '') {
       $scope.data = Api.barsInDallas();
       console.log($scope.data);
       $scope.loading = false; 
      }
      else {
        Api.barsInCity(city).then(function(json) {
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

    $scope.data.map((x)=> {
      x.going = 0;
    })
    $scope.loading = false;
    console.log($scope.data);
})
'use strict';

angular.module('nightlife.controllers')

.controller('HomeCtrl', function($scope, $http, $timeout, Api) {
    console.log('yes');
    $scope.auth = false;
    $scope.loading = true;
    $scope.nodata = false;
    (localStorage.city)
    ? $scope.city = localStorage.city
    : $scope.city = ''
    
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
        // Api.barsInCity("New York")
        $http.get('/api/yelp?city='+city).then(function(json) {
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
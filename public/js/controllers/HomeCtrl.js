'use strict';

angular.module('nightlife.controllers')

.controller('HomeCtrl', function($scope, $state, $timeout, User, Bar, Api) { 
    $scope.auth = User.isAuthenticated();
    $scope.loading = true;
    $scope.nodata = false;
    
    (localStorage.getItem('city'))
    ? $scope.city = localStorage.getItem('city')
    : $scope.city = ''
    
    $scope.signout = function() {
      localStorage.removeItem("token");
      localStorage.removeItem("email");
      $state.go("signin");
    }

    $scope.goingTo = function(bar) {
      if($scope.auth) {
        // $scope.loading = true;
        Bar.goingToBar(bar.id).then(function(newBar) {
          refreshPage();
        })
      }
      else {
        $state.go("signup");
      }
    }

    $scope.getCity = function(city) {
      getCity(city);
    }
    
    // $scope.data = Api.barsInDallas()
    getCity($scope.city);
    // refreshPage();

    function getCity(city) {
      $scope.city = city;
      localStorage.setItem('city', city);
      $scope.loading = true;
      $scope.nodata = false; 
      if(city === "Dallas" || city === '') {
       $scope.data = Api.barsInDallas();
       refreshPage();
       $scope.loading = false; 
      }
      else {
        Api.barsInCity(city).then(function(json) {
          console.log(json)
          $scope.data = json.data.businesses
          refreshPage();
          $scope.loading = false;
          
          if(typeof $scope.data === "undefined"){
            $scope.nodata = true;
          }
        })
      }
    }

    function refreshPage() {
      $scope.data.map((x)=> {
        x.going = 0;
        x.style = '';
      })
      Bar.listBars().then(function(list) {
        $scope.bars = list.data
        $scope.data.map((x) => {
          $scope.bars.map((y) => {
            if(x.id == y.barid && ((y.going % 2) > 0)) {
              x.going++;
              if(localStorage.getItem('email') === y.email) {
                x.style = 'success';
              }
            }
          })
        })
        $scope.loading = false;
      });
    }
})
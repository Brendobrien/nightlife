angular.module('nightlife.controllers')

.controller('SigninCtrl', function ($scope, $http, $state, User) {
  $scope.error = "";
  $scope.auth = User.isAuthenticated;

  $scope.signinUser = function(email, password) {
    if(!validateEmail(email)) {
      $scope.error = "Choose a valid email";
    }
    else if(typeof password === "undefined" || password.length < 3) {
      $scope.error = "Incorrect passowrd";
    }
    else {
      console.log("ye");
      $http.post('/signin', { email, password })
      .then(response => {
        localStorage.setItem('email', email);
        localStorage.setItem('token', response.data.token);
        $state.go('home');
      })
      .catch((error) => {
        $scope.error = "Signin failed - don't repeat emails";
      });
    }
  }

  function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
})
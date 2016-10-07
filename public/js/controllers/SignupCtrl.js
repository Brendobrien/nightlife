angular.module('nightlife.controllers')

.controller('SignupCtrl', function ($scope, $http, $state) {
  $scope.error = "";

  $scope.signupUser = function(email, password, passwordConfirm) {
    // $scope.error = "Choose a valid email";
    // console.log(validateEmail(email));
    if(!validateEmail(email)) {
      $scope.error = "Choose a valid email";
    }
    else if(typeof password === "undefined" || password.length < 3) {
      $scope.error = "Choose a longer password";
    }
    else if(password !== passwordConfirm) {
      $scope.error = "Make sure your passwords match";
    }
    else {
      // $state.go('home');
      console.log("ye");
      $http.post('/signup', { email, password })
      .then(response => {
        localStorage.setItem('token', response.data.token);
        $state.go('home');
      })
      .catch(() => {
        console.log('error')
      });
    }
  }

  function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
})
angular.module('nightlife.controllers')

.controller('SigninCtrl', function ($scope, $http, $state) {
  $scope.signinUser = function(email, password) {
    console.log(email, password);
    $state.go('home');

    // $http.post('/signin', { email, password })
    // .then(response => {
    //   localStorage.setItem('token', response.data.token);
    //   $state.go('home');
    // })
    // .catch(() => {
    //   console.log('error')
    // });
  }
})
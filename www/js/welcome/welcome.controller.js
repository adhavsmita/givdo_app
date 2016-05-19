(function () {
  'use strict';

  angular
    .module('givdo.welcome')
    .controller('WelcomeController', [
      '$state',
      '$rootScope',
      '$ionicLoading',
      '$cordovaFacebook',
      'authService',
      WelcomeController
    ]);


    function WelcomeController($state, $rootScope, $ionicLoading, $cordovaFacebook, authService) {
      var vm = this;

      vm.facebookSignIn = facebookSignIn;


      function loginSuccess() {
        $ionicLoading.hide();
        $state.go('profile');
      }

      function fbLoginSuccess(response) {
        authService
          .signup(response.authResponse)
          .then(loginSuccess);
      }

      function fbLoginError(error) {
        $ionicLoading.hide();
      }

      function facebookSignIn() {
        $ionicLoading.show({ template: 'Signing in...' });

        $cordovaFacebook
          .getLoginStatus()
          .then(function(response) {
            if (response.status === 'connected') {
              authService
                .login(response.authResponse)
                .then(loginSuccess)
                .catch(function (error) {
                  console.log(error);
                  $ionicLoading.hide();
                });
            } else {
              var facebookPermissions = ['email', 'user_friends', 'user_about_me'];
              $cordovaFacebook.login(facebookPermissions, fbLoginSuccess, fbLoginError);
            }
          });
      }
    }

})();

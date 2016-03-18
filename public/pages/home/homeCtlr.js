angular.module('App')
  .controller('HomeController', function($location, $scope, $state, $localStorage, $interval, homeFactory) {
    var vm = this;
    vm.socket = io();
    vm.spinner = true;
    vm.dataLoad = false;
    vm.usernameLength = false;
    vm.user = {
      username: ''
    };

    vm.saveUserName = function() {
      $localStorage.username = vm.user.username;
      $state.go('chatRoom');
    }

    vm.reset = function() {
      vm.user.username = '';
    }

  });

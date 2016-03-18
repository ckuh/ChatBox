angular.module('App')
  .controller('ChatRoomController', function($location, $scope, $state, $localStorage, $interval, homeFactory) {
    var vm = this;
    vm.socket = io();
    vm.spinner = true;
    vm.dataLoad = false;
    vm.plural = {};
    vm.user = {
      username: $localStorage.username
    }
    vm.chatLog = [];

    vm.init = function() {
      vm.socket.emit('userLogin', vm.user);
    }

    vm.sendUserInput = function() {
      console.log(vm.user.msg);
      vm.user.room = 'main';
      vm.socket.emit('sendUserInput', vm.user);
      vm.user.msg = '';
    }

    vm.socket.on('userLogin', function(data) {
      $scope.$apply(function() {
        if (data.userCount > 1) {
          vm.plural.verb = 'are';
          vm.plural.noun = 'users';
        } else {
          vm.plural.verb = 'is';
          vm.plural.noun = 'user';
        }
        vm.user = data;
        console.log(vm.user);
      })
    })

    vm.socket.on('sendUserInput', function(data) {
      $scope.$apply(function() {
        vm.chatLog.push({
          user: data.username,
          msg: data.msg
        })
      })
    })

    vm.init();
  })
  .directive('myRepeatDirective', function() {
    return function(scope) {
      if (scope.$last) {
        document.getElementById('scrollTop').scrollTop = document.getElementById('scrollTop').scrollHeight;
      }
    };
  });

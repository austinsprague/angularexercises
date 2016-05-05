var app = angular.module('app', []);

app.controller('NumberController', function($scope){
  $scope.vm = {};
  $scope.vm.number = 5;
  $scope.pickRandomNumber = function () {
    $scope.vm.number = Math.floor(Math.random()*10) + 1;
  }
});

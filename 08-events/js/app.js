var app = angular.module('app', []);

app.controller('NumberController', function($scope){
  $scope.vm = {};
  $scope.vm.number = 5;
  $scope.pickRandomNumber = function () {
    $scope.vm.number = Math.floor(Math.random()*10) + 1;
  }
});

app.controller('WordController', function($scope){
  $scope.wc = {};
  $scope.wc.word;
  $scope.reverseWord = function reverse() {
  $scope.wc.word = $scope.wc.word.split('').reverse().join('');
  }
});

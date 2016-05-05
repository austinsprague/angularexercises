var app = angular.module('app', []);

app.controller('WordController', function($scope){
  $scope.wc = {};
  $scope.wc.word;
  $scope.reverseWord = function reverse() {
  $scope.wc.word = $scope.wc.word.split('').reverse().join('');
  }
});

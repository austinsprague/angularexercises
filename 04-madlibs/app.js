var app1 = angular.module('app1', []);

app.controller('ctrl1', function($scope) {
  $scope.boysName;

  $scope.generate = function() {
    $scope.language = $scope.boysName
  }
})

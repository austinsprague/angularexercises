var app = angular.module("firstApp", []);

app.controller("MyFirstController", function($scope){
  $scope.fc = {};
  $scope.fc.name = "Severus Snape";
})


app.controller("ExercisesController", function($scope){
  $scope.ec = {};
  $scope.ec.FavColor = "Blue";
  $scope.ec.secondsInACentury = 100 * 365 * 24 * 60 * 60;
  $scope.ec.rightNow = Date.now();
})

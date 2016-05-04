var app = angular.module('app', []);

app.controller ('NamesController', function($scope) {
  $scope.vm = {};
  $scope.vm.names = ['Harry', 'Ron', 'Hermione', 'Sirius', 'Hedwig', 'Tonks'];

});

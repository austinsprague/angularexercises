var app = angular.module('app', []);

app.controller('PingPongController', function($scope){
  $scope.vm = {};
  $scope.vm.max = Math.max('11');
  $scope.vm.players= [{
    number: 1,
    points: 0,
    wins: 0,
    serving: true
  },{
    number: 2,
    points: 0,
    wins:0,
    serving: false
  }];
  $scope.Reset = function(){
    this.vm.players[0].points = 0;
    this.vm.players[1].points = 0;
  };
  $scope.AddWin = function(player) {
    player.wins++;
  };
  // $scope.Serving = function(index) {
  //   this.vm.players[index].points +=1;
  //   var twoPoints = (this.vm.players[0] + this.vm.players[1]) % 2 === 0;
  //   if (twoPoints){
  //     this.vm.players[0].serving != this.vm.players[0].serving;
  //     this.vm.players[1].serving != this.vm.players[1].serving;
  //   };
});

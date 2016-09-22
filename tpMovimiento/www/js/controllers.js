angular.module('starter.controllers', ['ngCordova'])

.controller('DashCtrl', function($scope,$timeout,$http,$state) {


$scope.miBoton = false;
 var messagesRef = new Firebase('https://tptrivia.firebaseio.com/usuarios');


  $scope.enviarUsuario = function()
  {
  $scope.miBoton = true;
    var name = $('#nameInput').val();
    messagesRef.push({usuario:name});
    $state.go('tab.chats');
  }

})

.controller('ChatsCtrl', function($scope,$timeout,$window,$state,$cordovaVibration,$cordovaNativeAudio,$ionicPlatform) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});



})

.controller('AccountCtrl', function($scope) {

})

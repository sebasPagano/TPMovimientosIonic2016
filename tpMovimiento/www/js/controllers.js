angular.module('starter.controllers', ['ngCordova'])

.controller('InicioCtrl', function($scope,$timeout,$http,$state) {


 $scope.miBoton = false;
 var messagesRef = new Firebase('https://tppiano-c5592.firebaseio.com/usuarios');


  $scope.enviarUsuario = function()
  {
  $scope.miBoton = true;
    var name = $('#nameInput').val();
    messagesRef.push({usuario:name});
    $state.go('tab.juego');
  }

})

.controller('JuegoCtrl', function($scope,$timeout,$window,$state,$cordovaNativeAudio,$ionicPlatform,$cordovaDeviceMotion) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
      $scope.bocaarriba=0;
      $scope.bocaabajo=0;
      $scope.abajo=0;
      $scope.arriba=0;
      $scope.izquierda=0;
      $scope.derecha=0;

      $scope.x = 0;
      $scope.y = 0;
      $scope.z = 0;
      $scope.timeStamp;
      $scope.imagen= "img/homero.png";



    // watch Acceleration
    var options = { frequency: 1000 };
     try{
          document.addEventListener("deviceready", function () {
          var watch = $cordovaDeviceMotion.watchAcceleration(options);
          watch.then(null,function(error) {

        },function(result) {

        if(result.x > 5 && $scope.izquierda==0) 
        {
          $cordovaNativeAudio.play('Doh');
          $scope.imagen= "img/HomeroDuh.png";
     
          $scope.bocaarriba=0;
          $scope.bocaabajo=0;
          $scope.abajo=0;
          $scope.arriba=0;
          $scope.izquierda=1;
          $scope.derecha=0;


          $scope.x = result.x;
          $scope.y = result.y;
          $scope.z = result.z;
          $scope.timeStamp = result.timestamp;
        }

         if(result.y > 5 && $scope.abajo==0)
        {
          $cordovaNativeAudio.play('Nelson');
          $scope.imagen= "img/Nelson.png";
 


          $scope.bocaarriba=0;
          $scope.bocaabajo=0;
          $scope.abajo=1;
          $scope.arriba=0;
          $scope.izquierda=0;
          $scope.derecha=0;
        }
         if(result.y < -5 && $scope.arriba==0)
        {
          $cordovaNativeAudio.play('RisaHomero');
          $scope.imagen= "img/homero.png";
    


          $scope.bocaarriba=0;
          $scope.bocaabajo=0;
          $scope.abajo=0;
          $scope.arriba=1;
          $scope.izquierda=0;
          $scope.derecha=0;
        }
        if(result.x < -5 && $scope.derecha==0)
        {
          $cordovaNativeAudio.play('Eructo');
          $scope.imagen= "img/Barney.png";
          
         

          $scope.bocaarriba=0;
          $scope.bocaabajo=0;
          $scope.abajo=0;
          $scope.arriba=0;
          $scope.izquierda=0;
          $scope.derecha=1;
        }
        if(result.z < -9 && result.z > -10 && $scope.bocaabajo ==0)
        {
          $cordovaNativeAudio.play('Burns');
          $scope.imagen= "img/Burns.png";

          $scope.bocaarriba=0;
          $scope.bocaabajo=1;
          $scope.abajo=0;
          $scope.arriba=0;
          $scope.izquierda=0;
          $scope.derecha=0;
        }

         if(result.z > 10.1 && result.z < 10.9 && $scope.bocaarriba==0)
        {

          $cordovaNativeAudio.play('ayCaramba');
          $scope.imagen= "img/Bart.png";

          $scope.bocaarriba=1;
          $scope.bocaabajo=0;
          $scope.abajo=0;
          $scope.arriba=0;
          $scope.izquierda=0;
          $scope.derecha=0;
        }
         if(result.x <1 && result.x >-1 && result.y <1 && result.y >-1)
        {
          $scope.imagen= "img/Simpsons.png";       
         }

      });

      }, false);

    }
    catch(ex)
    {
      alert(ex);
    }



})

.controller('AutorCtrl', function($scope) {

})

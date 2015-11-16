var app = angular.module('textShadowMaker', ['color.picker']);

app.controller('AppCtrl', ['$scope', function($scope){

  $scope.x = 0;
  $scope.y = 0;
  $scope.blur = 0;
  $scope.myColor = "#000";
  $scope.diameter = 0;


  // @function func-shadow($length, $color) {
  //     $shadow: ();
  //     @for $i from 1 through $length {
  //         $shadow: append($shadow, $i+px $i+px ($color - 1), comma);  
  //     }
  //     @return $shadow;
  // }

  // @mixin text-shadow($call-length, $call-color) {
  //     text-shadow: 4px 4px 30px darken($call-color, 8%), func-shadow($call-length, $call-color);
  // }

  $scope.shadow = function(len) {
    
  }

}]);
    

// $scope.showCard = function(card) {    
//   var allcards = document.querySelectorAll('.mycard');

//   angular.forEach(allcards, function(item) {
//     item.classList.remove('show');
//   });

//   var selected = document.querySelector('#'+card);
//   selected.classList.add('show');
// };
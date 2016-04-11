'use strict';

/**
 * @ngdoc function
 * @name sapientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sapientApp
 */
angular.module('sapientApp')
  .controller('AboutCtrl', ['$scope', '$http', 'CartDataService',  function ($scope, $http, CartDataService) {

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);

// 'use strict';
//
// /**
//  * @ngdoc function
//  * @name sapientApp.controller:AboutCtrl
//  * @description
//  * # AboutCtrl
//  * Controller of the sapientApp
//  */
// angular.module('sapientApp')
//   .controller('AboutCtrl', ['$scope', '$http', function ($scope, $http) {
//     $scope.getAllData = function(player) {
//     $http.jsonp(
//       'http://jsonp.afeld.me/?url=https://api.myjson.com/bins/19ynm&callback=callbackFN'
//       //'http://api.dribbble.com/players/' + player + '?callback=JSON_CALLBACK'
//     ).success(function(data){
//       console.log(data);
//       //$scope.players.push(dribbble_player.name);
//     }).error(function(){
//       // handle errors
//     });
//   },
//     $scope.awesomeThings = [
//       'HTML5 Boilerplate',
//       'AngularJS',
//       'Karma'
//     ];
//   }]);

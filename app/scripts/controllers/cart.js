'use strict';

/**
 * @ngdoc function
 * @name sapientApp.controller:CartCtrl
 * @description
 * # CartCtrl
 * Controller of the sapientApp
 */
angular.module('sapientApp')
  .controller('CartCtrl', [ '$scope', 'CartDataService', function ($scope, CartDataService) {
    // var $scope.success   = false,
    //     $scope.error       = false;
    $scope.qty = [];
    var askForPromise = CartDataService.getPromise();
    askForPromise.then(
        // OnSuccess function
        function(answer) {
          //debugger;
          $scope.total = "$19";
          console.log(answer);
          $scope.somethingRight = answer;
          $scope.cartData = answer.data.productsInCart;
          $scope.success = true;
        },
        // OnFailure function
        function(reason) {
          $scope.somethingWrong = reason;
          $scope.error = true;
        }
      )

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);

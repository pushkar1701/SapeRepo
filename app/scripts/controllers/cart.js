'use strict';

/**
 * @ngdoc function
 * @name sapientApp.controller:CartCtrl
 * @description
 * # CartCtrl
 * Controller of the sapientApp
 */
angular.module('sapientApp')
  .controller('CartCtrl', ['$scope', 'CartDataService', function($scope, CartDataService) {
    // var $scope.success   = false,
    //     $scope.error       = false;
    $scope.qty = [];
    var askForPromise = CartDataService.getPromise();
    askForPromise.then(
      // OnSuccess function
      function(answer) {
          //console.log($scope.items);
        $scope.somethingRight = answer;
        $scope.cartData = answer.data.productsInCart;
        $scope.success = true;
        $scope.total = function() {
          var total = 0;
          angular.forEach(answer.data.productsInCart, function(item) {
            //debugger;
            console.log(item.p_quantity);
            console.log(item.p_price);
            total += item.p_quantity * item.p_price;
          })

          return total;
        };
      },
      // OnFailure function
      function(reason) {
        $scope.somethingWrong = reason;
        $scope.error = true;
      }
    );
  }]);

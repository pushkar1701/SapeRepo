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

        $scope.cart = {
          items: []
        };
        $scope.items = [];
        $scope.obj = {
          qty: 1
        };
        console.log(answer.data.productsInCart.length);
        angular.forEach(answer.data.productsInCart, function(item) {
            //debugger;
            $scope.items.push[$scope.obj];
            //total += item.qty * item.p_price;
            console.log($scope.items);
          })
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

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);

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
    $scope.qty = [];
    var askForPromise = CartDataService.getPromise();
    askForPromise.then(
      // OnSuccess function
      function(answer) {
        $scope.somethingRight = answer;
        $scope.cartData = answer.data.productsInCart;
        $scope.success = true;
        $scope.setModalData = function (index){
          $scope.modalData = $scope.cartData[index];
          $scope.appindex=index;
          console.log($scope.modalData);
          //
          // $scope.modalAvailableOption=$scope.cartData[index]
        }

        $scope.total = function() {
          var total = 0;
          angular.forEach(answer.data.productsInCart, function(item) {
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

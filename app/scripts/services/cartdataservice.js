'use strict';

/**
 * @ngdoc service
 * @name sapientApp.CartDataService
 * @description
 * # CartDataService
 * Service in the sapientApp.
 */
angular.module('sapientApp')
  .service('CartDataService', ['$http', '$q', function($http, $q) {
    var deferObject,
      cartdata = {
        getPromise: function() {
          var promise = $http.get('https://api.myjson.com/bins/19ynm&callback=callbackFN'),
            deferObject = deferObject || $q.defer();
          promise.then(
            // OnSuccess function
            function(data) {
              //console.log(data);
              deferObject.resolve(data);
              // This code will only run if we have a successful promise.
            },
            // OnFailure function
            function(reason) {
              console.log(reason);
              deferObject.reject(reason);
              // This code will only run if we have a failed promise.
            });
            return deferObject.promise;
        }
      };
    return cartdata;
  }]);

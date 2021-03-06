'use strict';

/**
 * @ngdoc overview
 * @name sapientApp
 * @description
 * # sapientApp
 *
 * Main module of the application.
 */
angular
  .module('sapientApp', [
    'ngCookies',
    'ngRoute',
    'ngTouch',
    'ngCart'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/cart', {
        templateUrl: 'views/cart.html',
        controller: 'CartCtrl',
        controllerAs: 'cart'
      })
      .otherwise({
        redirectTo: '/cart'
      });
  });

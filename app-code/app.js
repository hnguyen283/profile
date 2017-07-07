/**
 * author: Nguyen Dong Hung
 * 
 * 
 */
"use strict";
var hungApp = angular.module('hungApp', ['ngRoute', 'directiveModule', 'commonModule', 'chart.js']);

hungApp.config(['$routeProvider',
  function ($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'index.html',
        controller: 'HomeController'
      }).when('/:orderId', {
        templateUrl: 'index.html',
        controller: 'HomeController'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
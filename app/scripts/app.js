'use strict';

/**
 * @ngdoc overview
 * @name tttApp
 * @description
 * # tttApp
 *
 * Main module of the application.
 */
angular
  
  // List of modules included within our app
  .module('tttApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.sortable',
    'LocalStorageModule'
  ])

  // Sets up local storage
  .config(['localStorageServiceProvider',function(localStorageServiceProvider){
    localStorageServiceProvider.setPrefix('ls');
  }])

  // Deals with changing the current ng-view
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

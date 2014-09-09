'use strict';

/**
 * @ngdoc function
 * @name tttApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the tttApp
 */
angular.module('tttApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.coolObjects = [
    	{
    		title: 'brothers karamazov',
    		author: 'dostoevsky'
    	},
    	{
    		title: 'atlas shrugged',
    		author: 'rand'
    	},
		{
    		title: 'being and time',
    		author: 'heidegger'
    	},
    	

    ];


  });

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
    		title: 'brothers karamazov'
    	},
    	{
    		title: 'atlas shrugged'
    	},
		{
    		title: 'being and time'
    	},
    	

    ];


  });

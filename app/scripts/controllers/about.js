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

    $scope.theBestBook = {
    	title: 'the very hungry caterpillar',
    	author: 'some guy'
    };

    function book(aTitle, aAuthor) {
    	this.title = aTitle;
    	this.author = aAuthor;
    }

    var cpr = new book('critique of pure reason','kant');
	var geb = new book('godel escher bach','hofstadter');

	$scope.otherBooks = [cpr,geb];    

  });

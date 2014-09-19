'use strict';

/**
 * @ngdoc function
 * @name tttApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the tttApp
 */
angular.module('tttApp')
  .controller('AboutCtrl', function ($scope, localStorageService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.books = [];
    var tmp = localStorageService.get('books');
    if (tmp !== null) {$scope.books = tmp;}

    $scope.$watch('books', function () {
      localStorageService.add('books', $scope.books);
    }, true);

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

    function Book(aTitle, aAuthor) {
    	this.title = aTitle;
    	this.author = aAuthor;
    }

    var cpr = new Book('critique of pure reason','kant');
	var geb = new Book('godel escher bach','hofstadter');

	$scope.otherBooks = [cpr,geb];  
	
	$scope.addBook = function() {
		var aBook = new Book($scope.tome,'random author');
		$scope.books.push(aBook);
		$scope.tome = '';
	};  

  });

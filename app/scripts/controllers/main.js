'use strict';

/**
 * @ngdoc function
 * @name tttApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tttApp
 */
angular.module('tttApp')
  .controller('MainCtrl', function ($scope,localStorageService) {
    
    var todosInStore = localStorageService.get('todos');

	$scope.todos = todosInStore && todosInStore.split('\n') || [];

	$scope.$watch('todos', function () {
	  localStorageService.add('todos', $scope.todos.join('\n'));
	}, true);

    $scope.addToDo = function() {
    	$scope.todos.push($scope.todo);
    	$scope.todo = '';
    };

    $scope.removeToDo = function(index) {
    	$scope.todos.splice(index,1); // 1 - one item to remove at index
    };
  });

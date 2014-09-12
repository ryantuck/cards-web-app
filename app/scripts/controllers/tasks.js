// tasks.js

'use strict';

angular.module('tttApp')
  .controller('TasksCtrl', function ($scope, localStorageService) {
    
    // constructor for creating a new task
    function Task(taskTitle) {

    	this.title 	= taskTitle;
    	this.type 	= 'inbox';
    	this.due 	= Date.parse("October 31, 2014");
    	this.tags 	= [];
    }

    // initially set tasks from local storage data
    $scope.tasks = [];
    var tmp = localStorageService.get('tasks');
    if (tmp != null) $scope.tasks = tmp;

    // instantiate a watcher for changes to tasks
    $scope.$watch('tasks', function () {
      localStorageService.add('tasks', $scope.tasks);
    }, true);

    // create test task set to work with
    var t1 = new Task('get milk');
    var t2 = new Task('buy longboard');
    var t3 = new Task('make 1 million dollars');
    $scope.testTasks = [t1,t2,t3];

    // function for adding new task from input bar
	$scope.addTask = function() {
		
		var x = new Task($scope.newTaskTitle);
		console.log(x.title);

		$scope.tasks.push(x);
		$scope.newTaskTitle = '';
	};

    $scope.currentIndex = 0;

    $scope.editTask = function(index) {
        // open modal and edit particular card
        $scope.editTitle = $scope.testTasks[index].title;
        $scope.currentIndex = index;
        console.log("edit task clicked");
    };

    $scope.saveEdits = function() {
        // save edits entered modal input
        $scope.testTasks[$scope.currentIndex].title = $scope.editTitle;
        console.log('save edits clicked');

    };

  });

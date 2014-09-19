// tasks.js

'use strict';

angular.module('tttApp')
  .controller('TasksCtrl', function ($scope, filterFilter, localStorageService) {
    
    // constructor for creating a new task
    function Task(taskTitle) {

    	this.title 	= taskTitle;
    	this.type 	= 0;
    	this.due 	= Date.parse('October 31, 2014');
    	this.tags 	= [];
    }

    // create test task set to work with
    var t1 = new Task('get milk');
    var t2 = new Task('buy longboard');
    var t3 = new Task('make 1 million dollars');
    var t4 = new Task('drink water');
    var t5 = new Task('become a true hacker');

    $scope.testTasks = [t1,t2,t3,t4,t5];

    // initially set tasks from local storage data
    $scope.tasks = [];
    var tmp = localStorageService.get('tasks');
    if (tmp !== null) {$scope.tasks = tmp;}

    // instantiate a watcher for changes to tasks
    $scope.$watch('tasks', function () {
      localStorageService.add('tasks', $scope.tasks);
    }, true);

    

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
        $scope.editTitle = $scope.tasks[index].title;
        $scope.currentIndex = index;
        var tt = $scope.tasks[index].type;
        $scope.selectedTask = $scope.taskTypes[tt];
        console.log('edit task clicked');

    };

    $scope.saveEdits = function() {
        // save edits entered modal input
        $scope.tasks[$scope.currentIndex].title = $scope.editTitle;
        console.log('save edits clicked');
        console.log($scope.selectedTask.label);
        $scope.tasks[$scope.currentIndex].type = $scope.selectedTask.value;

    };

    $scope.saveInboxEdits = function() {
        $scope.filteredArray[0].title = $scope.inboxEditTitle;
        $scope.filteredArray[0].type = $scope.inboxSelectedTask.value;
    };

    $scope.deleteTask = function(index) {
        // delete given task
        $scope.tasks.splice(index,1);
    };

    $scope.completeTask = function(index) {
        // change type of task to 'done'
        $scope.tasks[index].type = 2;
    };

    $scope.taskTypes = [
        { label:'inbox', value:0 },
        { label:'todo', value:1 },
        { label:'done', value:2 },
    ];

    // set default drop-down values
    $scope.selectedTask = $scope.taskTypes[0];
    $scope.inboxSelectedTask = $scope.taskTypes[0];


    $scope.filteredArray = [];
    $scope.$watch('tasks',function(){
           $scope.filteredArray = filterFilter($scope.tasks, {type:0});
           $scope.inboxEditTitle = $scope.filteredArray[0].title;
           $scope.inboxSelectedTask = $scope.taskTypes[0];

        },true); // the 'true' means any time any data in 'tasks' is changed, this function is run

    $scope.countType = function() {
        var l = $scope.filteredArray.length;
        return l;
    };

  });


















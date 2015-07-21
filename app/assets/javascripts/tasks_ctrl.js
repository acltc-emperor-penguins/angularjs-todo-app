(function() {
  "use strict";

  angular.module("app").controller("tasksCtrl", function($scope) {
    
    $scope.tasks = [
      {
        text: "Mow the lawn",
        completed: false
      },
      {
        text: "Take out trash",
        completed: false
      },
      {
        text: "Feed the rat",
        completed: false
      }
    ];

    $scope.addTask = function(text) {
      if(text) {
        $scope.tasks.push({text: text, completed: false});
        $scope.newTask = null;
      }
    };

    $scope.toggleComplete = function(task) {
      task.completed = !task.completed;
    };

    window.scope = $scope;
  });

}());
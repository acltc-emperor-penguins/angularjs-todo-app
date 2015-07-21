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

    $scope.completeTask = function(index) {
      $scope.tasks.splice(index, 1);
    };

    window.scope = $scope;
  });

}());
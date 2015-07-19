(function() {
  "use strict";

  angular.module("app").controller("tasksCtrl", function($scope) {
    
    $scope.tasks = ["Mow the lawn", "Take out trash", "Feed the cat"];

    $scope.addTask = function(task) {
      $scope.tasks.push(task);
      $scope.newTask = null;
    };

    window.scope = $scope;
  });

}());
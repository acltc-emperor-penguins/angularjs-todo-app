(function() {
  "use strict";

  angular.module("app").controller("tasksCtrl", function($scope) {
    
    $scope.tasks = ["Mow the lawn", "Take out trash", "Feed the cat"];


    window.scope = $scope;
  });

}());
/**
 * Created by netanel on 27/02/15.
 */
angular.module('todos').controller('MainController', function($scope, Todos, $meteorCollection, TodosManager, Data) {
  $scope.todos = $meteorCollection(Todos.collection, false).subscribe('todos');

  $scope.newTask = {
    text : '1'
  };

  $scope.addTodo = function () {
    TodosManager.addTodo($scope.newTask);
    $scope.newTask = {};
  };

  $scope.doCoolThing = function() {
    Data.getData().then(function(response) {
      $scope.response = response;
    }, function(error) {
      $scope.response = 'Error:' + error;
      console.log(error);
    });
  }
});
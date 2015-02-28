/**
 * Created by netanel on 27/02/15.
 */
angular.module('todos').controller('MainController', function($scope, Todos, $meteorCollection, TodosManager) {
  $scope.todos = $meteorCollection(Todos.collection).subscribe('todos');

  $scope.newTask = {
    text : '1'
  };

  $scope.addTodo = function () {
    TodosManager.addTodo($scope.newTask);
    $scope.newTask = {};
  };
});
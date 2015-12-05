/**
 * Created by netanel on 27/02/15.
 */
angular.module('todomvc')
  .controller('MainController', function($scope, Todos, $meteorCollection, TodosManager, Data) {
    $scope.todos = $meteorCollection(Todos.collection).subscribe('todos');

    $scope.newTodo = '';

    $scope.addTodo = function () {
      var todo = {
        title : $scope.newTodo,
        completed : false
      };

      $scope.error = undefined;
      TodosManager.addTodo(todo).then(angular.noop, function(error) {
        $scope.error = error.details;
      });

      $scope.newTodo = '';
    };

    $scope.removeTodo = function(todo) {
      Todos.collection.remove({_id : todo._id});
    };

    $scope.getImageUrl = function() {
      $scope.error = undefined;
      Data.getData().then(function(response) {
        $scope.imageUrl = response.data;
      }, function() {
        $scope.error = 'Failed to get image url from $http';
      });
    }
  });
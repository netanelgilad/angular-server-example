/**
 * Created by netanel on 27/02/15.
 */

angular.module('todos')
  .service('TodosManager', function (Todos, $http, $document) {
    this.addTodo = function (todo) {
      if (todo.text.length < 3) {
        console.log('Error trying to add a todo with less than 3 letters ', todo.text);
      }
      else {
        Todos.collection.insert(todo);
      }
    };

    this.callServer = function() {
      console.log($document);
      return $http.get('http://requestb.in/1divtht1');
    };

    Meteor.publish('todos', function () {
      return Todos.collection.find({});
    });
  })
  .config(function (ServerAPIProvider) {
    ServerAPIProvider.register('TodosManager');
  });
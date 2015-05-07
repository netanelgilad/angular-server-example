/**
 * Created by netanel on 27/02/15.
 */

angular.module('todomvc')
  .service('TodosManager', function (Todos) {
    this.addTodo = function (todo) {
      if (todo.title.length < 3) {
        throw new Meteor.Error(500, undefined, 'Title must be longer than 3 letters');
      }
      else {
        Todos.collection.insert(todo);
      }
    };

    Meteor.publish('todos', function () {
      return Todos.collection.find({});
    });
  })
  .config(function (ServerAPIProvider) {
    ServerAPIProvider.register('TodosManager');
  });
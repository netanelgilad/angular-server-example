/**
 * Created by netanel on 27/02/15.
 */
angular.module('todos')
  .service('TodosManager', function (Todos) {
    this.addTodo = function (todo) {
      if (todo.text.length < 3) {
        console.log('Error trying to add a todo with less than 3 letters ', todo.text);
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
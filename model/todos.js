/**
 * Created by netanel on 27/02/15.
 */
todos = new Meteor.Collection('todos');

if (Meteor.isClient) {
  angular.module('todos').service('Todos', function () {
    this.collection = todos;
  });
}


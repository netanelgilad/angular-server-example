/**
 * Created by netanel on 27/02/15.
 */
angular.module('todomvc').service('Todos', function() {
  this.collection = new Meteor.Collection('todos');
});
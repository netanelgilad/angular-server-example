/**
 * Created by netanel on 27/02/15.
 */
angular.module('todos').service('Todos', function() {
  this.collection = new Meteor.Collection('todos');
});
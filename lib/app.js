/**
 * Created by netanel on 27/02/15.
 */
angular.module('todos', ['angular-meteor']);

if (Meteor.isServer) {
  angular.bootstrap(['todos']);
}
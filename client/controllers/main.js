/**
 * Created by netanel on 27/02/15.
 */

angular.module('todos').controller('MainController', function($scope, Todos, $meteorCollection) {
  var coll = new Mongo.Collection('vens', {
    transform : function (ven) {
      ven.name += ' stam';
      return ven;
    }
  });

  $scope.venues = $meteorCollection(coll, true).subscribe('vens');

  $scope.addObjects = function(count) {
    Meteor.call('addObjects', count);
  };
});
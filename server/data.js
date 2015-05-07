angular.module('todomvc').service('Data', function($http) {
  this.getData = function () {
    return $http.get('http://mockbin.org/bin/aae3f72e-ba4d-4d8a-b701-5545e8cfc9fe');
  };
});

angular.module('todos').service('Data', function($http) {
  this.getData = function () {
    return $http.get('https://www.google.co.il/');
  };
});

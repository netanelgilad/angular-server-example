angular.module('todos').config(function(ServerAPIProvider) {
  ServerAPIProvider.register('Data');
});

angular.module('todos').service('Data', function($http) {
  this.getData = function () {
    return $http.get('https://www.facebook.com/');
  };
});

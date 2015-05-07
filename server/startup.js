angular.module('todomvc').config(function(ServerAPIProvider, $injector) {
  if($injector.has('Data'))
    ServerAPIProvider.register('Data');
});

angular.bootstrap(['todomvc']);
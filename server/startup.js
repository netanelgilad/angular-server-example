angular.module('todos').config(function(ServerAPIProvider, $injector) {
  if($injector.has('Data'))
    ServerAPIProvider.register('Data');
});

angular.bootstrap(['todos']);
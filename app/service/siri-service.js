angular.module('SiriClient').factory('SiriService', function($http) {
  return {
    send: function(msg) {
      return $http({method: 'POST', url: 'http://localhost:8887', data: {message:msg}});
    }
  }
});

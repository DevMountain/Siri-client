angular.module('SiriClient').factory('SiriService', function($http) {
  return {
    send: function(msg) {
      return $http({method: 'GET', url: 'http://localhost:8887', data: {message:msg}});
    }
  }
});

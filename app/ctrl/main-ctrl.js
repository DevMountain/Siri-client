angular.module('SiriClient').controller('MainCtrl', function($scope, SiriService) {
  $scope.messageHistory = [];
  $scope.sendMessage = function() {
    console.log('sendMessage');
    $scope.messageHistory.push($scope.message);
    $scope.message = '';
    SiriService.send($scope.message).then(function(reply) {
      console.log('reply', reply);
      $scope.messageHistory.push('>> '+reply);
    });
  };
});

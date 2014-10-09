angular.module('SiriClient').controller('MainCtrl', function($scope, SiriService) {
  $scope.messageHistory = [];
  $scope.sendMessage = function() {
    console.log('sendMessage');
    $scope.messageHistory.push({text:$scope.message});
    $scope.message = '';
    SiriService.send($scope.message).then(function(response) {
      var reply = response.data.message;
      $scope.messageHistory.push({text: '>> '+reply});
    });
  };
});

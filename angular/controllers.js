app.controller('imageSearcherController', ['$scope', 'imageSearcherService', function($scope, imageSearcherService) {
  imageSearcherService.success(function(data){
    $scope.images = data;
  });
}]);

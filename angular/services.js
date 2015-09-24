app.factory('imageSearcherService', ['$http', function($http){
    return $http.get('https://pixabay.com/api/?username=giibran&key=3069db9066b179dd206e&q=yellow+flower&image_type=photo').success(function(data){
    return data;
  })
  .error(function(err){
    return err;
  });
}]);

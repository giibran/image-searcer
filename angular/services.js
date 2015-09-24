app.factory('imageSearcherService', ['$http', function($http){
    var search = location.search;
    search = search.split("?search=");
    return $http.get('https://pixabay.com/api/?username=giibran&key=3069db9066b179dd206e&q='+ search[1] +'&image_type=photo').success(function(data){
    return data;
  })
  .error(function(err){
    return err;
  });
}]);

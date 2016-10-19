app.controller('bookListController',['$scope','commonService','$routeParams',function($scope,cs,$routeParams){
     $scope.data=[];
     console.dir($routeParams);
      cs.getData($routeParams,function(res){
          console.dir(res);
      })
}])
app.controller('bookListController',['$scope','commonService','$routeParams',function($scope,c_s,$routeParams){
     $scope.data=[];
     console.log($routeParams.id);
      c_s.getData($routeParams.id,function(res){
          $scope.data=res.data;
          console.dir($scope.data);
      })
}])
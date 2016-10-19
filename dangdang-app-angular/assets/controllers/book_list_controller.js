app.controller('bookListController',['$scope','commonService','$routeParams',function($scope,c_s,$routeParams){
     $scope.data=[];
     console.log($routeParams);
      c_s.getData($routeParams.id,function(res){
          $scope.data=res.data.data;
      })
}])
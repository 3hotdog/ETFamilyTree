(function(angular){
    var app=angular.module("etFamlilyTree.module.etlist",["ngRoute","etFamlilyTree.service.etlist","etFamlilyTree.service.filter"]);
    app.config(["$routeProvider",function($routeProvider){
        $routeProvider.when("/:page",{
            controller:"etlistCtrl",
            templateUrl:"./views/etlist.ejs"
        })
    }]);
    app.controller("etlistCtrl",["$scope","$routeParams","searchets",function($scope,$routeParams,searchets){
        // var key=keyword;
        $scope.keyword=keyword;
        searchets.etsByPage($scope.keyword,$routeParams.page,function(data){
            $scope.etlist=data.etlist;
            console.log($scope.etlist);
            $scope.$applyAsync();
        });
        $scope.etInfo=searchets.etInfo;
    }]);

})(angular)
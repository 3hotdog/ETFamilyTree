(function(angular){
    var app=angular.module("etFamlilyTree.module.etlist",["ngRoute","etFamlilyTree.service.etlist"]);
    app.config(["$routeProvider",function($routeProvider){
        $routeProvider.when("/:page",{
            controller:"etlistCtrl",
            templateUrl:"./views/etlist.html"
        })
    }]);
    app.controller("etlistCtrl",["$scope","$routeParams","searchets",function($scope,$routeParams,searchets){
        var key=document.getElementById("key").innerText;
        searchets.etsByPage(key,$routeParams.page,function(data){
            $scope.etlist=data.etlist;
            console.log($scope.etlist);
            $scope.$applyAsync();
        });
        $scope.etInfo=searchets.etInfo;
    }]);
})(angular)
(function (angular) {
    var app=angular.module("analyze.module.relative",["ngRoute","chart.service.relative"]);
    app.config(["$routeProvider",function ($routeProvider) {
        $routeProvider.when("/relative/:et",{
            controller:"relativeChart",
            templateUrl:"./views/relative.html"
        })
    }]);
    app.controller("relativeChart",["$scope","$routeParams","relativeAnalyze",function ($scope,$routeParams,relativeAnalyze) {
        relativeAnalyze.relativeHttp($routeParams.et,function (data) {
            relationChart(data.arr,data.link)
        });
    }])
})(angular)
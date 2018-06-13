(function (angular) {
    var app=angular.module("analyze.module.et",["ngRoute","analyze.service.et"]);
    app.config(["$routeProvider",function ($routeProvider) {
        $routeProvider.when("/et/:et",{
            controller:"etChart",
            templateUrl:"./views/etchart.html"
        })
    }]);
    app.controller("etChart",["$scope","$routeParams","etAnalyze",function ($scope,$routeParams,etAnalyze) {
        etAnalyze.et_stock_invest($routeParams.et,function (data) {
            etTree(data);
        });
    }])
})(angular)
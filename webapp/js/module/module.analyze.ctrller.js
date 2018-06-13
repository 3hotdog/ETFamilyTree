(function (angular) {
    var app=angular.module("analyze.module.ctrller",["ngRoute","analyze.service.ctrller"]);
    app.config(["$routeProvider",function ($routeProvider) {
        $routeProvider.when("/ctrller/:et",{
            controller:"ctrllerChart",
            templateUrl:"./views/ctrller.html"
        })
    }]);
    app.controller("ctrllerChart",["$scope","$routeParams","ctrllerAnalyze",function ($scope,$routeParams,ctrllerAnalyze) {
        ctrllerAnalyze.ctrllerHttp($routeParams.et,function (data) {
            ctrllerChart(data.arr,data.link);
        });
    }])
})(angular)
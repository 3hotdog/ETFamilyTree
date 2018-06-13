(function (angular) {
    var app=angular.module("analyze.module.invest",["ngRoute","analyze.service.invest"]);
    app.config(["$routeProvider",function ($routeProvider) {
        $routeProvider.when("/inves/:et",{
            controller:"investChart",
            templateUrl:"./views/etchart.html"
        });
    }]);
    app.controller("investChart",["$scope","$routeParams","investAnalyze",function ($scope,$routeParams,investAnalyze) {
        investAnalyze.investChart($routeParams.et,function (data) {
            etTree(data);
        });
    }])
})(angular)
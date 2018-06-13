(function (angular) {
    var app=angular.module("analyze.module.stock",["ngRoute","analyze.service.stock"]);
    app.config(["$routeProvider",function ($routeProvider) {
        $routeProvider.when("/stock/:et",{
            controller:"stockChart",
            templateUrl:"./views/stock.html"
        })
    }]);
    app.controller("stockChart",["$scope","$routeParams","stockAnalyze",function ($scope,$routeParams,stockAnalyze) {
        stockAnalyze.stockChart($routeParams.et,function (data) {
            // myChart.setOption({series: {data:data}});
            stockTree(data[0]);
        });

    }])
})(angular)
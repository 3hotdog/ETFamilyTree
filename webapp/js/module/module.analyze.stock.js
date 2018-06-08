(function (angular) {
    var app=angular.module("analyze.module.stock",["ngRoute"]);
    app.config(["$routeProvider",function ($routeProvider) {
        $routeProvider.when("/stock",{
            controller:"stockChart",
            templateUrl:"./views/gqjgt.html"
        })
    }]);
    app.controller("stockChart",["$scope",function ($scope) {
        console.log("stock");
    }])
})(angular)
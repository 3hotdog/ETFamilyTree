(function (angular) {
    var app=angular.module("analyze.module.et",["ngRoute"]);
    app.config(["$routeProvider",function ($routeProvider) {
        $routeProvider.when("/et",{
            controller:"etChart",
            templateUrl:"./views/qyzu.html"
        })
    }]);
    app.controller("etChart",["$scope",function ($scope) {

    }])
})(angular)
(function (angular) {
    var app=angular.module("analyze.module.invest",["ngRoute"]);
    app.config(["$routeProvider",function ($routeProvider) {
        $routeProvider.when("/inves",{
            controller:"investChart",
            templateUrl:"./views/tzzp.html"
        })
    }]);
    app.controller("investChart",["$scope",function ($scope) {
        console.log("inves");
    }])
})(angular)
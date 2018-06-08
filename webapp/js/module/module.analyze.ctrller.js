(function (angular) {
    var app=angular.module("analyze.module.ctrller",["ngRoute"]);
    app.config(["$routeProvider",function ($routeProvider) {
        $routeProvider.when("/ctrller",{
            controller:"ctrllerChart",
            templateUrl:"./views/yskzr.html"
        })
    }]);
    app.controller("ctrllerChart",["$scope",function ($scope) {
        console.log("ctrller");
    }])
})(angular)
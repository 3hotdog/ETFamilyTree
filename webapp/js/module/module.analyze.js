(function (angular) {
    var app=angular.module("analyzeApp",["ngRoute","analyze.module.et","analyze.module.invest",
        "analyze.module.stock","analyze.module.ctrller"]);
    app.config(["$routeProvider",function ($routeProvider) {
        $routeProvider.otherwise({
            redirectTo:"/et"
        })
    }]);
    app.controller("navCtrl",["$scope","$location",function ($scope,$location) {
        $scope.$location=$location;
        $scope.$watch("$location.path()",function (now,old) {
            $scope.path=now;
        });
    }])

})(angular)
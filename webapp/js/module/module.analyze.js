(function (angular) {
    var app=angular.module("analyzeApp",["ngRoute","analyze.module.et","analyze.module.invest",
        "analyze.module.stock","analyze.module.ctrller","analyze.module.relative"]);
    app.config(["$routeProvider",function ($routeProvider) {
        $routeProvider.otherwise({
            redirectTo:"/et/:et"
        })
    }]);
    app.controller("navCtrl",["$scope","$location","$http",function ($scope,$location,$http) {
        $scope.$location=$location;
        $scope.$watch("$location.path()",function (now,old) {
            $scope.et=now.replace(/[^0-9]/ig,"");
            console.log($scope.et);
            $http.post("/etname",{
                params:{et:$scope.et},
                cache:true
            }).success(function (data) {
                $scope.et_name=data.et_name.et_name;
            });
            $scope.path=now;
        });
    }])

})(angular)
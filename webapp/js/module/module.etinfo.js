(function (angular) {
    var app=angular.module("etApp",["ngRoute","etFamlilyTree.module.etlist"]);
    app.config(["$routeProvider",function($routeProvider){
        $routeProvider.otherwise({
            redirectTo:"/1"
        })
    }]);
})(angular)
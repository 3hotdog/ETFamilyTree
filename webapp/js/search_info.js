(function (angular) {
    var app=angular.module("infoApp",["ngRoute"]);
    app.config("$routePaovider",function($routeProvider){
        $routeProvider.when("/searche",{
            controller:"etCtrl",
            templateUrl:"./search_info.ejs"
        })
    });
    app.controller("etCtrl",["$scope",function ($scope) {
        document.getElementById("search_btn").click=function(){
            var keyword=document.getElementById("search_key").value;
            /*$http({
                url:"/searche",
                method:"POST",
                params:{key:keyword}
            })
                .success(function(data){
                    $scope.etlist=data;
                })*/
            $state.go

        }
    }])
})(angular)
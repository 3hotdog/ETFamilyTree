(function (angular) {
    var app=angular.module("chart.service.relative",["ngRoute"]);
    app.service("relativeAnalyze",["$http",function($http){
        this.relativeHttp=function (et_id,callback) {
            $http.post("/relativechart",{
                cache:true,
                params:{et:et_id},
            }).success(function (data) {
                callback(data);
            });
        }
    }]);
})(angular)
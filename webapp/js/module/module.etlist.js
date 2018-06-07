(function(angular){
    var app=angular.module("etFamlilyTree.module.etlist",["ngRoute","etFamlilyTree.service.etlist","etFamlilyTree.service.filter"]);
    app.config(["$routeProvider",function($routeProvider){
        $routeProvider.when("/:page",{
            controller:"etlistCtrl",
            templateUrl:"./views/etlist.html"
        })
    }]);
    app.controller("etlistCtrl",["$scope","$routeParams","searchets",function($scope,$routeParams,searchets){
        // var key=keyword;
        //分页第一次是render，第二次靠$http获取
        // $scope._firstRender=true;
        $scope.keyword=document.getElementById("etlist_in_key").value;
        function search_etlist(key) {
            $scope.keyword=key;
            searchets.etsByPage(key,$routeParams.page,function(data){
                $scope.etlist=data.etlist;
                // $scope.total=data.total;
                console.log($scope.etlist);
                $scope.$applyAsync();
            });
        }
        search_etlist($scope.keyword);
        /*document.getElementById("etlist_btn_search").onclick=function () {
            search_etlist(document.getElementById("etlist_in_key").value);
            $scope._firstRender=false;
            $scope.$applyAsync();
        };*/
        $scope.range=function (n) {
            var arr=[];
            for(var i=1;i<=n;i++){
                arr.push(i);
            }
            return arr;
        }
        // document.getElementById("etlist_btn_page").onclick=function () {
        // }
    }]);

})(angular)
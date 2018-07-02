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
        //判断页码格式 格式正确再作跳转
        document.getElementById("etlist_btn_page").onclick=function () {
            var page=parseInt(document.getElementById("etlist_in_page").value);
            var btn_page=document.getElementById("etlist_btn_page");
            var regPos = /^\d+$/; // 非负整数
            if(regPos.test(page)&&page>0&&page<=$scope.etlist.length){
                window.location.href="#/"+page;
            }else if(page>$scope.etlist.length){
                alert("页码超出范围");
            }else{
                alert("页码格式不正确");
            }
        }
    }]);

})(angular)
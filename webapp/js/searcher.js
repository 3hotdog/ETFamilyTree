(function(angular){
    var app=angular.module("searchApp",[]);
    app.controller("searchCtrl",["$scope","$http",function($scope,$http){
        $scope.$watch("searchVal",function (now,old) {
            console.log(now);
            $http({
                url:"/search",
                method:"POST",
                params:{key:now}
            }).
            success(function(data){
                console.log(data);
                $scope.etlist=data;
            })
            // var key=document.getElementsByName("key")[0].value||"";
            // document.getElementById("searchForm").action="/etlist?key="+key;
            // console.log(document.getElementById("searchForm").action);
        });
        $scope.select=function(et_name){
            $scope.searchVal=et_name;
            if ($scope.etlist.size=1&&$scope.etlist[0].et_name==et_name){
                $scope.etlist=[];
            }
        }

        $scope.skip=function(){
            /*console.log("ss");
            var key=document.getElementsByName("key")[0].value||"";
            console.log("key "+key)
            $http({
                url:"/etlist",
                method:"POST",
                params:{key:key}
            })
                .success(function(data){
                    return;
                })*/
            var key=document.getElementsByName("key")[0].value||"";
            document.getElementById("submit").href="/etlist?key="+key;
        }
    }]);


})(angular)
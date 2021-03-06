(function(angular){
    var app=angular.module("searchApp",["etFamlilyTree.service.filter"]);
    app.controller("searchCtrl",["$scope","$http",function($scope,$http){
        $scope.$watch("searchVal",function (now,old) {
            $http({
                url:"/search",
                method:"POST",
                params:{key:now}
            }).
            success(function(data){
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
            var key=document.getElementsByName("key")[0].value||"";
            document.getElementById("submit").href="/etlist?key="+key;
        }
    }]);
})(angular)
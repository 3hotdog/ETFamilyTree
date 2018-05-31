(function(angular){
    var app=angular.module("etFamlilyTree.service.etlist",[]);
    app.service("searchets",["$http",function ($http) {
        this.etsByPage=function(key,page,callback){
            $http.get("/etlist1",{
                cache:true,
                params:{key:key,page:page}
            })
                .success(function(data){
                    this.etlist=data;
                    callback(data);
                })
        }
        this.etInfo=function(et_id){
            $http.post("/etinfo",{
                cache:true,
                params:{et:et_id}
            })
                .success(function(data){
                    console.log("data "+data);
                })
        }
    }]);
})(angular)
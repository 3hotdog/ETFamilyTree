(function (angular) {
    var app=angular.module("analyze.service.ctrller",["ngRoute"]);
    app.service("ctrllerAnalyze",["$http",function($http){
        this.ctrllerHttp=function (et_id,callback) {
            $http.post("/relativechart",{
                cache:true,
                params:{et:et_id},
            }).success(function (data) {
                var arr=[];
                var link=[];
                console.log(data.et);
                arr.push({
                    name:data.et.et_name,
                    draggable: true,
                    symbolSize: [100, 100],
                    itemStyle: {
                        color: '#ff9e00'
                    },
                    category: "100%"
                });
                if(data.maxEt!=undefined){
                    for(var i=0;i<data.maxEt.length-1;i++){
                        arr.push({
                            name:data.maxEt[i].etname,
                            draggable: true,
                            symbolSize: [80, 80],
                            itemStyle: {
                                color: '#4ea2f0'
                            }
                        });
                        link.push({
                            target:data.maxEt[i].etname,
                            source:data.maxEt[i+1].etname,
                            category: ((data.maxEt[i+1].etfund/data.maxEt[i].regfund)*100).toFixed(2)+"%"
                        });
                    }

                    link.push({
                        target:data.et.et_name,
                        source:data.maxEt[0].etname,
                        category: ((data.maxEt[0].etfund/data.et.reg_fund_str)*100).toFixed(2)+"%"
                    });
                    arr.push({
                        name:data.maxEt[data.maxEt.length-1].etname,
                        draggable: true,
                        symbolSize: [80, 80],
                        itemStyle: {
                            color: '#4ea2f0'
                        }
                    });
                }
                let json={
                    arr:arr,
                    link:link
                }
                callback(json);

            });
        }
    }]);
})(angular)
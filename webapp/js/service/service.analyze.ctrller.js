(function (angular) {
    var app=angular.module("analyze.service.ctrller",["ngRoute"]);
    app.service("ctrllerAnalyze",["$http",function($http){
        this.ctrllerHttp=function (et_id,callback) {
            $http.post("/ctrllerchart",{
                cache:true,
                params:{et:et_id},
            }).success(function (data) {
                var arr=[];
                var link=[];
                //当前企业
                arr.push({
                    name:data.et.et_name,
                    draggable: true,
                    symbolSize: [100, 100],
                    itemStyle: {
                        color: '#ff9e00'
                    },
                    category: "100%"
                });
                //最大企业股东
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
                }else if(data.maxMan!=undefined){
                    //最大人类股东
                    arr.push({
                        name:data.maxMan.legalp_name,
                        draggable: true,
                        symbolSize: [80, 80],
                        itemStyle: {
                            color: '#fd5a6e'
                        }
                    });
                    link.push({
                        target:data.et.et_name,
                        source:data.maxMan.legalp_name,
                        category: ((data.maxMan.fund/data.et.reg_fund_str)*100).toFixed(2)+"%"
                    });
                }else{
                    //未知控制人
                    arr.push({
                        name:'?',
                        draggable: true,
                        symbolSize: [80, 80],
                        itemStyle: {
                            color: '#9a9a9a'
                        }
                    });
                    link.push({
                        target:data.et.et_name,
                        source:'?',
                        category: ''
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
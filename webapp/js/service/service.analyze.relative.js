(function (angular) {
    var app=angular.module("chart.service.relative",["ngRoute"]);
    app.service("relativeAnalyze",["$http",function($http){
        var check=function(str,array) {
            for(var i=0;i<array.length;i++){
                if(array[i].name==str){
                    return false;
                }
            }
            return true;
        }
        this.relativeHttp=function (et_id,callback) {
            $http.post("/relativechart",{
                cache:true,
                params:{et:et_id},
            }).success(function (data) {
                var manToEt=data.manToEt;
                var etToEt=data.etToEt;
                var etedToEt=data.etedToEt;
                var etFromEt=data.etFromEt;
                var etedFromEt=data.etedFromEt;
                var etFromMan=data.etFromMan;
                var etedFromMan=data.etedFromMan;
                var arr=[];
                var link=[];
                arr.push({//当前企业
                    name:data.etinfo.et_name,
                    draggable: false,
                    symbolSize: [100, 100],
                    itemStyle: {
                        color: '#ff9e00'
                    },
                    category: "100%"
                });
                //该企业的投资人投资了哪些企业
                for(var i=0;i<manToEt.length;i++){
                    //投资人
                    if(check(manToEt[i].legalp_name,arr)){
                        arr.push({
                            name: manToEt[i].legalp_name,
                            draggable: false,
                            symbolSize: [60, 60],
                            itemStyle: {
                                color: '#fd485e'
                            },
                            category: "50%"
                        });
                        link.push({
                            target:data.etinfo.et_name,
                            source:manToEt[i].legalp_name,
                            category:'投资'
                        })
                    }
                    //投资人投资的企业
                    if(check(manToEt[i].et_name,arr)){
                        arr.push({
                            name: manToEt[i].et_name,
                            draggable: true,
                            symbolSize: [80, 80],
                            itemStyle: {
                                color: '#4ea2f0'
                            },
                            category: "60%"
                        })
                    }
                    //关联投资人和企业
                    link.push({
                        target:manToEt[i].et_name,
                        source:manToEt[i].legalp_name,
                        category:'投资'
                    });
                }
                //该企业的投资企业
                for(var i=0;i<etToEt.length;i++){
                    if(check(etToEt[i].et_name,arr)){
                        arr.push({
                            name: etToEt[i].et_name,
                            draggable: false,
                            symbolSize: [80, 80],
                            itemStyle: {
                                color: '#4ea2f0'
                            },
                            category: "60%"
                        });
                        link.push({
                            target:data.etinfo.et_name,
                            source:etToEt[i].et_name,
                            category:'投资'
                        })
                    }
                    if(check(etToEt[i].to_etname,arr)){
                        arr.push({
                            name: etToEt[i].to_etname,
                            draggable: true,
                            symbolSize: [80, 80],
                            itemStyle: {
                                color: '#4ea2f0'
                            },
                            category: "60%"
                        })
                    }
                    link.push({
                        target:etToEt[i].to_etname,
                        source:etToEt[i].et_name,
                        category:'投资'
                    });
                }
                //该企业投资的企业
                for(var i=0;i<etedToEt.length;i++){
                    if(check(etedToEt[i].et_name,arr)){
                        arr.push({
                            name: etedToEt[i].et_name,
                            draggable: false,
                            symbolSize: [80, 80],
                            itemStyle: {
                                color: '#4ea2f0'
                            },
                            category: "60%"
                        });
                        link.push({
                            target:etedToEt[i].et_name,
                            source:data.etinfo.et_name,
                            category:'投资'
                        })
                    }
                    if(check(etedToEt[i].to_etname,arr)){
                        arr.push({
                            name: etedToEt[i].to_etname,
                            draggable: true,
                            symbolSize: [80, 80],
                            itemStyle: {
                                color: '#4ea2f0'
                            },
                            category: "60%"
                        })
                    }
                    link.push({
                        target:etedToEt[i].to_etname,
                        source:etedToEt[i].et_name,
                        category:'投资'
                    });
                }
                //投资企业被哪些企业投资
                for(var i=0;i<etFromEt.length;i++){
                    if(check(etFromEt[i].et_name,arr)){
                        arr.push({
                            name: etFromEt[i].et_name,
                            draggable: false,
                            symbolSize: [80, 80],
                            itemStyle: {
                                color: '#4ea2f0'
                            },
                            category: "60%"
                        });
                        link.push({
                            target:data.etinfo.et_name,
                            source:etFromEt[i].et_name,
                            category:'投资'
                        })
                    }
                    if(check(etFromEt[i].from_etname,arr)){
                        arr.push({
                            name: etFromEt[i].from_etname,
                            draggable: true,
                            symbolSize: [80, 80],
                            itemStyle: {
                                color: '#4ea2f0'
                            },
                            category: "60%"
                        })
                    }
                    link.push({
                        target:etFromEt[i].et_name,
                        source:etFromEt[i].from_etname,
                        category:'投资'
                    });
                }
                //被投资企业还被哪些企业投资
                for(var i=0;i<etedFromEt.length;i++){
                    var et=etedFromEt[i]
                    if(check(et.et_name,arr)){
                        arr.push({
                            name: et.et_name,
                            draggable: false,
                            symbolSize: [80, 80],
                            itemStyle: {
                                color: '#4ea2f0'
                            },
                            category: "60%"
                        });
                        link.push({
                            target:et.et_name,
                            source:data.etinfo.et_name,
                            category:'投资'
                        })
                    }
                    if(check(et.from_etname,arr)){
                        arr.push({
                            name: et.from_etname,
                            draggable: true,
                            symbolSize: [80, 80],
                            itemStyle: {
                                color: '#4ea2f0'
                            },
                            category: "60%"
                        })
                    }
                    link.push({
                        target:et.et_name,
                        source:et.from_etname,
                        category:'投资'
                    });
                }
                //投资企业被哪些人投资
                for(var i=0;i<etFromMan.length;i++){
                    var et = etFromMan[i];
                    if(check(et.et_name,arr)){
                        arr.push({
                            name: et.et_name,
                            draggable: false,
                            symbolSize: [80, 80],
                            itemStyle: {
                                color: '#4ea2f0'
                            },
                            category: "60%"
                        });
                        link.push({
                            target:data.etinfo.et_name,
                            source:et.et_name,
                            category:'投资'
                        })
                    }
                    if(check(et.legalp_name,arr)){
                        arr.push({
                            name: et.legalp_name,
                            draggable: true,
                            symbolSize: [60, 60],
                            itemStyle: {
                                color: '#fd485e'
                            },
                            category: "50%"
                        })
                    }
                    link.push({
                        target:et.et_name,
                        source:et.legalp_name,
                        category:'投资'
                    });
                }
                //被投资企业被哪些人投资
                for(var i=0;i<etedFromMan.length;i++){
                    var et = etedFromMan[i];
                    if(check(et.et_name,arr)){
                        arr.push({
                            name: et.et_name,
                            draggable: false,
                            symbolSize: [80, 80],
                            itemStyle: {
                                color: '#4ea2f0'
                            },
                            category: "60%"
                        });
                        link.push({
                            target:et.et_name,
                            source:data.etinfo.et_name,
                            category:'投资'
                        })
                    }
                    if(check(et.legalp_name,arr)){
                        arr.push({
                            name: et.legalp_name,
                            draggable: true,
                            symbolSize: [60, 60],
                            itemStyle: {
                                color: '#fd485e'
                            },
                            category: "50%"
                        })
                    }
                    link.push({
                        target:et.et_name,
                        source:et.legalp_name,
                        category:'投资'
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
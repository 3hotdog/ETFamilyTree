(function (angular) {
    var app=angular.module("analyze.service.invest",["ngRoute"]);
    app.service("investAnalyze",["$http",function($http){
        this.investChart=function(et_id,callback) {
            $http.post("/investchart",{
                cache:true,
                params:{et:et_id},
            }).success(function (data) {
                let reg_fund=data.et.reg_fund_str;
                let et_name=data.et.et_name;
                // this.et=data.et.id;
                let stock=[];//股东
                data.maninvest.forEach(function (man) {
                    var allocation=(man.man_fund/reg_fund)*100+"%";
                    stock.push({"name":allocation+" "+man.legalp_name,"value":man.man_fund})
                });
                let invest=[];//投资
                /*data.etinvested.forEach(function (et) {
                    var allocation=(et.et_fund/et.reg_fund_str)*100+"%";
                    invest.push({"name":allocation+" "+et.et_name,"value":et.et_fund});
                });*/
                for(var i=0;i<data.etinvested.length-1;i++){
                    investto_et(data.etinvested[i],data.etinvested[i+1],function (data) {
                        for(var i=0;i<data.length;i++){
                            if(data[i].length!=0){
                                invest.push(data[i]);
                            }
                        }
                    })
                }
                for(var i=0;i<data.etinvest.length-1;i++){
                    investto_et(data.etinvest[i],data.etinvest[i+1],function (data) {
                        for(var i=0;i<data.length;i++){
                            if(data[i].length!=0){
                                stock.push(data[i]);
                            }
                        }
                    })
                }

                let result=[];
                result.push({"name":et_name,
                    "children":[
                        {"name":'股东',
                            "children":stock},
                        {"name":'对外投资',
                            "children":invest}
                    ]});
                callback(result);
            });
        }
    }]);
    function invested_et(etinvested,investor_id,callback) {
        var children=[];
        etinvested.forEach(function (invested) {
            if(invested.investor_et==investor_id){
                children.push({"name":invested.et_name});
            }
        })
        callback(children);
    }
    function investto_et(etinvestto,etinvested,callback) {
        var temp=[];
        etinvestto.forEach(function (investto) {
            invested_et(etinvested,investto.et_id,function (children) {
                temp.push({"name":investto.et_name,"children":children});
            })
        });
        callback(temp);
    }
})(angular)
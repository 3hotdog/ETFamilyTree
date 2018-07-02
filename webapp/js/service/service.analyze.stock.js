(function (angular) {
    var app=angular.module("analyze.service.stock",["ngRoute"]);
    app.service("stockAnalyze",["$http",function($http){
        this.stockChart=function (et_id,callback) {
            $http.post("/etchart",{
                cache:true,
                params:{et:et_id},
            }).success(function (data) {
                let et_name=data.et.et_name;
                this.et=data.et.id;
                let stock=[];//股东
                data.maninvest.forEach(function (man) {
                    var allocation=((man.man_fund/data.et.reg_fund_str)*100).toFixed(2)+"%";
                    stock.push({"name":allocation+" "+man.legalp_name,"value":man.man_fund})
                });
                data.etinvest.forEach(function (et) {
                    var allocation=((et.et_fund/data.et.reg_fund_str)*100).toFixed(2)+"%";
                    stock.push({"name":allocation+" "+et.et_name,"value":et.et_fund})
                });
                let invest=[];//投资
                data.etinvested.forEach(function (et) {
                    var allocation=((et.et_fund/et.reg_fund_str)*100).toFixed(2)+"%";
                    invest.push({"name":allocation+" "+et.et_name,"value":et.et_fund});
                });
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
})(angular)
"use strict";
const  etinfoDao=require("../dao/dao.etinfo"),
    params=require("../config/config.params");
function et_stock_invest(et_id,res) {//股东和对外投资。
    etinfoDao.shortEt(et_id,function (et) {
        etinfoDao.manInvest(et_id,function (maninvest) {//股东
            etinfoDao.etInvest(et_id,function(etinvest){//企业股东
                etinfoDao.etInvested(et_id,function(etinvested){//对外投资
                    maninvest.forEach(function (man) {
                        man.man_fund=strTofund(man.man_fund);
                    });
                    etinvest.forEach(function (et) {
                        et.et_fund=strTofund(et.et_fund);
                        et.reg_fund_str=strTofund(et.reg_fund_str);
                    });
                    etinvested.forEach(function (et) {
                        et.et_fund=strTofund(et.et_fund);
                        et.reg_fund_str=strTofund(et.reg_fund_str);
                    });
                    et[0].reg_fund_str=strTofund(et[0].reg_fund_str);
                    let json={
                        et:et[0],
                        maninvest:maninvest,
                        etinvest:etinvest,
                        etinvested:etinvested
                    }
                    res.writeHead(200);
                    res.end(JSON.stringify(json));
                });
            });
        });
    });
}
//投资族谱
function invest(et_id,res) {
    etinfoDao.shortEt(et_id,function (et) {
        etinfoDao.manInvest(et_id,function (maninvest) {//股东
            // etinfoDao.etInvest(et_id,function(etinvest){
                etinfoDao.etInvested_four(et_id,function(etinvested){//投资企业
                    etinfoDao.etInvest_four(et_id,function(etinvest){//企业股东
                        maninvest.forEach(function (man) {
                            man.man_fund=strTofund(man.man_fund);
                        });
                        for(var i=0;i<etinvested.length;i++){
                            etinvested[i].forEach(function (et) {
                                et.et_fund=strTofund(et.et_fund);
                                et.reg_fund_str=strTofund(et.reg_fund_str);
                            });
                            etinvest[i].forEach(function (et) {
                                et.et_fund=strTofund(et.et_fund);
                                et.reg_fund_str=strTofund(et.reg_fund_str);
                            });
                        }
                        et[0].reg_fund_str=strTofund(et[0].reg_fund_str);
                        let json={
                            et:et[0],
                            maninvest:maninvest,
                            etinvest:etinvest,
                            etinvested:etinvested
                        }
                        res.writeHead(200);
                        res.end(JSON.stringify(json));
                    });
                });
            // });
        });
    });
}
// var realStock=[];
function findController(et_id,callback) {
    var stock=[];
    etinfoDao.etInvest(et_id,function (etinvest) {
        etinfoDao.manInvest(et_id,function (maninvest) {
            var man_temp=maninvest[0];
            if(man_temp!=undefined){
                man_temp.man_fund=strTofund(man_temp.man_fund);
                for(var i=1;i<maninvest.length;i++){
                    maninvest[i].man_fund=strTofund(maninvest[i].man_fund);
                    if(man_temp.man_fund<maninvest[i].man_fund) man_temp=maninvest[i];
                }
            }
            var et_temp=etinvest[0];
            if(et_temp!=undefined){
                et_temp.et_fund=strTofund(et_temp.et_fund);
                for(var i=1;i<etinvest.length;i++){
                    etinvest[i].et_fund=strTofund(etinvest[i].et_fund);
                    if(et_temp.et_fund<etinvest[i].et_fund) et_temp=etinvest[i];
                }
            }

            if(man_temp!=undefined&&et_temp!=undefined){
                if(man_temp.man_fund<et_temp.et_fund){
                    stock.push(et_temp);
                    findController(et_temp.investor_et,function (data) {
                        stock.push(data);
                        return;
                    });
                }else{
                    stock.push(man_temp);
                }
            }else if(man_temp==undefined&&et_temp!=undefined){
                console.log("man_temp==undefined&&et_temp!=undefined");
                stock.push(et_temp);
                findController(et_temp.investor_et,function (data) {
                    stock.push(data);
                    return;
                });
            }else if(man_temp!=undefined&&et_temp==undefined){
                stock.push(man_temp);
            }else{
                console.log("else");
                return;
            }
            // console.log("--"+JSON.stringify(stock));
            callback(stock);
        });
    });

}
/*function realController(et_id,res){
    findController(et_id,function (stock) {
        console.log("stock "+JSON.stringify(stock));
        res.writeHead(200);
        res.end(JSON.stringify(stock));
    })
}*/
function realController(et_id,res){
    etinfoDao.shortEt2(et_id,function (et) {
        etinfoDao.maxEt(et_id,function (maxEt) {
            etinfoDao.maxMan(et_id,function (maxMan){
                let json={};
                if(maxEt[0].etfund>maxMan.fund){
                    maxEt=maxEt.splice(0,maxEt.length-1);
                    console.log("maxEt "+maxEt)
                    json={
                        et:et[0],
                        maxEt:maxEt
                    }
                }else if(maxEt[0].etfund<maxMan.fund){
                    json={
                        et:et[0],
                        maxMan:maxMan
                    }
                }else{
                    json={
                        et:et[0]
                    }
                }
                res.writeHead(200);
                res.end(JSON.stringify(json))
            });
        });
    })


}
function etName(et_id,res) {
    etinfoDao.etName(et_id,function (et_name) {
        res.writeHead(200);
        res.end(JSON.stringify({et_name:et_name[0]}));
    });
}
//将投资金额转化为数字类型
function strTofund(fundStr){
    if(fundStr!=null&&fundStr!=undefined){
        if(fundStr.indexOf("美元")!=-1){
            fundStr=fundStr.replace("/[^0-9]/ig","");
            return parseInt(fundStr)*params.RATE;
        }else{
            return parseInt(fundStr.replace("/[^0-9]/ig",""));
        }
    }
}
module.exports={et_stock_invest,etName,invest,realController}
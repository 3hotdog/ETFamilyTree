"use strict";
const fs=require("fs"),
    path=require("path"),
    searchDao=require("../dao/ETDao");
function queryByEtName(key,res){
    if(key==undefined||key=="") return;
    searchDao.searchByEtName(key,function (results) {
        res.writeHead(200);
        res.end(JSON.stringify(results));
    })
}
function queryETs(key,page,count,res,callback) {
    var start=count*(page-1);
    searchDao.saerchAllByEtName(key,start,count,function (results) {
        var etlist=[];
        for (var i=0;i<results.length;i++){
            etlist.push({
                et_id:results[i].id,
                et_name:results[i].et_name,
                create_date:results[i].create_date,
                reg_fund:results[i].reg_fund,
                address:results[i].address,
                legalman:results[i].legalp_name
            });
        }
        searchDao.counts(key,function(counts){
            var totalPage=Math.floor(counts/count);
            let json={
                etlist:etlist,
                total:totalPage
            }
            callback(json);
        })
    })
}
function queryAllByEtName(key,page,count,res){
    var firstRender=false;
    if(page==undefined) {
        firstRender=true;
        page=1;
    }
    var start=count*(page-1);
    searchDao.saerchAllByEtName(key,start,count,function (results) {
        var etlist=[];
        for (var i=0;i<results.length;i++){
            etlist.push({
                et_id:results[i].id,
                et_name:results[i].et_name,
                create_date:results[i].create_date,
                reg_fund:results[i].reg_fund,
                address:results[i].address,
                legalman:results[i].legalp_name
            });
        }
        let json={
            etlist:etlist
        }
        res.writeHead(200);
        res.end(JSON.stringify(json));
    })
}
function keyAndCount(key,count,res){
    searchDao.counts(key,function(counts){
        var totalPage=Math.ceil(counts/count);
        let json={
            key:key,
            total:totalPage
        }
        res.render("search_info.ejs",json);
    })
}
function queryEtInfo(et_id,res){
    searchDao.etById(et_id,function (etinfo) {
        searchDao.etInvest(et_id,function (etinvest) {
            searchDao.manInvest(et_id,function (maninvest) {
                searchDao.etInvested(et_id,function(etinvested){
                    let json={
                        etinfo:etinfo,
                        etinvest:etinvest,
                        maninvest:maninvest,
                        etinvested:etinvested
                    }
                    res.render("company_info.ejs",json);
                })
            })
        })
    })
}

module.exports={queryByEtName,queryAllByEtName,keyAndCount,queryEtInfo};
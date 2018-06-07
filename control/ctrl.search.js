"use strict";
const fs=require("fs"),
    path=require("path"),
    searchDao=require("../dao/dao.etinfo"),
    etDao=require("../dao/ETDao");
//首页搜索 显示前八项数据
function queryShortET(key,res){
    if(key==undefined||key=="") return;
    etDao.etByAll(key,function (results) {
        res.writeHead(200);
        res.end(JSON.stringify(results));
    })
}
//out
function queryETs(key,page,count,res,callback) {
    var start=count*(page-1);
    etDao.etinfo(key,start,count,function (results) {
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
        etDao.counts(key,function(counts){
            var totalPage=Math.floor(counts/count);
            console.log("totalPage "+totalPage);
            let json={
                etlist:etlist,
                total:totalPage
            }
            callback(json);
        })
    })
}


module.exports={queryShortET};
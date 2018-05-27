"use strict";
const fs=require("fs"),
    path=require("path"),
    searchDao=require("../dao/SearchDao");
function queryByEtName(key,res){
    if(key==undefined||key=="") return;
    searchDao.searchByEtName(key,function (results) {
        res.writeHead(200);
        res.end(JSON.stringify(results));
    })
}
function queryAllByEtName(key,start,end,res){
    searchDao.saerchAllByEtName(key,start,end,function (results) {
        var etlist=[];

        console.log(results);
        for (var i=0;i<results.length;i++){
            etlist.push({
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
        res.render("search_info.ejs",json);
    })
}

module.exports={queryByEtName,queryAllByEtName};
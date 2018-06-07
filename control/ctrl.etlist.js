"use strict";
const moment=require("moment"),
    etDao=require("../dao/ETDao");
function queryEtlist(key,page,count,res){
    var firstRender=false;
    if(page==undefined) {
        firstRender=true;
        page=1;
    }
    var start=count*(page-1);
    etDao.etinfo(key,start,count,function (results) {
        var etlist=[];
        for (var i=0;i<results.length;i++){
            etlist.push({
                et_id:results[i].id,
                et_name:results[i].et_name,
                create_date:moment(results[i].create_date).format('YYYY-MM-DD'),
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
//发送关键字和匹配企业的总数量
function keyAndCount(key,count,res){
    etDao.counts(key,function(counts){
        var totalPage=Math.ceil(counts/count);
        let json={
            key:key,
            total:totalPage
        }
        res.render("search_info.ejs",json);
    })
}
module.exports={queryEtlist,keyAndCount};
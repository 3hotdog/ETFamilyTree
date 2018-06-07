"use strict";
const connector=require("../config/config.jdbc");
var conn=connector.getConnection();
//匹配某个字段
/*function selectEtByOne(key,field,callback) {
    key="%"+key+"%";
    var sql="SELECT DISTINCT et.id,et_name,legalp_name,reg_authority FROM enterprise et " +
        "LEFT JOIN man ON et.legalp_id = man.id " +
        "WHERE ?? LIKE ?";
    conn.query(sql,[field,key],function(err,results,fields){
        callback(results);
    });
}*/
/*function countByOne(key,field,callback) {
    key="%"+key+"%";
    var sql="SELECT count(*) total FROM enterprise et " +
        "LEFT JOIN man ON et.legalp_id = man.id " +
        "WHERE ?? LIKE ?";
    conn.query(sql,[field,key],function(err,results,fields){
        callback(results);
    });
}*/

//企业搜索
function searchByEtName(key,callback){
    key="%"+key+"%";
    var sql="select et_name,id from enterprise where et_name like ? limit 0,8";
    conn.query(sql,[key],function(err,results,fields){
        callback(results);
    });
}
function saerchAllByEtName(key,start,count,callback){
    key="%"+key+"%";
    var sql="select distinct et.*,man.legalp_name from enterprise et left join man on et.legalp_id=man.id where et.et_name like ? limit ?,?";
    conn.query(sql,[key,start,count],function(err,results,fields){
        callback(results);
    });
}
function counts(key,callback){
    key="%"+key+"%";
    console.log("key "+key);
    var sql="select count(*) total from enterprise where et_name like ?";
    conn.query(sql,[key],function(err,results,fields){
        console.log(results);
        // results[0]=results[0]||[];
        callback(results[0].total);
    });
}
//--------------------------------------企业详细信息-------------------------------------------------------
//查询指定公司具体信息
function selectEtById(et_id,callback){
    var sql="select distinct et.*,man.legalp_name from enterprise et join man on et.legalp_id=man.id where et.id=?";
    conn.query(sql,[et_id],function(err,results,fields){
        callback(results);
    });
}
//查询投资该公司的公司 id 名称 法人 投资金额 成立日期 法人id
function selectEtInvestor(et_id,callback){
    var sql="SELECT DISTINCT iet.investor_et,iet.et_fund,et.et_name,et.create_date,man.legalp_name "+
    "FROM investor_et iet JOIN enterprise et ON iet.investor_et = et.id "+
    "LEFT JOIN man ON et.legalp_id = man.id "+
    "WHERE iet.et_id = ? ";
    conn.query(sql,[et_id],function(err,results,fields){
        callback(results);
    });
}
//查询投资该公司的股东 id 姓名 投资金额
function selectManInvestor(et_id,callback){
    var sql="SELECT DISTINCT man.id,man.legalp_name,iman.man_fund "+
        "FROM man JOIN investor_man iman ON man.id = iman.investor_man "+
        "WHERE iman.et_id = ? "
    conn.query(sql,[et_id],function(err,results,fields){
        callback(results);
    });
}
//查询被该公司投资的公司 id 名称 法人 投资金额 成立日期 法人id
function selectEtInvested(et_id,callback){
    var sql="SELECT DISTINCT iet.et_id,iet.et_fund,et.et_name,et.create_date,man.legalp_name "+
        "FROM investor_et iet JOIN enterprise et ON iet.et_id = et.id "+
        "LEFT JOIN man ON et.legalp_id = man.id "+
        "WHERE iet.investor_et = ? ";
    conn.query(sql,[et_id],function(err,results,fields){
        callback(results);
    });
}
//查询被此人投资的公司 id 名称 投资金额 成立日期
function selectEtByManInvested(man_id,callback) {
    var sql="SELECT DISTINCT im.et_id,im.man_fund,et.et_name,et.et_name,et.create_date "+
        "FROM investor_man im JOIN enterprise et ON im.investor_man = et.legalp_id "+
        "WHERE im.investor_man = ? "
    conn.query(sql,[man_id],function(err,results,fields){
        callback(results);
    });
}
//查询被此人投资的公司总数
function selectTotalEtsByMan(man_id,callback){
    var sql="SELECT count(*) count FROM investor_man im WHERE im.investor_man = ? ";
    conn.query(sql,[man_id],function(err,results,fields){
        callback(results);
    });
}

module.exports={etById:selectEtById,etInvest:selectEtInvestor,manInvest:selectManInvestor,etInvested:selectEtInvested,
    etByManInvested:selectEtByManInvested,totalEtsByMan:selectTotalEtsByMan}
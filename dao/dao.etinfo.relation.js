"use strict";
const connector=require("../config/config.jdbc");
var conn=connector.getConnection();
//查询投资该公司的人还投资了哪些公司
function manToEt(et_id,callback){
    var sql="SELECT et.id,et.et_name,et.reg_fund_str,man.id,man.legalp_name,im.man_fund "+
    "from enterprise et RIGHT JOIN investor_man im on et.id=im.et_id left JOIN man on im.investor_man=man.id "+
    "where im.investor_man in( "+
    "SELECT DISTINCT man.id FROM man JOIN investor_man iman ON man.id = iman.investor_man WHERE iman.et_id = ? "+
    ")and et.id !=?";
    conn.query(sql,[et_id,et_id],function(err,results,fields){
        callback(results);
    });
}
//查询投资该公司的公司还投资了哪些公司
function etToEt(et_id,callback){
    var sql="SELECT et.id,et.et_name,iet.et_fund, "+
        "iet.et_id to_id,investedet.et_name to_etname,investedet.reg_fund_str to_reg "+
        "from enterprise et RIGHT JOIN investor_et iet on et.id=iet.investor_et "+
        "join enterprise investedet on investedet.id=iet.et_id "+
        "where iet.investor_et in( "+
        "SELECT DISTINCT iet.investor_et "+
        "FROM investor_et iet "+
        "WHERE iet.et_id = ? "+
        ")and iet.et_id !=?";
    conn.query(sql,[et_id,et_id],function(err,results,fields){
        callback(results);
    });
}
//查询被该企业投资的企业还投资了哪些企业
function etedToEt(et_id,callback) {
    var sql="SELECT et.id,et.et_name,iet.et_fund,"+
    "iet.et_id to_id,investedet.et_name to_etname,investedet.reg_fund_str to_reg "+
    "from enterprise et RIGHT JOIN investor_et iet on et.id=iet.investor_et "+
    "join enterprise investedet on investedet.id=iet.et_id "+
    "where iet.investor_et in( "+
    "SELECT DISTINCT iet.et_id "+
    "FROM investor_et iet "+
    "WHERE iet.investor_et = ? "+
    ")and iet.investor_et !=?";
    conn.query(sql,[et_id,et_id],function(err,results,fields){
        callback(results);
    });
}
//查询投资该企业的企业还被哪些企业投资
function etFromEt(et_id,callback){
    var sql="SELECT et.id,et.et_name,iet.et_fund,"+
    "iet.investor_et from_id,toinvest.et_name from_etname,toinvest.reg_fund_str from_reg "+
    "from enterprise et RIGHT JOIN investor_et iet on et.id=iet.et_id "+
    "join enterprise toinvest on toinvest.id=iet.investor_et "+
    "where iet.et_id in( "+
    "SELECT DISTINCT iet.investor_et "+
    "FROM investor_et iet "+
    "WHERE iet.et_id = ? "+
    ")and iet.et_id != ?";
    conn.query(sql,[et_id,et_id],function(err,results,fields){
        callback(results);
    });
}
//查询被该企业投资的企业被哪些企业投资
function etedFromEt(et_id,callback) {
    var sql = "SELECT et.id,et.et_name,iet.et_fund,"+
    "iet.investor_et from_id,toinvest.et_name from_etname,toinvest.reg_fund_str from_reg "+
    "from enterprise et RIGHT JOIN investor_et iet on et.id=iet.et_id "+
    "join enterprise toinvest on toinvest.id=iet.investor_et "+
    "where iet.et_id in( "+
    "SELECT DISTINCT iet.et_id "+
    "FROM investor_et iet "+
    "WHERE iet.investor_et = ? "+
    ")and iet.investor_et !=? ";
    conn.query(sql,[et_id,et_id],function(err,results,fields){
        callback(results);
    });
}

//查询投资该企业的企业被哪些人投资
function etFromMan(et_id,callback) {
    var sql="SELECT et.id,et.et_name,et.reg_fund_str, "+
    "im.investor_man,im.man_fund,man.legalp_name "+
    "from enterprise  et "+
    "join investor_man im on im.et_id=et.id "+
    "join man on im.investor_man=man.id "+
    "where im.et_id in( "+
    "SELECT DISTINCT iet.investor_et "+
    "FROM investor_et iet "+
    "WHERE iet.et_id=? "+
    ")and im.et_id !=? ";
    conn.query(sql,[et_id,et_id],function(err,results,fields){
        callback(results);
    });
}

//查询被该企业投资的企业被哪些人投资
function etedFromMan(et_id,callback) {
    var sql="SELECT et.id,et.et_name,et.reg_fund_str, "+
    "im.investor_man,im.man_fund,man.legalp_name "+
    "from enterprise et "+
    "join investor_man im on im.et_id=et.id "+
    "join man on im.investor_man=man.id "+
    "where im.et_id in( "+
    "SELECT DISTINCT iet.et_id "+
    "FROM investor_et iet "+
    "WHERE iet.investor_et = ? "+
    ")and im.et_id !=? ";
    conn.query(sql,[et_id,et_id],function(err,results,fields){
        callback(results);
    });
}

module.exports={
    manToEt,etToEt,etedToEt,etFromEt,etedFromEt,etFromMan,etedFromMan
}
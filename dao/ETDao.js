"use strict";
const connector=require("../config/config.jdbc");
var conn=connector.getConnection();
//匹配所有字段 用于首页搜索匹配关键字
function selectEtByAll(key,callback) {
    key="%"+key+"%";
    var sql="SELECT DISTINCT et.id,et_name,legalp_name,reg_authority FROM enterprise et " +
        "LEFT JOIN man ON et.legalp_id = man.id " +
        "WHERE CONCAT( et_name,et_type,credit_code,manage_scope,address,reg_authority,reg_fund_str,legalp_name) " +
        "LIKE ? LIMIT 0,8";
    conn.query(sql,[key],function(err,results,fields){
        callback(results);
    });
}
//查询匹配企业的具体信息  用于展示
function selectEtInfoByAll(key,start,count,callback) {
    key="%"+key+"%";
    var sql="SELECT DISTINCT et.*,man.legalp_name FROM enterprise et " +
        "LEFT JOIN man ON et.legalp_id = man.id " +
        "WHERE CONCAT( et_name,et_type,credit_code,manage_scope,address,reg_authority,reg_fund_str,legalp_name) " +
        "LIKE ? LIMIT ?,?";
    conn.query(sql,[key,start,count],function(err,results,fields){
        callback(results);
    });
}
//获取匹配企业的总数 用于分页
function countByAll(key,callback) {
    key="%"+key+"%";
    var sql="SELECT count(*) total FROM enterprise et " +
        "LEFT JOIN man ON et.legalp_id = man.id " +
        "WHERE CONCAT( et_name,et_type,credit_code,manage_scope,address,reg_authority,reg_fund_str,legalp_name) " +
        "LIKE ?";
    conn.query(sql,[key],function(err,results,fields){
        callback(results[0].total);
    });
}
module.exports={etByAll:selectEtByAll,counts:countByAll,etinfo:selectEtInfoByAll};
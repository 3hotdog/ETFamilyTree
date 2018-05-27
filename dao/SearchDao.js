"use strict";
const mysql=require("mysql");
var conn=mysql.createConnection({
    host:"localhost",
    user:'root',
    password:'root',
    database:'3dog'
});
conn.connect();
//企业搜索
function searchByEtName(key,callback){
    key="%"+key+"%";
    var sql="select et_name,id from enterprise where et_name like ? limit 0,8";
    conn.query(sql,[key],function(err,results,fields){
        callback(results);
    });
}
function saerchAllByEtName(key,start,end,callback){
    key="%"+key+"%";
    var sql="select distinct et.*,man.legalp_name from enterprise et left join man on et.legalp_id=man.id where et.et_name like ? limit ?,?";
    conn.query(sql,[key,start,end],function(err,results,fields){
        callback(results);
    });
}
//法人搜索
function searchByLegalMan(key){

}
//地址搜索
function  searchByAdd(key) {

}
//经营范围
function searchByScope(key) {
    
}
//统一信用码
function searchByCreditCode(key) {

}
//登记机关
function searchByAuthority(key) {

}
module.exports={searchByEtName,saerchAllByEtName}
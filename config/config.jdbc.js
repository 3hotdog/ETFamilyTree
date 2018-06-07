"use strict";
//引入包
const mysql=require("mysql");
//连接数据库
function getConnection() {
    let connection=mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'root',
        database : '3dog'
    });
    connection.connect();
    return  connection;
}
//将方法暴露出去
module.exports={getConnection};

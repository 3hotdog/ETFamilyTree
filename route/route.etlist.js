"use strict";
const express=require("express"),
    url=require("url"),
    etlistCtrl=require("../control/ctrl.etlist"),
    params=require("../config/config.params");
module.exports=function(app) {
    app.use("/etlist",function(req,res){
        let json=url.parse(decodeURI(req.url),true);
        etlistCtrl.keyAndCount(json.query.key,params.COUNT,res);
    });
    app.use("/etlist1",function (req,res) {
        let json=url.parse(decodeURI(req.url),true);
        etlistCtrl.queryEtlist(json.query.key,json.query.page,params.COUNT,res);
    });
}
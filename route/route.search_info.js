"use strict";
const express=require("express"),
    searchCtrl=require("../control/SearchCtrl"),
    url=require("url");
module.exports=function(app) {
    app.use("/etlist",function(req,res){
        let json=url.parse(decodeURI(req.url),true);
        searchCtrl.keyAndCount(json.query.key,5,res);
    });
    app.use("/etlist1",function (req,res) {
        let json=url.parse(decodeURI(req.url),true);
        searchCtrl.queryAllByEtName(json.query.key,json.query.page,5,res);
    });
}
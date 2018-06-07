"use strict";
const express=require("express"),
    searchCtrl=require("../control/ctrl.search"),
    url=require("url");
module.exports=function(app) {
    app.post("/search",function(req,res){
        let json=url.parse(req.url,true);
        searchCtrl.queryShortET(json.query.key,res)
    });
}
"use strict";
const express=require("express"),
    searchCtrl=require("../control/ctrl.search"),
    params=require("../config/config.params"),
    url=require("url");
module.exports=function(app) {
    app.post("/search",function(req,res){
        let json=url.parse(req.url,true);
        searchCtrl.queryShortET(json.query.key,params.MATCH,res)
    });
}
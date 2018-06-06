"use strict";
const express=require("express"),
    searchCtrl=require("../control/SearchCtrl"),
    url=require("url");
module.exports=function(app) {
    app.post("/search",function(req,res){
        let json=url.parse(req.url,true);
        searchCtrl.queryByEtName(json.query.key,res)
    });
}
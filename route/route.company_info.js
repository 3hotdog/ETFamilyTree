"use strict";
const express=require("express"),
    searchCtrl=require("../control/SearchCtrl"),
    url=require("url");
module.exports=function(app) {
    app.use("/etinfo",function (req,res) {
        let json=url.parse(decodeURI(req.url),true);
        searchCtrl.queryEtInfo(json.query.et,res);
    });
}
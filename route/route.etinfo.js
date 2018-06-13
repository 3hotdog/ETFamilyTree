"use strict";
const express=require("express"),
    etinfoCtrl=require("../control/ctrl.etinfo"),
    url=require("url");
module.exports=function(app) {
    app.use("/etinfo",function (req,res) {
        let json=url.parse(decodeURI(req.url),true);
        etinfoCtrl.queryEtInfo(json.query.et,res);
    });
   /* app.use("/analyze",function (req,res) {
        let json=url.parse(decodeURI(req.url),true);
        let send={et:json.query.et};
        res.render("",send);

    });*/
}
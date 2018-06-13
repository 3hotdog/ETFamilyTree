"use strict";
const express=require("express"),
    formidable =require("formidable"),
    chartCtrl=require("../control/ctrl.chart"),
    url=require("url");
module.exports=function(app) {
    app.post("/etname",function (req,res) {
        let form=new formidable.IncomingForm();
        form.parse(req,function(err,fields,files){
            chartCtrl.etName(fields.params.et,res);
        });
    });
    app.post("/etchart",function (req,res) {
        let form=new formidable.IncomingForm();
        form.parse(req,function(err,fields,files){
            chartCtrl.et_stock_invest(fields.params.et,res);
        });
    });
    app.post("/investchart",function (req,res) {
        let form=new formidable.IncomingForm();
        form.parse(req,function(err,fields,files){
            chartCtrl.invest(fields.params.et,res);
        });
    });
    app.post("/relativechart",function (req,res) {
        let form=new formidable.IncomingForm();
        form.parse(req,function(err,fields,files){
            // chartCtrl.invest(fields.params.et,res);
            chartCtrl.realController(fields.params.et,res);
        });
    })
}
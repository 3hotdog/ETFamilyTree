"use strict";
const http=require("http"),
    fs=require("fs"),
    path=require("path"),
    express=require("express"),
    searchCtrl=require("./control/SearchCtrl"),
    url=require("url"),
    bodyParser=require("body-parser");
let app=express();
//托管静态资源
app.use("/",express.static("webapp"));
//把模板注入到app中
app.set("view engine","ejs");
app.set("views","webapp");
app.use(bodyParser.json());//for parsing application/json
// app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
//首页渲染
app.get("/",function (req,res) {
    res.render("seacher.ejs");
})
app.get("/favicon.ico",function(req,res){
    return;
})
app.post("/search",function(req,res){
    let json=url.parse(req.url,true);
    searchCtrl.queryByEtName(json.query.key,res)
});
app.use("/etlist",function(req,res){
    let json=url.parse(decodeURI(req.url),true);
    console.log(json);
    searchCtrl.keyAndCount(json.query.key,5,res);
});
app.use("/etlist1",function (req,res) {
    let json=url.parse(decodeURI(req.url),true);
    searchCtrl.queryAllByEtName(json.query.key,json.query.page,5,res);
});
app.use("/etinfo",function (req,res) {
    // console.log("req.body "+JSON.stringify(req.body.params));
    // searchCtrl.queryEtInfo(req.body.params.et,res);
    let json=url.parse(decodeURI(req.url),true);
    console.log(json);
    searchCtrl.queryEtInfo(json.query.et,res);
});

app.listen(9090,function(err){
   if(err) throw err;
});

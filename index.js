"use strict";
const http=require("http"),
    fs=require("fs"),
    path=require("path"),
    express=require("express"),
    searchCtrl=require("./control/SearchCtrl"),
    url=require("url");
let app=express();
//托管静态资源
app.use("/",express.static("webapp"));
//把模板注入到app中
app.set("view engine","ejs");
app.set("views","webapp");
//首页渲染
app.get("/",function (req,res) {
    // searchDao.searchByEtName("市");
    res.render("seacher.ejs");
})
app.get("/favicon.ico",function(req,res){
    return;
})
app.post("/search",function(req,res){
    let json=url.parse(req.url,true);
    searchCtrl.queryByEtName(json.query.key,res)
});

app.use("/etlist",function (req,res) {
    let json=url.parse(decodeURI(req.url),true);
    console.log(json);
    searchCtrl.queryAllByEtName(json.query.key,0,10,res);
})
/*app.use("/searchall",function(req,res){
    console.log("--------");
    res.render("./search_info.ejs");
})*/

app.listen(9090,function(err){
   if(err) throw err;
});

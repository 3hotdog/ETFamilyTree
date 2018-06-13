"use strict";
const path=require("path"),
    express=require("express");
    // bodyParser=require("body-parser");
let app=express();
//托管静态资源
app.use("/",express.static("webapp"));
//把模板注入到app中
app.set("view engine","ejs");
app.set("views","webapp");
// app.use(bodyParser.json());//for parsing application/json
// app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
//首页渲染
app.get("/",function (req,res) {
    res.render("seacher.ejs");
})
app.get("/favicon.ico",function(req,res){
    return;
})
//引入路由
require("./route/route.search")(app);
require("./route/route.etlist")(app);
require("./route/route.etinfo")(app);
require("./route/route.chart")(app);
//开启监听
app.listen(9090,function(err){
   if(err) throw err;
});

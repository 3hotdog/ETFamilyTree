"use strict";
const  moment=require("moment"),
    etinfoDao=require("../dao/dao.etinfo");
//企业超!详细信息
function queryEtInfo(et_id,res){
    etinfoDao.etById(et_id,function (etinfo) {
        etinfoDao.etInvest(et_id,function (etinvest) {
            etinfoDao.manInvest(et_id,function (maninvest) {//股东
                etinfoDao.etInvested(et_id,function(etinvested){//对外投资
                    etinfo[0].create_date=dateFormat(etinfo[0].create_date);
                    etinfo[0].confirm_date=dateFormat(etinfo[0].confirm_date);
                    etinvested.forEach(function (etd) {
                        etd.create_date=dateFormat(etd.create_date);
                        etd.confirm_date=dateFormat(etd.confirm_date);
                    })
                    let json={
                        etinfo:etinfo[0],
                        etinvest:etinvest,
                        maninvest:maninvest,
                        etinvested:etinvested
                    }
                    res.render("company_info.ejs",json);
                })
            })
        })
    })
}
function dateFormat(date) {
    if(date!=null){
        return moment(date).format('YYYY-MM-DD');
    }
}
module.exports={queryEtInfo};
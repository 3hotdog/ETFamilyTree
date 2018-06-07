"use strict";
const  moment=require("moment"),
    etinfoDao=require("../dao/dao.etinfo");
//企业超!详细信息
function queryEtInfo(et_id,res){
    etinfoDao.etById(et_id,function (etinfo) {
        etinfoDao.etInvest(et_id,function (etinvest) {
            etinfoDao.manInvest(et_id,function (maninvest) {
                etinfoDao.etInvested(et_id,function(etinvested){
                    etinfo[0].create_date=moment(etinfo[0].create_date).format('YYYY-MM-DD');
                    etinfo[0].confirm_date=moment(etinfo[0].confirm_date).format('YYYY-MM-DD');
                    let json={
                        etinfo:etinfo,
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
module.exports={queryEtInfo};
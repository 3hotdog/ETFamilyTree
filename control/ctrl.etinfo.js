"use strict";
const  moment=require("moment"),
    etinfoDao=require("../dao/dao.etinfo");
//企业超!详细信息
function queryEtInfo(et_id,res){
    etinfoDao.etById(et_id,function (etinfo) {
        etinfoDao.etInvest(et_id,function (etinvest) {
            etinfoDao.manInvest(et_id,function (maninvest) {
                etinfoDao.etInvested(et_id,function(etinvested){
                    console.log(maninvest);
                    if(etinfo[0].create_date!=null)
                        etinfo[0].create_date=moment(etinfo[0].create_date).format('YYYY-MM-DD');
                    if(etinfo[0].confirm_date!=null)
                        etinfo[0].confirm_date=moment(etinfo[0].confirm_date).format('YYYY-MM-DD');
                    etinvested.forEach(function (etd) {
                        if(etd.create_date!=null)
                            etd.create_date=moment(etd.create_date).format('YYYY-MM-DD');
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
module.exports={queryEtInfo};
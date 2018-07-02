/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50713
Source Host           : localhost:3306
Source Database       : 3dog

Target Server Type    : MYSQL
Target Server Version : 50713
File Encoding         : 65001

Date: 2018-06-27 23:50:09
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for enterprise
-- ----------------------------
DROP TABLE IF EXISTS `enterprise`;
CREATE TABLE `enterprise` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `et_name` varchar(40) NOT NULL,
  `create_date` date DEFAULT NULL COMMENT '成立日期',
  `confirm_date` date DEFAULT NULL COMMENT '核准日期',
  `et_type` varchar(40) DEFAULT '' COMMENT '公司类型',
  `credit_code` varchar(18) DEFAULT '' COMMENT '统一社会信用代码',
  `manage_scope` text COMMENT '经营范围',
  `address` varchar(100) DEFAULT '',
  `reg_authority` varchar(40) DEFAULT '' COMMENT '登记机关',
  `reg_fund_str` varchar(50) DEFAULT '' COMMENT '注册资金',
  `legalp_id` int(11) DEFAULT NULL COMMENT '法定代表人',
  PRIMARY KEY (`id`),
  UNIQUE KEY `legalp` (`legalp_id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of enterprise
-- ----------------------------
INSERT INTO `enterprise` VALUES ('1', '杭州阿里巴巴广告有限公司', '2006-12-07', '2016-10-13', '	有限责任公司(自然人投资或控股)', '91330108793696828A', '	国内广告设计、制作、代理、发布;技术服务、技术开发、成果转让:计算机网络技术;服务:第二类增值电信业务中的传真存储转发业务、信息服务业务(仅限互联网信息服务),会展,翻译,成年人的非证书劳动职业技能培训和成年人的非文化教育培训(涉及许可证的项目除外);含下属分支机构的经营范围。', '	杭州市滨江区网商路699号1号楼5楼', '杭州市高新区（滨江）市场监督管理局', '1000万人民币元', '1');
INSERT INTO `enterprise` VALUES ('2', '腾讯科技(深圳)有限公司', '2000-02-24', '2016-11-30', '	有限责任公司（台港澳法人独资）', '9144030071526726XG', '	从事计算机软硬件的技术开发、销售自行开发的软件;计算机技术服务及信息服务;计算机硬件的研发、批发;玩具设计开发;玩具的批发与零售(许可审批类商品除外);商品的批发与零售(许可审批类商品除外);动漫及衍生产品设计服务;电子产品设计服务。(特许经营除外;以上项目不涉及外商投资准入特别管理措施;不涉及国营贸易管理商品;涉及配额、许可证管理商品的,按国家有关规定办理申请)。;', '	深圳市南山区高新区科技中一路腾讯大厦35层', '深圳市市场监督管理局', '	200万美元', '3');
INSERT INTO `enterprise` VALUES ('3', '中霸集團有限公司', '2007-09-17', null, '	私人股份有限公司', null, null, null, null, null, null);
INSERT INTO `enterprise` VALUES ('4', '深圳市腾讯网络信息技术有限公司', '2017-12-22', '2017-12-22', '有限责任公司（法人独资）', '91440300MA5EXCPR1B', '	从事计算机软硬件的技术开发、销售自行开发的软件;计算机技术服务及信息服务;计算机硬件的研发、批发;商品的批发与零售(许可审批类商品除外);电子产品设计服务。(以上项目不涉及外商投资准入特别管理措施;不涉及国营贸易管理商品;涉及配额、许可证管理商品的,按国家有关规定办理申请)。;', '深圳市宝安区新安街道新安六路御景湾花园1栋101、201A、301、401之二楼201A-K49', '深圳市市场监督管理局', '	1000万人民币元', '4');
INSERT INTO `enterprise` VALUES ('5', '深圳市腾讯文化传媒有限公司', '2017-08-03', '2017-08-17', '	有限责任公司（法人独资）', '91440300MA5ENF6G4A', '	广告设计、广告制作、广告代理、广告发布。;', '	深圳市宝安区新安街道新安六路御景湾花园1栋101、201A、301、401之二楼201A-K49', '深圳市市场监督管理局', '	500万人民币元', '5');
INSERT INTO `enterprise` VALUES ('6', '深圳市天美互动娱乐有限公司', '2017-05-24', '2017-05-24', '	有限责任公司（外商投资企业法人独资）', '91440300MA5EJBDF8H', '	计算机技术开发、技术服务、技术咨询、技术培训、技术转让;计算机软硬件与游戏软硬件的研发、设计、销售;动漫设计制作;图文设计制作、网页设计开发、网站设计开发;文化艺术交流活动策划;影视策划;影视投资;影视后期制作;音效制作;设计、制作、代理、发布广告;版权代理;会展会务服务;品牌管理;营销策划;产品的设计及销售。(以上项目不涉及国家规定实施准入特别管理措施;以上经营范围法律、行政法规、国务院规定禁止的项目除外,限制的项目须取得许可后方可经营);', '深圳市前海深港合作区前湾一路1号A栋201室(入驻深圳市前海商务秘书有限公司)', '深圳市市场监督管理局', '	500万人民币元', '6');
INSERT INTO `enterprise` VALUES ('7', '深圳市腾讯魔方科技有限公司', '2016-10-31', '2016-10-31', '	有限责任公司（法人独资）', '91440300MA5DNCUL9W', '	文化艺术活动策划;会议及展览策划;影视策划;动漫设计制作、图文设计制作、网页设计开发、网站设计开发;网络游戏设计、开发、运营、代理、销售、发布;音效制作;广告设计、制作、代理、发布;版权代理。品牌管理;营销策划;产品的设计及销售。国内贸易。项目投资;计算机软、硬件的设计、技术开发、销售、运营、代理、发布;数据库及计算机网络服务;国内商业、物资供销业(不含专营、专控、专卖商品);货物及技术进出口;国际贸易;进出口贸易。(以上经营范围法律、行政法规、国务院规定禁止的项目除外,限制的项目须取得许可后方可经营)。;', '	深圳市前海深港合作区前湾一路1号A栋201室(入驻深圳市前海商务秘书有限公司)', '深圳市市场监督管理局', '	1000万人民币元', '7');
INSERT INTO `enterprise` VALUES ('8', '海南腾讯光子互动娱乐有限公司', '2016-10-26', '2016-10-26', '有限责任公司（非自然人投资或控股的法人独资）', '91469027MA5RDCNM0B', '动漫及网络游戏的研发与创作;游戏产品开发、设计、制作、交易;计算机软硬件服务;玩具、智能玩具、智能硬件的研发、设计和销售;动漫设计、电脑图文设计、制作;电脑动画设计;计算机软硬件与游戏软硬件的研发、设计、销售及技术服务;影视运营、版权代理;影视后期制作;制作、代理、发布:电子和数字媒体广告及影视广告;制作、发行:电影、广播剧、电视剧、动画片(制作须另申报)、图文、专题、专栏(不含时政新闻类)、舞台剧、综艺;组织文化艺术交流活动(不含演出);会展、会务服务。', '海南省老城高新技术产业示范区海南生态软件园', '澄迈县工商行政管理局', '1000万人民币元', '8');
INSERT INTO `enterprise` VALUES ('9', '广州腾讯科技有限公司', '2014-12-31', '2016-12-23', '有限责任公司(外商投资企业法人独资)', '91440101327598294H', '电子、通信与自动控制技术研究、开发;网络技术的研究、开发;计算机技术开发、技术服务;软件服务;软件测试服务;软件批发;软件零售;软件开发;游戏软件设计制作;信息技术咨询服务;数据处理和存储服务;(依法须经批准的项目,经相关部门批准后方可开展经营活动)〓', '广州市海珠区新港中路397号自编72号(商业街F5-1)(仅限办公用途,临时经营场所有效期限至2018年7月15日)', '广州市海珠区工商行政管理局', '7000万人民币元', '9');
INSERT INTO `enterprise` VALUES ('10', '深圳市腾讯信息技术有限公司', '2014-08-07', '2016-11-25', '有限责任公司（法人独资）', '91440300311912277E', '	网络、信息技术服务、技术研发和咨询等(根据国家规定需要审批的,获得审批后方可经营)。;', '深圳市前海深港合作区前湾一路1号A栋201室(入驻深圳市前海商务秘书有限公司)', '深圳市市场监督管理局', '500万人民币元', '10');
INSERT INTO `enterprise` VALUES ('11', '重庆腾讯信息技术有限公司', '2013-10-16', '2016-06-23', '有限责任公司(法人独资)(外商投资企业投资)', '91500000080156661M', '信息技术、计算机专业领域内的技术研发及技术服务,计算机网络工程;房屋租赁**【依法须经批准的项目,经相关部门批准后方可开展经营活动】。', '重庆市北碚区水土高新技术产业园云汉大道5号附40号', '重庆两江新区市场和质量监督管理局', '20000万人民币元', '11');
INSERT INTO `enterprise` VALUES ('12', '深圳市优必选科技有限公司', '2012-03-31', '2018-02-05', '有限责任公司（中外合资）', '91440300593047655L', '从事玩具、智能机器人、通讯设备及相关领域的技术研发、技术咨询;玩具、智能机器人、通讯设备的销售、批发、进出口及相关配套业务(不涉及国营贸易管理商品,涉及配额、许可证管理及其他专项规定管理的商品,按国家有关规定办理申请);生产玩具、智能机器人、通讯设备。;', '深圳市南山区学苑大道1001号南山智园C1栋16、22楼', '深圳市市场监督管理局', '2544.0927万人民币元', '12');
INSERT INTO `enterprise` VALUES ('13', '深圳市人保腾讯麦盛能源投资基金企业(有限合伙)', '2012-03-20', '2015-02-12', '有限合伙', '914403005930447881', '股权投资,项目投资,投资管理,受托资产管理,投资咨询,企业投资顾问,企业管理咨询,经济信息咨询,国内贸易(法律、行政法规、国务院决定规定在登记前须经批准的项目除外)。;', '深圳市前海深港合作区前湾一路1号A栋201室(入驻深圳市前海商务秘书有限公司)', '深圳市市场监督管理局', '1000000万人民币元', null);
INSERT INTO `enterprise` VALUES ('14', '中国人保资产管理股份有限公司', null, null, null, null, null, null, null, null, null);
INSERT INTO `enterprise` VALUES ('15', '深圳市麦盛资产管理有限公司', '2007-09-18', '2018-04-17', '有限责任公司（法人独资）', '91440300667072862Q', '投资兴办实业(具体项目另行申报);受托资产管理,信息咨询(法律、行政法规、国务院决定禁止的项目除外,限制的项目须取得许可后方可经营)。;', '深圳市福田区车公庙绿景纪元大厦53层53A;53C单元', '深圳市市场监督管理局', '10000万人民币元', '13');
INSERT INTO `enterprise` VALUES ('16', '深圳市保腾盛基金管理有限公司', '2012-01-18', '2018-01-25', '有限责任公司', '91440300589192163B', '受托管理股权投资基金;企业投资顾问;受托资产管理;投资咨询;企业管理咨询;经济信息咨询;国内贸易。(以上均不含证券、期货、保险及其它金融业务,不含法律、行政法规、国务院决定规定需前置审批和禁止的项目);', '深圳市前海深港合作区前湾一路1号A栋201室(入驻深圳市前海商务秘书有限公司)', '深圳市市场监督管理局', '	1000万人民币元', '14');

-- ----------------------------
-- Table structure for investor_et
-- ----------------------------
DROP TABLE IF EXISTS `investor_et`;
CREATE TABLE `investor_et` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `et_id` int(11) DEFAULT NULL,
  `investor_et` int(11) DEFAULT NULL,
  `et_fund` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `investor_et` (`investor_et`),
  KEY `et_id2` (`et_id`),
  CONSTRAINT `et_id2` FOREIGN KEY (`et_id`) REFERENCES `enterprise` (`id`),
  CONSTRAINT `investor_et` FOREIGN KEY (`investor_et`) REFERENCES `enterprise` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of investor_et
-- ----------------------------
INSERT INTO `investor_et` VALUES ('1', '2', '3', '	200万美元');
INSERT INTO `investor_et` VALUES ('2', '4', '2', '1000万元');
INSERT INTO `investor_et` VALUES ('3', '5', '2', '500万元');
INSERT INTO `investor_et` VALUES ('4', '6', '2', '500万元');
INSERT INTO `investor_et` VALUES ('5', '7', '2', '1000万元');
INSERT INTO `investor_et` VALUES ('6', '8', '2', '1000万元');
INSERT INTO `investor_et` VALUES ('7', '9', '2', '7000万人民币');
INSERT INTO `investor_et` VALUES ('8', '10', '2', '500万元');
INSERT INTO `investor_et` VALUES ('9', '11', '2', '20000万');
INSERT INTO `investor_et` VALUES ('10', '12', '2', '2544.0927万元');
INSERT INTO `investor_et` VALUES ('11', '13', '2', '1000000万元');
INSERT INTO `investor_et` VALUES ('12', '13', '14', '949000万元');
INSERT INTO `investor_et` VALUES ('13', '13', '15', '1000万元 ');
INSERT INTO `investor_et` VALUES ('14', '13', '16', '220.50万元 ');
INSERT INTO `investor_et` VALUES ('15', '16', '14', '510万元 ');
INSERT INTO `investor_et` VALUES ('16', '16', '15', '245万元 ');
INSERT INTO `investor_et` VALUES ('17', '16', '2', '245万元 ');

-- ----------------------------
-- Table structure for investor_man
-- ----------------------------
DROP TABLE IF EXISTS `investor_man`;
CREATE TABLE `investor_man` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `et_id` int(10) DEFAULT NULL COMMENT '被投资公司',
  `investor_man` int(11) DEFAULT NULL COMMENT '投资人',
  `man_fund` varchar(40) DEFAULT NULL COMMENT '投资人投资资金',
  PRIMARY KEY (`id`),
  KEY `et_id1` (`et_id`),
  KEY `investor_man` (`investor_man`),
  CONSTRAINT `et_id1` FOREIGN KEY (`et_id`) REFERENCES `enterprise` (`id`),
  CONSTRAINT `investor_man` FOREIGN KEY (`investor_man`) REFERENCES `man` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of investor_man
-- ----------------------------
INSERT INTO `investor_man` VALUES ('1', '1', '1', '800万元');
INSERT INTO `investor_man` VALUES ('2', '1', '2', '200万元');

-- ----------------------------
-- Table structure for man
-- ----------------------------
DROP TABLE IF EXISTS `man`;
CREATE TABLE `man` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `legalp_name` varchar(10) DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of man
-- ----------------------------
INSERT INTO `man` VALUES ('1', '马云');
INSERT INTO `man` VALUES ('2', '谢世煌');
INSERT INTO `man` VALUES ('3', '马化腾');
INSERT INTO `man` VALUES ('4', '金国权');
INSERT INTO `man` VALUES ('5', '唐拯');
INSERT INTO `man` VALUES ('6', '姚晓光');
INSERT INTO `man` VALUES ('7', '张晗劲');
INSERT INTO `man` VALUES ('8', '陈宇');
INSERT INTO `man` VALUES ('9', '张颖');
INSERT INTO `man` VALUES ('10', '唐毅斌');
INSERT INTO `man` VALUES ('11', '卢山');
INSERT INTO `man` VALUES ('12', '周剑');
INSERT INTO `man` VALUES ('13', '余从伯');
INSERT INTO `man` VALUES ('14', '张倩');

-- ----------------------------
-- Procedure structure for cursor_etInvest
-- ----------------------------
DROP PROCEDURE IF EXISTS `cursor_etInvest`;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `cursor_etInvest`(id INT)
begin
    -- 声明与列的类型相同的四个变量
    declare et_id INT; 
		declare etname varchar(20); 
		declare etfund varchar(20); 
declare regfund varchar(20); 
		-- 创建结束标志变量
		declare done int default false;

-- 1、定义一个游标mycursor
    declare mycursor cursor for
			select et.id,et.et_name,-(-iet.et_fund) et_fund,-(-et.reg_fund_str)
			from enterprise et RIGHT JOIN investor_et iet
			on et.id=iet.investor_et where et_fund in 
			(select MAX(-(-iet.et_fund)) from investor_et iet where iet.et_id=id);
-- 指定游标循环结束时的返回值
		declare continue HANDLER for not found set done = true;
		SET @@max_sp_recursion_depth = 20;
-- 2、打开游标
    open mycursor;
-- 3、使用游标获取列的值
		fetch mycursor into et_id,etname,etfund,regfund; 
		INSERT INTO tmp_et VALUES (et_id,etname,etfund,regfund);
	WHILE (!done)
  DO
    CALL cursor_etInvest(et_id);
    FETCH mycursor INTO et_id,etname,etfund,regfund;
  END WHILE;
-- 4、显示结果
    select et_id,etname,etfund,regfund;
-- 5、关闭游标
    close mycursor;
end
;;
DELIMITER ;

-- ----------------------------
-- Procedure structure for etTable
-- ----------------------------
DROP PROCEDURE IF EXISTS `etTable`;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `etTable`(id INT)
begin
		DROP TEMPORARY TABLE IF EXISTS tmp_et;
			CREATE TEMPORARY TABLE tmp_et(
			et_id INT,
			etname varchar(40),
			etfund decimal,
			regfund decimal
		);
CALL cursor_etInvest(id);
  SELECT distinct *
FROM
  tmp_et;
end
;;
DELIMITER ;

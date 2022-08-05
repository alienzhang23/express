var express = require('express');
var router = express.Router();
var conn = require("../db/index"); //引入db
var jsonToHump = require("../utils/resuleFormat"); //参数驼峰格式
var { exactQuery, likeQuery, queryPage } = require('../utils/allQuery') //精准查询
/* GET home page. */
//示例
router.get("/", function(req, res, next) {
  conn.query(`select COUNT(*) from oe_activity where is_template=0 ${likeQuery('activity_name',req.query.activityName)} 
  ${exactQuery('activity_status',req.query.activityStatus)};select * from oe_activity where is_template=0 ${likeQuery('activity_name',req.query.activityName)} 
  ${exactQuery('activity_status',req.query.activityStatus)} order by id desc ${queryPage(req.query.pageNum,req.query.pageSize)}`,
      function(error, results, fields) {
          if (!error) {
              var result = {
                  data: {
                      list: jsonToHump(results[1]),
                      total: results[0][0]["COUNT(*)"],
                      pageInfo: {
                          pageNum: req.query.pageNum,
                          pageSize: req.query.pageSize,
                      },
                  },
                  status: 200,
                  message: "success",
              };
              res.send(result);
          }
      }
  );
});
//示例
router.post("/zsadmin/addActivity", jwtCheck, function(req, res, next) {

  let activityCode = "HD" + randNum();
  conn.query(
      `insert into oe_activity(activity_status,activity_code,activity_name,activity_desc,activity_logo,pr_code_logo,school_logo,template_code,creator) values (1,'${activityCode}','${req.body.activityName}','${req.body.activityDesc}','${req.body.activityLogo}','${req.body.prCodeLogo}','${req.body.schoolLogo}','${req.body.templateCode}','${req.userCode
  }')`,
      function(error, results, fields) {
          if (results) {
              console.log(result)
              var result = {
                  data: {
                      activityCode: activityCode,
                      id: results.insertId
                  },
                  status: 200,
                  message: "success",
              };
              res.send(result);
          }
      }
  );
});
module.exports = router;

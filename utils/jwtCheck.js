const e = require('express');
var jwt = require('jsonwebtoken');
var request = require("request");

const jwtKey = 'zsadmin'
const jwtUrl = 'https://i.hailiangedu.com/zuul/login/getUserInfo'

const jwtSign = (data) => { // token生成函数，有效时间为一个小时
    const token = jwt.sign(data, jwtKey, { expiresIn: 60 * 60 * 24 })
    return token
}

const jwtCheck = (req, res, next) => { // token验证函数
    // const token = req.headers['authorization']
    // jwt.verify(token, jwtKey, (err, data) => {
    //     if (err) {
    //         res.send({
    //             data: 'token无效',
    //             status: 403,
    //             message: 'token无效'
    //         })
    //     } else {
    //         req.userCode = data.staffCode
    //         next()
    //     }
    // })
    request.get({
        url: jwtUrl,
        headers: {
            Authorization: req.headers['authorization']
        }
    }, (error, response, body) => {
        let userInfo = JSON.parse(body)
        if (userInfo.status == 403) {
            res.send({
                data: 'token无效',
                status: 403,
                message: 'token无效'
            })
        } else {
            req.userCode = userInfo.data.staffCode
            next()
        }
    });
}

module.exports = {
    jwtUrl,
    jwtSign,
    jwtCheck
}
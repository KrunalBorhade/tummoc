var express = require('express');
var router = express.Router();
let config = require('../utils/jwt');
let jwt = require('jsonwebtoken');
let userController = require("../controller/userController")
const passport = require('passport')
require('../utils/passport')(passport);




router.post('/login', async function (req, res) {
    if (!req.body.email || !req.body.password) {
        return res.status(400).message({ error: error.msg })
    }
    let loginUser = await userController.Login(req.body)
    if (loginUser) {
        let token = jwt.sign(loginUser.toJSON(), config.secret, { expiresIn: '1h' });
        res.status(200).message({
            status: true,
            message: "Login Successfully",
            token: 'JWT ' + token,
            loginUser: loginUser
        })
    }
    else {
        res.status(404).message({
            status: false,
            message: "Invalid Credintials"

        })
    }

})

module.exports = router;
"use strict";

const express = require("express");  //express 모듈 import
const router = express.Router();  // 라우팅 분리

const ctrl = require("./home.ctrl");

router.get('/', ctrl.hello);

router.get("/", ctrl.login);

module.exports = router;

const home = require("./routes/home");  
app.use("/", home);  //미들웨어 등록
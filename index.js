"use strict";

const express = require("express");  //express 모듈 import
const router = express.Router();  // 라우팅 분리

router.get("/", function(request, response) {
    response.render("home/index");
});

router.get("/login", function(request, response) {
    response.render("home/login");
});

module.exports = router;

const home = require("./routes/home");  
app.use("/", home);  //미들웨어 등록
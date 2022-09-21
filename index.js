const jwt = require('jsonwebtoken');
const express = require('express');
const dotenv = require('dotenv');

const app = express();
// 환경변수 사용선언
dotenv.config();
app.use(express.json());
const port = 3000;


// POST login요청이 들어오면 body와 id와 password를 싫어서 요청으로 가정하여 jwt를 발급해준다.
app.post("/login", (req, res, next) => {
    const key = process.env.SECRET_KEY;
    // 받은 요청에서 db의 데이터를 가져온다(로그인 정보)
    const nickname = "JY";
    const profile = "images";
    let token = "";
    // 형식: jwt.sign(payload, secretOrPrivateKey, [options, callback])
    token = jwt.sign(
        {
            type: "JWT",
            nickname: nickname,
            profile: profile,
        },
        key,
        {
            expiresIn: "15m",
            issuer: "토큰발급자",
        }
    );

    //response
    return res.status(200).json({
        code: 200,
        message: "token is created",
        token: token
    });
});

app.listen(port, function() {
    console.log("실행중");
});
/*const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const app = require("express");

dotenv.config();

export const auth = (req, res, next) => {
    const key = process.env.SECRET_KEY;
    // 인증 완료
    try {
        req.decoded = jwt.verify(req.headers.authorization, key);
        return next();
    } catch(error) {
        // 인증 실패
        // 유효시간이 초과된 경우
        if(error.name === "TokenExpiredError") {
            return res.status(419).json({
                code: 419,
                message: "토큰이 만료되었습니다.",
            });
        }
        // 토큰의 비밀키가 일치하지 않는 경우
        if(error.name === "JsonWebTokenError") {
            return res.status(401).json({
                code: 401,
                message: "유효하지 않은 토큰입니다."
            })
        }
    }
};*/

/*app.get("/payload", auth, (req, res) => {
    const nickname = req.decoded.nickname;
    const profile = req.decoded.profile;
    return res.status(200).json({
        code: 200,
        message: "토큰이 정상입니다.",
        data: {
            nickname: nickname,
            profile: profile
        }
    })
})*/


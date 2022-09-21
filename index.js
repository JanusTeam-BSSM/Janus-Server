import jwt from 'jsonwebtoken';
import express from 'express';
import dotenv from 'dotenv';
import auth from "./authMiddleware.js";

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
            expiresIn: "30m",
            issuer: "http://localhost:3000",
        }
    );

    //response
    return res.status(200).json({
        code: 200,
        message: "token is created",
        token: token
    });
});

app.get("/payload", auth, (req, res) => {
    console.log("run");
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
});

app.listen(port, function() {
    console.log("실행중");
});



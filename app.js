const express = require('express');
const app = express();

app.listen(3000, function() {
    console.log("서버 가동");
});

app.get('/', function(request, response) {
    response.send("여기는 루트입니다.");
});

app.get('/login', function(request, response) {
    response.send("여기는 로그인 화면입니다.");
});

app.set("views", "./views");
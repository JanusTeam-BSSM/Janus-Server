import fs from 'fs';
import express from 'express';

const app = express()

app.get('/',function(req, res) {
    fs.readFile('index.html', function(error, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
        console.log('메인페이지');
    })
});

/*데이터베이스 연결*/
import MongoClient from 'mongodb';


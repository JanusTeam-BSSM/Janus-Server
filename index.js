const app = require("express")()
const http = require("http").createServer(app)

require("dotenv").config();

app.get('/hello', (req, res) => {
    res.send('Node server is running....');
});

// Socket Logic
const socketio = require('socket.io')(http)

socketio.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('chat message', (msg) => {
      socketio.emit('chat message', msg);
    });
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
  });
http.listen(process.env.PORT, 'localhost',() => {
    console.log(`Server running at http://127.0.0.1:${process.env.PORT}/`);
});
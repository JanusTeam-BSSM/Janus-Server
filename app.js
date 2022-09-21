const express = require('express');
const app = express();

app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/", function(request, response) {
    response.render("home/index");
});

app.get("/", function(request, response) {
    response.render("home/login");
});

module.exports = app;
const http = require("http");
const express = require("express");

const app = express();

app.use("/product", (req, res, next) => {
  res.send("<h1>Hello from express product</h1>");
});

app.use("/", (req, res, next) => {
  res.send("<h1>Hello from express</h1>");
});

const server = http.createServer(app);

server.listen(3000);

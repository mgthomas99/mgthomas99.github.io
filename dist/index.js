"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const server = express();
server.use(express.static("static/"));
server.get("/", (req, res) => {
    res.sendFile("static/index.html");
});
server.get("/:r", (req, res) => {
    res.send(String(Math.random()));
});
server.listen(process.env.PORT || 8080);
console.log("Server listening on port 8080!");

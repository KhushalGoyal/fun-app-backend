const express = require('express');
const app = express()
    , server = require('http').Server(app)
const io = require('socket.io')(server);

module.exports = {
    PORT : process.env.PORT,
    HOST : process.env.HOST,
    SEVER : server,
    IO : io
}
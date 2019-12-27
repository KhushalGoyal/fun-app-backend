const socketConfig = require('../config/socket.config');
const dataModel  = require('../models/SocketModel');
socketConfig.IO.on('connection', function (socket) {
    socket.on('customEvent', function (data) {
        let result = dataModel.addUser(data)
        socket.broadcast.emit('news',{ userList : dataModel.userList()})
    });
    socket.emit('news', { userList : dataModel.userList()})
});
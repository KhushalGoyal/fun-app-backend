const socketConfig = require('./config/socket.config');
require('./controllers/SocketController');

socketConfig.SEVER.listen(8000, () => {
    console.log("App is running on port : 8000")
})
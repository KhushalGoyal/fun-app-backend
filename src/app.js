const socketConfig = require('../config/socket.config');
const path = require('path');

socketConfig.SEVER.listen(8000, ()=>{
    console.log("App is running on port : 8000")
})
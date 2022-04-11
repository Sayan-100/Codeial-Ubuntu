module.exports.chatSockets = function(socketServer) {
    let io = require('socket.io')(socketServer);

    //io fires the event connection 
    io.sockets.on('connection', function(socket) {

    })
}
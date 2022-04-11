module.exports.chatSockets = function(socketServer) {
    let io = require('socket.io')(socketServer);

    //io fires the event connection 
    io.sockets.on('connection', function(socket) {
        console.log('new connection received', socket.id);
        //confirms to conhaldler that connection good

        socket.on('disconnect', function() {
            console.log('socket disconnected!');
        });
    });
}
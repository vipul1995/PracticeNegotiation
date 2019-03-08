exports = module.exports = function (io) {
    //Set Listeners
    let user = [];
   
    let soketIO = io;
    exports.soketIO = soketIO;

    io.on('connection', (socket) => {
     //Map: id -> name of the user
        console.log('aaaaaa user has connected');
        socket.on('enter channel', (username) => {
            socket.join(username);
            console.log('user issssss',username);
            io.sockets.in(username).emit('refresh privateMessages', 'Welcome ' + username + ' gootted socket here');
        }); 
        socket.on('leave channel', (username) => {
            socket.leave(username);
            console.log('user has left channel', username)
        });

        socket.on('new privateMessage', function (socketMsg) {
            console.log('message: new oneeeeeeeeeeeeeeeeeeeeeeeeeeee ' , socketMsg);
            socketMsg.to.forEach(function (element) {
                io.sockets.in(element.email_id).emit('refresh privateMessages', { subject: socketMsg.subject, mail_type: socketMsg.mail_type, sender_name: socketMsg.froms.username});
                console.log(socketMsg.mail_type);
            });
        });
        
        socket.on('disconnect', () => {
            console.log('user disconnect')
           
        });
    });
}
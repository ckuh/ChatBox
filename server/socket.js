var getUserDataHelper = require('./helperFunc/getUserDataHelper');

module.exports = function(io) {

  io.on('connection', function(socket) {

    socket.on('disconnect', function() {

      io.emit('user left')
    });

    socket.on('userLogin', function(user) {

      io.to(socket.id).emit('userLogin', user);
    })

    socket.on('sendUserInput', function(user) {
      io.emit('sendUserInput', user);
    })
  })
}

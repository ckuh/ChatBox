var getUserDataHelper = require('./helperFunc/getUserDataHelper');

module.exports = function(io) {
  // var userCount = 0;
  io.on('connection', function(socket) {
    // userCount++;
    socket.on('disconnect', function() {
      // userCount--;
      io.emit('user left')
    });

    socket.on('userLogin', function(user) {
      // user.userCount = userCount
      io.to(socket.id).emit('userLogin', user);
    })

    socket.on('sendUserInput', function(user) {
      io.emit('sendUserInput', user);
    })
  })
}

module.exports = function(host) {
  console.log(host)
  var socket = require('socket.io-client')(host, {
    reconnection: true,
    reconnectionDelay: 5000
  });

  socket.on('connect', function(){ console.log("connected")});
  socket.on('msg', function(data){ console.log("Message received: ", data)});
  socket.on('disconnect', function(){console.log("disconnected")});
};
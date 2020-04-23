/* Set up */
const express = require('express')
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const colors = require('colors');
const PORT = process.env.PORT || 3000;

/* Static files */
app.use(express.static('public'))

/* Routes */
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

/* Socket.io */
io.on('connection', socket => {

  console.log('user connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('new-msg', data => {
    console.log(`Message: ${data}`);
    io.emit('new-msg', data);
    //socket.broadcast.emit('new-msg', data);
  });

});

/* Server */
server.listen(PORT, () => {
  console.log(`[Node.js] server on port: ${PORT} \u2713 `.bgGreen)
});

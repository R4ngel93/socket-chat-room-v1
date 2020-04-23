$(document).ready(function () {

  //const socket = io.connect('http://localhost:3000', { 'forceNew': true });
  const socket = io();

  $('form').submit(function (event) {
    event.preventDefault(); // Prevents page reloading
    socket.emit('new-msg', $('#msg').val());// Emits the input id: msg value
    $('#msg').val('');// Clears the input
    return false;// Ammm returns false
  });

  socket.on('new-msg', data => {
    $('#messages').append($('<li>').text(data));
  });

});

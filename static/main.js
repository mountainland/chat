// static/main.js
var socket = io();
var messages = document.getElementById('messages');
var inputMessage = document.getElementById('input_message');
var sendButton = document.getElementById('send_button');

sendButton.onclick = function() {
    socket.emit('chat message', inputMessage.value);
    inputMessage.value = '';
    return false;
};

socket.on('chat message', function(message) {
    var li = document.createElement('li');
    li.textContent = message;
    messages.appendChild(li);
});

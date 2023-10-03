const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    console.log('Usuario conectado');

    socket.on('chat_message_1', function(msg){
        console.log('Mensaje de chat 1: ' + msg);
        io.emit('chat_message_1', msg);
    });
    
    socket.on('chat_message_2', function(msg){
        console.log('Mensaje de chat 2: ' + msg);
        io.emit('chat_message_2', msg);
    });
    
    socket.on('disconnect', function(){
        console.log('Usuario desconectado');
    });
});

http.listen(3000, function(){
    console.log('Servidor conectado en http://localhost:3000');
});
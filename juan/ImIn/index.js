// Script entier en mode strict
"use strict";

let 	config = require('./config');

const	HOST = process.env.HOST || config.host, 
		PORT = process.env.PORT || config.port,

		firebase = require('firebase'),
		ip = require("ip"),
		http = require('http'),
		fs   = require('fs');

firebase.initializeApp({
    databaseURL: 'https://becode-imin.firebaseio.com/',
    serviceAccount: './db/Becode-ImIn-fb6bf9274c93.json'
});

// Get a database reference to our posts
const 	db = firebase.database();
let 	ref = db.ref("/member/");

let 	members = null;

// Attach an asynchronous callback to read the data at our posts reference
ref.on("value", function(snapshot) {
	members = snapshot.val();
}, function (errorObject) {
  	console.log("The read failed: " + errorObject.code);
});

const 	handler = function(req,res){
	if(req.url == '/'){
		req.url = '/index.html';
	}
	fs.readFile('./app'+req.url,function(err,file){
		if(err){
			res.writeHead(404);
			res.end('Content not found');
		}else{
			res.writeHead(200);
			res.end(file.toString());
		}
	})
}

const 	server 	= http.createServer(handler),
		io		= require('socket.io')(server);

let 	Users = {};

io.on('connection',(socket)=>{
	console.log('New socket with ID: '+socket.id+' just connected.');

	// sending to sender-client only
	// socket.emit('message', "this is a test");

	// sending to all clients, include sender
	// io.emit('message', "this is a test");

	// sending to all clients except sender
	// socket.broadcast.emit('message', "this is a test");

	// sending to all clients in 'game' room(channel) except sender
	// socket.broadcast.to('game').emit('message', 'nice game');

	// sending to all clients in 'game' room(channel), include sender
	// io.in('game').emit('message', 'cool game');

	// sending to sender client, only if they are in 'game' room(channel)
	// socket.to('game').emit('message', 'enjoy the game');

	// sending to all clients in namespace 'myNamespace', include sender
	// io.of('myNamespace').emit('message', 'gg');

	// sending to individual socketid
	// socket.broadcast.to(socketid).emit('message', 'for your eyes only');



	socket.on('getMembers',()=>{
		socket.emit('setMembers',members);
	});

	socket.on('disconnect',()=>{
		console.log('Socket with ID: '+socket.id+' just disconnected.');
	});
});

server.listen(PORT,HOST,()=>{
	console.log('Server running on: '+ip.address()+':'+PORT);
});
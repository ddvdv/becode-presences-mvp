"use strict";

const 	socket = io.connect();

let	user = window.localStorage.getItem('user');

if(!user){
	console.log('User do no exist, creating user');

  $('#main-content').load('views/users.html');


	// socket.emit('home');
	// socket.on('home',(data)=>{

	// });

	// $('#main-content').load('views/home.html');
}else{
	socket.emit('getTeam');
	socket.on('setTeam',(team)=>{

	});
}
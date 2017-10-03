///// READ

// Demande de la liste des prom
socket.emit('getPromsList');

// -> Obtention de la liste des prom
socket.on('promsList', (data)=>{
  promsList = data; // JSON avec "promId", "nom de prom", "location"
} );


// Demande de la liste des formateurs
socket.emit('getUsersList');

// -> Obtention de la liste des formateurs
socket.on('usersList', (data)=>{
  usersList = data;// JSON avec "userId", "prénom", "nom"
} );


// Demande de la liste des apprenants d'une certaine prom
socket.emit('getMembersList', promId);

// -> Obtention de la liste des apprenants
socket.on('membersList', (data)=>{
  membersList = data;// JSON avec "userId", "prénom", "nom", "timeOfArrival" (si défini)
} );



///// UPDATE

// Envoi de l'heure d'arrivée d'un apprenant
socket.emit('setTimeOfArrival', {userId, firstName, lastName, timeOfArrival} );

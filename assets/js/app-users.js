let usersList = [ // mock data, récup liste de la DB
{
  "id": 1,
  "userName": "Teddy"
},
{
  "id": 2,
  "userName": "Alex"
},
{
  "id": 3,
  "userName": "Emily"
},
{
  "id": 4,
  "userName": "Eric"
},
{
  "id": 5,
  "userName": "Juan"
},
{
  "id": 6,
  "userName": "Bertrand"
}
];

// socket.get('getPromsList' , (data)=>{
//   promsList = data;
// } );

console.log(usersList);

$(document).ready(function(){
    // Génération de la liste de users
    for(user of usersList){
      var userElt = document.createElement('div');
      userElt.innerHTML = `
        <div class="user" id="${user.id}">
            <div class="name">
              ${user.userName}
            </div>
              <button class="btn btn-primary selected">Select</button>
        </div>
        `;
        $('#liste').append(userElt);
     }
   // Enrgistrement cookie lsq select
    $('.selected').click(function(){

      let selectedUserId = $(this).closest('.user').attr('id');
      selectedUserId = +selectedUserId;
      console.log(selectedUserId);

      window.localStorage.setItem('userId', selectedUserId)

      for(user of usersList){
        if (user.id === selectedUserId){
          window.localStorage.setItem("userName", user.userName);
        }
      }
      document.location.href="index.html"
    })
});
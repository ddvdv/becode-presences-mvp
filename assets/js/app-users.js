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

      setCookie("userId", selectedUserId, 365);

      for(user of usersList){
        if (user.id === selectedUserId){
          setCookie("userName", user.userName, 365);
        }
      }
      document.location.href="index.html"
    })
});

// Fonction générique d'enregistrement et récupération de cookies
function setCookie(cname, cvalue, exdays) {
    let d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
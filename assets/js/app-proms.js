let promsList = [ // mock data, récup liste de la DB
{
  "id": 1,
  "promName": "Prom 1",
  "promLocation": "Central"
},
{
  "id": 2,
  "promName": "Lovelace",
  "promLocation": "Central"
},
{
  "id": 3,
  "promName": "Cycorp",
  "promLocation": "Central"
}
];

// socket.get('getPromsList' , (data)=>{
//   promsList = data;
// } );


$(document).ready(function(){
    // Génération de la liste de proms
    for(prom of promsList){
      let promElt = document.createElement('div');
      promElt.innerHTML = `
        <div class="prom" id="${prom.id}">
            <div class="name">
              ${prom.promName} <br>
              <span class="location">${prom.promLocation}</span>
            </div>
              <button class="btn btn-primary selected">Select</button>
        </div>
        `;
        $('#liste').append(promElt);
    }
    // Enrgistrement cookie lsq select
    $('.selected').click(function(){

      let selectedPromId = $(this).closest('.prom').attr('id');
      selectedPromId = +selectedPromId;
      console.log(selectedPromId);

      window.localStorage.setItem("promId", selectedPromId);

      for(prom of promsList){
        if (prom.id === selectedPromId){
          window.localStorage.setItem("promName", prom.promName);
        }
      }
      document.location.href="index.html"
    })

});
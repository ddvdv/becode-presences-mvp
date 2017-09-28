let studentsList = [
{
  "id": 1,
  "fullName": "John Mich"
},
{
  "id": 2,
  "fullName": "John MichMich"
},
{
  "id": 3,
  "fullName": "John MichMichMich"
}
];

console.log(studentsList);

$(document).ready(function(){
    // Génération de la liste de students
    for(student of studentsList){
      console.log("et... " + student);
      var studentElt = document.createElement('div');
      studentElt.innerHTML = `
        <div class="student" id="${student.id}">
          <img src="avatar.png" alt="" class="img-fluid">
          <div class="info">
          <div class="name">
            ${student.fullName}
          </div>
          <div class="arrival">
            <div class="btn-group" role="group">
            <button id="btnGroupDrop1" type="button" class="btn btn-warning dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Arrived late
            </button>
            <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
            <a class="dropdown-item" href="#" id="arrivedNow-">Arrived now</a><br><br>
            <a class="dropdown-item" href="#" id="arrivedAt">Arrived at...</a>
            </div>
            </div>
            <button class="btn btn-success" id="onTime">On Time</button>
            </div>
          </div>
        </div>
        `;
        $('#liste').append(studentElt);
    }

    // Arrivée à temps
    $(".student").on('click', '#onTime', function(){

      $('.arrival').html(`
        <p>arrived at <span>09.30Hrs</span></p>
        <button class="btn btn-primary" id="edit">Edit</button>
        `);
    });
    // Sous-button arrivée en retard, maintenant
    $(".student").on('click', '#arrivedNow', function(){
      $('.arrival').html(`
        <p>arrived at <span>09.30Hrs</span></p>
        <button class="btn btn-primary" id="edit">Edit</button>
        `);
    });
    // Sous-button arrivée en retard, dirige vers snippet time
    $(".student").on('click', '#arrivedAt', function(){
      $('.arrival').html(`
        <div class='col-xs-8'>
        <div class="form-group">
        <div class='input-group date' id='datetimepicker3'>
        <input type='text' class="form-control" />
        <span class="input-group-addon">
        <span class="glyphicon glyphicon-time"></span>
        </span>
        </div>
        </div>
        </div>
        <button class="btn btn-primary" id="enterTime">Enter</button>
        `);
        // et ajout du js snippet time
        $('#datetimepicker3').datetimepicker({
          format: 'LT'
        });
       // et d'un bouton pour valider l'entrée
       $(".arrival").on('click', '#enterTime', function(){
        $('.arrival').html(`
          <p>arrived at <span>09.30Hrs</span></p>
          <button class="btn btn-primary" id="edit">Edit</button>
          `);
      });
     });
    $(".student").on('click', 'datetimepicker3', function(){
      $('#datetimepicker3').datetimepicker({
        format: 'LT'
      });
    });
    // Boutton Edit pour rebasculer au statut initial
    $(".student").on('click', '#edit', function(){
      $('.arrival').html(`
        <div class="btn-group" role="group">
        <button id="btnGroupDrop1" type="button" class="btn btn-warning dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Arrived late
        </button>
        <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
        <a class="dropdown-item" href="#" id="arrivedNow">Arrived now</a><br><br>
        <a class="dropdown-item" href="#" id="arrivedAt">Arrived at...</a>
        </div>
        </div>
        <button class="btn btn-success" id="onTime">On Time</button>
        `);
    });
  });
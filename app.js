let studentsList = [
{
  "id": 1,
  "fullName": "John Mich",
  "arrivalTime": "notSet"
},
{
  "id": 2,
  "fullName": "John MichMich",
  "arrivalTime": "notSet"
},
{
  "id": 3,
  "fullName": "John MichMichMich",
  "arrivalTime": "notSet"
},
{
  "id": 4,
  "fullName": "JohnJohn Mich",
  "arrivalTime": "notSet"
},
{
  "id": 5,
  "fullName": "JohnJohn MichMich",
  "arrivalTime": "notSet"
}
];

console.log(studentsList);

$(document).ready(function(){
    // Génération de la liste de students
    for(student of studentsList){
      var studentElt = document.createElement('div');
      studentElt.innerHTML = `
        <div class="student" id="student-${student.id}">
          <img src="avatar.png" alt="" class="img-fluid">
          <div class="info">
          <div class="name">
            ${student.fullName}
          </div>
      
           <div class="arrival">
            <button type="button" class="btn btn-warning" id="late">Arrived late</button>
            <button class="btn btn-success" id="onTime">On Time</button>
            </div>
          </div>
        </div>
        `;
        $('#liste').append(studentElt);
    }

    moment.locale('fr');  // set up de la librairie locale en français
    let supposedTimeofArrival = '09:30'; // Heure d'arrivée pour le "On Tine"

    // Deploiement des bouttons en retard
    $(".student").on('click', '#late', function(){
      // récup de l'id du current student
      let currentStudent = $(this).closest('.student').attr('id');
      // Affichage heure enregistrée
      $("#"+currentStudent+" .arrival").html(`
            <button type="button" class="btn btn-warning" id="arrivedNow">Arrived now</button>
            <button type="button" class="btn btn-warning" id="arrivedAt">Arrived at...</button>
            <button class="btn btn-primary" id="edit">back</button>
        `);
    });

    // Arrivée à temps
    $(".student").on('click', '#onTime', function(){
      // récup de l'id du current student
      let currentStudent = $(this).closest('.student').attr('id');
      // ajout de l'heure d'arrivée dans la studentList
        // let arrivalTime = moment(supposedTimeofArrival.format('LT');
      // Affichage heure enregistrée
      $("#"+currentStudent+" .arrival").html(`
        <p>arrived at <span>${supposedTimeofArrival}</span></p>
        <button class="btn btn-primary" id="edit">Edit</button>
        `);
    });
    // Sous-button arrivée en retard, maintenant
    $(".student").on('click', '#arrivedNow', function(){
      console.log('premier clic');
      // récup de l'id du current student
      let currentStudent = $(this).closest('.student').attr('id');
      // ajout de l'heure d'arrivée dans la studentList
        date = new Date();
        current_hour = date.getTime();
        arrivalTime = moment(current_hour).format('LT');
      // Affichage heure enregistrée
      $("#"+currentStudent+" .arrival").html(`
        <p>arrived at <span>${arrivalTime}</span></p>
        <button class="btn btn-primary" id="edit">Edit</button>
        `);
    });
    // Sous-button arrivée en retard, dirige vers snippet time
    $(".student").on('click', '#arrivedAt', function(){
      let currentStudent = $(this).closest('.student').attr('id');
      $("#"+currentStudent+" .arrival").html(`        <div class='col-xs-8'>
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
          format: 'LT',
          format: 'HH:mm'
        });
        // simulation click sur le snippet
        $('#datetimepicker3 span.input-group-addon').trigger('click');
       // et d'un bouton pour valider l'entrée
       $(".arrival").on('click', '#enterTime', function(){
          let currentStudent = $(this).closest('.student').attr('id');
          // récupration de l'heure entrée
          let timeOfArrival = $('#datetimepicker3 input').val();
          $("#"+currentStudent+" .arrival").html(`
            <p>arrived at <span>${timeOfArrival}</span></p>
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
      let currentStudent = $(this).closest('.student').attr('id');
      $("#"+currentStudent+" .arrival").html(`
            <button type="button" class="btn btn-warning" id="late">Arrived late</button>
            <button class="btn btn-success" id="onTime">On Time</button>
        `);
    });
  });
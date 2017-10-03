currentUserName = window.localStorage.getItem('userName');
currentPromName = window.localStorage.getItem('promName');


$(document).ready(function(){
    if (currentUserName === null){
        $('#userName').html('<p>Select a user</p>');
        $('.toProm').addClass("disabled"); 
        $('.toPresences').addClass("disabled"); 
        $('.second-caret-down').addClass('hidden');
    } else{
    $('#userName').html('Hello <p> <span class="name">' + currentUserName + '</span></p>');
    }   
    if (currentPromName === null ){
        $('#promName').html('<p>Select a prom</p>');
        $('.toPresences').addClass("disabled");     
    }
    else {
        $('#promName').html('selected: <p> <span class="name"> ' + currentPromName + '</span></p>');
    }
});


function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


currentUserName = getCookie('userName');


$(document).ready(function(){
    if (currentUserName === ''){
        $('#userName').html('<p>Select a user</p>');
        $('.toProm').addClass("disabled"); 
        $('.toPresences').addClass("disabled"); 
        $('.second-caret-down').addClass('hidden');
    } else{
    $('#userName').html('Hello <p> <span class="name">' + currentUserName + '</span></p>');
    }
});



currentPromName = getCookie('promName');

$(document).ready(function(){
    if (currentPromName === ''){
        $('#promName').html('<p>Select a prom</p>');
        $('.toPresences').addClass("disabled");     
    }
    else {
        $('#promName').html('selected prom: <p> <span class="name"> ' + currentPromName + '</span></p>');
    }
});


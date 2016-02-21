/*TOOLTIPS!*/
$(document).ready(function() {
    $('.tooltip').tooltipster({
        theme: 'tooltipster-punk'
    });
});

$(function() {
    $('.ripple').materialripple();
});

/*from face to right*/
$('#front-to-right').on('click', function() {
    $('#cube').removeClass().addClass('FTR');
});

/*from face to left*/
$('#front-to-left').on('click', function() {
    $('#cube').removeClass().addClass('FTL');
});

/*from right to face*/
$('#right-to-front').on('click', function() {
    $('#cube').removeClass().addClass('FF');
});

/*from right to back*/
$('#right-to-back').on('click', function() {
    $('#cube').removeClass().addClass('RTB');
});

/*from back-to right*/
$('#back-to-right').on('click', function() {
    $('#cube').removeClass().addClass('BTR');
});

/*from-back-to-left*/
$('#back-to-left').on('click', function() {
    $('#cube').removeClass().addClass('BTL');
});

/*from back to right*/
$('#back-to-rigth').on('click', function() {
    $('#cube').removeClass().addClass('BTR');
});

/*from back to right*/
$('#left-to-back').on('click', function() {
    $('#cube').removeClass().addClass('LTB');
});

/*from back to right*/
$('#left-to-face').on('click', function() {
    $('#cube').removeClass().addClass('LTF');
});

/*from back to bottom*/
var messageSent = function() {
    $('#cube').removeClass().addClass('BF');
}


var form = document.getElementById("contact-form");
form.onsubmit = function() {
    var service = document.getElementById("service").value;
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;
    var dataString = 'name=' + name + '&service='+ service + '&phone=' + phone + '&message=' + message;
    console.log(dataString);
    $.ajax ({
        type:"post",
        url: "send.php",
        data: dataString,
        cache: false,
        success: function(html) {
            $('#contact-form').hide();
            $('#partnership').hide();
            $('#cube').removeClass().addClass('BF');
        }
    })
    return false;
};

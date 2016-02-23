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
//services icons
$('#html').on('click', function() {
    $('#cube').removeClass().addClass('RTB');
    $('#service').val('html');
});
$('#front-end').on('click', function() {
    $('#cube').removeClass().addClass('RTB');
    $('#service').val('javascript');
});
$('#cms').on('click', function() {
    $('#cube').removeClass().addClass('RTB');
    $('#service').val('site');
});
$('#ui-ux').on('click', function() {
    $('#cube').removeClass().addClass('RTB');
    $('#service').val('design');
});


var sendForm = function() {
    var task = $("#service").val();
    var clientName = $("#name").val();
    var clientPhone = $("#phone").val();
    var clientMessage = $("#message").val();
    var finishedMessage = 'Тип задачи: ' + task + '. Имя обратившегося: ' + clientName + '. Номер телефона: ' + clientPhone + '. Текст сообщения: ' + clientMessage;
    var msg = $('#contact-form').serialize();

    $.ajax({
        type: "post",
        url: "send.php",
        data: msg,
        cache: false,
        success: function(html) {
            $('#contact-form').hide();
            $('#partnership').hide();
            $('#cube').removeClass().addClass('BF');
        }
    })
    return false;
};



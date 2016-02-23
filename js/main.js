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
//PHONE MASK
$("input[name='phone']").each(function() {
    $(this).mask("+7 (999) 999-99-99");
});

var sendForm = function() {
    var task = $("#service").val();
    var clientName = $("#name").val();
    var clientPhone = $("#phone").val();
    var clientMessage = $("#message").val();
    var finishedMessage = 'Тип задачи: ' + task + '. Имя обратившегося: ' + clientName + '. Номер телефона: ' + clientPhone + '. Текст сообщения: ' + clientMessage;
    var msg = $('#contact-form').serialize();
    if (clientPhone != 0) {
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
        });
    } else {
        $('#partnership').html("Заполните все поля");
        $('#partnership').css('color', '#d14233');
        $('#partnership').css('text-shadow', '0 0 5px #e74c3c')
    }
    return false;
};

/*particlesJS.load('particles-js', 'js/particlesjs-config.json', function() {
  console.log('callback - particles.js config loaded');
});*/

particlesJS("particles-js", { "particles": { "number": { "value": 80, "density": { "enable": true, "value_area": 4249.041961293636 } }, "color": { "value": "#ffffff" }, "shape": { "type": "edge", "stroke": { "width": 0, "color": "#000000" }, "polygon": { "nb_sides": 5 }, "image": { "src": "img/github.svg", "width": 50, "height": 50 } }, "opacity": { "value": 0.5, "random": false, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false } }, "size": { "value": 72.15354273894853, "random": true, "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false } }, "line_linked": { "enable": true, "distance": 224.4776885211732, "color": "#ffffff", "opacity": 0.6894671861721748, "width": 1.603412060865523 }, "move": { "enable": true, "speed": 6, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 } } }, "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" }, "resize": true }, "modes": { "grab": { "distance": 400, "line_linked": { "opacity": 1 } }, "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } }, "retina_detect": true });

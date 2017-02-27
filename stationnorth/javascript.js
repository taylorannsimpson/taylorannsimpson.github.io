

// makes logotype stick to bottom of image logo on scroll

function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var div_top = $('#sticky-anchor').offset().top;
    if (window_top > div_top) {
        $('#typelogo').addClass('stick');
        $('#sticky-anchor').height($('#typelogo').outerHeight());
    } else {
        $('#typelogo').removeClass('stick');
        $('#sticky-anchor').height(0);
    }
}

$(function() {
    $(window).scroll(sticky_relocate);
    sticky_relocate();
});


// loads random image

window.onload = chooseImg;

var Imgs = ["images/StationNorth_01.jpg", "images/StationNorth_02.jpg", "images/StationNorth_03.jpg", "images/StationNorth_04.jpg", "images/StationNorth_05.jpg"];

function chooseImg() {
     var randomNum = Math.floor(Math.random() * Imgs.length);
     document.getElementById("small-img").src = Imgs[randomNum];
};


// enlarges image on click

function enlargeImg(e) {
    if(e.className == 'enlarge-img') {
        e.className = 'splash-img';
    } else {
        e.className = 'enlarge-img';
    }
}

// shows and hides sidebar

// function event1(e) {
//     $('#event-1').toggle(
//         function() {
//             $('#event-1').animate({right: 500})
//         }, function() {
//             $('#event-1').animate({right: 0}) 
//     });
// }

// function event2(e) {
//     $('#event-2').toggle(
//         function() {
//             $('#event-2').animate({right: 0})
//         }, function() {
//             $('#event-2').animate({right: 0}) 
//     });
// }

// function event3(e) {
//     $('#event-3').toggle(
//         function() {
//             $('#event-3').animate({right: 0})
//         }, function() {
//             $('#event-3').animate({right: 0}) 
//     });
// }

// function event4(e) {
//     $('#event-4').toggle(
//         function() {
//             $('#event-4').animate({right: 0})
//         }, function() {
//             $('#event-4').animate({right: 0}) 
//     });
// }

// function event5(e) {
//     $('#event-5').toggle(
//         function() {
//             $('#event-5').animate({right: 0})
//         }, function() {
//             $('#event-5').animate({right: 0}) 
//     });
// }

// function event6(e) {
//     $('#event-6').toggle(
//         function() {
//             $('#event-6').animate({right: 0})
//         }, function() {
//             $('#event-6').animate({right: 0}) 
//     });
// }

// function event7(e) {
//     $('#event-7').toggle(
//         function() {
//             $('#event-7').animate({right: 0})
//         }, function() {
//             $('#event-7').animate({right: 0}) 
//     });
// }

// function event8(e) {
//     $('#event-8').toggle(
//         function() {
//             $('#event-8').animate({right: 0})
//         }, function() {
//             $('#event-8').animate({right: 0}) 
//     });
// }

// function event9(e) {
//     $('#event-9').toggle(
//         function() {
//             $('#event-9').animate({right: 0})
//         }, function() {
//             $('#event-9').animate({right: 0}) 
//     });
// }

// function event10(e) {
//     $('#event-10').toggle(
//         function() {
//             $('#event-10').animate({right: 0})
//         }, function() {
//             $('#event-10').animate({right: 0}) 
//     });
// }

// function event11(e) {
//     $('#event-11').toggle(
//         function() {
//             $('#event-11').animate({right: 0})
//         }, function() {
//             $('#event-11').animate({right: 0}) 
//     });
// }

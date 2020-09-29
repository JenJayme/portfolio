/*jslint browser: true*/
/*global window */

//Key Functions Needed
//starts with full-screen video banner
//on click, show nav bar and divs with project cards
//on hover over project cards, darken and slight animate
var portfolioLink = document.getElementById("portfolio");
// var video = document.getElementById("myVideo");
// var pauseButton = document.getElementById("pauseBtn");
var video = $('#myVideo');
var pauseButton = $('#pauseBtn');
var aboutBtn = $('#aboutBtn').get(0);
var biocard = $('#biocard').get(0);
// function hideVideo() {
//     video.setAttribute("hide");
//     portfolioLink.setAttribute("show");
// }

function pauseVid() {
    "use strict";
    var video = $('#myVideo').get(0);
    console.log("Pause button pressed.");
    if (video.paused) {
        video.play();
        // video.play();
        $('#pauseBtn').text("pause video");
    } else {
        // video.pause(); 
        video.pause();
        $('#pauseBtn').text("play video");
    }
}

function startonPauseVid() {
    "use strict";
    if (window.matchMedia('(prefers-reduced-motion)').matches) {
        video.removeAttribute("autoplay");
        video.pauseVid();
        pauseButton.innerHTML = "Paused";
    }
}

function setUp() {

    document.addEventListener('DOMContentLoaded', function () {
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems, options);
    });


    document.addEventListener('DOMContentLoaded', function () {
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems, options);
    });

    document.addEventListener('DOMContentLoaded', function () {
        var contactBtn = document.getElementById('contactBtn');
        $('contactBtn').on('click', function () {
            open('.tap-target');
            console.log('ContactBtn clicked');
    });

    // Initialize collapsible (uncomment the lines below if you use the dropdown variation)
    var collapsibleElem = document.querySelector('.collapsible');
    var collapsibleInstance = M.Collapsible.init(collapsibleElem, open);

    });
}

// function bioPop() {
//     "use strict";
//     $('#aboutBtn').click(function () {
//         $('popOutRow').removeClass('hidden');
//         $('popOutRow').addClass('visible');
//         console.log('Running bioPop function.');
//         $('#biocard').removeClass('scale-out');
//         $('#biocard').addClass('scale-in');
//         console.log('Scale-in class added to biocard.');
//     });
// }


$(document).ready(function () {
    "use strict";
    // M.AutoInit();
    setUp();
    startonPauseVid();
    $('.modal').modal();
    $('.carousel').carousel().carousel({
        shift: -100,
        dist: -100,
      });
});
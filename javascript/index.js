
// var login_form = document.getElementById('id01');
//
// window.onclick = function(event) {
//     if (event.target == login_form) {
//        login_form.style.display = "none";
//     }
// }

    function pageRedirect() {
      window.location.href = "./subfiles/signup.html";
    }
//above code ends here


//navbar js starts
  $(function () {
      'use strict'

      $("[data-trigger]").on("click", function(){
         var trigger_id =  $(this).attr('data-trigger');
         $(trigger_id).toggleClass("show");
         $('body').toggleClass("offcanvas-active");
});
//navbar js ends

// close if press ESC button
      $(document).on('keydown', function(event) {
        if(event.keyCode === 27) {
          $(".navbar-collapse").removeClass("show");
          $("body").removeClass("overlay-active");
        }
});

// close button
$(".btn-close").click(function(e){
  $(".navbar-collapse").removeClass("show");
  $("body").removeClass("offcanvas-active");
});


})
//navbar ends
//slideshow js starts
var imageSlides = document.getElementsByClassName('imageSlides');
var circles = document.getElementsByClassName('circle');
var leftArrow = document.getElementById('leftArrow');
var rightArrow = document.getElementById('rightArrow');
var counter = 0;

// HIDE ALL IMAGES FUNCTION
function hideImages() {
  for (var i = 0; i < imageSlides.length; i++) {
    imageSlides[i].classList.remove('visible');
  }
}

// REMOVE ALL DOTS FUNCTION
function removeDots() {
  for (var i = 0; i < imageSlides.length; i++) {
    circles[i].classList.remove('dot');
  }
}

// SINGLE IMAGE LOOP/CIRCLES FUNCTION
function imageLoop() {
  var currentImage = imageSlides[counter];
  var currentDot = circles[counter];
  currentImage.classList.add('visible');
  removeDots();
  currentDot.classList.add('dot');
  counter++;
}

// LEFT & RIGHT ARROW FUNCTION & CLICK EVENT LISTENERS
function arrowClick(e) {
  var target = e.target;
  if (target == leftArrow) {
    clearInterval(imageSlideshowInterval);
    hideImages();
    removeDots();
    if (counter == 1) {
      counter = (imageSlides.length - 1);
      imageLoop();
      imageSlideshowInterval = setInterval(slideshow, 5000);
    } else {
      counter--;
      counter--;
      imageLoop();
      imageSlideshowInterval = setInterval(slideshow, 5000);
    }
  }
  else if (target == rightArrow) {
    clearInterval(imageSlideshowInterval);
    hideImages();
    removeDots();
    if (counter == imageSlides.length) {
      counter = 0;
      imageLoop();
      imageSlideshowInterval = setInterval(slideshow, 5000);
    } else {
      imageLoop();
      imageSlideshowInterval = setInterval(slideshow, 5000);
    }
  }
}

leftArrow.addEventListener('click', arrowClick);
rightArrow.addEventListener('click', arrowClick);


// IMAGE SLIDE FUNCTION
function slideshow() {
  if (counter < imageSlides.length) {
    imageLoop();
  } else {
    counter = 0;
    hideImages();
    imageLoop();
  }
}

// SHOW FIRST IMAGE, & THEN SET & CALL SLIDE INTERVAL
setTimeout(slideshow, 1000);
var imageSlideshowInterval = setInterval(slideshow, 5000);

//gallery page full_screen js
//slideshow js ends


function profile_mobile(){
  /*var dropdown = document.getElementById('drop_down');
  dropdown.style.display = 'block';*/
  document.getElementById("drop_down").classList.toggle("show_drop");
}

// show and hide password with eye icon
$(".toggle-password").click(function() {

  $(this).toggleClass("fa-eye fa-eye-slash");
  var input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});

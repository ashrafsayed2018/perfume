$(function () {
  "use strict ";

  // nice scroll 

  $("body").niceScroll({
    scrollspeed: 40,
    cursorcolor:"#428bca",
    cursorwidth:"10px"
  });

  // top carousel 

  const delay = 3000; //ms

const slides = document.querySelector(".slides");
const slidesCount = slides.childElementCount;
const maxLeft = (slidesCount - 1) * 100 * -1;

let current = 0;

function changeSlide(next = true) {
  if (next) {
    current += current > maxLeft ? -100 : current * -1;
  } else {
    current = current < 0 ? current + 100 : maxLeft;
  }

  slides.style.left = current + "%";
}

let autoChange = setInterval(changeSlide, delay);
const restart = function() {
  clearInterval(autoChange);
  autoChange = setInterval(changeSlide, delay);
};

// Controls
document.querySelector(".next-slide").addEventListener("click", function() {
  changeSlide();
  restart();
});

document.querySelector(".prev-slide").addEventListener("click", function() {
  changeSlide(false);
  restart();
});

// navbar 
  $(".vertial-navbar > i").on("click", function () {
   
        $(this).parent(".vertial-navbar").toggleClass("hide-navbar");

        $(this).toggleClass("fa-bars  fa-times");

  });
// panel a font awesome 
$(".panel-title a > i").on("click", function () {
  

  $(this).toggleClass("fa-chevron-down  fa-chevron-up");

});

//   card product 

$('.buy').click(function(){
    $(this).parent().parent('.bottom').addClass("clicked");
  });
  
  $('.remove').click(function(){
    $(this).parent().parent('.bottom').removeClass("clicked");
  });
   // window scrolling when clicking on nav-menu list
   $('.links li a').on("click", function (e) {
     e.preventDefault();
    var data = $(this).data('class');
    $('html,body').animate({
        'scrollTop': $('#' + data + '').offset().top -50
    }, 1500);
    console.log(data)
});
});
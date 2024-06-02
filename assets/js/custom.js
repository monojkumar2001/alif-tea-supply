//   ========= Header  ===================
  function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
  }


$(document).ready(function() {
  $('.hamburger-menu').click(function() {
    $('.header-menu').addClass('active');
  });
  
  $('.close-btn').click(function() {
    $('.header-menu').removeClass('active');
  });
  $('.sub-btn').click(function() {
    $('.header-menu').removeClass('active');
  });
});

  // function removeSubmenu(event) {
  //   if (isMobileDevice()) {
  //     closeHeaderMenu();
  //   }
  // }

  // var subBtns = document.querySelectorAll('.sub-btn');
  // subBtns.forEach(function(btn) {
  //   btn.addEventListener('click', removeSubmenu);
  // });

  // $(".hamburger-menu").click(function () {
  //   $(".header-menu").addClass("active");
  // });

  // $(".close-btn").click(function () {
  //   $(".header-menu").removeClass("active");
  // });


// sticky Header


// var wind = $(window);
// var sticky = $("#sticky-header");
// wind.on("scroll", function () {
//   var scroll = wind.scrollTop();
//   if (scroll < 100) {
//     sticky.removeClass("sticky");
//   } else {
//     sticky.addClass("sticky");
//   }
// });
 window.addEventListener("scroll", function () {
   var header = document.getElementById("sticky-header");
   if (window.scrollY > header.offsetTop) {
     header.classList.add("sticky");
   } else {
     header.classList.remove("sticky");
   }
 });
// Service Slider

// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 2,
//   spaceBetween: 20,
//   freeMode: true,
//   loop: true, // Enable continuous loop
//   autoplay: {
//     delay: 2000,
//     disableOnInteraction: false,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   coverflowEffect: {
//     rotate: 0, // Set rotation angle to 0 degrees
//     stretch: 0, // Set stretch to 0 to disable stretching
//     depth: 100, // Set depth to control the depth of the blur effect
//     modifier: 1, // Set modifier to control the intensity of the blur effect
//     slideShadows: false, // Disable slide shadows
//   },
//   breakpoints: {
//     0: {
//       slidesPerView: 1,
//       spaceBetween: 10,
//     },
//     768: {
//       slidesPerView: 1,
//       spaceBetween: 20,
//     },
//     992: {
//       slidesPerView: 2,
//       spaceBetween: 15,
//     },
//     1300: {
//       slidesPerView: 3,
//       spaceBetween: 15,
//     },
//     1400: {
//       slidesPerView: 4,
//       spaceBetween: 20,
//     },
//   },

// });

var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});

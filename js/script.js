const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});



var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 50,
  loop: true,
  // autoplay: {
  //   delay: 1000,
  // },
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});

// modal
var openButton = document.getElementById("open");
var openButtonMobile = document.getElementById("open-mobile");
var dialog = document.getElementById("dialog");
var closeButton = document.getElementById("close");
var overlay = document.getElementById("overlay");

// show the overlay and the dialog
openButton.addEventListener("click", function () {
  dialog.classList.remove("hidden");
  overlay.classList.remove("hidden");
});
// show the overlay and the dialog for mobile devices
openButtonMobile.addEventListener("click", function () {
  dialog.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

// hide the overlay and the dialog
closeButton.addEventListener("click", function () {
  dialog.classList.add("hidden");
  overlay.classList.add("hidden");
});
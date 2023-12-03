// copy menu for mobile
function copyMenu() {
  // copy inside .dpt-cat to .departments
  var dptCategory = document.querySelector(".dpt-cat");
  var dptPlace = document.querySelector(".departments");
  dptPlace.innerHTML = dptCategory.innerHTML;

  // copy .header-top .wrapper to .thetop-nav
  var topNav = document.querySelector(".header-top .wrapper");
  var topPlace = document.querySelector(".off-canvas .thetop-nav");
  topPlace.innerHTML = topNav.innerHTML;
}
copyMenu();

// show mobile menu
const menuButton = document.querySelector(".trigger"),
  closeButton = document.querySelector(".t-close"),
  navbarNav = document.querySelector(".site-off"),
  addClass = document.querySelector(".site");
menuButton.addEventListener("click", function () {
  addClass.classList.toggle("showmenu");
  document.body.style.overflow = "hidden";
});
closeButton.addEventListener("click", function () {
  addClass.classList.remove("showmenu");
  document.body.style.overflow = "";
});

document.addEventListener("click", function (e) {
  if (
    !navbarNav.contains(e.target) &&
    !closeButton.contains(e.target) &&
    !menuButton.contains(e.target)
  ) {
    addClass.classList.remove("showmenu");
    document.body.style.overflow = "";
  }
});

// show sub menu on mobile
const submenu = document.querySelectorAll(".has-child .click");
submenu.forEach((menu) => menu.addEventListener("click", toggle));

function toggle(e) {
  e.preventDefault();
  submenu.forEach((item) =>
    item != this ? item.closest(".has-child").classList.remove("expand") : null
  );
  if (this.closest(".has-child").classList != "expand");
  this.closest(".has-child").classList.toggle("expand");
}
// slider
const swiper = new Swiper(".swiper", {
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },
});
// show search in mobile
const searchButton = document.querySelector(".t-search"),
  tClose = document.querySelector(".search-close"),
  showClass = document.querySelector(".site");
searchButton.addEventListener("click", function () {
  showClass.classList.toggle("showsearch");
});
tClose.addEventListener("click", function () {
  showClass.classList.remove("showsearch");
});
// show dpt menu
const dptButton = document.querySelector(".dpt-cat .dpt-trigger"),
  dptClass = document.querySelector(".site");
dptButton.addEventListener("click", function () {
  dptClass.classList.toggle("showdpt");
});

// produk image slider
var productThumb = new Swiper(".small-image", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    481: {
      spaceBetween: 32,
    },
  },
});
var productBig = new Swiper(".big-image", {
  loop: true,
  autoHeight: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: productThumb,
  },
});

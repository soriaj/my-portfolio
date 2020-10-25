'use strict'

function initPage(){
  sideNavSmoothScroll();
  pageNaveSmoothScroll();
  openNav();
  closeNav();
}

function sideNavSmoothScroll() {
  $(".sidenav a").on('click', function(event) {
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;
      // Animate Scroll
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800);
    }
    return false;
  });
}

function pageNaveSmoothScroll() {
  $(".fullpage_nav a").on('click', function(event) {
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;
      // Animate Scroll
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800);
    }
    return false;
  });
}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.querySelector(".main").style.marginRight = "250px";
  document.querySelector(".main_nav_hamburger").style.display = "none"
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.querySelector(".main").style.marginRight = "0";
  document.querySelector(".main_nav_hamburger").style.display = "block"
}

$(initPage);
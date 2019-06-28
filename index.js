'use strict'

let menu = $('.js_menu');
let navToggle = $('.js_nav_toggle');

function toggleMenu() {
  navToggle.on('click', function(event){
    console.log(`you clicked the right button`);
    menu.toggleClass('active');
  });
}

function initPage(){
  toggleMenu();
}

$(initPage);
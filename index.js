'use strict'

let menu = $('.js_menu');
let navToggle = $('.js_nav_toggle');

function toggleMenu() {
  navToggle.on('click', function(event){
    menu.toggle('slow');
  });
}

function initPage(){
  toggleMenu();
}

$(initPage);
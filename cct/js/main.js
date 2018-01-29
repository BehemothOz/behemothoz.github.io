"use strict";

// Fixed header
;(function() {
  var headerTop = document.querySelector('.header');
  var help = document.querySelector('.header-clone');
  var TOPDIST = getDistance(help);

  function getDistance(element) {
    return element.offsetTop;
  }

  function toFixHeader() {
    var pageY = window.pageYOffset || document.documentElement.scrollTop;

    ( pageY > TOPDIST )
            ? headerTop.classList.add('fixed')
            : headerTop.classList.remove('fixed');
  }

  window.addEventListener('scroll', toFixHeader);

  window.addEventListener('resize', function() {
    TOPDIST = getDistance(help);
  });

})();


$(document).ready(function() {

  function initFullPage() {
    $('#fullpage').fullpage({
      scrollBar:true,
      verticalCentered: false,
      // autoScrolling: true,
      scrollOverflowReset: false,
      responsiveHeight: 500,
    });
  };

  initFullPage();

});

"use strict";

;(function() {
  var TOPDIST = 228; // TODO

  window.onscroll = function() {
    var pageY = window.pageYOffset || document.documentElement.scrollTop;
    var headerTop = document.querySelector('.header');

    ( pageY >= TOPDIST )
            ? headerTop.classList.add('fixed')
            : headerTop.classList.remove('fixed');
  };
})();

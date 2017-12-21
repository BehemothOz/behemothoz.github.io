"use strict";

;(function() {
  const TOPDIST = 228; // TODO

  window.onscroll = function() {
    let pageY = window.pageYOffset || document.documentElement.scrollTop;
    let headerTop = document.querySelector('.header');

    ( pageY >= TOPDIST )
            ? headerTop.classList.add('fixed')
            : headerTop.classList.remove('fixed');
  };
})();

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


function initFullPage() {
  $('#fullpage').fullpage({
    scrollBar:true,
    verticalCentered: false,
    // autoScrolling: true,
    scrollOverflowReset: false,
    responsiveHeight: 500,
  });
};


$(document).ready(function() {

  initFullPage();

  $('.btn-down').on('click', function() {
    $.fn.fullpage.moveSectionDown();
  });

});



// ;(function() {
  
//   let x = document.querySelector('.section-card');
//   let cat = document.querySelector('.cat-gif');

//   console.log(x.getBoundingClientRect().top);

//   console.log(cat.style.backgroundImage)

//   function scrollToSection() {
//     $('html, body').animate({ scrollTop: $(x).offset().top }, 2000);
//     cat.style.backgroundImage = '';
//   }
  
//   function showCatGif() {
//     var pageY = window.pageYOffset || document.documentElement.scrollTop;

//     if (pageY === 0) {
//       cat.style.backgroundImage = 'url("images/cat.gif")';
//       // setTimeout(scrollToSection, 7000);
//     }
//   }

//   window.addEventListener('scroll', showCatGif);

//   // setTimeout(scrollToSection, 7000);

// })();


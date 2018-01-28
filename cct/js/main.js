"use strict";

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


;(function() {

  // var body = document.querySelector('body');
  // console.log(body);

  // $.fn.fullpage.setAllowScrolling(false);
  $(document).ready(function() {
    var pageY = window.pageYOffset || document.documentElement.scrollTop;
    let x = document.querySelector('.section-card');

    console.log(pageY);
    console.log(x.getBoundingClientRect().top);

    // if (pageY < 736) {
    //   setTimeout(initFullPage, 5000);
    //   console.log(11);
    // } else {
    //   initFullPage();
    //   console.log(22);
    // }

    // setTimeout(initFullPage, 5000);

    initFullPage();

    function initFullPage() {
      // $('body').removeClass('no-scroll');

      $('#fullpage').fullpage({
          scrollBar:true,
          // paddingTop: '140px',
          verticalCentered: false,
          // autoScrolling: true,
          scrollOverflowReset: false,
          responsiveHeight: 500,

          afterLoad: function(anchorLink, index){
            // var loadedSection = $(this);
        
            //использование индекса
            if (index == 1) {
              console.log(`Это первая секция с котом`);
              // $.fn.fullpage.destroy();
              setTimeout(function() {
                $.fn.fullpage.setScrollingSpeed(1500);
                $.fn.fullpage.moveSectionDown();
              }, 5000)
            } else {
              // $.fn.fullpage.reBuild();
              $.fn.fullpage.setScrollingSpeed(700);
            }
          }
        });

      // $.fn.fullpage.moveSectionDown();
    }

    // setTimeout(function() {
    //   $('#fullpage').fullpage({
    //     scrollBar:true,
    //     // paddingTop: '140px',
    //     verticalCentered: false,
    //     // autoScrolling: true,
    //     scrollOverflowReset: false,
    //     responsiveHeight: 500,
    //   });
    // }, 3000)
  });

})();


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


"use strict";

;(function() {
  // let header = document.querySelector('.header');
  // let fixed = false;
  // let fixedPoint = getDistance();

  // function getDistance() {
  //   return header.offsetTop;
  // }

  // window.onscroll = function() {
  //   let pageY = window.pageYOffset || document.documentElement.scrollTop;
  //   let distance = getDistance() - pageY;

  //   if ( (distance <= 0) && !fixed ) {
  //     header.classList.add('fixed');
  //     fixed = true;
  //   }

  //   else if ( (pageY <= fixedPoint) && fixed ) {
  //     header.classList.remove('fixed');
  //     fixed = false;
  //   }
  // }

  let h = document.querySelector('.header');
  // var h = document.getElementById("header");
  var stuck = false;
  var stickPoint = getDistance();

  function getDistance() {
    var topDist = h.offsetTop;
    return topDist;
  }

  window.onscroll = function(e) {
    var distance = getDistance() - window.pageYOffset;
    var offset = window.pageYOffset;
    if ( (distance <= 0) && !stuck) {
      h.style.position = 'fixed';
      h.style.top = '0px';
      stuck = true;
    } else if (stuck && (offset <= stickPoint)){
      h.style.position = 'static';
      stuck = false;
    }
  }

})();

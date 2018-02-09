
// ---------------
// Preview Screen
// ---------------

;(function() {
  var toggleItems = $('.toggle-item'),
      rectDown = $('.rectangle-dynamic-down'),
      rectTop = $('.rectangle-dinamic-up');
  
  var rectDownGeniuses = rectDown.find('.geniuses-list');
  var rectDownDesc = rectDown.find('.description-list');
  var rectDownDescItem = rectDownDesc.find('.desc');
  var dinamicText = $('.dinamic-text');


  // Обработчик события клика для toggleItems
  function toggleItem(index, item) {
    $(item).toggleClass('enabled')
            .siblings()
            .removeClass('enabled');

    rectDown.addClass('active').removeClass('broken-border');

    showDescription(index);
    checkEnabledClass(item);
  
  }
    
  // Показать нужное описание или таблицу с должностями
  function showDescription(index) {
    if (index !== 3 ) {
      rectDownGeniuses.removeClass('visible');
      rectDownDesc.removeClass('hide').addClass('visible');
      rectDown.css({'height': ''});

      rectDownDescItem.eq(index)
                      .addClass('visible')
                      .siblings()
                      .removeClass('visible');
    } else {
      rectDownGeniuses.addClass('visible');
      rectDownDesc.addClass('hide').removeClass('visible');
      rectDown.css({'height': 'auto'});
    }
  };

  // Если все toggleItems НЕ активны
  function checkEnabledClass(item) {
    if ( !$(item).hasClass('enabled') ) {
      rectDown.removeClass('active').addClass('broken-border').css({'height': ''});
      rectDownDesc.removeClass('visible').addClass('hide');
      rectDownGeniuses.removeClass('visible');
    }
  }

  // Событие клика для toggleItems
  toggleItems.each(function(index, elem) {
    $(this).on('click', function() {
      toggleItem(index, elem);
    })  
  });

  // Событие клика для rectTop
  rectTop.on('click', function() {
    if ( !$(this).hasClass('active') ) {
      $(this).addClass('active').addClass('no-touch');
      startDinamicText(this);
    } else {
      $(this).removeClass('active');
      dinamicText.html('');
    }
  });

  // Эффект печатающегося текста
  function startDinamicText(parent) {
    var str = '(void)mapView:(nonnull MGLMapView*) mapView\n\tdidSelectAnnotation:(nonnull\nid<MGLAnnotation>)annotation;\noptional func mapView(_ mapView:\nMGLMapView, didSelectAnnotation\nannotation: Any)',

    // var str = '<b>Параметры сборки</b>',
    
	  strLength = str.length,
    counter = 0,
    timerId;

    dinamicText.html('');
    
	  timerId = setInterval(function () {
      dinamicText.html( dinamicText.html() + str[counter++] );

	    if (counter == strLength) clearInterval(timerId), $(parent).removeClass('no-touch');
	  }, 100);
  };

})();


// ----------------------------------
// Toggle Testing and Preview Screen
// ----------------------------------

;(function() {
  var geniusesItem = $('.geniuses-item'),
      screenTesting = $('.screen-testing'),
      screenPreview = $('.screen-preview');

  geniusesItem.each(function(index, elem) {
    $(this).on('click', function() {
      screenTesting.css({'display': 'block'});
      screenPreview.css({'display': 'none'});
    })
  })
})();


// ---------------
// Testing Screen
// ---------------

(function() {
  var btnStart = $('.button-start');
  var screenTest = $('.screen-testing');
  var inputEmail = $('.input-email');

  var scrollContainer = $('.scroll-container');
  var questionsList = $('.questions-list');

  btnStart.on('click', function() {
    screenTest.addClass('testing-start');
    scrollContainer.addClass('active');
    questionsList.css({'display': 'block'});
  });

  inputEmail.on('input', function() {
    if (this.value == '') {
      btnStart.prop('disabled', true);
    } else {
      btnStart.prop('disabled', false);
    }
  })
})();


// ---------------
// Scroll Testing Screen
// ---------------

(function() {
  var fixedBlock = $('.top-fixed-real');
  var fixedBlockHeight = fixedBlock.height();
  var scrollContainer = $('.scroll-container');
  var positionTop;

  var head = $('.bg-heading');
  var email = $('.bg-email');
  var qwerty = $('.qwerty');
  var fixedFake = $('.top-fixed-fake');

  var q = $('.questions-list');
  var qwerty2 = $('.qwerty2');

  // function setHeight(elem, height, scroll, controlPoint) {
  //   var changeHeight = (height - (scroll - controlPoint)) - 36;

  //   if (changeHeight >= 181) {
  //     elem.height(changeHeight);
  //   }
  // }

  

  // scrollContainer.scroll(function() {
  //   var scrollTop = $(this).scrollTop();
  //   positionTop = $(this).offset().top - $(window).scrollTop();

  //   if ( scrollTop >= 129 ) {
  //     fixedBlock.addClass('fixed').css({'top': positionTop });
  //     // setHeight(fixedBlock, fixedBlockHeight, scrollTop, 129);
      
  //   }
    
  //   else {
  //     fixedBlock.removeClass('fixed').css({'height': '240px', 'top': ''});
  //     // fixedBlock.css({'position': 'absolute', 'top': '', 'height': '230px'})
  //   }

  // });

  // $(window).on('scroll', function() {
  //   if ( fixedBlock.hasClass('fixed') ) {
  //     let x = $('.scroll-container').offset().top - $(window).scrollTop();
  //     fixedBlock.css({'top': x});
  //   }
  // });

  // 334 


    q.scroll(function() {
      var height =  $(this).height();
      var scroll = $(this).scrollTop();
      var maxHeight;
      var mrt;
      
      if (scroll == 0) {
        maxHeight = 146;
      } else if (scroll > 0) {
        // console.log(146 * ( ( (scroll + 334) * 100 ) / 334 ) / 100 );

        var x = 146 * ( ( (scroll + 278) * 100 ) / 278 ) / 100;
        // console.log((( (scroll + 334) * 100 ) / 334 ) / 100)

        console.log(146 - x)
        mrt = 146 - x <= -130 ? -130 : 146 - x;
        maxHeight = x >= 278 ? 278 : x ;
      } else {
        // maxHeight = 
      }

      q.css({
        'max-height': maxHeight + "px"
      });

      qwerty2.css({
        'margin-top': mrt + "px"
      });

    });


})();

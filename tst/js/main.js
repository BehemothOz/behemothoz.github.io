
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
  };
    
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
  };

  // Бордер при условии
  function checkBorderForRectTop() {
    if ( rectTop.hasClass('active') && rectDown.hasClass('active') ) {
      rectTop.removeClass('broken-border');
    }
    
    else if ( rectTop.hasClass('active') || rectDown.hasClass('active') ) {
      rectTop.addClass('broken-border');
    }
    
    else {
      rectTop.removeClass('broken-border');
    }
  };

  // Событие клика для toggleItems
  toggleItems.each(function(index, elem) {
    $(this).on('click', function() {
      toggleItem(index, elem);
      checkBorderForRectTop();
    })  
  });

  // Событие клика для rectTop
  rectTop.on('click', function() {
    if ( !$(this).hasClass('active') ) {
      $(this).addClass('active')
             .addClass('no-touch');

      startDinamicText(this);

    } else {
      $(this).removeClass('active');
      dinamicText.html('');
    }

    checkBorderForRectTop();
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
      screenTesting.show();
      screenPreview.hide();
    })
  })
})();


// ---------------
// Testing Screen
// ---------------

// TODO УПРОСТИТЬ!

(function() {
  var btnStart = $('.button-start');
  var btnSubmit = $('.button-submit');


  var screenTest = $('.screen-testing');
  var inputEmail = $('.input-email');

  var scrollContainer = $('.scroll-container');
  var questionsList = $('.questions-list');
  var displayTimer = $('.timer span');

  btnStart.on('click', function() {
    screenTest.addClass('testing-start');
    scrollContainer.addClass('active');
    questionsList.css({'display': 'block'});

  
    $(this).hide();
    btnSubmit.show();


    // Показать экран с вопросами
    startTestingScreen();

    // Старт таймера
    startTimer(300, displayTimer);
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

// Старт экрана с вопросами
function startTestingScreen() {
  var headingBlock = $('.bg-heading'),
      emailBlok = $('.bg-email');

  var fixingPoint = headingBlock.outerHeight() + emailBlok.outerHeight();
  
  $('.scroll-container').scroll(function() {
    scrollQuestionsList(fixingPoint, this);
  })
};

// Скролл экрана с вопросами
function scrollQuestionsList(fixingPoint, containerScroll) {
  var fixedBlock = $('.top-fixed-real'),
      testingWrap = $('.testing-wrap'),
      scrollTop = $(containerScroll).scrollTop();

  if ( scrollTop >= fixingPoint ) {
    fixedBlock.addClass('fixed');
    testingWrap.addClass('offset-scroll')//.addClass('qwerty');
  }
    
  else {
    fixedBlock.removeClass('fixed');
    testingWrap.removeClass('offset-scroll')//.removeClass('qwerty');
  }
};


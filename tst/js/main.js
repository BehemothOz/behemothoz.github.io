
// ---------------
// Preview Screen
// ---------------

;(function() {
  var toggleItems = $('.toggle-item'),
      rectDown = $('.rectangle-dynamic-down'),
      rectTop = $('.rectangle-dinamic-up');
  
  var rectDownGeniuses = rectDown.find('.geniuses-list'),
      rectDownDesc = rectDown.find('.description-list'),
      rectDownDescItem = rectDownDesc.find('.desc'),
      dinamicText = $('.dinamic-text'),
      logo = $('.logo');

  // Сделать активным или неактивным toggleItems
  function makeEnabledToggleItem(item) {
    if (item) {
      $(item).toggleClass('enabled')
             .siblings()
             .removeClass('enabled');  
    } else {
      toggleItems.removeClass('enabled');
    }
  };

  // Обработчик события клика для toggleItems
  function toggleItem(index, item) {
    rectDown.addClass('active').removeClass('broken-border');

    makeEnabledToggleItem(item);
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
      resetrectDown();
    }
  };

  // Убрать и очистить rectDown
  function resetrectDown() {
    rectDown.removeClass('active').addClass('broken-border').css({'height': ''});
    rectDownDesc.removeClass('visible').addClass('hide');
    rectDownGeniuses.removeClass('visible');
  }

  // Бордер для RectTop при условии
  function checkBorderForRectTop() {
    var windowWidth = $(window).width();

    if ( rectTop.hasClass('active') ) {
      rectTop.addClass('broken-border').removeClass('broken-border-lg');
    }

    else if (rectDown.hasClass('active') && windowWidth < 1400 ) {
      rectTop.addClass('broken-border');
    }

    else if (rectDown.hasClass('active') && windowWidth >= 1400 ) {
      rectTop.addClass('broken-border-lg');
    }

    else {
      rectTop.removeClass('broken-border').removeClass('broken-border-lg');
    }
  };

  // Эффект печатающегося текста
  function startDinamicText() {
    var str = '(void)mapView:(nonnull MGLMapView*) mapView\n\tdidSelectAnnotation:(nonnull\nid<MGLAnnotation>)annotation;\noptional func mapView(_ mapView:\nMGLMapView, didSelectAnnotation\nannotation: Any)',

    // var str = '<b>Параметры сборки</b>',
    
    strLength = str.length,
    counter = 0,
    timerId;

    dinamicText.html('');

    timerId = setInterval(function() {
      
      if ( rectTop.hasClass('active') ) {
        
        dinamicText.html( dinamicText.html() + str[counter++] );
        if (counter == strLength) clearInterval(timerId);

      } else {
        counter = 0;
        clearInterval(timerId);
      } 
    }, 100);
  };

  // Обработчик события клика для rectTop и logo
  function getActiveRectTop() {
    !rectTop.hasClass('active') 
            ? rectTop.addClass('active')
            : rectTop.removeClass('active');

    if ( rectDown.hasClass('active') ) {
      resetrectDown();
      makeEnabledToggleItem();
    }

    startDinamicText();
    checkBorderForRectTop();
  };

  // Событие клика для toggleItems
  toggleItems.each(function(index, elem) {
    $(this).on('click', function() {
      toggleItem(index, elem);
      checkBorderForRectTop();

      if ( rectTop.hasClass('active') ) {
        rectTop.removeClass('active');
        startDinamicText();
      }
    })  
  });
  
  // Событие клика для rectTop
  rectTop.on('click', getActiveRectTop);

  // Событие клика для logo
  logo.on('click', getActiveRectTop);

})();


// ----------------------------------
// Toggle Testing and Preview Screen
// ----------------------------------

;(function() {
  var geniusesItem = $('.geniuses-item'),
      screenTesting = $('.screen-testing'),
      screenPreview = $('.screen-preview');
    
  var btnSubmit = $('.button-submit');

  geniusesItem.each(function(index, elem) {
    $(this).on('click', function() {
      screenTesting.show();
      screenPreview.hide();
    })
  })

  btnSubmit.on('click', function() {
    screenTesting.hide();
    screenPreview.show();

    $('.toggle-item').removeClass('enabled');
    $('.geniuses-list').removeClass('visible');
    $('.rectangle-dynamic-down').addClass('finish');
    $('.finish-msg').show();
    $('.screen-preview').css({'pointer-events': 'none'});
    $('.rectangle-dinamic-up')
          .removeClass('broken-border-lg')
          .addClass('broken-border');
  });

})();


// ---------------
// Testing Screen
// ---------------

(function() {
  var btnStart = $('.button-start'),
      btnSubmit = $('.button-submit'),
      screenTest = $('.screen-testing'),
      inputEmail = $('.input-email');

  var scrollContainer = $('.scroll-container'),
      questionsList = $('.questions-list'),
      displayTimer = $('.timer span');

  btnStart.on('click', function() {
    screenTest.addClass('testing-start');
    scrollContainer.addClass('active');

    //scrollContainer.delay(300).animate({ height: "515px" }, 300);


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
    testingWrap.addClass('offset-scroll');
  }
    
  else {
    fixedBlock.removeClass('fixed');
    testingWrap.removeClass('offset-scroll');

    $('.scroll-container.active').css({'transition': 'none'});
  }
};


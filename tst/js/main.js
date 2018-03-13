
// --------------
// Init Animation
// --------------

$(window).on('load', function() {
  var duration = 1000;
  var rectDown = $('.rectangle-dynamic-down'),
      rectTop = $('.rectangle-dinamic-up');
      rectDownBorderTop = rectDown.find('.border-top');

  rectTop.addClass('rect-up-animation');
  rectDown.addClass('rect-down-animation');

  rectDownBorderTop.delay(500).fadeOut(500);

  setTimeout(function() {
    // rectDown.removeClass('rect-down-animation').addClass('main-position');
    // rectTop.removeClass('rect-up-animation').addClass('main-position');
    rectTop.addClass('main-position').removeClass('rect-up-animation');
    rectDown.addClass('main-position').removeClass('rect-down-animation');
    // $('body').removeClass('no-scroll');
  }, duration);
});



// -----------
// Scroll Body
// -----------

(function() {
  var singleScreen = $('.single-screen');

  function parallax(element) {
    var yPosition = $(window).scrollTop() / 3;

    element.css({
      'background-position-y': -yPosition + 'px'
    })
  }

  if ( $(window).width() >= 1100 ) {

    $(window).on('scroll', function() {
      parallax(singleScreen);
    });
  }

})();




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

  var initStateRectDown = false;


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


  // ==========
  // Animations
  // ==========

  function animateFirstClick(durationTop, delayShowText, showText, index, descHeight) {
    rectDown.animate({
      'margin-top': '-45px',
      'height': descHeight
    }, durationTop, function() {
      $('.border-top').show(); // Для второй анимации

      rectDown.removeClass('broken-border').addClass('fill-details')
        .delay(delayShowText)
        .queue(function() {
          $(this).addClass('active');
          
          if (showText) {
            $(window).width() >= 1100
              ? animateTextBlocks(index, 700, 300)
              : animateTextBlocks(index, 50, 400);

            setTimeout(function() {
              $('.screen-preview').removeClass('no-touch');
            }, $(window).width() >= 1100 ? 500 : 200);

          } else {
            $(window).width() >= 1100
              ? animateTextBlocks(index, 700, 300)
              : animateTextBlocks(index, 100, 600);
          }

          $(this).dequeue();
        });
     });
  };

  function animateLastClick(delayTop, initHeight, durationTop) {
    rectDown
      .queue(function() {
        $(this).removeClass('active').removeClass('fill-details');
        $(this).dequeue();
      })
      .delay(delayTop)
      .queue(function() {
        $('.border-top').hide();
        $(this).addClass('broken-border');

        $(this).delay(delayTop).animate({'margin-top': '-150px', 'height': initHeight}, durationTop);
        $(this).dequeue();
      });
  };

  function animateTextBlocks(index, delay, duration) {
    rectDownDesc.fadeTo(0, 1, function() {
      rectDownDescItem
        .eq(index)
        .delay(delay).fadeTo(300, 1)
        .siblings()
        .hide();
    });
  };


  // ================
  // Work with blocks
  // ================

  // Первый клик по toggleItems
  function toggleItemInitStateRectDown(index, item, descHeight) {
    
    // console.log(11)
    $('html,body').animate({scrollTop: 160}, 800);

    makeEnabledToggleItem(item);
    // animateFirstClick(600);

    showDescription(index, initStateRectDown, descHeight);
    initStateRectDown = true;
  };

  // Убрать и очистить rectDown
  function resetRectDown() {
    $('html,body').animate({scrollTop: 0}, 800);

    // rectDownDescItem.siblings().fadeOut(0);
    rectDownDescItem.siblings().fadeTo(0, 0);
    $(window).width() >= 1100
        ? animateLastClick(200, 266, 300)
        : animateLastClick(0, 210, 500);
    
    initStateRectDown = false;
  };

  // Обработчик события клика для toggleItems (кроме первого)
  function toggleItem(index, item, descHeight) {

    makeEnabledToggleItem(item);

    if ( !$(item).hasClass('enabled') ) {
      resetRectDown();
    } else {
      showDescription(index, initStateRectDown);
    }
  };
    
  // Показать нужное описание или таблицу с должностями
  function showDescription(index, initStateRectDown, descHeight) {
    $('.screen-preview').addClass('no-touch');

    if (initStateRectDown == true) {

      rectDownDescItem.siblings().fadeTo(0, 0);

      if ( $(window).width() >= 1100 ) {
        animateLastClick(200, 266, 300);

        setTimeout(function() {
          var checkDescHeight = rectDownDescItem.eq(index).innerHeight();
          animateFirstClick(600, 300, true, index, checkDescHeight);
        }, 800);
      }

      else {
        animateLastClick(0, 210, 500);

        setTimeout(function() {
          var checkDescHeight = rectDownDescItem.eq(index).innerHeight();
          animateFirstClick(800, 0, true, index, checkDescHeight);
        }, 600);
      }
    }

    else if (initStateRectDown == false) {
      $(window).width() >= 1100
          ? animateFirstClick(600, 300, false, index, descHeight)
          : animateFirstClick(600, 0, false, index, descHeight);

      setTimeout(function() {
        $('.screen-preview').removeClass('no-touch');
      }, $(window).width() >= 1100 ? 2000 : 1000);
    }
  };

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
    }, 7);
  };

  // Состояние ReactTop
  function toggleStateReactTop() {
    if ( !rectTop.hasClass('active') ) {
      rectTop.addClass('active')
    } else {
      rectTop.removeClass('active');
    }

    startDinamicText();
    checkBorderForRectTop();
  };

  // Вызов Item при первом или последующих кликах
  function toggleHandlerForItem(index, elem) {
    var descHeight = rectDownDescItem.eq(index).innerHeight();
    // console.log(rectDownDescItem.eq(index).innerHeight());
  
    if ( initStateRectDown == false ) {
      toggleItemInitStateRectDown(index, elem, descHeight);
    } else {
      toggleItem(index, elem, descHeight);
    }
  };

  //Обработчик события клика для rectTop и logo
  function getActiveRectTop() {

    if ( rectDown.hasClass('active') ) {
      resetRectDown();
      makeEnabledToggleItem();

      setTimeout(function() {
        toggleStateReactTop();
      }, 700);
    } else {
      toggleStateReactTop();
    }
  };


  // ======
  // Enents
  // ======

  // Событие клика для toggleItems
  toggleItems.each(function(index, elem) {
    $(this).on('click', function() {

      if ( rectTop.hasClass('active') ) {
        rectTop.removeClass('active');
        startDinamicText();

        setTimeout(function() {
          toggleHandlerForItem(index, elem);
        }, 300);
      } else {
        toggleHandlerForItem(index, elem);
      }

      // checkBorderForRectTop();
    });
  });
  
  // Событие клика для rectTop
  rectTop.on('click', getActiveRectTop);

  // // Событие клика для logo
  logo.on('click', getActiveRectTop);

})();



// ======================================
// Toggle Preview Screen / validate email
// ======================================

;(function() {
  var geniusesItem = $('.geniuses-item'),
      screenTesting = $('.screen-testing'),
      screenPreview = $('.screen-preview');
    
  var btnSubmit = $('.button-submit'),
      btnStart = $('.button-start');

  var scrollContainer = $('.scroll-container'),
      questionsList = $('.questions-list'),
      displayTimer = $('.timer span'),
      inputEmail = $('.input-email');

  function validateEmail(email) {
    var regExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regExp.test(email);
  };

  // Показать Testing Screen
  function showTestingScreen() {
    screenTesting.addClass('testing-start');
    scrollContainer.addClass('active');

    questionsList.show();
  
    $('.btn-back').hide();
    btnStart.hide();
    btnSubmit.show();

    // Показать экран с вопросами
    startTestingScreen();

    // Старт таймера
    startTimer(300, displayTimer);
  };

  // ======
  // Events
  // ======

  btnStart.on('click', function() {
    if ( validateEmail(inputEmail.val()) ) {
      inputEmail.removeClass('error');
      showTestingScreen();
    } else {
      inputEmail.addClass('error').focus();
    }
  });

  inputEmail.on('input', function() {
    var email = this.value;
   
    if ( validateEmail(email) ) {
      inputEmail.removeClass('error');
      btnStart.removeClass('no-active');
    }
  });

})();



// =====================
// Scroll Testing Screen
// =====================

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



// ---------------
// Dinamic content
// ---------------

// Заполнение прогресс бара + кнопка submit
function watchProgressBar(countDash) {
  var inputAnswer = $('.input-answer');
  var question = $('.questions-list .question');
  var progressBar = $('.progress-bar');
  var scale = $('.progress-bar .scale');
  var btnSubmit = $('.button-submit');

  var screenTesting = $('.screen-testing'),
      screenPreview = $('.screen-preview');

  var countAnswer;

  // ======================
  // Work with progress bar
  // ======================

  inputAnswer.each(function(index, element) {
    $(this).on('change', function() {
      if ( $(this).prop('checked') ) {
        $(this).parents('.question').data('checked', true);
        countingAnswers();
      }
    })
  });

  function checkStatusBtnSubmit(countAnswer) {
    if (countAnswer == countDash) {
      progressBar.removeClass('error');
      btnSubmit.removeClass('no-active');
    }
  };
  
  function countingAnswers() {
    var answerArray = [];
  
    question.each(function(i, el) {
      var check = $(this).data('checked');
      
      if (check == true) {
        answerArray.push(check);
      }
    });
  
    countAnswer = answerArray.length;
    changeHeightProgressBar(answerArray.length);
    checkStatusBtnSubmit(answerArray.length);
  };
  
  function changeHeightProgressBar(count) {
    scale.css({'height': (100 / countDash ) * count + '%'});
  };


  // ===================
  // Work with final msg
  // ===================
  
  // Сбросить состояние Preview Screen
  function resetStatePreviewScreen() {
    $('.toggle-item').removeClass('enabled');

    $('.geniuses-list').hide();
    $('.rectangle-dinamic-up')
          .removeClass('broken-border-lg')
          .addClass('broken-border');
  };

  // Показать финальное сообщение
  function showFinalMessage() {
    resetStatePreviewScreen();

    $('.rectangle-dynamic-down').height( $(window) >= 1100 ? 266 : 210 ).addClass('finish');
    $('.finish-msg').show();
    $('.screen-preview').css({'pointer-events': 'none'});
  };

  // Скрыть финальное сообщение
  function hideFinalMessage() {
    $('.rectangle-dynamic-down').animate({
            'margin-top': '-150px'
          }, 300)
          // .height( $(window) >= 1100 ? 266 : 210 )
          .removeClass('fill-details')
          .removeClass('active')
          .removeClass('finish')
          .addClass('broken-border');

    //$('.rectangle-dinamic-up').removeClass('broken-border');
      
    $('.border-top').hide();
    $('.finish-msg').hide();
    $('.screen-preview').css({'pointer-events': 'all'});

    setTimeout(function() {
      location.reload();
    }, 400);
  };

  // ======
  // Events
  // ======

  btnSubmit.on('click', function() {
    if (countAnswer == countDash) {
      progressBar.removeClass('error');

      screenTesting.fadeOut(400, function() {
        screenPreview.fadeIn(400);
      });

      showFinalMessage();

      setTimeout(function() {
        hideFinalMessage();
      }, 3000)

    } else {
      progressBar.addClass('error');
    }
  });
};

// Генерация списка вопросов в зависимости от выбранного geniuses 
var generationQuestionsList = function(data) {
  var questionsList = $('.questions-list');
  var questions = data.question;

  var str = '';

  var htmlQuestion = function(question, indexQuestion) {
    return  '<li class="question" data-checked>' +
              '<div class="question-text">' + question.title + '</div>' + 
              '<ul class="answers-list">' + getAnswers(question.answer, indexQuestion) + '</ul>' +
            '</li>';
  };

  var htmlAnswer = function(answer, index, indexQuestion) {
    return  '<li class="answer">' +
              '<label class="label">' +
                '<input class="input-answer"' + 
                       'type="radio"' +
                       'name="answer-' + indexQuestion + '"' + 
                       'value="' + index + '">' +
                '<span class="fake-checkbox"></span>' +
                '<span class="possible-answer">' + answer + '</span>' +
              '</label>' +
            '</li>';
  };

  // Итерация по вариантам ответа
  function getAnswers(answerArray, indexQuestion) {
    var string = '';

    answerArray.forEach(function(answer, i) {
      string = string + htmlAnswer(answer, i, indexQuestion);
    })

    return string;
  };

  // Итерация по вопросам
  function getQuestion(questionArray) {
    var string = '';

    questionArray.forEach(function(question, index) {
      string = string + htmlQuestion(question, index);
    })

    return string;
  };

  (function appendQuestions() {
    questionsList.html(getQuestion(questions));
    watchProgressBar(questions.length);
  })();

};

// Генерация заголовка
var generationHeadingForTesting = function(data) {
  var heading = $('.testing-heading .dinamic-path');
  
  heading.html(data.short);  
};

// Генерация прогресс бара
var generationProgressBar = function(data) {
  var scaleDash = $('.scale-dash');
  var countDash = data.question.length;
  var i = 0;
  var str = '';

  for(; i < countDash; i++) {
    var top = (100 / countDash) * i;
    str = str + '<div class="dash" style="top: '+ top +'%">-' + (countDash - i) +  '</div>';
  }

  scaleDash.html(str);
};


// Генерация geniuses
;(function(data) {
  var geniusesItem = $('.geniuses-item'),
      screenTesting = $('.screen-testing'),
      screenPreview = $('.screen-preview');

  var btnBack = $('.btn-back');
  var copyLogo = $('.copy-logo-wrap');

  // Animations
  function animateTransitionScreensBack() {
    copyLogo.fadeIn();

    screenTesting.fadeOut(400, function(){
      copyLogo
        .addClass('transition-logo')
        .removeClass('anim-copy-logo')
        .delay(1300)
        .queue(function() {
          screenPreview.fadeIn(400);
          $(this).dequeue();
      });
    });
  };

  function animateTransitionScreensForward() {
    screenPreview.fadeOut(400, function(){
      copyLogo
        .addClass('anim-copy-logo')
        .delay(1000).queue(function() {
          screenTesting.fadeIn(400);
          $(this).delay(100).fadeOut();
          $(this).dequeue();
      });
    });
  };
  
  // var handlerBtnBack = function() {
    btnBack.on('click', function() {
      if ( !screenTesting.hasClass('testing-start') ) {
        animateTransitionScreensBack();
      }
    });
  // };

  var htmlGeniuses = function(geniuse, i) {
    return '<li class="geniuses-item" data-index="' + i + '">' + 
              '<span>' + geniuse.name + '</span>' +
           '</li>';
  };

  // Итерация по geniuses
  function getGeniuses(data) {
    var str = '';

    data.forEach(function(geniuse, i) {
      str = str + htmlGeniuses(geniuse, i);
    });

    return str;
  };

  // Обработчик клика для geniuses
  function handlerGeniuses(elem, data) {
    var index = $(elem).data('index');

    if ( $(window).scrollTop() >= 100 ) {
      $('html,body').animate({ scrollTop: 0 }, 700, function() {
        animateTransitionScreensForward();  
      });
    } else {
      animateTransitionScreensForward();
    }

    generationQuestionsList(data[index]);
    generationHeadingForTesting(data[index]);
    generationProgressBar(data[index]);

    // handlerBtnBack();
  };

  // Найти и повесить событие клика на geniuses
  function searchGeniusesHangEventClick(data) {
    $('.geniuses-item').each(function(i, geniuse) {
      $(geniuse).on('click', function() {
        handlerGeniuses(this, data);
      });
    });
  };

  (function appendGeniuses(data) {
    $('.geniuses-list .inner-list').html(getGeniuses(data));
    searchGeniusesHangEventClick(data);
  })(data);

})(dataGeniuses);

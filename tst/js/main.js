
// Начальная анимация

$(document).ready(function() {
$(window).on('load', function() {
  var duration = 1000;
  var rectDown = $('.rectangle-dynamic-down'),
      rectTop = $('.rectangle-dinamic-up');

  rectTop.addClass('rect-up-animation');

  rectDown.addClass('rect-down-animation');

  // setTimeout(function() {
  //   rectTop.removeClass('rect-up-animation').addClass('main-position');
  // }, duration);

  setTimeout(function() {
    // rectDown.removeClass('rect-down-animation').addClass('main-position');
    // rectTop.removeClass('rect-up-animation').addClass('main-position');
    rectTop.addClass('main-position');
    rectDown.addClass('main-position');
    // rectTop.css({'opacity': '1'})
    // rectDown.css({'opacity': '1'})
    $('body').removeClass('no-scroll');
  }, duration);

  
})

})


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
    }, 30);
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


// --------------------------------------------------
// Toggle Testing and Preview Screen + Testing Screen
// --------------------------------------------------

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

  // Показать Testing Screen
  function showTestingScreen() {
    screenTesting.addClass('testing-start');
    scrollContainer.addClass('active');

    questionsList.show();
 
    btnStart.hide();
    btnSubmit.show();

    // Показать экран с вопросами
    startTestingScreen();

    // Старт таймера
    startTimer(300, displayTimer);
  }
  
  // Сбросить состояние Preview Screen
  function resetStatePreviewScreen() {
    $('.toggle-item').removeClass('enabled');
    $('.geniuses-list').removeClass('visible');
    $('.rectangle-dinamic-up')
          .removeClass('broken-border-lg')
          .addClass('broken-border');
  }

  // Показать финальное сообщение
  function showFinalMessage() {
    resetStatePreviewScreen();

    $('.rectangle-dynamic-down').addClass('finish');
    $('.finish-msg').show();
    $('.screen-preview').css({'pointer-events': 'none'});
  }

  // Скрыть финальное сообщение
  function hideFinalMessage() {
    $('.rectangle-dynamic-down')
          .height('')
          .removeClass('active')
          .removeClass('finish')
          .addClass('broken-border');

    $('.rectangle-dinamic-up').removeClass('broken-border');
          
    $('.finish-msg').hide();
    $('.screen-preview').css({'pointer-events': 'all'});

    setTimeout(function() {
      location.reload();
    }, 400);
  }

  // Событие для geniusesItem
  // geniusesItem.each(function(index, elem) {
  //   $(this).on('click', function() {
      
  //     screenPreview.fadeOut(400, function() {
  //       screenTesting.fadeIn(400);
  //     });
  //   })
  // })

  // Submit
  btnSubmit.on('click', function() {
    screenTesting.fadeOut(400, function() {
      screenPreview.fadeIn(400);
    });

    showFinalMessage();

    setTimeout(function() {
      hideFinalMessage();
    }, 3000)
  });

  // Start
  btnStart.on('click', function() {
    showTestingScreen();
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



// ---------------
// Dinamic content
// ---------------

// Заполнение прогресс бара
function watchProgressBar(countDash) {
  var inputAnswer = $('.input-answer');
  var question = $('.questions-list .question');
  var scale = $('.progress-bar .scale');
  // var countDash = 5;

  var btnSubmit = $('.button-submit');

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
      btnSubmit.prop('disabled', false);
    }
  };
  
  function countingAnswers() {
    let answerArray = [];
  
    question.each(function(i, el) {
      var check = $(this).data('checked');
      
      if (check == true) {
        answerArray.push(check);
      }
    });
  
    changeHeightProgressBar(answerArray.length);
    checkStatusBtnSubmit(answerArray.length);
  };
  
  function changeHeightProgressBar(count) {
    scale.css({'height': (100 / countDash ) * count + '%'});
  };
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

  var btnBack = $('.js-logo-back');
  
  var handlerBtnBack = function() {
    btnBack.on('click', function() {
      if ( !screenTesting.hasClass('testing-start') ) {
        screenTesting.fadeOut(400, function() {
          screenPreview.fadeIn(400);
        });
      }
    });
  };

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

    screenPreview.fadeOut(400, function() {
      screenTesting.fadeIn(400);
    });

    generationQuestionsList(data[index]);
    generationHeadingForTesting(data[index]);
    generationProgressBar(data[index]);

    handlerBtnBack();
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


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
    $(this).toggleClass('active');
  })
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

  function checkHeight(elem, height, scroll, controlPoint) {
    var changeHeight = (height - (scroll - controlPoint)) - 36;

    if (changeHeight >= 181) {
      elem.height(changeHeight);
    }
  }

  $('.scroll-container').scroll(function() {
    var scrollTop = $(this).scrollTop();

    if ( scrollTop >= 129 ) {
      // fixedBlock.css({'position': 'fixed', 'top': '63px'});
      fixedBlock.addClass('fixed');
      // console.log( (fixedBlockHeight - (scrollTop - 129)) - 36)
      // fixedBlock.height((fixedBlockHeight - (scrollTop - 129)) - 36);
      checkHeight(fixedBlock, fixedBlockHeight, scrollTop, 129);
      // 181 
    }
    
    else {
      fixedBlock.removeClass('fixed').css({'height': '240px'});
      // fixedBlock.css({'position': 'absolute', 'top': '', 'height': '230px'})
    }

  });


})();
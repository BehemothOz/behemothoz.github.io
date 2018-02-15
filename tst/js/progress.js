// Progress Bar

(function() {

  var inputAnswer = $('.input-answer');
  var question = $('.questions-list .question');
  var scale = $('.progress-bar .scale');
  var countDash = 5;

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

})();
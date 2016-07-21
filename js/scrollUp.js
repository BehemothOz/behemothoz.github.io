var top_show = 150; // В каком положении полосы прокрутки начинать показ кнопки "Наверх"
var delay = 1000; // Задержка прокрутки

$(document).ready(function() {
    $(window).scroll(function () { // При прокрутке попадаем в эту функцию

      /* В зависимости от положения полосы прокрукти и значения top_show, скрываем или открываем кнопку "Наверх" */
      if ($(this).scrollTop() > top_show) $('#top').fadeIn();
      else $('#top').fadeOut();
    });

    $('#top').click(function () { // При клике по кнопке "Наверх" попадаем в эту функцию

      /* Плавная прокрутка наверх */
      $('body, html').animate({
        scrollTop: 0
      }, delay);
    });
  });

// <div id="top">Наверх</div> - пример HTML кода
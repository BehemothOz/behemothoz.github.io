"use strict";





// Lang popup

;(function() {
    const langToggle = document.querySelector('.lang-toggle'),
          langList = document.querySelector('.lang-list'),
          body = document.querySelector('.body'),
          google = document.querySelector('#google_translate_element');

    langToggle.addEventListener('click', function(e) {
        e.preventDefault();
        this.classList.toggle('open');

        langList.classList.toggle('visible');
    })

    body.addEventListener('click', function(e) {
        const parent = e.target.parentElement;

        if (e.target !== langToggle && langToggle.classList.contains('open')
            && langList.classList.contains('visible')
            && parent.parentElement !== google) {

            langToggle.classList.remove('open');
            langList.classList.remove('visible');
        }
    })

})();



// Lang item
;(function() {
    const langItem = document.querySelectorAll('.lang-item-path');

    // function delete_cookie(name) {
    //     document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/;';
    // };

    function handleClick(e) {
        e.preventDefault();
        const cookieArr = document.cookie.split(';');

        for (let i = 0; i < cookieArr.length; i++) {
            let key = cookieArr[i].split('=')[0].trim();

            if ( key === 'googtrans' ) {
                // delete_cookie(key);
                // Cookies.remove(key, { path: "/",domain: ".localhost.com" });
                // Cookies.remove(key, { path: '' });
                eraseCookie(key, ".behemothoz.github.io/bnr/"); //erases the .one.om domain cookie
                eraseCookie(key, ""); //erases the www.one.om domain cookie
            }
        }

        window.location.href = '/bnr/'
    };

    langItem.forEach(function(el, i) {
        el.addEventListener('click', handleClick);
    })
})();



function createCookie(name, value, days, domain) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    } else {
        var expires = "";
    }
    document.cookie = name + "=" + value + expires + "; domain=" + domain + "; path=/";
}

function eraseCookie(name, domain) {
    createCookie(name, "", -1, domain);
}

// eraseCookie("googtrans", ".one.om"); //erases the .one.om domain cookie
// eraseCookie("googtrans", ""); //erases the www.one.om domain cookie
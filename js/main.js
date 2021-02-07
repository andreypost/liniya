'use strict';
var body = document.querySelector('body')
function toggleNavMenu(nav, canvas, menu) {
  var touchLength = 0, burger = nav.querySelector('.header_mob_burger')
  function toggle() {
    if (burger.classList.contains('active')) {
      burger.classList.remove('active')
      canvas.classList.remove('block')
      menu.classList.remove('active')
      body.style.overflowY = ''
      body.style.paddingRight = `${0}px`
      nav.style.paddingRight = `${15}px`
      return
    }
    burger.classList.add('active')
    canvas.classList.add('block')
    menu.classList.add('active')
    var width = document.documentElement.clientWidth
    body.style.overflowY = 'hidden'
    body.style.paddingRight = `${document.documentElement.clientWidth - width}px`
    nav.style.paddingRight = `${document.documentElement.clientWidth - width + 15}px`
  }
  burger.onclick = function () { toggle() }
  menu.ontouchstart = function (e) { touchLength = e.touches[0].clientX }
  menu.ontouchend = function (e) { if (touchLength > (e.changedTouches[0].clientX + 60)) toggle() }
  menu.onclick = function (e) {
    e.preventDefault()
    if (this.classList.contains('active') && e.target.tagName === 'A') toggle()
    if (e.target.closest('.scrollTo')) {
      window.scrollBy({
        top: document.querySelector(`.${e.target.dataset.section}`).getBoundingClientRect().top,
        behavior: 'smooth'
      })
    }
  }
  window.addEventListener('click', function (e) { if (e.target === canvas) toggle() })
}
toggleNavMenu(document.querySelector('.header_mob nav'), document.querySelector('.canvas'), document.querySelector('.header_nav_menu'))
new Swiper('.symptoms .swiper-container', {
  // initialSlide: 0,
  slidesPerView: 1,
  spaceBetween: 25,
  breakpoints: {
    425: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 1.5,
      centeredSlides: true,
      centeredSlidesBounds: true,
    }
  },
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
  },
});
new Swiper('.experts .swiper-container', {
  slidesPerView: 1,
  spaceBetween: 25,
  breakpoints: {
    425: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 2,
    }
  },
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
  },
});
new Swiper('.comments .swiper-container', {
  slidesPerView: 1,
  spaceBetween: 25,
  breakpoints: {
    425: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 3,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    },
  },
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
  },
});

/*
function sendRequest(url, timer = 500) {

  let controller = new AbortController()

  setTimeout(() => {
    console.log('abort', timer)
    controller.abort()
    // getData('url', timer = 5000);
  }, timer)

  async function getData(url) {
    await fetch(url, {
      signal: controller.signal
    })
    .then(response => console.log(response))
  }

  try {
    // getData(url)
  } catch (err) {
    console.log(err.name)
    if (err.name === 'AbortError') {
    // if (err.name === 'SyntaxError') {
      console.log(err.name)
      // switch(timer) {
      //   case 3000:
      //   sendRequest('url', timer = 4000);
      //   break;
      //   case 4000:
      //   sendRequest('url', timer = 5000);
      //   break;
      //   case 5000:
      //     console.log('finish actions')
      //   // return
      // }
    }
  }
}
*/

connectForm.onsubmit = function (e) {
  e.preventDefault()
  // sendRequest(`https://randomuser.me/api/?results=${Math.floor(Math.random() * (100 - 30 + 1)) + 30}`)
  let xhr = new XMLHttpRequest()
  xhr.open('POST', '/submit')
  xhr.send(new FormData(this))
  xhr.onload = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      showMessage('Спасибо! Ваше сообщение отправлено.')
    } else {
      showMessage('Сейчас невозможно отправить Ваши данные, попробуйте позже!')
    }
  }
  function showMessage(message) {
    var result = document.querySelector('.form_result')
    result.querySelector('p').innerHTML = message
    result.classList.add('active')
    report_conversion();
    setTimeout(function () { result.classList.remove('active') }, 3000)
  }
  this.reset()
}
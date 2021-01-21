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
  menu.onclick = function (e) { if (this.classList.contains('active') && e.target.tagName === 'A') toggle() }
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



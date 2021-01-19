var body = document.querySelector('body')

function toggleNavMenu(burger, canvas, nav) {
  var touchLength = 0
  function toggle() {
    burger.classList.toggle('active')
    canvas.classList.toggle('block')
    nav.classList.toggle('active')
    body.classList.toggle('active')
  }
  burger.onclick = function () {
    toggle()
  }
  nav.ontouchstart = function (e) {
    touchLength = e.touches[0].clientX
  }
  nav.ontouchend = function (e) {
    if (touchLength > (e.changedTouches[0].clientX + 60)) toggle()
  }
  nav.onclick = function (e) {
    if (this.classList.contains('active') && e.target.tagName === 'A') toggle()
  }
  window.addEventListener('click', function (e) {
    if (e.target === canvas) toggle()
  })
}
toggleNavMenu(document.querySelector('.header_mob_burger'), document.querySelector('.canvas'), document.querySelector('.header_nav'))



// var appendNumber = 4;
// var prependNumber = 3;

new Swiper('.symptoms .swiper-container', {
  // initialSlide: 0,
  slidesPerView: 1,
  spaceBetween: 26,
  breakpoints: {
    992: {
      slidesPerView: 1.5,
      centeredSlides: true,
      centeredSlidesBounds: true,
    }
  },
  // pagination: {
  // el: '.swiper-pagination',
  // clickable: true,
  // },
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
  },
});

new Swiper('.experts .swiper-container', {
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    992: {
      slidesPerView: 2,
    }
  },
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
  },
});

window.addEventListener('resize', function () {

})

// document.querySelector('.prepend-2-slides').addEventListener('click', function (e) {
//   e.preventDefault();
//   swiper.prependSlide([
//     '<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>',
//     '<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>'
//     ]);
// });
// document.querySelector('.prepend-slide').addEventListener('click', function (e) {
//   e.preventDefault();
//   swiper.prependSlide('<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>');
// });
// document.querySelector('.append-slide').addEventListener('click', function (e) {
//   e.preventDefault();
//   swiper.appendSlide('<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>');
// });
// document.querySelector('.append-2-slides').addEventListener('click', function (e) {
//   e.preventDefault();
//   swiper.appendSlide([
//     '<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>',
//     '<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>'
//     ]);
// });



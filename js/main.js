
var menu = document.querySelector('.header_nav')
document.querySelector('.header_mob_burger').onclick = function (e) {
  // console.log(this)
  menu.classList.toggle('active')
  this.classList.toggle('active')
}



// var appendNumber = 4;
// var prependNumber = 3;

  var swiper = new Swiper('.symptoms .swiper-container', {
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

window.addEventListener('resize', function() {

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



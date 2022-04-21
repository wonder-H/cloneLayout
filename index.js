const swiper = new Swiper('.swiper', {

  slidesPerView: '1',
  loop: true,
  autoplay: { 
          delay: 2000,
          disableOnInteraction: true, 
        },
  autoHeight : true,
  watchOverflow : true,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },

  watchSlidesProgress: true,

  pagination: {
    el: '.swiper-pagination',
    type : 'bullets',
    clickable: true,
    
    renderBullet: function (index, className) { 
      return `<span class="${className}">${index + 1}</span>`
    },
  },
});



  const visualSwiper = document.querySelector('.swiper.visual.container').swiper;

  visualSwiper.slideNext();


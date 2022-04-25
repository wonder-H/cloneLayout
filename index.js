// ================================== 스와이퍼 =====================================
const swiperVisual = new Swiper('.swiper.visual__container', {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  slidesPerView: '1',
  loop: true,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className}">${index + 1}</span>`
    },
  },
});


const swiperMainContents = new Swiper('.swiper.main-contents__visual',{
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  // spaceBetween: 20,
  centeredSlides: true,
  slidesPerView: 3,
  grabCursor: true,
  slideToClickedSlide: true,
})

const mainContainerEl = document.querySelector('.main-contents.container .main-contents__visual')

window.addEventListener('scroll', _.throttle(function () {
  if (window.scrollY > 400) {
    gsap.to(mainContainerEl, .6, {
      opacity: 1,
      display: 'block', 
      y: -60,
    });
    
  } else {
    gsap.to(mainContainerEl, .6, {
      opacity: 0,
      display: 'none',
    })
  }
},300))


const swiperMainContentsSNS = new Swiper('.swiper.main-contents__sns--img',{
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  spaceBetween: 10,
  centeredSlides: true,
  slidesPerView: '3',
  grabCursor: true,
  slideToClickedSlide: true,
})





// TweenMax.from(activeImgEl, 1, {
//   scale: 2,
//   repeat: -1,
//   yoyo: true,
// })







// ================================== 달력 ===================================== 

function calendar() {
  //Date 인스턴스 생성
  const date = new Date();
  //올해, 이번달, 이번달의 마지막날, 오늘
  const thisYear = date.getFullYear();
  const thisMonth = ('0' + (date.getMonth() + 1)).slice(-2);
  const days = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  const today = date.getDate();

  //오늘 확인
  console.log(today)

  //년,월,일 el 가져오기
  const getYearEl = document.querySelector('.cal-show-year');
  const getMonthEl = document.querySelector('.cal-show-month');
  const getDateEl = document.querySelector('.main-contents__visual--cal-date');

  //년, 월 값을 화면에 넣기
  getYearEl.textContent = thisYear;
  getMonthEl.textContent = thisMonth;

  // 해달 월 일수 나열
  for (let i = 0; i < days.getDate(); i += 1) {
    //일 span el 생성
    const createListEl = document.createElement('span');
    //span을 div에 붙이기
    getDateEl.appendChild(createListEl)
    //붙인 span에 날짜 넣기 
    createListEl.innerText = i + 1;

    //오늘 클래스 추가
    if (today === i + 1) {
      createListEl.classList.add('today');
    }
  }
}
calendar()

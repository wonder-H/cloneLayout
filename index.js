// ================================== 스와이퍼 =====================================
const swiperVisual = new Swiper('#visual', {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  oopAdditionalSlides: 1,
  watchSlidesProgress: true,
  centeredSlides: true,
  slidesPerView: '1',
  loop: true,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  autoHeight: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className}">${index + 1}</span>`
    },
  },
});


const swiperMainContents = new Swiper('#main-contents',{
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  // spaceBetween: 10,
  // oopAdditionalSlides: 1,
  loop: true,
  centeredSlides: true,
  // slidesPerView: '1',
  // slideToClickedSlide: true,
  // effect: 'coverflow',
  // coverflowEffect: {
  //   rotate : 20, 
  //   stretch : 0, 
  //   depth : 50,
    
  // }
})





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
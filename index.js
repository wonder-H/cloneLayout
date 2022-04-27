// =========================== aos init ============================================
AOS.init();

// ================================== 스와이퍼 =====================================

//visual container영역
const swiperVisual = new Swiper(".swiper.visual__container", {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  slidesPerView: "1",
  loop: true,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className}">${index + 1}</span>`;
    },
  },
});

//main - contents container영역
const swiperMainContents = new Swiper(".swiper.main-contents__visual", {
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  slidesPerView: 3,
  grabCursor: true,
  slideToClickedSlide: true,
});

//main - SNS container영역
const swiperMainContentsSNS = new Swiper(".swiper.main-contents__sns--img", {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  spaceBetween: 10,
  centeredSlides: true,
  slidesPerView: "3",
  grabCursor: true,
  slideToClickedSlide: true,
});

// ================================== 달력 =====================================

function calendar() {
  //Date 인스턴스 생성
  const date = new Date();
  //올해, 이번달, 이번달의 마지막날, 오늘
  const thisYear = date.getFullYear();
  const thisMonth = ("0" + (date.getMonth() + 1)).slice(-2);
  const days = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  const today = date.getDate();

  //년,월,일 el 가져오기
  const getYearEl = document.querySelector(".cal-show-year");
  const getMonthEl = document.querySelector(".cal-show-month");
  const getDateEl = document.querySelector(".main-contents__visual--cal-date");

  //년, 월 값을 화면에 넣기
  getYearEl.textContent = thisYear;
  getMonthEl.textContent = thisMonth;

  // 해달 월 일수 나열
  for (let i = 0; i < days.getDate(); i += 1) {
    //일 span el 생성
    const createListEl = document.createElement("span");
    //span을 div에 붙이기
    getDateEl.appendChild(createListEl);
    //붙인 span에 날짜 넣기
    createListEl.innerText = i + 1;

    //오늘 클래스 추가
    if (today === i + 1) {
      createListEl.classList.add("today");
    }
  }
}
calendar();

//============================ 푸터 패밀리 사이트 버튼 =========================

const listFamilyEl = document.querySelector(".lists-etc-family a");
//클릭 확인용 변수
let isActive = false;

listFamilyEl.addEventListener("click", () => {
  document.querySelector(".lists-etc-family ul");
  if (isActive === false) {
    //active클래스 추가
    document.querySelector(".lists-etc-family ul").classList.add("active");
  } else {
    //active클래스 제거
    document.querySelector(".lists-etc-family ul").classList.remove("active");
  }
  //true/false 변경
  isActive = !isActive;
});

//========================= 스크롤 이동 버튼 ===================================

const scrollBtnEl = document.querySelector(".scroll__btn");

//lodash로 과도한 scroll이벤트 막기
window.addEventListener(
  "scroll",
  _.throttle(() => {
    if (window.scrollY < 1500) {
      //스크롤 버튼 제거
      gsap.to(scrollBtnEl, 0.4, {
        opacity: 0,
        display: "none",
      });
    } else {
      //스크롤 버튼 추가
      gsap.to(scrollBtnEl, 0.4, {
        opacity: 1,
        display: "block",
      });
    }
  }, 300) //.3초마다 감지
);

//gsap scrollTo로 스크롤 이동
scrollBtnEl.addEventListener("click", () => {
  gsap.to(window, 0.7, {
    scrollTo: 0,
  });
});

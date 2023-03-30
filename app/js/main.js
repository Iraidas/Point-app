// Управление видео

var video = document.querySelector(".preview__video");
var muteBtn = document.querySelector(".preview__video-mute-button");

muteBtn.addEventListener('click', function() {
    this.classList.toggle("preview__video-unmute-button");
    if (video.muted) 
        video.muted = false;
    else 
        video.muted = true;
})

video.addEventListener('click', function() {
    if (video.paused) 
        video.play(); 
    else 
        video.pause();
})



// Бургер меню

let burgerBtn = document.querySelector(".header__burger-menu")
let burgerNav = document.querySelector(".header__nav")

let classes = burgerBtn.classList;
burgerBtn.addEventListener('click', function () {
  let result = classes.toggle("header__burger-menu-active");
  if (result == true) {
    burgerNav.style.height = "240px"
    burgerNav.style.opacity = "1"
    burgerNav.focus();

  }
    else {
      burgerNav.style.height = "0px"
      burgerNav.style.opacity = "0"
    }
})



// Аккордеон для вопросов

let accor = document.querySelectorAll(".questions__accordion");

for (let i = 0; i < accor.length; i++) {
  accor[i].addEventListener("click", function() {
    this.classList.toggle("questions__active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}


// Слайдер

document.addEventListener('DOMContentLoaded', () => {
  const width = window.innerWidth
  console.log(width);
  if (width < 768){
    const slider = new Swiper(
      '.specialists__wrapper', {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true, 
        },
        breakpoints: {
          680: {
            slidesPerView: 2,
          }
        }
    })
  }
})

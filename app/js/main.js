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

burgerBtn.addEventListener('click', function () {
  burgerBtn.classList.toggle("header__burger-menu-active");
  burgerNav.classList.toggle("header__nav-active");
})



// Аккордион для вопросов

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

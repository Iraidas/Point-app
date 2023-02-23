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
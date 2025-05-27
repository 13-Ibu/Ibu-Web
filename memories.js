window.addEventListener("scroll", function () {
    const navber = document.querySelector(".navber");
    if (window.scrollY > 50) {
      navber.classList.add("scrolled");
    } else {
      navber.classList.remove("scrolled");
    }
  });
  
  
  
  


const audio = document.getElementById('background-music');
const toggleBtn = document.getElementById('music-toggle');
const icon = toggleBtn.querySelector('i');

// Play on page load (some browsers may still block this)
window.addEventListener('load', () => {
  audio.play().then(() => {
    icon.classList.remove('fa-play');
    icon.classList.add('fa-pause');
  }).catch(() => {
    // Autoplay blocked – wait for user interaction
  });
});

// Toggle music play/pause
toggleBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    icon.classList.remove('fa-play');
    icon.classList.add('fa-pause');
  } else {
    audio.pause();
    icon.classList.remove('fa-pause');
    icon.classList.add('fa-play');
  }
});
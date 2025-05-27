  window.addEventListener("scroll", function () {
    const navber = document.querySelector(".navber");
    if (window.scrollY > 50) {
      navber.classList.add("scrolled");
    } else {
      navber.classList.remove("scrolled");
    }
  });
  
  
  
  
  
document.querySelector('.contact-container').addEventListener('mousemove', (e) => {
  const x = (window.innerWidth / 2 - e.pageX) / 40;
  const y = (window.innerHeight / 2 - e.pageY) / 40;
  e.currentTarget.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});
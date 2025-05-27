  window.addEventListener("scroll", function () {
    const navber = document.querySelector(".navber");
    if (window.scrollY > 50) {
      navber.classList.add("scrolled");
    } else {
      navber.classList.remove("scrolled");
    }
  });
  
  
  const ibrahim = document.querySelector('.ibrahim-hover');
  const letter = document.getElementById('letterText');

  ibrahim.addEventListener('mouseover', () => {
    letter.classList.add('highlight-letter');
  });

  ibrahim.addEventListener('mouseout', () => {
    letter.classList.remove('highlight-letter');
  });
  
  

  document.querySelectorAll('.navber ul li a').forEach(link => {
    link.addEventListener('touchstart', () => {
      link.classList.add('active-hover');
      setTimeout(() => link.classList.remove('active-hover'), 300); // optional auto-remove
    });
  });
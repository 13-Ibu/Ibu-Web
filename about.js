window.addEventListener("scroll", function () {
    const navber = document.querySelector(".navber");
    if (window.scrollY > 50) {
      navber.classList.add("scrolled");
    } else {
      navber.classList.remove("scrolled");
    }
  });
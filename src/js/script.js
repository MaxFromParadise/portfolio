const hamburger = document.querySelector(".hamburger"),
      navbar = document.querySelector(".navbar"),
      closeMenu = document.querySelector(".navbar__close");

hamburger.addEventListener("click", () => {
    navbar.classList.add("active")
});
closeMenu.addEventListener("click", () => {
    navbar.classList.remove("active")
});


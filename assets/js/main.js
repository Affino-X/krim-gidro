const hamburgerNav = document.querySelector(".hamburger-nav");

const hamburgerButton = document.querySelector(".hamburger-menu");
const hamburgerClose = document.querySelector(".hamburger-nav__close");

hamburgerButton.addEventListener("click", () => {
  hamburgerNav.classList.add("active");
});

hamburgerClose.addEventListener("click", () => {
  hamburgerNav.classList.remove("active");
});

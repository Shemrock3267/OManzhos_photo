const hamburger = document.querySelector('.hamburger');
const navLinksSocial = document.querySelector('.nav-social-links');
const links = document.querySelectorAll('.nav-social-links li');

hamburger.addEventListener("click", () => {
  navLinksSocial.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});
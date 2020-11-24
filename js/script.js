let heightSite = window.pageYOffset;

const navbar = document.querySelector('.back_nav');

let heightNavbar = navbar.offsetHeight;

console.log(heightNavbar);

window.addEventListener('scroll', function() {
  let scrollSite = window.pageYOffset;
  if (heightSite > scrollSite) {
    navbar.style.top = '0px';
  } else {
    navbar.style.top = `-${heightNavbar}px`;
  }
  heightSite = scrollSite;
}); 
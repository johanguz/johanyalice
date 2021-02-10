const navBar = document.querySelector('.navbar');

window.addEventListener("scroll", () => {
  if (pageYOffset != 0) {
  navBar.classList.add('d-none');}
  else {
    navBar.classList.remove('d-none');
  }
})

// if (window.pageYOffset === 0) {
//   navBar.classList.remove('d-none');
// }
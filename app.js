const navBar = document.querySelector('.bottomarrow');
// const travelInfo = document.querySelector('.travelInfo')

window.addEventListener("scroll", () => {
  if (pageYOffset != 0) {
  navBar.classList.add('d-none');}
  else {
    navBar.classList.remove('d-none');
  }
})

navBar.addEventListener("click", () => {
  document.querySelector('.travelInfo').scrollIntoView({
    behavior: 'smooth'
  })

})
// if (window.pageYOffset === 0) {
//   navBar.classList.remove('d-none');
// }
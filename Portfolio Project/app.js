const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

// Display Mobile Menu
const MobileMenu = () => {
  menu.classList.toggle('is-active')
  menuLinks.classList.toggle('active')
}

menu.addEventListener('click', MobileMenu)
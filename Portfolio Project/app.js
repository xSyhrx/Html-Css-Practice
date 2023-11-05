const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
const navLogo = document.querySelector('#navbar_logo')

// Display Mobile Menu
const MobileMenu = () => {
  menu.classList.toggle('is-active')
  menuLinks.classList.toggle('active')
}

menu.addEventListener('click', MobileMenu)

// Show active menu when scrolling
const highLightMenu = () => {
  const element = document.querySelector('.highlight')
  const homeMenu = document.querySelector('#home-page')
  const aboutMenu = document.querySelector('#about-page')
  const projectsMenu = document.querySelector('#projects-page')

  let scrollPos = window.scrollY

  // adds the 'highLights' class to my menu items
  if(window.innerWidth > 960 && scrollPos < 600 ) {
    homeMenu.classList.add('highlight')
    aboutMenu.classList.remove('highlight')
    return
  } else if (window.innerWidth > 960 && scrollPos < 1400) {
    aboutMenu.classList.add('highlight')
    homeMenu.classList.remove('highlight')
    projectsMenu.classList.remove('highlight')
    return
  }  else if (window.innerWidth > 960 && scrollPos < 2345) {
    projectsMenu.classList.add('highlight')
    aboutMenu.classList.remove('highlight')
    return
  }

  if((element && window.innerWidth < 960 && scrollPos < 600) || element) {
    element.classList.remove('highlight')
  }
}

window.addEventListener('scroll', highLightMenu)
window.addEventListener('click', highLightMenu)

// close mobile meny when clicking on an item
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active')
  if(window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active')
  }
}

menuLinks.addEventListener('click', hideMobileMenu)
navLogo.addEventListener('click', hideMobileMenu)
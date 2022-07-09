window.addEventListener('scroll', onScroll)

onScroll()

function onScroll() {
  showBackToTopButtonOnScroll()
  showNavOnScroll()
  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(sectionName) {
  const targetLine = scrollY + innerHeight / 2
  const sectionTop = sectionName.offsetTop
  const sectionHeight = sectionName.offsetHeight
  const sectionEnd = sectionTop + sectionHeight
  const targetLineCrossSection = targetLine >= sectionTop
  const targetLineEndSection = targetLine <= sectionEnd
  const dentroDaSessao = targetLineCrossSection && targetLineEndSection
  const sectionID = sectionName.getAttribute(`id`)
  const menuElement = document.querySelector(`.menu a[href*=${sectionID}]`)

  menuElement.classList.remove('active')
  if (dentroDaSessao) {
    menuElement.classList.add('active')
  }
}

function showNavOnScroll() {
  if (scrollY > 0) {
    document.querySelector('#navigation').classList.add('scroll')
  } else {
    document.querySelector('#navigation').classList.remove('scroll')
  }
}
function showBackToTopButtonOnScroll() {
  if (scrollY > 600) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}
function openMenu() {
  document.body.classList.add('menu-expanded')
}
function closeMenu() {
  document.body.classList.remove('menu-expanded')
}
ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
}).reveal(`#home, 
           #home img, 
           #home .stats,
           #services,
           #services header,
           #services .card
           #about,
           #about header,
           #about .content`)

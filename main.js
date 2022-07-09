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
  // Linha FIXADA no meio da tela
  const targetLine = scrollY + innerHeight / 2
  // Topo da Sessão
  const sectionTop = sectionName.offsetTop
  // Altura da Sessão
  const sectionHeight = sectionName.offsetHeight
  // Limite da sessão
  const sectionEnd = sectionTop + sectionHeight
  // Linha FIXADA passou do topo da sessão?
  const targetLineCrossSection = targetLine >= sectionTop
  const targetLineEndSection = targetLine <= sectionEnd
  // Checa se esta DENTRO da Sessão
  const dentroDaSessao = targetLineCrossSection && targetLineEndSection
  // Recebendo atributos da Sessão "sectionName"
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

// Polyfill check
// Element.closest()
// Element.classList.toggle()

document.addEventListener('DOMContentLoaded', function () {
  var appsOpenIcon = document.querySelector('.page-menu--apps-icon.open-button')
  var appsCloseIcon = document.querySelector('.page-menu--apps-icon.close-button')
  var appsMenu = document.querySelector('.apps-menu')
  appsOpenIcon.addEventListener('click', function (e) {
    appsMenu.classList.toggle('is-active')
    appsOpenIcon.classList.toggle('is-active')
    appsCloseIcon.classList.toggle('is-active')
  })
  appsCloseIcon.addEventListener('click', function (e) {
    appsMenu.classList.toggle('is-active')
    appsOpenIcon.classList.toggle('is-active')
    appsCloseIcon.classList.toggle('is-active')
  })
})

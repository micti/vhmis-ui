// Polyfill check
// Element.closest()
// Element.classList.toggle()

export default function init() {
  var appsOpenIcon = document.querySelector('.extra-menu--apps-icon.open-button')
  var appsCloseIcon = document.querySelector('.extra-menu--apps-icon.close-button')
  var appsMenu = document.querySelector('.page-menu')
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

  // Submenu open & close
  var submenusTrigger = document.querySelectorAll('.has-submenu > a')

  document.addEventListener('click', function (event) {
    closeSubmenus(event.target)
  })

  submenusTrigger.forEach(function (el) {
    el.addEventListener('click', function (event) {
      event.preventDefault()
      el.closest('.has-submenu').classList.add('is-active')
    })
  })

  function closeSubmenus (target) {
    var parent = target.closest('.has-submenu')
    submenusTrigger.forEach(function (el) {
      el = el.closest('.has-submenu')
      if (parent !== null && parent === el) {
        return
      }
      el.classList.remove('is-active')
    })
  }
}

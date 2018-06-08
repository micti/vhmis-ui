// Polyfill check
// Element.closest()
// Element.classList.toggle()

let appsOpenIcon = document.querySelector('.extra-menu--apps-open-icon')
let appsCloseIcon = document.querySelector('.page-menu--apps-close-icon')
let appsMenu = document.querySelector('.page-menu')

let openGlobalMenu = () => {
  appsMenu.classList.add('is-active')
  document.body.classList.add('is-active-overlay')
}

let closeGlobalMenu = () => {
  appsMenu.classList.remove('is-active')
  document.body.classList.remove('is-active-overlay')
}

export default function init () {
  appsOpenIcon.addEventListener('click', function (e) {
    openGlobalMenu()
  })
  appsCloseIcon.addEventListener('click', function (e) {
    closeGlobalMenu()
  })

  // Submenu open & close
  var submenusTrigger = document.querySelectorAll('.has-submenu > a')

  if ('ontouchstart' in document.documentElement) {
    document.addEventListener('touchstart', function (event) {
      closeSubmenus(event.target)
    })
  }

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
    var parent = !target ? null : target.closest('.has-submenu')
    submenusTrigger.forEach(function (el) {
      el = el.closest('.has-submenu')
      if (parent !== null && parent === el) {
        return
      }
      el.classList.remove('is-active')
    })
  }

  // Esc key to close all submenu and global menu
  document.onkeydown = function (evt) {
    evt = evt || window.event
    if (evt.keyCode === 27) {
      closeGlobalMenu()
      closeSubmenus(null)
    }
  }
}

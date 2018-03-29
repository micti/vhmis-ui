// Polyfill check
// Element.closest()
// Element.classList.toggle()

document.addEventListener('DOMContentLoaded', function () {
  // Apps bar
  var appsBar = document.querySelector('.global-header')
  var appsBarOpen = document.querySelector('.page-header--apps-icon')
  var appsBarClose = document.querySelector('.global-header--close')

  appsBarOpen.addEventListener('click', function (event) {
    appsBar.classList.toggle('is-active')
    appsBarOpen.classList.toggle('is-active')
  })

  appsBarClose.addEventListener('click', function (event) {
    appsBar.classList.remove('is-active')
    appsBarOpen.classList.remove('is-active')
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
})
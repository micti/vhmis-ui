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
  var submenus = document.querySelectorAll('.has-submenu')

  document.addEventListener('click', function (event) {
    closeSubmenus(event.target)
  })

  submenus.forEach(function (el) {
    el.addEventListener('click', function (event) {
      event.preventDefault()
      el.classList.add('is-active')
    })
  })

  function closeSubmenus(target) {
    var parent = target.closest('.has-submenu')
    submenus.forEach(function (el) {
      if (parent !== null && parent === el) {
        return
      }
      el.classList.remove('is-active')
    })
  }
})

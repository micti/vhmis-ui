// Polyfill check
// Element.closest()

document.addEventListener('DOMContentLoaded', function () {
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

export function Selector (selector) {
  this.query = selector
  this.element = document.querySelectorAll(selector)
}

function find (selector) {

}

function addClass (name) {
  for (var el of this.element) {
    el.classList.add(name)
  }

  return this
}

function removeClass (name) {
  for (var el of this.element) {
    el.classList.remove(name)
  }

  return this
}

function attr (name, value) {
  if (arguments.length < 2) {
    return this.element.length ? this.element[0].getAttribute(name) : null
  }

  for (var el of this.element) {
    el.setAttribute(name, value)
  }
}

function data (name, value) {
  name = 'data-' + name
  return this.attr(name, value)
}

function style (name, value) {
  if (arguments.length < 2) {
    return this.element.length ? window.getComputedStyle(this.element[0], null)[name] : null
  }

  for (var el of this.element) {
    el.style[name] = value
  }
}

function text (value) {
  if (arguments.length < 1) {
    return this.element.length ? this.element[0].textContent : null
  }

  for (var el of this.element) {
    el.textContent = value
  }
}

function html (value) {
  if (arguments.length < 1) {
    return this.element.length ? this.element[0].innerHTML : null
  }

  for (var el of this.element) {
    el.innerHTML = value
  }
}

function on (selector, eventName, handler, options) {
  if (typeof eventName === 'string') {
    for (var el of this.element) {
      el.addEventListener(eventName, e => {
        let target = e.target
        if (target && target.matches(selector)) {
          handler(e)
        }
      })
    }

    return
  }

  for (var el of this.element) {
    el.addEventListener(selector, eventName)
  }
}

function off (eventName, handler, options) {
  for (var el of this.element) {
    el.removeEventListener(eventName, handler)
  }
}

function trigger (eventName) {
  for (var el of this.element) {
    let e = document.createEvent('HTMLEvents')
    e.initEvent(eventName, false, true)
    el.dispatchEvent(e)
  }
}

function each (callback) {
  for (var el of this.element) {
    let res = callback(el)
    if (res === false) return
  }
}

function outerSize () {
  return this.element.length ? { w: this.element[0].offsetWidth, h: this.element[0].offsetHeight } : null
}

function innerSize () {
  return this.element.length ? { w: this.element[0].clientWidth, h: this.element[0].clientHeight } : null
}

function offset () {
  if (!this.element.length) return null

  let el = this.element[0]
  let rect = el.getBoundingClientRect()
  let scrollLeft = document.documentElement.scrollLeft
  let scrollTop = document.documentElement.scrollTop

  return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

function position () {
  return this.element.length ? { top: this.element[0].offsetTop, left: this.element[0].offsetLeft } : null
}

function scroll () {
  return this.element.length ? { top: this.element[0].scrollTop, left: this.element[0].scrollLeft } : null
}

function scrollTop (value) {
  if (arguments.length < 1) {
    return this.element[0].scrollTop
  }

  for (var el of this.element) {
    el.scrollTop = value
  }
}

function scrollLeft (value) {
  if (arguments.length < 1) {
    return this.element[0].scrollLeft
  }

  for (var el of this.element) {
    el.scrollLeft = value
  }
}

Selector.prototype = {
  constructor: Selector,
  data: data,
  addClass: addClass,
  removeClass: removeClass,
  attr: attr,
  style: style,
  on: on,
  off: off,
  trigger: trigger,
  each: each,
  outerSize: outerSize,
  innerSize: innerSize,
  offset: offset,
  position: position,
  scroll: scroll,
  scrollTop: scrollTop,
  scrollLeft: scrollLeft,
  text: text,
  html: html
}

export default function (selector) {
  return new Selector(selector)
}

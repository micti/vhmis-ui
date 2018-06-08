import selector from '../util/selector'

const DEFAULT_OPTIONS = {
  element: null
}

let MODAL_GLOBAL = {
  total: 0
}

class Modal {
  constructor (control, element, options) {
    options = {...DEFAULT_OPTIONS, ...options}

    this.control = selector(control)
    this.element = selector(element)
    this.options = options
    this.overlay = selector('#overlay')

    this._setEventListener()

    console.log('Finish')
  }

  show (e) {
    e.preventDefault()

    this.overlay.addClass('is-active')
    this.element.addClass('is-active')
  }

  hide (e) {
    if (e.target.id === 'overlay') {
      e.preventDefault()

      this.overlay.removeClass('is-active')
      this.element.removeClass('is-active')
    }
  }

  _setEventListener () {
    this.overlay.on('click', e => this.hide(e))

    if (this.options.element !== null) {
      this.control.on(this.options.element, 'click', e => this.show(e))
      return
    }

    this.control.on('click', e => this.show(e))
  }
}

export default function (control, element, options) {
  return new Modal(control, element, options)
}

import selector from '../../util/selector'

const DEFAULT_OPTIONS = {
  element: null
}

let MODAL_GLOBAL = {
  init: false,
  modalStack: [],
  openOverlay: () => {
    document.getElementById('overlay').classList.add('is-active')
    document.body.classList.add('is-active-overlay')
  },
  closeOverlay: () => {
    document.getElementById('overlay').classList.remove('is-active')
    document.body.classList.remove('is-active-overlay')
  }
}

class Modal {
  constructor (control, element, options) {
    options = {...DEFAULT_OPTIONS, ...options}

    this.control = selector(control)
    this.element = selector(element)
    this.options = options

    this.closeControl = this.element.element[0].querySelectorAll('.modal--close')

    this._setEventListener()

    if (!MODAL_GLOBAL.init) {
      this._initGlobal()
    }
  }

  showEvent (e) {
    e.preventDefault()

    if (MODAL_GLOBAL.modalStack.length > 0) {
      MODAL_GLOBAL.modalStack[MODAL_GLOBAL.modalStack.length - 1].hide()
    } else {
      MODAL_GLOBAL.openOverlay()
    }

    this.show()
    MODAL_GLOBAL.modalStack.push(this)
  }

  hideEvent (e) {
    if (e.target === this.closeControl || e.target.closest('.modal--close')) {
      e.preventDefault()
      this.hide()
      this._hide()
    }
  }

  _hide() {
    MODAL_GLOBAL.modalStack.pop()

    if (MODAL_GLOBAL.modalStack.length === 0) {
      return MODAL_GLOBAL.closeOverlay()
    }

    MODAL_GLOBAL.modalStack[MODAL_GLOBAL.modalStack.length - 1].show()
  }

  hide() {
    this.element.removeClass('is-active')
  }

  show() {
    this.element.addClass('is-active')
  }

  _setEventListener () {
    for (const closeControl of this.closeControl) {
      closeControl.addEventListener('click', e => this.hideEvent(e))
    }

    if (this.options.element !== null) {
      this.control.on(this.options.element, 'click', e => this.showEvent(e))
      return
    }

    this.control.on('click', e => this.showEvent(e))
  }

  _initGlobal () {
    document.getElementById('overlay').addEventListener('click', e => Modal.hideGlobal(e))
    document.addEventListener('keydown', e => Modal.hideGlobal(e))

    MODAL_GLOBAL.init = true
  }

  static hideGlobal(e) {
    if (e.target.id === 'overlay' || e.keyCode === 27 && MODAL_GLOBAL.modalStack.length > 0) {
      let currentOpenedModal = MODAL_GLOBAL.modalStack.pop()
      currentOpenedModal.hide()

      if (MODAL_GLOBAL.modalStack.length === 0) {
        return MODAL_GLOBAL.closeOverlay()
      }

      MODAL_GLOBAL.modalStack[MODAL_GLOBAL.modalStack.length - 1].show()
    }
  }
}

export default function (control, element, options) {
  return new Modal(control, element, options)
}

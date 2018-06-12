class Token {
  constructor (element, options) {
    this.element = element
    this.options = options

    this._init()
    this._addEventListerner()

    // Khởi tạo
  }

  showDropdown (e) {

  }

  _init () {
    // ẩn input thiệt
    this.element.style['display'] = 'none'

    // tạo token
    this.token = document.createElement('div')
    this.token.classList.add('token')
    this.token.classList.add('input')
    this.element.parentNode.insertBefore(this.token, this.element.nextSibling)

    // tạo token list
    this.tokenList = document.createElement('ul')
    this.tokenList.classList.add('token--list')
    this.token.appendChild(this.tokenList)

    // tạo input giả
    this.tokenInput = document.createElement('input')
    this.tokenInput.setAttribute('type', 'text')
    this.tokenInput.setAttribute('placeholder', 'Type and search')
    this.tokenInput.classList.add('token--input')
    this.token.appendChild(this.tokenInput)
  }

  _addEventListerner () {
    //this.element.addEventListerner('focus', e => this.showDropdown(e))
  }


}

export default function (element, options) {
  return new Token(element, options)
}

const KEY = {
  up: 38,
  down: 40,
  enter: 13
}

class Token {
  constructor (element, options) {
    this.element = element
    this.options = options
    this.token = null;
    this.tokenContainer = null;
    this.tokenInput = null;
    this.tokenSuggestion = null;
    this.tokenList = null;
    this.value = []
    this.data = [
      {
        id: 2,
        name: 'ABC'
      },
      {
        id: 1,
        name: '1ABC'
      },
      {
        id: 41,
        name: '1ABdddC'
      },
      {
        id: 16,
        name: '1AvvvBC'
      },
      {
        id: 91,
        name: '1A2222BC'
      }
    ]

    this._init()


    // Khởi tạo
  }

  // Khi người dùng focus vào input giả
  focus (e) {
    // Thiết lập focus mod cho input ảo
    this.token.classList.add('is-active')

    // Hiển thị token sugggestion
    this.tokenSuggestion.classList.add('is-active')
  }

  blur (e) {
    // console.log(e)
    if (e.target.closest('.token--suggestion')) {
      return
    }

    // Thiết lập focus mod cho input ảo
    this.token.classList.remove('is-active')

    // Hiển thị token sugggestion
    this.tokenSuggestion.classList.remove('is-active')
  }

  addItem (data) {
    // Bỏ qua nếu đã chọn rồi
    if (this.value.find((value) => {
      return data.id == value
    })) {
      return
    }

    let item = document.createElement('li')
    item.innerHTML = data.name + ' <span><i class="fas fa-times"></i></span>'
    this.tokenList.appendChild(item)

    this.value.push(data.id)
    this.element.value = this.data.join(',')

    this.tokenInput.value = ''
    this._clearSuggestion()
  }

  keydown (e) {

    if (e.keyCode === KEY.up) {
      return this._selectUp()
    }

    if (e.keyCode === KEY.down) {
      return this._selectDown()
    }

    if (e.keyCode === KEY.enter) {
      return this._addItemFromSelect()
    }

    this.tokenSuggestion.innerHTML = "Bạn cứ gõ tiếp đi"
    let search = this.tokenInput.value

    this._search(search)


  }

  _selectDown () {
    let current = this.tokenSuggestion.querySelector('.dropdown-item.is-active')

    if (current === null) {
      this.tokenSuggestion.querySelector('.dropdown-item').classList.add('is-active')
      return
    }

    if (current.nextSibling) {
      current.classList.remove('is-active')
      current.nextSibling.classList.add('is-active')
    }
  }

  _selectUp () {
    let current = this.tokenSuggestion.querySelector('.dropdown-item.is-active')

    if (current === null) {
      this.tokenSuggestion.querySelector('.dropdown-item:last-child').classList.add('is-active')
      return
    }

    if (current.previousSibling) {
      current.classList.remove('is-active')
      current.previousSibling.classList.add('is-active')
    }
  }

  _addItemFromSelect () {
    let current = this.tokenSuggestion.querySelector('.dropdown-item.is-active')

    if (current === null) {
      return
    }

    this.addItem({
      name: current.getAttribute('data-name'),
      id: current.getAttribute('data-id')
    })
  }

  _addItemFromClick (item) {
    this.addItem({
      name: item.getAttribute('data-name'),
      id: item.getAttribute('data-id')
    })
  }

  _search (value) {
    this.searching = true

    let suggestion = '<ul class="dropdown-content">';
    for (let data of this.data) {
      suggestion += '<li class="dropdown-item" data-id="' + data.id + '" data-name="' + data.name.replace('"', '\\"') + '"><a href="">' + data.name + '</a></li>'
    }
    suggestion += '</ul>';

    this.tokenSuggestion.innerHTML = suggestion
    this.searching = false
  }

  _clearSuggestion () {
    this.tokenSuggestion.innerHTML = 'Tieeps tuc'
  }

  _init () {
    // ẩn input thiệt
    this.element.style['display'] = 'none'

    // tạo token container
    this.tokenContainer = document.createElement('div')
    this.tokenContainer.classList.add('token--container')
    this.element.parentNode.insertBefore(this.tokenContainer, this.element.nextSibling)

    // tạo token
    this.token = document.createElement('div')
    this.token.classList.add('token')
    this.token.classList.add('input')
    this.tokenContainer.appendChild(this.token)

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

    // tạo token suggestion
    this.tokenSuggestion = document.createElement('div')
    this.tokenSuggestion.classList.add('token--suggestion')
    this.tokenSuggestion.classList.add('dropdown-menu')
    this.tokenContainer.appendChild(this.tokenSuggestion)

    // Event
    this._addEvents()
  }

  _addEvents () {
    // this.tokenInput.addEventListener('focus', e => this.focus(e))
    // this.tokenInput.addEventListener('blur', e => this.blur(e))
    // this.tokenInput.addEventListener('keydown', e => this.keydown(e))

    // Not Click but mousedown
    this.tokenSuggestion.addEventListener('mousedown', e => {
      e.preventDefault()
    })
    this.tokenSuggestion.addEventListener('click', e => {

      e.preventDefault()
      if (e.target && e.target.closest('.dropdown-item')) {
        console.log(e)
        let item = e.target.closest('.dropdown-item')
        this._addItemFromClick(item)
      }
    })

    this.tokenInput.addEventListener('focus', e => this.focus(e))
    this.tokenInput.addEventListener('blur', e => this.blur(e))
    this.tokenInput.addEventListener('keydown', e => this.keydown(e))
  }


}

export default function (element, options) {
  return new Token(element, options)
}

import checkErrorResponse from '../../util/fetch'

const KEY = {
  up: 38,
  down: 40,
  left: 37,
  right: 39,
  enter: 13,
  esc: 27,
  delete: 8
}

const DEFAULT_OPTIONS = {
  remoteData: null,
  searchDelay: 500,
  minChar: 3
}

class Token {
  constructor (element, options) {
    this.element = element
    this.options = {...DEFAULT_OPTIONS, ...options}
    this.token = null
    this.tokenContainer = null
    this.tokenInput = null
    this.tokenSuggestion = null
    this.tokenList = null
    this.value = []
    this.data = this.options.data ? this.options.data : []

    // Khởi tạo
    this._init()
  }

  // Lấy giá trị
  getValue () {
    return this.element.value
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

    // Xóa value
    this.tokenInput.value = ''
  }

  addItem (data) {
    // Bỏ qua nếu đã chọn rồi
    if (this.value.find((value) => {
      return data.id.toString() === value.toString()
    })) {
      return
    }

    // Tạo item, set event
    let item = document.createElement('li')
    item.setAttribute('data-id', data.id)
    item.classList.add('token-item')
    item.innerHTML = data.name + ' <span class="tọken-item--delete"><i class="fas fa-times"></i></span>'
    this.tokenList.appendChild(item)
    let itemDeleteButton = item.querySelector('.tọken-item--delete')
    if (itemDeleteButton) {
      itemDeleteButton.addEventListener('click', e => this._deleteItemFromButton(e))
    }

    this.value.push(data.id)
    this.element.value = this.value.join(',')

    this.tokenInput.value = ''
    this._clearSuggestion()
  }

  _deleteItemFromButton (e) {
    let item = e.target.closest('.token-item')
    if (!item) {
      return
    }

    this.deleteItem(item.getAttribute('data-id'))
  }

  deleteItem (value) {
    let index = this.value.indexOf(value)

    // Bỏ qua nếu chưa có
    if (index === -1) {
      return
    }

    // Xóa trong token list
    let item = this.tokenList.querySelector('.token-item[data-id="' + value.replace('"', '\\"') + '"]')
    item.remove()

    // Cập nhật lại giá trị mới
    this.value.splice(index, 1)
    this.element.value = this.value.join(',')
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

    if (e.keyCode === KEY.left && this.tokenInput.value === '') {
      return this._selectTokenLeft()
    }

    if (e.keyCode === KEY.right && this.tokenInput.value === '') {
      return this._selectTokenRight()
    }

    if (e.keyCode === KEY.right && this.tokenInput.value === '') {
      return this._selectTokenRight()
    }

    if (e.keyCode === KEY.delete && this.tokenInput.value === '') {
      return this._selectTokenOrDelete()
    }

    if (String.fromCharCode(e.which)) {
      // Gọi sau 5ms, đảm bảo event này thực hiện xong, khi đó lấy giá trị value sẽ có ký tự mới gõ
      setTimeout(() => { this._search() }, 5)
    }
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

  _selectTokenOrDelete () {
    let item = this.tokenList.querySelector('.token-item.is-active')

    if (item === null) {
      this.tokenList.querySelector('.token-item:last-child').classList.add('is-active')
      return
    }

    // Xóa
    this.deleteItem(item.getAttribute('data-id'))
  }

  _selectTokenLeft () {
    let current = this.tokenList.querySelector('.token-item.is-active')

    if (current === null) {
      this.tokenList.querySelector('.token-item:last-child').classList.add('is-active')
      return
    }

    if (current.previousSibling) {
      current.classList.remove('is-active')
      current.previousSibling.classList.add('is-active')
    }
  }

  _selectTokenRight () {
    let current = this.tokenList.querySelector('.token-item.is-active')

    if (current === null) {
      this.tokenList.querySelector('.token-item').classList.add('is-active')
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

  async _search () {
    let value = this.tokenInput.value
    this.searching = true

    if (value.length < this.options.minChar) {
      return this._clearSuggestion()
    }

    if (this.options.remoteData !== null) {
      this.data = await this._searchRemoteData(value)
    } else {
      this.data = this._filterData(value)
    }

    // Chỉ hiện kết quả nếu giá trị tìm kiếm vẫn giữ nguyên sau khi request search xong
    if (value !== this.tokenInput.value) {
      console.log(value)
      return
    }

    if (this.data.length === 0) {
      return this._noDataSuggestion()
    }

    let suggestion = '<ul class="dropdown-content">';
    for (let data of this.data) {
      suggestion += '<li class="dropdown-item" data-id="' + data.id + '" data-name="' + data.name.replace('"', '\\"') + '"><a href="">' + data.name + '</a></li>'
    }
    suggestion += '</ul>';

    this.tokenSuggestion.innerHTML = suggestion
    this.searching = false
  }

  async _searchRemoteData (value) {
    let request = this.options.remoteData + '?' + this.options.requestSearchParam + '=' + value
    let data = await (await fetch(encodeURI(request))).json()
    return data
  }

  _filterData (value) {
    let data = []
    this.options.data.forEach(element => {
      if (element.name.toLowerCase().indexOf(value.toLowerCase()) > -1) {
        data.push(element)
      }
    })

    return data
  }

  _clearSuggestion () {
    this.tokenSuggestion.innerHTML = '<div class="dropdown-text token-message">Gõ vài ký tự để tìm kiếm</div>'
  }

  _noDataSuggestion () {
    this.tokenSuggestion.innerHTML = '<div class="dropdown-text token-message">Không tìm thấy kết quả phù hợp</div>'
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

    // Trạng thái mặc định của token suggestion
    this._clearSuggestion()

    // Event
    this._addEvents()
  }

  _addEvents () {
    this.tokenInput.addEventListener('focus', e => this.focus(e))
    this.tokenInput.addEventListener('blur', e => this.blur(e))
    this.tokenInput.addEventListener('keydown', e => this.keydown(e))

    // Not Click but mousedown
    this.tokenSuggestion.addEventListener('mousedown', e => {
      e.preventDefault()
    })
    this.tokenSuggestion.addEventListener('click', e => {
      e.preventDefault()
      if (e.target && e.target.closest('.dropdown-item')) {
        let item = e.target.closest('.dropdown-item')
        this._addItemFromClick(item)
      }
    })
  }
}

export default function (element, options) {
  return new Token(element, options)
}

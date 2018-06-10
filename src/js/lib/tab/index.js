import selector from '../../util/selector'
import { checkErrorResponse } from '../../util/fetch'

const DEFAULT_OPTIONS = {
  tabSelector: '.tab'
}

class Tab {
  constructor (element, options) {
    options = {...DEFAULT_OPTIONS, ...options}

    this.element = selector(element)
    this.options = options
    this.tabs = this.element.element[0].querySelectorAll(this.options.tabSelector)
    this.currentTab = null
    this.currentTabContent = null

    this._init()
  }

  change (e) {
    e.preventDefault()
    let tab = e.target.closest(this.options.tabSelector)

    this.open(tab)
  }

  open (tab) {
    if (this.currentTab !== null) {
      this.currentTab.classList.remove('is-active')
      this.currentTabContent.classList.remove('is-active')
    }

    this.currentTab = tab
    this.currentTabContent = document.getElementById(this.currentTab.getAttribute('data-contentid'))
    this.currentTab.classList.add('is-active')
    this.currentTabContent.classList.add('is-active')

    let contentUrl = this.currentTab.getAttribute('data-contenturl')
    let contentLoaded = this.currentTab.getAttribute('data-contentloaded')

    if (contentUrl !== null && contentLoaded !== '1') {
      fetch(contentUrl)
        .then(checkErrorResponse)
        .then(res => {
          return res.text()
        })
        .then(data => {
          this.currentTabContent.innerHTML = data
          this.currentTab.setAttribute('data-contentloaded', '1')
        })
        .catch(e => {
          console.log(e)
          this.currentTabContent.innerHTML = 'Lỗi'
        })
    }
  }

  _init () {
    for (const tab of this.tabs) {
      tab.addEventListener('click', e => this.change(e))

      if (tab.classList.contains('is-active')) {
        this.open(tab)
      }
    }

    if (this.currentTab === null) {
      this.open(this.tabs[0])
    }
  }
}

export default function (element, options) {
  return new Tab(element, options)
}

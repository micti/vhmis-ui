import selector from '../../util/selector'

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
    this._setEventListener()
  }

  change (e) {
    e.preventDefault()
    let tab = e.target.closest(this.options.tabSelector)

    this.currentTab.classList.remove('is-active')
    this.currentTabContent.classList.remove('is-active')

    this.currentTab = tab
    this.currentTabContent = document.getElementById(this.currentTab.getAttribute('data-contentid'))
    this.currentTab.classList.add('is-active')
    this.currentTabContent.classList.add('is-active')
  }

  _init () {
    for (const tab of this.tabs) {
      let contentId = tab.getAttribute('data-contentid')
      let tabContent = document.getElementById(contentId)

      if (tab.classList.contains('is-active')) {
        tabContent.classList.add('is-active')
        this.currentTab = tab
        this.currentTabContent = tabContent
        continue
      }

      tabContent.classList.remove('is-active')
    }

    if (this.currentTab === null) {
      this.currentTab = this.tabs[0]
      this.currentTabContent = document.getElementById(this.currentTab.getAttribute('data-contentid'))
      this.currentTabContent.classList.add('is-active')
      this.currentTab.classList.add('is-active')
    }
  }

  _setEventListener () {
    for (const tab of this.tabs) {
      tab.addEventListener('click', e => this.change(e))
    }
  }
}

export default function (element, options) {
  return new Tab(element, options)
}

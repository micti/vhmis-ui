import selector from '../../util/selector'
import { checkErrorResponse } from '../../util/fetch'

const DEFAULT_OPTIONS = {
  tabSelector: '.tab',
  history: false
}

let TAB_GLOBAL = {
  setTab: (state) => {
    let contentid = state.contentid
    let tabname = state.tabName
    TAB_GLOBAL.tabIns[tabname].changeByName(contentid)
  },
  tabIns: {},
  count: 1,
  init: false
}

class Tab {
  constructor (element, options) {
    options = {...DEFAULT_OPTIONS, ...options}

    this.element = selector(element)
    this.options = options
    this.tabs = this.element.element[0].querySelectorAll(this.options.tabSelector)
    this.currentTab = null
    this.currentTabContent = null
    this.defaultTab = null
    this.tabName = "tabs" + TAB_GLOBAL.count

    this._init()

    TAB_GLOBAL.count++
    TAB_GLOBAL.tabIns[this.tabName] = this
    if (!TAB_GLOBAL.init) {
      this._historyEvent()
    }
  }

  change (e) {
    e.preventDefault()
    let tab = e.target.closest(this.options.tabSelector)

    this.open(tab, true)
  }

  changeByName (contentName, setState = false) {
    for (const tab of this.tabs) {
      if (tab.getAttribute('data-contentid') === contentName) {
        return this.open(tab, setState)
      }
    }
  }

  open (tab, setState = false) {
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
    let contentDisplayUrl = this.currentTab.getAttribute('data-contentdisplayurl')

    if (contentUrl !== null && contentLoaded !== '1') {
      fetch(contentUrl)
        .then(checkErrorResponse)
        .then(res => {
          return res.text()
        })
        .then(data => {
          this.currentTabContent.innerHTML = data
          this.currentTab.setAttribute('data-contentloaded', '1')
          if (this.options.history && setState) {
            history.pushState({
              tabName: this.tabName,
              contentid: this.currentTab.getAttribute('data-contentid')
            }, 'A', contentDisplayUrl)
          }
        })
        .catch(e => {
          console.log(e)
          this.currentTabContent.innerHTML = 'Lỗi'
        })

      return
    }

    if (this.options.history && setState) {
      history.pushState({
        tabName: this.tabName,
        contentid: this.currentTab.getAttribute('data-contentid')
      }, null, contentDisplayUrl)
    }
  }

  _init () {
    for (const tab of this.tabs) {
      tab.addEventListener('click', e => this.change(e))

      if (tab.classList.contains('is-active')) {
        this.defaultTab = tab
        this.open(tab, false)
      }
    }

    if (this.currentTab === null) {
      this.defaultTab = this.tabs[0]
      this.open(this.tabs[0], false)
    }

    if (this.options.history) {
      window.addEventListener('popstate', e => this._checkBack(e))
    }
  }

  _checkBack (e) {
    if (e.state === null) {
      this.open(this.defaultTab, false)
    }
  }

  _historyEvent () {
    TAB_GLOBAL.init = true
    window.addEventListener('popstate', e => {
      if (e.state !== null && e.state.tabName !== null) {
        TAB_GLOBAL.setTab(e.state)
      }
    })
  }
}

export default function (element, options) {
  return new Tab(element, options)
}

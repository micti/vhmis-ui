(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vhmis-ui"] = factory();
	else
		root["vhmis-ui"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Selector */
function Selector(selector) {
  this.query = selector;
  this.element = document.querySelectorAll(selector);
}

function find(selector) {}

function addClass(name) {
  for (var el of this.element) {
    el.classList.add(name);
  }

  return this;
}

function removeClass(name) {
  for (var el of this.element) {
    el.classList.remove(name);
  }

  return this;
}

function attr(name, value) {
  if (arguments.length < 2) {
    return this.element.length ? this.element[0].getAttribute(name) : null;
  }

  for (var el of this.element) {
    el.setAttribute(name, value);
  }
}

function data(name, value) {
  name = 'data-' + name;
  return this.attr(name, value);
}

function style(name, value) {
  if (arguments.length < 2) {
    return this.element.length ? window.getComputedStyle(this.element[0], null)[name] : null;
  }

  for (var el of this.element) {
    el.style[name] = value;
  }
}

function text(value) {
  if (arguments.length < 1) {
    return this.element.length ? this.element[0].textContent : null;
  }

  for (var el of this.element) {
    el.textContent = value;
  }
}

function html(value) {
  if (arguments.length < 1) {
    return this.element.length ? this.element[0].innerHTML : null;
  }

  for (var el of this.element) {
    el.innerHTML = value;
  }
}

function on(selector, eventName, handler, options) {
  if (typeof eventName === 'string') {
    for (var el of this.element) {
      el.addEventListener(eventName, e => {
        let target = e.target;
        if (target && target.matches(selector)) {
          handler(e);
        }
      });
    }

    return;
  }

  for (var el of this.element) {
    el.addEventListener(selector, eventName);
  }
}

function off(eventName, handler, options) {
  for (var el of this.element) {
    el.removeEventListener(eventName, handler);
  }
}

function trigger(eventName) {
  for (var el of this.element) {
    let e = document.createEvent('HTMLEvents');
    e.initEvent(eventName, false, true);
    el.dispatchEvent(e);
  }
}

function each(callback) {
  for (var el of this.element) {
    let res = callback(el);
    if (res === false) return;
  }
}

function outerSize() {
  return this.element.length ? { w: this.element[0].offsetWidth, h: this.element[0].offsetHeight } : null;
}

function innerSize() {
  return this.element.length ? { w: this.element[0].clientWidth, h: this.element[0].clientHeight } : null;
}

function offset() {
  if (!this.element.length) return null;

  let el = this.element[0];
  let rect = el.getBoundingClientRect();
  let scrollLeft = document.documentElement.scrollLeft;
  let scrollTop = document.documentElement.scrollTop;

  return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
}

function position() {
  return this.element.length ? { top: this.element[0].offsetTop, left: this.element[0].offsetLeft } : null;
}

function scroll() {
  return this.element.length ? { top: this.element[0].scrollTop, left: this.element[0].scrollLeft } : null;
}

function scrollTop(value) {
  if (arguments.length < 1) {
    return this.element[0].scrollTop;
  }

  for (var el of this.element) {
    el.scrollTop = value;
  }
}

function scrollLeft(value) {
  if (arguments.length < 1) {
    return this.element[0].scrollLeft;
  }

  for (var el of this.element) {
    el.scrollLeft = value;
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
};

/* harmony default export */ __webpack_exports__["a"] = (function (selector) {
  return new Selector(selector);
});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__global__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app__ = __webpack_require__(3);



document.addEventListener('DOMContentLoaded', function () {
  Object(__WEBPACK_IMPORTED_MODULE_0__global__["a" /* default */])();

  if (typeof vhmisApp === 'object') {
    __WEBPACK_IMPORTED_MODULE_1__app__["a" /* default */][vhmisApp.name]();
  }
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = init;
// Polyfill check
// Element.closest()
// Element.classList.toggle()

let appsOpenIcon = document.querySelector('.extra-menu--apps-open-icon');
let appsCloseIcon = document.querySelector('.page-menu--apps-close-icon');
let appsMenu = document.querySelector('.page-menu');

let openGlobalMenu = () => {
  appsMenu.classList.add('is-active');
  document.body.classList.add('is-active-overlay');
};

let closeGlobalMenu = () => {
  appsMenu.classList.remove('is-active');
  document.body.classList.remove('is-active-overlay');
};

function init() {
  appsOpenIcon.addEventListener('click', function (e) {
    openGlobalMenu();
  });
  appsCloseIcon.addEventListener('click', function (e) {
    closeGlobalMenu();
  });

  // Submenu open & close
  var submenusTrigger = document.querySelectorAll('.has-submenu > a');

  if ('ontouchstart' in document.documentElement) {
    document.addEventListener('touchstart', function (event) {
      closeSubmenus(event.target);
    });
  }

  document.addEventListener('click', function (event) {
    closeSubmenus(event.target);
  });

  submenusTrigger.forEach(function (el) {
    el.addEventListener('click', function (event) {
      event.preventDefault();
      el.closest('.has-submenu').classList.add('is-active');
    });
  });

  function closeSubmenus(target) {
    var parent = !target ? null : target.closest('.has-submenu');
    submenusTrigger.forEach(function (el) {
      el = el.closest('.has-submenu');
      if (parent !== null && parent === el) {
        return;
      }
      el.classList.remove('is-active');
    });
  }

  // Esc key to close all submenu and global menu
  document.addEventListener('keydown', e => {
    if (e.keyCode === 27) {
      closeGlobalMenu();
      closeSubmenus(null);
    }
  });
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__research__ = __webpack_require__(4);


let apps = {
  research: __WEBPACK_IMPORTED_MODULE_0__research__["a" /* default */]
};

/* harmony default export */ __webpack_exports__["a"] = (apps);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_modal__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_tab__ = __webpack_require__(6);



/* harmony default export */ __webpack_exports__["a"] = (function () {
  Object(__WEBPACK_IMPORTED_MODULE_0__lib_modal__["a" /* default */])('#modal-open', '#modal', {});
  Object(__WEBPACK_IMPORTED_MODULE_0__lib_modal__["a" /* default */])('#othermodalbutton', '#othermodal', {});
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_tab__["a" /* default */])('#tabs', {});
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_tab__["a" /* default */])('#tabs-2', {
    history: true
  });

  console.log('call app init research');
});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_selector__ = __webpack_require__(0);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



const DEFAULT_OPTIONS = {
  element: null
};

let MODAL_GLOBAL = {
  init: false,
  modalStack: [],
  openOverlay: () => {
    document.getElementById('overlay').classList.add('is-active');
    document.body.classList.add('is-active-overlay');
  },
  closeOverlay: () => {
    document.getElementById('overlay').classList.remove('is-active');
    document.body.classList.remove('is-active-overlay');
  }
};

class Modal {
  constructor(control, element, options) {
    options = _extends({}, DEFAULT_OPTIONS, options);

    this.control = Object(__WEBPACK_IMPORTED_MODULE_0__util_selector__["a" /* default */])(control);
    this.element = Object(__WEBPACK_IMPORTED_MODULE_0__util_selector__["a" /* default */])(element);
    this.options = options;

    this.closeControl = this.element.element[0].querySelectorAll('.modal--close');

    this._setEventListener();

    if (!MODAL_GLOBAL.init) {
      this._initGlobal();
    }
  }

  showEvent(e) {
    e.preventDefault();

    if (MODAL_GLOBAL.modalStack.length > 0) {
      MODAL_GLOBAL.modalStack[MODAL_GLOBAL.modalStack.length - 1].hide();
    } else {
      MODAL_GLOBAL.openOverlay();
    }

    this.show();
    MODAL_GLOBAL.modalStack.push(this);
  }

  hideEvent(e) {
    if (e.target === this.closeControl || e.target.closest('.modal--close')) {
      e.preventDefault();
      this.hide();
      this._hide();
    }
  }

  _hide() {
    MODAL_GLOBAL.modalStack.pop();

    if (MODAL_GLOBAL.modalStack.length === 0) {
      return MODAL_GLOBAL.closeOverlay();
    }

    MODAL_GLOBAL.modalStack[MODAL_GLOBAL.modalStack.length - 1].show();
  }

  hide() {
    this.element.removeClass('is-active');
  }

  show() {
    this.element.addClass('is-active');
  }

  _setEventListener() {
    for (const closeControl of this.closeControl) {
      closeControl.addEventListener('click', e => this.hideEvent(e));
    }

    if (this.options.element !== null) {
      this.control.on(this.options.element, 'click', e => this.showEvent(e));
      return;
    }

    this.control.on('click', e => this.showEvent(e));
  }

  _initGlobal() {
    document.getElementById('overlay').addEventListener('click', e => Modal.hideGlobal(e));
    document.addEventListener('keydown', e => Modal.hideGlobal(e));

    MODAL_GLOBAL.init = true;
  }

  static hideGlobal(e) {
    if (MODAL_GLOBAL.modalStack.length === 0) {
      return;
    }

    // Bỏ qua nếu là element phát sinh là input, textarea
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
      return;
    }

    if (e.target.id === 'overlay' || e.keyCode === 27) {
      console.log(e);
      let currentOpenedModal = MODAL_GLOBAL.modalStack.pop();
      currentOpenedModal.hide();

      if (MODAL_GLOBAL.modalStack.length === 0) {
        return MODAL_GLOBAL.closeOverlay();
      }

      MODAL_GLOBAL.modalStack[MODAL_GLOBAL.modalStack.length - 1].show();
    }
  }
}

/* harmony default export */ __webpack_exports__["a"] = (function (control, element, options) {
  return new Modal(control, element, options);
});

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_selector__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_fetch__ = __webpack_require__(7);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };




const DEFAULT_OPTIONS = {
  tabSelector: '.tab',
  history: false
};

let TAB_GLOBAL = {
  setTab: state => {
    let contentid = state.contentid;
    let tabname = state.tabName;
    TAB_GLOBAL.tabIns[tabname].changeByName(contentid);
  },
  tabIns: {},
  count: 1,
  init: false
};

class Tab {
  constructor(element, options) {
    options = _extends({}, DEFAULT_OPTIONS, options);

    this.element = Object(__WEBPACK_IMPORTED_MODULE_0__util_selector__["a" /* default */])(element);
    this.options = options;
    this.tabs = this.element.element[0].querySelectorAll(this.options.tabSelector);
    this.currentTab = null;
    this.currentTabContent = null;
    this.defaultTab = null;
    this.tabName = "tabs" + TAB_GLOBAL.count;

    this._init();

    TAB_GLOBAL.count++;
    TAB_GLOBAL.tabIns[this.tabName] = this;
    if (!TAB_GLOBAL.init) {
      this._historyEvent();
    }
  }

  change(e) {
    e.preventDefault();
    let tab = e.target.closest(this.options.tabSelector);

    this.open(tab, true);
  }

  changeByName(contentName, setState = false) {
    for (const tab of this.tabs) {
      if (tab.getAttribute('data-contentid') === contentName) {
        return this.open(tab, setState);
      }
    }
  }

  open(tab, setState = false) {
    if (this.currentTab !== null) {
      this.currentTab.classList.remove('is-active');
      this.currentTabContent.classList.remove('is-active');
    }

    this.currentTab = tab;
    this.currentTabContent = document.getElementById(this.currentTab.getAttribute('data-contentid'));
    this.currentTab.classList.add('is-active');
    this.currentTabContent.classList.add('is-active');

    let contentUrl = this.currentTab.getAttribute('data-contenturl');
    let contentLoaded = this.currentTab.getAttribute('data-contentloaded');
    let contentDisplayUrl = this.currentTab.getAttribute('data-contentdisplayurl');

    if (contentUrl !== null && contentLoaded !== '1') {
      fetch(contentUrl).then(__WEBPACK_IMPORTED_MODULE_1__util_fetch__["a" /* checkErrorResponse */]).then(res => {
        return res.text();
      }).then(data => {
        this.currentTabContent.innerHTML = data;
        this.currentTab.setAttribute('data-contentloaded', '1');
        if (this.options.history && setState) {
          history.pushState({
            tabName: this.tabName,
            contentid: this.currentTab.getAttribute('data-contentid')
          }, 'A', contentDisplayUrl);
        }
      }).catch(e => {
        console.log(e);
        this.currentTabContent.innerHTML = 'Lỗi';
      });

      return;
    }

    if (this.options.history && setState) {
      history.pushState({
        tabName: this.tabName,
        contentid: this.currentTab.getAttribute('data-contentid')
      }, null, contentDisplayUrl);
    }
  }

  _init() {
    for (const tab of this.tabs) {
      tab.addEventListener('click', e => this.change(e));

      if (tab.classList.contains('is-active')) {
        this.defaultTab = tab;
        this.open(tab, false);
        break;
      }

      if (tab.getAttribute('data-contentdisplayurl') === window.location.pathname) {
        this.defaultTab = tab;
        this.open(tab, false);
        break;
      }
    }

    if (this.currentTab === null) {
      this.defaultTab = this.tabs[0];
      this.open(this.tabs[0], false);
    }

    if (this.options.history) {
      window.addEventListener('popstate', e => this._checkBack(e));
    }
  }

  _checkBack(e) {
    if (e.state === null) {
      this.open(this.defaultTab, false);
    }
  }

  _historyEvent() {
    TAB_GLOBAL.init = true;
    window.addEventListener('popstate', e => {
      if (e.state !== null && e.state.tabName !== null) {
        TAB_GLOBAL.setTab(e.state);
      }
    });
  }
}

/* harmony default export */ __webpack_exports__["a"] = (function (element, options) {
  return new Tab(element, options);
});

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = checkErrorResponse;
// Một số hàm hỗ trợ thêm cho request qua fetch API

function checkErrorResponse(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    var error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

/***/ })
/******/ ]);
});
//# sourceMappingURL=main.js.map
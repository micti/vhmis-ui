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
  document.onkeydown = function (evt) {
    evt = evt || window.event;
    if (evt.keyCode === 27) {
      closeGlobalMenu();
      closeSubmenus(null);
    }
  };
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
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_tab__["a" /* default */])('#tabs', {});

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
  total: 0,
  init: false
};

class Modal {
  constructor(control, element, options) {
    options = _extends({}, DEFAULT_OPTIONS, options);

    this.control = Object(__WEBPACK_IMPORTED_MODULE_0__util_selector__["a" /* default */])(control);
    this.element = Object(__WEBPACK_IMPORTED_MODULE_0__util_selector__["a" /* default */])(element);
    this.options = options;
    this.overlay = null;
    this.closeControl = this.element.element[0].querySelector('.modal--close');

    this._setEventListener();

    if (!MODAL_GLOBAL.init) {
      this._initGlobal();
    }
  }

  show(e) {
    e.preventDefault();

    this.overlay.addClass('is-active');
    this.element.addClass('is-active');
    document.body.classList.add('is-active-overlay');
  }

  hide(e) {
    if (e.target.id === 'overlay') {
      e.preventDefault();

      this.overlay.removeClass('is-active');
      this.element.removeClass('is-active');
      document.body.classList.remove('is-active-overlay');
    }

    if (e.target === this.closeControl || e.target.closest('.modal--close')) {
      e.preventDefault();

      this.overlay.removeClass('is-active');
      this.element.removeClass('is-active');
      document.body.classList.remove('is-active-overlay');
    }
  }

  _setEventListener() {
    this.closeControl.addEventListener('click', e => this.hide(e));

    if (this.options.element !== null) {
      this.control.on(this.options.element, 'click', e => this.show(e));
      return;
    }

    this.control.on('click', e => this.show(e));
  }

  _initGlobal() {
    this.overlay = Object(__WEBPACK_IMPORTED_MODULE_0__util_selector__["a" /* default */])('#overlay');
    this.overlay.on('click', e => this.hide(e));
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
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



const DEFAULT_OPTIONS = {
  tabSelector: '.tab'
};

class Tab {
  constructor(element, options) {
    options = _extends({}, DEFAULT_OPTIONS, options);

    this.element = Object(__WEBPACK_IMPORTED_MODULE_0__util_selector__["a" /* default */])(element);
    this.options = options;
    this.tabs = this.element.element[0].querySelectorAll(this.options.tabSelector);
    this.currentTab = null;
    this.currentTabContent = null;

    this._init();
    this._setEventListener();
  }

  change(e) {
    e.preventDefault();
    let tab = e.target.closest(this.options.tabSelector);

    this.currentTab.classList.remove('is-active');
    this.currentTabContent.classList.remove('is-active');

    this.currentTab = tab;
    this.currentTabContent = document.getElementById(this.currentTab.getAttribute('data-contentid'));
    this.currentTab.classList.add('is-active');
    this.currentTabContent.classList.add('is-active');
  }

  _init() {
    for (const tab of this.tabs) {
      let contentId = tab.getAttribute('data-contentid');
      let tabContent = document.getElementById(contentId);

      if (tab.classList.contains('is-active')) {
        tabContent.classList.add('is-active');
        this.currentTab = tab;
        this.currentTabContent = tabContent;
        continue;
      }

      tabContent.classList.remove('is-active');
    }

    if (this.currentTab === null) {
      this.currentTab = this.tabs[0];
      this.currentTabContent = document.getElementById(this.currentTab.getAttribute('data-contentid'));
      this.currentTabContent.classList.add('is-active');
      this.currentTab.classList.add('is-active');
    }
  }

  _setEventListener() {
    for (const tab of this.tabs) {
      tab.addEventListener('click', e => this.change(e));
    }
  }
}

/* harmony default export */ __webpack_exports__["a"] = (function (element, options) {
  return new Tab(element, options);
});

/***/ })
/******/ ]);
});
//# sourceMappingURL=main.js.map
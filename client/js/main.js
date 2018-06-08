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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__global__ = __webpack_require__(1);


document.addEventListener('DOMContentLoaded', function () {
  Object(__WEBPACK_IMPORTED_MODULE_0__global__["a" /* default */])()
})


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = init;
// Polyfill check
// Element.closest()
// Element.classList.toggle()

let appsOpenIcon = document.querySelector('.extra-menu--apps-open-icon')
let appsCloseIcon = document.querySelector('.page-menu--apps-close-icon')
let appsMenu = document.querySelector('.page-menu')

let openGlobalMenu = () => {
  appsMenu.classList.add('is-active')
}

let closeGlobalMenu = () => {
  appsMenu.classList.remove('is-active')
}

function init () {
  appsOpenIcon.addEventListener('click', function (e) {
    openGlobalMenu()
  })
  appsCloseIcon.addEventListener('click', function (e) {
    closeGlobalMenu()
  })

  // Submenu open & close
  var submenusTrigger = document.querySelectorAll('.has-submenu > a')

  document.addEventListener('click', function (event) {
    closeSubmenus(event.target)
  })

  submenusTrigger.forEach(function (el) {
    el.addEventListener('click', function (event) {
      event.preventDefault()
      el.closest('.has-submenu').classList.add('is-active')
    })
  })

  function closeSubmenus (target) {
    var parent = !target ? null : target.closest('.has-submenu')
    submenusTrigger.forEach(function (el) {
      el = el.closest('.has-submenu')
      if (parent !== null && parent === el) {
        return
      }
      el.classList.remove('is-active')
    })
  }

  // Esc key to close all submenu and global menu
  document.onkeydown = function (evt) {
    evt = evt || window.event
    if (evt.keyCode === 27) {
      closeGlobalMenu()
      closeSubmenus(null)
    }
  }
}


/***/ })
/******/ ]);
});
//# sourceMappingURL=main.js.map
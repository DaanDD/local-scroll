/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var LocalScroll = function () {
	  function LocalScroll() {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    _classCallCheck(this, LocalScroll);

	    this.options = Object.assign({
	      selector: "[data-scroll]",
	      offset: 0,
	      duration: 400
	    }, options);
	    this.addClickHandlers();
	  }

	  _createClass(LocalScroll, [{
	    key: 'addClickHandlers',
	    value: function addClickHandlers() {
	      var _this = this;

	      $(this.options.selector).on('click', function (e) {
	        e.preventDefault();
	        var href = $(e.target).attr('href');

	        if (href === '#') {
	          return _this.scrollTo(0);
	        } else {
	          var scrollToElem = $(href);
	          return scrollToElem.length && _this.scrollTo(scrollToElem.offset().top);
	        }
	      });
	    }
	  }, {
	    key: 'scrollTo',
	    value: function scrollTo(scrollY) {
	      $('html, body').animate({
	        scrollTop: scrollY + this.options.offset
	      }, this.options.duration);
	    }
	  }]);

	  return LocalScroll;
	}();

	exports.default = LocalScroll;

/***/ }
/******/ ]);
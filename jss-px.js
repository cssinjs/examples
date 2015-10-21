(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["jssPx"] = factory();
	else
		root["jssPx"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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

	// Don't automatically add 'px' to these possibly-unitless properties.
	// Borrowed from jquery.
	'use strict';

	exports.__esModule = true;
	exports['default'] = jssPx;
	var cssNumber = {
	  'animation-iteration-count': true,
	  'box-ordinal-group': true,
	  'column-count': true,
	  'fill-opacity': true,
	  'flex': true,
	  'flex-grow': true,
	  'flex-order': true,
	  'flex-shrink': true,
	  'font-weight': true,
	  'line-height': true,
	  'opacity': true,
	  'order': true,
	  'orphans': true,
	  'stop-opacity': true,
	  'tab-size': 1,
	  'widows': true,
	  'z-index': true,
	  'zoom': true
	};

	/**
	 * Add px to numeric values.
	 *
	 * @param {Rule} rule
	 * @api public
	 */

	function jssPx() {
	  return function (rule) {
	    var style = rule.style;

	    if (!style) return;
	    for (var prop in style) {
	      if (!cssNumber[prop] && typeof style[prop] == 'number') {
	        style[prop] += 'px';
	      }
	    }
	  };
	}

	module.exports = exports['default'];

/***/ }
/******/ ])
});
;
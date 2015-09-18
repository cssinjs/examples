(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["jssVendorPrefixer"] = factory();
	else
		root["jssVendorPrefixer"] = factory();
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
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = jssVendorPrefixer;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _cssVendor = __webpack_require__(1);

	var _cssVendor2 = _interopRequireDefault(_cssVendor);

	var KEYFRAMES = '@keyframes';
	var KEYFRAMES_LENGHT = KEYFRAMES.length;

	/**
	 * Add vendor prefix to a property name when needed.
	 *
	 * @param {Rule} rule
	 * @api public
	 */

	function jssVendorPrefixer(rule) {
	  var style = rule.style;

	  if (rule.isAtRule && rule.selector.substr(0, KEYFRAMES_LENGHT) === KEYFRAMES) {
	    rule.selector = '@' + _cssVendor2['default'].prefix.css + 'keyframes' + rule.selector.substr(KEYFRAMES_LENGHT);
	    return;
	  }

	  for (var prop in style) {
	    var value = style[prop];

	    var changeProp = false;
	    var supportedProp = _cssVendor2['default'].supportedProperty(prop);
	    if (supportedProp && supportedProp !== prop) changeProp = true;

	    var changeValue = false;
	    var supportedValue = _cssVendor2['default'].supportedValue(supportedProp, value);
	    if (supportedValue && supportedValue !== value) changeValue = true;

	    if (changeProp || changeValue) {
	      if (changeProp) delete style[prop];
	      style[supportedProp] = supportedValue;
	    }
	  }
	}

	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	/**
	 * Vendor prefix string for the current browser.
	 *
	 * @type {{js: String, css: String}}
	 * @api public
	 */
	exports.prefix = __webpack_require__(2)

	/**
	 * Test if a property is supported, returns property with vendor
	 * prefix if required, otherwise `false`.
	 *
	 * @param {String} prop
	 * @return {String|Boolean}
	 * @api public
	 */
	exports.supportedProperty = __webpack_require__(3)

	/**
	 * Returns prefixed value if needed. Returns `false` if value is not supported.
	 *
	 * @param {String} property
	 * @param {String} value
	 * @return {String|Boolean}
	 * @api public
	 */
	 exports.supportedValue = __webpack_require__(5)


/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict'

	/**
	 * Export javascript style and css style vendor prefixes.
	 * Based on "transform" support test.
	 */

	var jsCssMap = {
	    Webkit: '-webkit-',
	    Moz: '-moz-',
	    // IE did it wrong again ...
	    ms: '-ms-',
	    O: '-o-'
	}

	var style = document.createElement('p').style
	var testProp = 'Transform'

	for (var js in jsCssMap) {
	    if ((js + testProp) in style) {
	        exports.js = js
	        exports.css = jsCssMap[js]
	        break
	    }
	}


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	var prefix = __webpack_require__(2)
	var camelize = __webpack_require__(4)

	var el = document.createElement('p')

	/**
	 * We test every property on vendor prefix requirement.
	 * Once tested, result is cached. It gives us up to 70% perf boost.
	 * http://jsperf.com/element-style-object-access-vs-plain-object
	 *
	 * Prefill cache with known css properties to reduce amount of
	 * properties we need to feature test at runtime.
	 * http://davidwalsh.name/vendor-prefix
	 */
	var cache = (function() {
	    var computed = window.getComputedStyle(document.documentElement, '')
	    var cache = {}

	    for (var key in computed) {
	        cache[computed[key]] = computed[key]
	    }

	    return cache
	}())

	/**
	 * Test if a property is supported, returns supported property with vendor
	 * prefix if required. Returns `false` if not supported.
	 *
	 * @param {String} prop dash separated
	 * @return {String|Boolean}
	 * @api public
	 */
	module.exports = function (prop) {
	    // We have not tested this prop yet, lets do the test.
	    if (cache[prop] != null) return cache[prop]

	    // Camelization is required because we can't test using
	    // css syntax for e.g. in FF.
	    // Test if property is supported as it is.
	    if (camelize(prop) in el.style) {
	        cache[prop] = prop
	    // Test if property is supported with vendor prefix.
	    } else if ((prefix.js + camelize('-' + prop)) in el.style) {
	        cache[prop] = prefix.css + prop
	    } else {
	        cache[prop] = false
	    }

	    return cache[prop]
	}


/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict'

	var regExp = /[-\s]+(.)?/g

	/**
	 * Convert dash separated strings to camel cased.
	 *
	 * @param {String} str
	 * @return {String}
	 */
	module.exports = function(str) {
	    return str.replace(regExp, toUpper)
	}

	function toUpper(match, c) {
	    return c ? c.toUpperCase() : ''
	}



/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	var prefix = __webpack_require__(2)

	var cache = {}

	var el = document.createElement('p')

	/**
	 * Returns prefixed value if needed. Returns `false` if value is not supported.
	 *
	 * @param {String} property
	 * @param {String} value
	 * @return {String|Boolean}
	 * @api public
	 */
	module.exports = function (property, value) {
	    if (typeof value != 'string' || !isNaN(parseInt(value, 10))) return value

	    var cacheKey = property + value

	    if (cache[cacheKey] != null) return cache[cacheKey]

	    // Test value as it is.
	    el.style[property] = value

	    // Value is supported as it is.
	    if (el.style[property] == value) {
	        cache[cacheKey] = value
	    } else {
	        // Test value with vendor prefix.
	        value = prefix.css + value
	        el.style[property] = value

	        // Value is supported with vendor prefix.
	        if (el.style[property] == value) cache[cacheKey] = value
	    }

	    if (!cache[cacheKey]) cache[cacheKey] = false

	    return cache[cacheKey]
	}


/***/ }
/******/ ])
});
;
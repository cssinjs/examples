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

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	var _cssVendor = __webpack_require__(1);

	var vendor = _interopRequireWildcard(_cssVendor);

	/**
	 * Add vendor prefix to a property name when needed.
	 *
	 * @param {Rule} rule
	 * @api public
	 */

	function jssVendorPrefixer() {
	  return function (rule) {
	    if (rule.type === 'keyframe') {
	      rule.selector = '@' + vendor.prefix.css + 'keyframes' + rule.selector.substr(10);
	      return;
	    }

	    if (rule.type !== 'regular') return;

	    for (var prop in rule.style) {
	      var value = rule.style[prop];

	      var changeProp = false;
	      var supportedProp = vendor.supportedProperty(prop);
	      if (supportedProp && supportedProp !== prop) changeProp = true;

	      var changeValue = false;
	      var supportedValue = vendor.supportedValue(supportedProp, value);
	      if (supportedValue && supportedValue !== value) changeValue = true;

	      if (changeProp || changeValue) {
	        if (changeProp) delete rule.style[prop];
	        rule.style[supportedProp || prop] = supportedValue || value;
	      }
	    }
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * CSS Vendor prefix detection and property feature testing.
	 *
	 * @copyright Oleg Slobodskoi 2015
	 * @website https://github.com/jsstyles/css-vendor
	 * @license MIT
	 */

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _prefix2 = __webpack_require__(2);

	var _prefix3 = _interopRequireDefault(_prefix2);

	exports.prefix = _prefix3['default'];

	var _supportedProperty2 = __webpack_require__(3);

	var _supportedProperty3 = _interopRequireDefault(_supportedProperty2);

	exports.supportedProperty = _supportedProperty3['default'];

	var _supportedValue2 = __webpack_require__(5);

	var _supportedValue3 = _interopRequireDefault(_supportedValue2);

	exports.supportedValue = _supportedValue3['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	/**
	 * Export javascript style and css style vendor prefixes.
	 * Based on "transform" support test.
	 */

	'use strict';

	exports.__esModule = true;
	var js = '';
	var css = '';

	// We should not do anything if required serverside.
	if (typeof document != 'undefined') {
	  var jsCssMap = {
	    Webkit: '-webkit-',
	    Moz: '-moz-',
	    // IE did it wrong again ...
	    ms: '-ms-',
	    O: '-o-'
	  };
	  var style = document.createElement('p').style;
	  var testProp = 'Transform';

	  for (var key in jsCssMap) {
	    if (key + testProp in style) {
	      js = key;
	      css = jsCssMap[key];
	      break;
	    }
	  }
	}

	/**
	 * Vendor prefix string for the current browser.
	 *
	 * @type {{js: String, css: String}}
	 * @api public
	 */
	exports['default'] = { js: js, css: css };
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = supportedProperty;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _prefix = __webpack_require__(2);

	var _prefix2 = _interopRequireDefault(_prefix);

	var _camelize = __webpack_require__(4);

	var _camelize2 = _interopRequireDefault(_camelize);

	var el = undefined;
	var cache = {};

	if (typeof document != 'undefined') {
	  el = document.createElement('p');

	  /**
	   * We test every property on vendor prefix requirement.
	   * Once tested, result is cached. It gives us up to 70% perf boost.
	   * http://jsperf.com/element-style-object-access-vs-plain-object
	   *
	   * Prefill cache with known css properties to reduce amount of
	   * properties we need to feature test at runtime.
	   * http://davidwalsh.name/vendor-prefix
	   */
	  var computed = window.getComputedStyle(document.documentElement, '');
	  for (var key in computed) {
	    cache[computed[key]] = computed[key];
	  }
	}

	/**
	 * Test if a property is supported, returns supported property with vendor
	 * prefix if required. Returns `false` if not supported.
	 *
	 * @param {String} prop dash separated
	 * @return {String|Boolean}
	 * @api public
	 */

	function supportedProperty(prop) {
	  // We have not tested this prop yet, lets do the test.
	  if (cache[prop] != null) return cache[prop];

	  // Camelization is required because we can't test using
	  // css syntax for e.g. in FF.
	  // Test if property is supported as it is.
	  if (_camelize2['default'](prop) in el.style) {
	    cache[prop] = prop;
	    // Test if property is supported with vendor prefix.
	  } else if (_prefix2['default'].js + _camelize2['default']('-' + prop) in el.style) {
	      cache[prop] = _prefix2['default'].css + prop;
	    } else {
	      cache[prop] = false;
	    }

	  return cache[prop];
	}

	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = camelize;
	var regExp = /[-\s]+(.)?/g;

	/**
	 * Convert dash separated strings to camel cased.
	 *
	 * @param {String} str
	 * @return {String}
	 */

	function camelize(str) {
	  return str.replace(regExp, toUpper);
	}

	function toUpper(match, c) {
	  return c ? c.toUpperCase() : '';
	}
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = supportedValue;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _prefix = __webpack_require__(2);

	var _prefix2 = _interopRequireDefault(_prefix);

	var cache = {};
	var el = undefined;

	if (typeof document != 'undefined') el = document.createElement('p');

	/**
	 * Returns prefixed value if needed. Returns `false` if value is not supported.
	 *
	 * @param {String} property
	 * @param {String} value
	 * @return {String|Boolean}
	 * @api public
	 */

	function supportedValue(property, value) {
	  if (typeof value != 'string' || !isNaN(parseInt(value, 10))) return value;

	  var cacheKey = property + value;

	  if (cache[cacheKey] != null) return cache[cacheKey];

	  // Test value as it is.
	  el.style[property] = value;

	  // Value is supported as it is.
	  if (el.style[property] === value) {
	    cache[cacheKey] = value;
	  } else {
	    // Test value with vendor prefix.
	    value = _prefix2['default'].css + value;

	    // Hardcode test to convert "flex" to "-ms-flexbox" for IE10.
	    if (value === '-ms-flex') value = '-ms-flexbox';

	    el.style[property] = value;

	    // Value is supported with vendor prefix.
	    if (el.style[property] === value) cache[cacheKey] = value;
	  }

	  if (!cache[cacheKey]) cache[cacheKey] = false;

	  return cache[cacheKey];
	}

	module.exports = exports['default'];

/***/ }
/******/ ])
});
;
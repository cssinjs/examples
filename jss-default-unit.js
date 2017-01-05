(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["jssDefaultUnit"] = factory();
	else
		root["jssDefaultUnit"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports['default'] = defaultUnit;
	
	var _defaultUnits = __webpack_require__(1);
	
	var _defaultUnits2 = _interopRequireDefault(_defaultUnits);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 * Clones the object and adds a camel cased property version.
	 */
	function addCamelCasedVersion(obj) {
	  var regExp = /(-[a-z])/g;
	  var replace = function replace(str) {
	    return str[1].toUpperCase();
	  };
	  var newObj = {};
	  for (var key in obj) {
	    newObj[key] = obj[key];
	    newObj[key.replace(regExp, replace)] = obj[key];
	  }
	  return newObj;
	}
	
	var units = addCamelCasedVersion(_defaultUnits2['default']);
	
	/**
	 * Recursive deep style passing function
	 *
	 * @param {String} current property
	 * @param {(Object|Array|Number|String)} property value
	 * @param {Object} options
	 * @return {(Object|Array|Number|String)} resulting value
	 */
	function iterate(prop, value, options) {
	  if (!value) return value;
	
	  var convertedValue = value;
	  switch (value.constructor) {
	    case Object:
	      if (prop === 'fallbacks') {
	        for (var innerProp in value) {
	          value[innerProp] = iterate(innerProp, value[innerProp], options);
	        }
	        break;
	      }
	      for (var _innerProp in value) {
	        value[_innerProp] = iterate(prop + '-' + _innerProp, value[_innerProp], options);
	      }
	      break;
	    case Array:
	      for (var i = 0; i < value.length; i++) {
	        value[i] = iterate(prop, value[i], options);
	      }
	      break;
	    case Number:
	      convertedValue = addUnit(prop, value, options);
	      break;
	    default:
	      break;
	  }
	
	  return convertedValue;
	}
	
	/**
	 * Check if default unit must be added
	 *
	 * @param {String} current property
	 * @param {(Object|Array|Number|String)} property value
	 * @param {Object} options
	 * @return {String} string with units
	 */
	function addUnit(prop, value, options) {
	  if (typeof value === 'number' && value !== 0) {
	    value += options[prop] || units[prop] || '';
	  }
	  return value;
	}
	
	/**
	 * Add unit to numeric values.
	 *
	 * @param {Rule} rule
	 * @api public
	 */
	function defaultUnit() {
	  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	  return function (rule) {
	    var style = rule.style,
	        type = rule.type;
	
	    if (!style || type !== 'regular') return;
	    for (var prop in style) {
	      style[prop] = iterate(prop, style[prop], addCamelCasedVersion(options));
	    }
	  };
	}

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Generated jss-default-unit CSS property units
	 * @object
	 */
	exports['default'] = {
	  'animation-delay': 'ms',
	  'animation-duration': 'ms',
	  'background-position': 'px',
	  'background-position-x': 'px',
	  'background-position-y': 'px',
	  'background-size': 'px',
	  border: 'px',
	  'border-bottom': 'px',
	  'border-bottom-left-radius': 'px',
	  'border-bottom-right-radius': 'px',
	  'border-bottom-width': 'px',
	  'border-left': 'px',
	  'border-left-width': 'px',
	  'border-radius': 'px',
	  'border-right': 'px',
	  'border-right-width': 'px',
	  'border-spacing': 'px',
	  'border-top': 'px',
	  'border-top-left-radius': 'px',
	  'border-top-right-radius': 'px',
	  'border-top-width': 'px',
	  'border-width': 'px',
	  'border-after-width': 'px',
	  'border-before-width': 'px',
	  'border-end-width': 'px',
	  'border-horizontal-spacing': 'px',
	  'border-start-width': 'px',
	  'border-vertical-spacing': 'px',
	  bottom: 'px',
	  'box-shadow': 'px',
	  'box-shadow-x': 'px', // Not existing property. Used to avoid issues with jss-expand intergration
	  'box-shadow-y': 'px', // Not existing property. Used to avoid issues with jss-expand intergration
	  'box-shadow-blur': 'px', // Not existing property. Used to avoid issues with jss-expand intergration
	  'box-shadow-spread': 'px', // Not existing property. Used to avoid issues with jss-expand intergration
	  'column-gap': 'px',
	  'column-rule': 'px',
	  'column-rule-width': 'px',
	  'column-width': 'px',
	  'flex-basis': 'px',
	  'font-line-height': 'px', // Not existing property. Used to avoid issues with jss-expand intergration
	  'font-size': 'px',
	  'font-size-delta': 'px',
	  height: 'px',
	  left: 'px',
	  'letter-spacing': 'px',
	  'logical-height': 'px',
	  'logical-width': 'px',
	  margin: 'px',
	  'margin-after': 'px',
	  'margin-before': 'px',
	  'margin-bottom': 'px',
	  'margin-left': 'px',
	  'margin-right': 'px',
	  'margin-top': 'px',
	  'max-height': 'px',
	  'max-width': 'px',
	  'margin-end': 'px',
	  'margin-start': 'px',
	  'mask-position-x': 'px',
	  'mask-position-y': 'px',
	  'mask-size': 'px',
	  'max-logical-height': 'px',
	  'max-logical-width': 'px',
	  'min-height': 'px',
	  'min-width': 'px',
	  'min-logical-height': 'px',
	  'min-logical-width': 'px',
	  motion: 'px',
	  'motion-offset': 'px',
	  outline: 'px',
	  'outline-offset': 'px',
	  'outline-width': 'px',
	  padding: 'px',
	  'padding-bottom': 'px',
	  'padding-left': 'px',
	  'padding-right': 'px',
	  'padding-top': 'px',
	  'padding-after': 'px',
	  'padding-before': 'px',
	  'padding-end': 'px',
	  'padding-start': 'px',
	  'perspective-origin-x': '%',
	  'perspective-origin-y': '%',
	  perspective: 'px',
	  right: 'px',
	  'shape-margin': 'px',
	  size: 'px',
	  'text-indent': 'px',
	  'text-shadow-x': 'px', // Not existing property. Used to avoid issues with jss-expand intergration
	  'text-shadow-y': 'px', // Not existing property. Used to avoid issues with jss-expand intergration
	  'text-shadow-blur': 'px', // Not existing property. Used to avoid issues with jss-expand intergration
	  'text-stroke': 'px',
	  'text-stroke-width': 'px',
	  top: 'px',
	  'transform-origin': '%',
	  'transform-origin-x': '%',
	  'transform-origin-y': '%',
	  'transform-origin-z': '%',
	  'transition-delay': 'ms',
	  'transition-duration': 'ms',
	  'vertical-align': 'px',
	  width: 'px',
	  'word-spacing': 'px'
	};

/***/ }
/******/ ])
});
;
//# sourceMappingURL=jss-default-unit.js.map
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["calendar"] = factory();
	else
		root["calendar"] = factory();
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

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createCalendar = createCalendar;

	var _conf = __webpack_require__(1);

	var _conf2 = _interopRequireDefault(_conf);

	var _calendar = __webpack_require__(2);

	var _calendar2 = _interopRequireDefault(_calendar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function createCalendar() {
	  return new _calendar2.default(_conf2.default).create();
	}

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Configuration shared between all components.
	 *
	 * @type {Object}
	 */
	exports.default = {
	  fontSize: 16,
	  height: 720,
	  timeline: {
	    start: 540,
	    end: 1290
	  }
	};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _debounce = __webpack_require__(3);

	var _debounce2 = _interopRequireDefault(_debounce);

	var _jss = __webpack_require__(10);

	var _jss2 = _interopRequireDefault(_jss);

	var _utils = __webpack_require__(48);

	var utils = _interopRequireWildcard(_utils);

	var _canvas = __webpack_require__(49);

	var _canvas2 = _interopRequireDefault(_canvas);

	var _timeline = __webpack_require__(51);

	var _timeline2 = _interopRequireDefault(_timeline);

	var _eventsManager = __webpack_require__(54);

	var _eventsManager2 = _interopRequireDefault(_eventsManager);

	var _style = __webpack_require__(59);

	var _style2 = _interopRequireDefault(_style);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var sheet = _jss2.default.createStyleSheet(_style2.default);

	var Calendar = function () {
	  /**
	   * Creates a new calendar view.
	   */
	  function Calendar(options) {
	    _classCallCheck(this, Calendar);

	    this.timeline = new _timeline2.default(options.timeline);
	    this.canvas = new _canvas2.default();
	    this.manager = new _eventsManager2.default(this.canvas);
	    this.element = null;
	  }

	  /**
	   * Renders layout.
	   *
	   * @return {Calendar}
	   */


	  _createClass(Calendar, [{
	    key: 'create',
	    value: function create() {
	      sheet.attach();
	      this.element = utils.createElement('div', {
	        class: sheet.classes.calendar
	      });
	      this.timeline.create();
	      this.canvas.create();
	      this.element.appendChild(this.timeline.element);
	      this.element.appendChild(this.canvas.element);
	      window.addEventListener('resize', (0, _debounce2.default)(this.onResizeWindow.bind(this), 50));
	      return this;
	    }

	    /**
	     * Render main container.
	     *
	     * @param {Array} events
	     * @return {Calendar}
	     */

	  }, {
	    key: 'renderDay',
	    value: function renderDay(events) {
	      this.manager.destroy().set(events).render();
	      return this;
	    }
	  }, {
	    key: 'onResizeWindow',
	    value: function onResizeWindow() {
	      this.manager.destroy().render();
	    }
	  }]);

	  return Calendar;
	}();

	exports.default = Calendar;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(4),
	    now = __webpack_require__(5);

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * Creates a debounced function that delays invoking `func` until after `wait`
	 * milliseconds have elapsed since the last time the debounced function was
	 * invoked. The debounced function comes with a `cancel` method to cancel
	 * delayed invocations. Provide an options object to indicate that `func`
	 * should be invoked on the leading and/or trailing edge of the `wait` timeout.
	 * Subsequent calls to the debounced function return the result of the last
	 * `func` invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is invoked
	 * on the trailing edge of the timeout only if the the debounced function is
	 * invoked more than once during the `wait` timeout.
	 *
	 * See [David Corbacho's article](http://drupalmotion.com/article/debounce-and-throttle-visual-explanation)
	 * for details over the differences between `_.debounce` and `_.throttle`.
	 *
	 * @static
	 * @memberOf _
	 * @category Function
	 * @param {Function} func The function to debounce.
	 * @param {number} [wait=0] The number of milliseconds to delay.
	 * @param {Object} [options] The options object.
	 * @param {boolean} [options.leading=false] Specify invoking on the leading
	 *  edge of the timeout.
	 * @param {number} [options.maxWait] The maximum time `func` is allowed to be
	 *  delayed before it's invoked.
	 * @param {boolean} [options.trailing=true] Specify invoking on the trailing
	 *  edge of the timeout.
	 * @returns {Function} Returns the new debounced function.
	 * @example
	 *
	 * // avoid costly calculations while the window size is in flux
	 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
	 *
	 * // invoke `sendMail` when the click event is fired, debouncing subsequent calls
	 * jQuery('#postbox').on('click', _.debounce(sendMail, 300, {
	 *   'leading': true,
	 *   'trailing': false
	 * }));
	 *
	 * // ensure `batchLog` is invoked once after 1 second of debounced calls
	 * var source = new EventSource('/stream');
	 * jQuery(source).on('message', _.debounce(batchLog, 250, {
	 *   'maxWait': 1000
	 * }));
	 *
	 * // cancel a debounced call
	 * var todoChanges = _.debounce(batchLog, 1000);
	 * Object.observe(models.todo, todoChanges);
	 *
	 * Object.observe(models, function(changes) {
	 *   if (_.find(changes, { 'user': 'todo', 'type': 'delete'})) {
	 *     todoChanges.cancel();
	 *   }
	 * }, ['delete']);
	 *
	 * // ...at some point `models.todo` is changed
	 * models.todo.completed = true;
	 *
	 * // ...before 1 second has passed `models.todo` is deleted
	 * // which cancels the debounced `todoChanges` call
	 * delete models.todo;
	 */
	function debounce(func, wait, options) {
	  var args,
	      maxTimeoutId,
	      result,
	      stamp,
	      thisArg,
	      timeoutId,
	      trailingCall,
	      lastCalled = 0,
	      maxWait = false,
	      trailing = true;

	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  wait = wait < 0 ? 0 : (+wait || 0);
	  if (options === true) {
	    var leading = true;
	    trailing = false;
	  } else if (isObject(options)) {
	    leading = !!options.leading;
	    maxWait = 'maxWait' in options && nativeMax(+options.maxWait || 0, wait);
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }

	  function cancel() {
	    if (timeoutId) {
	      clearTimeout(timeoutId);
	    }
	    if (maxTimeoutId) {
	      clearTimeout(maxTimeoutId);
	    }
	    lastCalled = 0;
	    maxTimeoutId = timeoutId = trailingCall = undefined;
	  }

	  function complete(isCalled, id) {
	    if (id) {
	      clearTimeout(id);
	    }
	    maxTimeoutId = timeoutId = trailingCall = undefined;
	    if (isCalled) {
	      lastCalled = now();
	      result = func.apply(thisArg, args);
	      if (!timeoutId && !maxTimeoutId) {
	        args = thisArg = undefined;
	      }
	    }
	  }

	  function delayed() {
	    var remaining = wait - (now() - stamp);
	    if (remaining <= 0 || remaining > wait) {
	      complete(trailingCall, maxTimeoutId);
	    } else {
	      timeoutId = setTimeout(delayed, remaining);
	    }
	  }

	  function maxDelayed() {
	    complete(trailing, timeoutId);
	  }

	  function debounced() {
	    args = arguments;
	    stamp = now();
	    thisArg = this;
	    trailingCall = trailing && (timeoutId || !leading);

	    if (maxWait === false) {
	      var leadingCall = leading && !timeoutId;
	    } else {
	      if (!maxTimeoutId && !leading) {
	        lastCalled = stamp;
	      }
	      var remaining = maxWait - (stamp - lastCalled),
	          isCalled = remaining <= 0 || remaining > maxWait;

	      if (isCalled) {
	        if (maxTimeoutId) {
	          maxTimeoutId = clearTimeout(maxTimeoutId);
	        }
	        lastCalled = stamp;
	        result = func.apply(thisArg, args);
	      }
	      else if (!maxTimeoutId) {
	        maxTimeoutId = setTimeout(maxDelayed, remaining);
	      }
	    }
	    if (isCalled && timeoutId) {
	      timeoutId = clearTimeout(timeoutId);
	    }
	    else if (!timeoutId && wait !== maxWait) {
	      timeoutId = setTimeout(delayed, wait);
	    }
	    if (leadingCall) {
	      isCalled = true;
	      result = func.apply(thisArg, args);
	    }
	    if (isCalled && !timeoutId && !maxTimeoutId) {
	      args = thisArg = undefined;
	    }
	    return result;
	  }
	  debounced.cancel = cancel;
	  return debounced;
	}

	module.exports = debounce;


/***/ },
/* 4 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	module.exports = isObject;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(6);

	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeNow = getNative(Date, 'now');

	/**
	 * Gets the number of milliseconds that have elapsed since the Unix epoch
	 * (1 January 1970 00:00:00 UTC).
	 *
	 * @static
	 * @memberOf _
	 * @category Date
	 * @example
	 *
	 * _.defer(function(stamp) {
	 *   console.log(_.now() - stamp);
	 * }, _.now());
	 * // => logs the number of milliseconds it took for the deferred function to be invoked
	 */
	var now = nativeNow || function() {
	  return new Date().getTime();
	};

	module.exports = now;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var isNative = __webpack_require__(7);

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object == null ? undefined : object[key];
	  return isNative(value) ? value : undefined;
	}

	module.exports = getNative;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(8),
	    isObjectLike = __webpack_require__(9);

	/** Used to detect host constructors (Safari > 5). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var fnToString = Function.prototype.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (value == null) {
	    return false;
	  }
	  if (isFunction(value)) {
	    return reIsNative.test(fnToString.call(value));
	  }
	  return isObjectLike(value) && reIsHostCtor.test(value);
	}

	module.exports = isNative;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(4);

	/** `Object#toString` result references. */
	var funcTag = '[object Function]';

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in older versions of Chrome and Safari which return 'function' for regexes
	  // and Safari 8 which returns 'object' for typed array constructors.
	  return isObject(value) && objToString.call(value) == funcTag;
	}

	module.exports = isFunction;


/***/ },
/* 9 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jss = __webpack_require__(11);

	var _jssExtend = __webpack_require__(37);

	var _jssExtend2 = _interopRequireDefault(_jssExtend);

	var _jssNested = __webpack_require__(38);

	var _jssNested2 = _interopRequireDefault(_jssNested);

	var _jssCamelCase = __webpack_require__(39);

	var _jssCamelCase2 = _interopRequireDefault(_jssCamelCase);

	var _jssDefaultUnit = __webpack_require__(40);

	var _jssDefaultUnit2 = _interopRequireDefault(_jssDefaultUnit);

	var _jssVendorPrefixer = __webpack_require__(42);

	var _jssVendorPrefixer2 = _interopRequireDefault(_jssVendorPrefixer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Setup jss plugins.
	var jss = (0, _jss.create)();

	jss.use((0, _jssExtend2.default)());
	jss.use((0, _jssNested2.default)());
	jss.use((0, _jssCamelCase2.default)());
	jss.use((0, _jssDefaultUnit2.default)());
	jss.use((0, _jssVendorPrefixer2.default)());

	exports.default = jss;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.create = exports.sheets = exports.RulesContainer = exports.SheetsRegistry = exports.getDynamicStyles = undefined;

	var _Jss = __webpack_require__(12);

	var _Jss2 = _interopRequireDefault(_Jss);

	var _SheetsRegistry = __webpack_require__(20);

	var _SheetsRegistry2 = _interopRequireDefault(_SheetsRegistry);

	var _RulesContainer = __webpack_require__(22);

	var _RulesContainer2 = _interopRequireDefault(_RulesContainer);

	var _sheets = __webpack_require__(19);

	var _sheets2 = _interopRequireDefault(_sheets);

	var _getDynamicStyles = __webpack_require__(36);

	var _getDynamicStyles2 = _interopRequireDefault(_getDynamicStyles);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * Extracts a styles object with only rules that contain function values.
	 */
	exports.getDynamicStyles = _getDynamicStyles2['default'];

	/**
	 * SheetsRegistry for SSR.
	 */

	/**
	 * A better abstraction over CSS.
	 *
	 * @copyright Oleg Slobodskoi 2014-present
	 * @website https://github.com/cssinjs/jss
	 * @license MIT
	 */

	exports.SheetsRegistry = _SheetsRegistry2['default'];

	/**
	 * RulesContainer for plugins.
	 */

	exports.RulesContainer = _RulesContainer2['default'];

	/**
	 * Default global SheetsRegistry instance.
	 */

	exports.sheets = _sheets2['default'];

	/**
	 * Creates a new instance of Jss.
	 */

	var create = exports.create = function create(options) {
	  return new _Jss2['default'](options);
	};

	/**
	 * A global Jss instance.
	 */
	exports['default'] = create();

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _StyleSheet = __webpack_require__(13);

	var _StyleSheet2 = _interopRequireDefault(_StyleSheet);

	var _PluginsRegistry = __webpack_require__(28);

	var _PluginsRegistry2 = _interopRequireDefault(_PluginsRegistry);

	var _plugins = __webpack_require__(29);

	var _plugins2 = _interopRequireDefault(_plugins);

	var _sheets = __webpack_require__(19);

	var _sheets2 = _interopRequireDefault(_sheets);

	var _generateClassName = __webpack_require__(35);

	var _generateClassName2 = _interopRequireDefault(_generateClassName);

	var _createRule2 = __webpack_require__(23);

	var _createRule3 = _interopRequireDefault(_createRule2);

	var _findRenderer = __webpack_require__(14);

	var _findRenderer2 = _interopRequireDefault(_findRenderer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Jss = function () {
	  function Jss(options) {
	    _classCallCheck(this, Jss);

	    this.version = "6.5.0";
	    this.plugins = new _PluginsRegistry2['default']();

	    // eslint-disable-next-line prefer-spread
	    this.use.apply(this, _plugins2['default']);
	    this.setup(options);
	  }

	  _createClass(Jss, [{
	    key: 'setup',
	    value: function setup() {
	      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	      this.options = _extends({
	        generateClassName: options.generateClassName || _generateClassName2['default'],
	        insertionPoint: options.insertionPoint || 'jss'
	      }, options);
	      // eslint-disable-next-line prefer-spread
	      if (options.plugins) this.use.apply(this, options.plugins);
	      return this;
	    }

	    /**
	     * Create a Style Sheet.
	     */

	  }, {
	    key: 'createStyleSheet',
	    value: function createStyleSheet(styles, options) {
	      var sheet = new _StyleSheet2['default'](styles, _extends({
	        jss: this,
	        generateClassName: this.options.generateClassName,
	        insertionPoint: this.options.insertionPoint
	      }, options));
	      this.plugins.onProcessSheet(sheet);
	      return sheet;
	    }

	    /**
	     * Detach the Style Sheet and remove it from the registry.
	     */

	  }, {
	    key: 'removeStyleSheet',
	    value: function removeStyleSheet(sheet) {
	      sheet.detach();
	      _sheets2['default'].remove(sheet);
	      return this;
	    }

	    /**
	     * Create a rule without a Style Sheet.
	     */

	  }, {
	    key: 'createRule',
	    value: function createRule(name) {
	      var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	      // Enable rule without name for inline styles.
	      if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object') {
	        options = style;
	        style = name;
	        name = undefined;
	      }

	      if (!options.classes) options.classes = {};
	      if (!options.jss) options.jss = this;
	      if (!options.Renderer) options.Renderer = (0, _findRenderer2['default'])(options);
	      if (!options.generateClassName) {
	        options.generateClassName = this.options.generateClassName || _generateClassName2['default'];
	      }

	      var rule = (0, _createRule3['default'])(name, style, options);
	      this.plugins.onProcessRule(rule);

	      return rule;
	    }

	    /**
	     * Register plugin. Passed function will be invoked with a rule instance.
	     */

	  }, {
	    key: 'use',
	    value: function use() {
	      var _this = this;

	      for (var _len = arguments.length, plugins = Array(_len), _key = 0; _key < _len; _key++) {
	        plugins[_key] = arguments[_key];
	      }

	      plugins.forEach(function (plugin) {
	        return _this.plugins.use(plugin);
	      });
	      return this;
	    }
	  }]);

	  return Jss;
	}();

	exports['default'] = Jss;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _findRenderer = __webpack_require__(14);

	var _findRenderer2 = _interopRequireDefault(_findRenderer);

	var _RulesContainer = __webpack_require__(22);

	var _RulesContainer2 = _interopRequireDefault(_RulesContainer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var StyleSheet = function () {
	  function StyleSheet(styles, options) {
	    _classCallCheck(this, StyleSheet);

	    var Renderer = (0, _findRenderer2['default'])(options);
	    var index = typeof options.index === 'number' ? options.index : 0;

	    this.attached = false;
	    this.deployed = false;
	    this.linked = false;
	    this.classes = Object.create(null);
	    this.options = _extends({
	      sheet: this,
	      parent: this,
	      classes: this.classes,
	      index: index,
	      Renderer: Renderer
	    }, options);
	    this.renderer = new Renderer(this);
	    this.renderer.createElement();
	    this.rules = new _RulesContainer2['default'](this.options);

	    for (var name in styles) {
	      this.rules.add(name, styles[name]);
	    }

	    this.rules.process();
	  }

	  /**
	   * Attach renderable to the render tree.
	   */


	  _createClass(StyleSheet, [{
	    key: 'attach',
	    value: function attach() {
	      if (this.attached) return this;
	      if (!this.deployed) this.deploy();
	      this.renderer.attach();
	      if (!this.linked && this.options.link) this.link();
	      this.attached = true;
	      return this;
	    }

	    /**
	     * Remove renderable from render tree.
	     */

	  }, {
	    key: 'detach',
	    value: function detach() {
	      if (!this.attached) return this;
	      this.renderer.detach();
	      this.attached = false;
	      return this;
	    }

	    /**
	     * Add a rule to the current stylesheet.
	     * Will insert a rule also after the stylesheet has been rendered first time.
	     */

	  }, {
	    key: 'addRule',
	    value: function addRule(name, style, options) {
	      var queue = this.queue;

	      // Plugins can create rules.
	      // In order to preserve the right order, we need to queue all `.addRule` calls,
	      // which happen after the first `rules.add()` call.

	      if (this.attached && !queue) this.queue = [];

	      var rule = this.rules.add(name, style, options);
	      this.options.jss.plugins.onProcessRule(rule);

	      if (this.attached) {
	        if (!this.deployed) return rule;
	        // Don't insert rule directly if there is no stringified version yet.
	        // It will be inserted all together when .attach is called.
	        if (queue) queue.push(rule);else {
	          var renderable = this.renderer.insertRule(rule);
	          if (renderable && this.options.link) rule.renderable = renderable;
	          if (this.queue) {
	            this.queue.forEach(this.renderer.insertRule, this.renderer);
	            this.queue = undefined;
	          }
	        }
	        return rule;
	      }

	      // We can't add rules to a detached style node.
	      // We will redeploy the sheet once user will attach it.
	      this.deployed = false;

	      return rule;
	    }

	    /**
	     * Create and add rules.
	     * Will render also after Style Sheet was rendered the first time.
	     */

	  }, {
	    key: 'addRules',
	    value: function addRules(styles, options) {
	      var added = [];
	      for (var name in styles) {
	        added.push(this.addRule(name, styles[name], options));
	      }
	      return added;
	    }

	    /**
	     * Get a rule by name.
	     */

	  }, {
	    key: 'getRule',
	    value: function getRule(name) {
	      return this.rules.get(name);
	    }

	    /**
	     * Delete a rule by name.
	     * Returns `true`: if rule has been deleted from the DOM.
	     */

	  }, {
	    key: 'deleteRule',
	    value: function deleteRule(name) {
	      var rule = this.rules.get(name);

	      if (!rule) return false;

	      this.rules.remove(rule);

	      if (this.attached && rule.renderable) {
	        return this.renderer.deleteRule(rule.renderable);
	      }

	      return true;
	    }

	    /**
	     * Get index of a rule.
	     */

	  }, {
	    key: 'indexOf',
	    value: function indexOf(rule) {
	      return this.rules.indexOf(rule);
	    }

	    /**
	     * Deploy pure CSS string to a renderable.
	     */

	  }, {
	    key: 'deploy',
	    value: function deploy() {
	      this.renderer.deploy(this);
	      this.deployed = true;
	      return this;
	    }

	    /**
	     * Link renderable CSS rules with their corresponding models.
	     */

	  }, {
	    key: 'link',
	    value: function link() {
	      var cssRules = this.renderer.getRules();

	      // Is undefined when VirtualRenderer is used.
	      if (cssRules) {
	        for (var i = 0; i < cssRules.length; i++) {
	          var CSSStyleRule = cssRules[i];
	          var rule = this.rules.get(CSSStyleRule.selectorText);
	          if (rule) rule.renderable = CSSStyleRule;
	        }
	      }
	      this.linked = true;
	      return this;
	    }

	    /**
	     * Update the function values with a new data.
	     */

	  }, {
	    key: 'update',
	    value: function update(data) {
	      this.rules.update(data);
	      return this;
	    }

	    /**
	     * Convert rules to a CSS string.
	     */

	  }, {
	    key: 'toString',
	    value: function toString(options) {
	      return this.rules.toString(options);
	    }
	  }]);

	  return StyleSheet;
	}();

	exports['default'] = StyleSheet;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports['default'] = findRenderer;

	var _isInBrowser = __webpack_require__(15);

	var _isInBrowser2 = _interopRequireDefault(_isInBrowser);

	var _DomRenderer = __webpack_require__(16);

	var _DomRenderer2 = _interopRequireDefault(_DomRenderer);

	var _VirtualRenderer = __webpack_require__(21);

	var _VirtualRenderer2 = _interopRequireDefault(_VirtualRenderer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * Find proper renderer.
	 * Option `virtual` is used to force use of VirtualRenderer even if DOM is
	 * detected, used for testing only.
	 */
	function findRenderer() {
	  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	  if (options.Renderer) return options.Renderer;
	  var useVirtual = options.virtual || !_isInBrowser2['default'];
	  return useVirtual ? _VirtualRenderer2['default'] : _DomRenderer2['default'];
	}

/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var isBrowser = exports.isBrowser = (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" && (typeof document === "undefined" ? "undefined" : _typeof(document)) === 'object' && document.nodeType === 9;

	exports.default = isBrowser;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _warning = __webpack_require__(17);

	var _warning2 = _interopRequireDefault(_warning);

	var _sheets = __webpack_require__(19);

	var _sheets2 = _interopRequireDefault(_sheets);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Get a style property.
	 */
	function getStyle(rule, prop) {
	  try {
	    return rule.style.getPropertyValue(prop);
	  } catch (err) {
	    // IE may throw if property is unknown.
	    return '';
	  }
	}

	/**
	 * Set a style property.
	 */
	function setStyle(rule, prop, value) {
	  try {
	    rule.style.setProperty(prop, value);
	  } catch (err) {
	    // IE may throw if property is unknown.
	    return false;
	  }
	  return true;
	}

	/**
	 * Get the selector.
	 */
	function getSelector(rule) {
	  return rule.selectorText;
	}

	/**
	 * Set the selector.
	 */
	function setSelector(rule, selectorText) {
	  rule.selectorText = selectorText;

	  // Return false if setter was not successful.
	  // Currently works in chrome only.
	  return rule.selectorText === selectorText;
	}

	/**
	 * Gets the `head` element upon the first call and caches it.
	 */
	var getHead = function () {
	  var head = void 0;
	  return function () {
	    if (!head) head = document.head || document.getElementsByTagName('head')[0];
	    return head;
	  };
	}();

	/**
	 * Find attached sheet with an index higher than the passed one.
	 */
	function findHigherSheet(registry, options) {
	  for (var i = 0; i < registry.length; i++) {
	    var sheet = registry[i];
	    if (sheet.attached && sheet.options.index > options.index && sheet.options.insertionPoint === options.insertionPoint) {
	      return sheet;
	    }
	  }
	  return null;
	}

	/**
	 * Find attached sheet with the highest index.
	 */
	function findHighestSheet(registry, options) {
	  for (var i = registry.length - 1; i >= 0; i--) {
	    var sheet = registry[i];
	    if (sheet.attached && sheet.options.insertionPoint === options.insertionPoint) {
	      return sheet;
	    }
	  }
	  return null;
	}

	/**
	 * Find a comment with "jss" inside.
	 */
	function findCommentNode(text) {
	  var head = getHead();
	  for (var i = 0; i < head.childNodes.length; i++) {
	    var node = head.childNodes[i];
	    if (node.nodeType === 8 && node.nodeValue.trim() === text) {
	      return node;
	    }
	  }
	  return null;
	}

	/**
	 * Find a node before which we can insert the sheet.
	 */
	function findPrevNode(options) {
	  var registry = _sheets2['default'].registry;


	  if (registry.length > 0) {
	    // Try to insert before the next higher sheet.
	    var sheet = findHigherSheet(registry, options);
	    if (sheet) return sheet.renderer.element;

	    // Otherwise insert after the last attached.
	    sheet = findHighestSheet(registry, options);
	    if (sheet) return sheet.renderer.element.nextElementSibling;
	  }

	  // Try to find a comment placeholder if registry is empty.
	  var comment = findCommentNode(options.insertionPoint);
	  if (comment) return comment.nextSibling;
	  return null;
	}

	var DomRenderer = function () {

	  // HTMLStyleElement needs fixing https://github.com/facebook/flow/issues/2696
	  function DomRenderer(sheet) {
	    _classCallCheck(this, DomRenderer);

	    this.getStyle = getStyle;
	    this.setStyle = setStyle;
	    this.setSelector = setSelector;
	    this.getSelector = getSelector;

	    this.sheet = sheet;
	    // There is no sheet when the renderer is used from a standalone RegularRule.
	    if (sheet) _sheets2['default'].add(sheet);
	  }

	  /**
	   * Create and ref style element.
	   */


	  _createClass(DomRenderer, [{
	    key: 'createElement',
	    value: function createElement() {
	      var _ref = this.sheet ? this.sheet.options : {},
	          media = _ref.media,
	          meta = _ref.meta,
	          element = _ref.element;

	      this.element = element || document.createElement('style');
	      this.element.type = 'text/css';
	      this.element.setAttribute('data-jss', '');
	      if (media) this.element.setAttribute('media', media);
	      if (meta) this.element.setAttribute('data-meta', meta);
	    }

	    /**
	     * Insert style element into render tree.
	     */

	  }, {
	    key: 'attach',
	    value: function attach() {
	      // In the case the element node is external and it is already in the DOM.
	      if (this.element.parentNode || !this.sheet) return;
	      var prevNode = findPrevNode(this.sheet.options);
	      getHead().insertBefore(this.element, prevNode);
	    }

	    /**
	     * Remove style element from render tree.
	     */

	  }, {
	    key: 'detach',
	    value: function detach() {
	      this.element.parentNode.removeChild(this.element);
	    }

	    /**
	     * Inject CSS string into element.
	     */

	  }, {
	    key: 'deploy',
	    value: function deploy(sheet) {
	      this.element.textContent = '\n' + sheet.toString() + '\n';
	    }

	    /**
	     * Insert a rule into element.
	     */

	  }, {
	    key: 'insertRule',
	    value: function insertRule(rule) {
	      var sheet = this.element.sheet;
	      var cssRules = sheet.cssRules;

	      var index = cssRules.length;
	      var str = rule.toString();

	      if (!str) return false;

	      try {
	        sheet.insertRule(str, index);
	      } catch (err) {
	        (0, _warning2['default'])(false, '[JSS] Can not insert an unsupported rule \n\r%s', rule);
	        return false;
	      }

	      return cssRules[index];
	    }

	    /**
	     * Delete a rule.
	     */

	  }, {
	    key: 'deleteRule',
	    value: function deleteRule(rule) {
	      var sheet = this.element.sheet;
	      var cssRules = sheet.cssRules;

	      for (var _index = 0; _index < cssRules.length; _index++) {
	        if (rule === cssRules[_index]) {
	          sheet.deleteRule(_index);
	          return true;
	        }
	      }
	      return false;
	    }

	    /**
	     * Get all rules elements.
	     */

	  }, {
	    key: 'getRules',
	    value: function getRules() {
	      return this.element.sheet.cssRules;
	    }
	  }]);

	  return DomRenderer;
	}();

	exports['default'] = DomRenderer;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  warning = function(condition, format, args) {
	    var len = arguments.length;
	    args = new Array(len > 2 ? len - 2 : 0);
	    for (var key = 2; key < len; key++) {
	      args[key - 2] = arguments[key];
	    }
	    if (format === undefined) {
	      throw new Error(
	        '`warning(condition, format, ...args)` requires a warning ' +
	        'message argument'
	      );
	    }

	    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
	      throw new Error(
	        'The warning format should be able to uniquely identify this ' +
	        'warning. Please, use a more descriptive format than: ' + format
	      );
	    }

	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' +
	        format.replace(/%s/g, function() {
	          return args[argIndex++];
	        });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch(x) {}
	    }
	  };
	}

	module.exports = warning;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(18)))

/***/ },
/* 18 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _SheetsRegistry = __webpack_require__(20);

	var _SheetsRegistry2 = _interopRequireDefault(_SheetsRegistry);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * This is a global sheets registry. Only DomRenderer will add sheets to it.
	 * On the server one should use an own SheetsRegistry instance and add the
	 * sheets to it, because you need to make sure to create a new registry for
	 * each request in order to not leak sheets across requests.
	 */
	exports['default'] = new _SheetsRegistry2['default']();

/***/ },
/* 20 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Sheets registry to access them all at one place.
	 */
	var SheetsRegistry = function () {
	  function SheetsRegistry() {
	    _classCallCheck(this, SheetsRegistry);

	    this.registry = [];
	  }

	  _createClass(SheetsRegistry, [{
	    key: 'add',


	    /**
	     * Register a Style Sheet.
	     */
	    value: function add(sheet) {
	      var registry = this.registry;
	      var index = sheet.options.index;


	      if (!registry.length || index >= registry[registry.length - 1].options.index) {
	        registry.push(sheet);
	        return;
	      }

	      for (var i = 0; i < registry.length; i++) {
	        var options = registry[i].options;

	        if (options.index > index) {
	          registry.splice(i, 0, sheet);
	          return;
	        }
	      }
	    }

	    /**
	     * Reset the registry.
	     */

	  }, {
	    key: 'reset',
	    value: function reset() {
	      this.registry = [];
	    }

	    /**
	     * Remove a Style Sheet.
	     */

	  }, {
	    key: 'remove',
	    value: function remove(sheet) {
	      var index = this.registry.indexOf(sheet);
	      this.registry.splice(index, 1);
	    }

	    /**
	     * Convert all attached sheets to a CSS string.
	     */

	  }, {
	    key: 'toString',
	    value: function toString(options) {
	      return this.registry.filter(function (sheet) {
	        return sheet.attached;
	      }).map(function (sheet) {
	        return sheet.toString(options);
	      }).join('\n');
	    }
	  }]);

	  return SheetsRegistry;
	}();

	exports['default'] = SheetsRegistry;

/***/ },
/* 21 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/* eslint-disable class-methods-use-this */

	/**
	 * Rendering backend to do nothing in nodejs.
	 */
	var VirtualRenderer = function () {
	  function VirtualRenderer() {
	    _classCallCheck(this, VirtualRenderer);
	  }

	  _createClass(VirtualRenderer, [{
	    key: 'createElement',
	    value: function createElement() {}
	  }, {
	    key: 'setStyle',
	    value: function setStyle() {
	      return true;
	    }
	  }, {
	    key: 'getStyle',
	    value: function getStyle() {
	      return '';
	    }
	  }, {
	    key: 'setSelector',
	    value: function setSelector() {
	      return true;
	    }
	  }, {
	    key: 'getSelector',
	    value: function getSelector() {
	      return '';
	    }
	  }, {
	    key: 'attach',
	    value: function attach() {}
	  }, {
	    key: 'detach',
	    value: function detach() {}
	  }, {
	    key: 'deploy',
	    value: function deploy() {}
	  }, {
	    key: 'insertRule',
	    value: function insertRule() {
	      return true;
	    }
	  }, {
	    key: 'deleteRule',
	    value: function deleteRule() {
	      return true;
	    }
	  }, {
	    key: 'getRules',
	    value: function getRules() {}
	  }]);

	  return VirtualRenderer;
	}();

	exports['default'] = VirtualRenderer;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _createRule = __webpack_require__(23);

	var _createRule2 = _interopRequireDefault(_createRule);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Contains rules objects and allows adding/removing etc.
	 * Is used for e.g. by `StyleSheet` or `ConditionalRule`.
	 */
	var RulesContainer = function () {
	  // Rules registry for access by .get() method.
	  // It contains the same rule registered by name and by selector.
	  function RulesContainer(options) {
	    _classCallCheck(this, RulesContainer);

	    this.map = Object.create(null);
	    this.index = [];

	    this.options = options;
	    this.classes = options.classes;
	  }

	  /**
	   * Create and register rule.
	   *
	   * Will not render after Style Sheet was rendered the first time.
	   */


	  // Used to ensure correct rules order.


	  _createClass(RulesContainer, [{
	    key: 'add',
	    value: function add(name, style, options) {
	      var _options = this.options,
	          parent = _options.parent,
	          sheet = _options.sheet,
	          jss = _options.jss,
	          Renderer = _options.Renderer,
	          generateClassName = _options.generateClassName;


	      options = _extends({
	        classes: this.classes,
	        parent: parent,
	        sheet: sheet,
	        jss: jss,
	        Renderer: Renderer,
	        generateClassName: generateClassName
	      }, options);

	      if (!options.className) options.className = this.classes[name];

	      var rule = (0, _createRule2['default'])(name, style, options);
	      this.register(rule);

	      var index = options.index === undefined ? this.index.length : options.index;
	      this.index.splice(index, 0, rule);
	      return rule;
	    }

	    /**
	     * Get a rule.
	     */

	  }, {
	    key: 'get',
	    value: function get(name) {
	      return this.map[name];
	    }

	    /**
	     * Delete a rule.
	     */

	  }, {
	    key: 'remove',
	    value: function remove(rule) {
	      this.unregister(rule);
	      this.index.splice(this.indexOf(rule), 1);
	    }

	    /**
	     * Get index of a rule.
	     */

	  }, {
	    key: 'indexOf',
	    value: function indexOf(rule) {
	      return this.index.indexOf(rule);
	    }

	    /**
	     * Run `onProcessRule()` plugins on every rule.
	     */

	  }, {
	    key: 'process',
	    value: function process() {
	      var plugins = this.options.jss.plugins;
	      // We need to clone array because if we modify the index somewhere else during a loop
	      // we end up with very hard-to-track-down side effects.

	      this.index.slice(0).forEach(plugins.onProcessRule, plugins);
	    }

	    /**
	     * Register a rule in `.map` and `.classes` maps.
	     */

	  }, {
	    key: 'register',
	    value: function register(rule) {
	      if (rule.name) this.map[rule.name] = rule;
	      if (rule.className && rule.name) this.classes[rule.name] = rule.className;
	      if (rule.selector) this.map[rule.selector] = rule;
	    }

	    /**
	     * Unregister a rule.
	     */

	  }, {
	    key: 'unregister',
	    value: function unregister(rule) {
	      delete this.map[rule.name];
	      delete this.map[rule.selector];
	      delete this.classes[rule.name];
	    }

	    /**
	     * Update the function values with a new data.
	     */

	  }, {
	    key: 'update',
	    value: function update(data) {
	      this.index.forEach(function (rule) {
	        var style = rule.originalStyle;
	        for (var prop in style) {
	          var value = style[prop];
	          if (typeof value === 'function') {
	            var computedValue = value(data);
	            rule.prop(prop, computedValue);
	          }
	        }
	        if (rule.rules instanceof RulesContainer) {
	          rule.rules.update(data);
	        }
	      });
	    }

	    /**
	     * Convert rules to a CSS string.
	     */

	  }, {
	    key: 'toString',
	    value: function toString(options) {
	      var str = '';

	      for (var index = 0; index < this.index.length; index++) {
	        var rule = this.index[index];
	        var css = rule.toString(options);

	        // No need to render an empty rule.
	        if (!css) continue;

	        if (str) str += '\n';
	        str += css;
	      }

	      return str;
	    }
	  }]);

	  return RulesContainer;
	}();

	exports['default'] = RulesContainer;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports['default'] = createRule;

	var _warning = __webpack_require__(17);

	var _warning2 = _interopRequireDefault(_warning);

	var _RegularRule = __webpack_require__(24);

	var _RegularRule2 = _interopRequireDefault(_RegularRule);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * Create a rule instance.
	 */
	function createRule(name) {
	  var decl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var options = arguments[2];
	  var jss = options.jss;

	  if (jss) {
	    var rule = jss.plugins.onCreateRule(name, decl, options);
	    if (rule) return rule;
	  }

	  // It is an at-rule and it has no instance.
	  if (name && name[0] === '@') {
	    (0, _warning2['default'])(false, '[JSS] Unknown at-rule %s', name);
	  }

	  return new _RegularRule2['default'](name, decl, options);
	}

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _toCss = __webpack_require__(25);

	var _toCss2 = _interopRequireDefault(_toCss);

	var _toCssValue = __webpack_require__(26);

	var _toCssValue2 = _interopRequireDefault(_toCssValue);

	var _findClassNames = __webpack_require__(27);

	var _findClassNames2 = _interopRequireDefault(_findClassNames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var parse = JSON.parse,
	    stringify = JSON.stringify;

	var RegularRule = function () {

	  /**
	   * We expect `style` to be a plain object.
	   * To avoid original style object mutations, we clone it and hash it
	   * along the way.
	   * It is also the fastetst way.
	   * http://jsperf.com/lodash-deepclone-vs-jquery-extend-deep/6
	   */
	  function RegularRule(name, style, options) {
	    _classCallCheck(this, RegularRule);

	    this.type = 'regular';
	    var generateClassName = options.generateClassName,
	        sheet = options.sheet,
	        Renderer = options.Renderer;

	    var styleStr = stringify(style);
	    this.style = parse(styleStr);
	    this.name = name;
	    this.options = options;
	    this.originalStyle = style;
	    this.className = '';
	    if (options.className) this.className = options.className;else if (generateClassName) this.className = generateClassName(styleStr, this, options.sheet);
	    this.selectorText = options.selector || '.' + this.className;
	    if (sheet) this.renderer = sheet.renderer;else if (Renderer) this.renderer = new Renderer();
	  }

	  /**
	   * Set selector string.
	   * Attenition: use this with caution. Most browser didn't implement
	   * selectorText setter, so this may result in rerendering of entire Style Sheet.
	   */


	  _createClass(RegularRule, [{
	    key: 'prop',


	    /**
	     * Get or set a style property.
	     */
	    value: function prop(name, value) {
	      // Its a setter.
	      if (value != null) {
	        // Don't do anything if the value has not changed.
	        if (this.style[name] !== value) {
	          this.style[name] = value;
	          // Only defined if option linked is true.
	          if (this.renderable) this.renderer.setStyle(this.renderable, name, value);
	        }
	        return this;
	      }
	      // Its a getter, read the value from the DOM if its not cached.
	      if (this.renderable && this.style[name] == null) {
	        // Cache the value after we have got it from the DOM once.
	        this.style[name] = this.renderer.getStyle(this.renderable, name);
	      }
	      return this.style[name];
	    }

	    /**
	     * Apply rule to an element inline.
	     */

	  }, {
	    key: 'applyTo',
	    value: function applyTo(renderable) {
	      var json = this.toJSON();
	      for (var prop in json) {
	        this.renderer.setStyle(renderable, prop, json[prop]);
	      }return this;
	    }

	    /**
	     * Returns JSON representation of the rule.
	     * Fallbacks are not supported.
	     * Useful as inline style.
	     */

	  }, {
	    key: 'toJSON',
	    value: function toJSON() {
	      var json = Object.create(null);
	      for (var prop in this.style) {
	        var value = this.style[prop];
	        if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== 'object') json[prop] = value;else if (Array.isArray(value)) json[prop] = (0, _toCssValue2['default'])(value);
	      }
	      return json;
	    }

	    /**
	     * Generates a CSS string.
	     */

	  }, {
	    key: 'toString',
	    value: function toString(options) {
	      return (0, _toCss2['default'])(this.selector, this.style, options);
	    }
	  }, {
	    key: 'selector',
	    set: function set(selector) {
	      var sheet = this.options.sheet;

	      // After we modify a selector, ref by old selector needs to be removed.

	      if (sheet) sheet.rules.unregister(this);

	      this.selectorText = selector;
	      this.className = (0, _findClassNames2['default'])(selector);

	      if (!this.renderable) {
	        // Register the rule with new selector.
	        if (sheet) sheet.rules.register(this);
	        return;
	      }

	      var changed = this.renderer.setSelector(this.renderable, selector);

	      if (changed && sheet) {
	        sheet.rules.register(this);
	        return;
	      }

	      // If selector setter is not implemented, rerender the sheet.
	      // We need to delete renderable from the rule, because when sheet.deploy()
	      // calls rule.toString, it will get the old selector.
	      delete this.renderable;
	      if (sheet) {
	        sheet.rules.register(this);
	        sheet.deploy().link();
	      }
	    }

	    /**
	     * Get selector string.
	     */
	    ,
	    get: function get() {
	      if (this.renderable) {
	        return this.renderer.getSelector(this.renderable);
	      }

	      return this.selectorText;
	    }
	  }]);

	  return RegularRule;
	}();

	exports['default'] = RegularRule;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports['default'] = toCss;

	var _toCssValue = __webpack_require__(26);

	var _toCssValue2 = _interopRequireDefault(_toCssValue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * Indent a string.
	 * http://jsperf.com/array-join-vs-for
	 */
	function indentStr(str, indent) {
	  var result = '';
	  for (var index = 0; index < indent; index++) {
	    result += '  ';
	  }return result + str;
	}

	/**
	 * Converts a Rule to CSS string.
	 */

	function toCss(selector, style) {
	  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	  var _options$indent = options.indent,
	      indent = _options$indent === undefined ? 0 : _options$indent;
	  var fallbacks = style.fallbacks;

	  var result = '';

	  indent++;

	  // Apply fallbacks first.
	  if (fallbacks) {
	    // Array syntax {fallbacks: [{prop: value}]}
	    if (Array.isArray(fallbacks)) {
	      for (var index = 0; index < fallbacks.length; index++) {
	        var fallback = fallbacks[index];
	        for (var prop in fallback) {
	          var value = fallback[prop];
	          if (value != null) {
	            result += '\n' + indentStr(prop + ': ' + (0, _toCssValue2['default'])(value) + ';', indent);
	          }
	        }
	      }
	    }
	    // Object syntax {fallbacks: {prop: value}}
	    else {
	        for (var _prop in fallbacks) {
	          var _value = fallbacks[_prop];
	          if (_value != null) {
	            result += '\n' + indentStr(_prop + ': ' + (0, _toCssValue2['default'])(_value) + ';', indent);
	          }
	        }
	      }
	  }

	  for (var _prop2 in style) {
	    var _value2 = style[_prop2];
	    if (_value2 != null && _prop2 !== 'fallbacks') {
	      result += '\n' + indentStr(_prop2 + ': ' + (0, _toCssValue2['default'])(_value2) + ';', indent);
	    }
	  }

	  if (!result) return result;

	  indent--;
	  result = indentStr(selector + ' {' + result + '\n', indent) + indentStr('}', indent);

	  return result;
	}

/***/ },
/* 26 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports['default'] = toCssValue;
	var joinWithSpace = function joinWithSpace(value) {
	  return value.join(' ');
	};

	/**
	 * Converts array values to string.
	 *
	 * `margin: [['5px', '10px']]` > `margin: 5px 10px;`
	 * `border: ['1px', '2px']` > `border: 1px, 2px;`
	 */
	function toCssValue(value) {
	  if (!Array.isArray(value)) return value;

	  // Support space separated values.
	  if (Array.isArray(value[0])) {
	    return toCssValue(value.map(joinWithSpace));
	  }

	  return value.join(', ');
	}

/***/ },
/* 27 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports['default'] = findClassNames;
	var dotsRegExp = /[.]/g;
	var classesRegExp = /[.][^ ,]+/g;

	/**
	 * Get class names from a selector.
	 */
	function findClassNames(selector) {
	  var classes = selector.match(classesRegExp);

	  if (!classes) return '';

	  return classes.join(' ').replace(dotsRegExp, '');
	}

/***/ },
/* 28 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var PluginsRegistry = function () {
	  function PluginsRegistry() {
	    _classCallCheck(this, PluginsRegistry);

	    this.ruleCreators = [];
	    this.ruleProcessors = [];
	    this.sheetProcessors = [];
	  }

	  _createClass(PluginsRegistry, [{
	    key: 'onCreateRule',


	    /**
	     * Call `onCreateRule` hooks and return an object if returned by a hook.
	     */
	    value: function onCreateRule(name, decl, options) {
	      for (var i = 0; i < this.ruleCreators.length; i++) {
	        var rule = this.ruleCreators[i](name, decl, options);
	        if (rule) return rule;
	      }
	      return null;
	    }

	    /**
	     * Call `onProcessRule` hooks.
	     */

	  }, {
	    key: 'onProcessRule',
	    value: function onProcessRule(rule) {
	      if (rule.isProcessed) return;
	      for (var i = 0; i < this.ruleProcessors.length; i++) {
	        this.ruleProcessors[i](rule, rule.options.sheet);
	      }
	      rule.isProcessed = true;
	    }

	    /**
	     * Call `onProcessSheet` hooks.
	     */

	  }, {
	    key: 'onProcessSheet',
	    value: function onProcessSheet(sheet) {
	      for (var i = 0; i < this.sheetProcessors.length; i++) {
	        this.sheetProcessors[i](sheet);
	      }
	    }

	    /**
	     * Register a plugin.
	     * If function is passed, it is a shortcut for `{onProcessRule}`.
	     */

	  }, {
	    key: 'use',
	    value: function use(plugin) {
	      if (typeof plugin === 'function') {
	        this.ruleProcessors.push(plugin);
	        return;
	      }

	      if (plugin.onCreateRule) this.ruleCreators.push(plugin.onCreateRule);
	      if (plugin.onProcessRule) this.ruleProcessors.push(plugin.onProcessRule);
	      if (plugin.onProcessSheet) this.sheetProcessors.push(plugin.onProcessSheet);
	    }
	  }]);

	  return PluginsRegistry;
	}();

	exports['default'] = PluginsRegistry;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _SimpleRule = __webpack_require__(30);

	var _SimpleRule2 = _interopRequireDefault(_SimpleRule);

	var _KeyframeRule = __webpack_require__(31);

	var _KeyframeRule2 = _interopRequireDefault(_KeyframeRule);

	var _ConditionalRule = __webpack_require__(32);

	var _ConditionalRule2 = _interopRequireDefault(_ConditionalRule);

	var _FontFaceRule = __webpack_require__(33);

	var _FontFaceRule2 = _interopRequireDefault(_FontFaceRule);

	var _ViewportRule = __webpack_require__(34);

	var _ViewportRule2 = _interopRequireDefault(_ViewportRule);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var classes = {
	  '@charset': _SimpleRule2['default'],
	  '@import': _SimpleRule2['default'],
	  '@namespace': _SimpleRule2['default'],
	  '@keyframes': _KeyframeRule2['default'],
	  '@media': _ConditionalRule2['default'],
	  '@supports': _ConditionalRule2['default'],
	  '@font-face': _FontFaceRule2['default'],
	  '@viewport': _ViewportRule2['default'],
	  '@-ms-viewport': _ViewportRule2['default']
	};

	/**
	 * Generate plugins which will register all rules.
	 */

	exports['default'] = Object.keys(classes).map(function (key) {
	  // https://jsperf.com/indexof-vs-substr-vs-regex-at-the-beginning-3
	  var re = new RegExp('^' + key);
	  var onCreateRule = function onCreateRule(name, decl, options) {
	    return re.test(name) ? new classes[key](name, decl, options) : null;
	  };
	  return { onCreateRule: onCreateRule };
	});

/***/ },
/* 30 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var SimpleRule = function () {
	  function SimpleRule(name, value, options) {
	    _classCallCheck(this, SimpleRule);

	    this.type = 'simple';

	    this.name = name;
	    this.value = value;
	    this.options = options;
	  }

	  /**
	   * Generates a CSS string.
	   */


	  _createClass(SimpleRule, [{
	    key: 'toString',
	    value: function toString() {
	      if (Array.isArray(this.value)) {
	        var str = '';
	        for (var index = 0; index < this.value.length; index++) {
	          str += this.name + ' ' + this.value[index] + ';';
	          if (this.value[index + 1]) str += '\n';
	        }
	        return str;
	      }

	      return this.name + ' ' + this.value + ';';
	    }
	  }]);

	  return SimpleRule;
	}();

	exports['default'] = SimpleRule;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _createRule = __webpack_require__(23);

	var _createRule2 = _interopRequireDefault(_createRule);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var toCssOptions = { indent: 1 };

	var KeyframeRule = function () {
	  function KeyframeRule(selector, frames, options) {
	    _classCallCheck(this, KeyframeRule);

	    this.type = 'keyframe';

	    this.selector = selector;
	    this.options = options;
	    this.frames = this.formatFrames(frames);
	  }

	  /**
	   * Creates formatted frames where every frame value is a rule instance.
	   */


	  _createClass(KeyframeRule, [{
	    key: 'formatFrames',
	    value: function formatFrames(frames) {
	      var newFrames = Object.create(null);
	      for (var name in frames) {
	        var options = _extends({}, this.options, {
	          parent: this,
	          className: name,
	          selector: name
	        });
	        var rule = (0, _createRule2['default'])(name, frames[name], options);
	        options.jss.plugins.onProcessRule(rule);
	        newFrames[name] = rule;
	      }
	      return newFrames;
	    }

	    /**
	     * Generates a CSS string.
	     */

	  }, {
	    key: 'toString',
	    value: function toString() {
	      var str = this.selector + ' {\n';
	      for (var name in this.frames) {
	        str += this.frames[name].toString(toCssOptions) + '\n';
	      }
	      str += '}';
	      return str;
	    }
	  }]);

	  return KeyframeRule;
	}();

	exports['default'] = KeyframeRule;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _RulesContainer = __webpack_require__(22);

	var _RulesContainer2 = _interopRequireDefault(_RulesContainer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Conditional rule for @media, @supports
	 */
	var ConditionalRule = function () {
	  function ConditionalRule(selector, styles, options) {
	    _classCallCheck(this, ConditionalRule);

	    this.type = 'conditional';

	    this.selector = selector;
	    this.options = options;
	    this.rules = new _RulesContainer2['default'](_extends({}, options, { parent: this }));

	    for (var name in styles) {
	      this.rules.add(name, styles[name]);
	    }

	    this.rules.process();
	  }

	  /**
	   * Get a rule.
	   */


	  _createClass(ConditionalRule, [{
	    key: 'getRule',
	    value: function getRule(name) {
	      return this.rules.get(name);
	    }

	    /**
	     * Get index of a rule.
	     */

	  }, {
	    key: 'indexOf',
	    value: function indexOf(rule) {
	      return this.rules.indexOf(rule);
	    }

	    /**
	     * Create and register rule, run plugins.
	     */

	  }, {
	    key: 'addRule',
	    value: function addRule(name, style, options) {
	      var rule = this.rules.add(name, style, options);
	      this.options.jss.plugins.onProcessRule(rule);
	      return rule;
	    }

	    /**
	     * Generates a CSS string.
	     */

	  }, {
	    key: 'toString',
	    value: function toString() {
	      var inner = this.rules.toString({ indent: 1 });
	      return inner ? this.selector + ' {\n' + inner + '\n}' : '';
	    }
	  }]);

	  return ConditionalRule;
	}();

	exports['default'] = ConditionalRule;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _toCss = __webpack_require__(25);

	var _toCss2 = _interopRequireDefault(_toCss);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var FontFaceRule = function () {
	  function FontFaceRule(selector, style, options) {
	    _classCallCheck(this, FontFaceRule);

	    this.type = 'font-face';

	    this.selector = selector;
	    this.style = style;
	    this.options = options;
	  }

	  /**
	   * Generates a CSS string.
	   */


	  _createClass(FontFaceRule, [{
	    key: 'toString',
	    value: function toString() {
	      if (Array.isArray(this.style)) {
	        var str = '';
	        for (var index = 0; index < this.style.length; index++) {
	          str += (0, _toCss2['default'])(this.selector, this.style[index]);
	          if (this.style[index + 1]) str += '\n';
	        }
	        return str;
	      }

	      return (0, _toCss2['default'])(this.selector, this.style);
	    }
	  }]);

	  return FontFaceRule;
	}();

	exports['default'] = FontFaceRule;

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _toCss = __webpack_require__(25);

	var _toCss2 = _interopRequireDefault(_toCss);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ViewportRule = function () {
	  function ViewportRule(name, style, options) {
	    _classCallCheck(this, ViewportRule);

	    this.type = 'viewport';

	    this.name = name;
	    this.style = style;
	    this.options = options;
	  }

	  /**
	   * Generates a CSS string.
	   */


	  _createClass(ViewportRule, [{
	    key: 'toString',
	    value: function toString() {
	      return (0, _toCss2['default'])(this.name, this.style);
	    }
	  }]);

	  return ViewportRule;
	}();

	exports['default'] = ViewportRule;

/***/ },
/* 35 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});


	var globalRef = typeof window === 'undefined' ? global : window;

	var namespace = '__JSS_VERSION_COUNTER__';
	if (globalRef[namespace] == null) globalRef[namespace] = 0;
	// In case we have more than one JSS version.
	var jssCounter = globalRef[namespace]++;
	var ruleCounter = 0;

	/**
	 * Generates unique class names.
	 */

	exports['default'] = function (str, rule) {
	  return (
	    // There is no rule name if `jss.createRule(style)` was used.
	    (rule.name || 'jss') + '-' + jssCounter + '-' + ruleCounter++
	  );
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 36 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/**
	 * Extracts a styles object with only props that contain function values.
	 */
	exports['default'] = function (styles) {
	  var fnValuesCounter = 0;

	  // eslint-disable-next-line no-shadow
	  function extract(styles) {
	    var to = void 0;

	    for (var key in styles) {
	      var value = styles[key];
	      var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);

	      if (type === 'function') {
	        if (!to) to = {};
	        to[key] = value;
	        fnValuesCounter++;
	      } else if (type === 'object' && value !== null && !Array.isArray(value)) {
	        if (!to) to = {};
	        var _extracted = extract(value);
	        if (_extracted) to[key] = _extracted;
	      }
	    }

	    return to;
	  }

	  var extracted = extract(styles);
	  return fnValuesCounter ? extracted : null;
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _warning = __webpack_require__(17);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function isObject(obj) {
	  return obj && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && !Array.isArray(obj);
	}

	/**
	 * Recursively extend styles.
	 */
	function extend(rule, newStyle, style) {
	  if (typeof style.extend == 'string') {
	    if (rule.options && rule.options.sheet) {
	      var refRule = rule.options.sheet.getRule(style.extend);
	      if (refRule) {
	        if (refRule === rule) (0, _warning2['default'])(false, '[JSS] A rule tries to extend itself \r\n%s', rule);else extend(rule, newStyle, refRule.originalStyle);
	      }
	    }
	  } else if (Array.isArray(style.extend)) {
	    for (var index = 0; index < style.extend.length; index++) {
	      extend(rule, newStyle, style.extend[index]);
	    }
	  } else {
	    for (var prop in style.extend) {
	      if (prop === 'extend') {
	        extend(rule, newStyle, style.extend.extend);
	      } else if (isObject(style.extend[prop])) {
	        if (!newStyle[prop]) newStyle[prop] = {};
	        extend(rule, newStyle[prop], style.extend[prop]);
	      } else {
	        newStyle[prop] = style.extend[prop];
	      }
	    }
	  }
	  // Copy base style.
	  for (var _prop in style) {
	    if (_prop === 'extend') continue;
	    if (isObject(newStyle[_prop]) && isObject(style[_prop])) {
	      extend(rule, newStyle[_prop], style[_prop]);
	    } else {
	      newStyle[_prop] = style[_prop];
	    }
	  }

	  return newStyle;
	}

	/**
	 * Handle `extend` property.
	 *
	 * @param {Rule} rule
	 * @api public
	 */

	exports['default'] = function () {
	  return function (rule) {
	    if (!rule.style || !rule.style.extend) return;
	    rule.style = extend(rule, {}, rule.style);
	  };
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = jssNested;

	var _warning = __webpack_require__(17);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var separatorRegExp = /\s*,\s*/g;
	var parentRegExp = /&/g;
	var refRegExp = /\$([\w-]+)/g;

	/**
	 * Convert nested rules to separate, remove them from original styles.
	 *
	 * @param {Rule} rule
	 * @api public
	 */
	function jssNested() {
	  // Get a function to be used for $ref replacement.
	  function getReplaceRef(container) {
	    return function (match, name) {
	      var rule = container.getRule(name);
	      if (rule) return rule.selector;
	      (0, _warning2.default)(false, '[JSS] Could not find the referenced rule %s. \r\n%s', name, rule);
	      return name;
	    };
	  }

	  var hasAnd = function hasAnd(str) {
	    return str.indexOf('&') !== -1;
	  };

	  function replaceParentRefs(nestedProp, parentProp) {
	    var parentSelectors = parentProp.split(separatorRegExp);
	    var nestedSelectors = nestedProp.split(separatorRegExp);

	    var result = '';

	    for (var i = 0; i < parentSelectors.length; i++) {
	      var parent = parentSelectors[i];

	      for (var j = 0; j < nestedSelectors.length; j++) {
	        var nested = nestedSelectors[j];
	        if (result) result += ', ';
	        // Replace all & by the parent or prefix & with the parent.
	        result += hasAnd(nested) ? nested.replace(parentRegExp, parent) : parent + ' ' + nested;
	      }
	    }

	    return result;
	  }

	  function getOptions(rule, container, options) {
	    // Options has been already created, now we only increase index.
	    if (options) return _extends({}, options, { index: options.index + 1 });

	    var nestingLevel = rule.options.nestingLevel;

	    nestingLevel = nestingLevel === undefined ? 1 : nestingLevel + 1;

	    return _extends({}, rule.options, {
	      nestingLevel: nestingLevel,
	      index: container.indexOf(rule) + 1
	    });
	  }

	  return function (rule) {
	    if (rule.type !== 'regular') return;
	    var container = rule.options.parent;
	    var options = void 0;
	    var replaceRef = void 0;

	    for (var prop in rule.style) {
	      var isNested = hasAnd(prop);
	      var isNestedConditional = prop[0] === '@';

	      if (!isNested && !isNestedConditional) continue;

	      options = getOptions(rule, container, options);

	      if (isNested) {
	        var selector = replaceParentRefs(prop, rule.selector);
	        // Lazily create the ref replacer function just once for
	        // all nested rules within the sheet.
	        if (!replaceRef) replaceRef = getReplaceRef(container);
	        // Replace all $refs.
	        selector = selector.replace(refRegExp, replaceRef);

	        container.addRule(selector, rule.style[prop], _extends({}, options, { selector: selector }));
	      } else if (isNestedConditional) {
	        // Place conditional right after the parent rule to ensure right ordering.
	        container.addRule(prop, _defineProperty({}, rule.name, rule.style[prop]), options);
	      }

	      delete rule.style[prop];
	    }
	  };
	}

/***/ },
/* 39 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var regExp = /([A-Z])/g;

	/**
	 * Replace a string passed from String#replace.
	 * @param {String} str
	 * @return {String}
	 */
	function replace(str) {
	  return "-" + str.toLowerCase();
	}

	/**
	 * Convert camel cased property names to dash separated.
	 *
	 * @param {Object} style
	 * @return {Object}
	 */
	function convertCase(style) {
	  var converted = {};

	  for (var prop in style) {
	    var value = style[prop];
	    prop = prop.replace(regExp, replace);
	    converted[prop] = value;
	  }

	  if (style.fallbacks) {
	    if (Array.isArray(style.fallbacks)) converted.fallbacks = style.fallbacks.map(convertCase);else converted.fallbacks = convertCase(style.fallbacks);
	  }

	  return converted;
	}

	/**
	 * Allow camel cased property names by converting them back to dasherized.
	 *
	 * @param {Rule} rule
	 */

	exports["default"] = function () {
	  return function (rule) {
	    var style = rule.style;

	    if (!style) return;

	    if (Array.isArray(style)) {
	      // Handle rules like @font-face, which can have multiple styles in an array
	      for (var index = 0; index < style.length; index++) {
	        style[index] = convertCase(style[index]);
	      }
	      return;
	    }

	    rule.style = convertCase(style);
	  };
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports['default'] = defaultUnit;

	var _defaultUnits = __webpack_require__(41);

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
/* 41 */
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

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports['default'] = jssVendorPrefixer;

	var _cssVendor = __webpack_require__(43);

	var vendor = _interopRequireWildcard(_cssVendor);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	/**
	 * Add vendor prefix to a property name when needed.
	 *
	 * @param {Rule} rule
	 * @api public
	 */
	function jssVendorPrefixer() {
	  return function (rule) {
	    if (rule.type === 'keyframe') {
	      rule.selector = '@' + vendor.prefix.css + rule.selector.substr(1);
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

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.supportedValue = exports.supportedProperty = exports.prefix = undefined;

	var _prefix = __webpack_require__(44);

	var _prefix2 = _interopRequireDefault(_prefix);

	var _supportedProperty = __webpack_require__(45);

	var _supportedProperty2 = _interopRequireDefault(_supportedProperty);

	var _supportedValue = __webpack_require__(47);

	var _supportedValue2 = _interopRequireDefault(_supportedValue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	exports['default'] = {
	  prefix: _prefix2['default'],
	  supportedProperty: _supportedProperty2['default'],
	  supportedValue: _supportedValue2['default']
	}; /**
	    * CSS Vendor prefix detection and property feature testing.
	    *
	    * @copyright Oleg Slobodskoi 2015
	    * @website https://github.com/jsstyles/css-vendor
	    * @license MIT
	    */

	exports.prefix = _prefix2['default'];
	exports.supportedProperty = _supportedProperty2['default'];
	exports.supportedValue = _supportedValue2['default'];

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _isInBrowser = __webpack_require__(15);

	var _isInBrowser2 = _interopRequireDefault(_isInBrowser);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var js = ''; /**
	              * Export javascript style and css style vendor prefixes.
	              * Based on "transform" support test.
	              */

	var css = '';

	// We should not do anything if required serverside.
	if (_isInBrowser2['default']) {
	  // Order matters. We need to check Webkit the last one because
	  // other vendors use to add Webkit prefixes to some properties
	  var jsCssMap = {
	    Moz: '-moz-',
	    // IE did it wrong again ...
	    ms: '-ms-',
	    O: '-o-',
	    Webkit: '-webkit-'
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

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports['default'] = supportedProperty;

	var _isInBrowser = __webpack_require__(15);

	var _isInBrowser2 = _interopRequireDefault(_isInBrowser);

	var _prefix = __webpack_require__(44);

	var _prefix2 = _interopRequireDefault(_prefix);

	var _camelize = __webpack_require__(46);

	var _camelize2 = _interopRequireDefault(_camelize);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var el = void 0;
	var cache = {};

	if (_isInBrowser2['default']) {
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
	    if (!isNaN(key)) cache[computed[key]] = computed[key];
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
	  // For server-side rendering.
	  if (!el) return prop;

	  // We have not tested this prop yet, lets do the test.
	  if (cache[prop] != null) return cache[prop];

	  // Camelization is required because we can't test using
	  // css syntax for e.g. in FF.
	  // Test if property is supported as it is.
	  if ((0, _camelize2['default'])(prop) in el.style) {
	    cache[prop] = prop;
	  }
	  // Test if property is supported with vendor prefix.
	  else if (_prefix2['default'].js + (0, _camelize2['default'])('-' + prop) in el.style) {
	      cache[prop] = _prefix2['default'].css + prop;
	    } else {
	      cache[prop] = false;
	    }

	  return cache[prop];
	}

/***/ },
/* 46 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
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

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports['default'] = supportedValue;

	var _isInBrowser = __webpack_require__(15);

	var _isInBrowser2 = _interopRequireDefault(_isInBrowser);

	var _prefix = __webpack_require__(44);

	var _prefix2 = _interopRequireDefault(_prefix);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var cache = {};
	var el = void 0;

	if (_isInBrowser2['default']) el = document.createElement('p');

	/**
	 * Returns prefixed value if needed. Returns `false` if value is not supported.
	 *
	 * @param {String} property
	 * @param {String} value
	 * @return {String|Boolean}
	 * @api public
	 */
	function supportedValue(property, value) {
	  // For server-side rendering.
	  if (!el) return value;

	  // It is a string or a number as a string like '1'.
	  // We want only prefixable values here.
	  if (typeof value !== 'string' || !isNaN(parseInt(value, 10))) return value;

	  var cacheKey = property + value;

	  if (cache[cacheKey] != null) return cache[cacheKey];

	  // IE can even throw an error in some cases, for e.g. style.content = 'bar'
	  try {
	    // Test value as it is.
	    el.style[property] = value;
	  } catch (err) {
	    cache[cacheKey] = false;
	    return false;
	  }

	  // Value is supported as it is.
	  if (el.style[property] !== '') {
	    cache[cacheKey] = value;
	  } else {
	    // Test value with vendor prefix.
	    value = _prefix2['default'].css + value;

	    // Hardcode test to convert "flex" to "-ms-flexbox" for IE10.
	    if (value === '-ms-flex') value = '-ms-flexbox';

	    el.style[property] = value;

	    // Value is supported with vendor prefix.
	    if (el.style[property] !== '') cache[cacheKey] = value;
	  }

	  if (!cache[cacheKey]) cache[cacheKey] = false;

	  // Reset style value.
	  el.style[property] = '';

	  return cache[cacheKey];
	}

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createElement = createElement;
	exports.minToY = minToY;

	var _conf = __webpack_require__(1);

	var _conf2 = _interopRequireDefault(_conf);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Create DOM node, set attributes.
	 *
	 * @param {String} name
	 * @param {Object} [attrs]
	 * @return Element
	 */
	function createElement(name, attrs) {
	  var element = document.createElement(name);

	  for (var _name in attrs) {
	    element.setAttribute(_name, attrs[_name]);
	  }

	  return element;
	}

	var MIN_IN_DAY = 12 * 60;

	/**
	 * Converts minutes to Y offset in px.
	 *
	 * @param {Number} min
	 * @return {Number}
	 */
	function minToY(min) {
	  return _conf2.default.height * min / MIN_IN_DAY;
	}

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _jss = __webpack_require__(10);

	var _jss2 = _interopRequireDefault(_jss);

	var _utils = __webpack_require__(48);

	var utils = _interopRequireWildcard(_utils);

	var _style = __webpack_require__(50);

	var style = _interopRequireWildcard(_style);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var sheet = _jss2.default.createStyleSheet(style.rules);

	var Canvas = function () {
	  /**
	   * Canvas is a container view events can be added to.
	   */
	  function Canvas() {
	    _classCallCheck(this, Canvas);

	    this.element = null;
	    this.contentElement = null;
	  }

	  /**
	   * Create canvas elements.
	   *
	   * @return {Canvas}
	   */


	  _createClass(Canvas, [{
	    key: 'create',
	    value: function create() {
	      sheet.attach();
	      this.element = utils.createElement('div', {
	        class: sheet.classes.canvas
	      });
	      this.contentElement = utils.createElement('div', {
	        class: sheet.classes.content
	      });
	      this.element.appendChild(this.contentElement);
	      return this;
	    }

	    /**
	     * Add event.
	     *
	     * @param {Event} event
	     * @return {Canvas}
	     */

	  }, {
	    key: 'add',
	    value: function add(event) {
	      this.contentElement.appendChild(event.element);
	      return this;
	    }

	    /**
	     * Get content width.
	     *
	     * @return {Number}
	     */

	  }, {
	    key: 'getContentWidth',
	    value: function getContentWidth() {
	      return this.contentElement.offsetWidth;
	    }
	  }]);

	  return Canvas;
	}();

	exports.default = Canvas;

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.rules = undefined;

	var _conf = __webpack_require__(1);

	var _conf2 = _interopRequireDefault(_conf);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var rules = exports.rules = {
	  canvas: {
	    flex: 1,
	    position: 'relative',
	    height: _conf2.default.height,
	    background: '#ececec',
	    borderLeft: '1px solid #d5d5d5',
	    boxSizing: 'border-box'
	  },
	  content: {
	    position: 'absolute',
	    left: 10,
	    right: 10,
	    top: 0,
	    bottom: 0
	  }
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _jss = __webpack_require__(10);

	var _jss2 = _interopRequireDefault(_jss);

	var _utils = __webpack_require__(48);

	var utils = _interopRequireWildcard(_utils);

	var _markerTpl = __webpack_require__(52);

	var markerTpl = _interopRequireWildcard(_markerTpl);

	var _style = __webpack_require__(53);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var sheet = _jss2.default.createStyleSheet(_style.rules);

	var Timeline = function () {
	  /**
	   * Creates a timeline view.
	   */
	  function Timeline(options) {
	    _classCallCheck(this, Timeline);

	    this.element = null;
	    this.start = options.start;
	    this.end = options.end;
	  }

	  /**
	   * Creates timeline elements.
	   *
	   * @return {Timeline}
	   */


	  _createClass(Timeline, [{
	    key: 'create',
	    value: function create() {
	      sheet.attach();
	      this.element = utils.createElement('div', {
	        class: sheet.classes.timeline
	      });

	      var fragment = document.createDocumentFragment();
	      for (var min = this.start; min < this.end; min += 30) {
	        fragment.appendChild(this.createMarker({
	          suffix: getSuffix(min),
	          time: formatTime(min),
	          min: min
	        }));
	      }
	      this.element.appendChild(fragment);
	      return this;
	    }

	    /**
	     * Create time marker element.
	     *
	     * @param {Obejct} options
	     * @return {Element}
	     */

	  }, {
	    key: 'createMarker',
	    value: function createMarker(options) {
	      var element = utils.createElement('div', {
	        class: sheet.classes.timeContainer
	      });
	      element.style.top = utils.minToY(options.min - this.start) + 'px';
	      element.innerHTML = markerTpl.compile({
	        time: options.time,
	        classes: sheet.classes,
	        suffix: options.suffix
	      });
	      return element;
	    }
	  }]);

	  return Timeline;
	}();

	/**
	 * Get PM/AM suffix.
	 *
	 * @param {Number} min
	 * @return {String}
	 */


	exports.default = Timeline;
	function getSuffix(min) {
	  var h = min / 60;
	  if (!isInt(h)) return false;
	  if (h < 12) return 'AM';
	  return 'PM';
	}

	/**
	 * Returns true if integer.
	 *
	 * @param {Number} n
	 * @return {Boolean}
	 */
	function isInt(n) {
	  return n % 1 === 0;
	}

	/**
	 * Format time according the layout.
	 *
	 * @param {Number} min
	 * @return {String}
	 */
	function formatTime(min) {
	  var h = min / 60;
	  if (h > 12.5) h -= 12;
	  return isInt(h) ? h + ':00' : Math.floor(h) + ':30';
	}

/***/ },
/* 52 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.compile = compile;
	/**
	 * Returns compiled template. Some template engine should be used in production
	 * use case.
	 *
	 * @param {Object} data
	 * @return {String}
	 */
	function compile(data) {
	  var classes = data.classes;

	  var timeClass = classes[data.suffix ? 'timeWithSuffix' : 'time'];
	  var html = '<span class="' + timeClass + '">' + data.time + '</span>';
	  if (data.suffix) {
	    html += '<span class="' + classes.time + '">' + data.suffix + '</span>';
	  }
	  return html;
	}

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.rules = exports.width = undefined;

	var _conf = __webpack_require__(1);

	var _conf2 = _interopRequireDefault(_conf);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var width = exports.width = 75;

	var rules = exports.rules = {
	  timeline: {
	    position: 'relative',
	    flexShrink: 0,
	    width: width,
	    height: _conf2.default.height,
	    padding: '0 7px 0 0',
	    boxSizing: 'border-box',
	    // Middle of the number should be the start.
	    marginTop: -_conf2.default.fontSize / 2
	  },
	  timeContainer: {
	    position: 'absolute',
	    width: '100%',
	    paddingRight: 10,
	    textAlign: 'right',
	    boxSizing: 'border-box',
	    cursor: 'pointer',
	    '&:hover span': {
	      color: '#4b6ea8'
	    }
	  },
	  time: {
	    fontSize: 10,
	    color: '#999'
	  },
	  timeWithSuffix: {
	    fontSize: 13,
	    fontWeight: 'bold',
	    marginRight: 5
	  }
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _event = __webpack_require__(55);

	var _event2 = _interopRequireDefault(_event);

	var _distribute = __webpack_require__(58);

	var _distribute2 = _interopRequireDefault(_distribute);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Handles events creation and distribution.
	 */
	var EventsManager = function () {
	  function EventsManager(canvas) {
	    _classCallCheck(this, EventsManager);

	    this.canvas = canvas;
	    this.events = [];
	  }

	  /**
	   * Destroy previously rendered events.
	   *
	   * @return {EventsManager}
	   */


	  _createClass(EventsManager, [{
	    key: 'destroy',
	    value: function destroy() {
	      this.events.forEach(function (event) {
	        return event.destroy();
	      });
	      return this;
	    }

	    /**
	     * Render events at the right position and the right size.
	     *
	     * @param {Array} events
	     * @return {EventsManager}
	     */

	  }, {
	    key: 'set',
	    value: function set(events) {
	      this.events = events.map(function (options) {
	        return new _event2.default(options);
	      });
	      return this;
	    }

	    /**
	     * Render events at the right position and the right size.
	     *
	     * @return {EventsManager}
	     */

	  }, {
	    key: 'render',
	    value: function render() {
	      var _this = this;

	      (0, _distribute2.default)(this.events, this.canvas).forEach(function (event) {
	        event.create();
	        _this.canvas.add(event);
	      });
	      return this;
	    }
	  }]);

	  return EventsManager;
	}();

	exports.default = EventsManager;

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _jss = __webpack_require__(10);

	var _jss2 = _interopRequireDefault(_jss);

	var _utils = __webpack_require__(48);

	var utils = _interopRequireWildcard(_utils);

	var _contentTpl = __webpack_require__(56);

	var contentTpl = _interopRequireWildcard(_contentTpl);

	var _style = __webpack_require__(57);

	var _style2 = _interopRequireDefault(_style);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var sheet = _jss2.default.createStyleSheet(_style2.default);

	var uid = 0;

	var Event = function () {
	  /**
	   * Event view constructor.
	   * @param {Object} options
	   */
	  function Event(options) {
	    _classCallCheck(this, Event);

	    this.id = ++uid;
	    this.start = options.start;
	    this.end = options.end;
	    this.title = options.title || 'Sample Item';
	    this.location = options.location || 'Sample Location';
	    this.element = null;
	    this.style = null;
	  }

	  /**
	   * Create elements.
	   *
	   * @return {Event}
	   */


	  _createClass(Event, [{
	    key: 'create',
	    value: function create() {
	      sheet.attach();
	      this.element = utils.createElement('div', {
	        class: sheet.classes.event
	      });
	      this.element.innerHTML = contentTpl.compile({
	        classes: sheet.classes,
	        title: this.title,
	        location: this.location
	      });
	      for (var key in this.style) {
	        this.element.style[key] = this.style[key];
	      }
	      return this;
	    }

	    /**
	     * Destroy event.
	     *
	     * @return {Event}
	     */

	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      this.element.parentNode.removeChild(this.element);
	      return this;
	    }

	    /**
	     * Set inline style.
	     *
	     * @return {Event}
	     */

	  }, {
	    key: 'setStyle',
	    value: function setStyle(style) {
	      this.style = style;
	      return this;
	    }
	  }]);

	  return Event;
	}();

	exports.default = Event;

/***/ },
/* 56 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.compile = compile;
	/**
	 * Returns compiled html for event content.
	 *
	 * @param {Object} data
	 * @return {String}
	 */
	function compile(data) {
	  var classes = data.classes;

	  return "\n    <div class=\"" + classes.content + "\">\n      <h3 class=\"" + classes.title + "\">" + data.title + "</h3>\n      <div class=\"" + classes.location + "\">" + data.location + "</div>\n    </div>\n  ";
	}

/***/ },
/* 57 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  event: {
	    position: 'absolute',
	    background: '#fff',
	    borderLeft: '4px solid #4b6ea8',
	    boxSizing: 'border-box'
	  },
	  content: {
	    padding: 7,
	    overflow: 'hidden',
	    height: '100%',
	    border: '1px solid #d5d5d5',
	    borderLeft: 'none',
	    boxSizing: 'border-box',
	    cursor: 'pointer',
	    '&:hover': {
	      borderColor: '#4b6ea8'
	    }
	  },
	  title: {
	    color: '#4b6ea8',
	    margin: 0,
	    fontSize: '1em'
	  },
	  location: {
	    fontSize: '0.8em'
	  },
	  '@media (max-width: 600px)': {
	    event: {
	      borderColor: 'green'
	    },
	    content: {
	      '&:hover': {
	        borderColor: 'green'
	      }
	    },
	    title: {
	      color: 'green'
	    }
	  }
	};

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = distribute;

	var _utils = __webpack_require__(48);

	var utils = _interopRequireWildcard(_utils);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	/**
	 * Distribute events within canvas.
	 *
	 * - No events may visually overlap.
	 * - If two events collide in time, they MUST have the same width.
	 *   This is an invariant. Call this width W.
	 * - W should be the maximum value possible without breaking the previous invariant.
	 *
	 * @param {Array} events
	 * @param {Canvas} canvas
	 * @return {Array} events
	 */
	function distribute(events, canvas) {
	  function setStyle(column, nr, columns) {
	    var width = canvas.getContentWidth() / columns.length;
	    column.forEach(function (event) {
	      var top = utils.minToY(event.start);
	      var height = utils.minToY(event.end) - top;
	      event.setStyle({
	        width: width + 'px',
	        height: height + 'px',
	        top: top + 'px',
	        left: nr * width + 'px'
	      });
	    });
	  }

	  createGroups(events).forEach(function (group) {
	    createColumns(group).forEach(setStyle);
	  });

	  return events;
	}

	/**
	 * Create groups of events which do not overlap. Events within this groups
	 * will be rendered in columns if they overlap.
	 *
	 * @param {Array} events
	 * @return {Array}
	 */
	function createGroups(events) {
	  var groups = [];
	  var eventGroupMap = {};

	  events.forEach(function (event) {
	    var group = eventGroupMap[event.id];
	    if (!group) {
	      group = eventGroupMap[event.id] = [event];
	      groups.push(group);
	    }

	    events.forEach(function (_event) {
	      if (_event === event) return;
	      if (collide(event, _event)) {
	        if (!eventGroupMap[_event.id]) {
	          eventGroupMap[_event.id] = group;
	          group.push(_event);
	        }
	      }
	    });
	  });

	  return groups;
	}

	/**
	 * Create columns within a group. To avoid visual overlap.
	 *
	 * @param {Array} events
	 * @return {Array}
	 */
	function createColumns(group) {
	  var columns = [];
	  var eventStackMap = {};

	  group.forEach(function (event) {
	    var column = eventStackMap[event.id];
	    if (!column) {
	      column = eventStackMap[event.id] = [event];
	      columns.push(column);
	    }

	    group.forEach(function (_event) {
	      if (_event === event) return;
	      if (!collide(event, _event)) {
	        if (!eventStackMap[_event.id]) {
	          eventStackMap[_event.id] = column;
	          column.push(_event);
	        }
	      }
	    });
	  });

	  return columns;
	}

	/**
	 * Check if 2 events collide in time.
	 *
	 * @param {Event} event1
	 * @param {Event} event2
	 * @return {Boolean}
	 */
	function collide(event1, event2) {
	  var startInside = event1.start >= event2.start && event1.start <= event2.end;
	  var endInside = event1.end <= event2.end && event1.end > event2.start;
	  return startInside || endInside;
	}

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _conf = __webpack_require__(1);

	var _conf2 = _interopRequireDefault(_conf);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  calendar: {
	    display: 'flex',
	    fontSize: _conf2.default.fontSize,
	    color: '#686868'
	  }
	};

/***/ }
/******/ ])
});
;
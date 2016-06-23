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

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.createCalendar = createCalendar;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _componentsConf = __webpack_require__(1);

	var _componentsConf2 = _interopRequireDefault(_componentsConf);

	var _componentsCalendar = __webpack_require__(2);

	var _componentsCalendar2 = _interopRequireDefault(_componentsCalendar);

	function createCalendar() {
	  return new _componentsCalendar2['default'](_componentsConf2['default']).create();
	}

/***/ },
/* 1 */
/***/ function(module, exports) {

	/**
	 * Configuration shared between all components.
	 *
	 * @type {Object}
	 */
	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = {
	  fontSize: 16,
	  height: 720,
	  timeline: {
	    start: 540,
	    end: 1290
	  }
	};
	module.exports = exports["default"];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _lodashFunctionDebounce = __webpack_require__(3);

	var _lodashFunctionDebounce2 = _interopRequireDefault(_lodashFunctionDebounce);

	var _jss = __webpack_require__(10);

	var _jss2 = _interopRequireDefault(_jss);

	var _utils = __webpack_require__(37);

	var utils = _interopRequireWildcard(_utils);

	var _canvas = __webpack_require__(38);

	var _canvas2 = _interopRequireDefault(_canvas);

	var _timeline = __webpack_require__(40);

	var _timeline2 = _interopRequireDefault(_timeline);

	var _eventsManager = __webpack_require__(43);

	var _eventsManager2 = _interopRequireDefault(_eventsManager);

	var _style = __webpack_require__(48);

	var _style2 = _interopRequireDefault(_style);

	var sheet = _jss2['default'].createStyleSheet(_style2['default']);

	var Calendar = (function () {
	  /**
	   * Creates a new calendar view.
	   */

	  function Calendar(options) {
	    _classCallCheck(this, Calendar);

	    this.timeline = new _timeline2['default'](options.timeline);
	    this.canvas = new _canvas2['default']();
	    this.manager = new _eventsManager2['default'](this.canvas);
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
	        'class': sheet.classes.calendar
	      });
	      this.timeline.create();
	      this.canvas.create();
	      this.element.appendChild(this.timeline.element);
	      this.element.appendChild(this.canvas.element);
	      window.addEventListener('resize', (0, _lodashFunctionDebounce2['default'])(this.onResizeWindow.bind(this), 50));
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
	})();

	exports['default'] = Calendar;
	module.exports = exports['default'];

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

	// Setup jss plugins.
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _jss = __webpack_require__(11);

	var _jssExtend = __webpack_require__(27);

	var _jssExtend2 = _interopRequireDefault(_jssExtend);

	var _jssNested = __webpack_require__(28);

	var _jssNested2 = _interopRequireDefault(_jssNested);

	var _jssCamelCase = __webpack_require__(29);

	var _jssCamelCase2 = _interopRequireDefault(_jssCamelCase);

	var _jssDefaultUnit = __webpack_require__(30);

	var _jssDefaultUnit2 = _interopRequireDefault(_jssDefaultUnit);

	var _jssVendorPrefixer = __webpack_require__(31);

	var _jssVendorPrefixer2 = _interopRequireDefault(_jssVendorPrefixer);

	var jss = (0, _jss.create)();

	jss.use((0, _jssExtend2['default'])());
	jss.use((0, _jssNested2['default'])());
	jss.use((0, _jssCamelCase2['default'])());
	jss.use((0, _jssDefaultUnit2['default'])());
	jss.use((0, _jssVendorPrefixer2['default'])());

	exports['default'] = jss;
	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Rule = exports.StyleSheet = exports.Jss = undefined;

	var _Jss = __webpack_require__(12);

	var _Jss2 = _interopRequireDefault(_Jss);

	var _StyleSheet = __webpack_require__(13);

	var _StyleSheet2 = _interopRequireDefault(_StyleSheet);

	var _Rule = __webpack_require__(17);

	var _Rule2 = _interopRequireDefault(_Rule);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var jss = new _Jss2.default();

	// Hotfix for babel 5 migration, will be removed in version 4.0.0
	/**
	 * StyleSheets written in javascript.
	 *
	 * @copyright Oleg Slobodskoi 2014-2016
	 * @website https://github.com/jsstyles/jss
	 * @license MIT
	 */
	module.exports = exports = jss;

	// For testing only.
	exports.Jss = _Jss2.default;
	exports.StyleSheet = _StyleSheet2.default;
	exports.Rule = _Rule2.default;
	exports.default = jss;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _StyleSheet = __webpack_require__(13);

	var _StyleSheet2 = _interopRequireDefault(_StyleSheet);

	var _PluginsRegistry = __webpack_require__(25);

	var _PluginsRegistry2 = _interopRequireDefault(_PluginsRegistry);

	var _SheetsRegistry = __webpack_require__(26);

	var _SheetsRegistry2 = _interopRequireDefault(_SheetsRegistry);

	var _createRule2 = __webpack_require__(16);

	var _createRule3 = _interopRequireDefault(_createRule2);

	var _findRenderer = __webpack_require__(22);

	var _findRenderer2 = _interopRequireDefault(_findRenderer);

	var _utils = __webpack_require__(14);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Main Jss class.
	 *
	 * @api public
	 */

	var Jss = function () {
	  /**
	   * Options:
	   * - `generateClassName` accepts a styles string and a Rule instance.
	   */

	  function Jss() {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    _classCallCheck(this, Jss);

	    this.sheets = new _SheetsRegistry2.default();
	    this.plugins = new _PluginsRegistry2.default();
	    this.version = '3.11.1';
	    this.generateClassName = options.generateClassName || _utils.generateClassName;
	  }

	  /**
	   * Creates a new instance of Jss.
	   *
	   * @see Jss
	   * @api public
	   */


	  _createClass(Jss, [{
	    key: 'create',
	    value: function create(options) {
	      return new Jss(options);
	    }

	    /**
	     * Create a stylesheet.
	     *
	     * @see StyleSheet
	     * @api public
	     */

	  }, {
	    key: 'createStyleSheet',
	    value: function createStyleSheet(rules, options) {
	      var sheet = new _StyleSheet2.default(rules, _extends({}, options, { jss: this }));
	      this.sheets.add(sheet);
	      return sheet;
	    }

	    /**
	     * Create a rule.
	     *
	     * @see createRule
	     * @api public
	     */

	  }, {
	    key: 'createRule',
	    value: function createRule(selector, style, options) {
	      // Enable rule without selector.
	      if ((typeof selector === 'undefined' ? 'undefined' : _typeof(selector)) == 'object') {
	        options = style;
	        style = selector;
	        selector = null;
	      }
	      var rule = (0, _createRule3.default)(selector, style, _extends({}, options, {
	        jss: this,
	        Renderer: (0, _findRenderer2.default)(options)
	      }));
	      this.plugins.run(rule);
	      return rule;
	    }

	    /**
	     * Register plugin. Passed function will be invoked with a rule instance.
	     *
	     * @param {Function} plugins
	     * @api public
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

	exports.default = Jss;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _utils = __webpack_require__(14);

	var _createRule = __webpack_require__(16);

	var _createRule2 = _interopRequireDefault(_createRule);

	var _findRenderer = __webpack_require__(22);

	var _findRenderer2 = _interopRequireDefault(_findRenderer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * StyleSheet model.
	 *
	 * Options:
	 *
	 * - `media` media query - attribute of style element.
	 * - `meta` meta information about this style - attribute of style element, for e.g. you could pass
	 * component name for easier debugging.
	 * - `named` true by default - keys are names, selectors will be generated, if false - keys are
	 * global selectors.
	 * - `link` link jss `Rule` instances with DOM `CSSRule` instances so that styles, can be modified
	 * dynamically, false by default because it has some performance cost.
	 * - `element` style element, will create one by default
	 *
	 * @param {Object} [rules] object with selectors and declarations
	 * @param {Object} [options]
	 * @api public
	 */

	var StyleSheet = function () {
	  function StyleSheet(rules, options) {
	    _classCallCheck(this, StyleSheet);

	    this.options = _extends({}, options);
	    if (this.options.named == null) this.options.named = true;
	    this.rules = Object.create(null);
	    this.classes = Object.create(null);
	    this.attached = false;
	    this.deployed = false;
	    this.linked = false;

	    var Renderer = (0, _findRenderer2.default)(this.options);
	    this.options.Renderer = Renderer;
	    this.renderer = new Renderer(this.options);

	    for (var name in rules) {
	      this.createAndRegisterRule(name, rules[name]);
	    }
	    for (var _name in this.rules) {
	      this.options.jss.plugins.run(this.rules[_name]);
	    }
	  }

	  /**
	   * Attach renderable to the render tree.
	   *
	   * @api public
	   * @return {StyleSheet}
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
	     *
	     * @return {StyleSheet}
	     * @api public
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
	     * Add a rule to the current stylesheet. Will insert a rule also after the stylesheet
	     * has been rendered first time.
	     *
	     * @param {Object} [name] can be selector or name if ´options.named is true
	     * @param {Object} style property/value hash
	     * @return {Rule}
	     * @api public
	     */

	  }, {
	    key: 'addRule',
	    value: function addRule(name, style) {
	      var rule = this.createRule(name, style);
	      // Don't insert rule directly if there is no stringified version yet.
	      // It will be inserted all together when .attach is called.
	      if (this.deployed) {
	        var renderable = this.renderer.insertRule(rule);
	        if (this.options.link) rule.renderable = renderable;
	      }
	      return rule;
	    }

	    /**
	     * Create rules, will render also after stylesheet was rendered the first time.
	     *
	     * @param {Object} rules name:style hash.
	     * @return {Array} array of added rules
	     * @api public
	     */

	  }, {
	    key: 'addRules',
	    value: function addRules(rules) {
	      var added = [];
	      for (var name in rules) {
	        added.push(this.addRule(name, rules[name]));
	      }
	      return added;
	    }

	    /**
	     * Get a rule.
	     *
	     * @param {String} name can be selector or name if `named` option is true.
	     * @return {Rule}
	     * @api public
	     */

	  }, {
	    key: 'getRule',
	    value: function getRule(name) {
	      return this.rules[name];
	    }

	    /**
	     * Convert rules to a CSS string.
	     *
	     * @param {Object} options
	     * @return {String}
	     * @api public
	     */

	  }, {
	    key: 'toString',
	    value: function toString(options) {
	      var rules = this.rules;

	      var stringified = [];
	      var str = '';
	      for (var name in rules) {
	        var rule = rules[name];
	        // We have the same rule referenced twice if using named rules.
	        // By name and by selector.
	        if (stringified.indexOf(rule) !== -1) {
	          continue;
	        }

	        if (rule.style && (0, _utils.isEmptyObject)(rule.style)) {
	          continue;
	        }

	        if (rule.rules && (0, _utils.isEmptyObject)(rule.rules)) {
	          continue;
	        }

	        if (str) str += '\n';

	        str += rule.toString(options);
	        stringified.push(rule);
	      }
	      return str;
	    }

	    /**
	     * Create and register a rule.
	     *
	     * @see createRule
	     * @api private
	     */

	  }, {
	    key: 'createAndRegisterRule',
	    value: function createAndRegisterRule(name, style, options) {
	      options = _extends({}, options, {
	        sheet: this,
	        jss: this.options.jss,
	        Renderer: this.options.Renderer
	      });
	      // Scope options overwrite instance options.
	      if (options.named == null) options.named = this.options.named;
	      var rule = (0, _createRule2.default)(name, style, options);
	      this.registerRule(rule);
	      return rule;
	    }

	    /**
	     * Create and register rule, run plugins.
	     *
	     * Will not render after stylesheet was rendered the first time.
	     * Will link the rule in `this.rules`.
	     *
	     * @see createRule
	     * @api public
	     */

	  }, {
	    key: 'createRule',
	    value: function createRule(name, style, options) {
	      var rule = this.createAndRegisterRule(name, style, options);
	      this.options.jss.plugins.run(rule);
	      return rule;
	    }

	    /**
	     * Register a rule in `sheet.rules` and `sheet.classes` maps.
	     *
	     * @param {Rule} rule
	     * @api public
	     */

	  }, {
	    key: 'registerRule',
	    value: function registerRule(rule) {
	      // Children of container rules should not be registered.
	      if (rule.options.parent) {
	        // We need to register child rules of conditionals in classes, otherwise
	        // user can't access generated class name if it doesn't overrides
	        // a regular rule.
	        if (rule.name && rule.className) {
	          this.classes[rule.name] = rule.className;
	        }
	        return this;
	      }

	      if (rule.name) {
	        this.rules[rule.name] = rule;
	        if (rule.className) this.classes[rule.name] = rule.className;
	      }
	      if (rule.selector) {
	        this.rules[rule.selector] = rule;
	      }
	      return this;
	    }

	    /**
	     * Unregister a rule.
	     *
	     * @param {Rule} rule
	     * @api public
	     */

	  }, {
	    key: 'unregisterRule',
	    value: function unregisterRule(rule) {
	      // Children of a conditional rule are not registered.
	      if (!rule.options.parent) {
	        delete this.rules[rule.name];
	        delete this.rules[rule.selector];
	      }
	      delete this.classes[rule.name];
	      return this;
	    }

	    /**
	     * Deploy pure CSS string to a renderable.
	     *
	     * @return {StyleSheet}
	     * @api private
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
	     *
	     * @return {StyleSheet}
	     * @api private
	     */

	  }, {
	    key: 'link',
	    value: function link() {
	      var renderables = this.renderer.getRules();
	      for (var selector in renderables) {
	        var rule = this.rules[selector];
	        if (rule) rule.renderable = renderables[selector];
	      }
	      this.linked = true;
	      return this;
	    }
	  }]);

	  return StyleSheet;
	}();

	exports.default = StyleSheet;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.findClassNames = undefined;
	exports.generateClassName = generateClassName;
	exports.isEmptyObject = isEmptyObject;
	exports.toCSS = toCSS;

	var _murmurhash3_gc = __webpack_require__(15);

	var _murmurhash3_gc2 = _interopRequireDefault(_murmurhash3_gc);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Generates a class name using murmurhash.
	 *
	 * @param {String} str
	 * @param {Rule} rule
	 * @return {String}
	 */
	function generateClassName(str, rule) {
	  var hash = (0, _murmurhash3_gc2.default)(str);
	  return rule.name ? rule.name + '-' + hash : hash;
	}

	/**
	 * Determine whether an object is empty or not.
	 * More performant than a `Object.keys(obj).length > 0`
	 *
	 * @param {Object} obj
	 * @return {Boolean}
	 */
	function isEmptyObject(obj) {
	  for (var key in obj) {
	    return false;
	  } // eslint-disable-line no-unused-vars

	  return true;
	}

	/**
	 * Indent a string.
	 *
	 * http://jsperf.com/array-join-vs-for
	 *
	 * @param {Number} level
	 * @param {String} str
	 * @return {String}
	 */
	function indent(level, str) {
	  var indentStr = '';
	  for (var index = 0; index < level; index++) {
	    indentStr += '  ';
	  }return indentStr + str;
	}

	/**
	 * Converts a Rule to CSS string.
	 *
	 * Options:
	 * - `selector` use `false` to get a rule without selector
	 * - `indentationLevel` level of indentation
	 *
	 * @param {String} selector
	 * @param {Object} style
	 * @param {Object} options
	 * @return {String}
	 */
	function toCSS(selector, style) {
	  var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

	  var indentationLevel = options.indentationLevel || 0;
	  var str = '';

	  if (options.selector !== false) {
	    str += indent(indentationLevel, selector + ' {');
	    indentationLevel++;
	  }

	  for (var prop in style) {
	    var value = style[prop];
	    // We want to generate multiple style with identical property names.
	    if (Array.isArray(value)) {
	      for (var index = 0; index < value.length; index++) {
	        str += '\n' + indent(indentationLevel, prop + ': ' + value[index] + ';');
	      }
	    } else str += '\n' + indent(indentationLevel, prop + ': ' + value + ';');
	  }

	  if (options.selector !== false) str += '\n' + indent(--indentationLevel, '}');

	  return str;
	}

	/**
	 * Get class names from a selector.
	 *
	 * @param {String} selector
	 * @return {String}
	 */
	var findClassNames = exports.findClassNames = function () {
	  var dotsRegExp = /[.]/g;
	  var classesRegExp = /[.][^ ,]+/g;

	  return function (selector) {
	    var classes = selector.match(classesRegExp);

	    if (!classes) return '';

	    return classes.join(' ').replace(dotsRegExp, '');
	  };
	}();

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * JS Implementation of MurmurHash3 (r136) (as of May 20, 2011)
	 * 
	 * @author <a href="mailto:gary.court@gmail.com">Gary Court</a>
	 * @see http://github.com/garycourt/murmurhash-js
	 * @author <a href="mailto:aappleby@gmail.com">Austin Appleby</a>
	 * @see http://sites.google.com/site/murmurhash/
	 * 
	 * @param {string} key ASCII only
	 * @param {number} seed Positive integer only
	 * @return {number} 32-bit positive integer hash 
	 */

	function murmurhash3_32_gc(key, seed) {
		var remainder, bytes, h1, h1b, c1, c1b, c2, c2b, k1, i;
		
		remainder = key.length & 3; // key.length % 4
		bytes = key.length - remainder;
		h1 = seed;
		c1 = 0xcc9e2d51;
		c2 = 0x1b873593;
		i = 0;
		
		while (i < bytes) {
		  	k1 = 
		  	  ((key.charCodeAt(i) & 0xff)) |
		  	  ((key.charCodeAt(++i) & 0xff) << 8) |
		  	  ((key.charCodeAt(++i) & 0xff) << 16) |
		  	  ((key.charCodeAt(++i) & 0xff) << 24);
			++i;
			
			k1 = ((((k1 & 0xffff) * c1) + ((((k1 >>> 16) * c1) & 0xffff) << 16))) & 0xffffffff;
			k1 = (k1 << 15) | (k1 >>> 17);
			k1 = ((((k1 & 0xffff) * c2) + ((((k1 >>> 16) * c2) & 0xffff) << 16))) & 0xffffffff;

			h1 ^= k1;
	        h1 = (h1 << 13) | (h1 >>> 19);
			h1b = ((((h1 & 0xffff) * 5) + ((((h1 >>> 16) * 5) & 0xffff) << 16))) & 0xffffffff;
			h1 = (((h1b & 0xffff) + 0x6b64) + ((((h1b >>> 16) + 0xe654) & 0xffff) << 16));
		}
		
		k1 = 0;
		
		switch (remainder) {
			case 3: k1 ^= (key.charCodeAt(i + 2) & 0xff) << 16;
			case 2: k1 ^= (key.charCodeAt(i + 1) & 0xff) << 8;
			case 1: k1 ^= (key.charCodeAt(i) & 0xff);
			
			k1 = (((k1 & 0xffff) * c1) + ((((k1 >>> 16) * c1) & 0xffff) << 16)) & 0xffffffff;
			k1 = (k1 << 15) | (k1 >>> 17);
			k1 = (((k1 & 0xffff) * c2) + ((((k1 >>> 16) * c2) & 0xffff) << 16)) & 0xffffffff;
			h1 ^= k1;
		}
		
		h1 ^= key.length;

		h1 ^= h1 >>> 16;
		h1 = (((h1 & 0xffff) * 0x85ebca6b) + ((((h1 >>> 16) * 0x85ebca6b) & 0xffff) << 16)) & 0xffffffff;
		h1 ^= h1 >>> 13;
		h1 = ((((h1 & 0xffff) * 0xc2b2ae35) + ((((h1 >>> 16) * 0xc2b2ae35) & 0xffff) << 16))) & 0xffffffff;
		h1 ^= h1 >>> 16;

		return h1 >>> 0;
	}

	if(true) {
	  module.exports = murmurhash3_32_gc
	}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = createRule;

	var _Rule = __webpack_require__(17);

	var _Rule2 = _interopRequireDefault(_Rule);

	var _SimpleRule = __webpack_require__(18);

	var _SimpleRule2 = _interopRequireDefault(_SimpleRule);

	var _KeyframeRule = __webpack_require__(19);

	var _KeyframeRule2 = _interopRequireDefault(_KeyframeRule);

	var _ConditionalRule = __webpack_require__(20);

	var _ConditionalRule2 = _interopRequireDefault(_ConditionalRule);

	var _FontFaceRule = __webpack_require__(21);

	var _FontFaceRule2 = _interopRequireDefault(_FontFaceRule);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Map of at rules to corresponding implementation class.
	 *
	 * @type {Object}
	 */
	var atRuleClassMap = {
	  '@charset': _SimpleRule2.default,
	  '@import': _SimpleRule2.default,
	  '@namespace': _SimpleRule2.default,
	  '@keyframes': _KeyframeRule2.default,
	  '@media': _ConditionalRule2.default,
	  '@supports': _ConditionalRule2.default,
	  '@font-face': _FontFaceRule2.default
	};

	var atRuleNameRegExp = /^@[^ ]+/;

	/**
	 * Create rule factory.
	 *
	 * @param {Object} [selector] if you don't pass selector - it will be generated
	 * @param {Object} [style] declarations block
	 * @param {Object} [options] rule options
	 * @return {Object} rule
	 * @api private
	 */
	function createRule(selector) {
	  var style = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	  var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

	  // Is an at-rule.
	  if (selector && selector[0] === '@') {
	    var name = atRuleNameRegExp.exec(selector)[0];
	    var AtRule = atRuleClassMap[name];
	    return new AtRule(selector, style, options);
	  }

	  if (options.named == null) options.named = true;
	  return new _Rule2.default(selector, style, options);
	}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _utils = __webpack_require__(14);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var parse = JSON.parse;
	var stringify = JSON.stringify;

	/**
	 * Regular rules.
	 *
	 * @api public
	 */

	var Rule = function () {
	  function Rule(selector, style, options) {
	    _classCallCheck(this, Rule);

	    // We expect style to be plain object.
	    // To avoid original style object mutations, we clone it and hash it
	    // along the way.
	    // It is also the fastetst way.
	    // http://jsperf.com/lodash-deepclone-vs-jquery-extend-deep/6
	    var styleStr = stringify(style);
	    this.style = parse(styleStr);
	    this.type = 'regular';
	    this.options = options;
	    this.selectorText = selector || '';
	    this.className = options.className || '';
	    this.originalStyle = style;
	    if (options.named) {
	      this.name = selector;
	      if (!this.className) {
	        this.className = options.jss.generateClassName(styleStr, this);
	      }
	      this.selectorText = '.' + this.className;
	    }
	  }

	  /**
	   * Set selector string.
	   * Attenition: use this with caution. Most browser didn't implement selector
	   * text setter, so this will result in rerendering of entire style sheet.
	   *
	   * @param {String} selector
	   * @api public
	   */


	  _createClass(Rule, [{
	    key: 'prop',


	    /**
	     * Get or set a style property.
	     *
	     * @param {String} name
	     * @param {String|Number} [value]
	     * @return {Rule|String|Number}
	     * @api public
	     */
	    value: function prop(name, value) {
	      var style = this.options.Renderer.style;
	      // Its a setter.

	      if (value != null) {
	        this.style[name] = value;
	        // Only defined if option linked is true.
	        if (this.renderable) style(this.renderable, name, value);
	        return this;
	      }
	      // Its a getter, read the value from the DOM if its not cached.
	      if (this.renderable && this.style[name] == null) {
	        // Cache the value after we have got it from the DOM once.
	        this.style[name] = style(this.renderable, name);
	      }
	      return this.style[name];
	    }

	    /**
	     * Apply rule to an element inline.
	     *
	     * @param {Element} renderable
	     * @return {Rule}
	     * @api public
	     */

	  }, {
	    key: 'applyTo',
	    value: function applyTo(renderable) {
	      for (var prop in this.style) {
	        var value = this.style[prop];
	        var style = this.options.Renderer.style;

	        if (Array.isArray(value)) {
	          for (var index = 0; index < value.length; index++) {
	            style(renderable, prop, value[index]);
	          }
	        } else style(renderable, prop, value);
	      }
	      return this;
	    }

	    /**
	     * Returns JSON representation of the rule.
	     * Array of values is not supported.
	     *
	     * @return {Object}
	     * @api public
	     */

	  }, {
	    key: 'toJSON',
	    value: function toJSON() {
	      var style = Object.create(null);
	      for (var prop in this.style) {
	        if (_typeof(this.style[prop]) != 'object') {
	          style[prop] = this.style[prop];
	        }
	      }
	      return style;
	    }

	    /**
	     * Generates a CSS string.
	     *
	     * @see toCSS
	     * @api public
	     */

	  }, {
	    key: 'toString',
	    value: function toString(options) {
	      return (0, _utils.toCSS)(this.selector, this.style, options);
	    }
	  }, {
	    key: 'selector',
	    set: function set() {
	      var selector = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
	      var _options = this.options;
	      var Renderer = _options.Renderer;
	      var sheet = _options.sheet;

	      // After we modify selector, ref by old selector needs to be removed.

	      if (sheet) sheet.unregisterRule(this);

	      this.selectorText = selector;
	      this.className = (0, _utils.findClassNames)(selector);

	      if (!this.renderable) {
	        // Register the rule with new selector.
	        if (sheet) sheet.registerRule(this);
	        return;
	      }

	      var changed = Renderer.setSelector(this.renderable, selector);

	      if (changed) {
	        sheet.registerRule(this);
	        return;
	      }

	      // If selector setter is not implemented, rerender the sheet.
	      // We need to delete renderable from the rule, because when sheet.deploy()
	      // calls rule.toString, it will get the old selector.
	      delete this.renderable;
	      sheet.registerRule(this).deploy().link();
	    }

	    /**
	     * Get selector string.
	     *
	     * @return {String}
	     * @api public
	     */
	    ,
	    get: function get() {
	      if (this.renderable) {
	        return this.options.Renderer.getSelector(this.renderable);
	      }

	      return this.selectorText;
	    }
	  }]);

	  return Rule;
	}();

	exports.default = Rule;

/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Rule like @charset, @import, @namespace.
	 *
	 * @api public
	 */

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
	   *
	   * @return {String}
	   * @api public
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

	exports.default = SimpleRule;

/***/ },
/* 19 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Keyframe rule.
	 *
	 * @api private
	 */

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
	   *
	   * @api private
	   */


	  _createClass(KeyframeRule, [{
	    key: 'formatFrames',
	    value: function formatFrames(frames) {
	      var newFrames = Object.create(null);
	      for (var name in frames) {
	        var options = _extends({}, this.options, { named: false, parent: this });
	        newFrames[name] = this.options.jss.createRule(name, frames[name], options);
	      }
	      return newFrames;
	    }

	    /**
	     * Generates a CSS string.
	     *
	     * @return {String}
	     * @api private
	     */

	  }, {
	    key: 'toString',
	    value: function toString() {
	      var str = this.selector + ' {\n';
	      var options = { indentationLevel: 1 };
	      for (var name in this.frames) {
	        str += this.frames[name].toString(options) + '\n';
	      }
	      str += '}';
	      return str;
	    }
	  }]);

	  return KeyframeRule;
	}();

	exports.default = KeyframeRule;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _utils = __webpack_require__(14);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Conditional rule for @media, @supports
	 *
	 * @api public
	 */

	var ConditionalRule = function () {
	  function ConditionalRule(selector, styles, options) {
	    _classCallCheck(this, ConditionalRule);

	    this.type = 'conditional';
	    this.selector = selector;
	    this.options = options;
	    this.rules = Object.create(null);
	    for (var name in styles) {
	      this.createRule(name, styles[name]);
	    }
	  }

	  /**
	   * A conditional rule always contains child rules.
	   *
	   * @param {Object} styles
	   * @return {Array} rules
	   * @api public
	   */


	  _createClass(ConditionalRule, [{
	    key: 'createRule',
	    value: function createRule(name, style, options) {
	      var newOptions = _extends({}, this.options, { parent: this });
	      var _newOptions = newOptions;
	      var sheet = _newOptions.sheet;
	      var jss = _newOptions.jss;
	      // We have already a rule in the current style sheet with this name,
	      // This new rule is supposed to overwrite the first one, for this we need
	      // to ensure it will have the same className/selector.

	      var existingRule = sheet && sheet.getRule(name);
	      var className = existingRule ? existingRule.className : null;
	      if (className || options) {
	        newOptions = _extends({}, newOptions, { className: className }, options);
	      }
	      var rule = (sheet || jss).createRule(name, style, newOptions);
	      this.rules[name] = rule;
	      return rule;
	    }

	    /**
	     * Generates a CSS string.
	     *
	     * @return {String}
	     * @api public
	     */

	  }, {
	    key: 'toString',
	    value: function toString() {
	      var str = this.selector + ' {\n';
	      for (var name in this.rules) {
	        var rule = this.rules[name];
	        if (rule.style && (0, _utils.isEmptyObject)(rule.style)) {
	          continue;
	        }
	        var ruleStr = rule.toString({ indentationLevel: 1 });
	        str += ruleStr + '\n';
	      }
	      str += '}';
	      return str;
	    }
	  }]);

	  return ConditionalRule;
	}();

	exports.default = ConditionalRule;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _utils = __webpack_require__(14);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Font-face rules.
	 *
	 * @api public
	 */

	var Rule = function () {
	  function Rule(selector, style, options) {
	    _classCallCheck(this, Rule);

	    this.type = 'font-face';
	    this.options = options;
	    this.selector = selector;
	    this.style = style;
	  }

	  /**
	   * Generates a CSS string.
	   *
	   * @see toCSS
	   * @api public
	   */


	  _createClass(Rule, [{
	    key: 'toString',
	    value: function toString(options) {
	      if (Array.isArray(this.style)) {
	        var str = '';
	        for (var index = 0; index < this.style.length; index++) {
	          str += (0, _utils.toCSS)(this.selector, this.style[index], options);
	          if (this.style[index + 1]) str += '\n';
	        }
	        return str;
	      }

	      return (0, _utils.toCSS)(this.selector, this.style, options);
	    }
	  }]);

	  return Rule;
	}();

	exports.default = Rule;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = findRenderer;

	var _DomRenderer = __webpack_require__(23);

	var _DomRenderer2 = _interopRequireDefault(_DomRenderer);

	var _VirtualRenderer = __webpack_require__(24);

	var _VirtualRenderer2 = _interopRequireDefault(_VirtualRenderer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Find proper renderer.
	 * Option `virtual` is used to force use of VirtualRenderer even if DOM is
	 * detected, used for testing only.
	 *
	 * @param {Object} options
	 * @return {Renderer}
	 * @api private
	 */
	function findRenderer() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  if (options.Renderer) return options.Renderer;
	  return options.virtual || typeof document == 'undefined' ? _VirtualRenderer2.default : _DomRenderer2.default;
	}

/***/ },
/* 23 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * DOM rendering backend for StyleSheet.
	 *
	 * @api private
	 */

	var DomRenderer = function () {
	  _createClass(DomRenderer, null, [{
	    key: 'style',
	    value: function style(element, name, value) {
	      try {
	        if (value == null) return element.style[name];
	        element.style[name] = value;
	      } catch (err) {
	        // IE8 may throw if property is unknown.
	        return false;
	      }
	      return true;
	    }
	  }, {
	    key: 'setSelector',
	    value: function setSelector(cssRule, selector) {
	      cssRule.selectorText = selector;

	      // Return false if setter was not successful.
	      // Currently works in chrome only.
	      return cssRule.selectorText === selector;
	    }
	  }, {
	    key: 'getSelector',
	    value: function getSelector(cssRule) {
	      return cssRule.selectorText;
	    }
	  }]);

	  function DomRenderer(options) {
	    _classCallCheck(this, DomRenderer);

	    this.head = document.head || document.getElementsByTagName('head')[0];
	    this.element = options.element || document.createElement('style');
	    // IE8 will not have `styleSheet` prop without `type and `styleSheet.cssText`
	    // is the only way to render on IE8.
	    this.element.type = 'text/css';
	    if (options.media) this.element.setAttribute('media', options.media);
	    if (options.meta) this.element.setAttribute('data-meta', options.meta);
	  }

	  /**
	   * Insert style element into render tree.
	   *
	   * @api private
	   */


	  _createClass(DomRenderer, [{
	    key: 'attach',
	    value: function attach() {
	      if (this.element.parendNode) return;
	      this.head.appendChild(this.element);
	    }

	    /**
	     * Remove style element from render tree.
	     *
	     * @api private
	     */

	  }, {
	    key: 'detach',
	    value: function detach() {
	      this.element.parentNode.removeChild(this.element);
	    }

	    /**
	     * Inject CSS string into element.
	     *
	     * @param {String} cssStr
	     * @api private
	     */

	  }, {
	    key: 'deploy',
	    value: function deploy(sheet) {
	      var css = '\n' + sheet.toString() + '\n';
	      if ('sheet' in this.element) this.element.innerHTML = css;
	      // On IE8 the only way to render is `styleSheet.cssText`.
	      else if ('styleSheet' in this.element) this.element.styleSheet.cssText = css;
	    }

	    /**
	     * Insert a rule into element.
	     *
	     * @param {Rule} rule
	     * @return {CSSStyleRule}
	     * @api private
	     */

	  }, {
	    key: 'insertRule',
	    value: function insertRule(rule) {
	      // IE8 has only `styleSheet` and `styleSheet.rules`
	      var sheet = this.element.sheet || this.element.styleSheet;
	      var cssRules = sheet.cssRules || sheet.rules;
	      var nextIndex = cssRules.length;
	      if (sheet.insertRule) sheet.insertRule(rule.toString(), nextIndex);else sheet.addRule(rule.selector, rule.toString({ selector: false }), nextIndex);
	      return cssRules[nextIndex];
	    }

	    /**
	     * Get all rules elements.
	     *
	     * @return {Object} rules map, where key is selector, CSSStyleRule is value.
	     * @api private
	     */

	  }, {
	    key: 'getRules',
	    value: function getRules() {
	      // IE8 has only `styleSheet` and `styleSheet.rules`
	      var sheet = this.element.sheet || this.element.styleSheet;
	      var cssRules = sheet.rules || sheet.cssRules;
	      var rules = Object.create(null);
	      for (var index = 0; index < cssRules.length; index++) {
	        var cssRule = cssRules[index];
	        rules[cssRule.selectorText] = cssRule;
	      }
	      return rules;
	    }
	  }]);

	  return DomRenderer;
	}();

	exports.default = DomRenderer;

/***/ },
/* 24 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Rendering backend to do nothing in nodejs.
	 */

	var VirtualRenderer = function () {
	  function VirtualRenderer() {
	    _classCallCheck(this, VirtualRenderer);
	  }

	  _createClass(VirtualRenderer, [{
	    key: "attach",
	    value: function attach() {}
	  }, {
	    key: "detach",
	    value: function detach() {}
	  }, {
	    key: "deploy",
	    value: function deploy() {}
	  }, {
	    key: "insertRule",
	    value: function insertRule() {}
	  }, {
	    key: "getRules",
	    value: function getRules() {
	      return {};
	    }
	  }], [{
	    key: "style",
	    value: function style() {}
	  }, {
	    key: "setSelector",
	    value: function setSelector() {}
	  }, {
	    key: "getSelector",
	    value: function getSelector() {}
	  }]);

	  return VirtualRenderer;
	}();

	exports.default = VirtualRenderer;

/***/ },
/* 25 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Register a plugin, run a plugin.
	 *
	 * @api public
	 */

	var PluginsRegistry = function () {
	  function PluginsRegistry() {
	    _classCallCheck(this, PluginsRegistry);

	    this.registry = [];
	  }

	  /**
	   * Register plugin. Passed function will be invoked with a rule instance.
	   *
	   * @param {Function} fn
	   * @api public
	   */


	  _createClass(PluginsRegistry, [{
	    key: "use",
	    value: function use(fn) {
	      this.registry.push(fn);
	    }

	    /**
	     * Execute all registered plugins.
	     *
	     * @param {Rule} rule
	     * @api private
	     */

	  }, {
	    key: "run",
	    value: function run(rule) {
	      for (var index = 0; index < this.registry.length; index++) {
	        this.registry[index](rule);
	      }
	    }
	  }]);

	  return PluginsRegistry;
	}();

	exports.default = PluginsRegistry;

/***/ },
/* 26 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Sheets registry to access them all at one place.
	 *
	 * @api public
	 */

	var SheetsRegistry = function () {
	  function SheetsRegistry() {
	    _classCallCheck(this, SheetsRegistry);

	    this.registry = [];
	  }

	  /**
	   * Register a style sheet.
	   *
	   * @param {StyleSheet} sheet
	   * @api public
	   */


	  _createClass(SheetsRegistry, [{
	    key: 'add',
	    value: function add(sheet) {
	      this.registry.push(sheet);
	    }

	    /**
	     * Returns CSS string with all Style Sheets.
	     *
	     * @param {StyleSheet} sheet
	     * @api public
	     */

	  }, {
	    key: 'toString',
	    value: function toString(options) {
	      return this.registry.map(function (sheet) {
	        return sheet.toString(options);
	      }).join('\n');
	    }
	  }]);

	  return SheetsRegistry;
	}();

	exports.default = SheetsRegistry;

/***/ },
/* 27 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = jssExtend;
	/**
	 * Handle `extend` property.
	 *
	 * @param {Rule} rule
	 * @api public
	 */
	function jssExtend() {
	  function extend(rule, newStyle, style) {
	    if (typeof style.extend == 'string') {
	      if (rule.options && rule.options.sheet) {
	        var refRule = rule.options.sheet.getRule(style.extend);
	        if (refRule) extend(rule, newStyle, refRule.originalStyle);
	      }
	    } else if (Array.isArray(style.extend)) {
	      for (var index = 0; index < style.extend.length; index++) {
	        extend(rule, newStyle, style.extend[index]);
	      }
	    } else {
	      for (var prop in style.extend) {
	        if (prop === 'extend') extend(rule, newStyle, style.extend.extend);else newStyle[prop] = style.extend[prop];
	      }
	    }

	    // Copy base style.
	    for (var _prop in style) {
	      if (_prop !== 'extend') newStyle[_prop] = style[_prop];
	    }

	    return newStyle;
	  }

	  return function (rule) {
	    if (!rule.style || !rule.style.extend) return;
	    rule.style = extend(rule, {}, rule.style);
	  };
	}

/***/ },
/* 28 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = jssNested;
	var regExp = /&/g;

	/**
	 * Convert nested rules to separate, remove them from original styles.
	 *
	 * @param {Rule} rule
	 * @api public
	 */
	function jssNested() {
	  return function (rule) {
	    if (rule.type !== 'regular') return;
	    var _rule$options = rule.options;
	    var sheet = _rule$options.sheet;
	    var jss = _rule$options.jss;
	    var parent = _rule$options.parent;

	    var container = sheet || jss;
	    var options = void 0;

	    if (parent && parent.type === 'conditional') {
	      container = parent;
	    }

	    for (var prop in rule.style) {
	      if (prop[0] === '&') {
	        if (!options) options = _extends({}, rule.options, { named: false });
	        var name = prop.replace(regExp, rule.selector);
	        container.createRule(name, rule.style[prop], options);
	        delete rule.style[prop];
	      }
	    }
	  };
	}

/***/ },
/* 29 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = jssCamelCase;
	var regExp = /([A-Z])/g;

	/**
	 * Allow camel cased property names by converting them back to dasherized.
	 *
	 * @param {Rule} rule
	 * @api public
	 */
	function jssCamelCase() {
	  return function (rule) {
	    var style = rule.style;

	    if (!style) return;
	    rule.style = {};
	    for (var prop in style) {
	      var value = style[prop];
	      prop = prop.replace(regExp, replace);
	      rule.style[prop] = value;
	    }
	  };
	}

	function replace(c) {
	  return '-' + c.toLowerCase();
	}

/***/ },
/* 30 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = defaultUnit;
	// Don't automatically add unit to these possibly-unitless properties.
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
	  'tab-size': true,
	  'widows': true,
	  'z-index': true,
	  'zoom': true
	};

	/**
	 * Add unit to numeric values.
	 *
	 * @param {Rule} rule
	 * @api public
	 */
	function defaultUnit() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? { unit: 'px' } : arguments[0];

	  return function (rule) {
	    var style = rule.style;

	    if (!style) return;
	    for (var prop in style) {
	      if (!cssNumber[prop] && typeof style[prop] == 'number' && style[prop] !== 0) {
	        style[prop] += options.unit;
	      }
	    }
	  };
	}

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = jssVendorPrefixer;

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	var _cssVendor = __webpack_require__(32);

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
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.supportedValue = exports.supportedProperty = exports.prefix = undefined;

	var _prefix = __webpack_require__(33);

	var _prefix2 = _interopRequireDefault(_prefix);

	var _supportedProperty = __webpack_require__(34);

	var _supportedProperty2 = _interopRequireDefault(_supportedProperty);

	var _supportedValue = __webpack_require__(36);

	var _supportedValue2 = _interopRequireDefault(_supportedValue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  prefix: _prefix2.default,
	  supportedProperty: _supportedProperty2.default,
	  supportedValue: _supportedValue2.default
	}; /**
	    * CSS Vendor prefix detection and property feature testing.
	    *
	    * @copyright Oleg Slobodskoi 2015
	    * @website https://github.com/jsstyles/css-vendor
	    * @license MIT
	    */

	exports.prefix = _prefix2.default;
	exports.supportedProperty = _supportedProperty2.default;
	exports.supportedValue = _supportedValue2.default;

/***/ },
/* 33 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Export javascript style and css style vendor prefixes.
	 * Based on "transform" support test.
	 */

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
	exports.default = { js: js, css: css };

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = supportedProperty;

	var _prefix = __webpack_require__(33);

	var _prefix2 = _interopRequireDefault(_prefix);

	var _camelize = __webpack_require__(35);

	var _camelize2 = _interopRequireDefault(_camelize);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var el = void 0;
	var cache = {};

	// For server-side rendering.
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
	  // For server-side rendering.
	  if (!el) return prop;

	  // We have not tested this prop yet, lets do the test.
	  if (cache[prop] != null) return cache[prop];

	  // Camelization is required because we can't test using
	  // css syntax for e.g. in FF.
	  // Test if property is supported as it is.
	  if ((0, _camelize2.default)(prop) in el.style) {
	    cache[prop] = prop;
	  }
	  // Test if property is supported with vendor prefix.
	  else if (_prefix2.default.js + (0, _camelize2.default)('-' + prop) in el.style) {
	      cache[prop] = _prefix2.default.css + prop;
	    } else {
	      cache[prop] = false;
	    }

	  return cache[prop];
	}

/***/ },
/* 35 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = camelize;
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
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = supportedValue;

	var _prefix = __webpack_require__(33);

	var _prefix2 = _interopRequireDefault(_prefix);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var cache = {};
	var el = void 0;

	// For server-side rendering.
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
	  // For server-side rendering.
	  if (!el) return value;

	  // It is a string or a number as a string like '1'.
	  // We want only prefixable values here.
	  if (typeof value !== 'string' || !isNaN(parseInt(value, 10))) return value;

	  var cacheKey = property + value;

	  if (cache[cacheKey] != null) return cache[cacheKey];

	  // Test value as it is.
	  el.style[property] = value;

	  // Value is supported as it is.
	  if (el.style[property] === value) {
	    cache[cacheKey] = value;
	  } else {
	    // Test value with vendor prefix.
	    value = _prefix2.default.css + value;

	    // Hardcode test to convert "flex" to "-ms-flexbox" for IE10.
	    if (value === '-ms-flex') value = '-ms-flexbox';

	    el.style[property] = value;

	    // Value is supported with vendor prefix.
	    if (el.style[property] === value) cache[cacheKey] = value;
	  }

	  if (!cache[cacheKey]) cache[cacheKey] = false;

	  return cache[cacheKey];
	}

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.createElement = createElement;
	exports.minToY = minToY;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _conf = __webpack_require__(1);

	var _conf2 = _interopRequireDefault(_conf);

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
	  return _conf2['default'].height * min / MIN_IN_DAY;
	}

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _jss = __webpack_require__(10);

	var _jss2 = _interopRequireDefault(_jss);

	var _utils = __webpack_require__(37);

	var utils = _interopRequireWildcard(_utils);

	var _style = __webpack_require__(39);

	var style = _interopRequireWildcard(_style);

	var sheet = _jss2['default'].createStyleSheet(style.rules);

	var Canvas = (function () {
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
	        'class': sheet.classes.canvas
	      });
	      this.contentElement = utils.createElement('div', {
	        'class': sheet.classes.content
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
	})();

	exports['default'] = Canvas;
	module.exports = exports['default'];

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _conf = __webpack_require__(1);

	var _conf2 = _interopRequireDefault(_conf);

	var rules = {
	  canvas: {
	    flex: 1,
	    position: 'relative',
	    height: _conf2['default'].height,
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
	exports.rules = rules;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _jss = __webpack_require__(10);

	var _jss2 = _interopRequireDefault(_jss);

	var _utils = __webpack_require__(37);

	var utils = _interopRequireWildcard(_utils);

	var _markerTpl = __webpack_require__(41);

	var markerTpl = _interopRequireWildcard(_markerTpl);

	var _style = __webpack_require__(42);

	var sheet = _jss2['default'].createStyleSheet(_style.rules);

	var Timeline = (function () {
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
	   * Get PM/AM suffix.
	   *
	   * @param {Number} min
	   * @return {String}
	   */

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
	        'class': sheet.classes.timeline
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
	        'class': sheet.classes.timeContainer
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
	})();

	exports['default'] = Timeline;
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
	module.exports = exports['default'];

/***/ },
/* 41 */
/***/ function(module, exports) {

	/**
	 * Returns compiled template. Some template engine should be used in production
	 * use case.
	 *
	 * @param {Object} data
	 * @return {String}
	 */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.compile = compile;

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
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _conf = __webpack_require__(1);

	var _conf2 = _interopRequireDefault(_conf);

	var width = 75;

	exports.width = width;
	var rules = {
	  timeline: {
	    position: 'relative',
	    flexShrink: 0,
	    width: width,
	    height: _conf2['default'].height,
	    padding: '0 7px 0 0',
	    boxSizing: 'border-box',
	    // Middle of the number should be the start.
	    marginTop: -_conf2['default'].fontSize / 2
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
	exports.rules = rules;

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _event = __webpack_require__(44);

	var _event2 = _interopRequireDefault(_event);

	var _distribute = __webpack_require__(47);

	var _distribute2 = _interopRequireDefault(_distribute);

	/**
	 * Handles events creation and distribution.
	 */

	var EventsManager = (function () {
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
	        return new _event2['default'](options);
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

	      (0, _distribute2['default'])(this.events, this.canvas).forEach(function (event) {
	        event.create();
	        _this.canvas.add(event);
	      });
	      return this;
	    }
	  }]);

	  return EventsManager;
	})();

	exports['default'] = EventsManager;
	module.exports = exports['default'];

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _jss = __webpack_require__(10);

	var _jss2 = _interopRequireDefault(_jss);

	var _utils = __webpack_require__(37);

	var utils = _interopRequireWildcard(_utils);

	var _contentTpl = __webpack_require__(45);

	var contentTpl = _interopRequireWildcard(_contentTpl);

	var _style = __webpack_require__(46);

	var _style2 = _interopRequireDefault(_style);

	var sheet = _jss2['default'].createStyleSheet(_style2['default']);

	var uid = 0;

	var Event = (function () {
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
	        'class': sheet.classes.event
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
	})();

	exports['default'] = Event;
	module.exports = exports['default'];

/***/ },
/* 45 */
/***/ function(module, exports) {

	/**
	 * Returns compiled html for event content.
	 *
	 * @param {Object} data
	 * @return {String}
	 */
	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.compile = compile;

	function compile(data) {
	  var classes = data.classes;

	  return "\n    <div class=\"" + classes.content + "\">\n      <h3 class=\"" + classes.title + "\">" + data.title + "</h3>\n      <div class=\"" + classes.location + "\">" + data.location + "</div>\n    </div>\n  ";
	}

/***/ },
/* 46 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = {
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
	module.exports = exports['default'];

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = distribute;

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	var _utils = __webpack_require__(37);

	var utils = _interopRequireWildcard(_utils);

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
	module.exports = exports['default'];

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _conf = __webpack_require__(1);

	var _conf2 = _interopRequireDefault(_conf);

	exports['default'] = {
	  calendar: {
	    display: 'flex',
	    fontSize: _conf2['default'].fontSize,
	    color: '#686868'
	  }
	};
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;
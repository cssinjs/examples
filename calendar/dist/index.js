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

	var _utils = __webpack_require__(36);

	var utils = _interopRequireWildcard(_utils);

	var _canvas = __webpack_require__(37);

	var _canvas2 = _interopRequireDefault(_canvas);

	var _timeline = __webpack_require__(39);

	var _timeline2 = _interopRequireDefault(_timeline);

	var _eventsManager = __webpack_require__(42);

	var _eventsManager2 = _interopRequireDefault(_eventsManager);

	var _style = __webpack_require__(47);

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

	var _jssExtend = __webpack_require__(25);

	var _jssExtend2 = _interopRequireDefault(_jssExtend);

	var _jssNested = __webpack_require__(26);

	var _jssNested2 = _interopRequireDefault(_jssNested);

	var _jssCamelCase = __webpack_require__(27);

	var _jssCamelCase2 = _interopRequireDefault(_jssCamelCase);

	var _jssDefaultUnit = __webpack_require__(28);

	var _jssDefaultUnit2 = _interopRequireDefault(_jssDefaultUnit);

	var _jssVendorPrefixer = __webpack_require__(29);

	var _jssVendorPrefixer2 = _interopRequireDefault(_jssVendorPrefixer);

	var _jssDebug = __webpack_require__(35);

	var _jssDebug2 = _interopRequireDefault(_jssDebug);

	var jss = (0, _jss.create)();

	jss.use((0, _jssExtend2['default'])());
	jss.use((0, _jssNested2['default'])());
	jss.use((0, _jssCamelCase2['default'])());
	jss.use((0, _jssDefaultUnit2['default'])());
	jss.use((0, _jssVendorPrefixer2['default'])());
	jss.use((0, _jssDebug2['default'])());

	exports['default'] = jss;
	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * StyleSheets written in javascript.
	 *
	 * @copyright Oleg Slobodskoi 2015
	 * @website https://github.com/jsstyles/jss
	 * @license MIT
	 */

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _Jss = __webpack_require__(12);

	var _Jss2 = _interopRequireDefault(_Jss);

	exports['default'] = new _Jss2['default']();
	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _StyleSheet = __webpack_require__(13);

	var _StyleSheet2 = _interopRequireDefault(_StyleSheet);

	var _PluginsRegistry = __webpack_require__(24);

	var _PluginsRegistry2 = _interopRequireDefault(_PluginsRegistry);

	var _uid = __webpack_require__(16);

	var uid = _interopRequireWildcard(_uid);

	var _createRule2 = __webpack_require__(14);

	var _createRule3 = _interopRequireDefault(_createRule2);

	var _findRenderer = __webpack_require__(21);

	var _findRenderer2 = _interopRequireDefault(_findRenderer);

	/**
	 * Main Jss class.
	 *
	 * @api public
	 */

	var Jss = (function () {
	  function Jss() {
	    _classCallCheck(this, Jss);

	    this.plugins = new _PluginsRegistry2['default']();
	    this.uid = uid;
	  }

	  /**
	   * Creates a new instance of Jss.
	   *
	   * @see Jss
	   * @api public
	   */

	  Jss.prototype.create = function create() {
	    return new Jss();
	  };

	  /**
	   * Create a stylesheet.
	   *
	   * @see StyleSheet
	   * @api public
	   */

	  Jss.prototype.createStyleSheet = function createStyleSheet(rules, options) {
	    return new _StyleSheet2['default'](rules, _extends({}, options, { jss: this }));
	  };

	  /**
	   * Create a rule.
	   *
	   * @see createRule
	   * @api public
	   */

	  Jss.prototype.createRule = function createRule(selector, style, options) {
	    // Enable rule without selector.
	    if (typeof selector == 'object') {
	      options = style;
	      style = selector;
	      selector = null;
	    }
	    var rule = _createRule3['default'](selector, style, _extends({}, options, {
	      jss: this,
	      Renderer: _findRenderer2['default'](options)
	    }));
	    this.plugins.run(rule);
	    return rule;
	  };

	  /**
	   * Register plugin. Passed function will be invoked with a rule instance.
	   *
	   * @param {Function} fn
	   * @api public
	   */

	  Jss.prototype.use = function use(fn) {
	    this.plugins.use(fn);
	    return this;
	  };

	  return Jss;
	})();

	exports['default'] = Jss;
	module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _createRule2 = __webpack_require__(14);

	var _createRule3 = _interopRequireDefault(_createRule2);

	var _findRenderer = __webpack_require__(21);

	var _findRenderer2 = _interopRequireDefault(_findRenderer);

	/**
	 * StyleSheet model.
	 *
	 * Options:
	 *
	 *  - 'media' style element attribute
	 *  - 'title' style element attribute
	 *  - 'type' style element attribute
	 *  - 'named' true by default - keys are names, selectors will be generated,
	 *    if false - keys are global selectors
	 *  - 'link' link renderable CSS rules with their corresponding models, false
	 *    by default because fast by default
	 *
	 * @param {Object} [rules] object with selectors and declarations
	 * @param {Object} [options]
	 * @api public
	 */

	var StyleSheet = (function () {
	  function StyleSheet(rules, options) {
	    _classCallCheck(this, StyleSheet);

	    this.options = _extends({}, options);
	    if (this.options.named == null) this.options.named = true;
	    this.rules = Object.create(null);
	    this.classes = Object.create(null);
	    this.attached = false;
	    this.deployed = false;
	    this.linked = false;

	    var Renderer = _findRenderer2['default'](this.options);
	    this.options.Renderer = Renderer;
	    this.renderer = new Renderer({
	      media: this.options.media,
	      type: this.options.type,
	      title: this.options.title
	    });

	    for (var _name in rules) {
	      this.createRule(_name, rules[_name]);
	    }
	  }

	  /**
	   * Attach renderable to the render tree.
	   *
	   * @api public
	   * @return {StyleSheet}
	   */

	  StyleSheet.prototype.attach = function attach() {
	    if (this.attached) return this;
	    if (!this.deployed) this.deploy();
	    this.renderer.attach();
	    if (!this.linked && this.options.link) this.link();
	    this.attached = true;
	    return this;
	  };

	  /**
	   * Remove renderable from render tree.
	   *
	   * @return {StyleSheet}
	   * @api public
	   */

	  StyleSheet.prototype.detach = function detach() {
	    if (!this.attached) return this;
	    this.renderer.detach();
	    this.attached = false;
	    return this;
	  };

	  /**
	   * Add a rule to the current stylesheet. Will insert a rule also after the stylesheet
	   * has been rendered first time.
	   *
	   * @param {Object} [name] can be selector or name if ´options.named is true
	   * @param {Object} style property/value hash
	   * @return {Rule}
	   * @api public
	   */

	  StyleSheet.prototype.addRule = function addRule(name, style) {
	    var rule = this.createRule(name, style);
	    // Don't insert rule directly if there is no stringified version yet.
	    // It will be inserted all together when .attach is called.
	    if (this.deployed) {
	      var renderable = this.renderer.insertRule(rule);
	      if (this.options.link) rule.renderable = renderable;
	    }
	    return rule;
	  };

	  /**
	   * Create rules, will render also after stylesheet was rendered the first time.
	   *
	   * @param {Object} rules name:style hash.
	   * @return {Array} array of added rules
	   * @api public
	   */

	  StyleSheet.prototype.addRules = function addRules(rules) {
	    var added = [];
	    for (var _name2 in rules) {
	      added.push(this.addRule(_name2, rules[_name2]));
	    }
	    return added;
	  };

	  /**
	   * Get a rule.
	   *
	   * @param {String} name can be selector or name if `named` option is true.
	   * @return {Rule}
	   * @api public
	   */

	  StyleSheet.prototype.getRule = function getRule(name) {
	    return this.rules[name];
	  };

	  /**
	   * Convert rules to a CSS string.
	   *
	   * @param {Object} options
	   * @return {String}
	   * @api public
	   */

	  StyleSheet.prototype.toString = function toString(options) {
	    var rules = this.rules;

	    var stringified = Object.create(null);
	    var str = '';
	    for (var _name3 in rules) {
	      var rule = rules[_name3];
	      // We have the same rule referenced twice if using named rules.
	      // By name and by selector.
	      if (stringified[rule.id]) {
	        continue;
	      }
	      if (str) str += '\n';
	      str += rules[_name3].toString(options);
	      stringified[rule.id] = true;
	    }
	    return str;
	  };

	  /**
	   * Create a rule, will not render after stylesheet was rendered the first time.
	   * Will link the rule in `this.rules`.
	   *
	   * @see createRule
	   * @api private
	   */

	  StyleSheet.prototype.createRule = function createRule(name, style, options) {
	    options = _extends({}, options, {
	      sheet: this,
	      jss: this.options.jss,
	      Renderer: this.options.Renderer
	    });
	    // Scope options overwrite instance options.
	    if (options.named == null) options.named = this.options.named;
	    var rule = _createRule3['default'](name, style, options);
	    // Register conditional rule, it will stringify it's child rules properly.
	    if (rule.type === 'conditional') {
	      this.rules[rule.selector] = rule;
	    }
	    // This is a rule which is a child of a condtional rule.
	    // We need to register its class name only.
	    else if (rule.options.parent && rule.options.parent.type === 'conditional') {
	        // Only named rules should be referenced in `classes`.
	        if (rule.options.named) this.classes[name] = rule.className;
	      } else {
	        this.rules[rule.selector] = rule;
	        if (options.named) {
	          this.rules[name] = rule;
	          this.classes[name] = rule.className;
	        }
	      }
	    options.jss.plugins.run(rule);
	    return rule;
	  };

	  /**
	   * Deploy pure CSS string to a renderable.
	   *
	   * @return {StyleSheet}
	   * @api private
	   */

	  StyleSheet.prototype.deploy = function deploy() {
	    this.renderer.deploy(this);
	    this.deployed = true;
	    return this;
	  };

	  /**
	   * Link renderable CSS rules with their corresponding models.
	   *
	   * @return {StyleSheet}
	   * @api private
	   */

	  StyleSheet.prototype.link = function link() {
	    var renderables = this.renderer.getRules();
	    for (var selector in renderables) {
	      var rule = this.rules[selector];
	      if (rule) rule.renderable = renderables[selector];
	    }
	    this.linked = true;
	    return this;
	  };

	  return StyleSheet;
	})();

	exports['default'] = StyleSheet;
	module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports['default'] = createRule;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _Rule = __webpack_require__(15);

	var _Rule2 = _interopRequireDefault(_Rule);

	var _SimpleRule = __webpack_require__(18);

	var _SimpleRule2 = _interopRequireDefault(_SimpleRule);

	var _KeyframeRule = __webpack_require__(19);

	var _KeyframeRule2 = _interopRequireDefault(_KeyframeRule);

	var _ConditionalRule = __webpack_require__(20);

	var _ConditionalRule2 = _interopRequireDefault(_ConditionalRule);

	/**
	 * Map of at rules to corresponding implementation class.
	 *
	 * @type {Object}
	 */
	var atRuleClassMap = {
	  '@charset': _SimpleRule2['default'],
	  '@import': _SimpleRule2['default'],
	  '@namespace': _SimpleRule2['default'],
	  '@keyframes': _KeyframeRule2['default'],
	  '@media': _ConditionalRule2['default'],
	  '@supports': _ConditionalRule2['default'],
	  '@font-face': _Rule2['default']
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
	    var _name = atRuleNameRegExp.exec(selector)[0];
	    var AtRule = atRuleClassMap[_name];
	    // We use regular rule class to handle font rule,
	    // font-face rule should not be named.
	    if (_name === '@font-face' && options.named) {
	      options = _extends({}, options, { named: false });
	    }
	    return new AtRule(selector, style, options);
	  }
	  if (options.named == null) options.named = true;
	  return new _Rule2['default'](selector, style, options);
	}

	module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _uid = __webpack_require__(16);

	var uid = _interopRequireWildcard(_uid);

	var _clone = __webpack_require__(17);

	var _clone2 = _interopRequireDefault(_clone);

	/**
	 * Class name prefix when generated.
	 *
	 * @type {String}
	 * @api private
	 */
	var namespacePrefix = 'jss';

	/**
	 * Indentation string for formatting toString output.
	 *
	 * @type {String}
	 * @api private
	 */
	var indentWith = '  ';

	/**
	 * Regular rule.
	 *
	 * @api private
	 */

	var Rule = (function () {
	  function Rule(selector, style, options) {
	    _classCallCheck(this, Rule);

	    this.type = 'regular';
	    this.id = uid.get();
	    this.options = options;
	    this.selector = selector;
	    if (options.named) {
	      // Selector is a rule name, we need to ref it for e.g. for jss-debug.
	      this.name = selector;
	      this.className = options.className || namespacePrefix + '-' + this.id;
	      this.selector = '.' + this.className;
	    }
	    this.originalStyle = style;
	    // We expect style to be plain object.
	    this.style = _clone2['default'](style);
	  }

	  /**
	   * Indent a string.
	   *
	   * http://jsperf.com/array-join-vs-for
	   *
	   * @param {Number} level
	   * @param {String} str
	   * @return {String}
	   * @api private
	   */

	  /**
	   * Get or set a style property.
	   *
	   * @param {String} name
	   * @param {String|Number} [value]
	   * @return {Rule|String|Number}
	   * @api public
	   */

	  Rule.prototype.prop = function prop(name, value) {
	    var style = this.options.Renderer.style;

	    // Its a setter.
	    if (value != null) {
	      this.style[name] = value;
	      // If linked option in StyleSheet is not passed, renderable is not defined.
	      if (this.renderable) style(this.renderable, name, value);
	      return this;
	    }
	    // Its a getter, read the value from the DOM if its not cached.
	    if (this.renderable && this.style[name] == null) {
	      // Cache the value after we have got it from the DOM once.
	      this.style[name] = style(this.renderable, name);
	    }
	    return this.style[name];
	  };

	  /**
	   * Apply rule to an element inline.
	   *
	   * @param {Element} renderable
	   * @return {Rule}
	   * @api public
	   */

	  Rule.prototype.applyTo = function applyTo(renderable) {
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
	  };

	  /**
	   * Returns JSON representation of the rule.
	   * Nested rules, at-rules and array values are not supported.
	   *
	   * @return {Object}
	   * @api public
	   */

	  Rule.prototype.toJSON = function toJSON() {
	    var style = Object.create(null);
	    for (var prop in this.style) {
	      if (typeof this.style[prop] != 'object') {
	        style[prop] = this.style[prop];
	      }
	    }
	    return style;
	  };

	  /**
	   * Generates a CSS string.
	   *
	   * @param {Object} options
	   * @return {String}
	   * @api private
	   */

	  Rule.prototype.toString = function toString() {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    var selector = options.selector == null ? true : options.selector;
	    var indentationLevel = options.indentationLevel || 0;
	    var str = '';
	    if (selector) {
	      str += indent(indentationLevel, this.selector + ' {');
	      indentationLevel++;
	    }
	    for (var prop in this.style) {
	      var value = this.style[prop];
	      // We want to generate multiple style with identical property names.
	      if (Array.isArray(value)) {
	        for (var index = 0; index < value.length; index++) {
	          str += '\n' + indent(indentationLevel, prop + ': ' + value[index] + ';');
	        }
	      } else str += '\n' + indent(indentationLevel, prop + ': ' + value + ';');
	    }
	    if (selector) str += '\n' + indent(--indentationLevel, '}');
	    return str;
	  };

	  return Rule;
	})();

	exports['default'] = Rule;
	function indent(level, str) {
	  var indentStr = '';
	  for (var index = 0; index < level; index++) {
	    indentStr += indentWith;
	  }return indentStr + str;
	}
	module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	exports.__esModule = true;
	exports.get = get;
	exports.reset = reset;
	var globalReference = typeof window == 'undefined' ? global : window;
	var namespace = '__JSS_UID_PREFIX__';
	if (globalReference[namespace] == null) globalReference[namespace] = 0;

	var prefix = globalReference[namespace]++;
	var counter = 0;

	/**
	 * Returns a uid.
	 * Ensures uniqueness if more than 1 jss version is used.
	 *
	 * @api private
	 * @return {String}
	 */

	function get() {
	  return prefix + '-' + counter++;
	}

	/**
	 * Resets the counter.
	 *
	 * @api private
	 */

	function reset() {
	  counter = 0;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 17 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = clone;
	var stringify = JSON.stringify;
	var parse = JSON.parse;

	/**
	 * Deeply clone object using serialization.
	 * Expects object to be plain and without cyclic dependencies.
	 *
	 * http://jsperf.com/lodash-deepclone-vs-jquery-extend-deep/6
	 *
	 * @type {Object} obj
	 * @return {Object}
	 */

	function clone(obj) {
	  return parse(stringify(obj));
	}

	module.exports = exports["default"];

/***/ },
/* 18 */
/***/ function(module, exports) {

	/**
	 * Rule like @charset, @import, @namespace.
	 *
	 * @api private
	 */
	'use strict';

	exports.__esModule = true;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var SimpleRule = (function () {
	  function SimpleRule(name, value, options) {
	    _classCallCheck(this, SimpleRule);

	    this.type = 'simple';
	    this.options = options;
	    this.name = name;
	    this.value = value;
	  }

	  /**
	   * Generates a CSS string.
	   *
	   * @return {String}
	   * @api private
	   */

	  SimpleRule.prototype.toString = function toString() {
	    return this.name + ' ' + this.value + ';';
	  };

	  return SimpleRule;
	})();

	exports['default'] = SimpleRule;
	module.exports = exports['default'];

/***/ },
/* 19 */
/***/ function(module, exports) {

	/**
	 * Keyframe rule.
	 *
	 * @api private
	 */
	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var KeyframeRule = (function () {
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

	  KeyframeRule.prototype.formatFrames = function formatFrames(frames) {
	    var newFrames = Object.create(null);
	    for (var _name in frames) {
	      var options = _extends({}, this.options, { named: false, parent: this });
	      newFrames[_name] = this.options.jss.createRule(_name, frames[_name], options);
	    }
	    return newFrames;
	  };

	  /**
	   * Generates a CSS string.
	   *
	   * @return {String}
	   * @api private
	   */

	  KeyframeRule.prototype.toString = function toString() {
	    var str = this.selector + ' {\n';
	    var options = { indentationLevel: 1 };
	    for (var _name2 in this.frames) {
	      str += this.frames[_name2].toString(options) + '\n';
	    }
	    str += '}';
	    return str;
	  };

	  return KeyframeRule;
	})();

	exports['default'] = KeyframeRule;
	module.exports = exports['default'];

/***/ },
/* 20 */
/***/ function(module, exports) {

	/**
	 * Conditional rule for @media, @supports
	 *
	 * @api private
	 */
	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var ConditionalRule = (function () {
	  function ConditionalRule(selector, styles, options) {
	    _classCallCheck(this, ConditionalRule);

	    this.type = 'conditional';
	    this.selector = selector;
	    this.options = _extends({}, options, { parent: this });
	    this.rules = this.createChildRules(styles);
	  }

	  /**
	   * A conditional rule always contains child rules.
	   *
	   * @param {Object} styles
	   * @return {Array} rules
	   * @api private
	   */

	  ConditionalRule.prototype.createChildRules = function createChildRules(styles) {
	    var rules = Object.create(null);
	    var _options = this.options;
	    var sheet = _options.sheet;
	    var jss = _options.jss;

	    for (var _name in styles) {
	      var localOptions = this.options;
	      // We have already a rule in the current style sheet with this name,
	      // This new rule is supposed to overwrite the first one, for this we need
	      // to ensure it will have the same className/selector.
	      var ruleToOverwrite = this.options.sheet && this.options.sheet.getRule(_name);
	      if (ruleToOverwrite) localOptions = _extends({}, this.options, { className: ruleToOverwrite.className });
	      rules[_name] = (sheet || jss).createRule(_name, styles[_name], localOptions);
	    }
	    return rules;
	  };

	  /**
	   * Generates a CSS string.
	   *
	   * @return {String}
	   * @api private
	   */

	  ConditionalRule.prototype.toString = function toString() {
	    var str = this.selector + ' {\n';
	    for (var _name2 in this.rules) {
	      var ruleStr = this.rules[_name2].toString({ indentationLevel: 1 });
	      str += ruleStr + '\n';
	    }
	    str += '}';
	    return str;
	  };

	  return ConditionalRule;
	})();

	exports['default'] = ConditionalRule;
	module.exports = exports['default'];

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = findRenderer;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _DomRenderer = __webpack_require__(22);

	var _DomRenderer2 = _interopRequireDefault(_DomRenderer);

	var _VirtualRenderer = __webpack_require__(23);

	var _VirtualRenderer2 = _interopRequireDefault(_VirtualRenderer);

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
	  return options.virtual || typeof document == 'undefined' ? _VirtualRenderer2['default'] : _DomRenderer2['default'];
	}

	module.exports = exports['default'];

/***/ },
/* 22 */
/***/ function(module, exports) {

	/**
	 * DOM rendering backend for StyleSheet.
	 *
	 * @api private
	 */
	'use strict';

	exports.__esModule = true;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var DomRenderer = (function () {
	  DomRenderer.style = function style(element, name, value) {
	    try {
	      if (value == null) return element.style[name];
	      element.style[name] = value;
	    } catch (err) {
	      // IE8 may throw if property is unknown.
	    }
	  };

	  function DomRenderer(attrs) {
	    _classCallCheck(this, DomRenderer);

	    this.head = document.head || document.getElementsByTagName('head')[0];
	    this.element = document.createElement('style');
	    // IE8 will not have `styleSheet` prop without `type and `styleSheet.cssText`
	    // is the only way to render on IE8.
	    this.element.type = 'text/css';
	    for (var _name in attrs) {
	      if (attrs[_name]) this.element.setAttribute(_name, attrs[_name]);
	    }
	  }

	  /**
	   * Insert style element into render tree.
	   *
	   * @api private
	   */

	  DomRenderer.prototype.attach = function attach() {
	    this.head.appendChild(this.element);
	  };

	  /**
	   * Remove style element from render tree.
	   *
	   * @api private
	   */

	  DomRenderer.prototype.detach = function detach() {
	    this.element.parentNode.removeChild(this.element);
	  };

	  /**
	   * Inject CSS string into element.
	   *
	   * @param {String} cssStr
	   * @api private
	   */

	  DomRenderer.prototype.deploy = function deploy(sheet) {
	    var css = '\n' + sheet.toString() + '\n';
	    if ('sheet' in this.element) this.element.innerHTML = css;
	    // On IE8 the only way to render is `styleSheet.cssText`
	    else if ('styleSheet' in this.element) this.element.styleSheet.cssText = css;
	  };

	  /**
	   * Insert a rule into element.
	   *
	   * @param {Rule} rule
	   * @return {CSSStyleRule}
	   * @api private
	   */

	  DomRenderer.prototype.insertRule = function insertRule(rule) {
	    // IE8 has only `styleSheet` and `styleSheet.rules`
	    var sheet = this.element.sheet || this.element.styleSheet;
	    var cssRules = sheet.cssRules || sheet.rules;
	    var nextIndex = cssRules.length;
	    if (sheet.insertRule) sheet.insertRule(rule.toString(), nextIndex);else sheet.addRule(rule.selector, rule.toString({ selector: false }), nextIndex);
	    return cssRules[nextIndex];
	  };

	  /**
	   * Get all rules elements.
	   *
	   * @return {Object} rules map, where key is selector, CSSStyleRule is value.
	   * @api private
	   */

	  DomRenderer.prototype.getRules = function getRules() {
	    // IE8 has only `styleSheet` and `styleSheet.rules`
	    var sheet = this.element.sheet || this.element.styleSheet;
	    var cssRules = sheet.rules || sheet.cssRules;
	    var rules = Object.create(null);
	    for (var index = 0; index < cssRules.length; index++) {
	      var CSSRule = cssRules[index];
	      rules[CSSRule.selectorText] = CSSRule;
	    }
	    return rules;
	  };

	  return DomRenderer;
	})();

	exports['default'] = DomRenderer;
	module.exports = exports['default'];

/***/ },
/* 23 */
/***/ function(module, exports) {

	/**
	 * Rendering backend to do nothing in nodejs.
	 */
	"use strict";

	exports.__esModule = true;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var VirtualRenderer = (function () {
	  function VirtualRenderer() {
	    _classCallCheck(this, VirtualRenderer);
	  }

	  VirtualRenderer.style = function style() {};

	  VirtualRenderer.prototype.attach = function attach() {};

	  VirtualRenderer.prototype.detach = function detach() {};

	  VirtualRenderer.prototype.deploy = function deploy() {};

	  VirtualRenderer.prototype.insertRule = function insertRule() {};

	  VirtualRenderer.prototype.getRules = function getRules() {
	    return {};
	  };

	  return VirtualRenderer;
	})();

	exports["default"] = VirtualRenderer;
	module.exports = exports["default"];

/***/ },
/* 24 */
/***/ function(module, exports) {

	/**
	 * Register a plugin, run a plugin.
	 */
	"use strict";

	exports.__esModule = true;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var PluginsRegistry = (function () {
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

	  PluginsRegistry.prototype.use = function use(fn) {
	    this.registry.push(fn);
	  };

	  /**
	   * Execute all registered plugins.
	   *
	   * @param {Rule} rule
	   * @api private
	   */

	  PluginsRegistry.prototype.run = function run(rule) {
	    for (var index = 0; index < this.registry.length; index++) {
	      this.registry[index](rule);
	    }
	  };

	  return PluginsRegistry;
	})();

	exports["default"] = PluginsRegistry;
	module.exports = exports["default"];

/***/ },
/* 25 */
/***/ function(module, exports) {

	/**
	 * Handle `extend` property.
	 *
	 * @param {Rule} rule
	 * @api public
	 */
	'use strict';

	exports.__esModule = true;
	exports['default'] = jssExtend;

	function jssExtend() {
	  return function (rule) {
	    if (!rule.style || !rule.style.extend) return;

	    function extend(newStyle, style) {
	      if (typeof style.extend == 'string') {
	        if (rule.options && rule.options.sheet) {
	          var refRule = rule.options.sheet.getRule(style.extend);
	          if (refRule) extend(newStyle, refRule.originalStyle);
	        }
	      } else if (Array.isArray(style.extend)) {
	        for (var index = 0; index < style.extend.length; index++) {
	          extend(newStyle, style.extend[index]);
	        }
	      } else {
	        for (var prop in style.extend) {
	          if (prop === 'extend') extend(newStyle, style.extend.extend);else newStyle[prop] = style.extend[prop];
	        }
	      }

	      // Copy base style.
	      for (var prop in style) {
	        if (prop !== 'extend') newStyle[prop] = style[prop];
	      }

	      return newStyle;
	    }

	    rule.style = extend({}, rule.style);
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 26 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports['default'] = jssNested;
	var regExp = /&/gi;

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

	    var container = sheet || jss;
	    var options = rule.options;

	    for (var prop in rule.style) {
	      if (prop[0] === '&') {
	        if (options.named) options = _extends({}, options, { named: false });
	        var selector = prop.replace(regExp, rule.selector);
	        container.createRule(selector, rule.style[prop], options);
	        delete rule.style[prop];
	      }
	    }
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 27 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = jssCamelCase;
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
	      prop = prop.replace(regExp, '-$1').toLowerCase();
	      rule.style[prop] = value;
	    }
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 28 */
/***/ function(module, exports) {

	// Don't automatically add unit to these possibly-unitless properties.
	'use strict';

	exports.__esModule = true;
	exports['default'] = defaultUnit;
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
	      if (!cssNumber[prop] && typeof style[prop] == 'number') {
	        style[prop] += options.unit;
	      }
	    }
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = jssVendorPrefixer;

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	var _cssVendor = __webpack_require__(30);

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
	        rule.style[supportedProp] = supportedValue;
	      }
	    }
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 30 */
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

	var _prefix2 = __webpack_require__(31);

	var _prefix3 = _interopRequireDefault(_prefix2);

	exports.prefix = _prefix3['default'];

	var _supportedProperty2 = __webpack_require__(32);

	var _supportedProperty3 = _interopRequireDefault(_supportedProperty2);

	exports.supportedProperty = _supportedProperty3['default'];

	var _supportedValue2 = __webpack_require__(34);

	var _supportedValue3 = _interopRequireDefault(_supportedValue2);

	exports.supportedValue = _supportedValue3['default'];

/***/ },
/* 31 */
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
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = supportedProperty;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _prefix = __webpack_require__(31);

	var _prefix2 = _interopRequireDefault(_prefix);

	var _camelize = __webpack_require__(33);

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
/* 33 */
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
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = supportedValue;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _prefix = __webpack_require__(31);

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

/***/ },
/* 35 */
/***/ function(module, exports) {

	/**
	 * Add rule name to the class name for debugging purposes.
	 *
	 * @param {Rule} rule
	 * @api public
	 */
	"use strict";

	exports.__esModule = true;
	exports["default"] = jssDebug;

	function jssDebug() {
	  return function (rule) {
	    var name = rule.name;

	    if (!rule.options.named || !name) return;
	    rule.className += " jss:" + name;
	    if (rule.options.sheet) {
	      rule.options.sheet.classes[name] = rule.className;
	    }
	  };
	}

	module.exports = exports["default"];

/***/ },
/* 36 */
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
/* 37 */
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

	var _utils = __webpack_require__(36);

	var utils = _interopRequireWildcard(_utils);

	var _style = __webpack_require__(38);

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
/* 38 */
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
/* 39 */
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

	var _utils = __webpack_require__(36);

	var utils = _interopRequireWildcard(_utils);

	var _markerTpl = __webpack_require__(40);

	var markerTpl = _interopRequireWildcard(_markerTpl);

	var _style = __webpack_require__(41);

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
/* 40 */
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
/* 41 */
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
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _event = __webpack_require__(43);

	var _event2 = _interopRequireDefault(_event);

	var _distribute = __webpack_require__(46);

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
/* 43 */
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

	var _utils = __webpack_require__(36);

	var utils = _interopRequireWildcard(_utils);

	var _contentTpl = __webpack_require__(44);

	var contentTpl = _interopRequireWildcard(_contentTpl);

	var _style = __webpack_require__(45);

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
/* 44 */
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
/* 45 */
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
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = distribute;

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	var _utils = __webpack_require__(36);

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
/* 47 */
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
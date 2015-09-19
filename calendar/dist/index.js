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

	var Calendar = __webpack_require__(1);
	var conf = __webpack_require__(12);

	exports.Calendar = Calendar;

	exports.createCalendar = function () {
	    return new Calendar(conf).create();
	};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var jss = __webpack_require__(2);
	var utils = __webpack_require__(11);
	var Canvas = __webpack_require__(13);
	var Timeline = __webpack_require__(15);
	var EventsManager = __webpack_require__(18);

	var sheet = jss.createStyleSheet(__webpack_require__(23));

	/**
	 * Creates a new calendar view.
	 */
	function Calendar(options) {
	    this.timeline = new Timeline(options.timeline);
	    this.canvas = new Canvas();
	    this.manager = new EventsManager(this.canvas);
	    this.element = null;
	}

	module.exports = Calendar;

	/**
	 * Renders layout.
	 *
	 * @return {Calendar}
	 */
	Calendar.prototype.create = function () {
	    sheet.attach();
	    this.element = utils.element('div', {
	        'class': sheet.classes.container
	    });

	    this.timeline.create();
	    this.canvas.create();

	    this.element.appendChild(this.timeline.element);
	    this.element.appendChild(this.canvas.element);

	    return this;
	};

	/**
	 * Render main container.
	 *
	 * @param {Array} events
	 * @return {Calendar}
	 */
	Calendar.prototype.renderDay = function (events) {
	    this.manager.destroy().set(events).render();

	    return this;
	};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(3);

/***/ },
/* 3 */
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

	var _Jss = __webpack_require__(4);

	var _Jss2 = _interopRequireDefault(_Jss);

	exports['default'] = new _Jss2['default']();
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _StyleSheet = __webpack_require__(5);

	var _StyleSheet2 = _interopRequireDefault(_StyleSheet);

	var _Rule = __webpack_require__(6);

	var _Rule2 = _interopRequireDefault(_Rule);

	var _PluginsRegistry = __webpack_require__(10);

	var _PluginsRegistry2 = _interopRequireDefault(_PluginsRegistry);

	var _uid = __webpack_require__(7);

	var uid = _interopRequireWildcard(_uid);

	/**
	 * Main Jss class.
	 *
	 * @api public
	 */

	var Jss = (function () {
	  function Jss() {
	    _classCallCheck(this, Jss);

	    this.plugins = new _PluginsRegistry2['default']();
	    this.Jss = Jss;
	    this.StyleSheet = _StyleSheet2['default'];
	    this.Rule = _Rule2['default'];
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

	  Jss.prototype.createStyleSheet = function createStyleSheet(rules) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    options.jss = this;
	    return new _StyleSheet2['default'](rules, options);
	  };

	  /**
	   * Create a rule.
	   *
	   * @see Rule
	   * @return {Rule}
	   * @api public
	   */

	  Jss.prototype.createRule = function createRule(selector, style, options) {
	    if (typeof selector == 'object') {
	      options = style;
	      style = selector;
	      selector = null;
	    }
	    if (!options) options = {};
	    options.jss = this;
	    var rule = new _Rule2['default'](selector, style, options);
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
/* 5 */
/***/ function(module, exports) {

	/**
	 * StyleSheet abstraction, contains rules, injects stylesheet into dom.
	 *
	 * Options:
	 *
	 *  - `media` style element attribute
	 *  - `title` style element attribute
	 *  - `type` style element attribute
	 *  - `named` true by default - keys are names, selectors will be generated,
	 *    if false - keys are global selectors.
	 *  - `link` link jss Rule instances with DOM CSSRule instances so that styles,
	 *  can be modified dynamically, false by default because it has some performance cost.
	 *
	 * @param {Object} [rules] object with selectors and declarations
	 * @param {Object} [options]
	 * @api public
	 */
	'use strict';

	exports.__esModule = true;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var StyleSheet = (function () {
	  _createClass(StyleSheet, null, [{
	    key: 'ATTRIBUTES',
	    value: ['title', 'type', 'media'],
	    enumerable: true
	  }]);

	  function StyleSheet(rules) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    _classCallCheck(this, StyleSheet);

	    if (options.named == null) options.named = true;
	    this.options = options;
	    this.element = null;
	    this.attached = false;
	    this.media = options.media;
	    this.type = options.type;
	    this.title = options.title;
	    this.rules = {};
	    // Only when options.named: true.
	    this.classes = {};
	    this.deployed = false;
	    this.linked = false;
	    this.jss = this.options.jss;

	    // Don't create element if we are not in a browser environment.
	    if (typeof document != 'undefined') {
	      this.element = this.createElement();
	    }

	    for (var key in rules) {
	      this.createRules(key, rules[key]);
	    }
	  }

	  /**
	   * Insert stylesheet element to render tree.
	   *
	   * @api public
	   * @return {StyleSheet}
	   */

	  StyleSheet.prototype.attach = function attach() {
	    if (this.attached) return this;
	    if (!this.deployed) {
	      this.deploy();
	      this.deployed = true;
	    }

	    document.head.appendChild(this.element);

	    // Before element is attached to the dom rules are not created.
	    if (!this.linked && this.options.link) {
	      this.link();
	      this.linked = true;
	    }
	    this.attached = true;
	    return this;
	  };

	  /**
	   * Remove stylesheet element from render tree.
	   *
	   * @return {StyleSheet}
	   * @api public
	   */

	  StyleSheet.prototype.detach = function detach() {
	    if (!this.attached) return this;
	    this.element.parentNode.removeChild(this.element);
	    this.attached = false;
	    return this;
	  };

	  /**
	   * Deploy styles to the element.
	   *
	   * @return {StyleSheet}
	   * @api private
	   */

	  StyleSheet.prototype.deploy = function deploy() {
	    this.element.innerHTML = '\n' + this.toString() + '\n';
	    return this;
	  };

	  /**
	   * Find CSSRule objects in the DOM and link them in the corresponding Rule instance.
	   *
	   * @return {StyleSheet}
	   * @api private
	   */

	  StyleSheet.prototype.link = function link() {
	    var CSSRuleList = this.element.sheet.cssRules;
	    var rules = this.rules;

	    for (var i = 0; i < CSSRuleList.length; i++) {
	      var CSSRule = CSSRuleList[i];
	      var rule = rules[CSSRule.selectorText];
	      if (rule) rule.CSSRule = CSSRule;
	    }
	    return this;
	  };

	  /**
	   * Add a rule to the current stylesheet. Will insert a rule also after the stylesheet
	   * has been rendered first time.
	   *
	   * @param {Object} [key] can be selector or name if `options.named` is true
	   * @param {Object} style property/value hash
	   * @return {Rule}
	   * @api public
	   */

	  StyleSheet.prototype.addRule = function addRule(key, style) {
	    var rules = this.createRules(key, style);

	    // Don't insert rule directly if there is no stringified version yet.
	    // It will be inserted all together when .attach is called.
	    if (this.deployed) {
	      var sheet = this.element.sheet;

	      for (var i = 0; i < rules.length; i++) {
	        var nextIndex = sheet.cssRules.length;
	        var rule = rules[i];
	        sheet.insertRule(rule.toString(), nextIndex);
	        if (this.options.link) rule.CSSRule = sheet.cssRules[nextIndex];
	      }
	    } else this.deploy();
	    return rules;
	  };

	  /**
	   * Create rules, will render also after stylesheet was rendered the first time.
	   *
	   * @param {Object} rules key:style hash.
	   * @return {Array} array of added rules
	   * @api public
	   */

	  StyleSheet.prototype.addRules = function addRules(rules) {
	    var added = [];
	    for (var key in rules) {
	      added.push.apply(added, this.addRule(key, rules[key]));
	    }
	    return added;
	  };

	  /**
	   * Get a rule.
	   *
	   * @param {String} key can be selector or name if `named` is true.
	   * @return {Rule}
	   * @api public
	   */

	  StyleSheet.prototype.getRule = function getRule(key) {
	    return this.rules[key];
	  };

	  /**
	   * Convert rules to a css string.
	   *
	   * @return {String}
	   * @api public
	   */

	  StyleSheet.prototype.toString = function toString() {
	    var str = '';
	    var rules = this.rules;

	    var stringified = {};
	    for (var key in rules) {
	      var rule = rules[key];
	      // We have the same rule referenced twice if using named urles.
	      // By name and by selector.
	      if (stringified[rule.id]) continue;
	      if (str) str += '\n';
	      str += rules[key].toString();
	      stringified[rule.id] = true;
	    }
	    return str;
	  };

	  /**
	   * Create a rule, will not render after stylesheet was rendered the first time.
	   *
	   * @param {Object} [selector] if you don't pass selector - it will be generated
	   * @param {Object} [style] declarations block
	   * @param {Object} [options] rule options
	   * @return {Array} rule can contain child rules
	   * @api private
	   */

	  StyleSheet.prototype.createRules = function createRules(key, style) {
	    var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

	    var rules = [];
	    var named = this.options.named;

	    // Scope options overwrite instance options.
	    if (options.named != null) named = options.named;

	    var rule = this.jss.createRule(key, style, {
	      sheet: this,
	      named: named
	    });
	    rules.push(rule);

	    this.rules[rule.selector] = rule;
	    if (named && !rule.isAtRule) {
	      this.rules[key] = rule;
	      this.classes[key] = rule.className;
	    }

	    for (key in rule.children) {
	      rules.push(this.createRules(key, rule.children[key].style, rule.children[key].options));
	    }
	    return rules;
	  };

	  /**
	   * Create style sheet element.
	   *
	   * @return {Element}
	   * @api private
	   */

	  StyleSheet.prototype.createElement = function createElement() {
	    var _this = this;

	    var element = document.createElement('style');
	    StyleSheet.ATTRIBUTES.forEach(function (name) {
	      if (_this[name]) element.setAttribute(name, _this[name]);
	    });
	    return element;
	  };

	  return StyleSheet;
	})();

	exports['default'] = StyleSheet;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _uid = __webpack_require__(7);

	var uid = _interopRequireWildcard(_uid);

	var _clone = __webpack_require__(8);

	var _clone2 = _interopRequireDefault(_clone);

	var _defaults = __webpack_require__(9);

	var _defaults2 = _interopRequireDefault(_defaults);

	/**
	 * Rule is selector + style hash.
	 *
	 * @param {String} [selector] can be selector, rule name, @media etc.
	 * @param {Object} [style] declarations block
	 * @param {Object} [options]
	 * @api public
	 */

	var Rule = (function () {
	  _createClass(Rule, null, [{
	    key: 'NAMESPACE_PREFIX',

	    /**
	     * Class name prefix when generated.
	     *
	     * @type {String}
	     * @api private
	     */
	    value: 'jss',

	    /**
	     * Indentation string for formatting toString output.
	     *
	     * @type {String}
	     * @api private
	     */
	    enumerable: true
	  }, {
	    key: 'INDENTATION',
	    value: '  ',
	    enumerable: true
	  }]);

	  function Rule(selector, style) {
	    var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

	    _classCallCheck(this, Rule);

	    if (options.named == null) options.named = true;
	    this.id = uid.get();
	    this.options = options;
	    this.isAtRule = (selector || '')[0] === '@';

	    if (options.named) {
	      if (this.isAtRule) {
	        this.selector = selector;
	      } else {
	        // Selector is a rule name, we need to ref it for e.g. for jss-debug.
	        this.name = selector;
	        this.className = Rule.NAMESPACE_PREFIX + '-' + this.id;
	        this.selector = '.' + this.className;
	      }
	    } else this.selector = selector;

	    // We expect style to be plain object.
	    if (style) this.style = _clone2['default'](style);

	    // Will be set by StyleSheet#link if link option is true.
	    this.CSSRule = null;
	    // When at-rule has sub rules.
	    this.subrules = null;
	    this.jss = this.options.jss;
	    this.extractSubrules();
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

	  /**
	   * Get or set a style property.
	   *
	   * @param {String} name
	   * @param {String|Number} [value]
	   * @return {Rule|String|Number}
	   * @api public
	   */

	  Rule.prototype.prop = function prop(name, value) {
	    // Its a setter.
	    if (value != null) {
	      if (!this.style) this.style = {};
	      this.style[name] = value;
	      // If linked option in StyleSheet is not passed, CSSRule is not defined.
	      if (this.CSSRule) this.CSSRule.style[name] = value;
	      return this;
	    }

	    // Its a getter.
	    if (this.style) value = this.style[name];

	    // Read the value from the DOM if its not cached.
	    if (value == null && this.CSSRule) {
	      value = this.CSSRule.style[name];
	      // Cache the value after we have got it from the DOM once.
	      this.style[name] = value;
	    }
	    return value;
	  };

	  /**
	   * Add child rule. Required for plugins like "nested".
	   * StyleSheet will render them as a separate rule.
	   *
	   * @param {String} selector
	   * @param {Object} style
	   * @param {Object} [options] rule options
	   * @return {Rule}
	   * @api private
	   */

	  Rule.prototype.addChild = function addChild(selector, style, options) {
	    if (!this.children) this.children = {};
	    this.children[selector] = { style: style, options: options };
	    return this;
	  };

	  /**
	   * Extract @ rules into separate rules.
	   *
	   * @return {Rule}
	   * @api private
	   */

	  Rule.prototype.extractSubrules = function extractSubrules() {
	    if (!this.isAtRule || !this.style) return;
	    if (!this.subrules) this.subrules = {};
	    var sheet = this.options.sheet;
	    for (var _name in this.style) {
	      var options = this.options;
	      var style = this.style[_name];
	      // Not a nested rule.
	      if (typeof style == 'string') break;
	      var selector = undefined;
	      // We are going to overwrite some rule within the same sheet when
	      // @media query matches conditions.
	      if (options.named) {
	        var prevRule = sheet && sheet.rules[_name];
	        if (prevRule) {
	          selector = prevRule.selector;
	          options = _defaults2['default']({ named: false }, options);
	        }
	      } else selector = _name;
	      this.subrules[_name] = this.jss.createRule(selector, style, options);
	      delete this.style[_name];
	    }
	  };

	  /**
	   * Apply rule to an element inline.
	   *
	   * @param {Element} element
	   * @return {Rule}
	   * @api public
	   */

	  Rule.prototype.applyTo = function applyTo(element) {
	    for (var prop in this.style) {
	      var value = this.style[prop];
	      if (Array.isArray(value)) {
	        for (var i = 0; i < value.length; i++) {
	          element.style[prop] = value[i];
	        }
	      } else element.style[prop] = value;
	    }
	    return this;
	  };

	  /**
	   * Converts the rule to css string.
	   *
	   * @return {String}
	   * @api public
	   */

	  Rule.prototype.toString = function toString() {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    var style = this.style;
	    // At rules like @charset
	    if (this.isAtRule && !this.style && !this.subrules) return this.selector + ';';
	    if (options.indentationLevel == null) options.indentationLevel = 0;
	    var str = indent(options.indentationLevel, this.selector + ' {');

	    for (var prop in style) {
	      var value = style[prop];
	      // We want to generate multiple style with identical property names.
	      if (Array.isArray(value)) {
	        for (var i = 0; i < value.length; i++) {
	          str += '\n' + indent(options.indentationLevel + 1, prop + ': ' + value[i] + ';');
	        }
	      } else {
	        str += '\n' + indent(options.indentationLevel + 1, prop + ': ' + value + ';');
	      }
	    }

	    // We have an at-rule with nested statements.
	    // https://developer.mozilla.org/en-US/docs/Web/CSS/At-rule
	    var toStringOptions = { indentationLevel: options.indentationLevel + 1 };
	    for (var _name2 in this.subrules) {
	      str += '\n' + indent(options.indentationLevel, this.subrules[_name2].toString(toStringOptions));
	    }

	    str += '\n' + indent(options.indentationLevel, '}');
	    return str;
	  };

	  /**
	   * Returns JSON representation of the rule.
	   * Nested rules, at-rules and array values are not supported.
	   *
	   * @return {Object}
	   * @api public
	   */

	  Rule.prototype.toJSON = function toJSON() {
	    var style = {};
	    for (var prop in this.style) {
	      var value = this.style[prop];
	      var type = typeof value;
	      if (type === 'string' || type === 'number') {
	        style[prop] = value;
	      }
	    }
	    return style;
	  };

	  return Rule;
	})();

	exports['default'] = Rule;
	function indent(level, str) {
	  var indentStr = '';
	  for (var i = 0; i < level; i++) {
	    indentStr += Rule.INDENTATION;
	  }return indentStr + str;
	}
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	exports.__esModule = true;
	exports.get = get;
	exports.reset = reset;
	var globalReference = typeof window === 'undefined' ? global : window;
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
/* 8 */
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
/* 9 */
/***/ function(module, exports) {

	/**
	 * Merges second object with first one only if value is undefined.
	 * It expects both objects to be plain.
	 *
	 * @param {Object} obj1
	 * @param {Object} obj2
	 * @return {Object} obj1
	 */
	"use strict";

	exports.__esModule = true;
	exports["default"] = defaults;

	function defaults(obj1, obj2) {
	  for (var key in obj2) {
	    if (obj1[key] === undefined) obj1[key] = obj2[key];
	  }
	  return obj1;
	}

	module.exports = exports["default"];

/***/ },
/* 10 */
/***/ function(module, exports) {

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
	    for (var i = 0; i < this.registry.length; i++) {
	      this.registry[i](rule);
	    }
	  };

	  return PluginsRegistry;
	})();

	exports["default"] = PluginsRegistry;
	module.exports = exports["default"];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var conf = __webpack_require__(12);

	/**
	 * Create DOM node, set attributes.
	 *
	 * @param {String} name
	 * @param {Object} [attrs]
	 * @return Element
	 */
	exports.element = function (name, attrs) {
	    var element = document.createElement(name);

	    for (var name in attrs) {
	        element.setAttribute(name, attrs[name]);
	    }

	    return element;
	};

	var MIN_IN_DAY = 12 * 60;

	/**
	 * Converts minutes to Y offset in px.
	 *
	 * @param {Number} min
	 * @return {Number}
	 */
	exports.minToY = function (min) {
	    return conf.height * min / MIN_IN_DAY;
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Configuration shared between all components.
	 *
	 * @type {Object}
	 */
	module.exports = {
	    fontSize: 16,
	    height: 720,
	    timeline: {
	        width: 75,
	        start: 540,
	        end: 1290
	    },
	    canvas: {
	        width: 620,
	        padding: 10
	    }
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var jss = __webpack_require__(2);
	var utils = __webpack_require__(11);
	var styles = __webpack_require__(14);

	var sheet = jss.createStyleSheet(styles.rules);

	/**
	 * Canvas is a container view events can be added to.
	 */
	function Canvas() {
	    this.element = null;
	    this.contentElement = null;
	}

	module.exports = Canvas;

	/**
	 * Create canvas elements.
	 *
	 * @return {Canvas}
	 */
	Canvas.prototype.create = function () {
	    sheet.attach();

	    this.element = utils.element('div', {
	        'class': sheet.classes.canvas
	    });
	    this.contentElement = utils.element('div', {
	        'class': sheet.classes.content
	    });
	    this.element.appendChild(this.contentElement);

	    return this;
	};

	/**
	 * Add event.
	 *
	 * @param {Event} event
	 * @return {Canvas}
	 */
	Canvas.prototype.add = function (event) {
	    this.contentElement.appendChild(event.element);

	    return this;
	};

	/**
	 * Get content width.
	 *
	 * @return {Number}
	 */
	Canvas.prototype.getContentWidth = function () {
	    return styles.contentWidth;
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var conf = __webpack_require__(12);

	exports.width = conf.canvas.width;
	exports.height = conf.height;
	exports.padding = 10;
	exports.contentWidth = exports.width - exports.padding * 2;

	exports.rules = {
	    canvas: {
	        position: 'relative',
	        float: 'left',
	        width: exports.width + 'px',
	        height: exports.height + 'px',
	        background: '#ececec',
	        'border-left': '1px solid #d5d5d5',
	        'box-sizing': 'border-box'
	    },
	    content: {
	        position: 'absolute',
	        left: exports.padding + 'px',
	        width: exports.contentWidth + 'px',
	        height: exports.height + 'px'
	    }
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var jss = __webpack_require__(2);
	var utils = __webpack_require__(11);
	var markerTpl = __webpack_require__(16);

	var sheet = jss.createStyleSheet(__webpack_require__(17));

	/**
	 * Creates a timeline view.
	 */
	function Timeline(options) {
	    this.element = null;
	    this.start = options.start;
	    this.end = options.end;
	}

	module.exports = Timeline;

	/**
	 * Creates timeline elements.
	 *
	 * @return {Timeline}
	 */
	Timeline.prototype.create = function () {
	    sheet.attach();
	    this.element = utils.element('div', {
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
	};

	/**
	 * Create time marker element.
	 *
	 * @param {Obejct} options
	 * @return {Element}
	 */
	Timeline.prototype.createMarker = function (options) {
	    var element = utils.element('div', {
	        'class': sheet.classes.timeContainer
	    });
	    element.style.top = utils.minToY(options.min - this.start) + 'px';
	    element.innerHTML = markerTpl.compile({
	        time: options.time,
	        classes: sheet.classes,
	        suffix: options.suffix
	    });

	    return element;
	};

	/**
	 * Get PM/AM suffix.
	 *
	 * @param {Number} min
	 * @return {String}
	 */
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
/* 16 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Returns compiled template. Some template engine should be used in production
	 * use case.
	 *
	 * @param {Object} data
	 * @return {String}
	 */
	exports.compile = function (data) {
	    var timeClass = data.classes[data.suffix ? 'timeWithSuffix' : 'time'];
	    var html = '<span class="' + timeClass + '">' + data.time + '</span>';
	    if (data.suffix) {
	        html += '<span class="' + data.classes.suffix + '">' + data.suffix + '</span>';
	    }

	    return html;
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var conf = __webpack_require__(12);

	module.exports = {
	    timeline: {
	        position: 'relative',
	        float: 'left',
	        width: conf.timeline.width + 'px',
	        height: conf.height + 'px',
	        padding: '0 7px 0 0',
	        'box-sizing': 'border-box',
	        // Middle of the number should be the start.
	        'margin-top': -conf.fontSize / 2 + 'px'
	    },
	    timeContainer: {
	        position: 'absolute',
	        width: '100%',
	        'padding-right': '10px',
	        'text-align': 'right',
	        'box-sizing': 'border-box'
	    },
	    time: {
	        'font-size': '10px',
	        color: '#999'
	    },
	    timeWithSuffix: {
	        'font-size': '13px',
	        'font-weight': 'bold',
	        'margin-right': '5px'
	    },
	    suffix: {
	        'font-size': '10px',
	        color: '#999'
	    }
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Event = __webpack_require__(19);
	var distribute = __webpack_require__(22);

	/**
	 * Handles events creation and distribution.
	 */
	function EventsManager(canvas) {
	    this.canvas = canvas;
	    this.events = [];
	}

	module.exports = EventsManager;

	/**
	 * Destroy previously rendered events.
	 *
	 * @return {EventsManager}
	 */
	EventsManager.prototype.destroy = function () {
	    this.events.forEach(function (event) {
	        event.destroy();
	    });

	    return this;
	};

	/**
	 * Render events at the right position and the right size.
	 *
	 * @param {Array} events
	 * @return {EventsManager}
	 */
	EventsManager.prototype.set = function (events) {
	    this.events = events.map(function (options) {
	        return new Event(options);
	    });

	    return this;
	};

	/**
	 * Render events at the right position and the right size.
	 *
	 * @return {EventsManager}
	 */
	EventsManager.prototype.render = function () {
	    distribute(this.events, this.canvas).forEach(function (event) {
	        event.create();
	        this.canvas.add(event);
	    }, this);

	    return this;
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var jss = __webpack_require__(2);
	var utils = __webpack_require__(11);
	var contentTpl = __webpack_require__(20);

	var sheet = jss.createStyleSheet(__webpack_require__(21));

	var uid = 0;

	/**
	 * Event view constructor.
	 * @param {Object} options
	 */
	function Event(options) {
	    this.id = ++uid;
	    this.start = options.start;
	    this.end = options.end;
	    this.title = options.title || 'Sample Item';
	    this.location = options.location || 'Sample Location';
	    this.element = null;
	    this.style = null;
	}

	module.exports = Event;

	/**
	 * Create elements.
	 *
	 * @return {Event}
	 */
	Event.prototype.create = function () {
	    sheet.attach();
	    this.element = utils.element('div', {
	        'class': sheet.classes.container
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
	};

	/**
	 * Destroy event.
	 *
	 * @return {Event}
	 */
	Event.prototype.destroy = function () {
	    this.element.parentNode.removeChild(this.element);

	    return this;
	};

	/**
	 * Set inline styles.
	 *
	 * @return {Event}
	 */
	Event.prototype.setStyle = function (style) {
	    this.style = style;

	    return this;
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Returns compiled html for event content.
	 *
	 * @param {Object} data
	 * @return {String}
	 */
	exports.compile = function (data) {
	    return '' + '<div class="' + data.classes.content + '">' + '<h3 class="' + data.classes.title + '">' + data.title + '</h3>' + '<div class="' + data.classes.location + '">' + data.location + '</div>' + '</div>';
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {
	    container: {
	        position: 'absolute',
	        background: '#fff',
	        'border-left': '4px solid #4b6ea8',
	        'box-sizing': 'border-box'
	    },
	    content: {
	        padding: '7px',
	        overflow: 'hidden',
	        height: '100%',
	        border: '1px solid #d5d5d5',
	        'border-left': 'none',
	        'box-sizing': 'border-box'
	    },
	    title: {
	        color: '#4b6ea8',
	        margin: 0,
	        'font-size': '1em'
	    },
	    location: {
	        'font-size': '0.8em'
	    }
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(11);

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
	module.exports = function (events, canvas) {
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
	};

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

	    events.forEach(function createGroup(event) {
	        var group = eventGroupMap[event.id];
	        if (!group) {
	            group = eventGroupMap[event.id] = [event];
	            groups.push(group);
	        }

	        events.forEach(function addToGroup(_event) {
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

	    group.forEach(function createColumn(event) {
	        var column = eventStackMap[event.id];
	        if (!column) {
	            column = eventStackMap[event.id] = [event];
	            columns.push(column);
	        }

	        group.forEach(function addToColumn(_event) {
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
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var conf = __webpack_require__(12);

	module.exports = {
	    container: {
	        'font-size': conf.fontSize + 'px',
	        color: '#686868',
	        width: conf.timeline.width + conf.canvas.width + 'px'
	    }
	};

/***/ }
/******/ ])
});
;
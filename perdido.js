(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Perdido"] = factory();
	else
		root["Perdido"] = factory();
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

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _perdido = __webpack_require__(1);

	var _perdido2 = _interopRequireDefault(_perdido);

	exports['default'] = new _perdido2['default']();
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _column = __webpack_require__(2);

	var _column2 = _interopRequireDefault(_column);

	var _row = __webpack_require__(8);

	var _row2 = _interopRequireDefault(_row);

	var _flexContainer = __webpack_require__(9);

	var _flexContainer2 = _interopRequireDefault(_flexContainer);

	var _utils = __webpack_require__(10);

	var Perdido = function Perdido() {
	  _classCallCheck(this, Perdido);

	  this.column = _column2['default'];
	  this.row = _row2['default'];
	  this.flexContainer = _flexContainer2['default'];
	  this.utils = { clearFix: _utils.clearFix, edit: _utils.edit };
	};

	exports['default'] = Perdido;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = column;

	var _defaults = __webpack_require__(3);

	function column(columnVal) {
	  var cycle = arguments.length <= 1 || arguments[1] === undefined ? _defaults.CYCLE : arguments[1];
	  var gutter = arguments.length <= 2 || arguments[2] === undefined ? _defaults.GUTTER : arguments[2];
	  var flex = arguments.length <= 3 || arguments[3] === undefined ? _defaults.FLEX : arguments[3];

	  var style = {},
	      cycleVal = cycle;

	  if (cycle === 'auto' || flex === 'flex' || flex === 'no-flex') {
	    cycleVal = columnVal.split('/')[1];
	  } else {
	    cycleVal = cycle;
	  }

	  if (flex === 'flex') {
	    style = (0, _defaults.addFlex)(flex, style);

	    if (cycle !== 0) {
	      style['&:nth-child(' + cycleVal + 'n)'] = {
	        marginRight: '0'
	      };
	    }

	    style['&:last-child'] = {
	      marginRight: '0'
	    };

	    style['&:nth-child(n)'] = {
	      marginRight: gutter
	    };
	  } else {
	    if (cycle !== 0) {
	      style['&:nth-child(' + cycleVal + 'n + 1)'] = {
	        clear: 'left'
	      };

	      style['&:nth-child(' + cycleVal + 'n)'] = {
	        marginRight: '0'
	      };
	    }

	    style['&:last-child'] = {
	      marginRight: '0'
	    };

	    style['&:nth-child(n)'] = {
	      float: 'left',
	      marginRight: gutter,
	      clear: 'none'
	    };
	  }

	  style.width = (0, _defaults.calcDimension)(columnVal, gutter);

	  return style;
	}

	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.calcDimension = calcDimension;
	exports.addFlex = addFlex;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _reduceCssCalc = __webpack_require__(4);

	var _reduceCssCalc2 = _interopRequireDefault(_reduceCssCalc);

	var GUTTER = '30px';
	exports.GUTTER = GUTTER;
	var FLEX = 'no-flex';
	exports.FLEX = FLEX;
	var CYCLE = 'auto';

	exports.CYCLE = CYCLE;

	function calcDimension(val, gutter) {
	  if (gutter !== 0) {
	    return (0, _reduceCssCalc2['default'])('calc(99.99% * ' + val + ' - (' + gutter + ' - ' + gutter + ' * ' + val + '))', 10);
	  } else {
	    return (0, _reduceCssCalc2['default'])('calc(99.999999% * ' + val + ')', 10);
	  }
	}

	function addFlex(flex, style) {
	  if (flex === 'flex') {
	    style.flex = '0 0 auto';
	  }

	  return style;
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies
	 */
	var balanced = __webpack_require__(5)
	var reduceFunctionCall = __webpack_require__(6)

	/**
	 * Constantes
	 */
	var MAX_STACK = 100 // should be enough for a single calc()...
	var NESTED_CALC_RE = /(\+|\-|\*|\\|[^a-z]|)(\s*)(\()/g

	/**
	 * Global variables
	 */
	var stack

	/**
	 * Expose reduceCSSCalc plugin
	 *
	 * @type {Function}
	 */
	module.exports = reduceCSSCalc

	/**
	 * Reduce CSS calc() in a string, whenever it's possible
	 *
	 * @param {String} value css input
	 */
	function reduceCSSCalc(value, decimalPrecision) {
	  stack = 0
	  decimalPrecision = Math.pow(10, decimalPrecision === undefined ? 5 : decimalPrecision)

	  /**
	   * Evaluates an expression
	   *
	   * @param {String} expression
	   * @returns {String}
	   */
	  function evaluateExpression (expression, functionIdentifier, call) {
	    if (stack++ > MAX_STACK) {
	      stack = 0
	      throw new Error("Call stack overflow for " + call)
	    }

	    if (expression === "") {
	      throw new Error(functionIdentifier + "(): '" + call + "' must contain a non-whitespace string")
	    }

	    expression = evaluateNestedExpression(expression, call)

	    var units = getUnitsInExpression(expression)

	    // If multiple units let the expression be (i.e. browser calc())
	    if (units.length > 1) {
	      return functionIdentifier + "(" + expression + ")"
	    }

	    var unit = units[0] || ""

	    if (unit === "%") {
	      // Convert percentages to numbers, to handle expressions like: 50% * 50% (will become: 25%):
	      expression = expression.replace(/\b[0-9\.]+%/g, function(percent) {
	        return parseFloat(percent.slice(0, -1)) * 0.01
	      })
	    }

	    // Remove units in expression:
	    var toEvaluate = expression.replace(new RegExp(unit, "g"), "")
	    var result

	    try {
	      result = eval(toEvaluate)
	    }
	    catch (e) {
	      return functionIdentifier + "(" + expression + ")"
	    }

	    // Transform back to a percentage result:
	    if (unit === "%") {
	      result *= 100
	    }

	    // adjust rounding shit
	    // (0.1 * 0.2 === 0.020000000000000004)
	    result = Math.round(result * decimalPrecision) / decimalPrecision

	    // We don't need units for zero values...
	    if (result !== 0) {
	      result += unit
	    }

	    return result
	  }

	  /**
	   * Evaluates nested expressions
	   *
	   * @param {String} expression
	   * @returns {String}
	   */
	  function evaluateNestedExpression(expression, call) {
	    var evaluatedPart = ""
	    var nonEvaluatedPart = expression
	    var matches
	    while ((matches = NESTED_CALC_RE.exec(nonEvaluatedPart))) {
	      if (matches[0].index > 0) {
	        evaluatedPart += nonEvaluatedPart.substring(0, matches[0].index)
	      }

	      var balancedExpr = balanced("(", ")", nonEvaluatedPart.substring([0].index))
	      if (balancedExpr.body === "") {
	        throw new Error("'" + expression + "' must contain a non-whitespace string")
	      }

	      var evaluated = evaluateExpression(balancedExpr.body, "", call)

	      evaluatedPart += balancedExpr.pre + evaluated
	      nonEvaluatedPart = balancedExpr.post
	    }

	    return evaluatedPart + nonEvaluatedPart
	  }

	  return reduceFunctionCall(value, /((?:\-[a-z]+\-)?calc)\(/, evaluateExpression)
	}

	/**
	 * Checks what units are used in an expression
	 *
	 * @param {String} expression
	 * @returns {Array}
	 */

	function getUnitsInExpression(expression) {
	  var uniqueUnits = []
	  var unitRegEx = /[\.0-9]([%a-z]+)/g
	  var matches = unitRegEx.exec(expression)

	  while (matches) {
	    if (!matches || !matches[1]) {
	      continue
	    }

	    if (uniqueUnits.indexOf(matches[1]) === -1) {
	      uniqueUnits.push(matches[1])
	    }

	    matches = unitRegEx.exec(expression)
	  }

	  return uniqueUnits
	}


/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = function(a, b, str) {
	  var bal = 0;
	  var m = {};

	  for (var i = 0; i < str.length; i++) {
	    if (a == str.substr(i, a.length)) {
	      if (!('start' in m)) m.start = i;
	      bal++;
	    }
	    else if (b == str.substr(i, b.length) && 'start' in m) {
	      bal--;
	      if (!bal) {
	        m.end = i;
	        m.pre = str.substr(0, m.start);
	        m.body = (m.end - m.start > 1)
	          ? str.substring(m.start + a.length, m.end)
	          : '';
	        m.post = str.slice(m.end + b.length);
	        return m;
	      }
	    }
	  }
	};



/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * Module dependencies
	 */
	var balanced = __webpack_require__(7)

	/**
	 * Expose `reduceFunctionCall`
	 *
	 * @type {Function}
	 */
	module.exports = reduceFunctionCall

	/**
	 * Walkthrough all expressions, evaluate them and insert them into the declaration
	 *
	 * @param {Array} expressions
	 * @param {Object} declaration
	 */

	function reduceFunctionCall(string, functionRE, callback) {
	  var call = string
	  return getFunctionCalls(string, functionRE).reduce(function(string, obj) {
	    return string.replace(obj.functionIdentifier + "(" + obj.matches.body + ")", evalFunctionCall(obj.matches.body, obj.functionIdentifier, callback, call, functionRE))
	  }, string)
	}

	/**
	 * Parses expressions in a value
	 *
	 * @param {String} value
	 * @returns {Array}
	 * @api private
	 */

	function getFunctionCalls(call, functionRE) {
	  var expressions = []

	  var fnRE = typeof functionRE === "string" ? new RegExp("\\b(" + functionRE + ")\\(") : functionRE
	  do {
	    var searchMatch = fnRE.exec(call)
	    if (!searchMatch) {
	      return expressions
	    }
	    if (searchMatch[1] === undefined) {
	      throw new Error("Missing the first couple of parenthesis to get the function identifier in " + functionRE)
	    }
	    var fn = searchMatch[1]
	    var startIndex = searchMatch.index
	    var matches = balanced("(", ")", call.substring(startIndex))

	    if (!matches) {
	      throw new SyntaxError(fn + "(): missing closing ')' in the value '" + call + "'")
	    }

	    expressions.push({matches: matches, functionIdentifier: fn})
	    call = matches.post
	  }
	  while (fnRE.test(call))

	  return expressions
	}

	/**
	 * Evaluates an expression
	 *
	 * @param {String} expression
	 * @returns {String}
	 * @api private
	 */

	function evalFunctionCall (string, functionIdentifier, callback, call, functionRE) {
	  // allow recursivity
	  return callback(reduceFunctionCall(string, functionRE, callback), functionIdentifier, call)
	}


/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = function(a, b, str) {
	  var bal = 0;
	  var m = {};

	  for (var i = 0; i < str.length; i++) {
	    if (a == str.substr(i, a.length)) {
	      if (!('start' in m)) m.start = i;
	      bal++;
	    }
	    else if (b == str.substr(i, b.length) && 'start' in m) {
	      bal--;
	      if (!bal) {
	        m.end = i;
	        m.pre = str.substr(0, m.start);
	        m.body = (m.end - m.start > 1)
	          ? str.substring(m.start + a.length, m.end)
	          : '';
	        m.post = str.slice(m.end + b.length);
	        return m;
	      }
	    }
	  }
	};



/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = row;

	var _defaults = __webpack_require__(3);

	function row(rowVal) {
	  var gutter = arguments.length <= 1 || arguments[1] === undefined ? _defaults.GUTTER : arguments[1];
	  var flex = arguments.length <= 2 || arguments[2] === undefined ? _defaults.FLEX : arguments[2];

	  var style = {
	    width: '100%'
	  };

	  style = (0, _defaults.addFlex)(flex, style);

	  style.height = (0, _defaults.calcDimension)(rowVal, gutter);

	  style.marginBottom = gutter;

	  style['&:last-child'] = {
	    marginBottom: '0'
	  };

	  return style;
	}

	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = flexContainer;

	function flexContainer(direction) {
	  var style = {
	    display: 'flex'
	  };

	  if (direction === 'column') {
	    style['flex-flow'] = 'column nowrap';
	  } else {
	    style['flex-flow'] = 'row wrap';
	  }

	  return style;
	}

	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.clearFix = clearFix;
	exports.edit = edit;

	function clearFix() {
	  return {
	    '*zoom': '1',
	    '&:after': {
	      content: '""',
	      display: 'table',
	      clear: 'both'
	    },

	    '&:before': {
	      content: '""',
	      display: 'table'
	    }
	  };
	}

	function edit() {
	  return {
	    '&*:not(input):not(textarea):not(select)': {
	      backgroundColor: 'rgba(0, 0, 255, 0.1)'
	    }
	  };
	}

/***/ }
/******/ ])
});
;
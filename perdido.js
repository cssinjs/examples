(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["perdido"] = factory();
	else
		root["perdido"] = factory();
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

	/**
	 * Fluid Grid Systems in JSS, Perdido, a translation of Lost.
	 *
	 * @copyright Wellington Cordeiro 2015
	 * @website https://github.com/wldcordeiro/perdido
	 * @license MIT
	 */

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _perdido = __webpack_require__(1);

	var _perdido2 = _interopRequireDefault(_perdido);

	exports['default'] = new _perdido2['default']();
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _align2 = __webpack_require__(2);

	var _align3 = _interopRequireDefault(_align2);

	var _center2 = __webpack_require__(3);

	var _center3 = _interopRequireDefault(_center2);

	var _column2 = __webpack_require__(4);

	var _column3 = _interopRequireDefault(_column2);

	var _flexContainer = __webpack_require__(5);

	var _flexContainer2 = _interopRequireDefault(_flexContainer);

	var _masonry = __webpack_require__(6);

	var _move2 = __webpack_require__(7);

	var _move3 = _interopRequireDefault(_move2);

	var _offset2 = __webpack_require__(8);

	var _offset3 = _interopRequireDefault(_offset2);

	var _row2 = __webpack_require__(9);

	var _row3 = _interopRequireDefault(_row2);

	var _utils = __webpack_require__(10);

	var utils = _interopRequireWildcard(_utils);

	var _waffle2 = __webpack_require__(11);

	var _waffle3 = _interopRequireDefault(_waffle2);

	var _defaults = __webpack_require__(12);

	/**
	 * Main Perdido class.
	 *
	 * @api public
	 */

	var Perdido = (function () {
	  function Perdido() {
	    var gutter = arguments.length <= 0 || arguments[0] === undefined ? _defaults.GUTTER : arguments[0];
	    var flex = arguments.length <= 1 || arguments[1] === undefined ? _defaults.FLEX : arguments[1];
	    var cycle = arguments.length <= 2 || arguments[2] === undefined ? _defaults.CYCLE : arguments[2];
	    var offsetDir = arguments.length <= 3 || arguments[3] === undefined ? _defaults.OFFSET_DIR : arguments[3];

	    _classCallCheck(this, Perdido);

	    // Set the default values.
	    this.gutter = gutter;
	    this.flex = flex;
	    this.cycle = cycle;
	    this.offsetDir = offsetDir;

	    // Simple properties/methods.
	    this.flexContainer = _flexContainer2['default'];
	    this.utils = utils;
	  }

	  /**
	   * Creates a new instance of Perdido.
	   *
	   * @see Perdido
	   * @api public
	   */

	  Perdido.prototype.create = function create() {
	    var gutter = arguments.length <= 0 || arguments[0] === undefined ? _defaults.GUTTER : arguments[0];
	    var flex = arguments.length <= 1 || arguments[1] === undefined ? _defaults.FLEX : arguments[1];
	    var cycle = arguments.length <= 2 || arguments[2] === undefined ? _defaults.CYCLE : arguments[2];
	    var offsetDir = arguments.length <= 3 || arguments[3] === undefined ? _defaults.OFFSET_DIR : arguments[3];

	    return new Perdido(gutter, flex, cycle, offsetDir);
	  };

	  /**
	   * Aligns nested elements.
	   *
	   * @see align
	   * @api public
	   */

	  Perdido.prototype.align = function align(alignment) {
	    var flex = arguments.length <= 1 || arguments[1] === undefined ? _defaults.FLEX : arguments[1];

	    return _align3['default'](alignment, flex);
	  };

	  /**
	   * Centers a containing element.
	   *
	   * @see center
	   * @api public
	   */

	  Perdido.prototype.center = function center(maxWidth, padding) {
	    var flex = arguments.length <= 2 || arguments[2] === undefined ? _defaults.FLEX : arguments[2];

	    return _center3['default'](maxWidth, padding, flex);
	  };

	  /**
	   * Creates a column that is a fraction of its containing element's size.
	   *
	   * @see column
	   * @api public
	   */

	  Perdido.prototype.column = function column(columnVal) {
	    var cycle = arguments.length <= 1 || arguments[1] === undefined ? _defaults.CYCLE : arguments[1];
	    var gutter = arguments.length <= 2 || arguments[2] === undefined ? _defaults.GUTTER : arguments[2];
	    var flex = arguments.length <= 3 || arguments[3] === undefined ? _defaults.FLEX : arguments[3];

	    return _column3['default'](columnVal, cycle, gutter, flex);
	  };

	  /**
	   * Create a column for working with JS Masonry libraries like Isotope.
	   *
	   * @see masonry.masonryColumn
	   * @api public
	   */

	  Perdido.prototype.masonryColumn = function masonryColumn(columnVal) {
	    var gutter = arguments.length <= 1 || arguments[1] === undefined ? _defaults.GUTTER : arguments[1];
	    var flex = arguments.length <= 2 || arguments[2] === undefined ? _defaults.FLEX : arguments[2];

	    return _masonry.masonryColumn(columnVal, gutter, flex);
	  };

	  /**
	   * Create a wrapping element for working with JS Masonry libraries
	   * like Isotope.
	   *
	   * @see masonry.masonryWrap
	   * @api public
	   */

	  Perdido.prototype.masonryWrap = function masonryWrap() {
	    var flex = arguments.length <= 0 || arguments[0] === undefined ? _defaults.FLEX : arguments[0];
	    var gutter = arguments.length <= 1 || arguments[1] === undefined ? _defaults.GUTTER : arguments[1];

	    return _masonry.masonryWrap(flex, gutter);
	  };

	  /**
	   * Source ordering. Shift elements left, right, up, or down.
	   *
	   * @see move
	   * @api public
	   */

	  Perdido.prototype.move = function move(moveVal) {
	    var direction = arguments.length <= 1 || arguments[1] === undefined ? _defaults.OFFSET_DIR : arguments[1];
	    var gutter = arguments.length <= 2 || arguments[2] === undefined ? _defaults.GUTTER : arguments[2];

	    return _move3['default'](moveVal, direction, gutter);
	  };

	  /**
	   * Margin to the left, right, bottom, or top, of an element.
	   *
	   * @see offset
	   * @api public
	   */

	  Perdido.prototype.offset = function offset(offsetVal) {
	    var direction = arguments.length <= 1 || arguments[1] === undefined ? _defaults.OFFSET_DIR : arguments[1];
	    var gutter = arguments.length <= 2 || arguments[2] === undefined ? _defaults.GUTTER : arguments[2];

	    return _offset3['default'](offsetVal, direction, gutter);
	  };

	  /**
	   * Creates a row that is a fraction of its containing element's size.
	   *
	   * @see row
	   * @api public
	   */

	  Perdido.prototype.row = function row(rowVal) {
	    var gutter = arguments.length <= 1 || arguments[1] === undefined ? _defaults.GUTTER : arguments[1];
	    var flex = arguments.length <= 2 || arguments[2] === undefined ? _defaults.FLEX : arguments[2];

	    return _row3['default'](rowVal, gutter, flex);
	  };

	  /**
	   * Creates a block that is a fraction of the size of its containing element.
	   *
	   * @see waffle
	   * @api public
	   */

	  Perdido.prototype.waffle = function waffle(waffleVal) {
	    var cycle = arguments.length <= 1 || arguments[1] === undefined ? _defaults.CYCLE : arguments[1];
	    var gutter = arguments.length <= 2 || arguments[2] === undefined ? _defaults.GUTTER : arguments[2];
	    var flex = arguments.length <= 3 || arguments[3] === undefined ? _defaults.FLEX : arguments[3];

	    return _waffle3['default'](waffleVal, cycle, gutter, flex);
	  };

	  return Perdido;
	})();

	exports['default'] = Perdido;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	/**
	 * alignProps: Simple helper function that returns the appropriate JSON
	 *             object for the style block.
	 *
	 * @param  {string} position  value for position rule
	 * @param  {string} top       value for top rule
	 * @param  {string} right     value for right rule
	 * @param  {string} bottom    value for bottom rule
	 * @param  {string} left      value for left rule
	 * @param  {string} transform value for transform rule
	 * @return {object}           An object containing the valid JSS rules and
	 *                            values.
	 */
	'use strict';

	exports.__esModule = true;
	exports['default'] = align;
	function alignProps(position, top, right, bottom, left, transform) {
	  return {
	    position: position,
	    top: top,
	    right: right,
	    bottom: bottom,
	    left: left,
	    transform: transform
	  };
	}

	/**
	 * Perdido.align: Align nested elements. Apply this to a parent container.
	 *
	 * @param {string} [reset|horizontal|vertical|top-left|top-center|top|
	 * top-right|middle-left|left|middle-center|center|middle-right|right|
	 * bottom-left|bottom-center|bottom|bottom-right] - The position the nested
	 *   element takes relative to the containing element.
	 * @param {boolean} - Determines whether this element should use Flexbox or not.
	 * @return {object} an object containing the valid JSS rules and values to align
	 *                  nested elements.
	 */

	function align(alignment, flex) {
	  var style = {};

	  if (flex === false) {
	    if (alignment === 'reset') {
	      style.position = 'static';

	      style['& > *'] = alignProps('static', 'auto', 'auto', 'auto', 'auto', 'translate(0, 0)');
	    } else {
	      style.position = 'relative';

	      if (alignment === 'horizontal') {
	        style['& > *'] = alignProps('absolute', 'auto', 'auto', 'auto', '50%', 'translate(-50%, 0)');
	      } else if (alignment === 'vertical') {
	        style['& > *'] = alignProps('absolute', '50%', 'auto', 'auto', 'auto', 'translate(0, -50%)');
	      } else if (alignment === 'top-left') {
	        style['& > *'] = alignProps('absolute', '0', 'auto', 'auto', '0', 'translate(0, 0)');
	      } else if (alignment === 'top-center' || alignment === 'top') {
	        style['& > *'] = alignProps('absolute', '0', 'auto', 'auto', '50%', 'translate(-50%, 0)');
	      } else if (alignment === 'top-right') {
	        style['& > *'] = alignProps('absolute', '0', '0', 'auto', 'auto', 'translate(0, 0)');
	      } else if (alignment === 'middle-left' || alignment === 'left') {
	        style['& > *'] = alignProps('absolute', '50%', 'auto', 'auto', '0', 'translate(0, -50%)');
	      } else if (alignment === 'middle-center' || alignment === 'center') {
	        style['& > *'] = alignProps('absolute', '50%', 'auto', 'auto', '50%', 'translate(-50%, -50%)');
	      } else if (alignment === 'middle-right' || alignment === 'right') {
	        style['& > *'] = alignProps('absolute', '50%', '0', 'auto', 'auto', 'translate(0, -50%)');
	      } else if (alignment === 'bottom-left') {
	        style['& > *'] = alignProps('absolute', 'auto', 'auto', '0', '0', 'translate(0, 0)');
	      } else if (alignment === 'bottom-center' || alignment === 'bottom') {
	        style['& > *'] = alignProps('absolute', 'auto', 'auto', '0', '50%', 'translate(-50%, 0)');
	      } else if (alignment === 'bottom-right') {
	        style['& > *'] = alignProps('absolute', 'auto', '0', '0', 'auto', 'translate(0, 0)');
	      }
	    }
	  } else {
	    if (alignment === 'reset') {
	      style.display = 'initial';

	      style['& > *'] = {
	        justifyContent: 'inherit',
	        alignItems: 'inherit'
	      };
	    } else {
	      style.display = 'flex';

	      if (alignment === 'horizontal') {
	        style['& > *'] = {
	          justifyContent: 'center',
	          alignItems: 'inherit'
	        };
	      } else if (alignment === 'vertical') {
	        style['& > *'] = {
	          justifyContent: 'inherit',
	          alignItems: 'center'
	        };
	      } else if (alignment === 'top-left') {
	        style['& > *'] = {
	          justifyContent: 'flex-start',
	          alignItems: 'flex-start'
	        };
	      } else if (alignment === 'top-center' || alignment === 'top') {
	        style['& > *'] = {
	          justifyContent: 'center',
	          alignItems: 'flex-start'
	        };
	      } else if (alignment === 'top-right') {
	        style['& > *'] = {
	          justifyContent: 'flex-end',
	          alignItems: 'flex-start'
	        };
	      } else if (alignment === 'middle-left' || alignment === 'left') {
	        style['& > *'] = {
	          justifyContent: 'flex-start',
	          alignItems: 'center'
	        };
	      } else if (alignment === 'middle-center' || alignment === 'center') {
	        style['& > *'] = {
	          justifyContent: 'center',
	          alignItems: 'center'
	        };
	      } else if (alignment === 'middle-right' || alignment === 'right') {
	        style['& > *'] = {
	          justifyContent: 'flex-end',
	          alignItems: 'center'
	        };
	      } else if (alignment === 'bottom-left') {
	        style['& > *'] = {
	          justifyContent: 'flex-start',
	          alignItems: 'flex-end'
	        };
	      } else if (alignment === 'bottom-center' || alignment === 'bottom') {
	        style['& > *'] = {
	          justifyContent: 'center',
	          alignItems: 'flex-end'
	        };
	      } else if (alignment === 'bottom-right') {
	        style['& > *'] = {
	          justifyContent: 'flex-end',
	          alignItems: 'flex-end'
	        };
	      }
	    }
	  }

	  return style;
	}

	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports) {

	/**
	 * Perdido.center: Horizontally center a containing element and apply padding
	 * to it.
	 *
	 * @param  {length} maxWidth a max width to assign of any unit type.
	 * @param  {length} padding  left and right padding on the element, can be
	 *                           any unit.
	 * @param  {boolean} flex     determines whether to use flex or not.
	 * @return {object} an object containing the valid JSS rules and values
	 *                  to center containing elements.
	 */

	'use strict';

	exports.__esModule = true;
	exports['default'] = center;

	function center(maxWidth, padding, flex) {
	  var style = {
	    maxWidth: maxWidth,
	    marginLeft: 'auto',
	    marginRight: 'auto'
	  };

	  if (padding !== null) {
	    style.paddingLeft = padding;
	    style.paddingRight = padding;
	  }

	  if (flex === false) {
	    style['&:before'] = {
	      content: "''",
	      display: 'table'
	    };

	    style['&:after'] = {
	      content: "''",
	      display: 'table',
	      clear: 'both'
	    };
	  } else {
	    style.display = 'flex';
	    style.flexFlow = 'row wrap';
	  }

	  return style;
	}

	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports) {

	/**
	 * Perdido.column: Creates a column that is a fraction of the size of its
	 * containing element's width with a gutter.
	 *
	 * @param {string} [fraction] - This is a simple fraction of the containing
	 *   element's width.
	 * @param {integer} [cycle] - Perdido works by assigning a margin-right to all
	 *   elements except the last in the row. If settings.cycle is set to auto
	 *   it will do this by default by using the denominator of the fraction you
	 *   pick. To override the default use this param.,
	 *   e.g.: {'.foo': { extend: Perdido.column('2/4', 2)}}
	 * @param {length} [gutter] - how many units wide the gutter should be.
	 * @param {boolean}  - Determines whether this element should use Flexbox
	 *                     or not.
	 * @return {object} an object containing the valid JSS rules and values to
	 *                  create a column.
	 */
	'use strict';

	exports.__esModule = true;
	exports['default'] = column;

	function column(columnVal, cycle, gutter, flex) {
	  var style = {},
	      cycleVal = cycle;

	  if (columnVal !== 'none') {
	    if (cycle === -1) {
	      cycleVal = parseInt(columnVal.split('/')[1], 10);
	    } else {
	      cycleVal = cycle;
	    }

	    if (gutter !== '0') {
	      style.width = 'calc(99.99% * ' + columnVal + ' - (' + gutter + ' - ' + gutter + ' * ' + columnVal + '))';
	    } else {
	      style.width = 'calc(99.999999% * ' + columnVal + ')';
	    }

	    if (flex === true) {
	      style.flex = '0 0 auto';

	      style['&:nth-child(n)'] = {
	        marginRight: gutter
	      };

	      style['&:last-child'] = {
	        marginRight: '0'
	      };

	      style['&:nth-child(' + cycleVal + 'n)'] = {
	        float: 'right'
	      };

	      if (cycle !== 0) {
	        style['&:nth-child(' + cycleVal + 'n)'].marginRight = '0';
	      }
	    } else {
	      style['&:nth-child(n)'] = {
	        float: 'left',
	        marginRight: gutter,
	        clear: 'none'
	      };

	      style['&:last-child'] = {
	        marginRight: '0'
	      };

	      style['&:nth-child(' + cycleVal + 'n)'] = {
	        float: 'right'
	      };

	      if (cycle !== 0) {
	        style['&:nth-child(' + cycleVal + 'n)'].marginRight = '0';

	        style['&:nth-child(' + cycleVal + 'n + 1)'] = {
	          clear: 'left'
	        };
	      }
	    }
	  } else {
	    style.width = 'auto';

	    style['&:last-child'] = {
	      float: 'none',
	      clear: 'none',
	      marginRight: '0',
	      width: 'auto'
	    };

	    style['&:nth-child(n)'] = {
	      float: 'none',
	      clear: 'none',
	      marginRight: '0',
	      width: 'auto'
	    };

	    style['&:nth-child(1n + 1)'] = {
	      float: 'none',
	      clear: 'none',
	      marginRight: '0',
	      width: 'auto'
	    };

	    style['&:nth-child(1n)'] = {
	      float: 'none',
	      clear: 'none',
	      marginRight: '0',
	      width: 'auto'
	    };
	  }

	  return style;
	}

	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports) {

	/**
	 * Perdido.flexContainer: Creates a Flexbox container.
	 *
	 * @param {string} [row|column] - The flex-direction the container should
	 *   create. This is typically opposite to the element you're creating so a
	 *   row would need `Perdido.flexContainer('column')`.
	 * @return {object} an object containing the valid JSS rules and values to
	 *                  create a flexbox container.
	 */
	'use strict';

	exports.__esModule = true;
	exports['default'] = flexContainer;

	function flexContainer(direction) {
	  var style = {
	    display: 'flex'
	  };

	  if (direction === 'column') {
	    style.flexFlow = 'column nowrap';
	  } else {
	    style.flexFlow = 'row wrap';
	  }

	  return style;
	}

	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports) {

	/**
	 * Perdido.masonryColumn: Creates a column for working with JS masonry
	 *                        libraries like Isotope. Assigns a margin to
	 *                        each side of the element.
	 *
	 * @param  {string} columnVal  fraction of the containing element's size.
	 * @param  {string} gutter how many units wide the gutter should be.
	 * @param  {boolean} flex  boolean that determines whether to use flexbox.
	 * @return {object} an object containing the valid JSS rules and values to
	 *                  create a masonry grid column.
	 */
	'use strict';

	exports.__esModule = true;
	exports.masonryColumn = masonryColumn;
	exports.masonryWrap = masonryWrap;

	function masonryColumn(columnVal, gutter, flex) {
	  var style = {},
	      unit = gutter.match(/\D/g).join('');

	  if (flex === true) {
	    style.flex = '0 0 auto';
	  } else {
	    style.float = 'left';
	  }

	  if (gutter !== '0') {
	    style.width = 'calc(99.99% * ' + columnVal + ' - ' + gutter + ')';
	    style.marginLeft = '' + parseInt(gutter, 10) / 2 + unit;
	    style.marginRight = '' + parseInt(gutter, 10) / 2 + unit;
	  } else {
	    style.width = 'calc(99.99% * ' + columnVal + ')';
	    style.marginLeft = '' + parseInt(gutter, 10) / 2 + unit;
	    style.marginRight = '' + parseInt(gutter, 10) / 2 + unit;
	  }

	  return style;
	}

	/**
	 * Perdido.masonryWrap: Creates a wrapping element for working with JS Masonry
	 *                      libraries like Isotope. Assigns a negative margin on
	 *                      each side of this wrapping element.
	 *
	 * @param  {boolean} flex  boolean that determines whether to use flexbox.
	 * @param  {string} gutter how many units wide the gutter should be.
	 * @return {object} an object containing the valid JSS rules and values to
	 *                  create a masonry grid wrapping element.
	 */

	function masonryWrap(flex, gutter) {
	  var style = {};
	  if (flex === false) {
	    style['&:before'] = {
	      content: "''",
	      display: 'table'
	    };

	    style['&:after'] = {
	      content: "''",
	      display: 'table',
	      clear: 'both'
	    };
	  } else {
	    style.display = 'flex';
	    style.flexFlow = 'row wrap';
	  }

	  var unit = gutter.match(/\D/g).join('');

	  style.marginLeft = '' + parseInt(gutter, 10) / -2 + unit;
	  style.marginRight = '' + parseInt(gutter, 10) / -2 + unit;

	  return style;
	}

/***/ },
/* 7 */
/***/ function(module, exports) {

	/**
	 * Perdido.move: Source ordering. Shift elements left, right, up, or down, by
	 *               their left or top position by passing a positive or negative
	 *               fraction.
	 * @param  {string} moveVal   fraction of the container to be shifted.
	 * @param  {string} direction direction the grid should be going. Should
	 *                            be opposite of column or row it's being used on.
	 * @param  {string} gutter    Adjust the size of the gutter for this movement.
	 *                            Should match the element's gutter.
	 * @return {object} an object containing the valid JSS rules and values to shift
	 *                  an element around the grid.
	 */
	'use strict';

	exports.__esModule = true;
	exports['default'] = move;

	function move(moveVal, direction, gutter) {
	  var style = {
	    position: 'relative'
	  };

	  if (direction === 'column') {
	    if (gutter !== '0') {
	      style.top = ['calc(99.99% * ' + moveVal + ' - (' + gutter + ' - ' + gutter, ' * ' + moveVal + ') + ' + gutter + ')'].join('');
	    } else {
	      style.top = 'calc(99.999999% * ' + moveVal + ')';
	    }
	  } else {
	    if (gutter !== '0') {
	      style.left = ['calc(99.99% * ' + moveVal + ' - (' + gutter + ' - ' + gutter, ' * ' + moveVal + ') + ' + gutter + ')'].join('');
	    } else {
	      style.left = 'calc(99.999999% * ' + moveVal + ')';
	    }
	  }

	  return style;
	}

	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports) {

	/**
	 * Perdido.offset: Margin to the left, right, bottom, or top, of an element
	 * depending on if the fraction passed is positive or negative. It works for
	 * both horizontal and vertical grids but not both.
	 *
	 * @param  {string} offsetVal Fraction of the container to be offset.
	 * @param  {string} direction Direction the grid is going. Should be the
	 *                            opposite of the column or row it's being used on.
	 *                            Defaults to row.
	 * @param  {string} gutter    How large the gutter involved is.
	 * @return {object}           An object containing the valid JSS rules and
	 *                            values to offset elements.
	 */
	'use strict';

	exports.__esModule = true;
	exports['default'] = offset;

	function offset(offsetVal, direction, gutter) {
	  var style = {},
	      numerator = parseInt(offsetVal.split('/')[0], 10);

	  if (direction === 'column') {
	    if (numerator > 0) {
	      if (gutter !== '0') {
	        style.marginBottom = ['calc(99.99% * ' + offsetVal + ' - (' + gutter + ' - ' + gutter + ' * ' + offsetVal + ')', ' + (' + gutter + ' * 2)) !important'].join('');
	      } else {
	        style.marginBottom = 'calc(99.999999% * ' + offsetVal + ') !important';
	      }
	    } else if (numerator < 0) {
	      if (gutter !== '0') {
	        style.marginTop = ['calc(99.99% * (' + offsetVal + ' * -1) - ', '(' + gutter + ' - ' + gutter + ' * (' + offsetVal + ' * -1))', ' + ' + gutter + ') !important'].join('');
	      } else {
	        style.marginTop = 'calc(99.999999% * ' + offsetVal + ') !important';
	      }
	    } else {
	      style.marginTop = '0 !important';
	      style.marginBottom = gutter + ' !important';
	    }
	  } else {
	    if (numerator > 0) {
	      if (gutter !== '0') {
	        style.marginRight = ['calc(99.99% * ' + offsetVal + ' - (' + gutter + ' - ' + gutter, ' * ' + offsetVal + ') + (' + gutter + ' * 2)) !important'].join('');
	      } else {
	        style.marginRight = 'calc(99.999999% * ' + offsetVal + ') !important';
	      }
	    } else if (numerator < 0) {
	      if (offsetVal !== '0') {
	        style.marginLeft = ['calc(99.99% * (' + offsetVal + ' * -1) - ', '(' + gutter + ' - ' + gutter + ' * (' + offsetVal + ' * -1))', ' + ' + gutter + ') !important'].join('');
	      } else {
	        style.marginLeft = 'calc(99.999999% * ' + offsetVal + ') !important';
	      }
	    } else {
	      style.marginLeft = '0 !important';
	      style.marginRight = gutter + ' !important';
	    }
	  }

	  return style;
	}

	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports) {

	/**
	 * Perdido.row: Creates a row that is a fraction of the size of its containing
	 *              element's height with a gutter.
	 *
	 * @param  {string} rowVal fraction of the containing element's height.
	 * @param  {string} gutter The bottom margin size of the element.
	 * @param  {boolean} flex   Whether to utilize flexbox or not
	 * @return {object} an object containing the valid JSS rules and values to
	 *                  create a row.
	 */
	'use strict';

	exports.__esModule = true;
	exports['default'] = row;

	function row(rowVal, gutter, flex) {
	  var style = {
	    width: '100%'
	  };

	  if (flex === true) {
	    style.flex = '0 0 auto';
	  }

	  if (gutter !== '0') {
	    style.height = 'calc(99.99% * ' + rowVal + ' - (' + gutter + ' - ' + gutter + ' * ' + rowVal + '))';
	  } else {
	    style.height = 'calc(99.999999% * ' + rowVal + ')';
	  }

	  style.marginBottom = gutter;

	  style['&:last-child'] = {
	    marginBottom: '0'
	  };

	  return style;
	}

	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports) {

	/**
	 * Perdido.utils.clearFix: An object containing the styles necessary to apply
	 *                         a clear fix to an element.
	 * @type {Object}
	 */
	'use strict';

	exports.__esModule = true;
	var clearFix = {
	  '*zoom': '1',

	  '&:before': {
	    content: "''",
	    display: 'table'
	  },

	  '&:after': {
	    content: "''",
	    display: 'table',
	    clear: 'both'
	  }
	};

	exports.clearFix = clearFix;
	/**
	 * Perdido.utils.edit: An object containing the styling to apply an "edit" or
	 *                     "debug" view.
	 * @type {Object}
	 */
	var edit = {
	  '& *:not(input):not(textarea):not(select)': {
	    backgroundColor: 'rgba(0, 0, 255, 0.1)'
	  }
	};
	exports.edit = edit;

/***/ },
/* 11 */
/***/ function(module, exports) {

	/**
	 * Perdido.waffle: Creates a block that is a fraction of the size of its
	 *                 containing element's width AND height with a gutter on
	 *                 the right and bottom.
	 *
	 * @param  {string} waffleVal This is a simple fraction of the containing
	 *                            element's width and height.
	 * @param {integer} [cycle] - Perdido works by assigning a margin-right/bottom
	 *   to all elements except the last in the row. If settings.cycle is set to
	 *   auto it will do this by default by using the denominator of the fraction
	 *   you pick. To override the default use this param.,
	 *   e.g.: {'.foo': { extend: Perdido.waffle('2/4', 2)}}
	 * @param {length} [gutter] - how many units wide the gutter should be.
	 * @param  {boolean} flex      Determines whether to use flexbox
	 * @return {object} an object containing the valid JSS rules and values to
	 *                  create a waffle grid.
	 */
	'use strict';

	exports.__esModule = true;
	exports['default'] = waffle;

	function waffle(waffleVal, cycle, gutter, flex) {
	  var style = {},
	      cycleVal = undefined;

	  if (cycle === -1) {
	    cycleVal = waffleVal.split('/')[1];
	  } else {
	    cycleVal = cycle;
	  }

	  if (flex === true) {
	    style.flex = '0 0 auto';

	    style['&:nth-child(n)'] = {
	      marginRight: gutter,
	      marginBottom: gutter
	    };

	    style['&:last-child'] = {
	      marginRight: '0',
	      marginBottom: '0'
	    };

	    if (cycleVal !== 0) {
	      style['&:nth-child(' + cycleVal + 'n)'] = {
	        marginRight: '0',
	        float: 'right'
	      };

	      style['&:nth-last-child(-n + ' + cycleVal + ')'] = {
	        marginBottom: '0'
	      };
	    }
	  } else {
	    style['&:nth-child(n)'] = {
	      float: 'left',
	      marginRight: gutter,
	      marginBottom: gutter,
	      clear: 'none'
	    };

	    style['&:last-child'] = {
	      marginRight: '0',
	      marginBottom: '0'
	    };

	    if (cycleVal !== 0) {
	      style['&:nth-child(' + cycleVal + 'n)'] = {
	        marginRight: '0',
	        float: 'right'
	      };
	      style['&:nth-child(' + cycleVal + 'n + 1)'] = {
	        clear: 'left'
	      };

	      style['&:nth-last-child(-n + ' + cycleVal + ')'] = {
	        marginBottom: '0'
	      };
	    }
	  }

	  if (gutter !== '0') {
	    style.width = 'calc(99.99% * ' + waffleVal + ' - (' + gutter + ' - ' + gutter + ' * ' + waffleVal + '))';
	    style.height = 'calc(99.99% * ' + waffleVal + ' - (' + gutter + ' - ' + gutter + ' * ' + waffleVal + '))';
	  } else {
	    style.width = 'calc(99.999999% * ' + waffleVal + ')';
	    style.height = 'calc(99.999999% * ' + waffleVal + ')';
	  }

	  return style;
	}

	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports) {

	/**
	 * GUTTER: The default length of the gutters in Perdido grids.
	 * @type {string}
	 */
	'use strict';

	exports.__esModule = true;
	var GUTTER = '30px';
	exports.GUTTER = GUTTER;
	/**
	 * FLEX: Whether to utilize flexbox or not.
	 * @type {boolean}
	 */
	var FLEX = false;
	exports.FLEX = FLEX;
	/**
	 * CYCLE: Which column to cycle or for margin-right, defaults to auto, allowing
	 *        Perdido to decide..
	 * @type {string}
	 */
	var CYCLE = -1;
	exports.CYCLE = CYCLE;
	/**
	 * OFFSET_DIR: The default direct of the offsets in Perdido grids.
	 * @type {string}
	 */
	var OFFSET_DIR = 'row';
	exports.OFFSET_DIR = OFFSET_DIR;

/***/ }
/******/ ])
});
;
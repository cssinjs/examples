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

	var _flexContainer = __webpack_require__(6);

	var _flexContainer2 = _interopRequireDefault(_flexContainer);

	var _masonry = __webpack_require__(7);

	var _move2 = __webpack_require__(8);

	var _move3 = _interopRequireDefault(_move2);

	var _offset2 = __webpack_require__(9);

	var _offset3 = _interopRequireDefault(_offset2);

	var _row2 = __webpack_require__(10);

	var _row3 = _interopRequireDefault(_row2);

	var _utils = __webpack_require__(11);

	var utils = _interopRequireWildcard(_utils);

	var _waffle2 = __webpack_require__(12);

	var _waffle3 = _interopRequireDefault(_waffle2);

	var _defaults = __webpack_require__(5);

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

	    this.flexContainer = _flexContainer2['default'];
	    this.utils = utils;
	  }

	  Perdido.prototype.create = function create() {
	    var gutter = arguments.length <= 0 || arguments[0] === undefined ? this.gutter : arguments[0];
	    var flex = arguments.length <= 1 || arguments[1] === undefined ? this.flex : arguments[1];
	    var cycle = arguments.length <= 2 || arguments[2] === undefined ? this.cycle : arguments[2];
	    var offsetDir = arguments.length <= 3 || arguments[3] === undefined ? this.offsetDir : arguments[3];

	    return new Perdido(gutter, flex, cycle, offsetDir);
	  };

	  Perdido.prototype.align = function align(alignment) {
	    var flex = arguments.length <= 1 || arguments[1] === undefined ? this.flex : arguments[1];

	    return _align3['default'](alignment, flex);
	  };

	  Perdido.prototype.center = function center(maxWidth, padding) {
	    var flex = arguments.length <= 2 || arguments[2] === undefined ? this.flex : arguments[2];

	    return _center3['default'](maxWidth, padding, flex);
	  };

	  Perdido.prototype.column = function column(columnVal) {
	    var cycle = arguments.length <= 1 || arguments[1] === undefined ? this.cycle : arguments[1];
	    var gutter = arguments.length <= 2 || arguments[2] === undefined ? this.gutter : arguments[2];
	    var flex = arguments.length <= 3 || arguments[3] === undefined ? this.flex : arguments[3];

	    return _column3['default'](columnVal, cycle, gutter, flex);
	  };

	  Perdido.prototype.masonryColumn = function masonryColumn(columnVal) {
	    var gutter = arguments.length <= 1 || arguments[1] === undefined ? this.gutter : arguments[1];
	    var flex = arguments.length <= 2 || arguments[2] === undefined ? this.flex : arguments[2];

	    return _masonry.masonryColumn(columnVal, gutter, flex);
	  };

	  Perdido.prototype.masonryWrap = function masonryWrap() {
	    var flex = arguments.length <= 0 || arguments[0] === undefined ? this.flex : arguments[0];
	    var gutter = arguments.length <= 1 || arguments[1] === undefined ? this.gutter : arguments[1];

	    return _masonry.masonryWrap(flex, gutter);
	  };

	  Perdido.prototype.move = function move(moveVal) {
	    var direction = arguments.length <= 1 || arguments[1] === undefined ? this.offsetDir : arguments[1];
	    var gutter = arguments.length <= 2 || arguments[2] === undefined ? this.gutter : arguments[2];

	    return _move3['default'](moveVal, direction, gutter);
	  };

	  Perdido.prototype.offset = function offset(offsetVal) {
	    var direction = arguments.length <= 1 || arguments[1] === undefined ? this.offsetDir : arguments[1];
	    var gutter = arguments.length <= 2 || arguments[2] === undefined ? this.gutter : arguments[2];

	    return _offset3['default'](offsetVal, direction, gutter);
	  };

	  Perdido.prototype.row = function row(rowVal) {
	    var gutter = arguments.length <= 1 || arguments[1] === undefined ? this.gutter : arguments[1];
	    var flex = arguments.length <= 2 || arguments[2] === undefined ? this.flex : arguments[2];

	    return _row3['default'](rowVal, gutter, flex);
	  };

	  Perdido.prototype.waffle = function waffle(waffleVal) {
	    var cycle = arguments.length <= 1 || arguments[1] === undefined ? this.cycle : arguments[1];
	    var gutter = arguments.length <= 2 || arguments[2] === undefined ? this.gutter : arguments[2];
	    var flex = arguments.length <= 3 || arguments[3] === undefined ? this.flex : arguments[3];

	    return _waffle3['default'](waffleVal, cycle, gutter, flex);
	  };

	  return Perdido;
	})();

	exports['default'] = Perdido;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

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

	function align(alignment, flex) {
	  var style = {};

	  if (flex !== 'flex') {
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

	'use strict';

	exports.__esModule = true;
	exports['default'] = center;

	function center(maxWidth, padding, flex) {
	  var style = {
	    maxWidth: maxWidth,
	    marginLeft: 'auto',
	    marginRight: 'auto'
	  };

	  if (padding !== undefined) {
	    style.paddingLeft = padding;
	    style.paddingRight = padding;
	  }

	  if (flex === 'no-flex') {
	    style['*zoom'] = '1';

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
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = column;

	var _defaults = __webpack_require__(5);

	function column(columnVal, cycle, gutter, flex) {
	  var style = {},
	      cycleVal = cycle;

	  if (columnVal !== 'none') {
	    if (cycle === 'auto') {
	      cycleVal = columnVal.split('/')[1];
	    } else {
	      cycleVal = cycle;
	    }

	    style.width = _defaults.calcDimension(columnVal, gutter);

	    if (flex === 'flex') {
	      style = _defaults.addFlex(flex, style);

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

	'use strict';

	exports.__esModule = true;
	exports.calcDimension = calcDimension;
	exports.addFlex = addFlex;
	var GUTTER = '30px';
	exports.GUTTER = GUTTER;
	var FLEX = 'no-flex';
	exports.FLEX = FLEX;
	var CYCLE = 'auto';
	exports.CYCLE = CYCLE;
	var OFFSET_DIR = 'row';

	exports.OFFSET_DIR = OFFSET_DIR;

	function calcDimension(val, gutter) {
	  if (gutter !== '0') {
	    return 'calc(99.99% * ' + val + ' - (' + gutter + ' - ' + gutter + ' * ' + val + '))';
	  } else {
	    return 'calc(99.999999% * ' + val + ')';
	  }
	}

	function addFlex(flex, style) {
	  if (flex === 'flex') {
	    style.flex = '0 0 auto';
	  }

	  return style;
	}

/***/ },
/* 6 */
/***/ function(module, exports) {

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
/* 7 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.masonryColumn = masonryColumn;
	exports.masonryWrap = masonryWrap;

	function masonryColumn(columnVal, gutter, flex) {
	  var style = {},
	      unit = gutter.match(/\D/g).join('');

	  if (flex === 'flex') {
	    style.flex = '0 0 auto';
	  } else {
	    style.float = 'left';
	  }

	  if (gutter !== '0') {
	    style.width = 'calc(99.99% * ' + columnVal + ' - ' + gutter + ')';
	    style.marginLeft = '' + parseInt(gutter) / 2 + unit;
	    style.marginRight = '' + parseInt(gutter) / 2 + unit;
	  } else {
	    style.width = 'calc(99.99% * ' + columnVal + ')';
	    style.marginLeft = '' + parseInt(gutter) / 2 + unit;
	    style.marginRight = '' + parseInt(gutter) / 2 + unit;
	  }

	  return style;
	}

	function masonryWrap(flex, gutter) {
	  var style = {};
	  if (flex !== 'flex') {
	    style['*zoom'] = '1';

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

	  style.marginLeft = '' + parseInt(gutter) / -2 + unit;
	  style.marginRight = '' + parseInt(gutter) / -2 + unit;

	  return style;
	}

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = move;

	function move(moveVal, direction, gutter) {
	  var style = {
	    position: 'relative'
	  };

	  if (direction === 'column') {
	    if (gutter !== '0') {
	      style.top = 'calc(99.99% * ' + moveVal + ' - (' + gutter + ' - ' + gutter + ' * ' + moveVal + ') + ' + gutter + ')';
	    } else {
	      style.top = 'calc(99.999999% * ' + moveVal + ')';
	    }
	  } else {
	    if (gutter !== '0') {
	      style.left = 'calc(99.99% * ' + moveVal + ' - (' + gutter + ' - ' + gutter + ' * ' + moveVal + ') + ' + gutter + ')';
	    } else {
	      style.left = 'calc(99.999999% * ' + moveVal + ')';
	    }
	  }

	  return style;
	}

	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = offset;

	function offset(offsetVal, direction, gutter) {
	  var style = {},
	      numerator = offsetVal.split('/')[0];

	  if (direction === 'column') {
	    if (numerator > 0) {
	      if (gutter !== '0') {
	        style.marginBottom = 'calc(99.99% * ' + offsetVal + ' - (' + gutter + ' - ' + gutter + ' * ' + offsetVal + ') + (' + gutter + ' * 2)) !important';
	      } else {
	        style.marginBottom = 'calc(99.999999% * ' + offsetVal + ') !important';
	      }
	    } else if (numerator < 0) {
	      if (gutter !== '0') {
	        style.marginTop = 'calc(99.99% * (' + offsetVal + ' * -1) - (' + gutter + ' - ' + gutter + ' * (' + offsetVal + ' * -1)) + ' + gutter + ') !important';
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
	        style.marginRight = 'calc(99.99% * ' + offsetVal + ' - (' + gutter + ' - ' + gutter + ' * ' + offsetVal + ') + (' + gutter + ' * 2)) !important';
	      } else {
	        style.marginRight = 'calc(99.999999% * ' + offsetVal + ') !important';
	      }
	    } else if (numerator < 0) {
	      if (offsetVal !== '0') {
	        style.marginLeft = 'calc(99.99% * (' + offsetVal + ' * -1) - (' + gutter + ' - ' + gutter + ' * (' + offsetVal + ' * -1)) + ' + gutter + ') !important';
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
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = row;

	var _defaults = __webpack_require__(5);

	function row(rowVal, gutter, flex) {
	  var style = {
	    width: '100%'
	  };

	  style = _defaults.addFlex(flex, style);

	  style.height = _defaults.calcDimension(rowVal, gutter);

	  style.marginBottom = gutter;

	  style['&:last-child'] = {
	    marginBottom: '0'
	  };

	  return style;
	}

	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports) {

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
	var edit = {
	  '& *:not(input):not(textarea):not(select)': {
	    backgroundColor: 'rgba(0, 0, 255, 0.1)'
	  }
	};
	exports.edit = edit;

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = waffle;

	function waffle(waffleVal, cycle, gutter, flex) {
	  var style = {},
	      cycleVal = undefined;

	  if (cycle === 'auto') {
	    cycleVal = waffleVal.split('/')[1];
	  } else {
	    cycleVal = cycle;
	  }

	  if (flex === 'flex') {
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

/***/ }
/******/ ])
});
;
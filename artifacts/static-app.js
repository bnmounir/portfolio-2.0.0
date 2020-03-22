(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// The chunk loading function for additional chunks
/******/ 	// Since all referenced chunks are already included
/******/ 	// in this file, this function is empty here.
/******/ 	__webpack_require__.e = function requireEnsure() {
/******/ 		return Promise.resolve();
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 33);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("grommet");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = __webpack_require__(11);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _requireUniversalModule = __webpack_require__(36);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(38);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks)["default"];
  }
});
exports["default"] = universal;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(19);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(20);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _vm = __webpack_require__(39);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(12);

var _helpers = __webpack_require__(40);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (// $FlowIgnore
    module.hot && (false)
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(asyncModule) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var userRender = opts.render,
      _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['render', 'loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var renderFunc = userRender || (0, _utils.createDefaultRender)(Loading, Err);
  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.usesBabelPlugin = hasBabelPlugin;
  options.modCache = {};
  options.promCache = {};
  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, [{
      key: 'requireAsyncInner',
      value: function requireAsyncInner(requireAsync, props, state, context, isMount) {
        var _this2 = this;

        if (!state.mod && loadingTransition) {
          this.update({
            mod: null,
            props: props
          }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();
        requireAsync(props, context).then(function (mod) {
          var state = {
            mod: mod,
            props: props,
            context: context
          };
          var timeLapsed = new Date() - time;

          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this2.update(state, isMount);
            }, extraDelay);
          }

          _this2.update(state, isMount);
        })["catch"](function (error) {
          return _this2.update({
            error: error,
            props: props,
            context: context
          });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;
          var info = {
            isMount: isMount,
            isSync: isSync,
            isServer: isServer
          };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var mod = state.mod,
            error = state.error;

        if (mod && !error) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;
            var info = {
              isMount: isMount,
              isSync: isSync,
              isServer: isServer
            };
            onAfter(info, mod);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      } // $FlowFixMe

    }, {
      key: 'init',
      value: function init(props, context) {
        var _req = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            addModule = _req.addModule,
            requireSync = _req.requireSync,
            requireAsync = _req.requireAsync,
            asyncOnly = _req.asyncOnly;

        var mod = void 0;

        try {
          mod = requireSync(props, context);
        } catch (error) {
          return (0, _helpers.__update)(props, {
            error: error,
            props: props,
            context: context
          }, this._initialized);
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(props); // record the module for SSR flushing :)

        if (context.report) {
          context.report(chunkName);
        }

        if (mod || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          return (0, _helpers.__update)(props, {
            asyncOnly: asyncOnly,
            props: props,
            mod: mod,
            context: context
          }, this._initialized, true, true, _utils.isServer);
        }

        this.handleBefore(true, false);
        this.requireAsyncInner(requireAsync, props, {
          props: props,
          asyncOnly: asyncOnly,
          mod: mod,
          context: context
        }, context, true);
        return {
          mod: mod,
          asyncOnly: asyncOnly,
          context: context,
          props: props
        };
      }
    }], [{
      key: 'preload',

      /* eslint-enable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        props = props || {};

        var _req2 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireAsync = _req2.requireAsync,
            requireSync = _req2.requireSync;

        var mod = void 0;

        try {
          mod = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (mod) return mod;
          return requireAsync(props, context);
        }).then(function (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
          return mod;
        });
      }
      /* eslint-disable react/sort-comp */

    }, {
      key: 'preloadWeak',
      value: function preloadWeak(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        props = props || {};

        var _req3 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireSync = _req3.requireSync;

        var mod = requireSync(props, context);

        if (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
        }

        return mod;
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        if (!_this._initialized) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = _this.init(_this.props, _this.context); // $FlowFixMe

      _this.state.error = null;
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this._initialized = true;
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        var _this3 = this;

        if (isDynamic || this._asyncOnly) {
          var _req4 = (0, _requireUniversalModule2["default"])(asyncModule, options, this.props, prevProps),
              requireSync = _req4.requireSync,
              requireAsync = _req4.requireAsync,
              shouldUpdate = _req4.shouldUpdate;

          if (shouldUpdate(this.props, prevProps)) {
            var mod = void 0;

            try {
              mod = requireSync(this.props, this.context);
            } catch (error) {
              return this.update({
                error: error
              });
            }

            this.handleBefore(false, !!mod);

            if (!mod) {
              return this.requireAsyncInner(requireAsync, this.props, {
                mod: mod
              });
            }

            var state = {
              mod: mod
            };

            if (alwaysDelay) {
              if (loadingTransition) this.update({
                mod: null
              }); // display `loading` during componentWillReceiveProps

              setTimeout(function () {
                return _this3.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          }
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._initialized = false;
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        var _state = this.state,
            mod = _state.mod,
            error = _state.error;
        return renderFunc(props, mod, isLoading, userError || error);
      }
    }], [{
      key: 'getDerivedStateFromProps',
      value: function getDerivedStateFromProps(nextProps, currentState) {
        var _req5 = (0, _requireUniversalModule2["default"])(asyncModule, options, nextProps, currentState.props),
            requireSync = _req5.requireSync,
            shouldUpdate = _req5.shouldUpdate;

        if (isHMR() && shouldUpdate(currentState.props, nextProps)) {
          var mod = requireSync(nextProps, currentState.context);
          return _extends({}, currentState, {
            mod: mod
          });
        }

        return null;
      }
    }]);

    return UniversalComponent;
  }(_react2["default"].Component), _class.contextTypes = {
    store: _propTypes2["default"].object,
    report: _propTypes2["default"].func
  }, _temp;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(10)(module)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(12);

var requireById = function requireById(id) {
  if (!(0, _utils.isWebpack)() && typeof id === 'string') {
    return __webpack_require__(37)("" + id);
  }

  return __webpack_require__('' + id);
};

exports["default"] = requireById;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("grommet-icons");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("@reach/router");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "@babel/runtime/helpers/slicedToArray"
var slicedToArray_ = __webpack_require__(27);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/taggedTemplateLiteral"
var taggedTemplateLiteral_ = __webpack_require__(14);
var taggedTemplateLiteral_default = /*#__PURE__*/__webpack_require__.n(taggedTemplateLiteral_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(8);

// EXTERNAL MODULE: external "@reach/router"
var router_ = __webpack_require__(7);

// CONCATENATED MODULE: /Users/macbook/Desktop/portfolio/src/components/Router.js

// EXTERNAL MODULE: external "grommet-icons"
var external_grommet_icons_ = __webpack_require__(6);

// EXTERNAL MODULE: external "grommet"
var external_grommet_ = __webpack_require__(1);

// CONCATENATED MODULE: /Users/macbook/Desktop/portfolio/src/components/Footer.js




var Footer_Media = function Media() {
  return external_react_default.a.createElement(external_grommet_["Box"], {
    direction: "row",
    gap: "xxsmall",
    justify: "center"
  }, external_react_default.a.createElement(external_grommet_["Anchor"], {
    a11yTitle: "Follow me on Twitter",
    href: "https://twitter.com/bnmounir7",
    icon: external_react_default.a.createElement(external_grommet_icons_["Twitter"], {
      color: "#69306d"
    })
  }), external_react_default.a.createElement(external_grommet_["Anchor"], {
    a11yTitle: "Connect with me on Linkedin",
    href: "https://www.linkedin.com/in/bnmounir/",
    icon: external_react_default.a.createElement(external_grommet_icons_["Linkedin"], {
      color: "#69306d"
    })
  }), external_react_default.a.createElement(external_grommet_["Anchor"], {
    a11yTitle: "Follow me on Github",
    href: "https://github.com/bnmounir",
    icon: external_react_default.a.createElement(external_grommet_icons_["Github"], {
      color: "#69306d"
    })
  }));
};

/* harmony default export */ var Footer = (function () {
  return external_react_default.a.createElement(external_grommet_["Footer"], {
    pad: "large"
  }, external_react_default.a.createElement(external_grommet_["Box"], {
    align: "center",
    direction: "row",
    gap: "xsmall"
  }, external_react_default.a.createElement(external_grommet_["Text"], {
    textAlign: "center",
    size: "xsmall"
  }, "made with \u2764\uFE0F and open source", external_react_default.a.createElement("br", null), external_react_default.a.createElement(external_grommet_["Anchor"], {
    color: "#69306d",
    a11yTitle: "React Static",
    href: "https://github.com/react-static/react-static",
    label: "React-Static"
  }), ' ', "and", ' ', external_react_default.a.createElement(external_grommet_["Anchor"], {
    color: "#69306d",
    a11yTitle: "React Static",
    href: "https://v2.grommet.io/",
    label: "Grommet"
  }), ' ', external_react_default.a.createElement("br", null), "MIT License")), external_react_default.a.createElement(Footer_Media, null));
});
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(15);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "grommet/themes"
var themes_ = __webpack_require__(28);

// EXTERNAL MODULE: external "grommet-theme-hp"
var external_grommet_theme_hp_ = __webpack_require__(29);

// CONCATENATED MODULE: /Users/macbook/Desktop/portfolio/src/App.js



function _templateObject2() {
  var data = taggedTemplateLiteral_default()(["\n    padding: 1rem;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  * {\n    scroll-behavior: smooth;\n  }\n  body {\n    font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue',\n    Helvetica, Arial, 'Lucida Grande', sans-serif;\n    font-weight: 300;\n    font-size: 16px;\n    margin: 0;\n    padding: 0;\n    background-color: #F2D7EE;\n  }\n  a {\n    text-decoration: none;\n    color: #F2f2f2;\n    font-weight: bold;\n  }\n\n  img {\n    max-width: 100%;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


 //






 // Any routes that start with 'dynamic' will be treated as non-static routes
// addPrefetchExcludes(['dynamic']);

var GlobalStyle = Object(external_styled_components_["createGlobalStyle"])(_templateObject());
var Content = external_styled_components_default.a.div(_templateObject2());

function App() {
  var _useState = Object(external_react_["useState"])('light-1'),
      _useState2 = slicedToArray_default()(_useState, 2),
      background = _useState2[0],
      setBackground = _useState2[1];

  return external_react_default.a.createElement(external_react_static_["Root"], null, external_react_default.a.createElement(GlobalStyle, null), external_react_default.a.createElement(external_grommet_["Grommet"], {
    theme: themes_["grommet"]
  }, external_react_default.a.createElement(external_grommet_["Header"], {
    background: {
      color: '#69306d'
    },
    pad: "small"
  }, external_react_default.a.createElement(external_grommet_["Box"], {
    direction: "row",
    align: "center",
    gap: "small"
  }, external_react_default.a.createElement(router_["Link"], {
    to: "/"
  }, "Moun"), external_react_default.a.createElement(router_["Link"], {
    to: "/about"
  }, "About"), external_react_default.a.createElement(router_["Link"], {
    to: "/projects"
  }, "Projects")), external_react_default.a.createElement(external_grommet_["Box"], {
    direction: "row",
    align: "center",
    gap: "small"
  }, external_react_default.a.createElement(external_grommet_["Select"], {
    plain: true,
    placeholder: "background",
    size: "small",
    options: ['dark-1', 'light-1'],
    value: background,
    onChange: function onChange(event) {
      return setBackground(event.option);
    }
  })))), external_react_default.a.createElement(external_grommet_["Grommet"], {
    theme: external_grommet_theme_hp_["hp"],
    style: {
      flex: '1 1'
    }
  }, external_react_default.a.createElement(external_grommet_["Box"], {
    fill: true,
    pad: "medium",
    background: background || theme.global.colors.background,
    overflow: "auto"
  }, external_react_default.a.createElement(Content, null, external_react_default.a.createElement(external_react_default.a.Suspense, {
    fallback: external_react_default.a.createElement("em", null, "Loading...")
  }, external_react_default.a.createElement(router_["Router"], null, external_react_default.a.createElement(external_react_static_["Routes"], {
    path: "*"
  })))), external_react_default.a.createElement(Footer, null))));
}

/* harmony default export */ var src_App = __webpack_exports__["a"] = (App);

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(11);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createDefaultRender = exports.createElement = exports.findExport = exports.resolveExport = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
};

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _requireById = __webpack_require__(5);

var _requireById2 = _interopRequireDefault(_requireById);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};

var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod["default"] : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return React.createElement('div', null, 'Loading...');
};

var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return React.createElement('div', null, 'Error: ', error && error.message);
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return (0, _requireById2["default"])(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {}
  }

  return null;
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
  var exp = findExport(mod, key);

  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';

    var info = {
      isServer: _isServer,
      isSync: isSync
    };
    onLoad(mod, info, props, context);
  }

  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return React.isValidElement(Component) ? React.cloneElement(Component, props) : React.createElement(Component, props);
};

var createDefaultRender = exports.createDefaultRender = function createDefaultRender(Loading, Err) {
  return function (props, mod, isLoading, error) {
    if (isLoading) {
      return createElement(Loading, props);
    } else if (error) {
      return createElement(Err, _extends({}, props, {
        error: error
      }));
    } else if (mod) {
      // primary usage (for async import loading + errors):
      return createElement(mod, props);
    }

    return createElement(Loading, props);
  };
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/taggedTemplateLiteral");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_macbook_Desktop_portfolio_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var _Users_macbook_Desktop_portfolio_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_macbook_Desktop_portfolio_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports
 // Plugins

var plugins = [{
  location: "/Users/macbook/Desktop/portfolio/node_modules/react-static-plugin-source-filesystem",
  plugins: [],
  hooks: {}
}, {
  location: "/Users/macbook/Desktop/portfolio/node_modules/react-static-plugin-reach-router",
  plugins: [],
  hooks: _Users_macbook_Desktop_portfolio_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default()({})
}, {
  location: "/Users/macbook/Desktop/portfolio/node_modules/react-static-plugin-sitemap/dist",
  plugins: [],
  hooks: {}
}, {
  location: "/Users/macbook/Desktop/portfolio",
  plugins: [],
  hooks: {}
}]; // Export em!

/* harmony default export */ __webpack_exports__["default"] = (plugins);

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("/Users/macbook/Desktop/portfolio/node_modules/react-static/lib/browser");

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notFoundTemplate", function() { return notFoundTemplate; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_macbook_Desktop_portfolio_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _Users_macbook_Desktop_portfolio_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_macbook_Desktop_portfolio_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3__);










Object(_Users_macbook_Desktop_portfolio_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3__["setHasBabelPlugin"])();
var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, "An error occurred loading this page's template. More information is available in the console.");
  },
  ignoreBabelRename: true
};
var t_0 = _Users_macbook_Desktop_portfolio_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "/Users/macbook/Desktop/portfolio/src/pages/404.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | Users/macbook/Desktop/portfolio/src/pages/404 */).then(__webpack_require__.bind(null, 21))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '/Users/macbook/Desktop/portfolio/src/pages/404.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(21);
  },
  chunkName: function chunkName() {
    return "Users/macbook/Desktop/portfolio/src/pages/404";
  }
}), universalOptions);
t_0.template = '/Users/macbook/Desktop/portfolio/src/pages/404.js';
var t_1 = _Users_macbook_Desktop_portfolio_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "/Users/macbook/Desktop/portfolio/src/pages/about.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | Users/macbook/Desktop/portfolio/src/pages/about */).then(__webpack_require__.bind(null, 22))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '/Users/macbook/Desktop/portfolio/src/pages/about.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(22);
  },
  chunkName: function chunkName() {
    return "Users/macbook/Desktop/portfolio/src/pages/about";
  }
}), universalOptions);
t_1.template = '/Users/macbook/Desktop/portfolio/src/pages/about.js';
var t_2 = _Users_macbook_Desktop_portfolio_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "/Users/macbook/Desktop/portfolio/src/pages/index.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | Users/macbook/Desktop/portfolio/src/pages/index */).then(__webpack_require__.bind(null, 23))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '/Users/macbook/Desktop/portfolio/src/pages/index.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(23);
  },
  chunkName: function chunkName() {
    return "Users/macbook/Desktop/portfolio/src/pages/index";
  }
}), universalOptions);
t_2.template = '/Users/macbook/Desktop/portfolio/src/pages/index.js';
var t_3 = _Users_macbook_Desktop_portfolio_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "/Users/macbook/Desktop/portfolio/src/pages/projects.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | Users/macbook/Desktop/portfolio/src/pages/projects */).then(__webpack_require__.bind(null, 24))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '/Users/macbook/Desktop/portfolio/src/pages/projects.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(24);
  },
  chunkName: function chunkName() {
    return "Users/macbook/Desktop/portfolio/src/pages/projects";
  }
}), universalOptions);
t_3.template = '/Users/macbook/Desktop/portfolio/src/pages/projects.js'; // Template Map

/* harmony default export */ __webpack_exports__["default"] = ({
  '/Users/macbook/Desktop/portfolio/src/pages/404.js': t_0,
  '/Users/macbook/Desktop/portfolio/src/pages/about.js': t_1,
  '/Users/macbook/Desktop/portfolio/src/pages/index.js': t_2,
  '/Users/macbook/Desktop/portfolio/src/pages/projects.js': t_3
}); // Not Found Template

var notFoundTemplate = "/Users/macbook/Desktop/portfolio/src/pages/404.js";
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "404 - Oh no's! We couldn't find that page :("));
});

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(grommet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _about_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30);
/* harmony import */ var _about_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_about_svg__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    pad: "medium"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    animation: "fadeIn",
    direction: "column",
    pad: "medium",
    align: "center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    pad: "medium"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    margin: {
      top: 'none'
    }
  }, "About")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _about_svg__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: "guy on desk"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    direction: "row-responsive",
    gap: "large",
    justify: "between",
    align: "center",
    margin: "large",
    elevation: "xsmall",
    pad: "xsmall",
    round: "small",
    hoverIndicator: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    height: "medium",
    width: "medium",
    justify: "around",
    align: "center",
    fill: "horizontal"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    size: "small"
  }, "Title"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_1__["Paragraph"], {
    textAlign: "center"
  }, "The actual breakpoint to trigger changes in the border, direction, gap, margin, pad, and round.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    height: "medium",
    width: "medium",
    border: {
      color: '#69306d',
      size: 'large'
    },
    round: "small",
    fill: "horizontal"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: "https://s3.amazonaws.com/poly-screenshots.angel.co/Project/51/1057186/ee339236805d812fed72bc02b77d94d4-original.png",
    fit: "cover"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    key: "time",
    gap: "medium"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_1__["Clock"], {
    type: "digital",
    className: "chromatic-ignore"
  })));
});

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _guyOnDesk_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31);
/* harmony import */ var _guyOnDesk_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_guyOnDesk_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var grommet_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var grommet_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(grommet_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(grommet__WEBPACK_IMPORTED_MODULE_3__);




/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    animation: "fadeIn",
    direction: "column",
    pad: "medium"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    pad: "medium"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_3__["Heading"], {
    margin: {
      top: 'none'
    }
  }, "Yo!")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _guyOnDesk_svg__WEBPACK_IMPORTED_MODULE_1___default.a,
    alt: "guy on desk"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_3__["Main"], {
    background: "light-2",
    elevation: "large",
    pad: "large",
    gap: "large"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    margin: "small",
    size: "xsmall"
  }, "I'm Moun, welcome to my website"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    flex: true
  })));
});

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(grommet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _projects_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32);
/* harmony import */ var _projects_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_projects_svg__WEBPACK_IMPORTED_MODULE_2__);



var projectsArray = [{
  title: 'Data sctructure & Front end Technology',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  imgUrl: 'https://s3.amazonaws.com/poly-screenshots.angel.co/Project/51/1057186/ee339236805d812fed72bc02b77d94d4-original.png',
  projectLink: 'https://twitter.com'
}, {
  title: 'Using a third party API',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  imgUrl: 'https://s3.amazonaws.com/poly-screenshots.angel.co/Project/51/1057186/ee339236805d812fed72bc02b77d94d4-original.png',
  projectLink: 'https://twitter.com'
}];

var ProjectBoxList = function ProjectBoxList() {
  return projectsArray.map(function (Project) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      key: Project.title,
      direction: "row-responsive",
      gap: "large",
      justify: "between",
      align: "center",
      margin: "large",
      elevation: "xsmall",
      pad: "xsmall",
      round: "small",
      hoverIndicator: true,
      onClick: function onClick() {
        return window.open(Project.projectLink, '_blank');
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      height: "medium",
      width: "medium",
      justify: "around",
      align: "center",
      fill: "horizontal"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
      size: "small"
    }, Project.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_1__["Paragraph"], {
      textAlign: "center"
    }, Project.body)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      height: "medium",
      width: "medium",
      border: {
        color: '#69306d',
        size: 'large'
      },
      round: "small",
      fill: "horizontal"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: Project.imgUrl,
      fit: "cover"
    })));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    pad: "medium"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    animation: "fadeIn",
    direction: "column",
    pad: "medium",
    align: "center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    pad: "medium"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(grommet__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    margin: {
      top: 'none'
    }
  }, "Projects")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _projects_svg__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: "guy on desk"
  })), ProjectBoxList());
});

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _reactStatic = __webpack_require__(8);

var _router = __webpack_require__(7);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var _default = function _default(_ref) {
  var _ref$RouterProps = _ref.RouterProps,
      userRouterProps = _ref$RouterProps === void 0 ? {} : _ref$RouterProps;
  return {
    Root: function Root(PreviousRoot) {
      return function (_ref2) {
        var children = _ref2.children,
            rest = _objectWithoutProperties(_ref2, ["children"]);

        var basepath = (0, _reactStatic.useBasepath)();
        var staticInfo = (0, _reactStatic.useStaticInfo)();

        var RouteHandler = function RouteHandler(props) {
          return _react["default"].createElement(PreviousRoot, _extends({}, rest, props), children);
        };

        var renderedChildren = // Place a top-level router inside the root
        // This will give proper context to Link and other reach components
        _react["default"].createElement(_router.Router, _extends({}, basepath ? {
          basepath: basepath
        } : {}, userRouterProps), _react["default"].createElement(RouteHandler, {
          path: "/*"
        })); // If we're in SSR, use a manual server location


        return typeof document === 'undefined' ? _react["default"].createElement(_router.ServerLocation, {
          url: (0, _reactStatic.makePathAbsolute)("".concat(basepath, "/").concat(staticInfo.path))
        }, renderedChildren) : renderedChildren;
      };
    },
    Routes: function Routes(PreviousRoutes) {
      return function (props) {
        return (// Wrap Routes in location
          _react["default"].createElement(_router.Location, null, function (location) {
            return _react["default"].createElement(PreviousRoutes, _extends({
              path: "/*"
            }, props, {
              location: location
            }));
          })
        );
      };
    }
  };
};

exports["default"] = _default;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/slicedToArray");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("grommet/themes");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("grommet-theme-hp");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iYWJmYzk0MDYtOTcyNS00Y2IyLWI0NmItODQ4NmE3MzA2NTFmIiBkYXRhLW5hbWU9IkxheWVyIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjExNzEiIGhlaWdodD0iODM0LjY4OTMiIHZpZXdCb3g9IjAgMCAxMTcxIDgzNC42ODkzIj48dGl0bGU+ZGV0YWlsZWRfYW5hbHlzaXM8L3RpdGxlPjxwb2x5Z29uIHBvaW50cz0iMTEyNC4wOCAxOTEuNDIxIDY1Mi42NiAzOTQuMDQ1IDcyMC41OSA1ODEuMzc5IDc2OS4xMzkgNzE1LjI0MyA3ODEuMzQ0IDc0OC45MTEgODg5Ljk3OCA3OTAuMTQ0IDg5My45MDYgNzkxLjYzMyAxMDA3LjM4NSA4MzQuNjg5IDEwNjEuODU5IDgxMS4zOTEgMTEzNi4wNjkgNzc5LjQ5MyAxMTcxIDc2NC40NzkgMTEyNC4wOCAxOTEuNDIxIiBmaWxsPSIjZjJmMmYyIi8+PHBvbHlnb24gcG9pbnRzPSIxMTM2LjQzNiA3NjAuMjA5IDExMzYuMzM5IDc2NS4wNjUgMTEzNi4wNjkgNzc5LjQ5MyAxMDYxLjg1OSA4MTEuMzkxIDEwMTEuNzQ1IDgzMi45MyAxMDA5LjYzIDgyNS44NjIgMTAwNy4zODUgODM0LjY4OSA4OTMuOTA2IDc5MS42MzMgODkyLjE0NyA3NTAuMDY1IDg5Mi4xNDcgNzUwLjA1NSA4OTEuNzU5IDc0MC44MTcgMTExNC4wNjYgNzI1Ljg5MyAxMTE4LjQyNiA3MzIuNTczIDExMTkuMjg5IDczMy45IDExMzYuNDM2IDc2MC4yMDkiIGZpbGw9IiMyZjJlNDEiLz48cGF0aCBkPSJNOTg5LjgxLDM1MS4yNDgyM3MtMTQuOTE5NTUsNTMuNzEwMzctMTcuOTAzNDYsNTMuNzEwMzcsMjguMzQ3MTQsNDEuNzc0NzMsMjguMzQ3MTQsNDEuNzc0NzNsNDYuMjUwNTksMjUuMzYzMjIsMTYuNDExNS02OC42Mjk5MXMtMTQuOTE5NTQtMzcuMjk4ODYtMTEuOTM1NjMtNTYuNjk0MjdaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTQuNSAtMzIuNjU1MzUpIiBmaWxsPSIjZmZiOGI4Ii8+PGNpcmNsZSBjeD0iOTk5LjE4MTI0IiBjeT0iMjg0LjI3NzkyIiByPSI1NS4yMDIzMiIgZmlsbD0iI2ZmYjhiOCIvPjxwYXRoIGQ9Ik0xMDIxLjE0MSw0MzEuODEzNzgsOTc3LjAzNDU4LDM5My41MWwtMjYuMDE1NDMsMTIuOTQwNTctNTYuNjk0MjgsMzUuODA2OTFzMTQuOTE5NTUsMzIyLjI2MjIsNy40NTk3NywzMzQuMTk3ODRjMCwwLDE2LjQxMTUsMzcuMjk4ODcsMTEzLjM4ODU2LDE0LjkxOTU1czEyMi4zNDAyOC0yNS4zNjMyMywxMjIuMzQwMjgtMjUuMzYzMjNsLTIwLjg4NzM3LTE5Ni45MzgsMjUuMzYzMjMtMTIzLjgzMjI0LTg1LjE5NTQ0LTU5LjU3NTA1LTI2LjcwMTE2LDQ2LjE0NzQ2WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE0LjUgLTMyLjY1NTM1KSIgZmlsbD0iIzY5MzA2ZCIvPjxwYXRoIGQ9Ik04NTcuMDI2LDU1Ny4xMzhzLTIyLjM3OTMxLDcwLjEyMTg3LTUuOTY3ODEsNzcuNTgxNjQsMjkuODM5MDksNC40NzU4NiwyOS44MzkwOSw0LjQ3NTg2bDI1LjM2MzIzLTYxLjE3MDE0WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE0LjUgLTMyLjY1NTM1KSIgZmlsbD0iI2ZmYjhiOCIvPjxwYXRoIGQ9Ik0xMTY3LjM1MjU3LDU0NS4yMDIzM2wxMy40Mjc1OSw2Mi42NjIxVjczNC42ODA1N3MtMTkuMzk1NDEsODAuNTY1NTUtMzQuMzE1LDU5LjY3ODE5LTE0LjYxMTQzLTI3LjUwMTY5LTE0LjYxMTQzLTI3LjUwMTY5bDE5LjA4NzMtMjkuMTkyNTktOC45NTE3My0xMTkuMzU2MzctMjMuNzg1NzItNTYuOTM2NDhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTQuNSAtMzIuNjU1MzUpIiBmaWxsPSIjZmZiOGI4Ii8+PHBhdGggZD0iTTEwNjUuODk5NjUsMjYxLjczMXMtMTcuOTAzNDUtMzguNzkwODItNTIuMjE4NDEtMjkuODM5MDktNTMuNzEwMzcsMjIuMzc5MzItNTUuMjAyMzIsMzUuODA2OTEuNzQ2LDMzLjU2OS43NDYsMzMuNTY5LDMuNzI5ODgtMjcuNjAxMTYsMjcuNjAxMTYtMjEuNjMzMzQsNjEuMTcwMTQsMS40OTE5NSw2MS4xNzAxNCwxLjQ5MTk1bDUuOTY3ODIsNTMuNzEwMzdzNi43MTM3OS05LjY5NzcxLDE0LjE3MzU3LTMuNzI5ODlTMTA4OS43NzA5MywyNzMuNjY2NTksMTA2NS44OTk2NSwyNjEuNzMxWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE0LjUgLTMyLjY1NTM1KSIgZmlsbD0iIzJmMmU0MSIvPjxwb2x5Z29uIHBvaW50cz0iMTEwNC4wOTUgNTI0Ljg2NiAxMTA5LjQ5MSA1NTIuOTIzIDExNjIuMzY3IDUzOC44OTQgMTE1Mi42NTUgNTEyLjk5NiAxMTA0LjA5NSA1MjQuODY2IiBmaWxsPSIjM2YzZDU2Ii8+PHBvbHlnb24gcG9pbnRzPSI4NDEuNTQ0IDUyMy45ODcgODMzLjExNCA1NTEuMjg2IDg4Ni4zNzcgNTYzLjc2NyA4ODkuOTgzIDUzNi4zNDMgODQxLjU0NCA1MjMuOTg3IiBmaWxsPSIjM2YzZDU2Ii8+PHBhdGggZD0iTTExMDcuNjc0MzgsNDQyLjI1NzQ2bDM0LjMxNSwyLjk4MzkxczM4Ljc5MDgyLDEwNS45Mjg3OCwzNC4zMTUsMTA4LjkxMjY5LTU4LjE4NjIzLDIwLjg4NzM2LTY1LjY0NiwxNi40MTE1UzExMDcuNjc0MzgsNDQyLjI1NzQ2LDExMDcuNjc0MzgsNDQyLjI1NzQ2WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE0LjUgLTMyLjY1NTM1KSIgZmlsbD0iIzY5MzA2ZCIvPjxwYXRoIGQ9Ik05MDYuMjYwNTEsNDQ1LjI0MTM3bC0xMS45MzU2NC0yLjk4Mzkxcy0yMi4zNzkzMiwyOC4zNDcxNC0yOS44MzkwOSw2MS4xNzAxNC0xNy45MDM0Niw2NS42NDYtMTEuOTM1NjQsNjUuNjQ2UzkxMi4yMjgzMyw1ODkuOTYxLDkxMi4yMjgzMyw1ODkuOTYxWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE0LjUgLTMyLjY1NTM1KSIgZmlsbD0iIzY5MzA2ZCIvPjxjaXJjbGUgY3g9IjEwMTIuMzcwNzQiIGN5PSI0MDkuNDAxMDMiIHI9IjEwLjc5MTExIiBmaWxsPSIjM2YzZDU2Ii8+PHBhdGggZD0iTTExMTAuMTg1NjcsNjMyLjg1MmwtMTE1LjI2ODIsMzYuMzM4MzlMOTQ3Ljg3MjI1LDUxOS45NTkyOXE2Ni42MjI3Ny05LjM0MjExLDExNS4yNjgxNy0zNi4zMzgzOEMxMDY5LjE1MTE0LDUzNC41MjQzOCwxMDg0LjUxLDU4NC4zMDY4NiwxMTEwLjE4NTY3LDYzMi44NTJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTQuNSAtMzIuNjU1MzUpIiBmaWxsPSIjZTZlNmU2Ii8+PHBhdGggZD0iTTEwOTkuMzk0NTYsNjQ5LjAzODY3bC0xMTUuMjY4MiwzNi4zMzg0TDkzNy4wODExNSw1MzYuMTQ2cTY2LjYyMjc1LTkuMzQyMTEsMTE1LjI2ODE2LTM2LjMzODM4QzEwNTguMzYsNTUwLjcxMSwxMDczLjcxODkyLDYwMC40OTM1MiwxMDk5LjM5NDU2LDY0OS4wMzg2N1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNC41IC0zMi42NTUzNSkiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNODY0LjQ4NTc4LDU5MS40NTI5MnMtMTcuOTAzNDYsMzIuODIzLTEzLjQyNzU5LDQzLjI2NjY5LDQxLjc3NDczLDE2LjQxMTUsNDYuMjUwNTksMTYuNDExNVM5NTUuNDk1LDYzOS4xOTU0Nyw5NTUuNDk1LDYzOS4xOTU0N3M4Mi4wNTc1MS0zOC43OTA4Miw1OC4xODYyMy01OC4xODYyMy02OC42Mjk5MSwyNi44NTUxOS02OC42Mjk5MSwyNi44NTUxOUg5MDkuMjQ0NDJMODg5Ljg0OSw1OTQuNDM2ODNaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTQuNSAtMzIuNjU1MzUpIiBmaWxsPSIjZmZiOGI4Ii8+PHJlY3QgeD0iMSIgeT0iMTM0LjgzMjU4IiB3aWR0aD0iMTk1IiBoZWlnaHQ9Ijg3LjE2NzQyIiBmaWxsPSIjZjJmMmYyIi8+PHJlY3QgeD0iNjc2IiB5PSI0MTgiIHdpZHRoPSIzNCIgaGVpZ2h0PSIzMCIgZmlsbD0iIzNmM2Q1NiIvPjxyZWN0IHg9IjYwOCIgeT0iNDE4IiB3aWR0aD0iMzQiIGhlaWdodD0iMzAiIGZpbGw9IiMzZjNkNTYiLz48cmVjdCB4PSI3NDQiIHk9IjM1MiIgd2lkdGg9IjM0IiBoZWlnaHQ9IjM0IiBmaWxsPSIjNjkzMDZkIi8+PHJlY3QgeD0iNzEwIiB5PSIzODYiIHdpZHRoPSIzNCIgaGVpZ2h0PSIzMiIgZmlsbD0iIzNmM2Q1NiIvPjxyZWN0IHg9IjY0MiIgeT0iMzg2IiB3aWR0aD0iMzQiIGhlaWdodD0iMzIiIGZpbGw9IiMzZjNkNTYiLz48cmVjdCB4PSIyMzkiIHk9IjQ0NiIgd2lkdGg9IjM0IiBoZWlnaHQ9IjMwIiBmaWxsPSIjNjkzMDZkIi8+PHJlY3QgeD0iNTQ1IiB5PSI0MTQiIHdpZHRoPSIzNCIgaGVpZ2h0PSIzMiIgZmlsbD0iIzNmM2Q1NiIvPjxyZWN0IHg9IjM0MSIgeT0iNDE0IiB3aWR0aD0iMzQiIGhlaWdodD0iMzIiIGZpbGw9IiMzZjNkNTYiLz48cmVjdCB4PSIzMDciIHk9IjM4MCIgd2lkdGg9IjM0IiBoZWlnaHQ9IjM0IiBmaWxsPSIjM2YzZDU2Ii8+PHJlY3QgeD0iNDc3IiB5PSI0MTQiIHdpZHRoPSIzNCIgaGVpZ2h0PSIzMiIgZmlsbD0iIzNmM2Q1NiIvPjxyZWN0IHg9IjQ0MyIgeT0iMzgwIiB3aWR0aD0iMzQiIGhlaWdodD0iMzQiIGZpbGw9IiMzZjNkNTYiLz48cmVjdCB4PSI0MDkiIHk9IjQxNCIgd2lkdGg9IjM0IiBoZWlnaHQ9IjMyIiBmaWxsPSIjM2YzZDU2Ii8+PHJlY3QgeD0iMjczIiB5PSI0MTQiIHdpZHRoPSIzNCIgaGVpZ2h0PSIzMiIgZmlsbD0iIzNmM2Q1NiIvPjxyZWN0IHg9IjUxMSIgeT0iMzgwIiB3aWR0aD0iMzQiIGhlaWdodD0iMzQiIGZpbGw9IiM2OTMwNmQiLz48cGF0aCBkPSJNNjc5LjI0MTIxLDM2MC4xNTAyNmwtMTcuNjYzODktMTguOTM3ODIsMTguOTM3ODMtMTcuNjYzODlMNjk4LjE3OSwzNDIuNDg2MzhabS0xNC44NDgzNy0xOC44Mzk4MywxNC45NDYzNiwxNi4wMjQzMiwxNi4wMjQzMS0xNC45NDYzNy0xNC45NDYzNi0xNi4wMjQzMVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNC41IC0zMi42NTUzNSkiIGZpbGw9IiMzZjNkNTYiLz48cGF0aCBkPSJNNDQwLjE2LDI4Mi4yMzg3Nkg0MTQuMjYzdi0yNS44OTdINDQwLjE2Wm0tMjMuOTA0OTEtMS45OTIwN2gyMS45MTI4NFYyNTguMzMzODVINDE2LjI1NTA5WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE0LjUgLTMyLjY1NTM1KSIgZmlsbD0iIzNmM2Q1NiIvPjxwYXRoIGQ9Ik05MjEuMTYsMjMyLjIzODc2SDg5NS4yNjN2LTI1Ljg5N0g5MjEuMTZabS0yMy45MDQ5MS0xLjk5MjA3aDIxLjkxMjg0VjIwOC4zMzM4NUg4OTcuMjU1MDlaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTQuNSAtMzIuNjU1MzUpIiBmaWxsPSIjM2YzZDU2Ii8+PHBhdGggZD0iTTI2OC45MzEzMSw0OTYuNzIzM2wtMS41MzA1NC0xLjQ5NGE3OC4xODM4Miw3OC4xODM4MiwwLDAsMCwxNS42ODAzMS0yNy40MzIxOWM1LjIwMzYyLTE1LjY1OTk1LDcuNzQ1NjQtNDAuMzkxOS05LjY5NzU5LTY5LjI4Mi0xNy44NDY4Ny0yOS41NTkwNy0xOC42NS01My41Njc3OC0xNi4xODE2MS02OC41MDM0NSwyLjY4NjY3LTE2LjI1MTU5LDkuNTQwNDEtMjUuMzYxMTksOS44MzA3NC0yNS43NDA4MmwxLjY5OTczLDEuMjk4NjljLS4wNjg0MS4wODkyOS02Ljg2MjYyLDkuMTUwMzMtOS40NDA2NywyNC45MTczMi0yLjM4MDE0LDE0LjU1NjU2LTEuNTQ5ODYsMzcuOTgzNTYsMTUuOTIyNjEsNjYuOTIyMjYsMTcuODg5MTgsMjkuNjI5MDUsMTUuMjM5MDYsNTUuMDQ3NjcsOS44NjYyNSw3MS4xNTM1N0MyNzkuMjU4NjUsNDg2LjAxMzE5LDI2OS4zNTA2Miw0OTYuMjk0MDYsMjY4LjkzMTMxLDQ5Ni43MjMzWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE0LjUgLTMyLjY1NTM1KSIgZmlsbD0iIzNmM2Q1NiIvPjxwYXRoIGQ9Ik01MzguOTMxMzEsNDI4LjcyMzNsLTEuNTMwNTQtMS40OTRhNzguMTgzODIsNzguMTgzODIsMCwwLDAsMTUuNjgwMzEtMjcuNDMyMTljNS4yMDM2Mi0xNS42NTk5NSw3Ljc0NTY0LTQwLjM5MTktOS42OTc1OS02OS4yODItMTcuODQ2ODctMjkuNTU5MDctMTguNjUtNTMuNTY3NzgtMTYuMTgxNjEtNjguNTAzNDUsMi42ODY2Ny0xNi4yNTE1OSw5LjU0MDQxLTI1LjM2MTE5LDkuODMwNzQtMjUuNzQwODJsMS42OTk3MywxLjI5ODY5Yy0uMDY4NDEuMDg5MjktNi44NjI2Miw5LjE1MDMzLTkuNDQwNjcsMjQuOTE3MzItMi4zODAxNCwxNC41NTY1Ni0xLjU0OTg2LDM3Ljk4MzU2LDE1LjkyMjYxLDY2LjkyMjI2LDE3Ljg4OTE4LDI5LjYyOTA1LDE1LjIzOTA2LDU1LjA0NzY3LDkuODY2MjUsNzEuMTUzNTdDNTQ5LjI1ODY1LDQxOC4wMTMxOSw1MzkuMzUwNjIsNDI4LjI5NDA2LDUzOC45MzEzMSw0MjguNzIzM1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNC41IC0zMi42NTUzNSkiIGZpbGw9IiMzZjNkNTYiLz48cGF0aCBkPSJNNzczLjkzMTMxLDQwMi43MjMzbC0xLjUzMDU0LTEuNDk0YTc4LjE4MzgyLDc4LjE4MzgyLDAsMCwwLDE1LjY4MDMxLTI3LjQzMjE5YzUuMjAzNjItMTUuNjU5OTUsNy43NDU2NC00MC4zOTE5LTkuNjk3NTktNjkuMjgyLTE3Ljg0Njg3LTI5LjU1OTA3LTE4LjY1LTUzLjU2Nzc4LTE2LjE4MTYxLTY4LjUwMzQ1LDIuNjg2NjctMTYuMjUxNTksOS41NDA0MS0yNS4zNjExOSw5LjgzMDc0LTI1Ljc0MDgybDEuNjk5NzMsMS4yOTg2OWMtLjA2ODQxLjA4OTI5LTYuODYyNjIsOS4xNTAzMy05LjQ0MDY3LDI0LjkxNzMyLTIuMzgwMTQsMTQuNTU2NTYtMS41NDk4NiwzNy45ODM1NiwxNS45MjI2MSw2Ni45MjIyNiwxNy44ODkxOCwyOS42MjkwNSwxNS4yMzkwNiw1NS4wNDc2Nyw5Ljg2NjI1LDcxLjE1MzU3Qzc4NC4yNTg2NSwzOTIuMDEzMTksNzc0LjM1MDYyLDQwMi4yOTQwNiw3NzMuOTMxMzEsNDAyLjcyMzNaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTQuNSAtMzIuNjU1MzUpIiBmaWxsPSIjM2YzZDU2Ii8+PHJlY3QgeD0iNTEuNDQ0NDQiIHk9IjE2Mi4zNDY4NSIgd2lkdGg9Ijk0LjExMTExIiBoZWlnaHQ9IjIuMTM4ODkiIGZpbGw9IiMzZjNkNTYiLz48cmVjdCB4PSI1MS40NDQ0NCIgeT0iMTc3LjM0Njg1IiB3aWR0aD0iOTQuMTExMTEiIGhlaWdodD0iMi4xMzg4OSIgZmlsbD0iIzNmM2Q1NiIvPjxyZWN0IHg9IjUxLjQ0NDQ0IiB5PSIxOTIuMzQ2ODUiIHdpZHRoPSI5NC4xMTExMSIgaGVpZ2h0PSIyLjEzODg5IiBmaWxsPSIjM2YzZDU2Ii8+PHJlY3QgeD0iNTc4LjQ0NDQ0IiB5PSIxOS4zNDY4NSIgd2lkdGg9Ijk0LjExMTExIiBoZWlnaHQ9IjIuMTM4ODkiIGZpbGw9IiMzZjNkNTYiLz48cmVjdCB4PSI1NzguNDQ0NDQiIHk9IjM0LjM0Njg1IiB3aWR0aD0iOTQuMTExMTEiIGhlaWdodD0iMi4xMzg4OSIgZmlsbD0iIzNmM2Q1NiIvPjxyZWN0IHg9IjU3OC40NDQ0NCIgeT0iNDkuMzQ2ODUiIHdpZHRoPSI5NC4xMTExMSIgaGVpZ2h0PSIyLjEzODg5IiBmaWxsPSIjM2YzZDU2Ii8+PHJlY3QgeD0iNzk5LjQ0NDQ0IiB5PSIzNTEuMzQ2ODUiIHdpZHRoPSI5NC4xMTExMSIgaGVpZ2h0PSIyLjEzODg5IiBmaWxsPSIjM2YzZDU2Ii8+PHJlY3QgeD0iNzk5LjQ0NDQ0IiB5PSIzNjYuMzQ2ODUiIHdpZHRoPSI5NC4xMTExMSIgaGVpZ2h0PSIyLjEzODg5IiBmaWxsPSIjM2YzZDU2Ii8+PHJlY3QgeD0iNzk5LjQ0NDQ0IiB5PSIzODEuMzQ2ODUiIHdpZHRoPSI5NC4xMTExMSIgaGVpZ2h0PSIyLjEzODg5IiBmaWxsPSIjM2YzZDU2Ii8+PHJlY3QgeD0iMjA4LjQ0NDQ0IiB5PSI1MDEuMzQ2ODUiIHdpZHRoPSI5NC4xMTExMSIgaGVpZ2h0PSIyLjEzODg5IiBmaWxsPSIjM2YzZDU2Ii8+PHJlY3QgeD0iMjA4LjQ0NDQ0IiB5PSI1MTYuMzQ2ODUiIHdpZHRoPSI5NC4xMTExMSIgaGVpZ2h0PSIyLjEzODg5IiBmaWxsPSIjM2YzZDU2Ii8+PHJlY3QgeD0iMjA4LjQ0NDQ0IiB5PSI1MzEuMzQ2ODUiIHdpZHRoPSI5NC4xMTExMSIgaGVpZ2h0PSIyLjEzODg5IiBmaWxsPSIjM2YzZDU2Ii8+PHBhdGggZD0iTTE1Mi4zNjAyNywxNDMuMjc2MjJjMTYuMjU5OC0zNi40NzMzOCw0MC43NjY3OC02MC40NjU4LDcyLjgzOTI3LTcxLjMxMTM3LDIzLjgxMjg1LTguMDUyNzYsNTEuMzUxNjItOC44MTM3Myw4MS44NTE0MS0yLjI2MjUzQTIxOC44ODg2OSwyMTguODg4NjksMCwwLDEsMzcxLjAwMjQ5LDk0LjU0M2MxMDUuODgxNSw2MS40NTAxOSwxNzEuMzQxNzgsNjEuOTk2NDIsMjA3LjYxMTY4LDUxLjYzMzgzLDM5Ljc2OS0xMS4zNjE4Niw1NC4zMjMtMzguMDIxNzEsNTQuNDY1MjItMzguMjg5ODRsMS43NjcyMi45MzY2M2MtLjE0NTUzLjI3NDgtMTUuMDMwNzgsMjcuNjMyNDUtNTUuNjA0MDcsMzkuMjU0LTIzLjM5MDY5LDYuNjk5NzItNTAuNzIwODEsNi45NzYzLTgxLjIzMDY4LjgyMjExLTM3Ljk3MS03LjY1OTU4LTgxLjA0MDg3LTI1LjM2NTgxLTEyOC4wMTM1NC01Mi42MjY2MkEyMTYuOTA0MTYsMjE2LjkwNDE2LDAsMCwwLDMwNi42MzE2Nyw3MS42NTc2Yy01MC4wMjMyNS0xMC43NDQ2Ny0xMTcuMDc3MjctNi45MDA1LTE1Mi40NDU1Miw3Mi40MzI4NFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNC41IC0zMi42NTUzNSkiIGZpbGw9IiMyZjJlNDEiLz48Y2lyY2xlIGN4PSIyNTYiIGN5PSIyMzciIHI9IjM2IiBmaWxsPSIjM2YzZDU2Ii8+PGNpcmNsZSBjeD0iNTI4IiBjeT0iMTc0IiByPSIzNiIgZmlsbD0iIzNmM2Q1NiIvPjxjaXJjbGUgY3g9Ijc2MyIgY3k9IjE0MiIgcj0iMzYiIGZpbGw9IiMzZjNkNTYiLz48cGF0aCBkPSJNMjM3LjUsMjU1LjY1NTM1SDE0LjV2LTExNGgyMjNabS0yMjEtMmgyMTl2LTExMEgxNi41WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE0LjUgLTMyLjY1NTM1KSIgZmlsbD0iIzNmM2Q1NiIvPjxyZWN0IHg9IjI4MiIgeT0iNTkuODMyNTgiIHdpZHRoPSIxOTUiIGhlaWdodD0iODcuMTY3NDIiIGZpbGw9IiNmMmYyZjIiLz48cmVjdCB4PSIzMzIuNDQ0NDQiIHk9Ijg3LjM0Njg1IiB3aWR0aD0iOTQuMTExMTEiIGhlaWdodD0iMi4xMzg4OSIgZmlsbD0iIzNmM2Q1NiIvPjxyZWN0IHg9IjMzMi40NDQ0NCIgeT0iMTAyLjM0Njg1IiB3aWR0aD0iOTQuMTExMTEiIGhlaWdodD0iMi4xMzg4OSIgZmlsbD0iIzNmM2Q1NiIvPjxyZWN0IHg9IjMyOS40NDQ0NCIgeT0iMTE0LjM0Njg1IiB3aWR0aD0iOTQuMTExMTEiIGhlaWdodD0iMi4xMzg4OSIgZmlsbD0iIzNmM2Q1NiIvPjxwYXRoIGQ9Ik01MTguNSwxODAuNjU1MzVoLTIyM3YtMTE0aDIyM1ptLTIyMS0yaDIxOXYtMTEwaC0yMTlaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTQuNSAtMzIuNjU1MzUpIiBmaWxsPSIjM2YzZDU2Ii8+PHJlY3QgeD0iNzg1IiB5PSIyNS44MzI1OCIgd2lkdGg9IjE5NSIgaGVpZ2h0PSI4Ny4xNjc0MiIgZmlsbD0iI2YyZjJmMiIvPjxyZWN0IHg9IjgzNS40NDQ0NCIgeT0iNTMuMzQ2ODUiIHdpZHRoPSI5NC4xMTExMSIgaGVpZ2h0PSIyLjEzODg5IiBmaWxsPSIjM2YzZDU2Ii8+PHJlY3QgeD0iODM1LjQ0NDQ0IiB5PSI2OC4zNDY4NSIgd2lkdGg9Ijk0LjExMTExIiBoZWlnaHQ9IjIuMTM4ODkiIGZpbGw9IiMzZjNkNTYiLz48cmVjdCB4PSI4MzUuNDQ0NDQiIHk9IjgzLjM0Njg1IiB3aWR0aD0iOTQuMTExMTEiIGhlaWdodD0iMi4xMzg4OSIgZmlsbD0iIzNmM2Q1NiIvPjxwYXRoIGQ9Ik0xMDIxLjUsMTQ2LjY1NTM1aC0yMjN2LTExNGgyMjNabS0yMjEtMmgyMTl2LTExMGgtMjE5WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE0LjUgLTMyLjY1NTM1KSIgZmlsbD0iIzNmM2Q1NiIvPjwvc3ZnPg=="

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4e1de433d4d47ce8ffd898a18c1592a6.svg";

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iZmVhNTE1ZWYtNjE3ZS00ZWY3LWIzZjEtYmE4NGI0Y2Y1MmY2IiBkYXRhLW5hbWU9IkxheWVyIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9Ijg4OCIgaGVpZ2h0PSI1MTIuNjU2NzkiIHZpZXdCb3g9IjAgMCA4ODggNTEyLjY1Njc5Ij48dGl0bGU+b3BlbmVkX3RhYnM8L3RpdGxlPjxlbGxpcHNlIGN4PSIzODMuMzc1NTQiIGN5PSI0OTYuMDY1MyIgcng9IjE0NC40MTU1IiByeT0iMTYuNTkxNDkiIGZpbGw9IiNlNmU2ZTYiLz48cmVjdCB4PSI3MjguMjk4NzkiIHk9IjI5MS4yMzg3NyIgd2lkdGg9IjI5NS45OTQ1MiIgaGVpZ2h0PSIxODkuNTY4MDYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMy43NTc0NSAtNDEwLjM4NjUzKSByb3RhdGUoMTUuMjM1NzIpIiBmaWxsPSIjZTZlNmU2Ii8+PHJlY3QgeD0iNzM0LjM3NTQzIiB5PSIzMTcuNDk5NDYiIHdpZHRoPSIyNzkuMDY2NzMiIGhlaWdodD0iMTU0LjU3NjYzIiB0cmFuc2Zvcm09Im1hdHJpeCgwLjk2NDg1LCAwLjI2Mjc5LCAtMC4yNjI3OSwgMC45NjQ4NSwgLTIxLjUzOCwgLTQwOS40NTExMikiIGZpbGw9IiNmZmYiLz48cmVjdCB4PSI3NTAuNzI1NjgiIHk9IjI5NC4wNTM1NyIgd2lkdGg9IjI5NS45OTQ1MiIgaGVpZ2h0PSIxOC4yOTMxNyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQ0LjczNDIzIC00MTkuMTkxMDkpIHJvdGF0ZSgxNS4yMzU3MikiIGZpbGw9IiM2OTMwNmQiLz48Y2lyY2xlIGN4PSI2MTMuMTY3OTUiIGN5PSI3NC4yNDI0OSIgcj0iNC40MjM1NiIgZmlsbD0iI2ZmZiIvPjxjaXJjbGUgY3g9IjYyOS4zNjg1MyIgY3k9Ijc4LjY1NDk0IiByPSI0LjQyMzU2IiBmaWxsPSIjZmZmIi8+PGNpcmNsZSBjeD0iNjQ1LjU2OTEyIiBjeT0iODMuMDY3MzkiIHI9IjQuNDIzNTYiIGZpbGw9IiNmZmYiLz48cmVjdCB4PSI3NjEuMTQ4NjEiIHk9IjM0Ny45MTYyNSIgd2lkdGg9IjI0Ni40NDY3IiBoZWlnaHQ9IjE2LjQyOTc4IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjk2NDg1LCAwLjI2Mjc5LCAtMC4yNjI3OSwgMC45NjQ4NSwgLTMxLjMyODg2LCAtNDEzLjU1OTQxKSIgZmlsbD0iI2U2ZTZlNiIvPjxyZWN0IHg9Ijc1Mi4wMjQ0NyIgeT0iMzgyLjE0ODM4IiB3aWR0aD0iMjQ2LjQ0NjciIGhlaWdodD0iMTYuNDI5NzgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMi42NTM2NSAtNDA5Ljk1ODUxKSByb3RhdGUoMTUuMjM1NzIpIiBmaWxsPSIjZTZlNmU2Ii8+PHJlY3QgeD0iNzQyLjkwMDMzIiB5PSI0MTYuMzgwNTEiIHdpZHRoPSIyNDYuNDQ2NyIgaGVpZ2h0PSIxNi40Mjk3OCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEzLjk3ODQ1IC00MDYuMzU3NjEpIHJvdGF0ZSgxNS4yMzU3MikiIGZpbGw9IiNlNmU2ZTYiLz48cmVjdCB4PSIwLjEyNjM5IiB5PSIyMzQuMjA5OTYiIHdpZHRoPSIyOTUuOTk0NTIiIGhlaWdodD0iMTg5LjU2ODA2IiBmaWxsPSIjZTZlNmU2Ii8+PHJlY3QgeD0iOC41OTAyOCIgeT0iMjYwLjc4OTkyIiB3aWR0aD0iMjc5LjA2NjczIiBoZWlnaHQ9IjE1NC41NzY2MyIgZmlsbD0iI2ZmZiIvPjxyZWN0IHk9IjIzNC4wNDIxNiIgd2lkdGg9IjI5NS45OTQ1MiIgaGVpZ2h0PSIxOC4yOTMxNyIgZmlsbD0iIzY5MzA2ZCIvPjxjaXJjbGUgY3g9IjEzLjcyMjkxIiBjeT0iMjQzLjE4ODc0IiByPSI0LjQyMzU2IiBmaWxsPSIjZmZmIi8+PGNpcmNsZSBjeD0iMzAuNTEzNjQiIGN5PSIyNDMuMTg4NzQiIHI9IjQuNDIzNTYiIGZpbGw9IiNmZmYiLz48Y2lyY2xlIGN4PSI0Ny4zMDQzNyIgY3k9IjI0My4xODg3NCIgcj0iNC40MjM1NiIgZmlsbD0iI2ZmZiIvPjxyZWN0IHg9IjI0LjgzNzEiIHk9IjI4OS44MTU3NiIgd2lkdGg9IjI0Ni40NDY3IiBoZWlnaHQ9IjE2LjQyOTc4IiBmaWxsPSIjZTZlNmU2Ii8+PHJlY3QgeD0iMjUuMDI5NTQiIHk9IjMyNS4yNDI0NyIgd2lkdGg9IjI0Ni40NDY3IiBoZWlnaHQ9IjE2LjQyOTc4IiBmaWxsPSIjZTZlNmU2Ii8+PHJlY3QgeD0iMjUuMjIxOTciIHk9IjM2MC42NjkxOSIgd2lkdGg9IjI0Ni40NDY3IiBoZWlnaHQ9IjE2LjQyOTc4IiBmaWxsPSIjZTZlNmU2Ii8+PHJlY3QgeD0iNTM2LjE1Njk2IiB5PSIyOTIuOTkwNjgiIHdpZHRoPSIzMTcuMDgzODgiIGhlaWdodD0iMjAzLjA3NDYyIiBmaWxsPSIjZTZlNmU2Ii8+PHJlY3QgeD0iNTQ1LjIyMzkiIHk9IjMyMS40NjQ0NCIgd2lkdGg9IjI5OC45NSIgaGVpZ2h0PSIxNjUuNTkwMDkiIGZpbGw9IiNmZmYiLz48cmVjdCB4PSI1MzYuMDIxNTciIHk9IjI5Mi44MTA5MiIgd2lkdGg9IjMxNy4wODM4OCIgaGVpZ2h0PSIxOS41OTY1NCIgZmlsbD0iIzY5MzA2ZCIvPjxjaXJjbGUgY3g9IjU1MC43MjIyMiIgY3k9IjMwMi42MDkxOSIgcj0iNC43Mzg3MyIgZmlsbD0iI2ZmZiIvPjxjaXJjbGUgY3g9IjU2OC43MDkyOCIgY3k9IjMwMi42MDkxOSIgcj0iNC43Mzg3MyIgZmlsbD0iI2ZmZiIvPjxjaXJjbGUgY3g9IjU4Ni42OTYzMyIgY3k9IjMwMi42MDkxOSIgcj0iNC43Mzg3MyIgZmlsbD0iI2ZmZiIvPjxyZWN0IHg9IjU2Mi42MjgyOSIgeT0iMzUyLjU1ODM1IiB3aWR0aD0iMjY0LjAwNTgxIiBoZWlnaHQ9IjE3LjYwMDM5IiBmaWxsPSIjZTZlNmU2Ii8+PHJlY3QgeD0iNTYyLjgzNDQ0IiB5PSIzOTAuNTA5MTgiIHdpZHRoPSIyNjQuMDA1ODEiIGhlaWdodD0iMTcuNjAwMzkiIGZpbGw9IiNlNmU2ZTYiLz48cmVjdCB4PSI1NjMuMDQwNTgiIHk9IjQyOC40NjAwMiIgd2lkdGg9IjI2NC4wMDU4MSIgaGVpZ2h0PSIxNy42MDAzOSIgZmlsbD0iI2U2ZTZlNiIvPjxwYXRoIGQ9Ik00MzguMTU1MTQsNDA1LjcwNjc5bC00LjM2ODM2LDguNzM2NzJzLTE3LjQ3MzQ2LDMwLjU3ODU1LTIuOTEyMjQsMzAuNTc4NTVTNDQ4LjM0OCw0MTguODExODgsNDQ4LjM0OCw0MTguODExODhsMS40NTYxMi04LjczNjczWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE1NiAtMTkzLjY3MTYxKSIgZmlsbD0iI2EwNjE2YSIvPjxwYXRoIGQ9Ik01OTUuNDE2MjIsMjM4LjI1Mjg2czEuNDU2MTIsMjQuNzU0MDYsNS44MjQ0OSwyOS4xMjI0Mi0zNi40MDMsMC0zNi40MDMsMCwxLjQ1NjEyLTI3LjY2NjMsMC0yOS4xMjI0MlM1OTUuNDE2MjIsMjM4LjI1Mjg2LDU5NS40MTYyMiwyMzguMjUyODZaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTU2IC0xOTMuNjcxNjEpIiBmaWxsPSIjYTA2MTZhIi8+PHBhdGggZD0iTTUyMi42MTAxNywzOTguNDI2MThTNTA4LjA0OSw0ODQuMzM3MzMsNTA4LjA0OSw0OTUuOTg2M3MtNS44MjQ0OSwyNi4yMTAxOC01LjgyNDQ5LDI2LjIxMDE4bC0yNi4zMzU4OCw5OC42NDk0LDM3Ljk5Mzg3LDMuMDgwNThMNTM5LjU1NCw1NDAuNzUwNyw1NjcuNzQ5OTIsNDU2LjY3MWwxNi4wMTczMyw4NS45MTExNEw1ODAuODU1LDY0MS41OTg0MWwyOS4xMjI0MiwyLjkxMjI0LDE2LjAxNzM0LTEwNy43NTNzMTAuMTkyODUtMTI5LjU5NDc4LTguNzM2NzMtMTMyLjUwN1M1MjIuNjEwMTcsMzk4LjQyNjE4LDUyMi42MTAxNywzOTguNDI2MThaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTU2IC0xOTMuNjcxNjEpIiBmaWxsPSIjMmYyZTQxIi8+PHBvbHlnb24gcG9pbnRzPSI0MjUuNjU1IDQzMi4zMDkgNDI3Ljc2NyA0NjguMzEyIDQ0Ni42OTcgNDY4LjMxMiA0NDguMTUzIDQ0Ni40NzEgNDI1LjY1NSA0MzIuMzA5IiBmaWxsPSIjMmYyZTQxIi8+PHBhdGggZD0iTTU4Ni42Nzk1LDY1Ni4xNTk2MnMtNC4zNjgzNy0xNi4wMTczMy03LjI4MDYxLTcuMjgwNi03LjI4MDYsMTguOTI5NTctNy4yODA2LDE4LjkyOTU3LTExLjY0OSwxMS42NDksMi45MTIyNCwxNi4wMTczMywyNC43NTQwNiwyLjkxMjI0LDI0Ljc1NDA2LDcuMjgwNjEsNDkuNTA4MTIsMTQuNTYxMjEsNDYuNTk1ODctMS40NTYxMi0yMy4yOTc5NC0yMy4yOTc5NC0yMy4yOTc5NC0yMy4yOTc5NC0xMi4zMzY5LTIzLjI5Nzk0LTE3LjA4OTM1LTIxLjg0MTgyLTYuMjA4NTgsNy4yODA2MS02LjIwODU4LDcuMjgwNjFaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTU2IC0xOTMuNjcxNjEpIiBmaWxsPSIjMmYyZTQxIi8+PHBvbHlnb24gcG9pbnRzPSIzMzEuNjYzIDQyMC4yNjEgMzI4Ljc1MSA0NDYuNDcxIDM0OS4xMzcgNDQ2LjQ3MSAzNTUuODI5IDQyMS4wMTMgMzMxLjY2MyA0MjAuMjYxIiBmaWxsPSIjMmYyZTQxIi8+PGNpcmNsZSBjeD0iNDIzLjM5ODg5IiBjeT0iMzEuNDc2MTYiIHI9IjI0Ljc1NDA2IiBmaWxsPSIjYTA2MTZhIi8+PHBhdGggZD0iTTU5OCwyNTguNzk3MjlzLTE1LjA3MDQzLDExLjEwNTA5LTM0LTJjMCwwLTYsMC0xNi42MzU3Ny4zODUxNC0xMS4wODIyMy40MDEzMS0zMC41Nzg1NSwxMS42NDktMzAuNTc4NTUsMTEuNjQ5TDUxNSwzNDAuNzk3MjlsMTEuOTc4NTMtNC45ODQzMnMtMjEuODQxODIsNTIuNDIwMzYtMTEuNjQ5LDU5LjcwMSw0LjM2ODM2LDEwLjE5Mjg1LDQuMzY4MzYsMTAuMTkyODUsMTQuNTYxMjItMTEuNjQ5LDI2LjIxMDE4LTIuOTEyMjUsNzcuMTc0NDIsOC43MzY3Myw3Ny4xNzQ0Miw1LjgyNDQ5YTYuMzc3NzQsNi4zNzc3NCwwLDAsMC0xLjQ1NjEyLTQuMzY4MzZzOC43MzY3My0xMS42NDktNC4zNjgzNi0yNy42NjYzMWMwLDAsMTAuMTkyODUtMTMuMTA1MDksNy4yODA2MS0yMC4zODU2OWwxNy40NzM0NS02MS4xNTcwOXMtNC4zNjgzNi0xNi4wMTczMy0xNi4wMTczMy0yMC4zODU3UzU5OCwyNTguNzk3MjksNTk4LDI1OC43OTcyOVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNTYgLTE5My42NzE2MSkiIGZpbGw9IiM1NzVhODkiLz48cGF0aCBkPSJNNTI4LjQzNDY1LDI3MS43NDM2NGwtMTEuNjQ5LTIuOTEyMjRTNDkyLjAzMTYyLDI5OS40MDk5NCw0ODQuNzUxLDMxMi41MTVzLTQ2LjU5NTg4LDc4LjYzMDU0LTQ2LjU5NTg4LDgyLjk5ODkxUzQzNS4yNDI5LDQwOC42MTksNDM1LjI0MjksNDA4LjYxOWwxNi4wMTczMyw1LjgyNDQ4czUuODI0NDktOC43MzY3Miw3LjI4MDYxLTguNzM2NzIsMzQuOTQ2OS0zMC41Nzg1NSwzMy40OTA3OC0zNC45NDY5MSwxMy4xMDUwOS0xMy4xMDUwOSwxMy4xMDUwOS0xMy4xMDUwOSw0Ljc5Mi00Ljc5NzczLDUuODI0NDktNS44MjQ0OWMxLjAzODgtMS4wMzMsMjAuMzg1NjktMjEuODQxODEsMjAuMzg1NjktMjEuODQxODFaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTU2IC0xOTMuNjcxNjEpIiBmaWxsPSIjNTc1YTg5Ii8+PHBhdGggZD0iTTcwOS43NTI1NCw0MTQuOTQ4NTRsNC4zNjgzNyw4LjczNjcyczE3LjQ3MzQ1LDMwLjU3ODU1LDIuOTEyMjQsMzAuNTc4NTUtMTcuNDczNDUtMjYuMjEwMTgtMTcuNDczNDUtMjYuMjEwMThsLTEuNDU2MTMtOC43MzY3M1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNTYgLTE5My42NzE2MSkiIGZpbGw9IiNhMDYxNmEiLz48cGF0aCBkPSJNNjE5LjQ3MywyODAuOTg1MzlsMTEuNjQ5LTIuOTEyMjRzMjQuNzU0MDYsMzAuNTc4NTQsMzIuMDM0NjcsNDMuNjgzNjMsNDYuNTk1ODcsNzguNjMwNTUsNDYuNTk1ODcsODIuOTk4OTEsMi45MTIyNSwxMy4xMDUwOSwyLjkxMjI1LDEzLjEwNTA5bC0xNi4wMTczNCw1LjgyNDQ4cy01LjgyNDQ4LTguNzM2NzItNy4yODA2LTguNzM2NzJTNjU0LjQxOTk0LDM4NC4zNyw2NTUuODc2MDYsMzgwLjAwMTYzLDY0Mi43NzEsMzY2Ljg5NjU0LDY0Mi43NzEsMzY2Ljg5NjU0cy01LjgyNDQ4LTQuMzY4MzYtNS44MjQ0OC01LjgyNDQ4LTIwLjM4NTctMjEuODQxODItMjAuMzg1Ny0yMS44NDE4MloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNTYgLTE5My42NzE2MSkiIGZpbGw9IiM1NzVhODkiLz48cGF0aCBkPSJNNTkyLjE1NTM5LDIxMy4yNTgxNnMyLjk4ODg1LDYuNDY4MjMtOC45NjY1NiwzLjg4MDk0YzAsMC00LjQ4MzI3LDIuNTg3MjktNC40ODMyNy0xLjI5MzY1LDAsMC01Ljk3NzcxLDYuNDY4MjMtNy40NzIxMywyLjU4NzNzLTQuNDgzMjgsMS4yOTM2NC00LjQ4MzI4LDEuMjkzNjRsLTIuOTg4ODUtNi40NjgyMy0yLjk4ODg1LDMuODgwOTRoLTEwLjQ2MXMtMi45ODg4NS0yNS44NzI5MSwzMi44NzczNi0yMy4yODU2MiwxOC4yMjE5Myw0My41ODAzNywxOC4yMjE5Myw0My41ODAzNy0uMjg4ODItNy4zNTgyOS0zLjI3NzY3LTMuNDc3MzZTNTkyLjE1NTM5LDIxMy4yNTgxNiw1OTIuMTU1MzksMjEzLjI1ODE2WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE1NiAtMTkzLjY3MTYxKSIgZmlsbD0iIzJmMmU0MSIvPjxwYXRoIGQ9Ik01MDMuMTA0NTMsNjMzLjY2OTQ5cy0yLjU5MTkxLTE2LjM5ODc3LDMuNjUwMTMtOS42Mjc2MiwxNC40MDk2MSwxNC4yNzIzMiwxNC40MDk2MSwxNC4yNzIzMiwxNS40MDQxOSw1Ljg0MDIsMy45MTk2OSwxNS44MDEtMjEuMzc2NjYsMTIuODE3MjgtMTkuNTgzNDIsMTYuODAwNlM0NjYuMzMzNzEsNzA0LjUxNyw0NjIuNDE0LDY4OC43MTZzMTEuNjgwNC0zMC44MDgzNywxMS42ODA0LTMwLjgwODM3LDEuNjg1NS0yNi4zMDg3OSw2LjYxNjgxLTI2LjkzMTk0LDguNjUwMDksNC4wOTAyMSw4LjY1MDA5LDQuMDkwMjFaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTU2IC0xOTMuNjcxNjEpIiBmaWxsPSIjMmYyZTQxIi8+PC9zdmc+"

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(34);
__webpack_require__(35);
module.exports = __webpack_require__(41);


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
/* eslint-disable import/no-dynamic-require */

var plugins = __webpack_require__(16)["default"];

var _require = __webpack_require__(17),
    registerPlugins = _require.registerPlugins;

registerPlugins(plugins);

if (typeof document !== 'undefined' && module && module.hot) {
  module.hot.accept("/Users/macbook/Desktop/portfolio/artifacts/react-static-browser-plugins.js", function () {
    registerPlugins(__webpack_require__(16)["default"]);
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(10)(module)))

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
/* eslint-disable import/no-dynamic-require */

var _require = __webpack_require__(17),
    registerTemplates = _require.registerTemplates;

var _require2 = __webpack_require__(18),
    templates = _require2["default"],
    notFoundTemplate = _require2.notFoundTemplate;

registerTemplates(templates, notFoundTemplate);

if (typeof document !== 'undefined' && module && module.hot) {
  module.hot.accept("/Users/macbook/Desktop/portfolio/artifacts/react-static-templates.js", function () {
    var _require3 = __webpack_require__(18),
        templates = _require3["default"],
        notFoundTemplate = _require3.notFoundTemplate;

    registerTemplates(templates, notFoundTemplate);
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(10)(module)))

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

exports["default"] = requireUniversalModule;

var _utils = __webpack_require__(12);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache,
      usesBabelPlugin = options.usesBabelPlugin;
  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;
  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);
    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;
    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);

        if (onError) {
          var _isServer = typeof window === 'undefined';

          var info = {
            isServer: _isServer
          };
          onError(error, info);
        }

        rej(error);
      }; // const timer = timeout && setTimeout(reject, timeout)


      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);
        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);
        reject(new Error('export not found'));
      };

      var request = load(props, {
        resolve: resolve,
        reject: reject
      }); // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.

      if (!request || typeof request.then !== 'function') return;
      request.then(resolve)["catch"](reject);
    });
    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);

        if (usesBabelPlugin) {
          // if ignoreBabelRename is true, don't apply regex
          var shouldKeepName = options && !!options.ignoreBabelRename;

          if (!shouldKeepName) {
            name = name.replace(/\//g, '-');
          }
        }

        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);
    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);
    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    var resultingConfig = typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;

    if (options) {
      resultingConfig = _extends({}, resultingConfig, options);
    }

    return resultingConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };
  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load,
    ignoreBabelRename: true
  };
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	".": 5,
	"./": 5,
	"./index": 5,
	"./index.js": 5
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 37;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(11);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(19);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2["default"].Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2["default"].Component);

ReportChunks.propTypes = {
  report: _propTypes2["default"].func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2["default"].func.isRequired
};
exports["default"] = ReportChunks;

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("vm");

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__handleAfter = exports.__update = undefined;

var _hoistNonReactStatics = __webpack_require__(20);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _index = __webpack_require__(4);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var __update = exports.__update = function __update(props, state, isInitialized) {
  var isMount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var isSync = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var isServer = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  if (!isInitialized) return state;

  if (!state.error) {
    state.error = null;
  }

  return __handleAfter(props, state, isMount, isSync, isServer);
};
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["__handleAfter"] }] */


var __handleAfter = exports.__handleAfter = function __handleAfter(props, state, isMount, isSync, isServer) {
  var mod = state.mod,
      error = state.error;

  if (mod && !error) {
    (0, _hoistNonReactStatics2["default"])(_index2["default"], mod, {
      preload: true,
      preloadWeak: true
    });

    if (props.onAfter) {
      var onAfter = props.onAfter;
      var info = {
        isMount: isMount,
        isSync: isSync,
        isServer: isServer
      };
      onAfter(info, mod);
    }
  } else if (error && props.onError) {
    props.onError(error);
  }

  return state;
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(42);

var _interopRequireDefault = __webpack_require__(43);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(44));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(45));

var React = _interopRequireWildcard(__webpack_require__(0));

var _useStaticInfo = __webpack_require__(46);
/* eslint-disable import/no-dynamic-require */


var OriginalSuspense = React.Suspense;

function Suspense(_ref) {
  var key = _ref.key,
      children = _ref.children,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["key", "children"]);
  return typeof document !== 'undefined' ? React.createElement(OriginalSuspense, (0, _extends2["default"])({
    key: key
  }, rest), children) : React.createElement(React.Fragment, {
    key: key
  }, children);
} // Override the suspense module to be our own


React.Suspense = Suspense;
React["default"].Suspense = Suspense;

var App = __webpack_require__(47)["default"];

var _default = function _default(staticInfo) {
  return function (props) {
    return React.createElement(_useStaticInfo.staticInfoContext.Provider, {
      value: staticInfo
    }, React.createElement(App, props));
  };
};

exports["default"] = _default;

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireWildcard");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireDefault");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/extends");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectWithoutProperties");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("/Users/macbook/Desktop/portfolio/node_modules/react-static/lib/browser/hooks/useStaticInfo");

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);


 // Your top level component

 // Export your top level component as JSX (for static rendering)

/* harmony default export */ __webpack_exports__["default"] = (_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]); // Render your app

if (typeof document !== 'undefined') {
  var target = document.getElementById('root');
  var renderMethod = target.hasChildNodes() ? react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.hydrate : react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render;

  var render = function render(Comp) {
    renderMethod(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__["AppContainer"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comp, null)), target);
  }; // Render!


  render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]); // Hot Module Replacement

  if (module && module.hot) {
    module.hot.accept('./App', function () {
      render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);
    });
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(48)(module)))

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = function (originalModule) {
  if (!originalModule.webpackPolyfill) {
    var module = Object.create(originalModule); // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    Object.defineProperty(module, "exports", {
      enumerable: true
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ })
/******/ ]);
});
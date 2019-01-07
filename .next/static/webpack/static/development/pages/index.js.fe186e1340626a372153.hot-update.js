webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/main.scss */ "./styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fullpage/react-fullpage */ "./node_modules/@fullpage/react-fullpage/dist/react-fullpage.js");
/* harmony import */ var _fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_HomePage_Intro__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/HomePage/Intro */ "./components/HomePage/Intro.js");
/* harmony import */ var _components_HomePage_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/HomePage/Footer */ "./components/HomePage/Footer.js");
/* harmony import */ var _components_HomePage_About__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/HomePage/About */ "./components/HomePage/About.js");
/* harmony import */ var _components_HomePage_Skills__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/HomePage/Skills */ "./components/HomePage/Skills.js");
/* harmony import */ var _components_HomePage_Work__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/HomePage/Work */ "./components/HomePage/Work.js");
/* harmony import */ var gsap_TweenLite__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! gsap/TweenLite */ "./node_modules/gsap/TweenLite.js");
var _jsxFileName = "/Users/eli/Documents/projects/react-portfolio/pages/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }











var originalColors = ["#282c34", "#ff5f45", "#0798ec"];

var Home =
/*#__PURE__*/
function (_Component) {
  _inherits(Home, _Component);

  function Home(props) {
    var _this;

    _classCallCheck(this, Home);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Home).call(this, props));
    _this.square = document.getElementsByClassName('shape1');
    _this.state = {
      sectionsColor: originalColors.concat(),
      fullpages: [{
        text: "section 1"
      }, {
        text: "section 2"
      }]
    };
    return _this;
  }

  _createClass(Home, [{
    key: "onLeave",
    value: function onLeave(origin, destination, direction) {
      // console.log("onLeave", { origin, destination, direction });
      switch (destination.index) {
        case 0:
          console.log('Intro');
          gsap_TweenLite__WEBPACK_IMPORTED_MODULE_9__["TweenLite"].to(this.square, 2, {
            width: "200px",
            height: "150px"
          });
          break;

        case 1:
          console.log('About');
          break;

        case 2:
          console.log('Work');
          break;

        case 3:
          console.log('Skills');
          break;

        case 4:
          console.log('Footer');
          break;

        default:
          break;
      } // arguments are mapped in order of fullpage.js callback arguments do something
      // with the event

    }
  }, {
    key: "render",
    value: function render() {
      var fullpages = this.state.fullpages;

      if (!fullpages.length) {
        return null;
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "App",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "shape1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "shape2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_3___default.a, {
        navigation: true,
        onLeave: this.onLeave.bind(this) // sectionsColor={this.state.sectionsColor}
        ,
        render: function render(comp) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_3___default.a.Wrapper, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 86
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HomePage_Intro__WEBPACK_IMPORTED_MODULE_4__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 87
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HomePage_About__WEBPACK_IMPORTED_MODULE_6__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 88
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HomePage_Work__WEBPACK_IMPORTED_MODULE_8__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 89
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HomePage_Skills__WEBPACK_IMPORTED_MODULE_7__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 90
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HomePage_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 91
            },
            __self: this
          }));
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Home);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.fe186e1340626a372153.hot-update.js.map
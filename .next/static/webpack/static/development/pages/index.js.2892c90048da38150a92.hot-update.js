webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/auto-complete.js":
/*!********************************!*\
  !*** ./pages/auto-complete.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_autosuggest__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-autosuggest */ "./node_modules/react-autosuggest/dist/index.js");
/* harmony import */ var react_autosuggest__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_autosuggest__WEBPACK_IMPORTED_MODULE_10__);









var _jsxFileName = "C:\\workfolder\\frontDesafioDito\\pages\\auto-complete.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

var divStyle = {
  margin: '40px',
  width: '100%'
};

var getSuggestions =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee(value) {
    var inputValue, inputLength, eventData;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            inputValue = value.trim().toLowerCase();
            inputLength = inputValue.length;
            _context.next = 4;
            return getEvents();

          case 4:
            eventData = _context.sent;
            return _context.abrupt("return", inputLength === 0 ? [] : eventData.filter(function (it) {
              return it.event.toLowerCase().slice(0, inputLength) === inputValue;
            }));

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getSuggestions(_x) {
    return _ref.apply(this, arguments);
  };
}();

var getSuggestionValue = function getSuggestionValue(suggestion) {
  return suggestion.event;
}; // Use your imagination to render suggestions.


var renderSuggestion = function renderSuggestion(suggestion) {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, suggestion.event);
};

var getEvents =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee2() {
    var response, body;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return fetch('http://localhost:3001/?evento=buy');

          case 2:
            response = _context2.sent;
            _context2.next = 5;
            return response.json();

          case 5:
            body = _context2.sent;
            return _context2.abrupt("return", body);

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getEvents() {
    return _ref2.apply(this, arguments);
  };
}();

var Example =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Example, _React$Component);

  function Example() {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Example);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Example).call(this)); // Autosuggest is a controlled component.
    // This means that you need to provide an input value
    // and an onChange handler that updates this value (see below).
    // Suggestions also need to be provided to the Autosuggest,
    // and they are initially empty because the Autosuggest is closed.

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onChange", function (event, _ref3) {
      var newValue = _ref3.newValue;

      _this.setState({
        value: newValue
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onSuggestionsFetchRequested",
    /*#__PURE__*/
    function () {
      var _ref5 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee3(_ref4) {
        var value;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                value = _ref4.value;
                _context3.t0 = _this;
                _context3.next = 4;
                return getSuggestions(value);

              case 4:
                _context3.t1 = _context3.sent;
                _context3.t2 = {
                  suggestions: _context3.t1
                };

                _context3.t0.setState.call(_context3.t0, _context3.t2);

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x2) {
        return _ref5.apply(this, arguments);
      };
    }());

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onSuggestionsClearRequested", function () {
      _this.setState({
        suggestions: []
      });
    });

    _this.state = {
      value: '',
      suggestions: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Example, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          value = _this$state.value,
          suggestions = _this$state.suggestions;
      var inputProps = {
        placeholder: 'Digite um evento',
        value: value,
        onChange: this.onChange
      };
      return __jsx(react_autosuggest__WEBPACK_IMPORTED_MODULE_10___default.a, {
        suggestions: suggestions,
        onSuggestionsFetchRequested: this.onSuggestionsFetchRequested,
        onSuggestionsClearRequested: this.onSuggestionsClearRequested,
        getSuggestionValue: getSuggestionValue,
        renderSuggestion: renderSuggestion,
        inputProps: inputProps,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      });
    }
  }]);

  return Example;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Example);

/***/ })

})
//# sourceMappingURL=index.js.2892c90048da38150a92.hot-update.js.map
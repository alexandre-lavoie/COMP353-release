webpackHotUpdate_N_E("pages/chat",{

/***/ "./components/ChatBox.tsx":
/*!********************************!*\
  !*** ./components/ChatBox.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\tatti\\Documents\\Github\\COMP353\\web\\components\\ChatBox.tsx",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    messageContainer: {
      height: '100%'
    },
    messageGridContainer: {
      height: '100%',
      padding: theme.spacing(2)
    },
    messageField: {
      width: '100%'
    },
    messageBubble: {
      padding: theme.spacing(2)
    }
  };
});

var Message = function Message(props) {
  _s();

  var theme = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["useTheme"])();
  var classes = useStyles();
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    container: true,
    justify: props.isAuthor ? 'flex-end' : 'flex-start',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Paper"], {
    className: classes.messageBubble,
    elevation: 0,
    style: {
      backgroundColor: theme.palette[props.isAuthor ? 'primary' : 'secondary'].main
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, props.children)));
};

_s(Message, "H43PDnWPsspE0TkwGa5lPfJs7XQ=", false, function () {
  return [_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["useTheme"], useStyles];
});

_c = Message;

var ChatBox = function ChatBox() {
  _s2();

  var theme = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["useTheme"])();

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["useTranslation"])(),
      t = _useTranslation.t;

  var classes = useStyles();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Paper"], {
    className: classes.messageContainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    className: classes.messageGridContainer,
    container: true,
    direction: "column",
    spacing: 2,
    justify: "flex-end",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    style: {
      height: '90%',
      overflowY: 'scroll'
    },
    container: true,
    item: true,
    spacing: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    }
  }, new Array(100).fill(0).map(function (v, i) {
    return __jsx(Message, {
      isAuthor: i % 2 == 0,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 29
      }
    }, i);
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    item: true,
    alignItems: "center",
    spacing: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    className: classes.messageField,
    variant: "outlined",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 25
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 25
    }
  }, __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["Send"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 29
    }
  })))))));
};

_s2(ChatBox, "0lE5HiGHZKm1gw4L3pmdFJuGw80=", false, function () {
  return [_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["useTheme"], react_i18next__WEBPACK_IMPORTED_MODULE_3__["useTranslation"], useStyles];
});

_c2 = ChatBox;
/* harmony default export */ __webpack_exports__["default"] = (ChatBox);

var _c, _c2;

$RefreshReg$(_c, "Message");
$RefreshReg$(_c2, "ChatBox");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGF0Qm94LnRzeCJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJtZXNzYWdlQ29udGFpbmVyIiwiaGVpZ2h0IiwibWVzc2FnZUdyaWRDb250YWluZXIiLCJwYWRkaW5nIiwic3BhY2luZyIsIm1lc3NhZ2VGaWVsZCIsIndpZHRoIiwibWVzc2FnZUJ1YmJsZSIsIk1lc3NhZ2UiLCJwcm9wcyIsInVzZVRoZW1lIiwiY2xhc3NlcyIsImlzQXV0aG9yIiwiYmFja2dyb3VuZENvbG9yIiwicGFsZXR0ZSIsIm1haW4iLCJjaGlsZHJlbiIsIkNoYXRCb3giLCJ1c2VUcmFuc2xhdGlvbiIsInQiLCJvdmVyZmxvd1kiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJ2IiwiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxvRUFBVSxDQUFDLFVBQUFDLEtBQUs7QUFBQSxTQUFLO0FBQ25DQyxvQkFBZ0IsRUFBRTtBQUNkQyxZQUFNLEVBQUU7QUFETSxLQURpQjtBQUtuQ0Msd0JBQW9CLEVBQUU7QUFDbEJELFlBQU0sRUFBRSxNQURVO0FBRWxCRSxhQUFPLEVBQUVKLEtBQUssQ0FBQ0ssT0FBTixDQUFjLENBQWQ7QUFGUyxLQUxhO0FBU25DQyxnQkFBWSxFQUFFO0FBQ1ZDLFdBQUssRUFBRTtBQURHLEtBVHFCO0FBWW5DQyxpQkFBYSxFQUFFO0FBQ1hKLGFBQU8sRUFBRUosS0FBSyxDQUFDSyxPQUFOLENBQWMsQ0FBZDtBQURFO0FBWm9CLEdBQUw7QUFBQSxDQUFOLENBQTVCOztBQXFCQSxJQUFNSSxPQUErQixHQUFHLFNBQWxDQSxPQUFrQyxDQUFBQyxLQUFLLEVBQUk7QUFBQTs7QUFDN0MsTUFBTVYsS0FBSyxHQUFHVyxrRUFBUSxFQUF0QjtBQUNBLE1BQU1DLE9BQU8sR0FBR2QsU0FBUyxFQUF6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QUFBQTtBQUFBLElBSEosQ0FISixDQWZKLENBbkJKLENBSEosQ0FERyxDQUFQO0FBbURILENBeEREOztJQUFNWSxPO1VBQ1lQLDBELEVBQ0FRLDRELEVBQ0VyQixTOzs7TUFIZG9CLE87QUEwRFNBLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NoYXQuMDE0MDdjOTgxZjYxYTZiMjllYTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMsIFBhcGVyLCBUZXh0RmllbGQsIEdyaWQsIHVzZVRoZW1lLCBUeXBvZ3JhcGh5LCBJY29uQnV0dG9uIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBTZW5kIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gICAgbWVzc2FnZUNvbnRhaW5lcjoge1xyXG4gICAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICAgIFxyXG4gICAgfSxcclxuICAgIG1lc3NhZ2VHcmlkQ29udGFpbmVyOiB7XHJcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyKVxyXG4gICAgfSxcclxuICAgIG1lc3NhZ2VGaWVsZDoge1xyXG4gICAgICAgIHdpZHRoOiAnMTAwJSdcclxuICAgIH0sXHJcbiAgICBtZXNzYWdlQnViYmxlOiB7XHJcbiAgICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyKVxyXG4gICAgfVxyXG59KSk7XHJcblxyXG5pbnRlcmZhY2UgTWVzc2FnZVByb3BzIHtcclxuICAgIGlzQXV0aG9yPzogYm9vbGVhblxyXG59XHJcblxyXG5jb25zdCBNZXNzYWdlOiBSZWFjdC5GQzxNZXNzYWdlUHJvcHM+ID0gcHJvcHMgPT4ge1xyXG4gICAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgaXRlbVxyXG4gICAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgICAganVzdGlmeT17cHJvcHMuaXNBdXRob3IgPyAnZmxleC1lbmQnIDogJ2ZsZXgtc3RhcnQnfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPFBhcGVyXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubWVzc2FnZUJ1YmJsZX1cclxuICAgICAgICAgICAgICAgIGVsZXZhdGlvbj17MH1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlW3Byb3BzLmlzQXV0aG9yID8gJ3ByaW1hcnknIDogJ3NlY29uZGFyeSddLm1haW5cclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHk+e3Byb3BzLmNoaWxkcmVufTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICApO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQ2hhdEJveFByb3BzIHt9XHJcblxyXG5jb25zdCBDaGF0Qm94OiBSZWFjdC5GQzxDaGF0Qm94UHJvcHM+ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xyXG4gICAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigpO1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICAgIHJldHVybiA8PlxyXG4gICAgICAgIDxQYXBlclxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubWVzc2FnZUNvbnRhaW5lcn1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubWVzc2FnZUdyaWRDb250YWluZXJ9XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbj0nY29sdW1uJ1xyXG4gICAgICAgICAgICAgICAgc3BhY2luZz17Mn1cclxuICAgICAgICAgICAgICAgIGp1c3RpZnk9J2ZsZXgtZW5kJ1xyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7aGVpZ2h0OiAnOTAlJywgb3ZlcmZsb3dZOiAnc2Nyb2xsJ319XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIHNwYWNpbmc9ezJ9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgQXJyYXkoMTAwKS5maWxsKDApLm1hcCgodiwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lc3NhZ2UgaXNBdXRob3I9e2kgJSAyID09IDB9PntpfTwvTWVzc2FnZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1cclxuICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zPSdjZW50ZXInXHJcbiAgICAgICAgICAgICAgICAgICAgc3BhY2luZz17Mn1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHhzXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubWVzc2FnZUZpZWxkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD0nb3V0bGluZWQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VuZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9QYXBlcj5cclxuICAgIDwvPjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhdEJveDsiXSwic291cmNlUm9vdCI6IiJ9
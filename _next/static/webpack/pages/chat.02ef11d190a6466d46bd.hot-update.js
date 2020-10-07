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
    container: true,
    item: true,
    spacing: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    }
  }, new Array(50).fill(0).map(function (v, i) {
    __jsx(Message, {
      isAuthor: i % 2 == 0,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
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
      lineNumber: 80,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    className: classes.messageField,
    variant: "outlined",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 25
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 25
    }
  }, __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["Send"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGF0Qm94LnRzeCJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJtZXNzYWdlQ29udGFpbmVyIiwiaGVpZ2h0IiwibWVzc2FnZUdyaWRDb250YWluZXIiLCJwYWRkaW5nIiwic3BhY2luZyIsIm1lc3NhZ2VGaWVsZCIsIndpZHRoIiwibWVzc2FnZUJ1YmJsZSIsIk1lc3NhZ2UiLCJwcm9wcyIsInVzZVRoZW1lIiwiY2xhc3NlcyIsImlzQXV0aG9yIiwiYmFja2dyb3VuZENvbG9yIiwicGFsZXR0ZSIsIm1haW4iLCJjaGlsZHJlbiIsIkNoYXRCb3giLCJ1c2VUcmFuc2xhdGlvbiIsInQiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJ2IiwiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxvRUFBVSxDQUFDLFVBQUFDLEtBQUs7QUFBQSxTQUFLO0FBQ25DQyxvQkFBZ0IsRUFBRTtBQUNkQyxZQUFNLEVBQUU7QUFETSxLQURpQjtBQUtuQ0Msd0JBQW9CLEVBQUU7QUFDbEJELFlBQU0sRUFBRSxNQURVO0FBRWxCRSxhQUFPLEVBQUVKLEtBQUssQ0FBQ0ssT0FBTixDQUFjLENBQWQ7QUFGUyxLQUxhO0FBU25DQyxnQkFBWSxFQUFFO0FBQ1ZDLFdBQUssRUFBRTtBQURHLEtBVHFCO0FBWW5DQyxpQkFBYSxFQUFFO0FBQ1hKLGFBQU8sRUFBRUosS0FBSyxDQUFDSyxPQUFOLENBQWMsQ0FBZDtBQURFO0FBWm9CLEdBQUw7QUFBQSxDQUFOLENBQTVCOztBQXFCQSxJQUFNSSxPQUErQixHQUFHLFNBQWxDQSxPQUFrQyxDQUFBQyxLQUFLLEVBQUk7QUFBQTs7QUFDN0MsTUFBTVYsS0FBSyxHQUFHVyxrRUFBUSxFQUF0QjtBQUNBLE1BQU1DLE9BQU8sR0FBR2QsU0FBUyxFQUF6QjtBQUVBLFNBQ0ks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RCxFQUNFckIsUzs7O01BSGRvQixPO0FBeURTQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jaGF0LjAyZWYxMWQxOTBhNjQ2NmQ0NmJkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzLCBQYXBlciwgVGV4dEZpZWxkLCBHcmlkLCB1c2VUaGVtZSwgVHlwb2dyYXBoeSwgSWNvbkJ1dHRvbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgU2VuZCB9IGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucyc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICAgIG1lc3NhZ2VDb250YWluZXI6IHtcclxuICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgICBcclxuICAgIH0sXHJcbiAgICBtZXNzYWdlR3JpZENvbnRhaW5lcjoge1xyXG4gICAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMilcclxuICAgIH0sXHJcbiAgICBtZXNzYWdlRmllbGQ6IHtcclxuICAgICAgICB3aWR0aDogJzEwMCUnXHJcbiAgICB9LFxyXG4gICAgbWVzc2FnZUJ1YmJsZToge1xyXG4gICAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMilcclxuICAgIH1cclxufSkpO1xyXG5cclxuaW50ZXJmYWNlIE1lc3NhZ2VQcm9wcyB7XHJcbiAgICBpc0F1dGhvcj86IGJvb2xlYW5cclxufVxyXG5cclxuY29uc3QgTWVzc2FnZTogUmVhY3QuRkM8TWVzc2FnZVByb3BzPiA9IHByb3BzID0+IHtcclxuICAgIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgIGl0ZW1cclxuICAgICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgICAgIGp1c3RpZnk9e3Byb3BzLmlzQXV0aG9yID8gJ2ZsZXgtZW5kJyA6ICdmbGV4LXN0YXJ0J31cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxQYXBlclxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1lc3NhZ2VCdWJibGV9XHJcbiAgICAgICAgICAgICAgICBlbGV2YXRpb249ezB9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZVtwcm9wcy5pc0F1dGhvciA/ICdwcmltYXJ5JyA6ICdzZWNvbmRhcnknXS5tYWluXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5Pntwcm9wcy5jaGlsZHJlbn08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgKTtcclxufVxyXG5cclxuaW50ZXJmYWNlIENoYXRCb3hQcm9wcyB7fVxyXG5cclxuY29uc3QgQ2hhdEJveDogUmVhY3QuRkM8Q2hhdEJveFByb3BzPiA9ICgpID0+IHtcclxuICAgIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcclxuICAgIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKTtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgICByZXR1cm4gPD5cclxuICAgICAgICA8UGFwZXJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1lc3NhZ2VDb250YWluZXJ9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1lc3NhZ2VHcmlkQ29udGFpbmVyfVxyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb249J2NvbHVtbidcclxuICAgICAgICAgICAgICAgIHNwYWNpbmc9ezJ9XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5PSdmbGV4LWVuZCdcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgICAgICAgICAgICBpdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgc3BhY2luZz17Mn1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBBcnJheSg1MCkuZmlsbCgwKS5tYXAoKHYsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlIGlzQXV0aG9yPXtpICUgMiA9PSAwfT57aX08L01lc3NhZ2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgICAgICAgICAgICBpdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtcz0nY2VudGVyJ1xyXG4gICAgICAgICAgICAgICAgICAgIHNwYWNpbmc9ezJ9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4c1xyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1lc3NhZ2VGaWVsZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9J291dGxpbmVkJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbmQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvUGFwZXI+XHJcbiAgICA8Lz47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXRCb3g7Il0sInNvdXJjZVJvb3QiOiIifQ==
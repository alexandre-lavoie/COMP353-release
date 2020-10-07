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
      padding: theme.spacing(2),
      maxWidth: '60%',
      wordWrap: 'break-word'
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
      lineNumber: 35,
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
      lineNumber: 40,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
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
    square: true,
    className: classes.messageContainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
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
      lineNumber: 65,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    alignItems: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 25
    }
  }, "John Doe"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    style: {
      height: "calc(100% - ".concat(theme.spacing(15), "px)"),
      overflowY: 'scroll',
      marginBottom: theme.spacing(2)
    },
    container: true,
    item: true,
    spacing: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 17
    }
  }, new Array(5).fill(0).map(function (v, i) {
    return __jsx(Message, {
      isAuthor: i % 2 == 0,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 29
      }
    }, new Array(1000).fill(i).toString());
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    item: true,
    alignItems: "center",
    spacing: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    className: classes.messageField,
    variant: "outlined",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 25
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 25
    }
  }, __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["Send"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGF0Qm94LnRzeCJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJtZXNzYWdlQ29udGFpbmVyIiwiaGVpZ2h0IiwibWVzc2FnZUdyaWRDb250YWluZXIiLCJwYWRkaW5nIiwic3BhY2luZyIsIm1lc3NhZ2VGaWVsZCIsIndpZHRoIiwibWVzc2FnZUJ1YmJsZSIsIm1heFdpZHRoIiwid29yZFdyYXAiLCJNZXNzYWdlIiwicHJvcHMiLCJ1c2VUaGVtZSIsImNsYXNzZXMiLCJpc0F1dGhvciIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJtYWluIiwiY2hpbGRyZW4iLCJDaGF0Qm94IiwidXNlVHJhbnNsYXRpb24iLCJ0Iiwib3ZlcmZsb3dZIiwibWFyZ2luQm90dG9tIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwidiIsImkiLCJ0b1N0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxvRUFBVSxDQUFDLFVBQUFDLEtBQUs7QUFBQSxTQUFLO0FBQ25DQyxvQkFBZ0IsRUFBRTtBQUNkQyxZQUFNLEVBQUU7QUFETSxLQURpQjtBQUtuQ0Msd0JBQW9CLEVBQUU7QUFDbEJELFlBQU0sRUFBRSxNQURVO0FBRWxCRSxhQUFPLEVBQUVKLEtBQUssQ0FBQ0ssT0FBTixDQUFjLENBQWQ7QUFGUyxLQUxhO0FBU25DQyxnQkFBWSxFQUFFO0FBQ1ZDLFdBQUssRUFBRTtBQURHLEtBVHFCO0FBWW5DQyxpQkFBYSxFQUFFO0FBQ1hKLGFBQU8sRUFBRUosS0FBSyxDQUFDSyxPQUFOLENBQWMsQ0FBZCxDQURFO0FBRVhJLGNBQVEsRUFBRSxLQUZDO0FBR1hDLGNBQVEsRUFBRTtBQUhDO0FBWm9CLEdBQUw7QUFBQSxDQUFOLENBQTVCOztBQXVCQSxJQUFNQyxPQUErQixHQUFHLFNBQWxDQSxPQUFr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QkosRUE2QkksTUFBQyxzREFBRDtBQUNJLGFBQVMsTUFEYjtBQUVJLFFBQUksTUFGUjtBQUdJLGNBQVUsRUFBQyxRQUhmO0FBSUksV0FBTyxFQUFFLENBSmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1JLE1BQUMsc0RBQUQ7QUFDSSxRQUFJLE1BRFI7QUFFSSxNQUFFLE1BRk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlJLE1BQUMsMkRBQUQ7QUFDSSxhQUFTLEVBQUVoQixPQUFPLENBQUNSLFlBRHZCO0FBRUksV0FBTyxFQUFDLFVBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpKLENBTkosRUFlSSxNQUFDLHNEQUFEO0FBQ0ksUUFBSSxNQURSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FHSSxNQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FHSSxNQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFISixDQUhKLENBZkosQ0E3QkosQ0FKSixDQURHLENBQVA7QUE4REgsQ0FuRUQ7O0lBQU1jLE87VUFDWVAsMEQsRUFDQVEsNEQsRUFDRXZCLFM7OztNQUhkc0IsTztBQXFFU0Esc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2hhdC41NDM5NzkzZDliMzJmYWI5ODlhNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcywgUGFwZXIsIFRleHRGaWVsZCwgR3JpZCwgdXNlVGhlbWUsIFR5cG9ncmFwaHksIEljb25CdXR0b24gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IFNlbmQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgICBtZXNzYWdlQ29udGFpbmVyOiB7XHJcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG4gICAgbWVzc2FnZUdyaWRDb250YWluZXI6IHtcclxuICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpXHJcbiAgICB9LFxyXG4gICAgbWVzc2FnZUZpZWxkOiB7XHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJ1xyXG4gICAgfSxcclxuICAgIG1lc3NhZ2VCdWJibGU6IHtcclxuICAgICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgICAgIG1heFdpZHRoOiAnNjAlJyxcclxuICAgICAgICB3b3JkV3JhcDogJ2JyZWFrLXdvcmQnXHJcbiAgICB9XHJcbn0pKTtcclxuXHJcbmludGVyZmFjZSBNZXNzYWdlUHJvcHMge1xyXG4gICAgaXNBdXRob3I/OiBib29sZWFuXHJcbn1cclxuXHJcbmNvbnN0IE1lc3NhZ2U6IFJlYWN0LkZDPE1lc3NhZ2VQcm9wcz4gPSBwcm9wcyA9PiB7XHJcbiAgICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICBpdGVtXHJcbiAgICAgICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgICAgICBqdXN0aWZ5PXtwcm9wcy5pc0F1dGhvciA/ICdmbGV4LWVuZCcgOiAnZmxleC1zdGFydCd9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8UGFwZXJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZXNzYWdlQnViYmxlfVxyXG4gICAgICAgICAgICAgICAgZWxldmF0aW9uPXswfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGVbcHJvcHMuaXNBdXRob3IgPyAncHJpbWFyeScgOiAnc2Vjb25kYXJ5J10ubWFpblxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeT57cHJvcHMuY2hpbGRyZW59PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICk7XHJcbn1cclxuXHJcbmludGVyZmFjZSBDaGF0Qm94UHJvcHMge31cclxuXHJcbmNvbnN0IENoYXRCb3g6IFJlYWN0LkZDPENoYXRCb3hQcm9wcz4gPSAoKSA9PiB7XHJcbiAgICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XHJcbiAgICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCk7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gICAgcmV0dXJuIDw+XHJcbiAgICAgICAgPFBhcGVyXHJcbiAgICAgICAgICAgIHNxdWFyZVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubWVzc2FnZUNvbnRhaW5lcn1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubWVzc2FnZUdyaWRDb250YWluZXJ9XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbj0nY29sdW1uJ1xyXG4gICAgICAgICAgICAgICAgc3BhY2luZz17Mn1cclxuICAgICAgICAgICAgICAgIGp1c3RpZnk9J2ZsZXgtZW5kJ1xyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9J2NlbnRlcidcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5Kb2huIERvZTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7aGVpZ2h0OiBgY2FsYygxMDAlIC0gJHt0aGVtZS5zcGFjaW5nKDE1KX1weClgLCBvdmVyZmxvd1k6ICdzY3JvbGwnLCBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMil9fVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1cclxuICAgICAgICAgICAgICAgICAgICBzcGFjaW5nPXsyfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEFycmF5KDUpLmZpbGwoMCkubWFwKCh2LCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVzc2FnZSBpc0F1dGhvcj17aSAlIDIgPT0gMH0+e25ldyBBcnJheSgxMDAwKS5maWxsKGkpLnRvU3RyaW5nKCl9PC9NZXNzYWdlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9J2NlbnRlcidcclxuICAgICAgICAgICAgICAgICAgICBzcGFjaW5nPXsyfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgeHNcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZXNzYWdlRmllbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PSdvdXRsaW5lZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZW5kIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L1BhcGVyPlxyXG4gICAgPC8+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGF0Qm94OyJdLCJzb3VyY2VSb290IjoiIn0=
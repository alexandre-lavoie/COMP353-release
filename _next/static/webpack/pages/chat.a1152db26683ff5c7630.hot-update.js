webpackHotUpdate_N_E("pages/chat",{

/***/ "./components/ChatBox.tsx":
/*!********************************!*\
  !*** ./components/ChatBox.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\tatti\\Documents\\Github\\COMP353\\web\\components\\ChatBox.tsx",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return {
    messageContainer: {
      height: '100%',
      width: '100%'
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
      wordWrap: 'break-word',
      height: 'max-content'
    },
    messageArea: {
      height: "calc(100% - ".concat(theme.spacing(18), "px)"),
      overflowY: 'scroll',
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2)
    }
  };
});

var Message = function Message(props) {
  _s();

  var theme = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["useTheme"])();
  var classes = useStyles();
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    container: true,
    justify: props.me ? 'flex-end' : 'flex-start',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Paper"], {
    className: classes.messageBubble,
    elevation: 0,
    style: {
      backgroundColor: theme.palette[props.me ? 'primary' : 'secondary'].main
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }, props.children)));
};

_s(Message, "H43PDnWPsspE0TkwGa5lPfJs7XQ=", false, function () {
  return [_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["useTheme"], useStyles];
});

_c = Message;

var ChatBox = function ChatBox(props) {
  _s2();

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_4__["useTranslation"])(),
      t = _useTranslation.t;

  var classes = useStyles();

  var _useState = useState(''),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      message = _useState2[0],
      setMessage = _useState2[1];

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Paper"], {
    square: true,
    className: classes.messageContainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    className: classes.messageGridContainer,
    container: true,
    direction: "column",
    spacing: 2,
    justify: "flex-end",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    alignItems: "center",
    justify: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 25
    }
  }, props.user ? props.user.username : ""))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    className: classes.messageArea,
    container: true,
    item: true,
    spacing: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 17
    }
  }, props.messages ? props.messages.map(function (_ref) {
    var _ref2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 2),
        message = _ref2[0],
        me = _ref2[1];

    return __jsx(Message, {
      me: me,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 29
      }
    }, message);
  }) : ''), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    item: true,
    alignItems: "center",
    spacing: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
    className: classes.messageField,
    placeholder: t('Aa'),
    variant: "outlined",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 25
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
    title: t('Message'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 29
    }
  }, __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_3__["Send"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 33
    }
  }))))))));
};

_s2(ChatBox, "fam8aJCUqdlEE/BDYeKbUXhVhuM=", false, function () {
  return [react_i18next__WEBPACK_IMPORTED_MODULE_4__["useTranslation"], useStyles];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGF0Qm94LnRzeCJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJtZXNzYWdlQ29udGFpbmVyIiwiaGVpZ2h0Iiwid2lkdGgiLCJtZXNzYWdlR3JpZENvbnRhaW5lciIsInBhZGRpbmciLCJzcGFjaW5nIiwibWVzc2FnZUZpZWxkIiwibWVzc2FnZUJ1YmJsZSIsIm1heFdpZHRoIiwid29yZFdyYXAiLCJtZXNzYWdlQXJlYSIsIm92ZXJmbG93WSIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsIk1lc3NhZ2UiLCJwcm9wcyIsInVzZVRoZW1lIiwiY2xhc3NlcyIsIm1lIiwiYmFja2dyb3VuZENvbG9yIiwicGFsZXR0ZSIsIm1haW4iLCJjaGlsZHJlbiIsIkNoYXRCb3giLCJ1c2VUcmFuc2xhdGlvbiIsInQiLCJ1c2VTdGF0ZSIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwidXNlciIsInVzZXJuYW1lIiwibWVzc2FnZXMiLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsU0FBSztBQUNuQ0Msb0JBQWdCLEVBQUU7QUFDZEMsWUFBTSxFQUFFLE1BRE07QUFFZEMsV0FBSyxFQUFFO0FBRk8sS0FEaUI7QUFLbkNDLHdCQUFvQixFQUFFO0FBQ2xCRixZQUFNLEVBQUUsTUFEVTtBQUVsQkcsYUFBTyxFQUFFTCxLQUFLLENBQUNNLE9BQU4sQ0FBYyxDQUFkO0FBRlMsS0FMYTtBQVNuQ0MsZ0JBQVksRUFBRTtBQUNWSixXQUFLLEVBQUU7QUFERyxLQVRxQjtBQVluQ0ssaUJBQWEsRUFBRTtBQUNYSCxhQUFPLEVBQUVMLEtBQUssQ0FBQ00sT0FBTixDQUFjLENBQWQsQ0FERTtBQUVYRyxjQUFRLEVBQUUsS0FGQztBQUdYQyxjQUFR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SixDQUhKLENBaEJKLENBbENKLENBSkosQ0FERyxDQUFQO0FBeUVILENBOUVEOztJQUFNRixPO1VBQ1lDLDRELEVBQ0UzQixTOzs7TUFGZDBCLE87QUFnRlNBLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NoYXQuYTExNTJkYjI2NjgzZmY1Yzc2MzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMsIFBhcGVyLCBUZXh0RmllbGQsIEdyaWQsIHVzZVRoZW1lLCBUeXBvZ3JhcGh5LCBJY29uQnV0dG9uLCBUb29sdGlwIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBTZW5kIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zJztcclxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcclxuaW1wb3J0IHsgSVVzZXIgfSBmcm9tICcuL2ludGVyZmFjZXMnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gICAgbWVzc2FnZUNvbnRhaW5lcjoge1xyXG4gICAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICAgIHdpZHRoOiAnMTAwJSdcclxuICAgIH0sXHJcbiAgICBtZXNzYWdlR3JpZENvbnRhaW5lcjoge1xyXG4gICAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMilcclxuICAgIH0sXHJcbiAgICBtZXNzYWdlRmllbGQ6IHtcclxuICAgICAgICB3aWR0aDogJzEwMCUnXHJcbiAgICB9LFxyXG4gICAgbWVzc2FnZUJ1YmJsZToge1xyXG4gICAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICAgICAgbWF4V2lkdGg6ICc2MCUnLFxyXG4gICAgICAgIHdvcmRXcmFwOiAnYnJlYWstd29yZCcsXHJcbiAgICAgICAgaGVpZ2h0OiAnbWF4LWNvbnRlbnQnXHJcbiAgICB9LFxyXG4gICAgbWVzc2FnZUFyZWE6IHtcclxuICAgICAgICBoZWlnaHQ6IGBjYWxjKDEwMCUgLSAke3RoZW1lLnNwYWNpbmcoMTgpfXB4KWAsIFxyXG4gICAgICAgIG92ZXJmbG93WTogJ3Njcm9sbCcsIFxyXG4gICAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygyKSwgXHJcbiAgICAgICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDIpXHJcbiAgICB9XHJcbn0pKTtcclxuXHJcbmludGVyZmFjZSBNZXNzYWdlUHJvcHMge1xyXG4gICAgbWU/OiBib29sZWFuXHJcbn1cclxuXHJcbmNvbnN0IE1lc3NhZ2U6IFJlYWN0LkZDPE1lc3NhZ2VQcm9wcz4gPSBwcm9wcyA9PiB7XHJcbiAgICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICBpdGVtXHJcbiAgICAgICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgICAgICBqdXN0aWZ5PXtwcm9wcy5tZSA/ICdmbGV4LWVuZCcgOiAnZmxleC1zdGFydCd9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8UGFwZXJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZXNzYWdlQnViYmxlfVxyXG4gICAgICAgICAgICAgICAgZWxldmF0aW9uPXswfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGVbcHJvcHMubWUgPyAncHJpbWFyeScgOiAnc2Vjb25kYXJ5J10ubWFpblxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+e3Byb3BzLmNoaWxkcmVufTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICApO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQ2hhdEJveFByb3BzIHtcclxuICAgIHVzZXI/OiBJVXNlclxyXG4gICAgbWVzc2FnZXM/OiBbc3RyaW5nLCBib29sZWFuXVtdLFxyXG4gICAgb25TZW5kPzogKCkgPT4gdm9pZFxyXG59XHJcblxyXG5jb25zdCBDaGF0Qm94OiBSZWFjdC5GQzxDaGF0Qm94UHJvcHM+ID0gcHJvcHMgPT4ge1xyXG4gICAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigpO1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICAgIHJldHVybiA8PlxyXG4gICAgICAgIDxQYXBlclxyXG4gICAgICAgICAgICBzcXVhcmVcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1lc3NhZ2VDb250YWluZXJ9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1lc3NhZ2VHcmlkQ29udGFpbmVyfVxyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb249J2NvbHVtbidcclxuICAgICAgICAgICAgICAgIHNwYWNpbmc9ezJ9XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5PSdmbGV4LWVuZCdcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zPSdjZW50ZXInXHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeT0nY2VudGVyJ1xyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g2Jz57KHByb3BzLnVzZXIpID8gcHJvcHMudXNlci51c2VybmFtZSA6IFwiXCJ9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1lc3NhZ2VBcmVhfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1cclxuICAgICAgICAgICAgICAgICAgICBzcGFjaW5nPXsyfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHByb3BzLm1lc3NhZ2VzKSA/IHByb3BzLm1lc3NhZ2VzLm1hcCgoW21lc3NhZ2UsIG1lXSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lc3NhZ2UgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWU9e21lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZXNzYWdlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKSA6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgICAgICAgICAgICBpdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtcz0nY2VudGVyJ1xyXG4gICAgICAgICAgICAgICAgICAgIHNwYWNpbmc9ezJ9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4c1xyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1lc3NhZ2VGaWVsZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0KCdBYScpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD0nb3V0bGluZWQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17dCgnTWVzc2FnZScpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VuZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvUGFwZXI+XHJcbiAgICA8Lz47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXRCb3g7Il0sInNvdXJjZVJvb3QiOiIifQ==
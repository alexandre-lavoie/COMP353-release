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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      message = _useState[0],
      setMessage = _useState[1];

  var messageAreaEnd = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (messageAreaEnd) {
      messageAreaEnd.current.scrollIntoView();
    }
  }, [messageAreaEnd, props.messages]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Paper"], {
    square: true,
    className: classes.messageContainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
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
      lineNumber: 83,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    alignItems: "center",
    justify: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
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
      lineNumber: 101,
      columnNumber: 17
    }
  }, props.messages ? props.messages.map(function (_ref, i) {
    var _ref2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 2),
        message = _ref2[0],
        me = _ref2[1];

    return __jsx(Message, {
      me: me,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 29
      }
    }, message);
  }) : '', __jsx("div", {
    ref: messageAreaEnd,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 21
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    item: true,
    alignItems: "center",
    spacing: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
    className: classes.messageField,
    placeholder: t('Aa'),
    variant: "outlined",
    value: message,
    onChange: function onChange(e) {
      return setMessage(e.target.value);
    },
    onKeyPress: function onKeyPress(e) {
      if (e.key === 'Enter') {
        if (props.onSend) props.onSend(message);
        setMessage('');
      }
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 25
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
    title: t('Message'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
    onClick: function onClick() {
      if (props.onSend) props.onSend(message);
      setMessage('');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 29
    }
  }, __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_3__["Send"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 33
    }
  }))))))));
};

_s2(ChatBox, "adoXKgum1e1k1X/bkW15cJglaIM=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGF0Qm94LnRzeCJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJtZXNzYWdlQ29udGFpbmVyIiwiaGVpZ2h0Iiwid2lkdGgiLCJtZXNzYWdlR3JpZENvbnRhaW5lciIsInBhZGRpbmciLCJzcGFjaW5nIiwibWVzc2FnZUZpZWxkIiwibWVzc2FnZUJ1YmJsZSIsIm1heFdpZHRoIiwid29yZFdyYXAiLCJtZXNzYWdlQXJlYSIsIm92ZXJmbG93WSIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsIk1lc3NhZ2UiLCJwcm9wcyIsInVzZVRoZW1lIiwiY2xhc3NlcyIsIm1lIiwiYmFja2dyb3VuZENvbG9yIiwicGFsZXR0ZSIsIm1haW4iLCJjaGlsZHJlbiIsIkNoYXRCb3giLCJ1c2VUcmFuc2xhdGlvbiIsInQiLCJ1c2VTdGF0ZSIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwibWVzc2FnZUFyZWFFbmQiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJjdXJyZW50Iiwic2Nyb2xsSW50b1ZpZXciLCJtZXNzYWdlcyIsInVzZXIiLCJ1c2VybmFtZSIsIm1hcCIsImkiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJrZXkiLCJvblNlbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsU0FBSztBQUNuQ0Msb0JBQWdCLEVBQUU7QUFDZEMsWUFBTSxFQUFFLE1BRE07QUFFZEMsV0FBSyxFQUFFO0FBRk8sS0FEaUI7QUFLbkNDLHdCQUFvQixFQUFFO0FBQ2xCRixZQUFNLEVBQUUsTUFEVTtBQUVsQkcsYUFBTyxFQUFFTCxLQUFLLENBQUNNLE9BQU4sQ0FBYyxDQUFkO0FBRlMsS0FMYTtBQVNuQ0MsZ0JBQVksRUFBRTtBQUNWSixXQUFLLEVBQUU7QUFE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Ijoic3RhdGljL3dlYnBhY2svcGFnZXMvY2hhdC4zOTc0ZWE2YTcyNzA4Y2FlNWQ1Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcywgUGFwZXIsIFRleHRGaWVsZCwgR3JpZCwgdXNlVGhlbWUsIFR5cG9ncmFwaHksIEljb25CdXR0b24sIFRvb2x0aXAgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IFNlbmQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMnO1xyXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xyXG5pbXBvcnQgeyBJVXNlciB9IGZyb20gJy4vaW50ZXJmYWNlcyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgICBtZXNzYWdlQ29udGFpbmVyOiB7XHJcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJ1xyXG4gICAgfSxcclxuICAgIG1lc3NhZ2VHcmlkQ29udGFpbmVyOiB7XHJcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyKVxyXG4gICAgfSxcclxuICAgIG1lc3NhZ2VGaWVsZDoge1xyXG4gICAgICAgIHdpZHRoOiAnMTAwJSdcclxuICAgIH0sXHJcbiAgICBtZXNzYWdlQnViYmxlOiB7XHJcbiAgICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyKSxcclxuICAgICAgICBtYXhXaWR0aDogJzYwJScsXHJcbiAgICAgICAgd29yZFdyYXA6ICdicmVhay13b3JkJyxcclxuICAgICAgICBoZWlnaHQ6ICdtYXgtY29udGVudCdcclxuICAgIH0sXHJcbiAgICBtZXNzYWdlQXJlYToge1xyXG4gICAgICAgIGhlaWdodDogYGNhbGMoMTAwJSAtICR7dGhlbWUuc3BhY2luZygxOCl9cHgpYCwgXHJcbiAgICAgICAgb3ZlcmZsb3dZOiAnc2Nyb2xsJywgXHJcbiAgICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDIpLCBcclxuICAgICAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMilcclxuICAgIH1cclxufSkpO1xyXG5cclxuaW50ZXJmYWNlIE1lc3NhZ2VQcm9wcyB7XHJcbiAgICBtZT86IGJvb2xlYW5cclxufVxyXG5cclxuY29uc3QgTWVzc2FnZTogUmVhY3QuRkM8TWVzc2FnZVByb3BzPiA9IHByb3BzID0+IHtcclxuICAgIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgIGl0ZW1cclxuICAgICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgICAgIGp1c3RpZnk9e3Byb3BzLm1lID8gJ2ZsZXgtZW5kJyA6ICdmbGV4LXN0YXJ0J31cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxQYXBlclxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1lc3NhZ2VCdWJibGV9XHJcbiAgICAgICAgICAgICAgICBlbGV2YXRpb249ezB9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZVtwcm9wcy5tZSA/ICdwcmltYXJ5JyA6ICdzZWNvbmRhcnknXS5tYWluXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT57cHJvcHMuY2hpbGRyZW59PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICk7XHJcbn1cclxuXHJcbmludGVyZmFjZSBDaGF0Qm94UHJvcHMge1xyXG4gICAgdXNlcj86IElVc2VyXHJcbiAgICBtZXNzYWdlcz86IFtzdHJpbmcsIGJvb2xlYW5dW10sXHJcbiAgICBvblNlbmQ/OiAobWVzc2FnZTogc3RyaW5nKSA9PiB2b2lkXHJcbn1cclxuXHJcbmNvbnN0IENoYXRCb3g6IFJlYWN0LkZDPENoYXRCb3hQcm9wcz4gPSBwcm9wcyA9PiB7XHJcbiAgICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCk7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBtZXNzYWdlQXJlYUVuZCA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmKG1lc3NhZ2VBcmVhRW5kKSB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2VBcmVhRW5kLmN1cnJlbnQuc2Nyb2xsSW50b1ZpZXcoKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbbWVzc2FnZUFyZWFFbmQsIHByb3BzLm1lc3NhZ2VzXSk7XHJcblxyXG4gICAgcmV0dXJuIDw+XHJcbiAgICAgICAgPFBhcGVyXHJcbiAgICAgICAgICAgIHNxdWFyZVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubWVzc2FnZUNvbnRhaW5lcn1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubWVzc2FnZUdyaWRDb250YWluZXJ9XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbj0nY29sdW1uJ1xyXG4gICAgICAgICAgICAgICAgc3BhY2luZz17Mn1cclxuICAgICAgICAgICAgICAgIGp1c3RpZnk9J2ZsZXgtZW5kJ1xyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9J2NlbnRlcidcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5PSdjZW50ZXInXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDYnPnsocHJvcHMudXNlcikgPyBwcm9wcy51c2VyLnVzZXJuYW1lIDogXCJcIn08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubWVzc2FnZUFyZWF9XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIHNwYWNpbmc9ezJ9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAocHJvcHMubWVzc2FnZXMpID8gcHJvcHMubWVzc2FnZXMubWFwKChbbWVzc2FnZSwgbWVdLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVzc2FnZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZT17bWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lc3NhZ2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpIDogJydcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiByZWY9e21lc3NhZ2VBcmVhRW5kfT48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9J2NlbnRlcidcclxuICAgICAgICAgICAgICAgICAgICBzcGFjaW5nPXsyfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgeHNcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZXNzYWdlRmllbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dCgnQWEnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9J291dGxpbmVkJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e21lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uS2V5UHJlc3M9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoZS5rZXkgPT09ICdFbnRlcicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocHJvcHMub25TZW5kKSBwcm9wcy5vblNlbmQobWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldE1lc3NhZ2UoJycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17dCgnTWVzc2FnZScpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocHJvcHMub25TZW5kKSBwcm9wcy5vblNlbmQobWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldE1lc3NhZ2UoJycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbmQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvUGFwZXI+XHJcbiAgICA8Lz47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXRCb3g7Il0sInNvdXJjZVJvb3QiOiIifQ==
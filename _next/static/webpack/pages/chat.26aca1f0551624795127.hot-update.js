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

  var messageArea = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (messageArea) {
      messageArea.current.scrollIntoView({
        behavior: "smooth"
      });
    }
  }, [messageArea, props.messages]);
  messageArea.current.scrollIntoView({
    behavior: "smooth"
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Paper"], {
    square: true,
    className: classes.messageContainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
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
      lineNumber: 85,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    alignItems: "center",
    justify: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 25
    }
  }, props.user ? props.user.username : ""))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    className: classes.messageArea,
    ref: messageArea,
    container: true,
    item: true,
    spacing: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
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
        lineNumber: 112,
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
      lineNumber: 120,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
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
      lineNumber: 130,
      columnNumber: 25
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
    title: t('Message'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
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
      lineNumber: 150,
      columnNumber: 29
    }
  }, __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_3__["Send"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 33
    }
  }))))))));
};

_s2(ChatBox, "fjCyZwjzerRJ2v/bKGlzZ7m7wbM=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGF0Qm94LnRzeCJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJtZXNzYWdlQ29udGFpbmVyIiwiaGVpZ2h0Iiwid2lkdGgiLCJtZXNzYWdlR3JpZENvbnRhaW5lciIsInBhZGRpbmciLCJzcGFjaW5nIiwibWVzc2FnZUZpZWxkIiwibWVzc2FnZUJ1YmJsZSIsIm1heFdpZHRoIiwid29yZFdyYXAiLCJtZXNzYWdlQXJlYSIsIm92ZXJmbG93WSIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsIk1lc3NhZ2UiLCJwcm9wcyIsInVzZVRoZW1lIiwiY2xhc3NlcyIsIm1lIiwiYmFja2dyb3VuZENvbG9yIiwicGFsZXR0ZSIsIm1haW4iLCJjaGlsZHJlbiIsIkNoYXRCb3giLCJ1c2VUcmFuc2xhdGlvbiIsInQiLCJ1c2VTdGF0ZSIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJtZXNzYWdlcyIsInVzZXIiLCJ1c2VybmFtZSIsIm1hcCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImtleSIsIm9uU2VuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBTUEsU0FBUyxHQUFHQyxvRUFBVSxDQUFDLFVBQUFDLEtBQUs7QUFBQSxTQUFLO0FBQ25DQyxvQkFBZ0IsRUFBRTtBQUNkQyxZQUFNLEVBQUUsTUFETTtBQUVkQyxXQUFLLEVBQUU7QUFGTyxLQURpQjtBQUtuQ0Msd0JBQW9CLEVBQUU7QUFDbEJGLFlBQU0sRUFBRSxNQURVO0FBRWxCRyxhQUFPLEVBQUVMLEtBQUssQ0FBQ00sT0FBTixDQUFjLENBQWQ7QUFGUyxLQUxhO0FBU25DQyxnQkFBWSxFQUFFO0FBQ1ZKLFdBQUssRUFBRTtBQURHLEtBVHFCO0FBWW5DSyxpQkFBYSxFQUFFO0FBQ1hILGFBQU8sRUFBRUwsS0FBSyxDQUFDTSxPQUFOLENBQWMsQ0FBZCxDQURFO0FBRVhHLGNBQVEsRUFBRSxLQUZDO0FBR1hDLGNBQVEsRUFBRSxZQUhDO0FBSVhSLFlBQU0sRUFBRTtBQUpHLEtBWm9CO0FBa0JuQ1MsZUFBVyxFQUFFO0FBQ1RULFlBQU0sd0JBQWlCRixLQUFLLENBQUNNLE9BQU4sQ0FBYyxFQUFkLENBQWpCLFFBREc7QUFFVE0sZUFBUyxFQUFFLFFBRkY7QUFHVEMsZUFBUyxFQUFFYixLQUFLLENBQUNNLE9BQU4sQ0FBYyxDQUFkLENBSEY7QUFJVFEsa0JBQVksRUFBRWQsS0FBSyxDQUFDTSxPQUFOLENBQWMsQ0FBZDtBQUpMO0FBbEJzQixHQUFMO0FBQUEsQ0FBTixDQUE1Qjs7QUE4QkEsSUFBTVMsT0FBK0IsR0FBRyxTQUFsQ0EsT0FBa0MsQ0FBQUMsS0FBSyxFQUFJO0FBQUE7O0FBQzdDLE1BQU1oQixLQUFLLEdBQUdpQixrRUFBUSxFQUF0QjtBQUNBLE1BQU1DLE9BQU8sR0FBR3BCLFNBQVMsRUFBekI7QUFFQSxTQUNJLE1BQUMsc0RBQUQ7QUFDSSxRQUFJLE1BRFI7QUFFSSxhQUFTLE1BRmI7QUFHSSxXQUFPLEVBQUVrQixLQUFLLENBQUNHLEVBQU4sR0FBVyxVQUFYLEdBQXdCLFlBSHJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLSSxNQUFDLHVEQUFEO0FBQ0ksYUFBUyxFQUFFRCxPQUFPLENBQUNWLGFBRHZCO0FBRUksYUFBUyxFQUFFLENBRmY7QUFHSSxTQUFLLEVBQUU7QUFDSFkscUJBQWUsRUFBRXBCLEtBQUssQ0FBQ3FCLE9BQU4sQ0FBY0wsS0FBSyxDQUFDRyxFQUFOLEdBQVcsU0FBWCxHQUF1QixXQUFyQyxFQUFrREc7QUFEaEUsS0FIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0ksTUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWFOLEtBQUssQ0FBQ08sUUFBbkIsQ0FQSixDQUxKLENBREo7QUFpQkgsQ0FyQkQ7O0dBQU1SLE87VUFDWUUsMEQsRUFDRW5CLFM7OztLQUZkaUIsTzs7QUE2Qk4sSUFBTVMsT0FBK0IsR0FBRyxTQUFsQ0EsT0FBa0MsQ0FBQVIsS0FBSyxFQUFJO0FBQUE7O0FBQUEsd0JBQy9CUyxvRUFBYyxFQURpQjtBQUFBLE1BQ3JDQyxDQURxQyxtQkFDckNBLENBRHFDOztBQUU3QyxNQUFNUixPQUFPLEdBQUdwQixTQUFTLEVBQXpCOztBQUY2QyxrQkFHZjZCLHNEQUFRLENBQUMsRUFBRCxDQUhPO0FBQUEsTUFHdENDLE9BSHNDO0FBQUEsTUFHN0JDLFVBSDZCOztBQUk3QyxNQUFNbEIsV0FBVyxHQUFHbUIsb0RBQU0sQ0FBQyxJQUFELENBQTFCO0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNaLFFBQUdwQixXQUFILEVBQWdCO0FBQ1pBLGlCQUFXLENBQUNxQixPQUFaLENBQW9CQyxjQUFwQixDQUFtQztBQUFFQyxnQkFBUSxFQUFFO0FBQVosT0FBbkM7QUFDSDtBQUNKLEdBSlEsRUFJTixDQUFDdkIsV0FBRCxFQUFjSyxLQUFLLENBQUNtQixRQUFwQixDQUpNLENBQVQ7QUFNQXhCLGFBQVcsQ0FBQ3FCLE9BQVosQ0FBb0JDLGNBQXBCLENBQW1DO0FBQUVDLFlBQVEsRUFBRTtBQUFaLEdBQW5DO0FBRUEsU0FBTyxtRUFDSCxNQUFDLHVEQUFEO0FBQ0ksVUFBTSxNQURWO0FBRUksYUFBUyxFQUFFaEIsT0FBTyxDQUFDakIsZ0JBRnZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJSSxNQUFDLHNEQUFEO0FBQ0ksYUFBUyxFQUFFaUIsT0FBTyxDQUFDZCxvQkFEdkI7QUFFSSxhQUFTLE1BRmI7QUFHSSxhQUFTLEVBQUMsUUFIZDtBQUlJLFdBQU8sRUFBRSxDQUpiO0FBS0ksV0FBTyxFQUFDLFVBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU9JLE1BQUMsc0RBQUQ7QUFDSSxhQUFTLE1BRGI7QUFFSSxjQUFVLEVBQUMsUUFGZjtBQUdJLFdBQU8sRUFBQyxRQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLSSxNQUFDLHNEQUFEO0FBQ0ksUUFBSSxNQURSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FHSSxNQUFDLDREQUFEO0FBQVksV0FBTyxFQUFDLElBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBMkJZLEtBQUssQ0FBQ29CLElBQVAsR0FBZXBCLEtBQUssQ0FBQ29CLElBQU4sQ0FBV0MsUUFBMUIsR0FBcUMsRUFBL0QsQ0FISixDQUxKLENBUEosRUFrQkksTUFBQyxzREFBRDtBQUNJLGFBQVMsRUFBRW5CLE9BQU8sQ0FBQ1AsV0FEdkI7QUFFSSxPQUFHLEVBQUVBLFdBRlQ7QUFHSSxhQUFTLE1BSGI7QUFJSSxRQUFJLE1BSlI7QUFLSSxXQUFPLEVBQUUsQ0FMYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBUVNLLEtBQUssQ0FBQ21CLFFBQVAsR0FBbUJuQixLQUFLLENBQUNtQixRQUFOLENBQWVHLEdBQWYsQ0FBbUI7QUFBQTtBQUFBLFFBQUVWLE9BQUY7QUFBQSxRQUFXVCxFQUFYOztBQUFBLFdBQ2xDLE1BQUMsT0FBRDtBQUNJLFFBQUUsRUFBRUEsRUFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BR0tTLE9BSEwsQ0FEa0M7QUFBQSxHQUFuQixDQUFuQixHQU1LLEVBZGIsQ0FsQkosRUFtQ0ksTUFBQyxzREFBRDtBQUNJLGFBQVMsTUFEYjtBQUVJLFFBQUksTUFGUjtBQUdJLGNBQVUsRUFBQyxRQUhmO0FBSUksV0FBTyxFQUFFLENBSmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1JLE1BQUMsc0RBQUQ7QUFDSSxRQUFJLE1BRFI7QUFFSSxNQUFFLE1BRk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlJLE1BQUMsMkRBQUQ7QUFDSSxhQUFTLEVBQUVWLE9BQU8sQ0FBQ1gsWUFEdkI7QUFFSSxlQUFXLEVBQUVtQixDQUFDLENBQUMsSUFBRCxDQUZsQjtBQUdJLFdBQU8sRUFBQyxVQUhaO0FBSUksU0FBSyxFQUFFRSxPQUpYO0FBS0ksWUFBUSxFQUFFLGtCQUFBVyxDQUFDO0FBQUEsYUFBSVYsVUFBVSxDQUFDVSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFkO0FBQUEsS0FMZjtBQU1JLGNBQVUsRUFBRSxvQkFBQ0YsQ0FBRCxFQUFPO0FBQ2YsVUFBR0EsQ0FBQyxDQUFDRyxHQUFGLEtBQVUsT0FBYixFQUFzQjtBQUNsQixZQUFHMUIsS0FBSyxDQUFDMkIsTUFBVCxFQUFpQjNCLEtBQUssQ0FBQzJCLE1BQU4sQ0FBYWYsT0FBYjtBQUNqQkMsa0JBQVUsQ0FBQyxFQUFELENBQVY7QUFDSDtBQUNKLEtBWEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpKLENBTkosRUF3QkksTUFBQyxzREFBRDtBQUNJLFFBQUksTUFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBR0ksTUFBQyx5REFBRDtBQUNJLFNBQUssRUFBRUgsQ0FBQyxDQUFDLFNBQUQsQ0FEWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBR0ksTUFBQyw0REFBRDtBQUNJLFdBQU8sRUFBRSxtQkFBTTtBQUNYLFVBQUdWLEtBQUssQ0FBQzJCLE1BQVQsRUFBaUIzQixLQUFLLENBQUMyQixNQUFOLENBQWFmLE9BQWI7QUFDakJDLGdCQUFVLENBQUMsRUFBRCxDQUFWO0FBQ0gsS0FKTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUksTUFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkosQ0FISixDQUhKLENBeEJKLENBbkNKLENBSkosQ0FERyxDQUFQO0FBb0ZILENBbEdEOztJQUFNTCxPO1VBQ1lDLDRELEVBQ0UzQixTOzs7TUFGZDBCLE87QUFvR1NBLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NoYXQuMjZhY2ExZjA1NTE2MjQ3OTUxMjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMsIFBhcGVyLCBUZXh0RmllbGQsIEdyaWQsIHVzZVRoZW1lLCBUeXBvZ3JhcGh5LCBJY29uQnV0dG9uLCBUb29sdGlwIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBTZW5kIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zJztcclxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcclxuaW1wb3J0IHsgSVVzZXIgfSBmcm9tICcuL2ludGVyZmFjZXMnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gICAgbWVzc2FnZUNvbnRhaW5lcjoge1xyXG4gICAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICAgIHdpZHRoOiAnMTAwJSdcclxuICAgIH0sXHJcbiAgICBtZXNzYWdlR3JpZENvbnRhaW5lcjoge1xyXG4gICAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMilcclxuICAgIH0sXHJcbiAgICBtZXNzYWdlRmllbGQ6IHtcclxuICAgICAgICB3aWR0aDogJzEwMCUnXHJcbiAgICB9LFxyXG4gICAgbWVzc2FnZUJ1YmJsZToge1xyXG4gICAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICAgICAgbWF4V2lkdGg6ICc2MCUnLFxyXG4gICAgICAgIHdvcmRXcmFwOiAnYnJlYWstd29yZCcsXHJcbiAgICAgICAgaGVpZ2h0OiAnbWF4LWNvbnRlbnQnXHJcbiAgICB9LFxyXG4gICAgbWVzc2FnZUFyZWE6IHtcclxuICAgICAgICBoZWlnaHQ6IGBjYWxjKDEwMCUgLSAke3RoZW1lLnNwYWNpbmcoMTgpfXB4KWAsIFxyXG4gICAgICAgIG92ZXJmbG93WTogJ3Njcm9sbCcsIFxyXG4gICAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygyKSwgXHJcbiAgICAgICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDIpXHJcbiAgICB9XHJcbn0pKTtcclxuXHJcbmludGVyZmFjZSBNZXNzYWdlUHJvcHMge1xyXG4gICAgbWU/OiBib29sZWFuXHJcbn1cclxuXHJcbmNvbnN0IE1lc3NhZ2U6IFJlYWN0LkZDPE1lc3NhZ2VQcm9wcz4gPSBwcm9wcyA9PiB7XHJcbiAgICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICBpdGVtXHJcbiAgICAgICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgICAgICBqdXN0aWZ5PXtwcm9wcy5tZSA/ICdmbGV4LWVuZCcgOiAnZmxleC1zdGFydCd9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8UGFwZXJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZXNzYWdlQnViYmxlfVxyXG4gICAgICAgICAgICAgICAgZWxldmF0aW9uPXswfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGVbcHJvcHMubWUgPyAncHJpbWFyeScgOiAnc2Vjb25kYXJ5J10ubWFpblxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+e3Byb3BzLmNoaWxkcmVufTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICApO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQ2hhdEJveFByb3BzIHtcclxuICAgIHVzZXI/OiBJVXNlclxyXG4gICAgbWVzc2FnZXM/OiBbc3RyaW5nLCBib29sZWFuXVtdLFxyXG4gICAgb25TZW5kPzogKG1lc3NhZ2U6IHN0cmluZykgPT4gdm9pZFxyXG59XHJcblxyXG5jb25zdCBDaGF0Qm94OiBSZWFjdC5GQzxDaGF0Qm94UHJvcHM+ID0gcHJvcHMgPT4ge1xyXG4gICAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigpO1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgbWVzc2FnZUFyZWEgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZihtZXNzYWdlQXJlYSkge1xyXG4gICAgICAgICAgICBtZXNzYWdlQXJlYS5jdXJyZW50LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW21lc3NhZ2VBcmVhLCBwcm9wcy5tZXNzYWdlc10pO1xyXG5cclxuICAgIG1lc3NhZ2VBcmVhLmN1cnJlbnQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KTtcclxuXHJcbiAgICByZXR1cm4gPD5cclxuICAgICAgICA8UGFwZXJcclxuICAgICAgICAgICAgc3F1YXJlXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZXNzYWdlQ29udGFpbmVyfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZXNzYWdlR3JpZENvbnRhaW5lcn1cclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uPSdjb2x1bW4nXHJcbiAgICAgICAgICAgICAgICBzcGFjaW5nPXsyfVxyXG4gICAgICAgICAgICAgICAganVzdGlmeT0nZmxleC1lbmQnXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtcz0nY2VudGVyJ1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnk9J2NlbnRlcidcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNic+eyhwcm9wcy51c2VyKSA/IHByb3BzLnVzZXIudXNlcm5hbWUgOiBcIlwifTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZXNzYWdlQXJlYX1cclxuICAgICAgICAgICAgICAgICAgICByZWY9e21lc3NhZ2VBcmVhfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1cclxuICAgICAgICAgICAgICAgICAgICBzcGFjaW5nPXsyfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHByb3BzLm1lc3NhZ2VzKSA/IHByb3BzLm1lc3NhZ2VzLm1hcCgoW21lc3NhZ2UsIG1lXSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lc3NhZ2UgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWU9e21lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZXNzYWdlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKSA6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgICAgICAgICAgICBpdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtcz0nY2VudGVyJ1xyXG4gICAgICAgICAgICAgICAgICAgIHNwYWNpbmc9ezJ9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4c1xyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1lc3NhZ2VGaWVsZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0KCdBYScpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD0nb3V0bGluZWQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bWVzc2FnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldE1lc3NhZ2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25LZXlQcmVzcz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihlLmtleSA9PT0gJ0VudGVyJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihwcm9wcy5vblNlbmQpIHByb3BzLm9uU2VuZChtZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TWVzc2FnZSgnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXt0KCdNZXNzYWdlJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihwcm9wcy5vblNlbmQpIHByb3BzLm9uU2VuZChtZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TWVzc2FnZSgnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VuZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9QYXBlcj5cclxuICAgIDwvPjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhdEJveDsiXSwic291cmNlUm9vdCI6IiJ9
webpackHotUpdate_N_E("pages/chat",{

/***/ "./components/ChatHeads.tsx":
/*!**********************************!*\
  !*** ./components/ChatHeads.tsx ***!
  \**********************************/
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
    _jsxFileName = "C:\\Users\\tatti\\Documents\\Github\\COMP353\\web\\components\\ChatHeads.tsx",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    headsContainer: {
      height: '100%',
      width: '100%'
    },
    headsGridContainer: {
      height: '90%',
      width: '102%',
      padding: theme.spacing(2)
    },
    chatHeadsContainer: {
      height: '100%',
      width: '100%',
      overflowY: 'scroll'
    },
    chatHeadContainer: {
      borderRadius: "".concat(theme.spacing(1), "px")
    },
    searchBar: {
      width: '100%'
    }
  };
});

var ChatHead = function ChatHead(props) {
  _s();

  var classes = useStyles();
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    className: classes.chatHeadContainer,
    button: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemAvatar"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, props.user.username.split(" ").map(function (s) {
    return s[0];
  }).slice(0, 2).join(''))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemText"], {
    primary: props.user.username,
    secondary: props.children,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }));
};

_s(ChatHead, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = ChatHead;

var ChatHeads = function ChatHeads(props) {
  _s2();

  var theme = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["useTheme"])();

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["useTranslation"])(),
      t = _useTranslation.t;

  var classes = useStyles();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Paper"], {
    square: true,
    className: classes.headsContainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    className: classes.headsGridContainer,
    container: true,
    spacing: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    container: true,
    spacing: 2,
    alignItems: "center",
    xs: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    className: classes.searchBar,
    placeholder: t("Search"),
    variant: "outlined",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 25
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
    title: t("Search"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 29
    }
  }, __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["Search"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 33
    }
  }))))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    className: classes.headsContainer,
    item: true,
    container: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], {
    className: classes.chatHeadsContainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 21
    }
  }, props.heads.map(function (head) {
    return __jsx(ChatHead, {
      user: head.user,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 33
      }
    }, head.message);
  }))))));
};

_s2(ChatHeads, "0lE5HiGHZKm1gw4L3pmdFJuGw80=", false, function () {
  return [_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["useTheme"], react_i18next__WEBPACK_IMPORTED_MODULE_3__["useTranslation"], useStyles];
});

_c2 = ChatHeads;
/* harmony default export */ __webpack_exports__["default"] = (ChatHeads);

var _c, _c2;

$RefreshReg$(_c, "ChatHead");
$RefreshReg$(_c2, "ChatHeads");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGF0SGVhZHMudHN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImhlYWRzQ29udGFpbmVyIiwiaGVpZ2h0Iiwid2lkdGgiLCJoZWFkc0dyaWRDb250YWluZXIiLCJwYWRkaW5nIiwic3BhY2luZyIsImNoYXRIZWFkc0NvbnRhaW5lciIsIm92ZXJmbG93WSIsImNoYXRIZWFkQ29udGFpbmVyIiwiYm9yZGVyUmFkaXVzIiwic2VhcmNoQmFyIiwiQ2hhdEhlYWQiLCJwcm9wcyIsImNsYXNzZXMiLCJ1c2VyIiwidXNlcm5hbWUiLCJzcGxpdCIsIm1hcCIsInMiLCJzbGljZSIsImpvaW4iLCJjaGlsZHJlbiIsIkNoYXRIZWFkcyIsInVzZVRoZW1lIiwidXNlVHJhbnNsYXRpb24iLCJ0IiwiaGVhZHMiLCJoZWFkIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBTUEsU0FBUyxHQUFHQyxvRUFBVSxDQUFDLFVBQUFDLEtBQUs7QUFBQSxTQUFLO0FBQ25DQyxrQkFBYyxFQUFFO0FBQ1pDLFlBQU0sRUFBRSxNQURJO0FBRVpDLFdBQUssRUFBRTtBQUZLLEtBRG1CO0FBS25DQyxzQkFBa0IsRUFBRTtBQUNoQkYsWUFBTSxFQUFFLEtBRFE7QUFFaEJDLFdBQUssRUFBRSxNQUZTO0FBR2hCRSxhQUFPLEVBQUVMLEtBQUssQ0FBQ00sT0FBTixDQUFjLENBQWQ7QUFITyxLQUxlO0FBVW5DQyxzQkFBa0IsRUFBRTtBQUNoQkwsWUFBTSxFQUFFLE1BRFE7QUFFaEJDLFdBQUssRUFBRSxNQUZTO0FBR2hCSyxlQUFTLEVBQUU7QUFISyxLQVZlO0FBZW5DQyxxQkFBaUIsRUFBRTtBQUNmQyxrQkFBWSxZQUFLVixLQUFLLENBQUNNLE9BQU4sQ0FBYyxDQUFkLENBQUw7QUFERyxLQWZnQjtBQWtCbkNLLGFBQVMs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Q0FISixDQWpCSixDQUxKLEVBb0NJLE1BQUMsc0RBQUQ7QUFDSSxhQUFTLEVBQUVaLE9BQU8sQ0FBQ2IsY0FEdkI7QUFFSSxRQUFJLE1BRlI7QUFHSSxhQUFTLE1BSGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtJLE1BQUMsc0RBQUQ7QUFDSSxhQUFTLEVBQUVhLE9BQU8sQ0FBQ1Asa0JBRHZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJUU0sS0FBSyxDQUFDYyxLQUFOLENBQVlULEdBQVosQ0FBZ0IsVUFBQVUsSUFBSTtBQUFBLFdBQ2hCLE1BQUMsUUFBRDtBQUNJLFVBQUksRUFBRUEsSUFBSSxDQUFDYixJQURmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FHS2EsSUFBSSxDQUFDQyxPQUhWLENBRGdCO0FBQUEsR0FBcEIsQ0FKUixDQUxKLENBcENKLENBSkosQ0FERyxDQUFQO0FBK0RILENBcEVEOztJQUFNTixTO1VBQ1lDLDBELEVBQ0FDLDRELEVBQ0UzQixTOzs7TUFIZHlCLFM7QUFzRVNBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NoYXQuN2NlY2JmMTZjZWMyZmZkMmEzNzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMsIFBhcGVyLCBUZXh0RmllbGQsIEdyaWQsIHVzZVRoZW1lLCBUeXBvZ3JhcGh5LCBJY29uQnV0dG9uLCBMaXN0LCBMaXN0SXRlbSwgTGlzdEl0ZW1BdmF0YXIsIEF2YXRhciwgTGlzdEl0ZW1UZXh0LCBUb29sdGlwIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBTZWFyY2gsIFNlbmQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMnO1xyXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xyXG5pbXBvcnQgeyBJQ2hhdEhlYWQsIElVc2VyIH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICAgIGhlYWRzQ29udGFpbmVyOiB7XHJcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJ1xyXG4gICAgfSxcclxuICAgIGhlYWRzR3JpZENvbnRhaW5lcjoge1xyXG4gICAgICAgIGhlaWdodDogJzkwJScsXHJcbiAgICAgICAgd2lkdGg6ICcxMDIlJyxcclxuICAgICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpXHJcbiAgICB9LFxyXG4gICAgY2hhdEhlYWRzQ29udGFpbmVyOiB7XHJcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICBvdmVyZmxvd1k6ICdzY3JvbGwnXHJcbiAgICB9LFxyXG4gICAgY2hhdEhlYWRDb250YWluZXI6IHtcclxuICAgICAgICBib3JkZXJSYWRpdXM6IGAke3RoZW1lLnNwYWNpbmcoMSl9cHhgXHJcbiAgICB9LFxyXG4gICAgc2VhcmNoQmFyOiB7XHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJ1xyXG4gICAgfVxyXG59KSk7XHJcblxyXG5pbnRlcmZhY2UgQ2hhdEhlYWRQcm9wcyB7XHJcbiAgICB1c2VyOiBJVXNlcixcclxuICAgIG9uU2VsZWN0OiAodXNlcjogSVVzZXIpID0+IHZvaWRcclxufVxyXG5cclxuY29uc3QgQ2hhdEhlYWQ6IFJlYWN0LkZDPENoYXRIZWFkUHJvcHM+ID0gcHJvcHMgPT4ge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExpc3RJdGVtXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jaGF0SGVhZENvbnRhaW5lcn1cclxuICAgICAgICAgICAgYnV0dG9uXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW1BdmF0YXI+XHJcbiAgICAgICAgICAgIDxBdmF0YXI+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMudXNlci51c2VybmFtZS5zcGxpdChcIiBcIikubWFwKHMgPT4gc1swXSkuc2xpY2UoMCwgMikuam9pbignJyl9XHJcbiAgICAgICAgICAgIDwvQXZhdGFyPlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtQXZhdGFyPlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IFxyXG4gICAgICAgICAgICAgICAgcHJpbWFyeT17cHJvcHMudXNlci51c2VybmFtZX1cclxuICAgICAgICAgICAgICAgIHNlY29uZGFyeT17cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICk7XHJcbn1cclxuXHJcbmludGVyZmFjZSBDaGF0SGVhZHNQcm9wcyB7XHJcbiAgICBoZWFkczogSUNoYXRIZWFkW10sXHJcbiAgICBvblNlbGVjdDogKHVzZXI6IElVc2VyKSA9PiB2b2lkXHJcbn1cclxuXHJcbmNvbnN0IENoYXRIZWFkczogUmVhY3QuRkM8Q2hhdEhlYWRzUHJvcHM+ID0gcHJvcHMgPT4ge1xyXG4gICAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xyXG4gICAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigpO1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICAgIHJldHVybiA8PlxyXG4gICAgICAgIDxQYXBlclxyXG4gICAgICAgICAgICBzcXVhcmVcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRzQ29udGFpbmVyfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWFkc0dyaWRDb250YWluZXJ9XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgICAgICAgIHNwYWNpbmc9ezJ9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgICAgIHNwYWNpbmc9ezJ9XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtcz0nY2VudGVyJ1xyXG4gICAgICAgICAgICAgICAgICAgIHhzPXsxMn1cclxuICAgICAgICAgICAgICAgID4gICBcclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4c1xyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWFyY2hCYXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dChcIlNlYXJjaFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9J291dGxpbmVkJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3QoXCJTZWFyY2hcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWFyY2ggLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRzQ29udGFpbmVyfVxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1cclxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY2hhdEhlYWRzQ29udGFpbmVyfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuaGVhZHMubWFwKGhlYWQgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGF0SGVhZCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcj17aGVhZC51c2VyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hlYWQubWVzc2FnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NoYXRIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvUGFwZXI+XHJcbiAgICA8Lz47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXRIZWFkczsiXSwic291cmNlUm9vdCI6IiJ9
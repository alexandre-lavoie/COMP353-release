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
    onClick: function onClick() {
      return props.onSelect(props.user);
    },
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
      lineNumber: 44,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
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
      lineNumber: 49,
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
      lineNumber: 68,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    className: classes.headsGridContainer,
    container: true,
    spacing: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
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
      lineNumber: 77,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    className: classes.searchBar,
    placeholder: t("Search"),
    variant: "outlined",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 25
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
    title: t("Search"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 29
    }
  }, __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["Search"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 33
    }
  }))))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    className: classes.headsContainer,
    item: true,
    container: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], {
    className: classes.chatHeadsContainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 21
    }
  }, props.heads.map(function (head) {
    return __jsx(ChatHead, {
      user: head.user,
      onSelect: function onSelect(user) {
        return props.onSelect(user);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGF0SGVhZHMudHN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImhlYWRzQ29udGFpbmVyIiwiaGVpZ2h0Iiwid2lkdGgiLCJoZWFkc0dyaWRDb250YWluZXIiLCJwYWRkaW5nIiwic3BhY2luZyIsImNoYXRIZWFkc0NvbnRhaW5lciIsIm92ZXJmbG93WSIsImNoYXRIZWFkQ29udGFpbmVyIiwiYm9yZGVyUmFkaXVzIiwic2VhcmNoQmFyIiwiQ2hhdEhlYWQiLCJwcm9wcyIsImNsYXNzZXMiLCJvblNlbGVjdCIsInVzZXIiLCJ1c2VybmFtZSIsInNwbGl0IiwibWFwIiwicyIsInNsaWNlIiwiam9pbiIsImNoaWxkcmVuIiwiQ2hhdEhlYWRzIiwidXNlVGhlbWUiLCJ1c2VUcmFuc2xhdGlvbiIsInQiLCJoZWFkcyIsImhlYWQiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSxTQUFTLEdBQUdDLG9FQUFVLENBQUMsVUFBQUMsS0FBSztBQUFBLFNBQUs7QUFDbkNDLGtCQUFjLEVBQUU7QUFDWkMsWUFBTSxFQUFFLE1BREk7QUFFWkMsV0FBSyxFQUFFO0FBRkssS0FEbUI7QUFLbkNDLHNCQUFrQixFQUFFO0FBQ2hCRixZQUFNLEVBQUUsS0FEUTtBQUVoQkMsV0FBSyxFQUFFLE1BRlM7QUFHaEJFLGFBQU8sRUFBRUwsS0FBSyxDQUFDTSxPQUFOLENBQWMsQ0FBZDtBQUhPLEtBTGU7QUFVbkNDLHNCQUFrQixFQUFFO0FBQ2hCTCxZQUFNLEVBQUUsTUFEUTtBQUVoQkMsV0FBSyxFQUFFLE1BRlM7QUFHaEJLLGVBQVMsRUFBRTtBQUhLLEtBVmU7QUFlbkNDLHFCQUFpQixFQUFFO0FBQ2ZDLGtCQUFZLFlBQUtWLEtBQUssQ0FBQ00sT0FBTixDQUFjLENBQWQsQ0FBTDtBQURHLEtBZmdCO0FB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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBR0ksTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEosQ0FISixDQUhKLENBakJKLENBTEosRUFvQ0ksTUFBQyxzREFBRDtBQUNJLGFBQVMsRUFBRWIsT0FBTyxDQUFDYixjQUR2QjtBQUVJLFFBQUksTUFGUjtBQUdJLGFBQVMsTUFIYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0ksTUFBQyxzREFBRDtBQUNJLGFBQVMsRUFBRWEsT0FBTyxDQUFDUCxrQkFEdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlRTSxLQUFLLENBQUNlLEtBQU4sQ0FBWVQsR0FBWixDQUFnQixVQUFBVSxJQUFJO0FBQUEsV0FDaEIsTUFBQyxRQUFEO0FBQ0ksVUFBSSxFQUFFQSxJQUFJLENBQUNiLElBRGY7QUFFSSxjQUFRLEVBQUUsa0JBQUNBLElBQUQ7QUFBQSxlQUFpQkgsS0FBSyxDQUFDRSxRQUFOLENBQWVDLElBQWYsQ0FBakI7QUFBQSxPQUZkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FJS2EsSUFBSSxDQUFDQyxPQUpWLENBRGdCO0FBQUEsR0FBcEIsQ0FKUixDQUxKLENBcENKLENBSkosQ0FERyxDQUFQO0FBZ0VILENBckVEOztJQUFNTixTO1VBQ1lDLDBELEVBQ0FDLDRELEVBQ0U1QixTOzs7TUFIZDBCLFM7QUF1RVNBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NoYXQuZGJjNmJlNzY1ZjhkNGQyZmQ4ZWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMsIFBhcGVyLCBUZXh0RmllbGQsIEdyaWQsIHVzZVRoZW1lLCBUeXBvZ3JhcGh5LCBJY29uQnV0dG9uLCBMaXN0LCBMaXN0SXRlbSwgTGlzdEl0ZW1BdmF0YXIsIEF2YXRhciwgTGlzdEl0ZW1UZXh0LCBUb29sdGlwIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBTZWFyY2gsIFNlbmQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMnO1xyXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xyXG5pbXBvcnQgeyBJQ2hhdEhlYWQsIElVc2VyIH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICAgIGhlYWRzQ29udGFpbmVyOiB7XHJcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJ1xyXG4gICAgfSxcclxuICAgIGhlYWRzR3JpZENvbnRhaW5lcjoge1xyXG4gICAgICAgIGhlaWdodDogJzkwJScsXHJcbiAgICAgICAgd2lkdGg6ICcxMDIlJyxcclxuICAgICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpXHJcbiAgICB9LFxyXG4gICAgY2hhdEhlYWRzQ29udGFpbmVyOiB7XHJcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICBvdmVyZmxvd1k6ICdzY3JvbGwnXHJcbiAgICB9LFxyXG4gICAgY2hhdEhlYWRDb250YWluZXI6IHtcclxuICAgICAgICBib3JkZXJSYWRpdXM6IGAke3RoZW1lLnNwYWNpbmcoMSl9cHhgXHJcbiAgICB9LFxyXG4gICAgc2VhcmNoQmFyOiB7XHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJ1xyXG4gICAgfVxyXG59KSk7XHJcblxyXG5pbnRlcmZhY2UgQ2hhdEhlYWRQcm9wcyB7XHJcbiAgICB1c2VyOiBJVXNlcixcclxuICAgIG9uU2VsZWN0OiAodXNlcjogSVVzZXIpID0+IHZvaWRcclxufVxyXG5cclxuY29uc3QgQ2hhdEhlYWQ6IFJlYWN0LkZDPENoYXRIZWFkUHJvcHM+ID0gcHJvcHMgPT4ge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExpc3RJdGVtXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jaGF0SGVhZENvbnRhaW5lcn1cclxuICAgICAgICAgICAgYnV0dG9uXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHByb3BzLm9uU2VsZWN0KHByb3BzLnVzZXIpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPExpc3RJdGVtQXZhdGFyPlxyXG4gICAgICAgICAgICA8QXZhdGFyPlxyXG4gICAgICAgICAgICAgICAge3Byb3BzLnVzZXIudXNlcm5hbWUuc3BsaXQoXCIgXCIpLm1hcChzID0+IHNbMF0pLnNsaWNlKDAsIDIpLmpvaW4oJycpfVxyXG4gICAgICAgICAgICA8L0F2YXRhcj5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBcclxuICAgICAgICAgICAgICAgIHByaW1hcnk9e3Byb3BzLnVzZXIudXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgICBzZWNvbmRhcnk9e3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICApO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQ2hhdEhlYWRzUHJvcHMge1xyXG4gICAgaGVhZHM6IElDaGF0SGVhZFtdLFxyXG4gICAgb25TZWxlY3Q6ICh1c2VyOiBJVXNlcikgPT4gdm9pZFxyXG59XHJcblxyXG5jb25zdCBDaGF0SGVhZHM6IFJlYWN0LkZDPENoYXRIZWFkc1Byb3BzPiA9IHByb3BzID0+IHtcclxuICAgIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcclxuICAgIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKTtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgICByZXR1cm4gPD5cclxuICAgICAgICA8UGFwZXJcclxuICAgICAgICAgICAgc3F1YXJlXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWFkc0NvbnRhaW5lcn1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZHNHcmlkQ29udGFpbmVyfVxyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICBzcGFjaW5nPXsyfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1cclxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgICAgICAgICAgICBzcGFjaW5nPXsyfVxyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9J2NlbnRlcidcclxuICAgICAgICAgICAgICAgICAgICB4cz17MTJ9XHJcbiAgICAgICAgICAgICAgICA+ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgeHNcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuc2VhcmNoQmFyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3QoXCJTZWFyY2hcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PSdvdXRsaW5lZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXt0KFwiU2VhcmNoXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VhcmNoIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWFkc0NvbnRhaW5lcn1cclxuICAgICAgICAgICAgICAgICAgICBpdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNoYXRIZWFkc0NvbnRhaW5lcn1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLmhlYWRzLm1hcChoZWFkID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hhdEhlYWQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXI9e2hlYWQudXNlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Q9eyh1c2VyOiBJVXNlcikgPT4gcHJvcHMub25TZWxlY3QodXNlcil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aGVhZC5tZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2hhdEhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9QYXBlcj5cclxuICAgIDwvPjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhdEhlYWRzOyJdLCJzb3VyY2VSb290IjoiIn0=
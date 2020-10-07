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
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
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
      height: '100%',
      width: '102%',
      padding: theme.spacing(2)
    },
    chatHeadContainer: {
      borderRadius: "".concat(theme.spacing(1), "px")
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
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemAvatar"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
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
      lineNumber: 40,
      columnNumber: 13
    }
  }));
};

_s(ChatHead, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = ChatHead;

var ChatHeads = function ChatHeads() {
  _s2();

  var theme = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["useTheme"])();

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
      t = _useTranslation.t;

  var classes = useStyles();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Paper"], {
    square: true,
    className: classes.headsContainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    className: classes.headsGridContainer,
    container: true,
    direction: "column",
    spacing: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], {
    style: {
      width: '100%'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }
  }, __jsx(ChatHead, {
    user: {
      username: "John Doe"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 21
    }
  }, "How was your day?"), __jsx(ChatHead, {
    user: {
      username: "John Doe"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 21
    }
  }, "How was your day?"), __jsx(ChatHead, {
    user: {
      username: "John Doe"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 21
    }
  }, "How was your day?"), __jsx(ChatHead, {
    user: {
      username: "John Doe"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 21
    }
  }, "How was your day?")))));
};

_s2(ChatHeads, "0lE5HiGHZKm1gw4L3pmdFJuGw80=", false, function () {
  return [_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["useTheme"], react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"], useStyles];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGF0SGVhZHMudHN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImhlYWRzQ29udGFpbmVyIiwiaGVpZ2h0Iiwid2lkdGgiLCJoZWFkc0dyaWRDb250YWluZXIiLCJwYWRkaW5nIiwic3BhY2luZyIsImNoYXRIZWFkQ29udGFpbmVyIiwiYm9yZGVyUmFkaXVzIiwiQ2hhdEhlYWQiLCJwcm9wcyIsImNsYXNzZXMiLCJ1c2VyIiwidXNlcm5hbWUiLCJzcGxpdCIsIm1hcCIsInMiLCJzbGljZSIsImpvaW4iLCJjaGlsZHJlbiIsIkNoYXRIZWFkcyIsInVzZVRoZW1lIiwidXNlVHJhbnNsYXRpb24iLCJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLG9FQUFVLENBQUMsVUFBQUMsS0FBSztBQUFBLFNBQUs7QUFDbkNDLGtCQUFjLEVBQUU7QUFDWkMsWUFBTSxFQUFFLE1BREk7QUFFWkMsV0FBSyxFQUFFO0FBRkssS0FEbUI7QUFLbkNDLHNCQUFrQixFQUFFO0FBQ2hCRixZQUFNLEVBQUUsTUFEUTtBQUVoQkMsV0FBSyxFQUFFLE1BRlM7QUFHaEJFLGFBQU8sRUFBRUwsS0FBSyxDQUFDTSxPQUFOLENBQWMsQ0FBZDtBQUhPLEtBTGU7QUFVbkNDLHFCQUFpQixFQUFFO0FBQ2ZDLGtCQUFZLFlBQUtSLEtBQUssQ0FBQ00sT0FBTixDQUFjLENBQWQsQ0FBTDtBQURHO0FBVmdCLEdBQUw7QUFBQSxDQUFOLENBQTVCOztBQXFCQSxJQUFNRyxRQUFpQyxHQUFHLFNBQXBDQSxRQUFvQyxDQUFBQyxLQUFLLEVBQUk7QUFBQTs7QUFDL0MsTUFBTUMsT0FBTyxHQUFHYixTQUFTLEVBQXpCO0FBRUEsU0FDSSxNQUFDLDBEQUFEO0FBQ0ksYUFBUyxFQUFFYSxPQUFPLENBQUNKLGlCQUR2QjtBQUVJLFVBQU0sTUFGVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUksTUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0EsTUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tHLEtBQUssQ0FBQ0UsSUFBTixDQUFXQyxRQUFYLENBQW9CQyxLQUFwQixDQUEwQixHQUExQixFQUErQkMsR0FBL0IsQ0FBbUMsVUFBQUMsQ0FBQztBQUFBLFdBQUlBLENBQUMsQ0FBQyxDQUFELENBQUw7QUFBQSxHQUFwQyxFQUE4Q0MsS0FBOUMsQ0FBb0QsQ0FBcEQsRUFBdUQsQ0FBdkQsRUFBMERDLElBQTFELENBQStELEVBQS9ELENBREwsQ0FEQSxDQUpKLEVBU0ksTUFBQyw4REFBRDtBQUNJLFdBQU8sRUFBRVIsS0FBSyxDQUFDRSxJQUFOLENBQVdDLFFBRHhCO0FBRUksYUFBUyxFQUFFSCxLQUFLLENBQUNTLFFBRnJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFUSixDQURKO0FBZ0JILENBbkJEOztHQUFNVixRO1VBQ2NYLFM7OztLQURkVyxROztBQXVCTixJQUFNVyxTQUFtQyxHQUFHLFNBQXRDQSxTQUFzQyxHQUFNO0FBQUE7O0FBQzlDLE1BQU1wQixLQUFLLEdBQUdxQixrRUFBUSxFQUF0Qjs7QUFEOEMsd0JBRWhDQyxvRUFBYyxFQUZrQjtBQUFBLE1BRXRDQyxDQUZzQyxtQkFFdENBLENBRnNDOztBQUc5QyxNQUFNWixPQUFPLEdBQUdiLFNBQVMsRUFBekI7QUFFQSxTQUFPLG1FQUNILE1BQUMsdURBQUQ7QUFDSSxVQUFNLE1BRFY7QUFFSSxhQUFTLEVBQUVhLE9BQU8sQ0FBQ1YsY0FGdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlJLE1BQUMsc0RBQUQ7QUFDSSxhQUFTLEVBQUVVLE9BQU8sQ0FBQ1Asa0JBRHZCO0FBRUksYUFBUyxNQUZiO0FBR0ksYUFBUyxFQUFDLFFBSGQ7QUFJSSxXQUFPLEVBQUUsQ0FKYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUksTUFBQyxzREFBRDtBQUNJLFNBQUssRUFBRTtBQUFDRCxXQUFLLEVBQUU7QUFBUixLQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FHSSxNQUFDLFFBQUQ7QUFBVSxRQUFJLEVBQUU7QUFBQ1UsY0FBUSxFQUFFO0FBQVgsS0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFISixFQUlJLE1BQUMsUUFBRDtBQUFVLFFBQUksRUFBRTtBQUFDQSxjQUFRLEVBQUU7QUFBWCxLQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUpKLEVBS0ksTUFBQyxRQUFEO0FBQVUsUUFBSSxFQUFFO0FBQUNBLGNBQVEsRUFBRTtBQUFYLEtBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBTEosRUFNSSxNQUFDLFFBQUQ7QUFBVSxRQUFJLEVBQUU7QUFBQ0EsY0FBUSxFQUFFO0FBQVgsS0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFOSixDQU5KLENBSkosQ0FERyxDQUFQO0FBc0JILENBM0JEOztJQUFNTyxTO1VBQ1lDLDBELEVBQ0FDLDRELEVBQ0V4QixTOzs7TUFIZHNCLFM7QUE2QlNBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NoYXQuYjQ0M2E3ZTYxY2Q4NDU4NTlhMjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMsIFBhcGVyLCBUZXh0RmllbGQsIEdyaWQsIHVzZVRoZW1lLCBUeXBvZ3JhcGh5LCBJY29uQnV0dG9uLCBMaXN0LCBMaXN0SXRlbSwgTGlzdEl0ZW1BdmF0YXIsIEF2YXRhciwgTGlzdEl0ZW1UZXh0IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBTZW5kIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zJztcclxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICAgIGhlYWRzQ29udGFpbmVyOiB7XHJcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJ1xyXG4gICAgfSxcclxuICAgIGhlYWRzR3JpZENvbnRhaW5lcjoge1xyXG4gICAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICAgIHdpZHRoOiAnMTAyJScsXHJcbiAgICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyKVxyXG4gICAgfSxcclxuICAgIGNoYXRIZWFkQ29udGFpbmVyOiB7XHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiBgJHt0aGVtZS5zcGFjaW5nKDEpfXB4YFxyXG4gICAgfVxyXG59KSk7XHJcblxyXG5pbnRlcmZhY2UgQ2hhdEhlYWRQcm9wcyB7XHJcbiAgICB1c2VyOiB7XHJcbiAgICAgICAgdXNlcm5hbWU6IHN0cmluZ1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBDaGF0SGVhZDogUmVhY3QuRkM8Q2hhdEhlYWRQcm9wcz4gPSBwcm9wcyA9PiB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGlzdEl0ZW1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNoYXRIZWFkQ29udGFpbmVyfVxyXG4gICAgICAgICAgICBidXR0b25cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgPEF2YXRhcj5cclxuICAgICAgICAgICAgICAgIHtwcm9wcy51c2VyLnVzZXJuYW1lLnNwbGl0KFwiIFwiKS5tYXAocyA9PiBzWzBdKS5zbGljZSgwLCAyKS5qb2luKCcnKX1cclxuICAgICAgICAgICAgPC9BdmF0YXI+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW1BdmF0YXI+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgXHJcbiAgICAgICAgICAgICAgICBwcmltYXJ5PXtwcm9wcy51c2VyLnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgc2Vjb25kYXJ5PXtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgKTtcclxufVxyXG5cclxuaW50ZXJmYWNlIENoYXRIZWFkc1Byb3BzIHt9XHJcblxyXG5jb25zdCBDaGF0SGVhZHM6IFJlYWN0LkZDPENoYXRIZWFkc1Byb3BzPiA9ICgpID0+IHtcclxuICAgIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcclxuICAgIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKTtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgICByZXR1cm4gPD5cclxuICAgICAgICA8UGFwZXJcclxuICAgICAgICAgICAgc3F1YXJlXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWFkc0NvbnRhaW5lcn1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZHNHcmlkQ29udGFpbmVyfVxyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb249J2NvbHVtbidcclxuICAgICAgICAgICAgICAgIHNwYWNpbmc9ezJ9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxMaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDogJzEwMCUnfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8Q2hhdEhlYWQgdXNlcj17e3VzZXJuYW1lOiBcIkpvaG4gRG9lXCJ9fT5Ib3cgd2FzIHlvdXIgZGF5PzwvQ2hhdEhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPENoYXRIZWFkIHVzZXI9e3t1c2VybmFtZTogXCJKb2huIERvZVwifX0+SG93IHdhcyB5b3VyIGRheT88L0NoYXRIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDaGF0SGVhZCB1c2VyPXt7dXNlcm5hbWU6IFwiSm9obiBEb2VcIn19PkhvdyB3YXMgeW91ciBkYXk/PC9DaGF0SGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8Q2hhdEhlYWQgdXNlcj17e3VzZXJuYW1lOiBcIkpvaG4gRG9lXCJ9fT5Ib3cgd2FzIHlvdXIgZGF5PzwvQ2hhdEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L1BhcGVyPlxyXG4gICAgPC8+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGF0SGVhZHM7Il0sInNvdXJjZVJvb3QiOiIifQ==
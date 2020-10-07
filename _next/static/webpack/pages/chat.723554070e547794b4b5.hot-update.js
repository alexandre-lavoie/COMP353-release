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
    container: {
      height: '100%',
      width: '100%',
      padding: theme.spacing(2)
    },
    chatHeadsContainer: {
      height: '100%',
      width: '100%',
      overflowY: 'scroll'
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
    onClick: function onClick() {
      return props.onSelect(props.user);
    },
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
      lineNumber: 36,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
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
      lineNumber: 41,
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

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
      t = _useTranslation.t;

  var classes = useStyles();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Paper"], {
    square: true,
    className: classes.container,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], {
    className: classes.chatHeadsContainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
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
        lineNumber: 69,
        columnNumber: 25
      }
    }, head.message);
  }))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGF0SGVhZHMudHN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNvbnRhaW5lciIsImhlaWdodCIsIndpZHRoIiwicGFkZGluZyIsInNwYWNpbmciLCJjaGF0SGVhZHNDb250YWluZXIiLCJvdmVyZmxvd1kiLCJjaGF0SGVhZENvbnRhaW5lciIsImJvcmRlclJhZGl1cyIsIkNoYXRIZWFkIiwicHJvcHMiLCJjbGFzc2VzIiwib25TZWxlY3QiLCJ1c2VyIiwidXNlcm5hbWUiLCJzcGxpdCIsIm1hcCIsInMiLCJzbGljZSIsImpvaW4iLCJjaGlsZHJlbiIsIkNoYXRIZWFkcyIsInVzZVRoZW1lIiwidXNlVHJhbnNsYXRpb24iLCJ0IiwiaGVhZHMiLCJoZWFkIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBR0EsSUFBTUEsU0FBUyxHQUFHQyxvRUFBVSxDQUFDLFVBQUFDLEtBQUs7QUFBQSxTQUFLO0FBQ25DQyxhQUFTLEVBQUU7QUFDUEMsWUFBTSxFQUFFLE1BREQ7QUFFUEMsV0FBSyxFQUFFLE1BRkE7QUFHUEMsYUFBTyxFQUFFSixLQUFLLENBQUNLLE9BQU4sQ0FBYyxDQUFkO0FBSEYsS0FEd0I7QUFNbkNDLHNCQUFrQixFQUFFO0FBQ2hCSixZQUFNLEVBQUUsTUFEUTtBQUVoQkMsV0FBSyxFQUFFLE1BRlM7QUFHaEJJLGVBQVMsRUFBRTtBQUhLLEtBTmU7QUFXbkNDLHFCQUFpQixFQUFFO0FBQ2ZDLGtCQUFZLFlBQUtULEtBQUssQ0FBQ0ssT0FBTixDQUFjLENBQWQsQ0FBTDtBQURHO0FBWGdCLEdBQUw7QUFBQSxDQUFOLENBQTVCOztBQXFCQSxJQUFNSyxRQUFpQyxHQUFHLFNBQXBDQSxRQUFvQyxDQUFBQyxLQUFLLEVBQUk7QUFBQTs7QUFDL0MsTUFBTUMsT0FBTyxHQUFHZCxTQUFTLEVBQXpCO0FBRUEsU0FDSSxNQUFDLDBEQUFEO0FBQ0ksYUFBUyxFQUFFYyxPQUFPLENBQUNKLGlCQUR2QjtBQUVJLFVBQU0sTUFGVjtBQUdJLFdBQU8sRUFBRTtBQUFBLGFBQU1HLEtBQUssQ0FBQ0UsUUFBTixDQUFlRixLQUFLLENBQUNHLElBQXJCLENBQU47QUFBQSxLQUhiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLSSxNQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQSxNQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS0gsS0FBSyxDQUFDRyxJQUFOLENBQVdDLFFBQVgsQ0FBb0JDLEtBQXBCLENBQTBCLEdBQTFCLEVBQStCQyxHQUEvQixDQUFtQyxVQUFBQyxDQUFDO0FBQUEsV0FBSUEsQ0FBQyxDQUFDLENBQUQsQ0FBTDtBQUFBLEdBQXBDLEVBQThDQyxLQUE5QyxDQUFvRCxDQUFwRCxFQUF1RCxDQUF2RCxFQUEwREMsSUFBMUQsQ0FBK0QsRUFBL0QsQ0FETCxDQURBLENBTEosRUFVSSxNQUFDLDhEQUFEO0FBQ0ksV0FBTyxFQUFFVCxLQUFLLENBQUNHLElBQU4sQ0FBV0MsUUFEeEI7QUFFSSxhQUFTLEVBQUVKLEtBQUssQ0FBQ1UsUUFGckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZKLENBREo7QUFpQkgsQ0FwQkQ7O0dBQU1YLFE7VUFDY1osUzs7O0tBRGRZLFE7O0FBMkJOLElBQU1ZLFNBQW1DLEdBQUcsU0FBdENBLFNBQXNDLENBQUFYLEtBQUssRUFBSTtBQUFBOztBQUNqRCxNQUFNWCxLQUFLLEdBQUd1QixrRUFBUSxFQUF0Qjs7QUFEaUQsd0JBRW5DQyxvRUFBYyxFQUZxQjtBQUFBLE1BRXpDQyxDQUZ5QyxtQkFFekNBLENBRnlDOztBQUdqRCxNQUFNYixPQUFPLEdBQUdkLFNBQVMsRUFBekI7QUFFQSxTQUFPLG1FQUNILE1BQUMsdURBQUQ7QUFDSSxVQUFNLE1BRFY7QUFFSSxhQUFTLEVBQUVjLE9BQU8sQ0FBQ1gsU0FGdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlJLE1BQUMsc0RBQUQ7QUFDSSxhQUFTLEVBQUVXLE9BQU8sQ0FBQ04sa0JBRHZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJUUssS0FBSyxDQUFDZSxLQUFOLENBQVlULEdBQVosQ0FBZ0IsVUFBQVUsSUFBSTtBQUFBLFdBQ2hCLE1BQUMsUUFBRDtBQUNJLFVBQUksRUFBRUEsSUFBSSxDQUFDYixJQURmO0FBRUksY0FBUSxFQUFFLGtCQUFDQSxJQUFEO0FBQUEsZUFBaUJILEtBQUssQ0FBQ0UsUUFBTixDQUFlQyxJQUFmLENBQWpCO0FBQUEsT0FGZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BSUthLElBQUksQ0FBQ0MsT0FKVixDQURnQjtBQUFBLEdBQXBCLENBSlIsQ0FKSixDQURHLENBQVA7QUFxQkgsQ0ExQkQ7O0lBQU1OLFM7VUFDWUMsMEQsRUFDQUMsNEQsRUFDRTFCLFM7OztNQUhkd0IsUztBQTRCU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2hhdC43MjM1NTQwNzBlNTQ3Nzk0YjRiNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcywgUGFwZXIsIHVzZVRoZW1lLCBMaXN0LCBMaXN0SXRlbSwgTGlzdEl0ZW1BdmF0YXIsIEF2YXRhciwgTGlzdEl0ZW1UZXh0IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xyXG5pbXBvcnQgeyBJQ2hhdEhlYWQsIElVc2VyIH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICAgIGNvbnRhaW5lcjoge1xyXG4gICAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyKVxyXG4gICAgfSxcclxuICAgIGNoYXRIZWFkc0NvbnRhaW5lcjoge1xyXG4gICAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgb3ZlcmZsb3dZOiAnc2Nyb2xsJ1xyXG4gICAgfSxcclxuICAgIGNoYXRIZWFkQ29udGFpbmVyOiB7XHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiBgJHt0aGVtZS5zcGFjaW5nKDEpfXB4YFxyXG4gICAgfSxcclxufSkpO1xyXG5cclxuaW50ZXJmYWNlIENoYXRIZWFkUHJvcHMge1xyXG4gICAgdXNlcjogSVVzZXIsXHJcbiAgICBvblNlbGVjdDogKHVzZXI6IElVc2VyKSA9PiB2b2lkXHJcbn1cclxuXHJcbmNvbnN0IENoYXRIZWFkOiBSZWFjdC5GQzxDaGF0SGVhZFByb3BzPiA9IHByb3BzID0+IHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMaXN0SXRlbVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY2hhdEhlYWRDb250YWluZXJ9XHJcbiAgICAgICAgICAgIGJ1dHRvblxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwcm9wcy5vblNlbGVjdChwcm9wcy51c2VyKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgPEF2YXRhcj5cclxuICAgICAgICAgICAgICAgIHtwcm9wcy51c2VyLnVzZXJuYW1lLnNwbGl0KFwiIFwiKS5tYXAocyA9PiBzWzBdKS5zbGljZSgwLCAyKS5qb2luKCcnKX1cclxuICAgICAgICAgICAgPC9BdmF0YXI+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW1BdmF0YXI+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgXHJcbiAgICAgICAgICAgICAgICBwcmltYXJ5PXtwcm9wcy51c2VyLnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgc2Vjb25kYXJ5PXtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgKTtcclxufVxyXG5cclxuaW50ZXJmYWNlIENoYXRIZWFkc1Byb3BzIHtcclxuICAgIGhlYWRzOiBJQ2hhdEhlYWRbXSxcclxuICAgIG9uU2VsZWN0OiAodXNlcjogSVVzZXIpID0+IHZvaWRcclxufVxyXG5cclxuY29uc3QgQ2hhdEhlYWRzOiBSZWFjdC5GQzxDaGF0SGVhZHNQcm9wcz4gPSBwcm9wcyA9PiB7XHJcbiAgICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XHJcbiAgICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCk7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gICAgcmV0dXJuIDw+XHJcbiAgICAgICAgPFBhcGVyXHJcbiAgICAgICAgICAgIHNxdWFyZVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPExpc3RcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jaGF0SGVhZHNDb250YWluZXJ9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wcy5oZWFkcy5tYXAoaGVhZCA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGF0SGVhZCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXI9e2hlYWQudXNlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0PXsodXNlcjogSVVzZXIpID0+IHByb3BzLm9uU2VsZWN0KHVzZXIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aGVhZC5tZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NoYXRIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICA8L1BhcGVyPlxyXG4gICAgPC8+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGF0SGVhZHM7Il0sInNvdXJjZVJvb3QiOiIifQ==
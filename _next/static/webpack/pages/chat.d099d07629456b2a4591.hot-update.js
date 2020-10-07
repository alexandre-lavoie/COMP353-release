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
    chatHeadsContainer: {
      height: '90%',
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
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemAvatar"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
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
      lineNumber: 45,
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
      lineNumber: 61,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    className: classes.headsGridContainer,
    container: true,
    spacing: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    variant: "outlined",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 21
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    className: classes.headsContainer,
    item: true,
    container: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], {
    className: classes.chatHeadsContainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 21
    }
  }, new Array(50).fill(0).map(function () {
    return __jsx(ChatHead, {
      user: {
        username: "John Doe"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 58
      }
    }, "How was your day?");
  }))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGF0SGVhZHMudHN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImhlYWRzQ29udGFpbmVyIiwiaGVpZ2h0Iiwid2lkdGgiLCJoZWFkc0dyaWRDb250YWluZXIiLCJwYWRkaW5nIiwic3BhY2luZyIsImNoYXRIZWFkc0NvbnRhaW5lciIsIm92ZXJmbG93WSIsImNoYXRIZWFkQ29udGFpbmVyIiwiYm9yZGVyUmFkaXVzIiwiQ2hhdEhlYWQiLCJwcm9wcyIsImNsYXNzZXMiLCJ1c2VyIiwidXNlcm5hbWUiLCJzcGxpdCIsIm1hcCIsInMiLCJzbGljZSIsImpvaW4iLCJjaGlsZHJlbiIsIkNoYXRIZWFkcyIsInVzZVRoZW1lIiwidXNlVHJhbnNsYXRpb24iLCJ0IiwiQXJyYXkiLCJmaWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLG9FQUFVLENBQUMsVUFBQUMsS0FBSztBQUFBLFNBQUs7QUFDbkNDLGtCQUFjLEVBQUU7QUFDWkMsWUFBTSxFQUFFLE1BREk7QUFFWkMsV0FBSyxFQUFFO0FBRkssS0FEbUI7QUFLbkNDLHNCQUFrQixFQUFFO0FBQ2hCRixZQUFNLEVBQUUsTUFEUTtBQUVoQkMsV0FBSyxFQUFFLE1BRlM7QUFHaEJFLGFBQU8sRUFBRUwsS0FBSyxDQUFDTSxPQUFOLENBQWMsQ0FBZDtBQUhPLEtBTGU7QUFVbkNDLHNCQUFrQixFQUFFO0FBQ2hCTCxZQUFNLEVBQUUsS0FEUTtBQUVoQkMsV0FBSyxFQUFFLE1BRlM7QUFHaEJLLGVBQVMsRUFBRTtBQUhLLEtBVmU7QUFlbkNDLHFCQUFpQixFQUFFO0FBQ2ZDLGtCQUFZLFlBQUtWLEtBQUssQ0FBQ00sT0FBTixDQUFjLENBQWQsQ0FBTDtBQURHO0FBZmdCLEdBQUw7QUFBQSxDQUFOLENBQTVCOztBQTBCQSxJQUFNSyxRQUFpQyxHQUFHLFNBQXBDQSxRQUFvQyxDQUFBQyxLQUFLLEVBQUk7QUFBQTs7QUFDL0MsTUFBTUMsT0FBTyxHQUFHZixTQUFTLEVBQXpCO0FBRUEsU0FDSSxNQUFDLDBEQUFEO0FBQ0ksYUFBUyxFQUFFZSxPQUFPLENBQUNKLGlCQUR2QjtBQUVJLFVBQU0sTUFGVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUksTUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0EsTUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tHLEtBQUssQ0FBQ0UsSUFBTixDQUFXQyxRQUFYLENBQW9CQyxLQUFwQixDQUEwQixHQUExQixFQUErQkMsR0FBL0IsQ0FBbUMsVUFBQUMsQ0FBQztBQUFBLFdBQUlBLENBQUMsQ0FBQyxDQUFELENBQUw7QUFBQSxHQUFwQyxFQUE4Q0MsS0FBOUMsQ0FBb0QsQ0FBcEQsRUFBdUQsQ0FBdkQsRUFBMERDLElBQTFELENBQStELEVBQS9ELENBREwsQ0FEQSxDQUpKLEVBU0ksTUFBQyw4REFBRDtBQUNJLFdBQU8sRUFBRVIsS0FBSyxDQUFDRSxJQUFOLENBQVdDLFFBRHhCO0FBRUksYUFBUyxFQUFFSCxLQUFLLENBQUNTLFFBRnJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFUSixDQURKO0FBZ0JILENBbkJEOztHQUFNVixRO1VBQ2NiLFM7OztLQURkYSxROztBQXVCTixJQUFNVyxTQUFtQyxHQUFHLFNBQXRDQSxTQUFzQyxHQUFNO0FBQUE7O0FBQzlDLE1BQU10QixLQUFLLEdBQUd1QixrRUFBUSxFQUF0Qjs7QUFEOEMsd0JBRWhDQyxvRUFBYyxFQUZrQjtBQUFBLE1BRXRDQyxDQUZzQyxtQkFFdENBLENBRnNDOztBQUc5QyxNQUFNWixPQUFPLEdBQUdmLFNBQVMsRUFBekI7QUFFQSxTQUFPLG1FQUNILE1BQUMsdURBQUQ7QUFDSSxVQUFNLE1BRFY7QUFFSSxhQUFTLEVBQUVlLE9BQU8sQ0FBQ1osY0FGdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlJLE1BQUMsc0RBQUQ7QUFDSSxhQUFTLEVBQUVZLE9BQU8sQ0FBQ1Qsa0JBRHZCO0FBRUksYUFBUyxNQUZiO0FBR0ksV0FBTyxFQUFFLENBSGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtJLE1BQUMsc0RBQUQ7QUFDSSxRQUFJLE1BRFI7QUFFSSxNQUFFLEVBQUUsRUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUksTUFBQywyREFBRDtBQUNJLFdBQU8sRUFBQyxVQURaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKSixDQUxKLEVBYUksTUFBQyxzREFBRDtBQUNJLGFBQVMsRUFBRVMsT0FBTyxDQUFDWixjQUR2QjtBQUVJLFFBQUksTUFGUjtBQUdJLGFBQVMsTUFIYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0ksTUFBQyxzREFBRDtBQUNJLGFBQVMsRUFBRVksT0FBTyxDQUFDTixrQkFEdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUdLLElBQUltQixLQUFKLENBQVUsRUFBVixFQUFjQyxJQUFkLENBQW1CLENBQW5CLEVBQXNCVixHQUF0QixDQUEwQjtBQUFBLFdBQU0sTUFBQyxRQUFEO0FBQVUsVUFBSSxFQUFFO0FBQUNGLGdCQUFRLEVBQUU7QUFBWCxPQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUFOO0FBQUEsR0FBMUIsQ0FITCxDQUxKLENBYkosQ0FKSixDQURHLENBQVA7QUFnQ0gsQ0FyQ0Q7O0lBQU1PLFM7VUFDWUMsMEQsRUFDQUMsNEQsRUFDRTFCLFM7OztNQUhkd0IsUztBQXVDU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2hhdC5kMDk5ZDA3NjI5NDU2YjJhNDU5MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcywgUGFwZXIsIFRleHRGaWVsZCwgR3JpZCwgdXNlVGhlbWUsIFR5cG9ncmFwaHksIEljb25CdXR0b24sIExpc3QsIExpc3RJdGVtLCBMaXN0SXRlbUF2YXRhciwgQXZhdGFyLCBMaXN0SXRlbVRleHQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IFNlbmQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMnO1xyXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gICAgaGVhZHNDb250YWluZXI6IHtcclxuICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgICB3aWR0aDogJzEwMCUnXHJcbiAgICB9LFxyXG4gICAgaGVhZHNHcmlkQ29udGFpbmVyOiB7XHJcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICAgd2lkdGg6ICcxMDIlJyxcclxuICAgICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpXHJcbiAgICB9LFxyXG4gICAgY2hhdEhlYWRzQ29udGFpbmVyOiB7XHJcbiAgICAgICAgaGVpZ2h0OiAnOTAlJyxcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgIG92ZXJmbG93WTogJ3Njcm9sbCdcclxuICAgIH0sXHJcbiAgICBjaGF0SGVhZENvbnRhaW5lcjoge1xyXG4gICAgICAgIGJvcmRlclJhZGl1czogYCR7dGhlbWUuc3BhY2luZygxKX1weGBcclxuICAgIH1cclxufSkpO1xyXG5cclxuaW50ZXJmYWNlIENoYXRIZWFkUHJvcHMge1xyXG4gICAgdXNlcjoge1xyXG4gICAgICAgIHVzZXJuYW1lOiBzdHJpbmdcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgQ2hhdEhlYWQ6IFJlYWN0LkZDPENoYXRIZWFkUHJvcHM+ID0gcHJvcHMgPT4ge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExpc3RJdGVtXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jaGF0SGVhZENvbnRhaW5lcn1cclxuICAgICAgICAgICAgYnV0dG9uXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW1BdmF0YXI+XHJcbiAgICAgICAgICAgIDxBdmF0YXI+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMudXNlci51c2VybmFtZS5zcGxpdChcIiBcIikubWFwKHMgPT4gc1swXSkuc2xpY2UoMCwgMikuam9pbignJyl9XHJcbiAgICAgICAgICAgIDwvQXZhdGFyPlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtQXZhdGFyPlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IFxyXG4gICAgICAgICAgICAgICAgcHJpbWFyeT17cHJvcHMudXNlci51c2VybmFtZX1cclxuICAgICAgICAgICAgICAgIHNlY29uZGFyeT17cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICk7XHJcbn1cclxuXHJcbmludGVyZmFjZSBDaGF0SGVhZHNQcm9wcyB7fVxyXG5cclxuY29uc3QgQ2hhdEhlYWRzOiBSZWFjdC5GQzxDaGF0SGVhZHNQcm9wcz4gPSAoKSA9PiB7XHJcbiAgICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XHJcbiAgICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCk7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gICAgcmV0dXJuIDw+XHJcbiAgICAgICAgPFBhcGVyXHJcbiAgICAgICAgICAgIHNxdWFyZVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZHNDb250YWluZXJ9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRzR3JpZENvbnRhaW5lcn1cclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgc3BhY2luZz17Mn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgICAgICAgICBpdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgeHM9ezEyfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9J291dGxpbmVkJ1xyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWFkc0NvbnRhaW5lcn1cclxuICAgICAgICAgICAgICAgICAgICBpdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNoYXRIZWFkc0NvbnRhaW5lcn1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtuZXcgQXJyYXkoNTApLmZpbGwoMCkubWFwKCgpID0+IDxDaGF0SGVhZCB1c2VyPXt7dXNlcm5hbWU6IFwiSm9obiBEb2VcIn19PkhvdyB3YXMgeW91ciBkYXk/PC9DaGF0SGVhZD4pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvUGFwZXI+XHJcbiAgICA8Lz47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXRIZWFkczsiXSwic291cmNlUm9vdCI6IiJ9
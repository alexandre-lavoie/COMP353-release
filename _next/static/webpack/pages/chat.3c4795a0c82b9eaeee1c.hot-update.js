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
      lineNumber: 38,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemAvatar"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
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
      lineNumber: 47,
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

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["useTranslation"])(),
      t = _useTranslation.t;

  var classes = useStyles();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Paper"], {
    square: true,
    className: classes.headsContainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    className: classes.headsGridContainer,
    container: true,
    spacing: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
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
      lineNumber: 72,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    className: classes.searchBar,
    placeholder: t("Search"),
    variant: "outlined",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 25
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
    title: t("Search"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 29
    }
  }, __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["Search"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 33
    }
  }))))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    className: classes.headsContainer,
    item: true,
    container: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], {
    className: classes.chatHeadsContainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
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
        lineNumber: 111,
        columnNumber: 58
      }
    }, "Hello World!");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGF0SGVhZHMudHN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImhlYWRzQ29udGFpbmVyIiwiaGVpZ2h0Iiwid2lkdGgiLCJoZWFkc0dyaWRDb250YWluZXIiLCJwYWRkaW5nIiwic3BhY2luZyIsImNoYXRIZWFkc0NvbnRhaW5lciIsIm92ZXJmbG93WSIsImNoYXRIZWFkQ29udGFpbmVyIiwiYm9yZGVyUmFkaXVzIiwic2VhcmNoQmFyIiwiQ2hhdEhlYWQiLCJwcm9wcyIsImNsYXNzZXMiLCJ1c2VyIiwidXNlcm5hbWUiLCJzcGxpdCIsIm1hcCIsInMiLCJzbGljZSIsImpvaW4iLCJjaGlsZHJlbiIsIkNoYXRIZWFkcyIsInVzZVRoZW1lIiwidXNlVHJhbnNsYXRpb24iLCJ0IiwiQXJyYXkiLCJmaWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSxTQUFTLEdBQUdDLG9FQUFVLENBQUMsVUFBQUMsS0FBSztBQUFBLFNBQUs7QUFDbkNDLGtCQUFjLEVBQUU7QUFDWkMsWUFBTSxFQUFFLE1BREk7QUFFWkMsV0FBSyxFQUFFO0FBRkssS0FEbUI7QUFLbkNDLHNCQUFrQixFQUFFO0FBQ2hCRixZQUFNLEVBQUUsS0FEUTtBQUVoQkMsV0FBSyxFQUFFLE1BRlM7QUFHaEJFLGFBQU8sRUFBRUwsS0FBSyxDQUFDTSxPQUFOLENBQWMsQ0FBZDtBQUhPLEtBTGU7QUFVbkNDLHNCQUFrQixFQUFFO0FBQ2hCTCxZQUFNLEVBQUUsTUFEUTtBQUVoQkMsV0FBSyxFQUFFLE1BRlM7QUFHaEJLLGVBQVMsRUFBRTtBQUhLLEtBVmU7QUFlbkNDLHFCQUFpQixFQUFFO0FBQ2ZDLGtCQUFZLFlBQUtWLEtBQUssQ0FBQ00sT0FBTixDQUFjLENBQWQsQ0FBTDtBQURHLEtBZmdCO0FBa0JuQ0ssYUFBUyxFQUFFO0FBQ1BS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SSxNQUFDLHNEQUFEO0FBQ0ksYUFBUyxFQUFFWixPQUFPLENBQUNiLGNBRHZCO0FBRUksUUFBSSxNQUZSO0FBR0ksYUFBUyxNQUhiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLSSxNQUFDLHNEQUFEO0FBQ0ksYUFBUyxFQUFFYSxPQUFPLENBQUNQLGtCQUR2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBR0ssSUFBSW9CLEtBQUosQ0FBVSxFQUFWLEVBQWNDLElBQWQsQ0FBbUIsQ0FBbkIsRUFBc0JWLEdBQXRCLENBQTBCO0FBQUEsV0FBTSxNQUFDLFFBQUQ7QUFBVSxVQUFJLEVBQUU7QUFBQ0YsZ0JBQVEsRUFBRTtBQUFYLE9BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBQU47QUFBQSxHQUExQixDQUhMLENBTEosQ0FwQ0osQ0FKSixDQURHLENBQVA7QUF1REgsQ0E1REQ7O0lBQU1PLFM7VUFDWUMsMEQsRUFDQUMsNEQsRUFDRTNCLFM7OztNQUhkeUIsUztBQThEU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2hhdC4zYzQ3OTVhMGM4MmI5ZWFlZWUxYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcywgUGFwZXIsIFRleHRGaWVsZCwgR3JpZCwgdXNlVGhlbWUsIFR5cG9ncmFwaHksIEljb25CdXR0b24sIExpc3QsIExpc3RJdGVtLCBMaXN0SXRlbUF2YXRhciwgQXZhdGFyLCBMaXN0SXRlbVRleHQsIFRvb2x0aXAgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IFNlYXJjaCwgU2VuZCB9IGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucyc7XHJcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XHJcbmltcG9ydCB7IElVc2VyIH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICAgIGhlYWRzQ29udGFpbmVyOiB7XHJcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJ1xyXG4gICAgfSxcclxuICAgIGhlYWRzR3JpZENvbnRhaW5lcjoge1xyXG4gICAgICAgIGhlaWdodDogJzkwJScsXHJcbiAgICAgICAgd2lkdGg6ICcxMDIlJyxcclxuICAgICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpXHJcbiAgICB9LFxyXG4gICAgY2hhdEhlYWRzQ29udGFpbmVyOiB7XHJcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICBvdmVyZmxvd1k6ICdzY3JvbGwnXHJcbiAgICB9LFxyXG4gICAgY2hhdEhlYWRDb250YWluZXI6IHtcclxuICAgICAgICBib3JkZXJSYWRpdXM6IGAke3RoZW1lLnNwYWNpbmcoMSl9cHhgXHJcbiAgICB9LFxyXG4gICAgc2VhcmNoQmFyOiB7XHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJ1xyXG4gICAgfVxyXG59KSk7XHJcblxyXG5pbnRlcmZhY2UgQ2hhdEhlYWRQcm9wcyB7XHJcbiAgICB1c2VyOiBJVXNlclxyXG59XHJcblxyXG5jb25zdCBDaGF0SGVhZDogUmVhY3QuRkM8Q2hhdEhlYWRQcm9wcz4gPSBwcm9wcyA9PiB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGlzdEl0ZW1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNoYXRIZWFkQ29udGFpbmVyfVxyXG4gICAgICAgICAgICBidXR0b25cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgPEF2YXRhcj5cclxuICAgICAgICAgICAgICAgIHtwcm9wcy51c2VyLnVzZXJuYW1lLnNwbGl0KFwiIFwiKS5tYXAocyA9PiBzWzBdKS5zbGljZSgwLCAyKS5qb2luKCcnKX1cclxuICAgICAgICAgICAgPC9BdmF0YXI+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW1BdmF0YXI+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgXHJcbiAgICAgICAgICAgICAgICBwcmltYXJ5PXtwcm9wcy51c2VyLnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgc2Vjb25kYXJ5PXtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgKTtcclxufVxyXG5cclxuaW50ZXJmYWNlIENoYXRIZWFkc1Byb3BzIHt9XHJcblxyXG5jb25zdCBDaGF0SGVhZHM6IFJlYWN0LkZDPENoYXRIZWFkc1Byb3BzPiA9ICgpID0+IHtcclxuICAgIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcclxuICAgIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKTtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgICByZXR1cm4gPD5cclxuICAgICAgICA8UGFwZXJcclxuICAgICAgICAgICAgc3F1YXJlXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWFkc0NvbnRhaW5lcn1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZHNHcmlkQ29udGFpbmVyfVxyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICBzcGFjaW5nPXsyfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1cclxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgICAgICAgICAgICBzcGFjaW5nPXsyfVxyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9J2NlbnRlcidcclxuICAgICAgICAgICAgICAgICAgICB4cz17MTJ9XHJcbiAgICAgICAgICAgICAgICA+ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgeHNcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuc2VhcmNoQmFyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3QoXCJTZWFyY2hcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PSdvdXRsaW5lZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXt0KFwiU2VhcmNoXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VhcmNoIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWFkc0NvbnRhaW5lcn1cclxuICAgICAgICAgICAgICAgICAgICBpdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNoYXRIZWFkc0NvbnRhaW5lcn1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtuZXcgQXJyYXkoNTApLmZpbGwoMCkubWFwKCgpID0+IDxDaGF0SGVhZCB1c2VyPXt7dXNlcm5hbWU6IFwiSm9obiBEb2VcIn19PkhlbGxvIFdvcmxkITwvQ2hhdEhlYWQ+KX1cclxuICAgICAgICAgICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L1BhcGVyPlxyXG4gICAgPC8+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGF0SGVhZHM7Il0sInNvdXJjZVJvb3QiOiIifQ==
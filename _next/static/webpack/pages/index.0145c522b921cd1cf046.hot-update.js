webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Header.tsx":
/*!*******************************!*\
  !*** ./components/Header.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "./utils/index.ts");


var _this = undefined,
    _jsxFileName = "C:\\Users\\tatti\\Documents\\Github\\COMP353\\web\\components\\Header.tsx",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return {
    mainContainer: {
      width: '100%',
      height: '100%'
    },
    headerButton: {
      color: theme.palette.text.primary
    }
  };
});

var HeaderButton = function HeaderButton(props) {
  _s();

  var classes = useStyles();
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
    title: props.title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
    color: "secondary",
    onClick: props.onClick,
    className: classes.headerButton,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }, props.children)));
};

_s(HeaderButton, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = HeaderButton;

var Header = function Header() {
  _s2();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_5__["useTranslation"])(),
      t = _useTranslation.t;

  var classes = useStyles();

  var _useUser = Object(_utils__WEBPACK_IMPORTED_MODULE_6__["useUser"])(),
      _useUser2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useUser, 2),
      _ = _useUser2[0],
      user = _useUser2[1];

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["AppBar"], {
    position: "absolute",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Toolbar"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    className: classes.mainContainer,
    container: true,
    alignItems: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    xs: 6,
    item: true,
    container: true,
    alignItems: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "body1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 29
    }
  }, t('Condos')))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    xs: 6,
    item: true,
    container: true,
    alignItems: "center",
    justify: "flex-end",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 21
    }
  }, function () {
    if (user && user['id']) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(HeaderButton, {
        title: t('Chat'),
        onClick: function onClick() {
          return router.push('/chat');
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 41
        }
      }, __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_3__["Chat"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 45
        }
      })), __jsx(HeaderButton, {
        title: t('Logout'),
        onClick: function onClick() {
          return router.push('/logout');
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 41
        }
      }, __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_3__["MeetingRoom"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 45
        }
      })));
    } else {
      return __jsx(HeaderButton, {
        title: t('Login'),
        onClick: function onClick() {
          return router.push('/login');
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 41
        }
      }, __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_3__["VpnKey"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 45
        }
      }));
    }
  }())))));
};

_s2(Header, "89O2mmrWjGF0P8aTRocAEMDst9k=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"], react_i18next__WEBPACK_IMPORTED_MODULE_5__["useTranslation"], useStyles, _utils__WEBPACK_IMPORTED_MODULE_6__["useUser"]];
});

_c2 = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c, _c2;

$RefreshReg$(_c, "HeaderButton");
$RefreshReg$(_c2, "Header");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIudHN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsIm1haW5Db250YWluZXIiLCJ3aWR0aCIsImhlaWdodCIsImhlYWRlckJ1dHRvbiIsImNvbG9yIiwicGFsZXR0ZSIsInRleHQiLCJwcmltYXJ5IiwiSGVhZGVyQnV0dG9uIiwicHJvcHMiLCJjbGFzc2VzIiwidGl0bGUiLCJvbkNsaWNrIiwiY2hpbGRyZW4iLCJIZWFkZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VUcmFuc2xhdGlvbiIsInQiLCJ1c2VVc2VyIiwiXyIsInVzZXIiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0EsSUFBTUEsU0FBUyxHQUFHQyxvRUFBVSxDQUFDLFVBQUFDLEtBQUs7QUFBQSxTQUFLO0FBQ25DQyxpQkFBYSxFQUFFO0FBQ1hDLFdBQUssRUFBRSxNQURJO0FBRVhDLFlBQU0sRUFBRTtBQUZHLEtBRG9CO0FBS25DQyxnQkFBWSxFQUFFO0FBQ1ZDLFdBQUssRUFBRUwsS0FBSyxDQUFDTSxPQUFOLENBQWNDLElBQWQsQ0FBbUJDO0FBRGhCO0FBTHFCLEdBQUw7QUFBQSxDQUFOLENBQTVCOztBQWVBLElBQU1DLFlBQXlDLEdBQUcsU0FBNUNBLFlBQTRDLENBQUFDLEtBQUssRUFBSTtBQUFBOztBQUN2RCxNQUFNQyxPQUFPLEdBQUdiLFNBQVMsRUFBekI7QUFFQSxTQUNJLE1BQUMsc0RBQUQ7QUFDSSxRQUFJLE1BRFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUdJLE1BQUMseURBQUQ7QUFDSSxTQUFLLEVBQUVZLEtBQUssQ0FBQ0UsS0FEakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUdJLE1BQUMsNERBQUQ7QUFDSSxTQUFLLEVBQUMsV0FEVjtBQUVJLFdBQU8sRUFBRUYsS0FBSyxDQUFDRyxPQUZuQjtBQUdJLGFBQVMsRUFBRUYsT0FBTyxDQUFDUCxZQUh2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0tNLEtBQUssQ0FBQ0ksUUFMWCxDQUhKLENBSEosQ0FESjtBQWlCSCxDQXBCRDs7R0FBTUwsWTtVQUNjWCxTOzs7S0FEZFcsWTs7QUFzQk4sSUFBTU0sTUFBNkIsR0FBRyxTQUFoQ0EsTUFBZ0MsR0FBTTtBQUFBOztBQUN4QyxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUR3Qyx3QkFFMUJDLG9FQUFjLEVBRlk7QUFBQSxNQUVoQ0MsQ0FGZ0MsbUJBRWhDQSxDQUZnQzs7QUFHeEMsTUFBTVIsT0FBTyxHQUFHYixTQUFTLEVBQXpCOztBQUh3QyxpQkFJdEJzQixzREFBTyxFQUplO0FBQUE7QUFBQSxNQUlqQ0MsQ0FKaUM7QUFBQSxNQUk5QkMsSUFKOEI7O0FBTXhDLFNBQU8sbUVBQ0gsTUFBQyx3REFBRDtBQUNJLFlBQVEsRUFBQyxVQURiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FHSSxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHNEQUFEO0FBQ0ksYUFBUyxFQUFFWCxPQUFPLENBQUNWLGFBRHZCO0FBRUksYUFBUyxNQUZiO0FBR0ksY0FBVSxFQUFDLFFBSGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtJLE1BQUMsc0RBQUQ7QUFDSSxNQUFFLEVBQUUsQ0FEUjtBQUVJLFFBQUksTUFGUjtBQUdJLGFBQVMsTUFIYjtBQUlJLGNBQVUsRUFBQyxRQUpmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNSSxNQUFDLHNEQUFEO0FBQ0ksUUFBSSxNQURSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FHSSxNQUFDLDREQUFEO0FBQVksV0FBTyxFQUFDLE9BQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBNkJrQixDQUFDLENBQUMsUUFBRCxDQUE5QixDQUhKLENBTkosQ0FMSixFQWlCSSxNQUFDLHNEQUFEO0FBQ0ksTUFBRSxFQUFFLENBRFI7QUFFSSxRQUFJLE1BRlI7QUFHSSxhQUFTLE1BSGI7QUFJSSxjQUFVLEVBQUMsUUFKZjtBQUtJLFdBQU8sRUFBQyxVQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FRUyxZQUFNO0FBQ0gsUUFBR0csSUFBSSxJQUFJQSxJQUFJLENBQUMsSUFBRCxDQUFmLEVBQXVCO0FBQ25CLGFBQU8sbUVBQ0gsTUFBQyxZQUFEO0FBQ0ksYUFBSyxFQUFFSCxDQUFDLENBQUMsTUFBRCxDQURaO0FBRUksZUFBTyxFQUFFO0FBQUEsaUJBQU1ILE1BQU0sQ0FBQ08sSUFBUCxDQUFZLE9BQVosQ0FBTjtBQUFBLFNBRmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUlJLE1BQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUpKLENBREcsRUFPSCxNQUFDLFlBQUQ7QUFDSSxhQUFLLEVBQUVKLENBQUMsQ0FBQyxRQUFELENBRFo7QUFFSSxlQUFPLEVBQUU7QUFBQSxpQkFBTUgsTUFBTSxDQUFDTyxJQUFQLENBQVksU0FBWixDQUFOO0FBQUEsU0FGYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBSUksTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBSkosQ0FQRyxDQUFQO0FBY0gsS0FmRCxNQWVPO0FBQ0gsYUFDSSxNQUFDLFlBQUQ7QUFDSSxhQUFLLEVBQUVKLENBQUMsQ0FBQyxPQUFELENBRFo7QUFFSSxlQUFPLEVBQUU7QUFBQSxpQkFBTUgsTUFBTSxDQUFDTyxJQUFQLENBQVksUUFBWixDQUFOO0FBQUEsU0FGYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBSUksTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBSkosQ0FESjtBQVFIO0FBQ0osR0ExQkQsRUFSUixDQWpCSixDQURKLENBSEosQ0FERyxDQUFQO0FBZ0VILENBdEVEOztJQUFNUixNO1VBQ2FFLHFELEVBQ0RDLDRELEVBQ0VwQixTLEVBQ0VzQiw4Qzs7O01BSmhCTCxNO0FBd0VTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wMTQ1YzUyMmI5MjFjZDFjZjA0Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQXBwQmFyLCBHcmlkLCBJY29uQnV0dG9uLCBtYWtlU3R5bGVzLCBUb29sYmFyLCBUb29sdGlwLCBUeXBvZ3JhcGh5IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBBY2NvdW50Q2lyY2xlLCBDaGF0LCBNZWV0aW5nUm9vbSwgVnBuS2V5IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xyXG5pbXBvcnQgeyB1c2VVc2VyIH0gZnJvbSAnLi4vdXRpbHMnO1xyXG5pbXBvcnQgeyBURnVuY3Rpb24gfSBmcm9tICdpMThuZXh0JztcclxuXHJcbmludGVyZmFjZSBIZWFkZXJQcm9wcyB7fVxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gICAgbWFpbkNvbnRhaW5lcjoge1xyXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgaGVpZ2h0OiAnMTAwJSdcclxuICAgIH0sXHJcbiAgICBoZWFkZXJCdXR0b246IHtcclxuICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnByaW1hcnlcclxuICAgIH1cclxufSkpO1xyXG5cclxuaW50ZXJmYWNlIEhlYWRlckJ1dHRvblByb3BzIHtcclxuICAgIHRpdGxlOiBzdHJpbmcsXHJcbiAgICBvbkNsaWNrPzogKCkgPT4gdm9pZFxyXG59XHJcblxyXG5jb25zdCBIZWFkZXJCdXR0b246IFJlYWN0LkZDPEhlYWRlckJ1dHRvblByb3BzPiA9IHByb3BzID0+IHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxHcmlkIFxyXG4gICAgICAgICAgICBpdGVtXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8VG9vbHRpcFxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e3Byb3BzLnRpdGxlfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPSdzZWNvbmRhcnknXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17cHJvcHMub25DbGlja31cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGVyQnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgSGVhZGVyOiBSZWFjdC5GQzxIZWFkZXJQcm9wcz4gPSAoKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKTtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IFtfLCB1c2VyXSA9IHVzZVVzZXIoKTtcclxuXHJcbiAgICByZXR1cm4gPD5cclxuICAgICAgICA8QXBwQmFyXHJcbiAgICAgICAgICAgIHBvc2l0aW9uPSdhYnNvbHV0ZSdcclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxUb29sYmFyPlxyXG4gICAgICAgICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubWFpbkNvbnRhaW5lcn1cclxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zPSdjZW50ZXInXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgeHM9ezZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9J2NlbnRlcidcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2JvZHkxJz57dCgnQ29uZG9zJyl9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHhzPXs2fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zPSdjZW50ZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnk9J2ZsZXgtZW5kJ1xyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih1c2VyICYmIHVzZXJbJ2lkJ10pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGVyQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3QoJ0NoYXQnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnL2NoYXQnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hhdCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9IZWFkZXJCdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGVyQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3QoJ0xvZ291dCcpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvbG9nb3V0Jyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lZXRpbmdSb29tIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0hlYWRlckJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGVyQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3QoJ0xvZ2luJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJy9sb2dpbicpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWcG5LZXkgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSGVhZGVyQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICA8L0FwcEJhcj5cclxuICAgIDwvPjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyJdLCJzb3VyY2VSb290IjoiIn0=
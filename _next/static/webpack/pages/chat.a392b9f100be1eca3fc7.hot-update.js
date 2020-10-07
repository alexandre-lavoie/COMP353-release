webpackHotUpdate_N_E("pages/chat",{

/***/ "./pages/chat.tsx":
/*!************************!*\
  !*** ./pages/chat.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils */ "./utils/index.ts");
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Loading */ "./components/Loading.tsx");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Header */ "./components/Header.tsx");
/* harmony import */ var _components_ChatBox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/ChatBox */ "./components/ChatBox.tsx");
/* harmony import */ var _components_ChatHeads__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/ChatHeads */ "./components/ChatHeads.tsx");




var _this = undefined,
    _jsxFileName = "C:\\Users\\tatti\\Documents\\Github\\COMP353\\web\\pages\\chat.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;









var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(function (theme) {
  return {};
});

var ChatPage = function ChatPage() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  var theme = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["useTheme"])();
  var classes = useStyles();

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_5__["useTranslation"])(),
      t = _useTranslation.t;

  var _useUser = Object(_utils__WEBPACK_IMPORTED_MODULE_7__["useUser"])(),
      _useUser2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useUser, 2),
      userLoading = _useUser2[0],
      user = _useUser2[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      messages = _useState[0],
      setMessages = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(_utils__WEBPACK_IMPORTED_MODULE_7__["api"])("directMessages");

            case 2:
              res = _context.sent;

              if (res['direct_messages'] && res['direct_messages'].length > 0) {
                setMessages(res['direct_messages']);
              }

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }, []);
  if (userLoading) return __jsx(_components_Loading__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 28
    }
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    style: {
      height: '91vh'
    },
    container: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    item: true,
    container: true,
    md: 3,
    xs: 6,
    style: {
      height: '100%'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, __jsx(_components_ChatHeads__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    item: true,
    container: true,
    md: 9,
    xs: 6,
    style: {
      height: '100%'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, __jsx(_components_ChatBox__WEBPACK_IMPORTED_MODULE_10__["default"], {
    user: {
      username: "John Doe"
    },
    messages: [["HI", false]],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }))));
};

_s(ChatPage, "vdQlkbXte09gtTQWN3i8benQP0s=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"], _material_ui_core__WEBPACK_IMPORTED_MODULE_6__["useTheme"], useStyles, react_i18next__WEBPACK_IMPORTED_MODULE_5__["useTranslation"], _utils__WEBPACK_IMPORTED_MODULE_7__["useUser"]];
});

_c = ChatPage;
/* harmony default export */ __webpack_exports__["default"] = (ChatPage);

var _c;

$RefreshReg$(_c, "ChatPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhdC50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiQ2hhdFBhZ2UiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VUaGVtZSIsImNsYXNzZXMiLCJ1c2VUcmFuc2xhdGlvbiIsInQiLCJ1c2VVc2VyIiwidXNlckxvYWRpbmciLCJ1c2VyIiwidXNlU3RhdGUiLCJtZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwidXNlRWZmZWN0IiwiYXBpIiwicmVzIiwibGVuZ3RoIiwiaGVpZ2h0IiwidXNlcm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBTUEsU0FBUyxHQUFHQyxvRUFBVSxDQUFDLFVBQUFDLEtBQUs7QUFBQSxTQUFLLEVBQUw7QUFBQSxDQUFOLENBQTVCOztBQUlBLElBQU1DLFFBQWtCLEdBQUcsU0FBckJBLFFBQXFCLEdBQU07QUFBQTs7QUFDN0IsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQU1ILEtBQUssR0FBR0ksa0VBQVEsRUFBdEI7QUFDQSxNQUFNQyxPQUFPLEdBQUdQLFNBQVMsRUFBekI7O0FBSDZCLHdCQUlmUSxvRUFBYyxFQUpDO0FBQUEsTUFJckJDLENBSnFCLG1CQUlyQkEsQ0FKcUI7O0FBQUEsaUJBS0RDLHNEQUFPLEVBTE47QUFBQTtBQUFBLE1BS3RCQyxXQUxzQjtBQUFBLE1BS1RDLElBTFM7O0FBQUEsa0JBTUdDLHNEQUFRLENBQW1CLEVBQW5CLENBTlg7QUFBQSxNQU10QkMsUUFOc0I7QUFBQSxNQU1aQyxXQU5ZOztBQVE3QkMseURBQVMsQ0FBQyxZQUFNO0FBQ1oscUxBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDb0JDLGtEQUFHLENBQUMsZ0JBQUQsQ0FEdkI7O0FBQUE7QUFDUUMsaUJBRFI7O0FBR0ksa0JBQUdBLEdBQUcsQ0FBQyxpQkFBRCxDQUFILElBQTBCQSxHQUFHLENBQUMsaUJBQUQsQ0FBSCxDQUF1QkMsTUFBdkIsR0FBZ0MsQ0FBN0QsRUFBZ0U7QUFDNURKLDJCQUFXLENBQUNHLEdBQUcsQ0FBQyxpQkFBRCxDQUFKLENBQVg7QUFDSDs7QUFMTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURKO0FBU0gsR0FWUSxFQVVOLEVBVk0sQ0FBVDtBQVlBLE1BQUdQLFdBQUgsRUFBZ0IsT0FBTyxNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBUDtBQUVoQixTQUFPLG1FQUNILE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURHLEVBRUgsTUFBQyxzREFBRDtBQUNJLFNBQUssRUFBRTtBQUFFUyxZQUFNLEVBQUU7QUFBVixLQURYO0FBRUksYUFBUyxNQUZiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJSSxNQUFDLHNEQUFEO0FBQ0ksUUFBSSxNQURSO0FBRUksYUFBUyxNQUZiO0FBR0ksTUFBRSxFQUFFLENBSFI7QUFJSSxNQUFFLEVBQUUsQ0FKUjtBQUtJLFNBQUssRUFBRTtBQUFDQSxZQUFNLEVBQUU7QUFBVCxLQUxYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FPSSxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQSixDQUpKLEVBYUksTUFBQyxzREFBRDtBQUNJLFFBQUksTUFEUjtBQUVJLGFBQVMsTUFGYjtBQUdJLE1BQUUsRUFBRSxDQUhSO0FBSUksTUFBRSxFQUFFLENBSlI7QUFLSSxTQUFLLEVBQUU7QUFBQ0EsWUFBTSxFQUFFO0FBQVQsS0FMWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0ksTUFBQyw0REFBRDtBQUFTLFFBQUksRUFBRTtBQUFDQyxjQUFRLEVBQUU7QUFBWCxLQUFmO0FBQXVDLFlBQVEsRUFBRSxDQUFDLENBQUMsSUFBRCxFQUFPLEtBQVAsQ0FBRCxDQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEosQ0FiSixDQUZHLENBQVA7QUEwQkgsQ0FoREQ7O0dBQU1sQixRO1VBQ2FFLHFELEVBQ0RDLDBELEVBQ0VOLFMsRUFDRlEsNEQsRUFDY0UsOEM7OztLQUwxQlAsUTtBQWtEU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2hhdC5hMzkyYjlmMTAwYmUxZWNhM2ZjNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcywgdXNlVGhlbWUsIEdyaWQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IGFwaSwgdXNlVXNlciB9IGZyb20gJy4uL3V0aWxzJztcclxuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vY29tcG9uZW50cy9Mb2FkaW5nJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcic7XHJcbmltcG9ydCBDaGF0Qm94IGZyb20gJy4uL2NvbXBvbmVudHMvQ2hhdEJveCc7XHJcbmltcG9ydCBDaGF0SGVhZHMgZnJvbSAnLi4vY29tcG9uZW50cy9DaGF0SGVhZHMnO1xyXG5pbXBvcnQgeyBJRGlyZWN0TWVzc2FnZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvaW50ZXJmYWNlcyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcblxyXG59KSk7XHJcblxyXG5jb25zdCBDaGF0UGFnZTogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKTtcclxuICAgIGNvbnN0IFt1c2VyTG9hZGluZywgdXNlcl0gPSB1c2VVc2VyKCk7XHJcbiAgICBjb25zdCBbbWVzc2FnZXMsIHNldE1lc3NhZ2VzXSA9IHVzZVN0YXRlPElEaXJlY3RNZXNzYWdlW10+KFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIChcclxuICAgICAgICAgICAgYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGFwaShcImRpcmVjdE1lc3NhZ2VzXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKHJlc1snZGlyZWN0X21lc3NhZ2VzJ10gJiYgcmVzWydkaXJlY3RfbWVzc2FnZXMnXS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TWVzc2FnZXMocmVzWydkaXJlY3RfbWVzc2FnZXMnXSBhcyBJRGlyZWN0TWVzc2FnZVtdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICkoKVxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGlmKHVzZXJMb2FkaW5nKSByZXR1cm4gPExvYWRpbmcvPjtcclxuXHJcbiAgICByZXR1cm4gPD5cclxuICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiAnOTF2aCcgfX1cclxuICAgICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICAgICAgaXRlbVxyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICBtZD17M31cclxuICAgICAgICAgICAgICAgIHhzPXs2fVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3toZWlnaHQ6ICcxMDAlJ319XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxDaGF0SGVhZHMgLz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICAgICAgaXRlbVxyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICBtZD17OX1cclxuICAgICAgICAgICAgICAgIHhzPXs2fVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3toZWlnaHQ6ICcxMDAlJ319XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxDaGF0Qm94IHVzZXI9e3t1c2VybmFtZTogXCJKb2huIERvZVwifX0gbWVzc2FnZXM9e1tbXCJISVwiLCBmYWxzZV1dfSAvPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgPC8+O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhdFBhZ2U7Il0sInNvdXJjZVJvb3QiOiIifQ==
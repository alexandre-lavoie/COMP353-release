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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      chatHeaders = _useState2[0],
      setChatHeaders = _useState2[1];

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

              if (res['direct_messages']) {
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
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var headOrder = [];
    var lastMessages = {};
    messages.reverse().forEach(function (message) {
      var otherUser = message.from.id == user.id ? message.to : message.from;

      if (!lastMessages[otherUser.id]) {
        headOrder.push(otherUser.id);
        lastMessages[otherUser.id] = {
          user: otherUser,
          message: message.message
        };
      }
    });
    setChatHeaders(headOrder.map(function (i) {
      return lastMessages[i];
    }));
  }, [messages]);
  if (userLoading) return __jsx(_components_Loading__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 28
    }
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
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
      lineNumber: 57,
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
      lineNumber: 61,
      columnNumber: 13
    }
  }, __jsx(_components_ChatHeads__WEBPACK_IMPORTED_MODULE_11__["default"], {
    heads: chatHeaders,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
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
      lineNumber: 72,
      columnNumber: 13
    }
  }, __jsx(_components_ChatBox__WEBPACK_IMPORTED_MODULE_10__["default"], {
    user: {
      id: '-1',
      username: "John Doe"
    },
    messages: messages.map(function (m) {
      return [m.message, m.from.id == user.id];
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 17
    }
  }))));
};

_s(ChatPage, "5NpV8ffobLmWTmQWlWK6xJuF+bs=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhdC50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiQ2hhdFBhZ2UiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VUaGVtZSIsImNsYXNzZXMiLCJ1c2VUcmFuc2xhdGlvbiIsInQiLCJ1c2VVc2VyIiwidXNlckxvYWRpbmciLCJ1c2VyIiwidXNlU3RhdGUiLCJtZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwiY2hhdEhlYWRlcnMiLCJzZXRDaGF0SGVhZGVycyIsInVzZUVmZmVjdCIsImFwaSIsInJlcyIsImhlYWRPcmRlciIsImxhc3RNZXNzYWdlcyIsInJldmVyc2UiLCJmb3JFYWNoIiwibWVzc2FnZSIsIm90aGVyVXNlciIsImZyb20iLCJpZCIsInRvIiwicHVzaCIsIm1hcCIsImkiLCJoZWlnaHQiLCJ1c2VybmFtZSIsIm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBTUEsU0FBUyxHQUFHQyxvRUFBVSxDQUFDLFVBQUFDLEtBQUs7QUFBQSxTQUFLLEVBQUw7QUFBQSxDQUFOLENBQTVCOztBQUlBLElBQU1DLFFBQWtCLEdBQUcsU0FBckJBLFFBQXFCLEdBQU07QUFBQTs7QUFDN0IsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQU1ILEtBQUssR0FBR0ksa0VBQVEsRUFBdEI7QUFDQSxNQUFNQyxPQUFPLEdBQUdQLFNBQVMsRUFBekI7O0FBSDZCLHdCQUlmUSxvRUFBYyxFQUpDO0FBQUEsTUFJckJDLENBSnFCLG1CQUlyQkEsQ0FKcUI7O0FBQUEsaUJBS0RDLHNEQUFPLEVBTE47QUFBQTtBQUFBLE1BS3RCQyxXQUxzQjtBQUFBLE1BS1RDLElBTFM7O0FBQUEsa0JBTUdDLHNEQUFRLENBQW1CLEVBQW5CLENBTlg7QUFB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QUksQ0FBQ0EsQ0FBQyxDQUFDVixPQUFILEVBQVlVLENBQUMsQ0FBQ1IsSUFBRixDQUFPQyxFQUFQLElBQWFoQixJQUFJLENBQUNnQixFQUE5QixDQUFKO0FBQUEsS0FBZCxDQUhSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQSixDQWZKLENBRkcsQ0FBUDtBQWlDSCxDQXhFRDs7R0FBTXpCLFE7VUFDYUUscUQsRUFDREMsMEQsRUFDRU4sUyxFQUNGUSw0RCxFQUNjRSw4Qzs7O0tBTDFCUCxRO0FBMEVTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jaGF0Ljk5NmJjMDg5MDg1MTA0NDcyODI2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzLCB1c2VUaGVtZSwgR3JpZCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgYXBpLCB1c2VVc2VyIH0gZnJvbSAnLi4vdXRpbHMnO1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tICcuLi9jb21wb25lbnRzL0xvYWRpbmcnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJztcclxuaW1wb3J0IENoYXRCb3ggZnJvbSAnLi4vY29tcG9uZW50cy9DaGF0Qm94JztcclxuaW1wb3J0IENoYXRIZWFkcyBmcm9tICcuLi9jb21wb25lbnRzL0NoYXRIZWFkcyc7XHJcbmltcG9ydCB7IElDaGF0SGVhZCwgSURpcmVjdE1lc3NhZ2UsIElVc2VyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9pbnRlcmZhY2VzJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuXHJcbn0pKTtcclxuXHJcbmNvbnN0IENoYXRQYWdlOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigpO1xyXG4gICAgY29uc3QgW3VzZXJMb2FkaW5nLCB1c2VyXSA9IHVzZVVzZXIoKTtcclxuICAgIGNvbnN0IFttZXNzYWdlcywgc2V0TWVzc2FnZXNdID0gdXNlU3RhdGU8SURpcmVjdE1lc3NhZ2VbXT4oW10pO1xyXG4gICAgY29uc3QgW2NoYXRIZWFkZXJzLCBzZXRDaGF0SGVhZGVyc10gPSB1c2VTdGF0ZTxJQ2hhdEhlYWRbXT4oW10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgKFxyXG4gICAgICAgICAgICBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgYXBpKFwiZGlyZWN0TWVzc2FnZXNcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYocmVzWydkaXJlY3RfbWVzc2FnZXMnXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldE1lc3NhZ2VzKHJlc1snZGlyZWN0X21lc3NhZ2VzJ10gYXMgSURpcmVjdE1lc3NhZ2VbXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApKClcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCBoZWFkT3JkZXIgPSBbXTtcclxuICAgICAgICBsZXQgbGFzdE1lc3NhZ2VzOiB7W2tleTogc3RyaW5nXTogSUNoYXRIZWFkfSA9IHt9O1xyXG5cclxuICAgICAgICBtZXNzYWdlcy5yZXZlcnNlKCkuZm9yRWFjaChtZXNzYWdlID0+IHtcclxuICAgICAgICAgICAgbGV0IG90aGVyVXNlciA9IChtZXNzYWdlLmZyb20uaWQgPT0gdXNlci5pZCkgPyBtZXNzYWdlLnRvIDogbWVzc2FnZS5mcm9tO1xyXG5cclxuICAgICAgICAgICAgaWYoIWxhc3RNZXNzYWdlc1tvdGhlclVzZXIuaWRdKSB7XHJcbiAgICAgICAgICAgICAgICBoZWFkT3JkZXIucHVzaChvdGhlclVzZXIuaWQpO1xyXG4gICAgICAgICAgICAgICAgbGFzdE1lc3NhZ2VzW290aGVyVXNlci5pZF0gPSB7IHVzZXI6IG90aGVyVXNlciwgbWVzc2FnZTogbWVzc2FnZS5tZXNzYWdlIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2V0Q2hhdEhlYWRlcnMoaGVhZE9yZGVyLm1hcChpID0+IGxhc3RNZXNzYWdlc1tpXSkpO1xyXG4gICAgfSwgW21lc3NhZ2VzXSk7XHJcblxyXG4gICAgaWYodXNlckxvYWRpbmcpIHJldHVybiA8TG9hZGluZy8+O1xyXG5cclxuICAgIHJldHVybiA8PlxyXG4gICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6ICc5MXZoJyB9fVxyXG4gICAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgICAgICBpdGVtXHJcbiAgICAgICAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgICAgICAgIG1kPXszfVxyXG4gICAgICAgICAgICAgICAgeHM9ezZ9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e2hlaWdodDogJzEwMCUnfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPENoYXRIZWFkcyBcclxuICAgICAgICAgICAgICAgICAgICBoZWFkcz17Y2hhdEhlYWRlcnN9IFxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICAgICAgaXRlbVxyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICBtZD17OX1cclxuICAgICAgICAgICAgICAgIHhzPXs2fVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3toZWlnaHQ6ICcxMDAlJ319XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxDaGF0Qm94IFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXI9e3tpZDogJy0xJywgdXNlcm5hbWU6IFwiSm9obiBEb2VcIn19IFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VzPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZXMubWFwKG0gPT4gW20ubWVzc2FnZSwgbS5mcm9tLmlkID09IHVzZXIuaWRdKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICA8Lz47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGF0UGFnZTsiXSwic291cmNlUm9vdCI6IiJ9
webpackHotUpdate_N_E("pages/chat",{

/***/ "./pages/chat.tsx":
/*!************************!*\
  !*** ./pages/chat.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils */ "./utils/index.ts");
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Loading */ "./components/Loading.tsx");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Header */ "./components/Header.tsx");
/* harmony import */ var _components_ChatBox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/ChatBox */ "./components/ChatBox.tsx");
/* harmony import */ var _components_ChatHeads__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/ChatHeads */ "./components/ChatHeads.tsx");
/* harmony import */ var _components_SearchField__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/SearchField */ "./components/SearchField.tsx");





var _this = undefined,
    _jsxFileName = "C:\\Users\\tatti\\Documents\\Github\\COMP353\\web\\pages\\chat.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;










var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])(function (theme) {
  return {};
});

var ChatPage = function ChatPage() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  var theme = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["useTheme"])();
  var classes = useStyles();

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_6__["useTranslation"])(),
      t = _useTranslation.t;

  var _useUser = Object(_utils__WEBPACK_IMPORTED_MODULE_8__["useUser"])(),
      _useUser2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useUser, 2),
      userLoading = _useUser2[0],
      user = _useUser2[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      messages = _useState[0],
      setMessages = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      activeMessages = _useState2[0],
      setActiveMessages = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      activeUser = _useState3[0],
      setActiveUser = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      chatHeaders = _useState4[0],
      setChatHeaders = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      search = _useState5[0],
      setSearch = _useState5[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(_utils__WEBPACK_IMPORTED_MODULE_8__["api"])("directMessages");

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
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
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
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    if (chatHeaders && chatHeaders.length > 0 && !activeUser) {
      setActiveUser(chatHeaders[0].user);
    }
  }, [activeUser, chatHeaders]);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    if (activeUser) {
      var checkMessage = function checkMessage(message) {
        var tc = message.to.id == activeUser.id;

        if (activeUser.id == user.id) {
          return tc;
        } else {
          return tc || message.from.id == activeUser.id;
        }
      };

      setActiveMessages(messages.reverse().filter(function (message) {
        return checkMessage(message);
      }));
    }
  }, [activeUser, messages, user]);
  if (userLoading) return __jsx(_components_Loading__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 28
    }
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    style: {
      height: '91vh'
    },
    container: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    item: true,
    container: true,
    direction: "column",
    md: 3,
    xs: 6,
    style: {
      height: '100%'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 17
    }
  }, __jsx(_components_SearchField__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 21
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    item: true,
    xs: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 17
    }
  }, __jsx(_components_ChatHeads__WEBPACK_IMPORTED_MODULE_12__["default"], {
    heads: chatHeaders,
    onSelect: function onSelect(user) {
      return setActiveUser(user);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 21
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
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
      lineNumber: 112,
      columnNumber: 13
    }
  }, __jsx(_components_ChatBox__WEBPACK_IMPORTED_MODULE_11__["default"], {
    user: activeUser,
    messages: activeMessages.map(function (m) {
      return [m.message, m.from.id == user.id];
    }),
    onSend: /*#__PURE__*/function () {
      var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(message) {
        var newMessage;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(user && activeUser)) {
                  _context2.next = 5;
                  break;
                }

                _context2.next = 3;
                return Object(_utils__WEBPACK_IMPORTED_MODULE_8__["api"])("directMessages", "create", {
                  from: user.id,
                  to: activeUser.id,
                  message: message
                });

              case 3:
                newMessage = _context2.sent;
                setMessages([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(messages), [newMessage]));

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 17
    }
  }))));
};

_s(ChatPage, "iHtKYdmZo9Ni6qoXx7turJcRL8o=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"], _material_ui_core__WEBPACK_IMPORTED_MODULE_7__["useTheme"], useStyles, react_i18next__WEBPACK_IMPORTED_MODULE_6__["useTranslation"], _utils__WEBPACK_IMPORTED_MODULE_8__["useUser"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhdC50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiQ2hhdFBhZ2UiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VUaGVtZSIsImNsYXNzZXMiLCJ1c2VUcmFuc2xhdGlvbiIsInQiLCJ1c2VVc2VyIiwidXNlckxvYWRpbmciLCJ1c2VyIiwidXNlU3RhdGUiLCJtZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwiYWN0aXZlTWVzc2FnZXMiLCJzZXRBY3RpdmVNZXNzYWdlcyIsImFjdGl2ZVVzZXIiLCJzZXRBY3RpdmVVc2VyIiwiY2hhdEhlYWRlcnMiLCJzZXRDaGF0SGVhZGVycyIsInNlYXJjaCIsInNldFNlYXJjaCIsInVzZUVmZmVjdCIsImFwaSIsInJlcyIsImhlYWRPcmRlciIsImxhc3RNZXNzYWdlcyIsInJldmVyc2UiLCJmb3JFYWNoIiwibWVzc2FnZSIsIm90aGVyVXNlciIsImZyb20iLCJpZCIsInRvIiwicHVzaCIsIm1hcCIsImkiLCJsZW5ndGgiLCJjaGVja01lc3NhZ2UiLCJ0YyIsImZpbHRlciIsImhlaWdodCIsIm0iLCJuZXdNZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxvRUFBVSxDQUFDLFVBQUFDLEtBQUs7QUFBQSxTQUFLLEVBQUw7QUFBQSxDQUFOLENBQTVCOztBQUlBLElBQU1DLFFBQWtCLEdBQUcsU0FBckJBLFFBQXFCLEdBQU07QUFBQTs7QUFDN0IsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQU1ILEtBQUssR0FBR0ksa0VBQVEsRUFBdEI7QUFDQSxNQUFNQyxPQUFPLEdBQUdQLFNBQVMsRUFBekI7O0FBSDZCLHdCQUlmUSxvRUFBYyxFQUpD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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBRjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUxWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQSixDQTdCSixDQUZHLENBQVA7QUEwREgsQ0ExSEQ7O0dBQU0xQyxRO1VBQ2FFLHFELEVBQ0RDLDBELEVBQ0VOLFMsRUFDRlEsNEQsRUFDY0UsOEM7OztLQUwxQlAsUTtBQTRIU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2hhdC41ZDM5ZTI5MzA0NTE4NmFiOTVkYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcywgdXNlVGhlbWUsIEdyaWQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IGFwaSwgdXNlVXNlciB9IGZyb20gJy4uL3V0aWxzJztcclxuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vY29tcG9uZW50cy9Mb2FkaW5nJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcic7XHJcbmltcG9ydCBDaGF0Qm94IGZyb20gJy4uL2NvbXBvbmVudHMvQ2hhdEJveCc7XHJcbmltcG9ydCBDaGF0SGVhZHMgZnJvbSAnLi4vY29tcG9uZW50cy9DaGF0SGVhZHMnO1xyXG5pbXBvcnQgeyBJQ2hhdEhlYWQsIElEaXJlY3RNZXNzYWdlLCBJVXNlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvaW50ZXJmYWNlcyc7XHJcbmltcG9ydCBTZWFyY2hGaWVsZCBmcm9tICcuLi9jb21wb25lbnRzL1NlYXJjaEZpZWxkJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuXHJcbn0pKTtcclxuXHJcbmNvbnN0IENoYXRQYWdlOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigpO1xyXG4gICAgY29uc3QgW3VzZXJMb2FkaW5nLCB1c2VyXSA9IHVzZVVzZXIoKTtcclxuICAgIGNvbnN0IFttZXNzYWdlcywgc2V0TWVzc2FnZXNdID0gdXNlU3RhdGU8SURpcmVjdE1lc3NhZ2VbXT4oW10pO1xyXG4gICAgY29uc3QgW2FjdGl2ZU1lc3NhZ2VzLCBzZXRBY3RpdmVNZXNzYWdlc10gPSB1c2VTdGF0ZTxJRGlyZWN0TWVzc2FnZVtdPihbXSk7XHJcbiAgICBjb25zdCBbYWN0aXZlVXNlciwgc2V0QWN0aXZlVXNlcl0gPSB1c2VTdGF0ZTxJVXNlciB8IG51bGw+KG51bGwpO1xyXG4gICAgY29uc3QgW2NoYXRIZWFkZXJzLCBzZXRDaGF0SGVhZGVyc10gPSB1c2VTdGF0ZTxJQ2hhdEhlYWRbXT4oW10pO1xyXG4gICAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIChcclxuICAgICAgICAgICAgYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGFwaShcImRpcmVjdE1lc3NhZ2VzXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKHJlc1snZGlyZWN0X21lc3NhZ2VzJ10pIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRNZXNzYWdlcyhyZXNbJ2RpcmVjdF9tZXNzYWdlcyddIGFzIElEaXJlY3RNZXNzYWdlW10pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKSgpXHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsZXQgaGVhZE9yZGVyID0gW107XHJcbiAgICAgICAgbGV0IGxhc3RNZXNzYWdlczoge1trZXk6IHN0cmluZ106IElDaGF0SGVhZH0gPSB7fTtcclxuXHJcbiAgICAgICAgbWVzc2FnZXMucmV2ZXJzZSgpLmZvckVhY2gobWVzc2FnZSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBvdGhlclVzZXIgPSAobWVzc2FnZS5mcm9tLmlkID09IHVzZXIuaWQpID8gbWVzc2FnZS50byA6IG1lc3NhZ2UuZnJvbTtcclxuXHJcbiAgICAgICAgICAgIGlmKCFsYXN0TWVzc2FnZXNbb3RoZXJVc2VyLmlkXSkge1xyXG4gICAgICAgICAgICAgICAgaGVhZE9yZGVyLnB1c2gob3RoZXJVc2VyLmlkKTtcclxuICAgICAgICAgICAgICAgIGxhc3RNZXNzYWdlc1tvdGhlclVzZXIuaWRdID0geyB1c2VyOiBvdGhlclVzZXIsIG1lc3NhZ2U6IG1lc3NhZ2UubWVzc2FnZSB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNldENoYXRIZWFkZXJzKGhlYWRPcmRlci5tYXAoaSA9PiBsYXN0TWVzc2FnZXNbaV0pKTtcclxuICAgIH0sIFttZXNzYWdlc10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYoY2hhdEhlYWRlcnMgJiYgY2hhdEhlYWRlcnMubGVuZ3RoID4gMCAmJiAhYWN0aXZlVXNlcikge1xyXG4gICAgICAgICAgICBzZXRBY3RpdmVVc2VyKGNoYXRIZWFkZXJzWzBdLnVzZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFthY3RpdmVVc2VyLCBjaGF0SGVhZGVyc10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYoYWN0aXZlVXNlcikge1xyXG4gICAgICAgICAgICBjb25zdCBjaGVja01lc3NhZ2UgPSAobWVzc2FnZTogSURpcmVjdE1lc3NhZ2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCB0YyA9IG1lc3NhZ2UudG8uaWQgPT0gYWN0aXZlVXNlci5pZDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihhY3RpdmVVc2VyLmlkID09IHVzZXIuaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGM7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0YyB8fCBtZXNzYWdlLmZyb20uaWQgPT0gYWN0aXZlVXNlci5pZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc2V0QWN0aXZlTWVzc2FnZXMobWVzc2FnZXMucmV2ZXJzZSgpLmZpbHRlcihtZXNzYWdlID0+IGNoZWNrTWVzc2FnZShtZXNzYWdlKSkpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFthY3RpdmVVc2VyLCBtZXNzYWdlcywgdXNlcl0pO1xyXG5cclxuICAgIGlmKHVzZXJMb2FkaW5nKSByZXR1cm4gPExvYWRpbmcvPjtcclxuXHJcbiAgICByZXR1cm4gPD5cclxuICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiAnOTF2aCcgfX1cclxuICAgICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICAgICAgaXRlbVxyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb249J2NvbHVtbidcclxuICAgICAgICAgICAgICAgIG1kPXszfVxyXG4gICAgICAgICAgICAgICAgeHM9ezZ9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e2hlaWdodDogJzEwMCUnfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgICAgICAgICBpdGVtXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlYXJjaEZpZWxkIFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBcclxuICAgICAgICAgICAgICAgICAgICBpdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgeHNcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8Q2hhdEhlYWRzIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkcz17Y2hhdEhlYWRlcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0PXsodXNlcjogSVVzZXIpID0+IHNldEFjdGl2ZVVzZXIodXNlcil9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICAgICAgaXRlbVxyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICBtZD17OX1cclxuICAgICAgICAgICAgICAgIHhzPXs2fVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3toZWlnaHQ6ICcxMDAlJ319XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxDaGF0Qm94IFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXI9e2FjdGl2ZVVzZXJ9IFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VzPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlTWVzc2FnZXMubWFwKG0gPT4gW20ubWVzc2FnZSwgbS5mcm9tLmlkID09IHVzZXIuaWRdKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBvblNlbmQ9e2FzeW5jIChtZXNzYWdlOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYodXNlciAmJiBhY3RpdmVVc2VyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3TWVzc2FnZTogSURpcmVjdE1lc3NhZ2UgPSAoYXdhaXQgYXBpKFwiZGlyZWN0TWVzc2FnZXNcIiwgXCJjcmVhdGVcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb206IHVzZXIuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG86IGFjdGl2ZVVzZXIuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpIGFzIElEaXJlY3RNZXNzYWdlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldE1lc3NhZ2VzKFsuLi5tZXNzYWdlcywgbmV3TWVzc2FnZV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICA8Lz47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGF0UGFnZTsiXSwic291cmNlUm9vdCI6IiJ9
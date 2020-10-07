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

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      searchUsers = _useState6[0],
      setSearchUsers = _useState6[1];

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

        if (user && activeUser.id == user.id) {
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
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
      var res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return Object(_utils__WEBPACK_IMPORTED_MODULE_8__["api"])('users', 'find', {
                username: search
              });

            case 2:
              res = _context2.sent;

              if (res['users']) {
                setSearchUsers(res['users']);
              }

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  }, [search]);
  if (userLoading) return __jsx(_components_Loading__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 28
    }
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
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
      lineNumber: 98,
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
      lineNumber: 102,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 17
    }
  }, __jsx(_components_SearchField__WEBPACK_IMPORTED_MODULE_13__["default"], {
    value: search,
    onChange: function onChange(e) {
      return setSearch(e.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 21
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    item: true,
    xs: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 17
    }
  }, __jsx(_components_ChatHeads__WEBPACK_IMPORTED_MODULE_12__["default"], {
    heads: search != '' ? searchUsers.map(function (user) {
      return {
        user: user,
        message: ''
      };
    }) : chatHeaders,
    onSelect: function onSelect(user) {
      setActiveUser(user);
      setSearch('');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
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
      lineNumber: 134,
      columnNumber: 13
    }
  }, __jsx(_components_ChatBox__WEBPACK_IMPORTED_MODULE_11__["default"], {
    user: activeUser,
    messages: activeMessages.map(function (m) {
      return [m.message, m.from.id == user.id];
    }),
    onSend: /*#__PURE__*/function () {
      var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(message) {
        var newMessage;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(user && activeUser)) {
                  _context3.next = 5;
                  break;
                }

                _context3.next = 3;
                return Object(_utils__WEBPACK_IMPORTED_MODULE_8__["api"])("directMessages", "create", {
                  from: user.id,
                  to: activeUser.id,
                  message: message
                });

              case 3:
                newMessage = _context3.sent;
                setMessages([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(messages), [newMessage]));

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x) {
        return _ref3.apply(this, arguments);
      };
    }(),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 17
    }
  }))));
};

_s(ChatPage, "pjzSAcD2K59y4xPyBHI9HeEHPNg=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhdC50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiQ2hhdFBhZ2UiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VUaGVtZSIsImNsYXNzZXMiLCJ1c2VUcmFuc2xhdGlvbiIsInQiLCJ1c2VVc2VyIiwidXNlckxvYWRpbmciLCJ1c2VyIiwidXNlU3RhdGUiLCJtZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwiYWN0aXZlTWVzc2FnZXMiLCJzZXRBY3RpdmVNZXNzYWdlcyIsImFjdGl2ZVVzZXIiLCJzZXRBY3RpdmVVc2VyIiwiY2hhdEhlYWRlcnMiLCJzZXRDaGF0SGVhZGVycyIsInNlYXJjaCIsInNldFNlYXJjaCIsInNlYXJjaFVzZXJzIiwic2V0U2VhcmNoVXNlcnMiLCJ1c2VFZmZlY3QiLCJhcGkiLCJyZXMiLCJoZWFkT3JkZXIiLCJsYXN0TWVzc2FnZXMiLCJyZXZlcnNlIiwiZm9yRWFjaCIsIm1lc3NhZ2UiLCJvdGhlclVzZXIiLCJmcm9tIiwiaWQiLCJ0byIsInB1c2giLCJtYXAiLCJpIiwibGVuZ3RoIiwiY2hlY2tNZXNzYWdlIiwidGMiLCJmaWx0ZXIiLCJ1c2VybmFtZSIsImhlaWdodCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm0iLCJuZXdNZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxvRUFBVSxDQUFDLFVBQUFDLEtBQUs7QUFBQSxTQUFLLEVBQUw7QUFBQSxDQUFOLENBQTVCOztBQUlBLElBQU1DLFFBQWtCLEdBQUcsU0FBckJBLFFBQXFCLEdBQU07QUFBQTs7QUFDN0IsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQU1ILEtBQUssR0FBR0ksa0VBQVEs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UTtVQUNhRSxxRCxFQUNEQywwRCxFQUNFTixTLEVBQ0ZRLDRELEVBQ2NFLDhDOzs7S0FMMUJQLFE7QUFrSlNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NoYXQuYTY3YWQxNTNmNDBjMDg3M2U2NzEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMsIHVzZVRoZW1lLCBHcmlkLCBUZXh0RmllbGQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IGFwaSwgdXNlVXNlciB9IGZyb20gJy4uL3V0aWxzJztcclxuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vY29tcG9uZW50cy9Mb2FkaW5nJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcic7XHJcbmltcG9ydCBDaGF0Qm94IGZyb20gJy4uL2NvbXBvbmVudHMvQ2hhdEJveCc7XHJcbmltcG9ydCBDaGF0SGVhZHMgZnJvbSAnLi4vY29tcG9uZW50cy9DaGF0SGVhZHMnO1xyXG5pbXBvcnQgeyBJQ2hhdEhlYWQsIElEaXJlY3RNZXNzYWdlLCBJVXNlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvaW50ZXJmYWNlcyc7XHJcbmltcG9ydCBTZWFyY2hGaWVsZCBmcm9tICcuLi9jb21wb25lbnRzL1NlYXJjaEZpZWxkJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuXHJcbn0pKTtcclxuXHJcbmNvbnN0IENoYXRQYWdlOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigpO1xyXG4gICAgY29uc3QgW3VzZXJMb2FkaW5nLCB1c2VyXSA9IHVzZVVzZXIoKTtcclxuICAgIGNvbnN0IFttZXNzYWdlcywgc2V0TWVzc2FnZXNdID0gdXNlU3RhdGU8SURpcmVjdE1lc3NhZ2VbXT4oW10pO1xyXG4gICAgY29uc3QgW2FjdGl2ZU1lc3NhZ2VzLCBzZXRBY3RpdmVNZXNzYWdlc10gPSB1c2VTdGF0ZTxJRGlyZWN0TWVzc2FnZVtdPihbXSk7XHJcbiAgICBjb25zdCBbYWN0aXZlVXNlciwgc2V0QWN0aXZlVXNlcl0gPSB1c2VTdGF0ZTxJVXNlciB8IG51bGw+KG51bGwpO1xyXG4gICAgY29uc3QgW2NoYXRIZWFkZXJzLCBzZXRDaGF0SGVhZGVyc10gPSB1c2VTdGF0ZTxJQ2hhdEhlYWRbXT4oW10pO1xyXG4gICAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtzZWFyY2hVc2Vycywgc2V0U2VhcmNoVXNlcnNdID0gdXNlU3RhdGU8SVVzZXJbXT4oW10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgKFxyXG4gICAgICAgICAgICBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgYXBpKFwiZGlyZWN0TWVzc2FnZXNcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYocmVzWydkaXJlY3RfbWVzc2FnZXMnXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldE1lc3NhZ2VzKHJlc1snZGlyZWN0X21lc3NhZ2VzJ10gYXMgSURpcmVjdE1lc3NhZ2VbXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApKClcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCBoZWFkT3JkZXIgPSBbXTtcclxuICAgICAgICBsZXQgbGFzdE1lc3NhZ2VzOiB7W2tleTogc3RyaW5nXTogSUNoYXRIZWFkfSA9IHt9O1xyXG5cclxuICAgICAgICBtZXNzYWdlcy5yZXZlcnNlKCkuZm9yRWFjaChtZXNzYWdlID0+IHtcclxuICAgICAgICAgICAgbGV0IG90aGVyVXNlciA9IChtZXNzYWdlLmZyb20uaWQgPT0gdXNlci5pZCkgPyBtZXNzYWdlLnRvIDogbWVzc2FnZS5mcm9tO1xyXG5cclxuICAgICAgICAgICAgaWYoIWxhc3RNZXNzYWdlc1tvdGhlclVzZXIuaWRdKSB7XHJcbiAgICAgICAgICAgICAgICBoZWFkT3JkZXIucHVzaChvdGhlclVzZXIuaWQpO1xyXG4gICAgICAgICAgICAgICAgbGFzdE1lc3NhZ2VzW290aGVyVXNlci5pZF0gPSB7IHVzZXI6IG90aGVyVXNlciwgbWVzc2FnZTogbWVzc2FnZS5tZXNzYWdlIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2V0Q2hhdEhlYWRlcnMoaGVhZE9yZGVyLm1hcChpID0+IGxhc3RNZXNzYWdlc1tpXSkpO1xyXG4gICAgfSwgW21lc3NhZ2VzXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZihjaGF0SGVhZGVycyAmJiBjaGF0SGVhZGVycy5sZW5ndGggPiAwICYmICFhY3RpdmVVc2VyKSB7XHJcbiAgICAgICAgICAgIHNldEFjdGl2ZVVzZXIoY2hhdEhlYWRlcnNbMF0udXNlcik7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2FjdGl2ZVVzZXIsIGNoYXRIZWFkZXJzXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZihhY3RpdmVVc2VyKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrTWVzc2FnZSA9IChtZXNzYWdlOiBJRGlyZWN0TWVzc2FnZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRjID0gbWVzc2FnZS50by5pZCA9PSBhY3RpdmVVc2VyLmlkO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKHVzZXIgJiYgYWN0aXZlVXNlci5pZCA9PSB1c2VyLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRjO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGMgfHwgbWVzc2FnZS5mcm9tLmlkID09IGFjdGl2ZVVzZXIuaWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNldEFjdGl2ZU1lc3NhZ2VzKG1lc3NhZ2VzLnJldmVyc2UoKS5maWx0ZXIobWVzc2FnZSA9PiBjaGVja01lc3NhZ2UobWVzc2FnZSkpKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbYWN0aXZlVXNlciwgbWVzc2FnZXMsIHVzZXJdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIChcclxuICAgICAgICAgICAgYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGFwaSgndXNlcnMnLCAnZmluZCcsIHtcclxuICAgICAgICAgICAgICAgICAgICB1c2VybmFtZTogc2VhcmNoXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmKHJlc1sndXNlcnMnXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFNlYXJjaFVzZXJzKHJlc1sndXNlcnMnXSBhcyBJVXNlcltdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICkoKTtcclxuICAgIH0sIFtzZWFyY2hdKTtcclxuXHJcbiAgICBpZih1c2VyTG9hZGluZykgcmV0dXJuIDxMb2FkaW5nLz47XHJcblxyXG4gICAgcmV0dXJuIDw+XHJcbiAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogJzkxdmgnIH19XHJcbiAgICAgICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgICAgIGl0ZW1cclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uPSdjb2x1bW4nXHJcbiAgICAgICAgICAgICAgICBtZD17M31cclxuICAgICAgICAgICAgICAgIHhzPXs2fVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3toZWlnaHQ6ICcxMDAlJ319XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWFyY2hGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlYXJjaChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIFxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1cclxuICAgICAgICAgICAgICAgICAgICB4c1xyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDaGF0SGVhZHMgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRzPXsoc2VhcmNoICE9ICcnKSA/ICBzZWFyY2hVc2Vycy5tYXAodXNlciA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcjogdXNlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKTogY2hhdEhlYWRlcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0PXsodXNlcjogSVVzZXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZVVzZXIodXNlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTZWFyY2goJycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgICAgIGl0ZW1cclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgbWQ9ezl9XHJcbiAgICAgICAgICAgICAgICB4cz17Nn1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7aGVpZ2h0OiAnMTAwJSd9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8Q2hhdEJveCBcclxuICAgICAgICAgICAgICAgICAgICB1c2VyPXthY3RpdmVVc2VyfSBcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlcz17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZU1lc3NhZ2VzLm1hcChtID0+IFttLm1lc3NhZ2UsIG0uZnJvbS5pZCA9PSB1c2VyLmlkXSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgb25TZW5kPXthc3luYyAobWVzc2FnZTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHVzZXIgJiYgYWN0aXZlVXNlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld01lc3NhZ2U6IElEaXJlY3RNZXNzYWdlID0gKGF3YWl0IGFwaShcImRpcmVjdE1lc3NhZ2VzXCIsIFwiY3JlYXRlXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tOiB1c2VyLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvOiBhY3RpdmVVc2VyLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKSBhcyBJRGlyZWN0TWVzc2FnZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRNZXNzYWdlcyhbLi4ubWVzc2FnZXMsIG5ld01lc3NhZ2VdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgPC8+O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhdFBhZ2U7Il0sInNvdXJjZVJvb3QiOiIifQ==
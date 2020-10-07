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
    function getMessages() {
      return _getMessages.apply(this, arguments);
    }

    function _getMessages() {
      _getMessages = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
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
      }));
      return _getMessages.apply(this, arguments);
    }

    getMessages(); // SUPER INEFFICIENT METHOD. Should make a "newMessage" endpoint.

    var interval = setInterval(function () {
      return getMessages();
    }, 10000);
    return function () {
      clearInterval(interval);
    };
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    if (!userLoading && !user) {
      router.push('/');
    }
  }, [user, userLoading]);
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
    if (search == '') return;

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
      lineNumber: 110,
      columnNumber: 28
    }
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
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
      lineNumber: 114,
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
      lineNumber: 118,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
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
      lineNumber: 129,
      columnNumber: 21
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    item: true,
    xs: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
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
      lineNumber: 138,
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
      lineNumber: 150,
      columnNumber: 13
    }
  }, __jsx(_components_ChatBox__WEBPACK_IMPORTED_MODULE_11__["default"], {
    user: activeUser,
    messages: activeMessages.map(function (m) {
      return [m.message, m.from.id == user.id];
    }),
    onSend: /*#__PURE__*/function () {
      var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(message) {
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
        return _ref2.apply(this, arguments);
      };
    }(),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 17
    }
  }))));
};

_s(ChatPage, "6Dj974VGH6Y935fptXIdmds0Dgc=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhdC50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiQ2hhdFBhZ2UiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VUaGVtZSIsImNsYXNzZXMiLCJ1c2VUcmFuc2xhdGlvbiIsInQiLCJ1c2VVc2VyIiwidXNlckxvYWRpbmciLCJ1c2VyIiwidXNlU3RhdGUiLCJtZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwiYWN0aXZlTWVzc2FnZXMiLCJzZXRBY3RpdmVNZXNzYWdlcyIsImFjdGl2ZVVzZXIiLCJzZXRBY3RpdmVVc2VyIiwiY2hhdEhlYWRlcnMiLCJzZXRDaGF0SGVhZGVycyIsInNlYXJjaCIsInNldFNlYXJjaCIsInNlYXJjaFVzZXJzIiwic2V0U2VhcmNoVXNlcnMiLCJ1c2VFZmZlY3QiLCJnZXRNZXNzYWdlcyIsImFwaSIsInJlcyIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwicHVzaCIsImhlYWRPcmRlciIsImxhc3RNZXNzYWdlcyIsInJldmVyc2UiLCJmb3JFYWNoIiwibWVzc2FnZSIsIm90aGVyVXNlciIsImZyb20iLCJpZCIsInRvIiwibWFwIiwiaSIsImxlbmd0aCIsImNoZWNrTWVzc2FnZSIsInRjIiwiZmlsdGVyIiwidXNlcm5hbWUiLCJoZWlnaHQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJtIiwibmV3TWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBLElBQU1BLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsU0FBSyxFQUFMO0FBQUEsQ0FBTixDQUE1Qjs7QUFJQSxJQUFNQyxRQUFrQixHQUFHLFNBQXJCQSxRQUFxQixHQUFNO0FBQUE7O0FBQzdCLE1B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QkFBT0gsT0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFDRDFCLElBQUksSUFBSU0sVUFEUDtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHVCQUV3Q1Usa0RBQUcsQ0FBQyxnQkFBRCxFQUFtQixRQUFuQixFQUE2QjtBQUNwRVksc0JBQUksRUFBRTVCLElBQUksQ0FBQzZCLEVBRHlEO0FBRXBFQyxvQkFBRSxFQUFFeEIsVUFBVSxDQUFDdUIsRUFGcUQ7QUFHcEVILHlCQUFPLEVBQUVBO0FBSDJELGlCQUE3QixDQUYzQzs7QUFBQTtBQUVJaUIsMEJBRko7QUFRQXhDLDJCQUFXLHdHQUFLRCxRQUFMLElBQWV5QyxVQUFmLEdBQVg7O0FBUkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBRjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUxWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQSixDQXBDSixDQUZHLENBQVA7QUFpRUgsQ0EvSkQ7O0dBQU1wRCxRO1VBQ2FFLHFELEVBQ0RDLDBELEVBQ0VOLFMsRUFDRlEsNEQsRUFDY0UsOEM7OztLQUwxQlAsUTtBQWlLU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2hhdC44NWU1NTBjMWM1YmJiNDM4MGQwYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcywgdXNlVGhlbWUsIEdyaWQsIFRleHRGaWVsZCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgYXBpLCB1c2VVc2VyIH0gZnJvbSAnLi4vdXRpbHMnO1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tICcuLi9jb21wb25lbnRzL0xvYWRpbmcnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJztcclxuaW1wb3J0IENoYXRCb3ggZnJvbSAnLi4vY29tcG9uZW50cy9DaGF0Qm94JztcclxuaW1wb3J0IENoYXRIZWFkcyBmcm9tICcuLi9jb21wb25lbnRzL0NoYXRIZWFkcyc7XHJcbmltcG9ydCB7IElDaGF0SGVhZCwgSURpcmVjdE1lc3NhZ2UsIElVc2VyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9pbnRlcmZhY2VzJztcclxuaW1wb3J0IFNlYXJjaEZpZWxkIGZyb20gJy4uL2NvbXBvbmVudHMvU2VhcmNoRmllbGQnO1xyXG5pbXBvcnQgeyByZW1vdmVMaXN0ZW5lciB9IGZyb20gJ3Byb2Nlc3MnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG5cclxufSkpO1xyXG5cclxuY29uc3QgQ2hhdFBhZ2U6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCk7XHJcbiAgICBjb25zdCBbdXNlckxvYWRpbmcsIHVzZXJdID0gdXNlVXNlcigpO1xyXG4gICAgY29uc3QgW21lc3NhZ2VzLCBzZXRNZXNzYWdlc10gPSB1c2VTdGF0ZTxJRGlyZWN0TWVzc2FnZVtdPihbXSk7XHJcbiAgICBjb25zdCBbYWN0aXZlTWVzc2FnZXMsIHNldEFjdGl2ZU1lc3NhZ2VzXSA9IHVzZVN0YXRlPElEaXJlY3RNZXNzYWdlW10+KFtdKTtcclxuICAgIGNvbnN0IFthY3RpdmVVc2VyLCBzZXRBY3RpdmVVc2VyXSA9IHVzZVN0YXRlPElVc2VyIHwgbnVsbD4obnVsbCk7XHJcbiAgICBjb25zdCBbY2hhdEhlYWRlcnMsIHNldENoYXRIZWFkZXJzXSA9IHVzZVN0YXRlPElDaGF0SGVhZFtdPihbXSk7XHJcbiAgICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3NlYXJjaFVzZXJzLCBzZXRTZWFyY2hVc2Vyc10gPSB1c2VTdGF0ZTxJVXNlcltdPihbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBhc3luYyBmdW5jdGlvbiBnZXRNZXNzYWdlcygpIHtcclxuICAgICAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGFwaShcImRpcmVjdE1lc3NhZ2VzXCIpO1xyXG5cclxuICAgICAgICAgICAgaWYocmVzWydkaXJlY3RfbWVzc2FnZXMnXSkge1xyXG4gICAgICAgICAgICAgICAgc2V0TWVzc2FnZXMocmVzWydkaXJlY3RfbWVzc2FnZXMnXSBhcyBJRGlyZWN0TWVzc2FnZVtdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gXHJcblxyXG4gICAgICAgIGdldE1lc3NhZ2VzKCk7XHJcblxyXG4gICAgICAgIC8vIFNVUEVSIElORUZGSUNJRU5UIE1FVEhPRC4gU2hvdWxkIG1ha2UgYSBcIm5ld01lc3NhZ2VcIiBlbmRwb2ludC5cclxuICAgICAgICBsZXQgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiBnZXRNZXNzYWdlcygpLCAxMDAwMCk7XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgICAgIH07XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZighdXNlckxvYWRpbmcgJiYgIXVzZXIpIHtcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goJy8nKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbdXNlciwgdXNlckxvYWRpbmddKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCBoZWFkT3JkZXIgPSBbXTtcclxuICAgICAgICBsZXQgbGFzdE1lc3NhZ2VzOiB7W2tleTogc3RyaW5nXTogSUNoYXRIZWFkfSA9IHt9O1xyXG5cclxuICAgICAgICBtZXNzYWdlcy5yZXZlcnNlKCkuZm9yRWFjaChtZXNzYWdlID0+IHtcclxuICAgICAgICAgICAgbGV0IG90aGVyVXNlciA9IChtZXNzYWdlLmZyb20uaWQgPT0gdXNlci5pZCkgPyBtZXNzYWdlLnRvIDogbWVzc2FnZS5mcm9tO1xyXG5cclxuICAgICAgICAgICAgaWYoIWxhc3RNZXNzYWdlc1tvdGhlclVzZXIuaWRdKSB7XHJcbiAgICAgICAgICAgICAgICBoZWFkT3JkZXIucHVzaChvdGhlclVzZXIuaWQpO1xyXG4gICAgICAgICAgICAgICAgbGFzdE1lc3NhZ2VzW290aGVyVXNlci5pZF0gPSB7IHVzZXI6IG90aGVyVXNlciwgbWVzc2FnZTogbWVzc2FnZS5tZXNzYWdlIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2V0Q2hhdEhlYWRlcnMoaGVhZE9yZGVyLm1hcChpID0+IGxhc3RNZXNzYWdlc1tpXSkpO1xyXG4gICAgfSwgW21lc3NhZ2VzXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZihjaGF0SGVhZGVycyAmJiBjaGF0SGVhZGVycy5sZW5ndGggPiAwICYmICFhY3RpdmVVc2VyKSB7XHJcbiAgICAgICAgICAgIHNldEFjdGl2ZVVzZXIoY2hhdEhlYWRlcnNbMF0udXNlcik7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2FjdGl2ZVVzZXIsIGNoYXRIZWFkZXJzXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZihhY3RpdmVVc2VyKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrTWVzc2FnZSA9IChtZXNzYWdlOiBJRGlyZWN0TWVzc2FnZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRjID0gbWVzc2FnZS50by5pZCA9PSBhY3RpdmVVc2VyLmlkO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKHVzZXIgJiYgYWN0aXZlVXNlci5pZCA9PSB1c2VyLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRjO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGMgfHwgbWVzc2FnZS5mcm9tLmlkID09IGFjdGl2ZVVzZXIuaWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNldEFjdGl2ZU1lc3NhZ2VzKG1lc3NhZ2VzLnJldmVyc2UoKS5maWx0ZXIobWVzc2FnZSA9PiBjaGVja01lc3NhZ2UobWVzc2FnZSkpKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbYWN0aXZlVXNlciwgbWVzc2FnZXMsIHVzZXJdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmKHNlYXJjaCA9PSAnJykgcmV0dXJuO1xyXG5cclxuICAgICAgICAoXHJcbiAgICAgICAgICAgIGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBhcGkoJ3VzZXJzJywgJ2ZpbmQnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6IHNlYXJjaFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZihyZXNbJ3VzZXJzJ10pIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTZWFyY2hVc2VycyhyZXNbJ3VzZXJzJ10gYXMgSVVzZXJbXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApKCk7XHJcbiAgICB9LCBbc2VhcmNoXSk7XHJcblxyXG4gICAgaWYodXNlckxvYWRpbmcpIHJldHVybiA8TG9hZGluZy8+O1xyXG5cclxuICAgIHJldHVybiA8PlxyXG4gICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6ICc5MXZoJyB9fVxyXG4gICAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgICAgICBpdGVtXHJcbiAgICAgICAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbj0nY29sdW1uJ1xyXG4gICAgICAgICAgICAgICAgbWQ9ezN9XHJcbiAgICAgICAgICAgICAgICB4cz17Nn1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7aGVpZ2h0OiAnMTAwJSd9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8U2VhcmNoRmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWFyY2goZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBcclxuICAgICAgICAgICAgICAgICAgICBpdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgeHNcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8Q2hhdEhlYWRzIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkcz17KHNlYXJjaCAhPSAnJykgPyBzZWFyY2hVc2Vycy5tYXAodXNlciA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcjogdXNlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKSA6IGNoYXRIZWFkZXJzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblNlbGVjdD17KHVzZXI6IElVc2VyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBY3RpdmVVc2VyKHVzZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2VhcmNoKCcnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgICAgICBpdGVtXHJcbiAgICAgICAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgICAgICAgIG1kPXs5fVxyXG4gICAgICAgICAgICAgICAgeHM9ezZ9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e2hlaWdodDogJzEwMCUnfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPENoYXRCb3ggXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcj17YWN0aXZlVXNlcn0gXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZXM9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVNZXNzYWdlcy5tYXAobSA9PiBbbS5tZXNzYWdlLCBtLmZyb20uaWQgPT0gdXNlci5pZF0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uU2VuZD17YXN5bmMgKG1lc3NhZ2U6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih1c2VyICYmIGFjdGl2ZVVzZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdNZXNzYWdlOiBJRGlyZWN0TWVzc2FnZSA9IChhd2FpdCBhcGkoXCJkaXJlY3RNZXNzYWdlc1wiLCBcImNyZWF0ZVwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbTogdXNlci5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bzogYWN0aXZlVXNlci5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSkgYXMgSURpcmVjdE1lc3NhZ2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TWVzc2FnZXMoWy4uLm1lc3NhZ2VzLCBuZXdNZXNzYWdlXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgIDwvPjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXRQYWdlOyJdLCJzb3VyY2VSb290IjoiIn0=
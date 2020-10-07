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
    // SUPER INEFFICIENT METHOD. Should make a "newMessage" endpoint.
    setInterval(function () {
      return Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
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
    }, 10000);
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
      lineNumber: 105,
      columnNumber: 28
    }
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
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
      lineNumber: 109,
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
      lineNumber: 113,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
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
      lineNumber: 124,
      columnNumber: 21
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    item: true,
    xs: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
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
      lineNumber: 133,
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
      lineNumber: 145,
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
      lineNumber: 152,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhdC50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiQ2hhdFBhZ2UiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VUaGVtZSIsImNsYXNzZXMiLCJ1c2VUcmFuc2xhdGlvbiIsInQiLCJ1c2VVc2VyIiwidXNlckxvYWRpbmciLCJ1c2VyIiwidXNlU3RhdGUiLCJtZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwiYWN0aXZlTWVzc2FnZXMiLCJzZXRBY3RpdmVNZXNzYWdlcyIsImFjdGl2ZVVzZXIiLCJzZXRBY3RpdmVVc2VyIiwiY2hhdEhlYWRlcnMiLCJzZXRDaGF0SGVhZGVycyIsInNlYXJjaCIsInNldFNlYXJjaCIsInNlYXJjaFVzZXJzIiwic2V0U2VhcmNoVXNlcnMiLCJ1c2VFZmZlY3QiLCJzZXRJbnRlcnZhbCIsImFwaSIsInJlcyIsInB1c2giLCJoZWFkT3JkZXIiLCJsYXN0TWVzc2FnZXMiLCJyZXZlcnNlIiwiZm9yRWFjaCIsIm1lc3NhZ2UiLCJvdGhlclVzZXIiLCJmcm9tIiwiaWQiLCJ0byIsIm1hcCIsImkiLCJsZW5ndGgiLCJjaGVja01lc3NhZ2UiLCJ0YyIsImZpbHRlciIsInVzZXJuYW1lIiwiaGVpZ2h0IiwiZSIsInRhcmdldCIsInZhbHVlIiwibSIsIm5ld01lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLG9FQUFVLENBQUMsVUFBQUMsS0FBSztBQUFBLFNBQUssRUFBTDtBQUFBLENBQU4sQ0FBNUI7O0FBSUEsSUFBTUMsUUFBa0IsR0FBRyxTQUFyQkEsUUFBcUIsR0FBTTtBQUFBOztBQUM3QixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTUgsS0FB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LFVBQVUsQ0FBQ29CLEVBRnFEO0FBR3BFSCx5QkFBTyxFQUFFQTtBQUgyRCxpQkFBN0IsQ0FGM0M7O0FBQUE7QUFFSWlCLDBCQUZKO0FBUUFyQywyQkFBVyx3R0FBS0QsUUFBTCxJQUFlc0MsVUFBZixHQUFYOztBQVJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUY7O0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FMVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEosQ0FwQ0osQ0FGRyxDQUFQO0FBaUVILENBM0pEOztHQUFNakQsUTtVQUNhRSxxRCxFQUNEQywwRCxFQUNFTixTLEVBQ0ZRLDRELEVBQ2NFLDhDOzs7S0FMMUJQLFE7QUE2SlNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NoYXQuNTlhNzUyMTU3MTM2ODFlMjc1NGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMsIHVzZVRoZW1lLCBHcmlkLCBUZXh0RmllbGQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IGFwaSwgdXNlVXNlciB9IGZyb20gJy4uL3V0aWxzJztcclxuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vY29tcG9uZW50cy9Mb2FkaW5nJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcic7XHJcbmltcG9ydCBDaGF0Qm94IGZyb20gJy4uL2NvbXBvbmVudHMvQ2hhdEJveCc7XHJcbmltcG9ydCBDaGF0SGVhZHMgZnJvbSAnLi4vY29tcG9uZW50cy9DaGF0SGVhZHMnO1xyXG5pbXBvcnQgeyBJQ2hhdEhlYWQsIElEaXJlY3RNZXNzYWdlLCBJVXNlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvaW50ZXJmYWNlcyc7XHJcbmltcG9ydCBTZWFyY2hGaWVsZCBmcm9tICcuLi9jb21wb25lbnRzL1NlYXJjaEZpZWxkJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuXHJcbn0pKTtcclxuXHJcbmNvbnN0IENoYXRQYWdlOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigpO1xyXG4gICAgY29uc3QgW3VzZXJMb2FkaW5nLCB1c2VyXSA9IHVzZVVzZXIoKTtcclxuICAgIGNvbnN0IFttZXNzYWdlcywgc2V0TWVzc2FnZXNdID0gdXNlU3RhdGU8SURpcmVjdE1lc3NhZ2VbXT4oW10pO1xyXG4gICAgY29uc3QgW2FjdGl2ZU1lc3NhZ2VzLCBzZXRBY3RpdmVNZXNzYWdlc10gPSB1c2VTdGF0ZTxJRGlyZWN0TWVzc2FnZVtdPihbXSk7XHJcbiAgICBjb25zdCBbYWN0aXZlVXNlciwgc2V0QWN0aXZlVXNlcl0gPSB1c2VTdGF0ZTxJVXNlciB8IG51bGw+KG51bGwpO1xyXG4gICAgY29uc3QgW2NoYXRIZWFkZXJzLCBzZXRDaGF0SGVhZGVyc10gPSB1c2VTdGF0ZTxJQ2hhdEhlYWRbXT4oW10pO1xyXG4gICAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtzZWFyY2hVc2Vycywgc2V0U2VhcmNoVXNlcnNdID0gdXNlU3RhdGU8SVVzZXJbXT4oW10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgLy8gU1VQRVIgSU5FRkZJQ0lFTlQgTUVUSE9ELiBTaG91bGQgbWFrZSBhIFwibmV3TWVzc2FnZVwiIGVuZHBvaW50LlxyXG4gICAgICAgIHNldEludGVydmFsKCgpID0+XHJcbiAgICAgICAgKFxyXG4gICAgICAgICAgICBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgYXBpKFwiZGlyZWN0TWVzc2FnZXNcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYocmVzWydkaXJlY3RfbWVzc2FnZXMnXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldE1lc3NhZ2VzKHJlc1snZGlyZWN0X21lc3NhZ2VzJ10gYXMgSURpcmVjdE1lc3NhZ2VbXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApKClcclxuICAgICAgICAsIDEwMDAwKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmKCF1c2VyTG9hZGluZyAmJiAhdXNlcikge1xyXG4gICAgICAgICAgICByb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFt1c2VyLCB1c2VyTG9hZGluZ10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IGhlYWRPcmRlciA9IFtdO1xyXG4gICAgICAgIGxldCBsYXN0TWVzc2FnZXM6IHtba2V5OiBzdHJpbmddOiBJQ2hhdEhlYWR9ID0ge307XHJcblxyXG4gICAgICAgIG1lc3NhZ2VzLnJldmVyc2UoKS5mb3JFYWNoKG1lc3NhZ2UgPT4ge1xyXG4gICAgICAgICAgICBsZXQgb3RoZXJVc2VyID0gKG1lc3NhZ2UuZnJvbS5pZCA9PSB1c2VyLmlkKSA/IG1lc3NhZ2UudG8gOiBtZXNzYWdlLmZyb207XHJcblxyXG4gICAgICAgICAgICBpZighbGFzdE1lc3NhZ2VzW290aGVyVXNlci5pZF0pIHtcclxuICAgICAgICAgICAgICAgIGhlYWRPcmRlci5wdXNoKG90aGVyVXNlci5pZCk7XHJcbiAgICAgICAgICAgICAgICBsYXN0TWVzc2FnZXNbb3RoZXJVc2VyLmlkXSA9IHsgdXNlcjogb3RoZXJVc2VyLCBtZXNzYWdlOiBtZXNzYWdlLm1lc3NhZ2UgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzZXRDaGF0SGVhZGVycyhoZWFkT3JkZXIubWFwKGkgPT4gbGFzdE1lc3NhZ2VzW2ldKSk7XHJcbiAgICB9LCBbbWVzc2FnZXNdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmKGNoYXRIZWFkZXJzICYmIGNoYXRIZWFkZXJzLmxlbmd0aCA+IDAgJiYgIWFjdGl2ZVVzZXIpIHtcclxuICAgICAgICAgICAgc2V0QWN0aXZlVXNlcihjaGF0SGVhZGVyc1swXS51c2VyKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbYWN0aXZlVXNlciwgY2hhdEhlYWRlcnNdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmKGFjdGl2ZVVzZXIpIHtcclxuICAgICAgICAgICAgY29uc3QgY2hlY2tNZXNzYWdlID0gKG1lc3NhZ2U6IElEaXJlY3RNZXNzYWdlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGMgPSBtZXNzYWdlLnRvLmlkID09IGFjdGl2ZVVzZXIuaWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYodXNlciAmJiBhY3RpdmVVc2VyLmlkID09IHVzZXIuaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGM7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0YyB8fCBtZXNzYWdlLmZyb20uaWQgPT0gYWN0aXZlVXNlci5pZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc2V0QWN0aXZlTWVzc2FnZXMobWVzc2FnZXMucmV2ZXJzZSgpLmZpbHRlcihtZXNzYWdlID0+IGNoZWNrTWVzc2FnZShtZXNzYWdlKSkpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFthY3RpdmVVc2VyLCBtZXNzYWdlcywgdXNlcl0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYoc2VhcmNoID09ICcnKSByZXR1cm47XHJcblxyXG4gICAgICAgIChcclxuICAgICAgICAgICAgYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGFwaSgndXNlcnMnLCAnZmluZCcsIHtcclxuICAgICAgICAgICAgICAgICAgICB1c2VybmFtZTogc2VhcmNoXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmKHJlc1sndXNlcnMnXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFNlYXJjaFVzZXJzKHJlc1sndXNlcnMnXSBhcyBJVXNlcltdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICkoKTtcclxuICAgIH0sIFtzZWFyY2hdKTtcclxuXHJcbiAgICBpZih1c2VyTG9hZGluZykgcmV0dXJuIDxMb2FkaW5nLz47XHJcblxyXG4gICAgcmV0dXJuIDw+XHJcbiAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogJzkxdmgnIH19XHJcbiAgICAgICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgICAgIGl0ZW1cclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uPSdjb2x1bW4nXHJcbiAgICAgICAgICAgICAgICBtZD17M31cclxuICAgICAgICAgICAgICAgIHhzPXs2fVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3toZWlnaHQ6ICcxMDAlJ319XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWFyY2hGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlYXJjaChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIFxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1cclxuICAgICAgICAgICAgICAgICAgICB4c1xyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDaGF0SGVhZHMgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRzPXsoc2VhcmNoICE9ICcnKSA/IHNlYXJjaFVzZXJzLm1hcCh1c2VyID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyOiB1c2VyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJydcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkpIDogY2hhdEhlYWRlcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0PXsodXNlcjogSVVzZXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZVVzZXIodXNlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTZWFyY2goJycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgICAgIGl0ZW1cclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgbWQ9ezl9XHJcbiAgICAgICAgICAgICAgICB4cz17Nn1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7aGVpZ2h0OiAnMTAwJSd9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8Q2hhdEJveCBcclxuICAgICAgICAgICAgICAgICAgICB1c2VyPXthY3RpdmVVc2VyfSBcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlcz17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZU1lc3NhZ2VzLm1hcChtID0+IFttLm1lc3NhZ2UsIG0uZnJvbS5pZCA9PSB1c2VyLmlkXSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgb25TZW5kPXthc3luYyAobWVzc2FnZTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHVzZXIgJiYgYWN0aXZlVXNlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld01lc3NhZ2U6IElEaXJlY3RNZXNzYWdlID0gKGF3YWl0IGFwaShcImRpcmVjdE1lc3NhZ2VzXCIsIFwiY3JlYXRlXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tOiB1c2VyLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvOiBhY3RpdmVVc2VyLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKSBhcyBJRGlyZWN0TWVzc2FnZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRNZXNzYWdlcyhbLi4ubWVzc2FnZXMsIG5ld01lc3NhZ2VdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgPC8+O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhdFBhZ2U7Il0sInNvdXJjZVJvb3QiOiIifQ==
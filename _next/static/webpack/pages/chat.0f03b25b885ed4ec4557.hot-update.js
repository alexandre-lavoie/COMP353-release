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





var _this = undefined,
    _jsxFileName = "C:\\Users\\tatti\\Documents\\Github\\COMP353\\web\\pages\\chat.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;









var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])(function (theme) {
  return {
    searchBar: {
      width: '100%'
    }
  };
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
      lineNumber: 80,
      columnNumber: 28
    }
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
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
      lineNumber: 84,
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
      lineNumber: 88,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TextField"], {
    placeholder: t('Search'),
    variant: "outlined",
    value: search,
    onChange: function onChange(e) {
      return setSearch(e.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 21
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    item: true,
    xs: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
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
      lineNumber: 110,
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
      lineNumber: 116,
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
      lineNumber: 123,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhdC50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwic2VhcmNoQmFyIiwid2lkdGgiLCJDaGF0UGFnZSIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVRoZW1lIiwiY2xhc3NlcyIsInVzZVRyYW5zbGF0aW9uIiwidCIsInVzZVVzZXIiLCJ1c2VyTG9hZGluZyIsInVzZXIiLCJ1c2VTdGF0ZSIsIm1lc3NhZ2VzIiwic2V0TWVzc2FnZXMiLCJhY3RpdmVNZXNzYWdlcyIsInNldEFjdGl2ZU1lc3NhZ2VzIiwiYWN0aXZlVXNlciIsInNldEFjdGl2ZVVzZXIiLCJjaGF0SGVhZGVycyIsInNldENoYXRIZWFkZXJzIiwic2VhcmNoIiwic2V0U2VhcmNoIiwidXNlRWZmZWN0IiwiYXBpIiwicmVzIiwiaGVhZE9yZGVyIiwibGFzdE1lc3NhZ2VzIiwicmV2ZXJzZSIsImZvckVhY2giLCJtZXNzYWdlIiwib3RoZXJVc2VyIiwiZnJvbSIsImlkIiwidG8iLCJwdXNoIiwibWFwIiwiaSIsImxlbmd0aCIsImNoZWNrTWVzc2FnZSIsInRjIiwiZmlsdGVyIiwiaGVpZ2h0IiwiZSIsInRhcmdldCIsInZhbHVlIiwibSIsIm5ld01lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSxTQUFTLEdBQUdDLG9FQUFVLENBQUMsVUFBQUMsS0FBSztBQUFBLFNBQUs7QUFDbkNDLGFBQVMsRUFBRTtBQUNQQyxXQUFLLEVBQUU7QUFEQTtBQUR3QixHQUFMO0FBQUEsQ0FBTixDQUE1Qjs7QUFNQSxJQUFNQyxRQUFrQixHQUFHLFNBQXJCQSxRQUFxQixHQUFNO0FBQUE7O0FBQzdCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxNQUFNTCxL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VUFEUDtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHVCQUV3Q08sa0RBQUcsQ0FBQyxnQkFBRCxFQUFtQixRQUFuQixFQUE2QjtBQUNwRVEsc0JBQUksRUFBRXJCLElBQUksQ0FBQ3NCLEVBRHlEO0FBRXBFQyxvQkFBRSxFQUFFakIsVUFBVSxDQUFDZ0IsRUFGcUQ7QUFHcEVILHlCQUFPLEVBQUVBO0FBSDJELGlCQUE3QixDQUYzQzs7QUFBQTtBQUVJaUIsMEJBRko7QUFRQWpDLDJCQUFXLHdHQUFLRCxRQUFMLElBQWVrQyxVQUFmLEdBQVg7O0FBUkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBRjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUxWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQSixDQWhDSixDQUZHLENBQVA7QUE2REgsQ0E3SEQ7O0dBQU03QyxRO1VBQ2FFLHFELEVBQ0RDLDBELEVBQ0VSLFMsRUFDRlUsNEQsRUFDY0UsOEM7OztLQUwxQlAsUTtBQStIU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2hhdC4wZjAzYjI1Yjg4NWVkNGVjNDU1Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcywgdXNlVGhlbWUsIEdyaWQsIFRleHRGaWVsZCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgYXBpLCB1c2VVc2VyIH0gZnJvbSAnLi4vdXRpbHMnO1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tICcuLi9jb21wb25lbnRzL0xvYWRpbmcnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJztcclxuaW1wb3J0IENoYXRCb3ggZnJvbSAnLi4vY29tcG9uZW50cy9DaGF0Qm94JztcclxuaW1wb3J0IENoYXRIZWFkcyBmcm9tICcuLi9jb21wb25lbnRzL0NoYXRIZWFkcyc7XHJcbmltcG9ydCB7IElDaGF0SGVhZCwgSURpcmVjdE1lc3NhZ2UsIElVc2VyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9pbnRlcmZhY2VzJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICAgIHNlYXJjaEJhcjoge1xyXG4gICAgICAgIHdpZHRoOiAnMTAwJSdcclxuICAgIH1cclxufSkpO1xyXG5cclxuY29uc3QgQ2hhdFBhZ2U6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCk7XHJcbiAgICBjb25zdCBbdXNlckxvYWRpbmcsIHVzZXJdID0gdXNlVXNlcigpO1xyXG4gICAgY29uc3QgW21lc3NhZ2VzLCBzZXRNZXNzYWdlc10gPSB1c2VTdGF0ZTxJRGlyZWN0TWVzc2FnZVtdPihbXSk7XHJcbiAgICBjb25zdCBbYWN0aXZlTWVzc2FnZXMsIHNldEFjdGl2ZU1lc3NhZ2VzXSA9IHVzZVN0YXRlPElEaXJlY3RNZXNzYWdlW10+KFtdKTtcclxuICAgIGNvbnN0IFthY3RpdmVVc2VyLCBzZXRBY3RpdmVVc2VyXSA9IHVzZVN0YXRlPElVc2VyIHwgbnVsbD4obnVsbCk7XHJcbiAgICBjb25zdCBbY2hhdEhlYWRlcnMsIHNldENoYXRIZWFkZXJzXSA9IHVzZVN0YXRlPElDaGF0SGVhZFtdPihbXSk7XHJcbiAgICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgKFxyXG4gICAgICAgICAgICBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgYXBpKFwiZGlyZWN0TWVzc2FnZXNcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYocmVzWydkaXJlY3RfbWVzc2FnZXMnXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldE1lc3NhZ2VzKHJlc1snZGlyZWN0X21lc3NhZ2VzJ10gYXMgSURpcmVjdE1lc3NhZ2VbXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApKClcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCBoZWFkT3JkZXIgPSBbXTtcclxuICAgICAgICBsZXQgbGFzdE1lc3NhZ2VzOiB7W2tleTogc3RyaW5nXTogSUNoYXRIZWFkfSA9IHt9O1xyXG5cclxuICAgICAgICBtZXNzYWdlcy5yZXZlcnNlKCkuZm9yRWFjaChtZXNzYWdlID0+IHtcclxuICAgICAgICAgICAgbGV0IG90aGVyVXNlciA9IChtZXNzYWdlLmZyb20uaWQgPT0gdXNlci5pZCkgPyBtZXNzYWdlLnRvIDogbWVzc2FnZS5mcm9tO1xyXG5cclxuICAgICAgICAgICAgaWYoIWxhc3RNZXNzYWdlc1tvdGhlclVzZXIuaWRdKSB7XHJcbiAgICAgICAgICAgICAgICBoZWFkT3JkZXIucHVzaChvdGhlclVzZXIuaWQpO1xyXG4gICAgICAgICAgICAgICAgbGFzdE1lc3NhZ2VzW290aGVyVXNlci5pZF0gPSB7IHVzZXI6IG90aGVyVXNlciwgbWVzc2FnZTogbWVzc2FnZS5tZXNzYWdlIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2V0Q2hhdEhlYWRlcnMoaGVhZE9yZGVyLm1hcChpID0+IGxhc3RNZXNzYWdlc1tpXSkpO1xyXG4gICAgfSwgW21lc3NhZ2VzXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZihjaGF0SGVhZGVycyAmJiBjaGF0SGVhZGVycy5sZW5ndGggPiAwICYmICFhY3RpdmVVc2VyKSB7XHJcbiAgICAgICAgICAgIHNldEFjdGl2ZVVzZXIoY2hhdEhlYWRlcnNbMF0udXNlcik7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2FjdGl2ZVVzZXIsIGNoYXRIZWFkZXJzXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZihhY3RpdmVVc2VyKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrTWVzc2FnZSA9IChtZXNzYWdlOiBJRGlyZWN0TWVzc2FnZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRjID0gbWVzc2FnZS50by5pZCA9PSBhY3RpdmVVc2VyLmlkO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKGFjdGl2ZVVzZXIuaWQgPT0gdXNlci5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0YztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRjIHx8IG1lc3NhZ2UuZnJvbS5pZCA9PSBhY3RpdmVVc2VyLmlkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzZXRBY3RpdmVNZXNzYWdlcyhtZXNzYWdlcy5yZXZlcnNlKCkuZmlsdGVyKG1lc3NhZ2UgPT4gY2hlY2tNZXNzYWdlKG1lc3NhZ2UpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2FjdGl2ZVVzZXIsIG1lc3NhZ2VzLCB1c2VyXSk7XHJcblxyXG4gICAgaWYodXNlckxvYWRpbmcpIHJldHVybiA8TG9hZGluZy8+O1xyXG5cclxuICAgIHJldHVybiA8PlxyXG4gICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6ICc5MXZoJyB9fVxyXG4gICAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgICAgICBpdGVtXHJcbiAgICAgICAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbj0nY29sdW1uJ1xyXG4gICAgICAgICAgICAgICAgbWQ9ezN9XHJcbiAgICAgICAgICAgICAgICB4cz17Nn1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7aGVpZ2h0OiAnMTAwJSd9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0KCdTZWFyY2gnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD0nb3V0bGluZWQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2h9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VhcmNoKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgXHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIHhzXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPENoYXRIZWFkcyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZHM9e2NoYXRIZWFkZXJzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblNlbGVjdD17KHVzZXI6IElVc2VyKSA9PiBzZXRBY3RpdmVVc2VyKHVzZXIpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgICAgIGl0ZW1cclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgbWQ9ezl9XHJcbiAgICAgICAgICAgICAgICB4cz17Nn1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7aGVpZ2h0OiAnMTAwJSd9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8Q2hhdEJveCBcclxuICAgICAgICAgICAgICAgICAgICB1c2VyPXthY3RpdmVVc2VyfSBcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlcz17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZU1lc3NhZ2VzLm1hcChtID0+IFttLm1lc3NhZ2UsIG0uZnJvbS5pZCA9PSB1c2VyLmlkXSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgb25TZW5kPXthc3luYyAobWVzc2FnZTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHVzZXIgJiYgYWN0aXZlVXNlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld01lc3NhZ2U6IElEaXJlY3RNZXNzYWdlID0gKGF3YWl0IGFwaShcImRpcmVjdE1lc3NhZ2VzXCIsIFwiY3JlYXRlXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tOiB1c2VyLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvOiBhY3RpdmVVc2VyLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKSBhcyBJRGlyZWN0TWVzc2FnZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRNZXNzYWdlcyhbLi4ubWVzc2FnZXMsIG5ld01lc3NhZ2VdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgPC8+O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhdFBhZ2U7Il0sInNvdXJjZVJvb3QiOiIifQ==
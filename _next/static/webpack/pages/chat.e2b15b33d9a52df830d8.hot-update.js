webpackHotUpdate_N_E("pages/chat",{

/***/ "./components/SearchField.tsx":
/*!************************************!*\
  !*** ./components/SearchField.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\tatti\\Documents\\Github\\COMP353\\web\\components\\SearchField.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    container: {
      width: '100%',
      padding: theme.spacing(2)
    },
    bar: {
      width: '100%'
    }
  };
});

var SearchField = function SearchField(props) {
  _s();

  var theme = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["useTheme"])();

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
      t = _useTranslation.t;

  var classes = useStyles();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Paper"], {
    square: true,
    className: classes.container,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    className: classes.bar,
    value: props.value,
    onChange: props.onChange,
    placeholder: t("Search"),
    variant: "outlined",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  })));
};

_s(SearchField, "0lE5HiGHZKm1gw4L3pmdFJuGw80=", false, function () {
  return [_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["useTheme"], react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"], useStyles];
});

_c = SearchField;
/* harmony default export */ __webpack_exports__["default"] = (SearchField);

var _c;

$RefreshReg$(_c, "SearchField");

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

/***/ }),

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
    value: search,
    onChange: function onChange(e) {
      return setSearch(e.target.value);
    },
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
      lineNumber: 103,
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
      lineNumber: 107,
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
      lineNumber: 113,
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
      lineNumber: 120,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2hGaWVsZC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NoYXQudHN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNvbnRhaW5lciIsIndpZHRoIiwicGFkZGluZyIsInNwYWNpbmciLCJiYXIiLCJTZWFyY2hGaWVsZCIsInByb3BzIiwidXNlVGhlbWUiLCJ1c2VUcmFuc2xhdGlvbiIsInQiLCJjbGFzc2VzIiwidmFsdWUiLCJvbkNoYW5nZSIsIkNoYXRQYWdlIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlVXNlciIsInVzZXJMb2FkaW5nIiwidXNlciIsInVzZVN0YXRlIiwibWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsImFjdGl2ZU1lc3NhZ2VzIiwic2V0QWN0aXZlTWVzc2FnZXMiLCJhY3RpdmVVc2VyIiwic2V0QWN0aXZlVXNlciIsImNoYXRIZWFkZXJzIiwic2V0Q2hhdEhlYWRlcnMiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJ1c2VFZmZlY3QiLCJhcGkiLCJyZXMiLCJoZWFkT3JkZXIiLCJsYXN0TWVzc2FnZXMiLCJyZXZlcnNlIiwiZm9yRWFjaCIsIm1lc3NhZ2UiLCJvdGhlclVzZXIiLCJmcm9tIiwiaWQiLCJ0byIsInB1c2giLCJtYXAiLCJpIiwibGVuZ3RoIiwiY2hlY2tNZXNzYWdlIiwidGMiLCJmaWx0ZXIiLCJoZWlnaHQiLCJlIiwidGFyZ2V0IiwibSIsIm5ld01lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxvRUFBVSxDQUFDLFVBQUFDLEtBQUs7QUFBQSxTQUFLO0FBQ25DQyxhQUFTLEVBQUU7QUFDUEMsV0FBSyxFQUFFLE1BREE7QUFFUEMsYUFBTyxFQUFFSCxLQUFLLENBQUNJLE9BQU4sQ0FBYyxDQUFkO0FBRkYsS0FEd0I7QUFLbkNDLE9B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SUFBSU0sVUFEUDtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHVCQUV3Q08sa0RBQUcsQ0FBQyxnQkFBRCxFQUFtQixRQUFuQixFQUE2QjtBQUNwRVEsc0JBQUksRUFBRXJCLElBQUksQ0FBQ3NCLEVBRHlEO0FBRXBFQyxvQkFBRSxFQUFFakIsVUFBVSxDQUFDZ0IsRUFGcUQ7QUFHcEVILHlCQUFPLEVBQUVBO0FBSDJELGlCQUE3QixDQUYzQzs7QUFBQTtBQUVJZ0IsMEJBRko7QUFRQWhDLDJCQUFXLHdHQUFLRCxRQUFMLElBQWVpQyxVQUFmLEdBQVg7O0FBUkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBRjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUxWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQSixDQTlCSixDQUZHLENBQVA7QUEyREgsQ0EzSEQ7O0dBQU14QyxRO1VBQ2FFLHFELEVBQ0RSLDBELEVBQ0VWLFMsRUFDRlcsNEQsRUFDY1EsOEM7OztLQUwxQkgsUTtBQTZIU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2hhdC5lMmIxNWIzM2Q5YTUyZGY4MzBkOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENoYW5nZUV2ZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzLCBQYXBlciwgVGV4dEZpZWxkLCB1c2VUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICAgIGNvbnRhaW5lcjoge1xyXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyKVxyXG4gICAgfSxcclxuICAgIGJhcjoge1xyXG4gICAgICAgIHdpZHRoOiAnMTAwJSdcclxuICAgIH1cclxufSkpO1xyXG5cclxuaW50ZXJmYWNlIFNlYXJjaEZpZWxkUHJvcHMge1xyXG4gICAgdmFsdWU6IGFueSxcclxuICAgIG9uQ2hhbmdlOiAoZTogQ2hhbmdlRXZlbnQpID0+IHZvaWRcclxufVxyXG5cclxuY29uc3QgU2VhcmNoRmllbGQ6IFJlYWN0LkZDPFNlYXJjaEZpZWxkUHJvcHM+ID0gcHJvcHMgPT4ge1xyXG4gICAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xyXG4gICAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigpO1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICAgIHJldHVybiA8PlxyXG4gICAgICAgIDxQYXBlclxyXG4gICAgICAgICAgICBzcXVhcmVcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGQgXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYmFyfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLm9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3QoXCJTZWFyY2hcIil9XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PSdvdXRsaW5lZCdcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L1BhcGVyPlxyXG4gICAgPC8+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hGaWVsZDsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzLCB1c2VUaGVtZSwgR3JpZCwgVGV4dEZpZWxkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBhcGksIHVzZVVzZXIgfSBmcm9tICcuLi91dGlscyc7XHJcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4uL2NvbXBvbmVudHMvTG9hZGluZyc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInO1xyXG5pbXBvcnQgQ2hhdEJveCBmcm9tICcuLi9jb21wb25lbnRzL0NoYXRCb3gnO1xyXG5pbXBvcnQgQ2hhdEhlYWRzIGZyb20gJy4uL2NvbXBvbmVudHMvQ2hhdEhlYWRzJztcclxuaW1wb3J0IHsgSUNoYXRIZWFkLCBJRGlyZWN0TWVzc2FnZSwgSVVzZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL2ludGVyZmFjZXMnO1xyXG5pbXBvcnQgU2VhcmNoRmllbGQgZnJvbSAnLi4vY29tcG9uZW50cy9TZWFyY2hGaWVsZCc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcblxyXG59KSk7XHJcblxyXG5jb25zdCBDaGF0UGFnZTogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKTtcclxuICAgIGNvbnN0IFt1c2VyTG9hZGluZywgdXNlcl0gPSB1c2VVc2VyKCk7XHJcbiAgICBjb25zdCBbbWVzc2FnZXMsIHNldE1lc3NhZ2VzXSA9IHVzZVN0YXRlPElEaXJlY3RNZXNzYWdlW10+KFtdKTtcclxuICAgIGNvbnN0IFthY3RpdmVNZXNzYWdlcywgc2V0QWN0aXZlTWVzc2FnZXNdID0gdXNlU3RhdGU8SURpcmVjdE1lc3NhZ2VbXT4oW10pO1xyXG4gICAgY29uc3QgW2FjdGl2ZVVzZXIsIHNldEFjdGl2ZVVzZXJdID0gdXNlU3RhdGU8SVVzZXIgfCBudWxsPihudWxsKTtcclxuICAgIGNvbnN0IFtjaGF0SGVhZGVycywgc2V0Q2hhdEhlYWRlcnNdID0gdXNlU3RhdGU8SUNoYXRIZWFkW10+KFtdKTtcclxuICAgIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAoXHJcbiAgICAgICAgICAgIGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBhcGkoXCJkaXJlY3RNZXNzYWdlc1wiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihyZXNbJ2RpcmVjdF9tZXNzYWdlcyddKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TWVzc2FnZXMocmVzWydkaXJlY3RfbWVzc2FnZXMnXSBhcyBJRGlyZWN0TWVzc2FnZVtdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICkoKVxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IGhlYWRPcmRlciA9IFtdO1xyXG4gICAgICAgIGxldCBsYXN0TWVzc2FnZXM6IHtba2V5OiBzdHJpbmddOiBJQ2hhdEhlYWR9ID0ge307XHJcblxyXG4gICAgICAgIG1lc3NhZ2VzLnJldmVyc2UoKS5mb3JFYWNoKG1lc3NhZ2UgPT4ge1xyXG4gICAgICAgICAgICBsZXQgb3RoZXJVc2VyID0gKG1lc3NhZ2UuZnJvbS5pZCA9PSB1c2VyLmlkKSA/IG1lc3NhZ2UudG8gOiBtZXNzYWdlLmZyb207XHJcblxyXG4gICAgICAgICAgICBpZighbGFzdE1lc3NhZ2VzW290aGVyVXNlci5pZF0pIHtcclxuICAgICAgICAgICAgICAgIGhlYWRPcmRlci5wdXNoKG90aGVyVXNlci5pZCk7XHJcbiAgICAgICAgICAgICAgICBsYXN0TWVzc2FnZXNbb3RoZXJVc2VyLmlkXSA9IHsgdXNlcjogb3RoZXJVc2VyLCBtZXNzYWdlOiBtZXNzYWdlLm1lc3NhZ2UgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzZXRDaGF0SGVhZGVycyhoZWFkT3JkZXIubWFwKGkgPT4gbGFzdE1lc3NhZ2VzW2ldKSk7XHJcbiAgICB9LCBbbWVzc2FnZXNdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmKGNoYXRIZWFkZXJzICYmIGNoYXRIZWFkZXJzLmxlbmd0aCA+IDAgJiYgIWFjdGl2ZVVzZXIpIHtcclxuICAgICAgICAgICAgc2V0QWN0aXZlVXNlcihjaGF0SGVhZGVyc1swXS51c2VyKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbYWN0aXZlVXNlciwgY2hhdEhlYWRlcnNdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmKGFjdGl2ZVVzZXIpIHtcclxuICAgICAgICAgICAgY29uc3QgY2hlY2tNZXNzYWdlID0gKG1lc3NhZ2U6IElEaXJlY3RNZXNzYWdlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGMgPSBtZXNzYWdlLnRvLmlkID09IGFjdGl2ZVVzZXIuaWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoYWN0aXZlVXNlci5pZCA9PSB1c2VyLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRjO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGMgfHwgbWVzc2FnZS5mcm9tLmlkID09IGFjdGl2ZVVzZXIuaWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNldEFjdGl2ZU1lc3NhZ2VzKG1lc3NhZ2VzLnJldmVyc2UoKS5maWx0ZXIobWVzc2FnZSA9PiBjaGVja01lc3NhZ2UobWVzc2FnZSkpKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbYWN0aXZlVXNlciwgbWVzc2FnZXMsIHVzZXJdKTtcclxuXHJcbiAgICBpZih1c2VyTG9hZGluZykgcmV0dXJuIDxMb2FkaW5nLz47XHJcblxyXG4gICAgcmV0dXJuIDw+XHJcbiAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogJzkxdmgnIH19XHJcbiAgICAgICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgICAgIGl0ZW1cclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uPSdjb2x1bW4nXHJcbiAgICAgICAgICAgICAgICBtZD17M31cclxuICAgICAgICAgICAgICAgIHhzPXs2fVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3toZWlnaHQ6ICcxMDAlJ319XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWFyY2hGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlYXJjaChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIFxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1cclxuICAgICAgICAgICAgICAgICAgICB4c1xyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDaGF0SGVhZHMgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRzPXtjaGF0SGVhZGVyc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Q9eyh1c2VyOiBJVXNlcikgPT4gc2V0QWN0aXZlVXNlcih1c2VyKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgICAgICBpdGVtXHJcbiAgICAgICAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgICAgICAgIG1kPXs5fVxyXG4gICAgICAgICAgICAgICAgeHM9ezZ9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e2hlaWdodDogJzEwMCUnfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPENoYXRCb3ggXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcj17YWN0aXZlVXNlcn0gXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZXM9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVNZXNzYWdlcy5tYXAobSA9PiBbbS5tZXNzYWdlLCBtLmZyb20uaWQgPT0gdXNlci5pZF0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uU2VuZD17YXN5bmMgKG1lc3NhZ2U6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih1c2VyICYmIGFjdGl2ZVVzZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdNZXNzYWdlOiBJRGlyZWN0TWVzc2FnZSA9IChhd2FpdCBhcGkoXCJkaXJlY3RNZXNzYWdlc1wiLCBcImNyZWF0ZVwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbTogdXNlci5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bzogYWN0aXZlVXNlci5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSkgYXMgSURpcmVjdE1lc3NhZ2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TWVzc2FnZXMoWy4uLm1lc3NhZ2VzLCBuZXdNZXNzYWdlXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgIDwvPjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXRQYWdlOyJdLCJzb3VyY2VSb290IjoiIn0=
webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ \"./node_modules/react-i18next/dist/es/index.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ \"./utils/index.ts\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/web/pages/index.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\nvar useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"makeStyles\"])(function () {\n  return {\n    mainContainer: {\n      width: '100%',\n      height: '100vh'\n    }\n  };\n});\n\nvar HomePage = function HomePage() {\n  _s();\n\n  var classes = useStyles();\n\n  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__[\"useTranslation\"])(),\n      t = _useTranslation.t,\n      i18n = _useTranslation.i18n;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])('en'),\n      language = _useState[0],\n      setLanguage = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      var res;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              if (false) {}\n\n              _context.next = 3;\n              return fetch(\"\".concat(_utils__WEBPACK_IMPORTED_MODULE_5__[\"apiURL\"], \"users.php\"));\n\n            case 3:\n              res = _context.sent;\n              _context.t0 = console;\n              _context.next = 7;\n              return res.text();\n\n            case 7:\n              _context.t1 = _context.sent;\n\n              _context.t0.log.call(_context.t0, _context.t1);\n\n            case 9:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }))();\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    i18n.changeLanguage(language);\n  }, [language]);\n  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Grid\"], {\n    className: classes.mainContainer,\n    container: true,\n    direction: \"column\",\n    alignItems: \"center\",\n    justify: \"center\",\n    spacing: 3,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Grid\"], {\n    item: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 13\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Typography\"], {\n    variant: \"h3\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 17\n    }\n  }, t(\"Hello World!\"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Grid\"], {\n    item: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 13\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Button\"], {\n    onClick: function onClick() {\n      return setLanguage(language == 'en' ? 'fr' : 'en');\n    },\n    variant: \"contained\",\n    color: \"secondary\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 17\n    }\n  }, language)));\n};\n\n_s(HomePage, \"QqTabPrUbdW8Hz+lu77J5gZOB5Q=\", false, function () {\n  return [useStyles, react_i18next__WEBPACK_IMPORTED_MODULE_3__[\"useTranslation\"]];\n});\n\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\n\nvar _c;\n\n$RefreshReg$(_c, \"HomePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsIm1haW5Db250YWluZXIiLCJ3aWR0aCIsImhlaWdodCIsIkhvbWVQYWdlIiwiY2xhc3NlcyIsInVzZVRyYW5zbGF0aW9uIiwidCIsImkxOG4iLCJ1c2VTdGF0ZSIsImxhbmd1YWdlIiwic2V0TGFuZ3VhZ2UiLCJ1c2VFZmZlY3QiLCJmZXRjaCIsImFwaVVSTCIsInJlcyIsImNvbnNvbGUiLCJ0ZXh0IiwibG9nIiwiY2hhbmdlTGFuZ3VhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLG9FQUFVLENBQUM7QUFBQSxTQUFPO0FBQ2hDQyxpQkFBYSxFQUFFO0FBQ1hDLFdBQUssRUFBRSxNQURJO0FBRVhDLFlBQU0sRUFBRTtBQUZHO0FBRGlCLEdBQVA7QUFBQSxDQUFELENBQTVCOztBQU9BLElBQU1DLFFBQWtCLEdBQUcsU0FBckJBLFFBQXFCLEdBQU07QUFBQTs7QUFDN0IsTUFBTUMsT0FBTyxHQUFHTixTQUFTLEVBQXpCOztBQUQ2Qix3QkFFVE8sb0VBQWMsRUFGTDtBQUFBLE1BRXJCQyxDQUZxQixtQkFFckJBLENBRnFCO0FBQUEsTUFFbEJDLElBRmtCLG1CQUVsQkEsSUFGa0I7O0FBQUEsa0JBR0dDLHNEQUFRLENBQUMsSUFBRCxDQUhYO0FBQUEsTUFHdEJDLFFBSHNCO0FBQUEsTUFHWkMsV0FIWTs7QUFLN0JDLHlEQUFTLENBQUMsWUFBTTtBQUNaLHFMQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEscUJBRXVCQyxLQUFLLFdBQUlDLDZDQUFKLGVBRjVCOztBQUFBO0FBRVdDLGlCQUZYO0FBQUEsNEJBR09DLE9BSFA7QUFBQTtBQUFBLHFCQUd5QkQsR0FBRyxDQUFDRSxJQUFKLEVBSHpCOztBQUFBO0FBQUE7O0FBQUEsMEJBR2VDLEdBSGY7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRDtBQU1ILEdBUFEsRUFPTixFQVBNLENBQVQ7QUFTQU4seURBQVMsQ0FBQyxZQUFNO0FBQ1pKLFFBQUksQ0FBQ1csY0FBTCxDQUFvQlQsUUFBcEI7QUFDSCxHQUZRLEVBRU4sQ0FBQ0EsUUFBRCxDQUZNLENBQVQ7QUFJQSxTQUNJLE1BQUMsc0RBQUQ7QUFDSSxhQUFTLEVBQUVMLE9BQU8sQ0FBQ0osYUFEdkI7QUFFSSxhQUFTLE1BRmI7QUFHSSxhQUFTLEVBQUMsUUFIZDtBQUlJLGNBQVUsRUFBQyxRQUpmO0FBS0ksV0FBTyxFQUFDLFFBTFo7QUFNSSxXQUFPLEVBQUUsQ0FOYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBUUksTUFBQyxzREFBRDtBQUNJLFFBQUksTUFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBR0ksTUFBQyw0REFBRDtBQUNJLFdBQU8sRUFBQyxJQURaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FHS00sQ0FBQyxDQUFDLGNBQUQsQ0FITixDQUhKLENBUkosRUFpQkksTUFBQyxzREFBRDtBQUNJLFFBQUksTUFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBR0ksTUFBQyx3REFBRDtBQUNJLFdBQU8sRUFBRTtBQUFBLGFBQU1JLFdBQVcsQ0FBQ0QsUUFBUSxJQUFJLElBQVosR0FBbUIsSUFBbkIsR0FBMEIsSUFBM0IsQ0FBakI7QUFBQSxLQURiO0FBRUksV0FBTyxFQUFDLFdBRlo7QUFHSSxTQUFLLEVBQUMsV0FIVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0tBLFFBTEwsQ0FISixDQWpCSixDQURKO0FBK0JILENBakREOztHQUFNTixRO1VBQ2NMLFMsRUFDSU8sNEQ7OztLQUZsQkYsUTtBQW1EU0EsdUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzLCBHcmlkLCBUeXBvZ3JhcGh5LCBCdXR0b24gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgeyBhcGlVUkwgfSBmcm9tICcuLi91dGlscyc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKCkgPT4gKHtcbiAgICBtYWluQ29udGFpbmVyOiB7XG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIGhlaWdodDogJzEwMHZoJ1xuICAgIH1cbn0pKTtcblxuY29uc3QgSG9tZVBhZ2U6IFJlYWN0LkZDID0gKCkgPT4ge1xuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgICBjb25zdCB7IHQsIGkxOG4gfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG4gICAgY29uc3QgW2xhbmd1YWdlLCBzZXRMYW5ndWFnZV0gPSB1c2VTdGF0ZSgnZW4nKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBpZihwcm9jZXNzLmJyb3dzZXIpIHtcbiAgICAgICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgZmV0Y2goYCR7YXBpVVJMfXVzZXJzLnBocGApO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGF3YWl0IHJlcy50ZXh0KCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSgpO1xuICAgIH0sIFtdKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGkxOG4uY2hhbmdlTGFuZ3VhZ2UobGFuZ3VhZ2UpO1xuICAgIH0sIFtsYW5ndWFnZV0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEdyaWRcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYWluQ29udGFpbmVyfVxuICAgICAgICAgICAgY29udGFpbmVyXG4gICAgICAgICAgICBkaXJlY3Rpb249J2NvbHVtbidcbiAgICAgICAgICAgIGFsaWduSXRlbXM9J2NlbnRlcidcbiAgICAgICAgICAgIGp1c3RpZnk9J2NlbnRlcidcbiAgICAgICAgICAgIHNwYWNpbmc9ezN9XG4gICAgICAgID5cbiAgICAgICAgICAgIDxHcmlkXG4gICAgICAgICAgICAgICAgaXRlbVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9J2gzJ1xuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3QoXCJIZWxsbyBXb3JsZCFcIil9XG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPEdyaWRcbiAgICAgICAgICAgICAgICBpdGVtXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRMYW5ndWFnZShsYW5ndWFnZSA9PSAnZW4nID8gJ2ZyJyA6ICdlbicpfVxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PSdjb250YWluZWQnXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPSdzZWNvbmRhcnknXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7bGFuZ3VhZ2V9XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvR3JpZD5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})
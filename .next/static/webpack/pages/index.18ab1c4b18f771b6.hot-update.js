"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/components/Card.tsx":
/*!***********************************!*\
  !*** ./pages/components/Card.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _this = undefined;\nvar Card = function(param) {\n    var item = param.item, index = param.index, handleCurrent = param.handleCurrent;\n    var maxChar = 200;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        __source: {\n            fileName: \"/Users/jdag/Desktop/embark-codetest/pages/components/Card.tsx\",\n            lineNumber: 12,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"ul\", {\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default().card),\n            style: {\n                width: '200px',\n                height: '200px'\n            },\n            onClick: function() {\n                return handleCurrent(item);\n            },\n            __source: {\n                fileName: \"/Users/jdag/Desktop/embark-codetest/pages/components/Card.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            },\n            __self: _this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                    src: item === null || item === void 0 ? void 0 : item.img,\n                    style: {\n                        width: '100%',\n                        height: '50px'\n                    },\n                    __source: {\n                        fileName: \"/Users/jdag/Desktop/embark-codetest/pages/components/Card.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    },\n                    __self: _this\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h2\", {\n                    __source: {\n                        fileName: \"/Users/jdag/Desktop/embark-codetest/pages/components/Card.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: (item === null || item === void 0 ? void 0 : item.title.length) > maxChar ? item.title.substring(0, maxChar) + '...' : item.title\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                    __source: {\n                        fileName: \"/Users/jdag/Desktop/embark-codetest/pages/components/Card.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: \"See more →\"\n                })\n            ]\n        })\n    }, index));\n};\n_c = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\nvar _c;\n$RefreshReg$(_c, \"Card\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL0NhcmQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBaUQ7O0FBUWpELEdBQUssQ0FBQ0MsSUFBSSxHQUFvQixRQUFRLFFBQTRCLENBQUM7UUFBbENDLElBQUksU0FBSkEsSUFBSSxFQUFFQyxLQUFLLFNBQUxBLEtBQUssRUFBRUMsYUFBYSxTQUFiQSxhQUFhO0lBQ3pELEdBQUssQ0FBQ0MsT0FBTyxHQUFHLEdBQUc7SUFDbkIsTUFBTSxzRUFDSEMsQ0FBRzs7Ozs7Ozt3RkFDREMsQ0FBRTtZQUNEQyxTQUFTLEVBQUVSLHFFQUFXO1lBQ3RCVSxLQUFLLEVBQUUsQ0FBQztnQkFBQ0MsS0FBSyxFQUFFLENBQU87Z0JBQUVDLE1BQU0sRUFBRSxDQUFPO1lBQUMsQ0FBQztZQUMxQ0MsT0FBTyxFQUFFLFFBQVE7Z0JBQUZULE1BQU0sQ0FBTkEsYUFBYSxDQUFDRixJQUFJOzs7Ozs7Ozs7cUZBRWhDWSxDQUFHO29CQUFDQyxHQUFHLEVBQUViLElBQUksYUFBSkEsSUFBSSxLQUFKQSxJQUFJLENBQUpBLENBQVMsR0FBVEEsSUFBSSxDQUFKQSxDQUFTLEdBQVRBLElBQUksQ0FBRVksR0FBRztvQkFBRUosS0FBSyxFQUFFLENBQUM7d0JBQUNDLEtBQUssRUFBRSxDQUFNO3dCQUFFQyxNQUFNLEVBQUUsQ0FBTTtvQkFBQyxDQUFDOzs7Ozs7OztxRkFFNURJLENBQUU7Ozs7Ozs7K0JBQ0FkLElBQUksYUFBSkEsSUFBSSxLQUFKQSxJQUFJLENBQUpBLENBQVcsR0FBWEEsSUFBSSxDQUFKQSxDQUFXLEdBQVhBLElBQUksQ0FBRWUsS0FBSyxDQUFDQyxNQUFNLElBQUdiLE9BQU8sR0FDekJILElBQUksQ0FBQ2UsS0FBSyxDQUFDRSxTQUFTLENBQUMsQ0FBQyxFQUFFZCxPQUFPLElBQUksQ0FBSyxPQUN4Q0gsSUFBSSxDQUFDZSxLQUFLOztxRkFFZkcsQ0FBQzs7Ozs7Ozs4QkFBQyxDQUFlOzs7O09BYlpqQixLQUFLO0FBaUJuQixDQUFDO0tBcEJLRixJQUFJO0FBc0JWLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9DYXJkLnRzeD9iYTRjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyc7XG5pbXBvcnQgeyBTdHJpcCB9IGZyb20gJy4vRGF0YVRhYmxlJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgaXRlbTogU3RyaXA7XG4gIGluZGV4OiBudW1iZXI7XG4gIGhhbmRsZUN1cnJlbnQ6IChpdGVtOiBTdHJpcCkgPT4gdm9pZDtcbn1cbmNvbnN0IENhcmQ6IFJlYWN0LkZDPFByb3BzPiA9ICh7IGl0ZW0sIGluZGV4LCBoYW5kbGVDdXJyZW50IH0pID0+IHtcbiAgY29uc3QgbWF4Q2hhciA9IDIwMDtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGtleT17aW5kZXh9PlxuICAgICAgPHVsXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9XG4gICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMjAwcHgnLCBoZWlnaHQ6ICcyMDBweCcgfX1cbiAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ3VycmVudChpdGVtKX1cbiAgICAgID5cbiAgICAgICAgPGltZyBzcmM9e2l0ZW0/LmltZ30gc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnNTBweCcgfX0gLz5cblxuICAgICAgICA8aDI+XG4gICAgICAgICAge2l0ZW0/LnRpdGxlLmxlbmd0aCA+IG1heENoYXJcbiAgICAgICAgICAgID8gaXRlbS50aXRsZS5zdWJzdHJpbmcoMCwgbWF4Q2hhcikgKyAnLi4uJ1xuICAgICAgICAgICAgOiBpdGVtLnRpdGxlfVxuICAgICAgICA8L2gyPlxuICAgICAgICA8cD5TZWUgbW9yZSAmcmFycjs8L3A+XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJDYXJkIiwiaXRlbSIsImluZGV4IiwiaGFuZGxlQ3VycmVudCIsIm1heENoYXIiLCJkaXYiLCJ1bCIsImNsYXNzTmFtZSIsImNhcmQiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0Iiwib25DbGljayIsImltZyIsInNyYyIsImgyIiwidGl0bGUiLCJsZW5ndGgiLCJzdWJzdHJpbmciLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/Card.tsx\n");

/***/ })

});
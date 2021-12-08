"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/fav/products",{

/***/ "./components/ProductItem.tsx":
/*!************************************!*\
  !*** ./components/ProductItem.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_hooks_store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/hooks-store/store */ \"./hooks/hooks-store/store.tsx\");\n/* harmony import */ var _ProductItem_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProductItem.module.css */ \"./components/ProductItem.module.css\");\n/* harmony import */ var _ProductItem_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ProductItem_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar ProductItem = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().memo(_c = function(param) {\n    var id = param.id, title = param.title, description = param.description, isFav = param.isFav;\n    console.log('RENDERING');\n    var dispatch = (0,_hooks_hooks_store_store__WEBPACK_IMPORTED_MODULE_2__.useStore)()[1];\n    var toggleFavHandler = function() {\n        // toggleFav(props.id);\n        dispatch('TOGGLE_FAV', id);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        style: {\n            marginBottom: '1rem'\n        },\n        __source: {\n            fileName: \"/Users/jdag/Desktop/embark-codetest/components/ProductItem.tsx\",\n            lineNumber: 24,\n            columnNumber: 7\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n            className: (_ProductItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().productItem),\n            __source: {\n                fileName: \"/Users/jdag/Desktop/embark-codetest/components/ProductItem.tsx\",\n                lineNumber: 25,\n                columnNumber: 9\n            },\n            __self: _this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h2\", {\n                    className: isFav ? 'styles.isFav' : '',\n                    __source: {\n                        fileName: \"/Users/jdag/Desktop/embark-codetest/components/ProductItem.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 11\n                    },\n                    __self: _this,\n                    children: title\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                    __source: {\n                        fileName: \"/Users/jdag/Desktop/embark-codetest/components/ProductItem.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 11\n                    },\n                    __self: _this,\n                    children: description\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                    className: !isFav ? 'styles.buttonOutline' : '',\n                    onClick: toggleFavHandler,\n                    __source: {\n                        fileName: \"/Users/jdag/Desktop/embark-codetest/components/ProductItem.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 11\n                    },\n                    __self: _this,\n                    children: isFav ? 'Un-Favorite' : 'Favorite'\n                })\n            ]\n        })\n    }));\n});\n_c1 = ProductItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductItem);\nvar _c, _c1;\n$RefreshReg$(_c, \"ProductItem$React.memo\");\n$RefreshReg$(_c1, \"ProductItem\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3RJdGVtLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXlCO0FBRTRCO0FBQ1I7O0FBUzdDLEdBQUssQ0FBQ0csV0FBVyxpQkFBb0JILGlEQUFVLE1BQzdDLFFBQVEsUUFBK0IsQ0FBQztRQUFyQ0ssRUFBRSxTQUFGQSxFQUFFLEVBQUVDLEtBQUssU0FBTEEsS0FBSyxFQUFFQyxXQUFXLFNBQVhBLFdBQVcsRUFBRUMsS0FBSyxTQUFMQSxLQUFLO0lBQzlCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFXO0lBQ3ZCLEdBQUssQ0FBQ0MsUUFBUSxHQUFHVixrRUFBUSxHQUFHLENBQUM7SUFFN0IsR0FBSyxDQUFDVyxnQkFBZ0IsR0FBRyxRQUM3QixHQURtQyxDQUFDO1FBQzlCLEVBQXVCO1FBQ3ZCRCxRQUFRLENBQUMsQ0FBWSxhQUFFTixFQUFFO0lBQzNCLENBQUM7SUFFRCxNQUFNLHNFQUNIUSxDQUFHO1FBQUNDLEtBQUssRUFBRSxDQUFDO1lBQUNDLFlBQVksRUFBRSxDQUFNO1FBQUMsQ0FBQzs7Ozs7Ozt3RkFDakNGLENBQUc7WUFBQ0csU0FBUyxFQUFFZCw0RUFBa0I7Ozs7Ozs7O3FGQUMvQmdCLENBQUU7b0JBQUNGLFNBQVMsRUFBRVIsS0FBSyxHQUFHLENBQWMsZ0JBQUcsQ0FBRTs7Ozs7Ozs4QkFBR0YsS0FBSzs7cUZBQ2pEYSxDQUFDOzs7Ozs7OzhCQUFFWixXQUFXOztxRkFDZGEsQ0FBTTtvQkFDTEosU0FBUyxHQUFHUixLQUFLLEdBQUcsQ0FBc0Isd0JBQUcsQ0FBRTtvQkFDL0NhLE9BQU8sRUFBRVQsZ0JBQWdCOzs7Ozs7OzhCQUV4QkosS0FBSyxHQUFHLENBQWEsZUFBRyxDQUFVOzs7OztBQUs3QyxDQUFDOztBQUdILCtEQUFlTCxXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0SXRlbS50c3g/OTgzMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyB1c2VTdG9yZSB9IGZyb20gJy4uL2hvb2tzL2hvb2tzLXN0b3JlL3N0b3JlJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Qcm9kdWN0SXRlbS5tb2R1bGUuY3NzJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgaWQ6IG51bWJlcjtcbiAgdGl0bGU6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgaXNGYXY6IGJvb2xlYW47XG59XG5cbmNvbnN0IFByb2R1Y3RJdGVtOiBSZWFjdC5GQzxQcm9wcz4gPSBSZWFjdC5tZW1vKFxuICAoeyBpZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBpc0ZhdiB9KSA9PiB7XG4gICAgY29uc29sZS5sb2coJ1JFTkRFUklORycpO1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlU3RvcmUoKVsxXTtcblxuICAgIGNvbnN0IHRvZ2dsZUZhdkhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICAvLyB0b2dnbGVGYXYocHJvcHMuaWQpO1xuICAgICAgZGlzcGF0Y2goJ1RPR0dMRV9GQVYnLCBpZCk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzFyZW0nIH19PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2R1Y3RJdGVtfT5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtpc0ZhdiA/ICdzdHlsZXMuaXNGYXYnIDogJyd9Pnt0aXRsZX08L2gyPlxuICAgICAgICAgIDxwPntkZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPXshaXNGYXYgPyAnc3R5bGVzLmJ1dHRvbk91dGxpbmUnIDogJyd9XG4gICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVGYXZIYW5kbGVyfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtpc0ZhdiA/ICdVbi1GYXZvcml0ZScgOiAnRmF2b3JpdGUnfVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RJdGVtO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RvcmUiLCJzdHlsZXMiLCJQcm9kdWN0SXRlbSIsIm1lbW8iLCJpZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpc0ZhdiIsImNvbnNvbGUiLCJsb2ciLCJkaXNwYXRjaCIsInRvZ2dsZUZhdkhhbmRsZXIiLCJkaXYiLCJzdHlsZSIsIm1hcmdpbkJvdHRvbSIsImNsYXNzTmFtZSIsInByb2R1Y3RJdGVtIiwiaDIiLCJwIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ProductItem.tsx\n");

/***/ })

});
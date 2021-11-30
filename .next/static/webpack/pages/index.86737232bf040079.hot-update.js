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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_jdag_Desktop_embark_codetest_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_jdag_Desktop_embark_codetest_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_jdag_Desktop_embark_codetest_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/dist/antd.css */ \"./node_modules/antd/dist/antd.css\");\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) {\n        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){\n            arr2[i] = arr[i];\n        }\n        return arr2;\n    }\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArray(iter) {\n    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Home = function() {\n    var itemsArray = function itemsArray(page) {\n        var start = page === 1 ? 1 : page * 10;\n        var end = page === 1 ? 10 : (page + 1) * 10;\n        return Array(end - start + 1).fill().map(function(_, idx) {\n            return start + idx;\n        });\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]), pageItems = ref[0], setPageItems = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(1), page1 = ref1[0], setPage = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), isLoading = ref2[0], setIsLoading = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), error = ref3[0], setError = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(), current = ref4[0], setCurrent = ref4[1];\n    var columns = [\n        {\n            title: 'ID',\n            dataIndex: 'num',\n            key: 'num'\n        },\n        {\n            title: 'Title',\n            dataIndex: 'title',\n            key: 'title'\n        },\n        {\n            title: 'Image',\n            dataIndex: 'img',\n            key: 'img'\n        },\n        {\n            title: 'Image',\n            dataIndex: 'img',\n            key: 'img'\n        }\n    ];\n    var getData = _asyncToGenerator(_Users_jdag_Desktop_embark_codetest_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(URL) {\n        var response, data, transformedData;\n        return _Users_jdag_Desktop_embark_codetest_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    setIsLoading(true);\n                    setError(null);\n                    _ctx.prev = 2;\n                    _ctx.next = 5;\n                    return fetch(URL);\n                case 5:\n                    response = _ctx.sent;\n                    _ctx.next = 8;\n                    return response.json();\n                case 8:\n                    data = _ctx.sent;\n                    if (response.ok) {\n                        _ctx.next = 11;\n                        break;\n                    }\n                    throw new Error('Something went wrong');\n                case 11:\n                    transformedData = {\n                        month: data.month,\n                        num: data.num,\n                        link: data.link,\n                        year: data.year,\n                        news: data.news,\n                        safe_title: data.safe_title,\n                        // transcript: item.transcript,\n                        alt: data.alt,\n                        img: data.img,\n                        title: data.title,\n                        day: data.day\n                    };\n                    setIsLoading(false);\n                    return _ctx.abrupt(\"return\", transformedData);\n                case 16:\n                    _ctx.prev = 16;\n                    _ctx.t0 = _ctx[\"catch\"](2);\n                    // setError(error)\n                    console.log(_ctx.t0);\n                case 19:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                2,\n                16\n            ]\n        ]);\n    }));\n    var nextPage = function(array) {\n        array.map(_asyncToGenerator(_Users_jdag_Desktop_embark_codetest_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(item) {\n            var newElement;\n            return _Users_jdag_Desktop_embark_codetest_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return getData(\"http://localhost:8080/getData/\".concat(item));\n                    case 2:\n                        newElement = _ctx.sent;\n                        setPageItems(function(oldArray) {\n                            return _toConsumableArray(oldArray).concat([\n                                newElement\n                            ]);\n                        });\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        })));\n        setPage(page1 + 1);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n        __source: {\n            fileName: \"/Users/jdag/Desktop/embark-codetest/pages/index.tsx\",\n            lineNumber: 88,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                __source: {\n                    fileName: \"/Users/jdag/Desktop/embark-codetest/pages/index.tsx\",\n                    lineNumber: 89,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"title\", {\n                        __source: {\n                            fileName: \"/Users/jdag/Desktop/embark-codetest/pages/index.tsx\",\n                            lineNumber: 90,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: \"EMBARK codetest\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\",\n                        __source: {\n                            fileName: \"/Users/jdag/Desktop/embark-codetest/pages/index.tsx\",\n                            lineNumber: 91,\n                            columnNumber: 9\n                        },\n                        __self: _this\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().main),\n                __source: {\n                    fileName: \"/Users/jdag/Desktop/embark-codetest/pages/index.tsx\",\n                    lineNumber: 94,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().title),\n                        __source: {\n                            fileName: \"/Users/jdag/Desktop/embark-codetest/pages/index.tsx\",\n                            lineNumber: 95,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: \"Embark codetest\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"a\", {\n                        href: \"https://xkcd.com/\",\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().title),\n                        __source: {\n                            fileName: \"/Users/jdag/Desktop/embark-codetest/pages/index.tsx\",\n                            lineNumber: 96,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: \"XKCD\"\n                    }),\n                    !isLoading && pageItems.length === 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"p\", {\n                        __source: {\n                            fileName: \"/Users/jdag/Desktop/embark-codetest/pages/index.tsx\",\n                            lineNumber: 99,\n                            columnNumber: 50\n                        },\n                        __self: _this,\n                        children: \"No items found\"\n                    }),\n                    isLoading && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"p\", {\n                        __source: {\n                            fileName: \"/Users/jdag/Desktop/embark-codetest/pages/index.tsx\",\n                            lineNumber: 100,\n                            columnNumber: 23\n                        },\n                        __self: _this,\n                        children: \" Loading...\"\n                    }),\n                    current && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n                        __source: {\n                            fileName: \"/Users/jdag/Desktop/embark-codetest/pages/index.tsx\",\n                            lineNumber: 102,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"h2\", {\n                                __source: {\n                                    fileName: \"/Users/jdag/Desktop/embark-codetest/pages/index.tsx\",\n                                    lineNumber: 103,\n                                    columnNumber: 13\n                                },\n                                __self: _this,\n                                children: \"MORE INFO\"\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"h2\", {\n                                __source: {\n                                    fileName: \"/Users/jdag/Desktop/embark-codetest/pages/index.tsx\",\n                                    lineNumber: 104,\n                                    columnNumber: 13\n                                },\n                                __self: _this,\n                                children: current.title\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"p\", {\n                                __source: {\n                                    fileName: \"/Users/jdag/Desktop/embark-codetest/pages/index.tsx\",\n                                    lineNumber: 105,\n                                    columnNumber: 13\n                                },\n                                __self: _this,\n                                children: [\n                                    current.img,\n                                    \" \"\n                                ]\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"p\", {\n                                __source: {\n                                    fileName: \"/Users/jdag/Desktop/embark-codetest/pages/index.tsx\",\n                                    lineNumber: 106,\n                                    columnNumber: 13\n                                },\n                                __self: _this,\n                                children: [\n                                    current.num,\n                                    \" \"\n                                ]\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"p\", {\n                                __source: {\n                                    fileName: \"/Users/jdag/Desktop/embark-codetest/pages/index.tsx\",\n                                    lineNumber: 107,\n                                    columnNumber: 13\n                                },\n                                __self: _this,\n                                children: [\n                                    current.link,\n                                    \" \"\n                                ]\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"p\", {\n                                __source: {\n                                    fileName: \"/Users/jdag/Desktop/embark-codetest/pages/index.tsx\",\n                                    lineNumber: 108,\n                                    columnNumber: 13\n                                },\n                                __self: _this,\n                                children: [\n                                    current.year,\n                                    \" \"\n                                ]\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"p\", {\n                                __source: {\n                                    fileName: \"/Users/jdag/Desktop/embark-codetest/pages/index.tsx\",\n                                    lineNumber: 109,\n                                    columnNumber: 13\n                                },\n                                __self: _this,\n                                children: [\n                                    current.news,\n                                    \" \"\n                                ]\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"p\", {\n                                __source: {\n                                    fileName: \"/Users/jdag/Desktop/embark-codetest/pages/index.tsx\",\n                                    lineNumber: 110,\n                                    columnNumber: 13\n                                },\n                                __self: _this,\n                                children: [\n                                    current.alt,\n                                    \" \"\n                                ]\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"p\", {\n                                __source: {\n                                    fileName: \"/Users/jdag/Desktop/embark-codetest/pages/index.tsx\",\n                                    lineNumber: 111,\n                                    columnNumber: 13\n                                },\n                                __self: _this,\n                                children: [\n                                    current.day,\n                                    \" \"\n                                ]\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"img\", {\n                                src: current.img,\n                                style: {\n                                    width: '40px',\n                                    height: '40px'\n                                },\n                                __source: {\n                                    fileName: \"/Users/jdag/Desktop/embark-codetest/pages/index.tsx\",\n                                    lineNumber: 113,\n                                    columnNumber: 13\n                                },\n                                __self: _this\n                            })\n                        ]\n                    }),\n                    !isLoading && pageItems.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(antd__WEBPACK_IMPORTED_MODULE_6__.Table, {\n                        dataSource: pageItems,\n                        columns: columns,\n                        __source: {\n                            fileName: \"/Users/jdag/Desktop/embark-codetest/pages/index.tsx\",\n                            lineNumber: 118,\n                            columnNumber: 11\n                        },\n                        __self: _this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"button\", {\n                        onClick: function() {\n                            return nextPage(itemsArray(page1));\n                        },\n                        __source: {\n                            fileName: \"/Users/jdag/Desktop/embark-codetest/pages/index.tsx\",\n                            lineNumber: 137,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: \"NEXT PAGE\"\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"footer\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().footer),\n                __source: {\n                    fileName: \"/Users/jdag/Desktop/embark-codetest/pages/index.tsx\",\n                    lineNumber: 140,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: \"Created by Johanna Dagfalk\"\n            })\n        ]\n    }));\n};\n_s(Home, \"SYOle+gFk4GgGv0OXJTJ09PC9z8=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFLENBQU07b0NBQUVDLE1BQU0sRUFBRSxDQUFNO2dDQUFDLENBQUM7Ozs7Ozs7Ozs7cUJBSWpFakQsU0FBUyxJQUFJSCxTQUFTLENBQUM4QyxNQUFNLEdBQUcsQ0FBQyx5RUFDaEN6RCx1Q0FBSzt3QkFBQ2dFLFVBQVUsRUFBRXJELFNBQVM7d0JBQUVTLE9BQU8sRUFBRUEsT0FBTzs7Ozs7Ozs7eUZBbUIvQzZDLENBQU07d0JBQUNDLE9BQU8sRUFBRSxRQUFROzRCQUFGdEIsTUFBTSxDQUFOQSxRQUFRLENBQUMxQyxVQUFVLENBQUNDLEtBQUk7Ozs7Ozs7O2tDQUFJLENBQVM7Ozs7aUZBRzdEZ0UsQ0FBTTtnQkFBQ2pCLFNBQVMsRUFBRXBELHVFQUFhOzs7Ozs7OzBCQUFFLENBQTBCOzs7O0FBR2xFLENBQUM7R0F0SUtHLElBQUk7S0FBSkEsSUFBSTtBQXdJViwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBUYWJsZSB9IGZyb20gJ2FudGQnO1xuaW1wb3J0ICdhbnRkL2Rpc3QvYW50ZC5jc3MnO1xuXG5jb25zdCBIb21lOiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgY29uc3QgW3BhZ2VJdGVtcywgc2V0UGFnZUl0ZW1zXSA9IHVzZVN0YXRlPGFueT4oW10pO1xuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZTxhbnk+KDEpO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbY3VycmVudCwgc2V0Q3VycmVudF0gPSB1c2VTdGF0ZTxhbnk+KCk7XG5cbiAgY29uc3QgY29sdW1ucyA9IFtcbiAgICB7XG4gICAgICB0aXRsZTogJ0lEJyxcbiAgICAgIGRhdGFJbmRleDogJ251bScsXG4gICAgICBrZXk6ICdudW0nXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ1RpdGxlJyxcbiAgICAgIGRhdGFJbmRleDogJ3RpdGxlJyxcbiAgICAgIGtleTogJ3RpdGxlJ1xuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdJbWFnZScsXG4gICAgICBkYXRhSW5kZXg6ICdpbWcnLFxuICAgICAga2V5OiAnaW1nJ1xuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdJbWFnZScsXG4gICAgICBkYXRhSW5kZXg6ICdpbWcnLFxuICAgICAga2V5OiAnaW1nJ1xuICAgIH1cbiAgXTtcblxuICBjb25zdCBnZXREYXRhID0gYXN5bmMgKFVSTDogc3RyaW5nKSA9PiB7XG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuICAgIHNldEVycm9yKG51bGwpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFVSTCk7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignU29tZXRoaW5nIHdlbnQgd3JvbmcnKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHRyYW5zZm9ybWVkRGF0YSA9IHtcbiAgICAgICAgbW9udGg6IGRhdGEubW9udGgsXG4gICAgICAgIG51bTogZGF0YS5udW0sXG4gICAgICAgIGxpbms6IGRhdGEubGluayxcbiAgICAgICAgeWVhcjogZGF0YS55ZWFyLFxuICAgICAgICBuZXdzOiBkYXRhLm5ld3MsXG4gICAgICAgIHNhZmVfdGl0bGU6IGRhdGEuc2FmZV90aXRsZSxcbiAgICAgICAgLy8gdHJhbnNjcmlwdDogaXRlbS50cmFuc2NyaXB0LFxuICAgICAgICBhbHQ6IGRhdGEuYWx0LFxuICAgICAgICBpbWc6IGRhdGEuaW1nLFxuICAgICAgICB0aXRsZTogZGF0YS50aXRsZSxcbiAgICAgICAgZGF5OiBkYXRhLmRheVxuICAgICAgfTtcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICByZXR1cm4gdHJhbnNmb3JtZWREYXRhO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLyBzZXRFcnJvcihlcnJvcilcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgbmV4dFBhZ2UgPSAoYXJyYXk6IG51bWJlcltdKSA9PiB7XG4gICAgYXJyYXkubWFwKGFzeW5jIChpdGVtOiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBhd2FpdCBnZXREYXRhKGBodHRwOi8vbG9jYWxob3N0OjgwODAvZ2V0RGF0YS8ke2l0ZW19YCk7XG4gICAgICBzZXRQYWdlSXRlbXMoKG9sZEFycmF5OiBhbnkpID0+IFsuLi5vbGRBcnJheSwgbmV3RWxlbWVudF0pO1xuICAgIH0pO1xuICAgIHNldFBhZ2UocGFnZSArIDEpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGl0ZW1zQXJyYXkocGFnZTogbnVtYmVyKSB7XG4gICAgdmFyIHN0YXJ0ID0gcGFnZSA9PT0gMSA/IDEgOiBwYWdlICogMTA7XG4gICAgdmFyIGVuZCA9IHBhZ2UgPT09IDEgPyAxMCA6IChwYWdlICsgMSkgKiAxMDtcblxuICAgIHJldHVybiBBcnJheShlbmQgLSBzdGFydCArIDEpXG4gICAgICAuZmlsbCgpXG4gICAgICAubWFwKChfLCBpZHgpID0+IHN0YXJ0ICsgaWR4KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5FTUJBUksgY29kZXRlc3Q8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PkVtYmFyayBjb2RldGVzdDwvaDE+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3hrY2QuY29tL1wiIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cbiAgICAgICAgICBYS0NEXG4gICAgICAgIDwvYT5cbiAgICAgICAgeyFpc0xvYWRpbmcgJiYgcGFnZUl0ZW1zLmxlbmd0aCA9PT0gMCAmJiA8cD5ObyBpdGVtcyBmb3VuZDwvcD59XG4gICAgICAgIHtpc0xvYWRpbmcgJiYgPHA+IExvYWRpbmcuLi48L3A+fVxuICAgICAgICB7Y3VycmVudCAmJiAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMj5NT1JFIElORk88L2gyPlxuICAgICAgICAgICAgPGgyPntjdXJyZW50LnRpdGxlfTwvaDI+XG4gICAgICAgICAgICA8cD57Y3VycmVudC5pbWd9IDwvcD5cbiAgICAgICAgICAgIDxwPntjdXJyZW50Lm51bX0gPC9wPlxuICAgICAgICAgICAgPHA+e2N1cnJlbnQubGlua30gPC9wPlxuICAgICAgICAgICAgPHA+e2N1cnJlbnQueWVhcn0gPC9wPlxuICAgICAgICAgICAgPHA+e2N1cnJlbnQubmV3c30gPC9wPlxuICAgICAgICAgICAgPHA+e2N1cnJlbnQuYWx0fSA8L3A+XG4gICAgICAgICAgICA8cD57Y3VycmVudC5kYXl9IDwvcD5cblxuICAgICAgICAgICAgPGltZyBzcmM9e2N1cnJlbnQuaW1nfSBzdHlsZT17eyB3aWR0aDogJzQwcHgnLCBoZWlnaHQ6ICc0MHB4JyB9fSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuXG4gICAgICAgIHshaXNMb2FkaW5nICYmIHBhZ2VJdGVtcy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICA8VGFibGUgZGF0YVNvdXJjZT17cGFnZUl0ZW1zfSBjb2x1bW5zPXtjb2x1bW5zfSAvPlxuICAgICAgICApfVxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncmlkfT5cbiAgICAgICAgICB7IWlzTG9hZGluZyAmJlxuICAgICAgICAgICAgcGFnZUl0ZW1zLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICAgIHBhZ2VJdGVtcy5tYXAoKGl0ZW06IGFueSwgaW5kZXg6IG51bWJlcikgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfSBvbkNsaWNrPXsoKSA9PiBzZXRDdXJyZW50KGl0ZW0pfT5cbiAgICAgICAgICAgICAgICAgIDxoMj57aXRlbS50aXRsZX08L2gyPlxuICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBzcmM9e2l0ZW0uaW1nfVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzQwcHgnLCBoZWlnaHQ6ICc0MHB4JyB9fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxwPlNlZSBtb3JlICZyYXJyOzwvcD5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBuZXh0UGFnZShpdGVtc0FycmF5KHBhZ2UpKX0+TkVYVCBQQUdFPC9idXR0b24+XG4gICAgICA8L21haW4+XG5cbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5DcmVhdGVkIGJ5IEpvaGFubmEgRGFnZmFsazwvZm9vdGVyPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJIZWFkIiwic3R5bGVzIiwidXNlU3RhdGUiLCJUYWJsZSIsIkhvbWUiLCJpdGVtc0FycmF5IiwicGFnZSIsInN0YXJ0IiwiZW5kIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiXyIsImlkeCIsInBhZ2VJdGVtcyIsInNldFBhZ2VJdGVtcyIsInNldFBhZ2UiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJlcnJvciIsInNldEVycm9yIiwiY3VycmVudCIsInNldEN1cnJlbnQiLCJjb2x1bW5zIiwidGl0bGUiLCJkYXRhSW5kZXgiLCJrZXkiLCJnZXREYXRhIiwiVVJMIiwicmVzcG9uc2UiLCJkYXRhIiwidHJhbnNmb3JtZWREYXRhIiwiZmV0Y2giLCJqc29uIiwib2siLCJFcnJvciIsIm1vbnRoIiwibnVtIiwibGluayIsInllYXIiLCJuZXdzIiwic2FmZV90aXRsZSIsImFsdCIsImltZyIsImRheSIsImNvbnNvbGUiLCJsb2ciLCJuZXh0UGFnZSIsImFycmF5IiwiaXRlbSIsIm5ld0VsZW1lbnQiLCJvbGRBcnJheSIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsInJlbCIsImhyZWYiLCJtYWluIiwiaDEiLCJhIiwibGVuZ3RoIiwicCIsImgyIiwic3JjIiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsImRhdGFTb3VyY2UiLCJidXR0b24iLCJvbkNsaWNrIiwiZm9vdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});
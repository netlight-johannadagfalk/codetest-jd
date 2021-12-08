"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/strips",{

/***/ "./hooks/use-http.tsx":
/*!****************************!*\
  !*** ./hooks/use-http.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_jdag_Desktop_embark_codetest_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_jdag_Desktop_embark_codetest_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_jdag_Desktop_embark_codetest_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {\n        };\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _s = $RefreshSig$();\nvar httpReducer = function(currHttpState, action) {\n    switch(action.type){\n        case 'SEND':\n            return {\n                loading: true,\n                error: null,\n                data: null\n            };\n        case 'RESPONSE':\n            return _objectSpread({\n            }, currHttpState, {\n                loading: false,\n                data: action.responseData\n            });\n        case 'ERROR':\n            return {\n                loading: false,\n                error: action.errorMessage\n            };\n        default:\n            throw new Error('Should not be reached');\n    }\n};\nvar useHttp = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(httpReducer, {\n        loading: false,\n        error: null,\n        data: null\n    }), httpState = ref[0], dispatchHttp = ref[1];\n    var sendRequest = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(_asyncToGenerator(_Users_jdag_Desktop_embark_codetest_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(requestConfig, applyData) {\n        var response, data1;\n        return _Users_jdag_Desktop_embark_codetest_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.prev = 0;\n                    _ctx.next = 3;\n                    return fetch(requestConfig.url, {\n                        method: requestConfig.method ? requestConfig.method : 'GET',\n                        headers: requestConfig.headers ? requestConfig.headers : {\n                        },\n                        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null\n                    });\n                case 3:\n                    response = _ctx.sent;\n                    if (response.ok) {\n                        _ctx.next = 6;\n                        break;\n                    }\n                    throw new Error('Something went wrong');\n                case 6:\n                    _ctx.next = 8;\n                    return response.json();\n                case 8:\n                    data1 = _ctx.sent;\n                    applyData(data1);\n                    dispatchHttp({\n                        type: 'SEND',\n                        responseData: data1\n                    });\n                    _ctx.next = 16;\n                    break;\n                case 13:\n                    _ctx.prev = 13;\n                    _ctx.t0 = _ctx[\"catch\"](0);\n                    dispatchHttp({\n                        type: 'ERROR',\n                        errorMessage: 'Something went wrong'\n                    });\n                case 16:\n                    //setIsLoading(false);\n                    dispatchHttp({\n                        type: 'RESPONSE',\n                        responseData: data\n                    });\n                case 17:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                0,\n                13\n            ]\n        ]);\n    })), []);\n    return {\n        isLoading: httpState.loading,\n        data: httpState.data,\n        error: httpState.error,\n        sendRequest: sendRequest\n    };\n};\n_s(useHttp, \"YCrwUFdH1tsfmMCdWOQVfQahwOk=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (useHttp); // import { useState, useCallback } from 'react';\n // const useHttp: () => {\n //   isLoading: boolean;\n //   error: Error | null;\n //   sendRequest: (requestConfig: any, applyData: any) => Promise<void>;\n // } = () => {\n //   const [error, setError] = useState<Error | null>(null);\n //   const [isLoading, setIsLoading] = useState<boolean>(false);\n //   const sendRequest = useCallback(\n //     async (requestConfig: any, applyData: any) => {\n //       setIsLoading(true);\n //       setError(null);\n //       try {\n //         const response = await fetch(requestConfig.url, {\n //           method: requestConfig.method ? requestConfig.method : 'GET',\n //           headers: requestConfig.headers ? requestConfig.headers : {},\n //           body: requestConfig.body ? JSON.stringify(requestConfig.body) : null\n //         });\n //         if (!response.ok) {\n //           throw new Error('Something went wrong');\n //         }\n //         const data = await response.json();\n //         applyData(data);\n //       } catch (error: any) {\n //         setError(error);\n //       }\n //       setIsLoading(false);\n //     },\n //     []\n //   );\n //   return { isLoading, error, sendRequest };\n // };\n // export default useHttp;\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRUEsV0FBVztJQUMxQixDQUFDO0FBQ0gsQ0FBQztHQTFDS0gsT0FBTztBQTRDYiwrREFBZUEsT0FBTyxFQUV0QixDQUFpRDtBQUVqRCxDQUF5QjtBQUN6QixDQUF3QjtBQUN4QixDQUF5QjtBQUN6QixDQUF3RTtBQUN4RSxDQUFjO0FBQ2QsQ0FBNEQ7QUFDNUQsQ0FBZ0U7QUFFaEUsQ0FBcUM7QUFDckMsQ0FBc0Q7QUFDdEQsQ0FBNEI7QUFDNUIsQ0FBd0I7QUFDeEIsQ0FBYztBQUNkLENBQTREO0FBQzVELENBQXlFO0FBQ3pFLENBQXlFO0FBQ3pFLENBQWlGO0FBQ2pGLENBQWM7QUFFZCxDQUE4QjtBQUM5QixDQUFxRDtBQUNyRCxDQUFZO0FBRVosQ0FBOEM7QUFDOUMsQ0FBMkI7QUFDM0IsQ0FBK0I7QUFDL0IsQ0FBMkI7QUFDM0IsQ0FBVTtBQUNWLENBQTZCO0FBQzdCLENBQVM7QUFDVCxDQUFTO0FBQ1QsQ0FBTztBQUVQLENBQThDO0FBQzlDLENBQUs7QUFFTCxDQUEwQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ob29rcy91c2UtaHR0cC50c3g/NWU3MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBodHRwUmVkdWNlciA9IChjdXJySHR0cFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ1NFTkQnOlxuICAgICAgcmV0dXJuIHsgbG9hZGluZzogdHJ1ZSwgZXJyb3I6IG51bGwsIGRhdGE6IG51bGwgfTtcbiAgICBjYXNlICdSRVNQT05TRSc6XG4gICAgICByZXR1cm4geyAuLi5jdXJySHR0cFN0YXRlLCBsb2FkaW5nOiBmYWxzZSwgZGF0YTogYWN0aW9uLnJlc3BvbnNlRGF0YSB9O1xuICAgIGNhc2UgJ0VSUk9SJzpcbiAgICAgIHJldHVybiB7IGxvYWRpbmc6IGZhbHNlLCBlcnJvcjogYWN0aW9uLmVycm9yTWVzc2FnZSB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Nob3VsZCBub3QgYmUgcmVhY2hlZCcpO1xuICB9XG59O1xuXG5jb25zdCB1c2VIdHRwOiAoKSA9PiB7XG4gIHNlbmRSZXF1ZXN0OiAocmVxdWVzdENvbmZpZzogYW55LCBhcHBseURhdGE6IGFueSkgPT4gUHJvbWlzZTx2b2lkPjtcbn0gPSAoKSA9PiB7XG4gIGNvbnN0IFtodHRwU3RhdGUsIGRpc3BhdGNoSHR0cF0gPSB1c2VSZWR1Y2VyKGh0dHBSZWR1Y2VyLCB7XG4gICAgbG9hZGluZzogZmFsc2UsXG4gICAgZXJyb3I6IG51bGwsXG4gICAgZGF0YTogbnVsbFxuICB9KTtcblxuICBjb25zdCBzZW5kUmVxdWVzdCA9IHVzZUNhbGxiYWNrKFxuICAgIGFzeW5jIChyZXF1ZXN0Q29uZmlnOiBhbnksIGFwcGx5RGF0YTogYW55KSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHJlcXVlc3RDb25maWcudXJsLCB7XG4gICAgICAgICAgbWV0aG9kOiByZXF1ZXN0Q29uZmlnLm1ldGhvZCA/IHJlcXVlc3RDb25maWcubWV0aG9kIDogJ0dFVCcsXG4gICAgICAgICAgaGVhZGVyczogcmVxdWVzdENvbmZpZy5oZWFkZXJzID8gcmVxdWVzdENvbmZpZy5oZWFkZXJzIDoge30sXG4gICAgICAgICAgYm9keTogcmVxdWVzdENvbmZpZy5ib2R5ID8gSlNPTi5zdHJpbmdpZnkocmVxdWVzdENvbmZpZy5ib2R5KSA6IG51bGxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignU29tZXRoaW5nIHdlbnQgd3JvbmcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGFwcGx5RGF0YShkYXRhKTtcblxuICAgICAgICBkaXNwYXRjaEh0dHAoeyB0eXBlOiAnU0VORCcsIHJlc3BvbnNlRGF0YTogZGF0YSB9KTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgZGlzcGF0Y2hIdHRwKHsgdHlwZTogJ0VSUk9SJywgZXJyb3JNZXNzYWdlOiAnU29tZXRoaW5nIHdlbnQgd3JvbmcnIH0pO1xuICAgICAgfVxuICAgICAgLy9zZXRJc0xvYWRpbmcoZmFsc2UpO1xuXG4gICAgICBkaXNwYXRjaEh0dHAoeyB0eXBlOiAnUkVTUE9OU0UnLCByZXNwb25zZURhdGE6IGRhdGEgfSk7XG4gICAgfSxcbiAgICBbXVxuICApO1xuXG4gIHJldHVybiB7XG4gICAgaXNMb2FkaW5nOiBodHRwU3RhdGUubG9hZGluZyxcbiAgICBkYXRhOiBodHRwU3RhdGUuZGF0YSxcbiAgICBlcnJvcjogaHR0cFN0YXRlLmVycm9yLFxuICAgIHNlbmRSZXF1ZXN0OiBzZW5kUmVxdWVzdFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlSHR0cDtcblxuLy8gaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuXG4vLyBjb25zdCB1c2VIdHRwOiAoKSA9PiB7XG4vLyAgIGlzTG9hZGluZzogYm9vbGVhbjtcbi8vICAgZXJyb3I6IEVycm9yIHwgbnVsbDtcbi8vICAgc2VuZFJlcXVlc3Q6IChyZXF1ZXN0Q29uZmlnOiBhbnksIGFwcGx5RGF0YTogYW55KSA9PiBQcm9taXNlPHZvaWQ+O1xuLy8gfSA9ICgpID0+IHtcbi8vICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZTxFcnJvciB8IG51bGw+KG51bGwpO1xuLy8gICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuXG4vLyAgIGNvbnN0IHNlbmRSZXF1ZXN0ID0gdXNlQ2FsbGJhY2soXG4vLyAgICAgYXN5bmMgKHJlcXVlc3RDb25maWc6IGFueSwgYXBwbHlEYXRhOiBhbnkpID0+IHtcbi8vICAgICAgIHNldElzTG9hZGluZyh0cnVlKTtcbi8vICAgICAgIHNldEVycm9yKG51bGwpO1xuLy8gICAgICAgdHJ5IHtcbi8vICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChyZXF1ZXN0Q29uZmlnLnVybCwge1xuLy8gICAgICAgICAgIG1ldGhvZDogcmVxdWVzdENvbmZpZy5tZXRob2QgPyByZXF1ZXN0Q29uZmlnLm1ldGhvZCA6ICdHRVQnLFxuLy8gICAgICAgICAgIGhlYWRlcnM6IHJlcXVlc3RDb25maWcuaGVhZGVycyA/IHJlcXVlc3RDb25maWcuaGVhZGVycyA6IHt9LFxuLy8gICAgICAgICAgIGJvZHk6IHJlcXVlc3RDb25maWcuYm9keSA/IEpTT04uc3RyaW5naWZ5KHJlcXVlc3RDb25maWcuYm9keSkgOiBudWxsXG4vLyAgICAgICAgIH0pO1xuXG4vLyAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbi8vICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NvbWV0aGluZyB3ZW50IHdyb25nJyk7XG4vLyAgICAgICAgIH1cblxuLy8gICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuLy8gICAgICAgICBhcHBseURhdGEoZGF0YSk7XG4vLyAgICAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4vLyAgICAgICAgIHNldEVycm9yKGVycm9yKTtcbi8vICAgICAgIH1cbi8vICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4vLyAgICAgfSxcbi8vICAgICBbXVxuLy8gICApO1xuXG4vLyAgIHJldHVybiB7IGlzTG9hZGluZywgZXJyb3IsIHNlbmRSZXF1ZXN0IH07XG4vLyB9O1xuXG4vLyBleHBvcnQgZGVmYXVsdCB1c2VIdHRwO1xuIl0sIm5hbWVzIjpbInVzZUNhbGxiYWNrIiwidXNlUmVkdWNlciIsImh0dHBSZWR1Y2VyIiwiY3Vyckh0dHBTdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwicmVzcG9uc2VEYXRhIiwiZXJyb3JNZXNzYWdlIiwiRXJyb3IiLCJ1c2VIdHRwIiwiaHR0cFN0YXRlIiwiZGlzcGF0Y2hIdHRwIiwic2VuZFJlcXVlc3QiLCJyZXF1ZXN0Q29uZmlnIiwiYXBwbHlEYXRhIiwicmVzcG9uc2UiLCJmZXRjaCIsInVybCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm9rIiwianNvbiIsImlzTG9hZGluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./hooks/use-http.tsx\n");

/***/ })

});
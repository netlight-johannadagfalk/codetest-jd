"use strict";
exports.id = 589;
exports.ids = [589];
exports.modules = {

/***/ 151:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Button = ({ text , onClick  })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            onClick: onClick,
            style: {
                width: '150px',
                height: '40px'
            },
            children: text
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ }),

/***/ 589:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(415);
/* harmony import */ var _InspectCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(541);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(151);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(168);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);








const DataTable = ()=>{
    const { 0: current , 1: setCurrent  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: pageItems , 1: setPageItems  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: page1 , 1: setPage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const { 0: isLoading , 1: setIsLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: error1 , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const getData = async (URL)=>{
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(URL);
            const data = await response.json();
            if (!response.ok) {
                throw new Error('Something went wrong');
            }
            const transformedData = {
                month: data.number,
                num: data.num,
                link: data.link,
                year: data.year,
                news: data.news,
                safe_title: data.safe_title,
                transcript: data.transcript,
                alt: data.alt,
                img: data.img,
                title: data.title,
                day: data.day
            };
            setIsLoading(false);
            return transformedData;
        } catch (error) {
            setError(error);
        }
    };
    const nextPage = (array)=>{
        array.map(async (item)=>{
            const newElement = await getData(`http://localhost:8080/getData/${item}`);
            setPageItems((oldArray)=>[
                    ...oldArray,
                    newElement
                ]
            );
        });
        setPage(page1 + 1);
    };
    function itemsArray(page) {
        var start = page === 1 ? 1 : page * 10;
        var end = page === 1 ? 10 : (page + 1) * 10;
        return Array(end - start + 1).fill(undefined).map((_, idx)=>start + idx
        );
    }
    const handleCurrent = (item)=>{
        setCurrent(item);
        router.push(`/?id:${item.num}`, undefined, {
            shallow: true
        });
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            current && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_InspectCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
                current: current
            }),
            !isLoading && pageItems.length === 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: "No items found"
            }),
            isLoading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: " Loading..."
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().grid),
                children: !isLoading && pageItems.length > 0 && pageItems.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        item: item,
                        index: index,
                        handleCurrent: handleCurrent
                    }, index)
                )
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
                text: 'LOAD MORE DATA',
                onClick: ()=>nextPage(itemsArray(page1))
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DataTable);


/***/ })

};
;
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./layout/Header/Header.tsx":
/*!**********************************!*\
  !*** ./layout/Header/Header.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/AppBar */ \"./node_modules/@mui/material/AppBar/index.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/index.js\");\n/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Toolbar */ \"./node_modules/@mui/material/Toolbar/index.js\");\n/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Container */ \"./node_modules/@mui/material/Container/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/styles */ \"./node_modules/@mui/material/styles/index.js\");\n/* harmony import */ var react_toggle_dark_mode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toggle-dark-mode */ \"./node_modules/react-toggle-dark-mode/dist/react-toggle-dark-mode.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst Header = ()=>{\n    _s();\n    const [anchorElNav, setAnchorElNav] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(null);\n    const [anchorElUser, setAnchorElUser] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(null);\n    const [isDarkMode, setDarkMode] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    const handleOpenNavMenu = (event)=>{\n        setAnchorElNav(event.currentTarget);\n    };\n    const handleOpenUserMenu = (event)=>{\n        setAnchorElUser(event.currentTarget);\n    };\n    const handleCloseNavMenu = ()=>{\n        setAnchorElNav(null);\n    };\n    const handleCloseUserMenu = ()=>{\n        setAnchorElUser(null);\n    };\n    const toggleDarkMode = (checked)=>{\n        setDarkMode(checked);\n    };\n    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.createTheme)({\n        palette: {\n            mode: isDarkMode ? \"dark\" : \"light\"\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.ThemeProvider, {\n            theme: theme,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                position: \"fixed\",\n                className: \"navcolor\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Container__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    maxWidth: \"xl\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        disableGutters: true,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                sx: {\n                                    display: {\n                                        xs: \"none\",\n                                        gap: 50\n                                    },\n                                    fontFamily: \"Times\"\n                                },\n                                className: \"header\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/\",\n                                        className: \"items\",\n                                        sx: {\n                                            display: {\n                                                xs: \"none\",\n                                                gap: 50\n                                            },\n                                            fontFamily: \"Times\"\n                                        },\n                                        children: \"Home\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/webskitters/Desktop/Webskitters/Nextjs/ecrypto/layout/Header/Header.tsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/exchanges\",\n                                        className: \"items\",\n                                        children: \"Exchange\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/webskitters/Desktop/Webskitters/Nextjs/ecrypto/layout/Header/Header.tsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/markets\",\n                                        className: \"items\",\n                                        children: \"Market\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/webskitters/Desktop/Webskitters/Nextjs/ecrypto/layout/Header/Header.tsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/rates\",\n                                        className: \"items\",\n                                        children: \"Rates\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/webskitters/Desktop/Webskitters/Nextjs/ecrypto/layout/Header/Header.tsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/webskitters/Desktop/Webskitters/Nextjs/ecrypto/layout/Header/Header.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toggle_dark_mode__WEBPACK_IMPORTED_MODULE_3__.DarkModeSwitch, {\n                                style: {\n                                    marginBottom: \"2rem\"\n                                },\n                                checked: isDarkMode,\n                                onChange: toggleDarkMode,\n                                size: 20\n                            }, void 0, false, {\n                                fileName: \"/home/webskitters/Desktop/Webskitters/Nextjs/ecrypto/layout/Header/Header.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/webskitters/Desktop/Webskitters/Nextjs/ecrypto/layout/Header/Header.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/webskitters/Desktop/Webskitters/Nextjs/ecrypto/layout/Header/Header.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/webskitters/Desktop/Webskitters/Nextjs/ecrypto/layout/Header/Header.tsx\",\n                lineNumber: 50,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/webskitters/Desktop/Webskitters/Nextjs/ecrypto/layout/Header/Header.tsx\",\n            lineNumber: 49,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(Header, \"gbw/1T+gEBDGDMrbP2HRTZl90gg=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9sYXlvdXQvSGVhZGVyL0hlYWRlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ0U7QUFDTjtBQUNRO0FBQ0k7QUFDbkI7QUFJcUM7QUFDVjtBQUV4RCxNQUFNUyxTQUFTOztJQUNiLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHWCxxREFBYyxDQUFxQjtJQUN6RSxNQUFNLENBQUNhLGNBQWNDLGdCQUFnQixHQUFHZCxxREFBYyxDQUFxQjtJQUczRSxNQUFNLENBQUNlLFlBQVlDLFlBQVksR0FBR2hCLHFEQUFjLENBQUM7SUFHakQsTUFBTWlCLG9CQUFvQixDQUFDQztRQUN6QlAsZUFBZU8sTUFBTUMsYUFBYTtJQUNwQztJQUNBLE1BQU1DLHFCQUFxQixDQUFDRjtRQUMxQkosZ0JBQWdCSSxNQUFNQyxhQUFhO0lBQ3JDO0lBRUEsTUFBTUUscUJBQXFCO1FBQ3pCVixlQUFlO0lBQ2pCO0lBRUEsTUFBTVcsc0JBQXNCO1FBQzFCUixnQkFBZ0I7SUFDbEI7SUFHQSxNQUFNUyxpQkFBaUIsQ0FBQ0M7UUFDdEJSLFlBQVlRO0lBQ2Q7SUFFQSxNQUFNQyxRQUFRbEIsaUVBQVdBLENBQUM7UUFDeEJtQixTQUFTO1lBQ1BDLE1BQU1aLGFBQWEsU0FBUztRQUM5QjtJQUNGO0lBRUEscUJBQ0U7a0JBQ0UsNEVBQUNULCtEQUFhQTtZQUFDbUIsT0FBT0E7c0JBQ3BCLDRFQUFDeEIsNERBQU1BO2dCQUFDMkIsVUFBUztnQkFBUUMsV0FBVTswQkFDakMsNEVBQUN6QiwrREFBU0E7b0JBQUMwQixVQUFTOzhCQUNsQiw0RUFBQzNCLDZEQUFPQTt3QkFBQzRCLGNBQWM7OzBDQUNyQiw4REFBQzdCLHlEQUFHQTtnQ0FBQzhCLElBQUk7b0NBQUVDLFNBQVM7d0NBQUVDLElBQUk7d0NBQVFDLEtBQUs7b0NBQUc7b0NBQUdDLFlBQVk7Z0NBQVE7Z0NBQUdQLFdBQVU7O2tEQUM1RSw4REFBQ3hCLGtEQUFJQTt3Q0FBQ2dDLE1BQU07d0NBQUtSLFdBQVU7d0NBQVFHLElBQUk7NENBQUVDLFNBQVM7Z0RBQUVDLElBQUk7Z0RBQVFDLEtBQUs7NENBQUc7NENBQUdDLFlBQVk7d0NBQVE7a0RBQUc7Ozs7OztrREFDbEcsOERBQUMvQixrREFBSUE7d0NBQUNnQyxNQUFNO3dDQUFjUixXQUFVO2tEQUFROzs7Ozs7a0RBQzVDLDhEQUFDeEIsa0RBQUlBO3dDQUFDZ0MsTUFBTTt3Q0FBWVIsV0FBVTtrREFBUTs7Ozs7O2tEQUMxQyw4REFBQ3hCLGtEQUFJQTt3Q0FBQ2dDLE1BQU07d0NBQVVSLFdBQVU7a0RBQVE7Ozs7Ozs7Ozs7OzswQ0FFMUMsOERBQUNyQixrRUFBY0E7Z0NBQ2I4QixPQUFPO29DQUFFQyxjQUFjO2dDQUFPO2dDQUM5QmYsU0FBU1Q7Z0NBQ1R5QixVQUFVakI7Z0NBQ1ZrQixNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUXRCO0dBMURNaEM7S0FBQUE7QUE0RE4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGF5b3V0L0hlYWRlci9IZWFkZXIudHN4PzA1YjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFwcEJhciBmcm9tICdAbXVpL21hdGVyaWFsL0FwcEJhcic7XG5pbXBvcnQgQm94IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQm94JztcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVG9vbGJhcic7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ29udGFpbmVyJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbXVpL21hdGVyaWFsL0ljb25CdXR0b24nO1xuaW1wb3J0IEJyaWdodG5lc3M0SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0JyaWdodG5lc3M0JztcbmltcG9ydCBCcmlnaHRuZXNzN0ljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9CcmlnaHRuZXNzNyc7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyLCBjcmVhdGVUaGVtZSB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvc3R5bGVzJztcbmltcG9ydCB7IERhcmtNb2RlU3dpdGNoIH0gZnJvbSAncmVhY3QtdG9nZ2xlLWRhcmstbW9kZSc7XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgY29uc3QgW2FuY2hvckVsTmF2LCBzZXRBbmNob3JFbE5hdl0gPSBSZWFjdC51c2VTdGF0ZTxudWxsIHwgSFRNTEVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBbYW5jaG9yRWxVc2VyLCBzZXRBbmNob3JFbFVzZXJdID0gUmVhY3QudXNlU3RhdGU8bnVsbCB8IEhUTUxFbGVtZW50PihudWxsKTtcblxuXG4gIGNvbnN0IFtpc0RhcmtNb2RlLCBzZXREYXJrTW9kZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG5cblxuICBjb25zdCBoYW5kbGVPcGVuTmF2TWVudSA9IChldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MRWxlbWVudD4pID0+IHtcbiAgICBzZXRBbmNob3JFbE5hdihldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlT3BlblVzZXJNZW51ID0gKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxFbGVtZW50PikgPT4ge1xuICAgIHNldEFuY2hvckVsVXNlcihldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDbG9zZU5hdk1lbnUgPSAoKSA9PiB7XG4gICAgc2V0QW5jaG9yRWxOYXYobnVsbCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2xvc2VVc2VyTWVudSA9ICgpID0+IHtcbiAgICBzZXRBbmNob3JFbFVzZXIobnVsbCk7XG4gIH07XG5cblxuICBjb25zdCB0b2dnbGVEYXJrTW9kZSA9IChjaGVja2VkOiBib29sZWFuKSA9PiB7XG4gICAgc2V0RGFya01vZGUoY2hlY2tlZCk7XG4gIH07XG5cbiAgY29uc3QgdGhlbWUgPSBjcmVhdGVUaGVtZSh7XG4gICAgcGFsZXR0ZToge1xuICAgICAgbW9kZTogaXNEYXJrTW9kZSA/ICdkYXJrJyA6ICdsaWdodCcsXG4gICAgfSxcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgPEFwcEJhciBwb3NpdGlvbj1cImZpeGVkXCIgY2xhc3NOYW1lPSduYXZjb2xvcic+XG4gICAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cInhsXCI+XG4gICAgICAgICAgICA8VG9vbGJhciBkaXNhYmxlR3V0dGVycz5cbiAgICAgICAgICAgICAgPEJveCBzeD17eyBkaXNwbGF5OiB7IHhzOiAnbm9uZScsIGdhcDogNTAgfSwgZm9udEZhbWlseTogXCJUaW1lc1wiIH19IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvJ30gY2xhc3NOYW1lPSdpdGVtcycgc3g9e3sgZGlzcGxheTogeyB4czogJ25vbmUnLCBnYXA6IDUwIH0sIGZvbnRGYW1pbHk6IFwiVGltZXNcIiB9fT5Ib21lPC9MaW5rPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvZXhjaGFuZ2VzJ30gY2xhc3NOYW1lPSdpdGVtcyc+RXhjaGFuZ2U8L0xpbms+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17Jy9tYXJrZXRzJ30gY2xhc3NOYW1lPSdpdGVtcyc+TWFya2V0PC9MaW5rPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvcmF0ZXMnfSBjbGFzc05hbWU9J2l0ZW1zJz5SYXRlczwvTGluaz5cbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgIDxEYXJrTW9kZVN3aXRjaFxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzJyZW0nIH19XG4gICAgICAgICAgICAgICAgY2hlY2tlZD17aXNEYXJrTW9kZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dG9nZ2xlRGFya01vZGV9XG4gICAgICAgICAgICAgICAgc2l6ZT17MjB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1Rvb2xiYXI+XG4gICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgIDwvQXBwQmFyPlxuICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQXBwQmFyIiwiQm94IiwiVG9vbGJhciIsIkNvbnRhaW5lciIsIkxpbmsiLCJUaGVtZVByb3ZpZGVyIiwiY3JlYXRlVGhlbWUiLCJEYXJrTW9kZVN3aXRjaCIsIkhlYWRlciIsImFuY2hvckVsTmF2Iiwic2V0QW5jaG9yRWxOYXYiLCJ1c2VTdGF0ZSIsImFuY2hvckVsVXNlciIsInNldEFuY2hvckVsVXNlciIsImlzRGFya01vZGUiLCJzZXREYXJrTW9kZSIsImhhbmRsZU9wZW5OYXZNZW51IiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiaGFuZGxlT3BlblVzZXJNZW51IiwiaGFuZGxlQ2xvc2VOYXZNZW51IiwiaGFuZGxlQ2xvc2VVc2VyTWVudSIsInRvZ2dsZURhcmtNb2RlIiwiY2hlY2tlZCIsInRoZW1lIiwicGFsZXR0ZSIsIm1vZGUiLCJwb3NpdGlvbiIsImNsYXNzTmFtZSIsIm1heFdpZHRoIiwiZGlzYWJsZUd1dHRlcnMiLCJzeCIsImRpc3BsYXkiLCJ4cyIsImdhcCIsImZvbnRGYW1pbHkiLCJocmVmIiwic3R5bGUiLCJtYXJnaW5Cb3R0b20iLCJvbkNoYW5nZSIsInNpemUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./layout/Header/Header.tsx\n"));

/***/ })

});
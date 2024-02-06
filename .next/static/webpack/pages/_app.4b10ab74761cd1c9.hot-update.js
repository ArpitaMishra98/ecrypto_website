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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/AppBar */ \"./node_modules/@mui/material/AppBar/index.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/index.js\");\n/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Toolbar */ \"./node_modules/@mui/material/Toolbar/index.js\");\n/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Container */ \"./node_modules/@mui/material/Container/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/styles */ \"./node_modules/@mui/material/styles/index.js\");\n/* harmony import */ var react_toggle_dark_mode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toggle-dark-mode */ \"./node_modules/react-toggle-dark-mode/dist/react-toggle-dark-mode.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst Header = ()=>{\n    _s();\n    const [anchorElNav, setAnchorElNav] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(null);\n    const [anchorElUser, setAnchorElUser] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(null);\n    const [isDarkMode, setDarkMode] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    const handleOpenNavMenu = (event)=>{\n        setAnchorElNav(event.currentTarget);\n    };\n    const handleOpenUserMenu = (event)=>{\n        setAnchorElUser(event.currentTarget);\n    };\n    const handleCloseNavMenu = ()=>{\n        setAnchorElNav(null);\n    };\n    const handleCloseUserMenu = ()=>{\n        setAnchorElUser(null);\n    };\n    const toggleDarkMode = (checked)=>{\n        setDarkMode(checked);\n    };\n    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.createTheme)({\n        palette: {\n            mode: isDarkMode ? \"dark\" : \"light\"\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.ThemeProvider, {\n            theme: theme,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                position: \"fixed\",\n                className: \"navcolor\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Container__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    maxWidth: \"xl\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        disableGutters: true,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                sx: {\n                                    display: {\n                                        xs: \"none\",\n                                        md: \"flex\",\n                                        gap: 50\n                                    },\n                                    fontFamily: \"Times\"\n                                },\n                                className: \"header\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/\",\n                                        className: \"items\",\n                                        children: \"Home\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/webskitters/Desktop/Webskitters/Nextjs/ecrypto/layout/Header/Header.tsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/exchanges\",\n                                        className: \"items\",\n                                        children: \"Exchange\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/webskitters/Desktop/Webskitters/Nextjs/ecrypto/layout/Header/Header.tsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/markets\",\n                                        className: \"items\",\n                                        children: \"Market\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/webskitters/Desktop/Webskitters/Nextjs/ecrypto/layout/Header/Header.tsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/rates\",\n                                        className: \"items\",\n                                        children: \"Rates\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/webskitters/Desktop/Webskitters/Nextjs/ecrypto/layout/Header/Header.tsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/webskitters/Desktop/Webskitters/Nextjs/ecrypto/layout/Header/Header.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toggle_dark_mode__WEBPACK_IMPORTED_MODULE_3__.DarkModeSwitch, {\n                                style: {\n                                    marginBottom: \"2rem\"\n                                },\n                                checked: isDarkMode,\n                                onChange: toggleDarkMode,\n                                size: 20\n                            }, void 0, false, {\n                                fileName: \"/home/webskitters/Desktop/Webskitters/Nextjs/ecrypto/layout/Header/Header.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/webskitters/Desktop/Webskitters/Nextjs/ecrypto/layout/Header/Header.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/webskitters/Desktop/Webskitters/Nextjs/ecrypto/layout/Header/Header.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/webskitters/Desktop/Webskitters/Nextjs/ecrypto/layout/Header/Header.tsx\",\n                lineNumber: 50,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/webskitters/Desktop/Webskitters/Nextjs/ecrypto/layout/Header/Header.tsx\",\n            lineNumber: 49,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(Header, \"gbw/1T+gEBDGDMrbP2HRTZl90gg=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9sYXlvdXQvSGVhZGVyL0hlYWRlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ0U7QUFDTjtBQUNRO0FBQ0k7QUFDbkI7QUFJcUM7QUFDVjtBQUV4RCxNQUFNUyxTQUFTOztJQUNiLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHWCxxREFBYyxDQUFxQjtJQUN6RSxNQUFNLENBQUNhLGNBQWNDLGdCQUFnQixHQUFHZCxxREFBYyxDQUFxQjtJQUczRSxNQUFNLENBQUNlLFlBQVlDLFlBQVksR0FBR2hCLHFEQUFjLENBQUM7SUFHakQsTUFBTWlCLG9CQUFvQixDQUFDQztRQUN6QlAsZUFBZU8sTUFBTUMsYUFBYTtJQUNwQztJQUNBLE1BQU1DLHFCQUFxQixDQUFDRjtRQUMxQkosZ0JBQWdCSSxNQUFNQyxhQUFhO0lBQ3JDO0lBRUEsTUFBTUUscUJBQXFCO1FBQ3pCVixlQUFlO0lBQ2pCO0lBRUEsTUFBTVcsc0JBQXNCO1FBQzFCUixnQkFBZ0I7SUFDbEI7SUFHQSxNQUFNUyxpQkFBaUIsQ0FBQ0M7UUFDdEJSLFlBQVlRO0lBQ2Q7SUFFQSxNQUFNQyxRQUFRbEIsaUVBQVdBLENBQUM7UUFDeEJtQixTQUFTO1lBQ1BDLE1BQU1aLGFBQWEsU0FBUztRQUM5QjtJQUNGO0lBRUEscUJBQ0U7a0JBQ0UsNEVBQUNULCtEQUFhQTtZQUFDbUIsT0FBT0E7c0JBQ3BCLDRFQUFDeEIsNERBQU1BO2dCQUFDMkIsVUFBUztnQkFBUUMsV0FBVTswQkFDakMsNEVBQUN6QiwrREFBU0E7b0JBQUMwQixVQUFTOzhCQUNsQiw0RUFBQzNCLDZEQUFPQTt3QkFBQzRCLGNBQWM7OzBDQUNyQiw4REFBQzdCLHlEQUFHQTtnQ0FBQzhCLElBQUk7b0NBQUVDLFNBQVM7d0NBQUVDLElBQUk7d0NBQVFDLElBQUk7d0NBQVFDLEtBQUs7b0NBQUc7b0NBQUdDLFlBQVk7Z0NBQVE7Z0NBQUdSLFdBQVU7O2tEQUN4Riw4REFBQ3hCLGtEQUFJQTt3Q0FBQ2lDLE1BQU07d0NBQUtULFdBQVU7a0RBQVE7Ozs7OztrREFDbkMsOERBQUN4QixrREFBSUE7d0NBQUNpQyxNQUFNO3dDQUFjVCxXQUFVO2tEQUFROzs7Ozs7a0RBQzVDLDhEQUFDeEIsa0RBQUlBO3dDQUFDaUMsTUFBTTt3Q0FBWVQsV0FBVTtrREFBUTs7Ozs7O2tEQUMxQyw4REFBQ3hCLGtEQUFJQTt3Q0FBQ2lDLE1BQU07d0NBQVVULFdBQVU7a0RBQVE7Ozs7Ozs7Ozs7OzswQ0FFMUMsOERBQUNyQixrRUFBY0E7Z0NBQ2IrQixPQUFPO29DQUFFQyxjQUFjO2dDQUFPO2dDQUM5QmhCLFNBQVNUO2dDQUNUMEIsVUFBVWxCO2dDQUNWbUIsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVF0QjtHQTFETWpDO0tBQUFBO0FBNEROLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2xheW91dC9IZWFkZXIvSGVhZGVyLnRzeD8wNWI4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG11aS9tYXRlcmlhbC9BcHBCYXInO1xuaW1wb3J0IEJveCBmcm9tICdAbXVpL21hdGVyaWFsL0JveCc7XG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbXVpL21hdGVyaWFsL1Rvb2xiYXInO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbXVpL21hdGVyaWFsL0NvbnRhaW5lcic7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9JY29uQnV0dG9uJztcbmltcG9ydCBCcmlnaHRuZXNzNEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9CcmlnaHRuZXNzNCc7XG5pbXBvcnQgQnJpZ2h0bmVzczdJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQnJpZ2h0bmVzczcnO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciwgY3JlYXRlVGhlbWUgfSBmcm9tICdAbXVpL21hdGVyaWFsL3N0eWxlcyc7XG5pbXBvcnQgeyBEYXJrTW9kZVN3aXRjaCB9IGZyb20gJ3JlYWN0LXRvZ2dsZS1kYXJrLW1vZGUnO1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IFthbmNob3JFbE5hdiwgc2V0QW5jaG9yRWxOYXZdID0gUmVhY3QudXNlU3RhdGU8bnVsbCB8IEhUTUxFbGVtZW50PihudWxsKTtcbiAgY29uc3QgW2FuY2hvckVsVXNlciwgc2V0QW5jaG9yRWxVc2VyXSA9IFJlYWN0LnVzZVN0YXRlPG51bGwgfCBIVE1MRWxlbWVudD4obnVsbCk7XG5cblxuICBjb25zdCBbaXNEYXJrTW9kZSwgc2V0RGFya01vZGVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuXG5cbiAgY29uc3QgaGFuZGxlT3Blbk5hdk1lbnUgPSAoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEVsZW1lbnQ+KSA9PiB7XG4gICAgc2V0QW5jaG9yRWxOYXYoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gIH07XG4gIGNvbnN0IGhhbmRsZU9wZW5Vc2VyTWVudSA9IChldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MRWxlbWVudD4pID0+IHtcbiAgICBzZXRBbmNob3JFbFVzZXIoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2xvc2VOYXZNZW51ID0gKCkgPT4ge1xuICAgIHNldEFuY2hvckVsTmF2KG51bGwpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNsb3NlVXNlck1lbnUgPSAoKSA9PiB7XG4gICAgc2V0QW5jaG9yRWxVc2VyKG51bGwpO1xuICB9O1xuXG5cbiAgY29uc3QgdG9nZ2xlRGFya01vZGUgPSAoY2hlY2tlZDogYm9vbGVhbikgPT4ge1xuICAgIHNldERhcmtNb2RlKGNoZWNrZWQpO1xuICB9O1xuXG4gIGNvbnN0IHRoZW1lID0gY3JlYXRlVGhlbWUoe1xuICAgIHBhbGV0dGU6IHtcbiAgICAgIG1vZGU6IGlzRGFya01vZGUgPyAnZGFyaycgOiAnbGlnaHQnLFxuICAgIH0sXG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJmaXhlZFwiIGNsYXNzTmFtZT0nbmF2Y29sb3InPlxuICAgICAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJ4bFwiPlxuICAgICAgICAgICAgPFRvb2xiYXIgZGlzYWJsZUd1dHRlcnM+XG4gICAgICAgICAgICAgIDxCb3ggc3g9e3sgZGlzcGxheTogeyB4czogJ25vbmUnLCBtZDogJ2ZsZXgnLCBnYXA6IDUwIH0sIGZvbnRGYW1pbHk6IFwiVGltZXNcIiB9fSBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXsnLyd9IGNsYXNzTmFtZT0naXRlbXMnPkhvbWU8L0xpbms+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17Jy9leGNoYW5nZXMnfSBjbGFzc05hbWU9J2l0ZW1zJz5FeGNoYW5nZTwvTGluaz5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXsnL21hcmtldHMnfSBjbGFzc05hbWU9J2l0ZW1zJz5NYXJrZXQ8L0xpbms+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17Jy9yYXRlcyd9IGNsYXNzTmFtZT0naXRlbXMnPlJhdGVzPC9MaW5rPlxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgPERhcmtNb2RlU3dpdGNoXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnMnJlbScgfX1cbiAgICAgICAgICAgICAgICBjaGVja2VkPXtpc0RhcmtNb2RlfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0b2dnbGVEYXJrTW9kZX1cbiAgICAgICAgICAgICAgICBzaXplPXsyMH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvVG9vbGJhcj5cbiAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgPC9BcHBCYXI+XG4gICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJBcHBCYXIiLCJCb3giLCJUb29sYmFyIiwiQ29udGFpbmVyIiwiTGluayIsIlRoZW1lUHJvdmlkZXIiLCJjcmVhdGVUaGVtZSIsIkRhcmtNb2RlU3dpdGNoIiwiSGVhZGVyIiwiYW5jaG9yRWxOYXYiLCJzZXRBbmNob3JFbE5hdiIsInVzZVN0YXRlIiwiYW5jaG9yRWxVc2VyIiwic2V0QW5jaG9yRWxVc2VyIiwiaXNEYXJrTW9kZSIsInNldERhcmtNb2RlIiwiaGFuZGxlT3Blbk5hdk1lbnUiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJoYW5kbGVPcGVuVXNlck1lbnUiLCJoYW5kbGVDbG9zZU5hdk1lbnUiLCJoYW5kbGVDbG9zZVVzZXJNZW51IiwidG9nZ2xlRGFya01vZGUiLCJjaGVja2VkIiwidGhlbWUiLCJwYWxldHRlIiwibW9kZSIsInBvc2l0aW9uIiwiY2xhc3NOYW1lIiwibWF4V2lkdGgiLCJkaXNhYmxlR3V0dGVycyIsInN4IiwiZGlzcGxheSIsInhzIiwibWQiLCJnYXAiLCJmb250RmFtaWx5IiwiaHJlZiIsInN0eWxlIiwibWFyZ2luQm90dG9tIiwib25DaGFuZ2UiLCJzaXplIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./layout/Header/Header.tsx\n"));

/***/ })

});
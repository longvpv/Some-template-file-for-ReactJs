webpackHotUpdate_N_E("pages/_app",{

/***/ "./component/topNav/topnav.tsx":
/*!*************************************!*\
  !*** ./component/topNav/topnav.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");
/* harmony import */ var _material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Notifications */ "./node_modules/@material-ui/icons/Notifications.js");
/* harmony import */ var _material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Settings */ "./node_modules/@material-ui/icons/Settings.js");
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_TrendingUp__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/TrendingUp */ "./node_modules/@material-ui/icons/TrendingUp.js");
/* harmony import */ var _material_ui_icons_TrendingUp__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_TrendingUp__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Search */ "./node_modules/@material-ui/icons/Search.js");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_Help__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/Help */ "./node_modules/@material-ui/icons/Help.js");
/* harmony import */ var _material_ui_icons_Help__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Help__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_15__);



var _jsxFileName = "C:\\Long\\CODE\\ERP\\erp.webapp\\component\\topNav\\topnav.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement;














var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(function (theme) {
  return {
    root: {
      flexGrow: 1
    },
    companyTitle: {
      color: '#101010',
      fontSize: "16px" // fontWeight: "",

    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      color: '#101010',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    grow: {
      flexGrow: 1
    },
    search: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      position: "relative",
      borderRadius: "16px",
      backgroundColor: Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["fade"])(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["fade"])(theme.palette.common.white, 0.25)
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: "100%"
    }, theme.breakpoints.up("sm"), {
      marginLeft: theme.spacing(3),
      width: "auto"
    }),
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    inputRoot: {
      color: '#101010'
    },
    inputInput: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: "calc(1em + ".concat(theme.spacing(4), "px)"),
      transition: theme.transitions.create("width"),
      width: "100%"
    }, theme.breakpoints.up("md"), {
      width: "20ch"
    }),
    sectionDesktop: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      display: "none"
    }, theme.breakpoints.up("md"), {
      display: "flex"
    }),
    sectionMobile: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      display: "flex"
    }, theme.breakpoints.up("md"), {
      display: "none"
    }),
    accName: {
      display: "flex",
      alignItems: "center"
    }
  };
});

function TopNav(props) {
  _s();

  var classes = useStyles(); // -----------------------------

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_15___default.a.useState(null),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      anchorEl = _React$useState2[0],
      setAnchorEl = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_15___default.a.useState(null),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      mobileMoreAnchorEl = _React$useState4[0],
      setMobileMoreAnchorEl = _React$useState4[1];

  var isMenuOpen = Boolean(anchorEl);
  var isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  var handleProfileMenuOpen = function handleProfileMenuOpen(event) {
    setAnchorEl(event.currentTarget);
  };

  var handleMobileMenuClose = function handleMobileMenuClose() {
    setMobileMoreAnchorEl(null);
  };

  var handleMenuClose = function handleMenuClose() {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  var handleMobileMenuOpen = function handleMobileMenuOpen(event) {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  var menuId = "primary-search-account-menu";
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: classes.grow,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    position: "static",
    className: "bg-white",
    style: {
      boxShadow: "none"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "\\images\\VVlogo.png",
    className: "pr-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    edge: "start",
    className: classes.menuButton,
    color: "primary",
    "aria-label": "open drawer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_11___default.a, {
    style: {
      color: '#DCE0E2',
      fontSize: '40'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 15
    }
  })), __jsx("span", {
    className: classes.companyTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 13
    }
  }, "C\xF4ng ty VV Solutions"), __jsx("div", {
    className: classes.search,
    style: {
      background: "#F7F7F7"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: classes.searchIcon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 15
    }
  }, __jsx(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_13___default.a, {
    style: {
      color: '#2FAAFC'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["InputBase"], {
    placeholder: "Search\u2026",
    classes: {
      root: classes.inputRoot,
      input: classes.inputInput
    },
    inputProps: {
      "aria-label": "search"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: classes.grow,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: classes.sectionDesktop,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    "aria-label": "show ",
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Badge"], {
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 17
    }
  }, __jsx(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_10___default.a, {
    style: {
      color: '#5A5A5A'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 19
    }
  }))), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    "aria-label": "show ",
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Badge"], {
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 17
    }
  }, __jsx(_material_ui_icons_TrendingUp__WEBPACK_IMPORTED_MODULE_12___default.a, {
    style: {
      color: '#5A5A5A'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 19
    }
  }))), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    "aria-label": "show",
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Badge"], {
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 17
    }
  }, __jsx(_material_ui_icons_Help__WEBPACK_IMPORTED_MODULE_14___default.a, {
    style: {
      color: '#5A5A5A'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 19
    }
  }))), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: classes.title,
    variant: "subtitle1",
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 15
    }
  }, "H\u1ED7 tr\u1EE3"), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    "aria-label": "show 17 new notifications",
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Badge"], {
    badgeContent: 17,
    color: "secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 17
    }
  }, __jsx(_material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_9___default.a, {
    style: {
      color: '#5A5A5A'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 19
    }
  }))), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: classes.title,
    variant: "subtitle1",
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 15
    }
  }, "Account Name"), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    edge: "end",
    "aria-label": "account of current user",
    "aria-haspopup": "true",
    onClick: handleProfileMenuOpen,
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 15
    }
  }, __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_8__["AccountCircle"], {
    style: {
      color: '#5A5A5A'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 17
    }
  })))))));
}

_s(TopNav, "QbuE0by0825GObi+FvhMymLYB/U=", false, function () {
  return [useStyles];
});

_c = TopNav;
/* harmony default export */ __webpack_exports__["default"] = (TopNav);

var _c;

$RefreshReg$(_c, "TopNav");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L3RvcE5hdi90b3BuYXYudHN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJmbGV4R3JvdyIsImNvbXBhbnlUaXRsZSIsImNvbG9yIiwiZm9udFNpemUiLCJtZW51QnV0dG9uIiwibWFyZ2luUmlnaHQiLCJzcGFjaW5nIiwidGl0bGUiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiZ3JvdyIsInNlYXJjaCIsInBvc2l0aW9uIiwiYm9yZGVyUmFkaXVzIiwiYmFja2dyb3VuZENvbG9yIiwiZmFkZSIsInBhbGV0dGUiLCJjb21tb24iLCJ3aGl0ZSIsIm1hcmdpbkxlZnQiLCJ3aWR0aCIsImJyZWFrcG9pbnRzIiwidXAiLCJzZWFyY2hJY29uIiwicGFkZGluZyIsImhlaWdodCIsInBvaW50ZXJFdmVudHMiLCJpbnB1dFJvb3QiLCJpbnB1dElucHV0IiwicGFkZGluZ0xlZnQiLCJ0cmFuc2l0aW9uIiwidHJhbnNpdGlvbnMiLCJjcmVhdGUiLCJzZWN0aW9uRGVza3RvcCIsInNlY3Rpb25Nb2JpbGUiLCJhY2NOYW1lIiwiVG9wTmF2IiwicHJvcHMiLCJjbGFzc2VzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImFuY2hvckVsIiwic2V0QW5jaG9yRWwiLCJtb2JpbGVNb3JlQW5jaG9yRWwiLCJzZXRNb2JpbGVNb3JlQW5jaG9yRWwiLCJpc01lbnVPcGVuIiwiQm9vbGVhbiIsImlzTW9iaWxlTWVudU9wZW4iLCJoYW5kbGVQcm9maWxlTWVudU9wZW4iLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJoYW5kbGVNb2JpbGVNZW51Q2xvc2UiLCJoYW5kbGVNZW51Q2xvc2UiLCJoYW5kbGVNb2JpbGVNZW51T3BlbiIsIm1lbnVJZCIsImJveFNoYWRvdyIsImJhY2tncm91bmQiLCJpbnB1dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUVxQyxPQUFPLENBQUNoQyxLQURyQjtBQUVFLFdBQU8sRUFBQyxXQUZWO0FBR0UsU0FBSyxFQUFDLFNBSFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFoQ0YsRUF1Q0UsTUFBQyxvRUFBRDtBQUNFLFFBQUksRUFBQyxLQURQO0FBRUUsa0JBQVcseUJBRmI7QUFHRSxxQkFBYyxNQUhoQjtBQUlFLFdBQU8sRUFBRTBDLHFCQUpYO0FBS0UsU0FBSyxFQUFDLFNBTFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU9FLE1BQUMsZ0VBQUQ7QUFBZSxTQUFLLEVBQUU7QUFBRS9DLFdBQUssRUFBRTtBQUFULEtBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQRixDQXZDRixDQXpCRixDQUxGLENBREYsQ0FERixDQURGO0FBd0ZEOztHQXJIUW1DLE07VUFDU3pDLFM7OztLQURUeUMsTTtBQXVITUEscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5lZGM4ZjdjZjcwOWNmZGI5ODcwZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFkZ2UsIElucHV0QmFzZSwgTWVudSwgTWVudUl0ZW0gfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IEFwcEJhciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyXCI7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCI7XHJcbmltcG9ydCB7IGZhZGUsIG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBUb29sYmFyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyXCI7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI7XHJcbmltcG9ydCB7IEFjY291bnRDaXJjbGUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zXCI7XHJcbmltcG9ydCBOb3RpZmljYXRpb25zSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTm90aWZpY2F0aW9ucyc7XHJcbmltcG9ydCBTZXR0aW5nc0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1NldHRpbmdzJztcclxuaW1wb3J0IE1lbnVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9NZW51JztcclxuaW1wb3J0IFRyZW5kaW5nVXBJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9UcmVuZGluZ1VwJztcclxuaW1wb3J0IFNlYXJjaEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1NlYXJjaCc7XHJcbmltcG9ydCBIZWxwSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvSGVscCc7XHJcbmltcG9ydCBNb3JlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTW9yZSc7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGZsZXhHcm93OiAxLFxyXG4gIH0sXHJcbiAgY29tcGFueVRpdGxlOiB7XHJcbiAgICBjb2xvcjogJyMxMDEwMTAnLFxyXG4gICAgZm9udFNpemU6IFwiMTZweFwiLFxyXG4gICAgLy8gZm9udFdlaWdodDogXCJcIixcclxuICB9LFxyXG4gIG1lbnVCdXR0b246IHtcclxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gIH0sXHJcbiAgdGl0bGU6IHtcclxuICAgIGNvbG9yOiAnIzEwMTAxMCcsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJ1xyXG4gIH0sXHJcbiAgZ3Jvdzoge1xyXG4gICAgZmxleEdyb3c6IDEsXHJcbiAgfSxcclxuICBzZWFyY2g6IHtcclxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICBib3JkZXJSYWRpdXM6IFwiMTZweFwiLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiBmYWRlKHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLCAwLjE1KSxcclxuICAgIFwiJjpob3ZlclwiOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogZmFkZSh0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSwgMC4yNSksXHJcbiAgICB9LFxyXG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICBtYXJnaW5MZWZ0OiAwLFxyXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwic21cIildOiB7XHJcbiAgICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMyksXHJcbiAgICAgIHdpZHRoOiBcImF1dG9cIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBzZWFyY2hJY29uOiB7XHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDAsIDIpLFxyXG4gICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICBwb2ludGVyRXZlbnRzOiBcIm5vbmVcIixcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gIH0sXHJcbiAgaW5wdXRSb290OiB7XHJcbiAgICBjb2xvcjogJyMxMDEwMTAnLFxyXG4gIH0sXHJcbiAgaW5wdXRJbnB1dDoge1xyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygxLCAxLCAxLCAwKSxcclxuICAgIC8vIHZlcnRpY2FsIHBhZGRpbmcgKyBmb250IHNpemUgZnJvbSBzZWFyY2hJY29uXHJcbiAgICBwYWRkaW5nTGVmdDogYGNhbGMoMWVtICsgJHt0aGVtZS5zcGFjaW5nKDQpfXB4KWAsXHJcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoXCJ3aWR0aFwiKSxcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcIm1kXCIpXToge1xyXG4gICAgICB3aWR0aDogXCIyMGNoXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc2VjdGlvbkRlc2t0b3A6IHtcclxuICAgIGRpc3BsYXk6IFwibm9uZVwiLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwibWRcIildOiB7XHJcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHNlY3Rpb25Nb2JpbGU6IHtcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwibWRcIildOiB7XHJcbiAgICAgIGRpc3BsYXk6IFwibm9uZVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGFjY05hbWU6IHtcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICB9LFxyXG59KSk7XHJcblxyXG5mdW5jdGlvbiBUb3BOYXYocHJvcHMpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgY29uc3QgW2FuY2hvckVsLCBzZXRBbmNob3JFbF0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbbW9iaWxlTW9yZUFuY2hvckVsLCBzZXRNb2JpbGVNb3JlQW5jaG9yRWxdID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIGNvbnN0IGlzTWVudU9wZW4gPSBCb29sZWFuKGFuY2hvckVsKTtcclxuICBjb25zdCBpc01vYmlsZU1lbnVPcGVuID0gQm9vbGVhbihtb2JpbGVNb3JlQW5jaG9yRWwpO1xyXG5cclxuICBjb25zdCBoYW5kbGVQcm9maWxlTWVudU9wZW4gPSAoZXZlbnQpID0+IHtcclxuICAgIHNldEFuY2hvckVsKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZU1vYmlsZU1lbnVDbG9zZSA9ICgpID0+IHtcclxuICAgIHNldE1vYmlsZU1vcmVBbmNob3JFbChudWxsKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVNZW51Q2xvc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRBbmNob3JFbChudWxsKTtcclxuICAgIGhhbmRsZU1vYmlsZU1lbnVDbG9zZSgpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZU1vYmlsZU1lbnVPcGVuID0gKGV2ZW50KSA9PiB7XHJcbiAgICBzZXRNb2JpbGVNb3JlQW5jaG9yRWwoZXZlbnQuY3VycmVudFRhcmdldCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbWVudUlkID0gXCJwcmltYXJ5LXNlYXJjaC1hY2NvdW50LW1lbnVcIjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmdyb3d9PlxyXG4gICAgICAgIDxBcHBCYXJcclxuICAgICAgICAgIHBvc2l0aW9uPVwic3RhdGljXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlXCJcclxuICAgICAgICAgIHN0eWxlPXt7IGJveFNoYWRvdzogXCJub25lXCIgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8VG9vbGJhcj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCJcXGltYWdlc1xcVlZsb2dvLnBuZ1wiIGNsYXNzTmFtZT1cInByLTVcIiAvPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgIGVkZ2U9XCJzdGFydFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1lbnVCdXR0b259XHJcbiAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwib3BlbiBkcmF3ZXJcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPE1lbnVJY29uIHN0eWxlPXt7IGNvbG9yOiAnI0RDRTBFMicsIGZvbnRTaXplOiAnNDAnIH19IC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbXBhbnlUaXRsZX0+Q8O0bmcgdHkgVlYgU29sdXRpb25zPC9zcGFuPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWFyY2h9IHN0eWxlPXt7IGJhY2tncm91bmQ6IFwiI0Y3RjdGN1wiIH19PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlYXJjaEljb259PlxyXG4gICAgICAgICAgICAgICAgPFNlYXJjaEljb24gc3R5bGU9e3sgY29sb3I6ICcjMkZBQUZDJyB9fSAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxJbnB1dEJhc2VcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNo4oCmXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzZXM9e3tcclxuICAgICAgICAgICAgICAgICAgcm9vdDogY2xhc3Nlcy5pbnB1dFJvb3QsXHJcbiAgICAgICAgICAgICAgICAgIGlucHV0OiBjbGFzc2VzLmlucHV0SW5wdXQsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17eyBcImFyaWEtbGFiZWxcIjogXCJzZWFyY2hcIiB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ncm93fSAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWN0aW9uRGVza3RvcH0+XHJcbiAgICAgICAgICAgICAgPEljb25CdXR0b24gYXJpYS1sYWJlbD1cInNob3cgXCIgY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICA8QmFkZ2UgY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxTZXR0aW5nc0ljb24gc3R5bGU9e3sgY29sb3I6ICcjNUE1QTVBJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9CYWRnZT5cclxuICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgPEljb25CdXR0b24gYXJpYS1sYWJlbD1cInNob3cgXCIgY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICA8QmFkZ2UgY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxUcmVuZGluZ1VwSWNvbiBzdHlsZT17eyBjb2xvcjogJyM1QTVBNUEnIH19IC8+XHJcbiAgICAgICAgICAgICAgICA8L0JhZGdlPlxyXG4gICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwic2hvd1wiIGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgPEJhZGdlIGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICA8SGVscEljb24gc3R5bGU9e3sgY29sb3I6ICcjNUE1QTVBJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9CYWRnZT5cclxuICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX1cclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIlxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBI4buXIHRy4bujXHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG5cclxuICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cInNob3cgMTcgbmV3IG5vdGlmaWNhdGlvbnNcIlxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8QmFkZ2UgYmFkZ2VDb250ZW50PXsxN30gY29sb3I9XCJzZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgICAgPE5vdGlmaWNhdGlvbnNJY29uIHN0eWxlPXt7IGNvbG9yOiAnIzVBNUE1QScgfX0gLz5cclxuICAgICAgICAgICAgICAgIDwvQmFkZ2U+XHJcbiAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwic3VidGl0bGUxXCJcclxuICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQWNjb3VudCBOYW1lXHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICBlZGdlPVwiZW5kXCJcclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJhY2NvdW50IG9mIGN1cnJlbnQgdXNlclwiXHJcbiAgICAgICAgICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVQcm9maWxlTWVudU9wZW59XHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxBY2NvdW50Q2lyY2xlIHN0eWxlPXt7IGNvbG9yOiAnIzVBNUE1QScgfX0gLz5cclxuICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICA8L0FwcEJhcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb3BOYXY7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
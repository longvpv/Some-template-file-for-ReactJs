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
/* harmony import */ var _material_ui_icons_More__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/More */ "./node_modules/@material-ui/icons/More.js");
/* harmony import */ var _material_ui_icons_More__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_More__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_16__);



var _jsxFileName = "C:\\Long\\CODE\\ERP\\erp.webapp\\component\\topNav\\topnav.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement;















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

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_16___default.a.useState(null),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      anchorEl = _React$useState2[0],
      setAnchorEl = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_16___default.a.useState(null),
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
    color: "secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 17
    }
  }, __jsx(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_10___default.a, {
    style: {
      color: '#101010'
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
    color: "secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 17
    }
  }, __jsx(_material_ui_icons_TrendingUp__WEBPACK_IMPORTED_MODULE_12___default.a, {
    style: {
      color: '#101010'
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
    color: "secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 17
    }
  }, __jsx(_material_ui_icons_Help__WEBPACK_IMPORTED_MODULE_14___default.a, {
    style: {
      color: '#101010'
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
    color: "secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 15
    }
  }, "H\u1ED7 tr\u1EE3"), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    "aria-label": "show 17 new notifications",
    color: "secondary",
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
      color: '#101010'
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
    color: "secondary",
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
    color: "secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 15
    }
  }, __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_8__["AccountCircle"], {
    style: {
      color: '#101010'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: classes.sectionMobile,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    "aria-label": "show more",
    "aria-haspopup": "true",
    onClick: handleMobileMenuOpen,
    color: "secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 15
    }
  }, __jsx(_material_ui_icons_More__WEBPACK_IMPORTED_MODULE_15___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L3RvcE5hdi90b3BuYXYudHN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJmbGV4R3JvdyIsImNvbXBhbnlUaXRsZSIsImNvbG9yIiwiZm9udFNpemUiLCJtZW51QnV0dG9uIiwibWFyZ2luUmlnaHQiLCJzcGFjaW5nIiwidGl0bGUiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiZ3JvdyIsInNlYXJjaCIsInBvc2l0aW9uIiwiYm9yZGVyUmFkaXVzIiwiYmFja2dyb3VuZENvbG9yIiwiZmFkZSIsInBhbGV0dGUiLCJjb21tb24iLCJ3aGl0ZSIsIm1hcmdpbkxlZnQiLCJ3aWR0aCIsImJyZWFrcG9pbnRzIiwidXAiLCJzZWFyY2hJY29uIiwicGFkZGluZyIsImhlaWdodCIsInBvaW50ZXJFdmVudHMiLCJpbnB1dFJvb3QiLCJpbnB1dElucHV0IiwicGFkZGluZ0xlZnQiLCJ0cmFuc2l0aW9uIiwidHJhbnNpdGlvbnMiLCJjcmVhdGUiLCJzZWN0aW9uRGVza3RvcCIsInNlY3Rpb25Nb2JpbGUiLCJhY2NOYW1lIiwiVG9wTmF2IiwicHJvcHMiLCJjbGFzc2VzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImFuY2hvckVsIiwic2V0QW5jaG9yRWwiLCJtb2JpbGVNb3JlQW5jaG9yRWwiLCJzZXRNb2JpbGVNb3JlQW5jaG9yRWwiLCJpc01lbnVPcGVuIiwiQm9vbGVhbiIsImlzTW9iaWxlTWVudU9wZW4iLCJoYW5kbGVQcm9maWxlTWVudU9wZW4iLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJoYW5kbGVNb2JpbGVNZW51Q2xvc2UiLCJoYW5kbGVNZW51Q2xvc2UiLCJoYW5kbGVNb2JpbGVNZW51T3BlbiIsIm1lbnVJZCIsImJveFNoYWRvdyIsImJhY2tncm91bmQiLCJpbnB1dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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YUFBUyxFQUFFcUMsT0FBTyxDQUFDaEMsS0FEckI7QUFFRSxXQUFPLEVBQUMsV0FGVjtBQUdFLFNBQUssRUFBQyxXQUhSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBaENGLEVBdUNFLE1BQUMsb0VBQUQ7QUFDRSxRQUFJLEVBQUMsS0FEUDtBQUVFLGtCQUFXLHlCQUZiO0FBR0UscUJBQWMsTUFIaEI7QUFJRSxXQUFPLEVBQUUwQyxxQkFKWDtBQUtFLFNBQUssRUFBQyxXQUxSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FPRSxNQUFDLGdFQUFEO0FBQWUsU0FBSyxFQUFFO0FBQUUvQyxXQUFLLEVBQUU7QUFBVCxLQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEYsQ0F2Q0YsQ0F6QkYsRUEwRUU7QUFBSyxhQUFTLEVBQUVxQyxPQUFPLENBQUNKLGFBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9FQUFEO0FBQ0Usa0JBQVcsV0FEYjtBQUVFLHFCQUFjLE1BRmhCO0FBR0UsV0FBTyxFQUFFbUIsb0JBSFg7QUFJRSxTQUFLLEVBQUMsV0FKUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUUsTUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkYsQ0FERixDQTFFRixDQUxGLENBREYsQ0FERixDQURGO0FBaUdEOztHQTlIUWpCLE07VUFDU3pDLFM7OztLQURUeUMsTTtBQWdJTUEscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC44ZWVjMGI4ZDViYjZlMDMwZWZhYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFkZ2UsIElucHV0QmFzZSwgTWVudSwgTWVudUl0ZW0gfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IEFwcEJhciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyXCI7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCI7XHJcbmltcG9ydCB7IGZhZGUsIG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBUb29sYmFyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyXCI7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI7XHJcbmltcG9ydCB7IEFjY291bnRDaXJjbGUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zXCI7XHJcbmltcG9ydCBOb3RpZmljYXRpb25zSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTm90aWZpY2F0aW9ucyc7XHJcbmltcG9ydCBTZXR0aW5nc0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1NldHRpbmdzJztcclxuaW1wb3J0IE1lbnVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9NZW51JztcclxuaW1wb3J0IFRyZW5kaW5nVXBJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9UcmVuZGluZ1VwJztcclxuaW1wb3J0IFNlYXJjaEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1NlYXJjaCc7XHJcbmltcG9ydCBIZWxwSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvSGVscCc7XHJcbmltcG9ydCBNb3JlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTW9yZSc7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGZsZXhHcm93OiAxLFxyXG4gIH0sXHJcbiAgY29tcGFueVRpdGxlOiB7XHJcbiAgICBjb2xvcjogJyMxMDEwMTAnLFxyXG4gICAgZm9udFNpemU6IFwiMTZweFwiLFxyXG4gICAgLy8gZm9udFdlaWdodDogXCJcIixcclxuICB9LFxyXG4gIG1lbnVCdXR0b246IHtcclxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gIH0sXHJcbiAgdGl0bGU6IHtcclxuICAgIGNvbG9yOiAnIzEwMTAxMCcsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJ1xyXG4gIH0sXHJcbiAgZ3Jvdzoge1xyXG4gICAgZmxleEdyb3c6IDEsXHJcbiAgfSxcclxuICBzZWFyY2g6IHtcclxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICBib3JkZXJSYWRpdXM6IFwiMTZweFwiLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiBmYWRlKHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLCAwLjE1KSxcclxuICAgIFwiJjpob3ZlclwiOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogZmFkZSh0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSwgMC4yNSksXHJcbiAgICB9LFxyXG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICBtYXJnaW5MZWZ0OiAwLFxyXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwic21cIildOiB7XHJcbiAgICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMyksXHJcbiAgICAgIHdpZHRoOiBcImF1dG9cIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBzZWFyY2hJY29uOiB7XHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDAsIDIpLFxyXG4gICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICBwb2ludGVyRXZlbnRzOiBcIm5vbmVcIixcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gIH0sXHJcbiAgaW5wdXRSb290OiB7XHJcbiAgICBjb2xvcjogJyMxMDEwMTAnLFxyXG4gIH0sXHJcbiAgaW5wdXRJbnB1dDoge1xyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygxLCAxLCAxLCAwKSxcclxuICAgIC8vIHZlcnRpY2FsIHBhZGRpbmcgKyBmb250IHNpemUgZnJvbSBzZWFyY2hJY29uXHJcbiAgICBwYWRkaW5nTGVmdDogYGNhbGMoMWVtICsgJHt0aGVtZS5zcGFjaW5nKDQpfXB4KWAsXHJcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoXCJ3aWR0aFwiKSxcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcIm1kXCIpXToge1xyXG4gICAgICB3aWR0aDogXCIyMGNoXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc2VjdGlvbkRlc2t0b3A6IHtcclxuICAgIGRpc3BsYXk6IFwibm9uZVwiLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwibWRcIildOiB7XHJcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHNlY3Rpb25Nb2JpbGU6IHtcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwibWRcIildOiB7XHJcbiAgICAgIGRpc3BsYXk6IFwibm9uZVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGFjY05hbWU6IHtcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICB9LFxyXG59KSk7XHJcblxyXG5mdW5jdGlvbiBUb3BOYXYocHJvcHMpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgY29uc3QgW2FuY2hvckVsLCBzZXRBbmNob3JFbF0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbbW9iaWxlTW9yZUFuY2hvckVsLCBzZXRNb2JpbGVNb3JlQW5jaG9yRWxdID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIGNvbnN0IGlzTWVudU9wZW4gPSBCb29sZWFuKGFuY2hvckVsKTtcclxuICBjb25zdCBpc01vYmlsZU1lbnVPcGVuID0gQm9vbGVhbihtb2JpbGVNb3JlQW5jaG9yRWwpO1xyXG5cclxuICBjb25zdCBoYW5kbGVQcm9maWxlTWVudU9wZW4gPSAoZXZlbnQpID0+IHtcclxuICAgIHNldEFuY2hvckVsKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZU1vYmlsZU1lbnVDbG9zZSA9ICgpID0+IHtcclxuICAgIHNldE1vYmlsZU1vcmVBbmNob3JFbChudWxsKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVNZW51Q2xvc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRBbmNob3JFbChudWxsKTtcclxuICAgIGhhbmRsZU1vYmlsZU1lbnVDbG9zZSgpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZU1vYmlsZU1lbnVPcGVuID0gKGV2ZW50KSA9PiB7XHJcbiAgICBzZXRNb2JpbGVNb3JlQW5jaG9yRWwoZXZlbnQuY3VycmVudFRhcmdldCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbWVudUlkID0gXCJwcmltYXJ5LXNlYXJjaC1hY2NvdW50LW1lbnVcIjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmdyb3d9PlxyXG4gICAgICAgIDxBcHBCYXJcclxuICAgICAgICAgIHBvc2l0aW9uPVwic3RhdGljXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlXCJcclxuICAgICAgICAgIHN0eWxlPXt7IGJveFNoYWRvdzogXCJub25lXCIgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8VG9vbGJhcj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCJcXGltYWdlc1xcVlZsb2dvLnBuZ1wiIGNsYXNzTmFtZT1cInByLTVcIiAvPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgIGVkZ2U9XCJzdGFydFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1lbnVCdXR0b259XHJcbiAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwib3BlbiBkcmF3ZXJcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPE1lbnVJY29uIHN0eWxlPXt7IGNvbG9yOiAnI0RDRTBFMicsIGZvbnRTaXplOiAnNDAnIH19IC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbXBhbnlUaXRsZX0+Q8O0bmcgdHkgVlYgU29sdXRpb25zPC9zcGFuPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWFyY2h9IHN0eWxlPXt7IGJhY2tncm91bmQ6IFwiI0Y3RjdGN1wiIH19PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlYXJjaEljb259PlxyXG4gICAgICAgICAgICAgICAgPFNlYXJjaEljb24gc3R5bGU9e3sgY29sb3I6ICcjMkZBQUZDJyB9fSAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxJbnB1dEJhc2VcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNo4oCmXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzZXM9e3tcclxuICAgICAgICAgICAgICAgICAgcm9vdDogY2xhc3Nlcy5pbnB1dFJvb3QsXHJcbiAgICAgICAgICAgICAgICAgIGlucHV0OiBjbGFzc2VzLmlucHV0SW5wdXQsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17eyBcImFyaWEtbGFiZWxcIjogXCJzZWFyY2hcIiB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ncm93fSAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWN0aW9uRGVza3RvcH0+XHJcbiAgICAgICAgICAgICAgPEljb25CdXR0b24gYXJpYS1sYWJlbD1cInNob3cgXCIgY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICA8QmFkZ2UgY29sb3I9XCJzZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgICAgPFNldHRpbmdzSWNvbiBzdHlsZT17eyBjb2xvcjogJyMxMDEwMTAnIH19IC8+XHJcbiAgICAgICAgICAgICAgICA8L0JhZGdlPlxyXG4gICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwic2hvdyBcIiBjb2xvcj1cInByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgIDxCYWRnZSBjb2xvcj1cInNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICA8VHJlbmRpbmdVcEljb24gc3R5bGU9e3sgY29sb3I6ICcjMTAxMDEwJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9CYWRnZT5cclxuICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgPEljb25CdXR0b24gYXJpYS1sYWJlbD1cInNob3dcIiBjb2xvcj1cInByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgIDxCYWRnZSBjb2xvcj1cInNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICA8SGVscEljb24gc3R5bGU9e3sgY29sb3I6ICcjMTAxMDEwJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9CYWRnZT5cclxuICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX1cclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIlxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIEjhu5cgdHLhu6NcclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcblxyXG4gICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwic2hvdyAxNyBuZXcgbm90aWZpY2F0aW9uc1wiXHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEJhZGdlIGJhZGdlQ29udGVudD17MTd9IGNvbG9yPVwic2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxOb3RpZmljYXRpb25zSWNvbiBzdHlsZT17eyBjb2xvcjogJyMxMDEwMTAnIH19IC8+XHJcbiAgICAgICAgICAgICAgICA8L0JhZGdlPlxyXG4gICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cInN1YnRpdGxlMVwiXHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQWNjb3VudCBOYW1lXHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICBlZGdlPVwiZW5kXCJcclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJhY2NvdW50IG9mIGN1cnJlbnQgdXNlclwiXHJcbiAgICAgICAgICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVQcm9maWxlTWVudU9wZW59XHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEFjY291bnRDaXJjbGUgc3R5bGU9e3sgY29sb3I6ICcjMTAxMDEwJyB9fSAvPlxyXG4gICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlY3Rpb25Nb2JpbGV9PlxyXG4gICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwic2hvdyBtb3JlXCJcclxuICAgICAgICAgICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU1vYmlsZU1lbnVPcGVufVxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxNb3JlSWNvbiAvPlxyXG4gICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgICAgPC9BcHBCYXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9wTmF2O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
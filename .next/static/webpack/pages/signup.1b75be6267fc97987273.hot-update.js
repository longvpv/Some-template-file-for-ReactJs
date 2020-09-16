webpackHotUpdate_N_E("pages/signup",{

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
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1,
      color: '#101010'
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
      lineNumber: 116,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: classes.grow,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
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
      lineNumber: 118,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "\\images\\VVlogo.png",
    className: "pr-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
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
      lineNumber: 125,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_11___default.a, {
    style: {
      color: '#101010'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 15
    }
  })), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: classes.title,
    noWrap: true,
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
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
      lineNumber: 137,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: classes.searchIcon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 15
    }
  }, __jsx(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_13___default.a, {
    style: {
      color: '#101010'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
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
      lineNumber: 141,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: classes.grow,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: classes.sectionDesktop,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    "aria-label": "show ",
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Badge"], {
    color: "secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 17
    }
  }, __jsx(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_10___default.a, {
    style: {
      color: '#101010'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 19
    }
  }))), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    "aria-label": "show ",
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Badge"], {
    color: "secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 17
    }
  }, __jsx(_material_ui_icons_TrendingUp__WEBPACK_IMPORTED_MODULE_12___default.a, {
    style: {
      color: '#101010'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 19
    }
  }))), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    "aria-label": "show",
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Badge"], {
    color: "secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 17
    }
  }, __jsx(_material_ui_icons_Help__WEBPACK_IMPORTED_MODULE_14___default.a, {
    style: {
      color: '#101010'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 19
    }
  }))), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: classes.title,
    variant: "subtitle1",
    color: "secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 15
    }
  }, "H\u1ED7 tr\u1EE3"), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    "aria-label": "show 17 new notifications",
    color: "secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Badge"], {
    badgeContent: 17,
    color: "secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 17
    }
  }, __jsx(_material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_9___default.a, {
    style: {
      color: '#101010'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 19
    }
  }))), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: classes.title,
    variant: "subtitle1",
    color: "secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
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
      lineNumber: 190,
      columnNumber: 15
    }
  }, __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_8__["AccountCircle"], {
    style: {
      color: '#101010'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: classes.sectionMobile,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
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
      lineNumber: 201,
      columnNumber: 15
    }
  }, __jsx(_material_ui_icons_More__WEBPACK_IMPORTED_MODULE_15___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L3RvcE5hdi90b3BuYXYudHN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJmbGV4R3JvdyIsIm1lbnVCdXR0b24iLCJtYXJnaW5SaWdodCIsInNwYWNpbmciLCJ0aXRsZSIsImNvbG9yIiwiZ3JvdyIsInNlYXJjaCIsInBvc2l0aW9uIiwiYm9yZGVyUmFkaXVzIiwiYmFja2dyb3VuZENvbG9yIiwiZmFkZSIsInBhbGV0dGUiLCJjb21tb24iLCJ3aGl0ZSIsIm1hcmdpbkxlZnQiLCJ3aWR0aCIsImJyZWFrcG9pbnRzIiwidXAiLCJzZWFyY2hJY29uIiwicGFkZGluZyIsImhlaWdodCIsInBvaW50ZXJFdmVudHMiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiaW5wdXRSb290IiwiaW5wdXRJbnB1dCIsInBhZGRpbmdMZWZ0IiwidHJhbnNpdGlvbiIsInRyYW5zaXRpb25zIiwiY3JlYXRlIiwic2VjdGlvbkRlc2t0b3AiLCJzZWN0aW9uTW9iaWxlIiwiYWNjTmFtZSIsIlRvcE5hdiIsInByb3BzIiwiY2xhc3NlcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJhbmNob3JFbCIsInNldEFuY2hvckVsIiwibW9iaWxlTW9yZUFuY2hvckVsIiwic2V0TW9iaWxlTW9yZUFuY2hvckVsIiwiaXNNZW51T3BlbiIsIkJvb2xlYW4iLCJpc01vYmlsZU1lbnVPcGVuIiwiaGFuZGxlUHJvZmlsZU1lbnVPcGVuIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiaGFuZGxlTW9iaWxlTWVudUNsb3NlIiwiaGFuZGxlTWVudUNsb3NlIiwiaGFuZGxlTW9iaWxlTWVudU9wZW4iLCJtZW51SWQiLCJib3hTaGFkb3ciLCJiYWNrZ3JvdW5kIiwiaW5wdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtB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LFFBQUksRUFBQyxLQURQO0FBRUUsa0JBQVcseUJBRmI7QUFHRSxxQkFBYyxNQUhoQjtBQUlFLFdBQU8sRUFBRTJDLHFCQUpYO0FBS0UsU0FBSyxFQUFDLFdBTFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU9FLE1BQUMsZ0VBQUQ7QUFBZSxTQUFLLEVBQUU7QUFBRTFDLFdBQUssRUFBRTtBQUFULEtBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQRixDQXZDRixDQTVCRixFQTZFRTtBQUFLLGFBQVMsRUFBRWdDLE9BQU8sQ0FBQ0osYUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsb0VBQUQ7QUFDRSxrQkFBVyxXQURiO0FBRUUscUJBQWMsTUFGaEI7QUFHRSxXQUFPLEVBQUVtQixvQkFIWDtBQUlFLFNBQUssRUFBQyxXQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNRSxNQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFORixDQURGLENBN0VGLENBTEYsQ0FERixDQURGLENBREY7QUFvR0Q7O0dBaklRakIsTTtVQUNTdkMsUzs7O0tBRFR1QyxNO0FBbUlNQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zaWdudXAuMWI3NWJlNjI2N2ZjOTc5ODcyNzMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhZGdlLCBJbnB1dEJhc2UsIE1lbnUsIE1lbnVJdGVtIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBBcHBCYXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0FwcEJhclwiO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiO1xyXG5pbXBvcnQgeyBmYWRlLCBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgVG9vbGJhciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhclwiO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiO1xyXG5pbXBvcnQgeyBBY2NvdW50Q2lyY2xlIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29uc1wiO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uc0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL05vdGlmaWNhdGlvbnMnO1xyXG5pbXBvcnQgU2V0dGluZ3NJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TZXR0aW5ncyc7XHJcbmltcG9ydCBNZW51SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudSc7XHJcbmltcG9ydCBUcmVuZGluZ1VwSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvVHJlbmRpbmdVcCc7XHJcbmltcG9ydCBTZWFyY2hJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TZWFyY2gnO1xyXG5pbXBvcnQgSGVscEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0hlbHAnO1xyXG5pbXBvcnQgTW9yZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01vcmUnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBmbGV4R3JvdzogMSxcclxuICB9LFxyXG4gIG1lbnVCdXR0b246IHtcclxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gIH0sXHJcbiAgdGl0bGU6IHtcclxuICAgIGZsZXhHcm93OiAxLFxyXG4gICAgY29sb3I6ICcjMTAxMDEwJyxcclxuICB9LFxyXG4gIGdyb3c6IHtcclxuICAgIGZsZXhHcm93OiAxLFxyXG4gIH0sXHJcbiAgc2VhcmNoOiB7XHJcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgYm9yZGVyUmFkaXVzOiBcIjE2cHhcIixcclxuICAgIGJhY2tncm91bmRDb2xvcjogZmFkZSh0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSwgMC4xNSksXHJcbiAgICBcIiY6aG92ZXJcIjoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGZhZGUodGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsIDAuMjUpLFxyXG4gICAgfSxcclxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgbWFyZ2luTGVmdDogMCxcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcInNtXCIpXToge1xyXG4gICAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDMpLFxyXG4gICAgICB3aWR0aDogXCJhdXRvXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc2VhcmNoSWNvbjoge1xyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygwLCAyKSxcclxuICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgcG9pbnRlckV2ZW50czogXCJub25lXCIsXHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICB9LFxyXG4gIGlucHV0Um9vdDoge1xyXG4gICAgY29sb3I6ICcjMTAxMDEwJyxcclxuICB9LFxyXG4gIGlucHV0SW5wdXQ6IHtcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMSwgMSwgMSwgMCksXHJcbiAgICAvLyB2ZXJ0aWNhbCBwYWRkaW5nICsgZm9udCBzaXplIGZyb20gc2VhcmNoSWNvblxyXG4gICAgcGFkZGluZ0xlZnQ6IGBjYWxjKDFlbSArICR7dGhlbWUuc3BhY2luZyg0KX1weClgLFxyXG4gICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFwid2lkdGhcIiksXHJcbiAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJtZFwiKV06IHtcclxuICAgICAgd2lkdGg6IFwiMjBjaFwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHNlY3Rpb25EZXNrdG9wOiB7XHJcbiAgICBkaXNwbGF5OiBcIm5vbmVcIixcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcIm1kXCIpXToge1xyXG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBzZWN0aW9uTW9iaWxlOiB7XHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcIm1kXCIpXToge1xyXG4gICAgICBkaXNwbGF5OiBcIm5vbmVcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBhY2NOYW1lOiB7XHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuZnVuY3Rpb24gVG9wTmF2KHByb3BzKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIGNvbnN0IFthbmNob3JFbCwgc2V0QW5jaG9yRWxdID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW21vYmlsZU1vcmVBbmNob3JFbCwgc2V0TW9iaWxlTW9yZUFuY2hvckVsXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xyXG5cclxuICBjb25zdCBpc01lbnVPcGVuID0gQm9vbGVhbihhbmNob3JFbCk7XHJcbiAgY29uc3QgaXNNb2JpbGVNZW51T3BlbiA9IEJvb2xlYW4obW9iaWxlTW9yZUFuY2hvckVsKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUHJvZmlsZU1lbnVPcGVuID0gKGV2ZW50KSA9PiB7XHJcbiAgICBzZXRBbmNob3JFbChldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVNb2JpbGVNZW51Q2xvc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRNb2JpbGVNb3JlQW5jaG9yRWwobnVsbCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTWVudUNsb3NlID0gKCkgPT4ge1xyXG4gICAgc2V0QW5jaG9yRWwobnVsbCk7XHJcbiAgICBoYW5kbGVNb2JpbGVNZW51Q2xvc2UoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVNb2JpbGVNZW51T3BlbiA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0TW9iaWxlTW9yZUFuY2hvckVsKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG1lbnVJZCA9IFwicHJpbWFyeS1zZWFyY2gtYWNjb3VudC1tZW51XCI7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ncm93fT5cclxuICAgICAgICA8QXBwQmFyXHJcbiAgICAgICAgICBwb3NpdGlvbj1cInN0YXRpY1wiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZVwiXHJcbiAgICAgICAgICBzdHlsZT17eyBib3hTaGFkb3c6IFwibm9uZVwiIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFRvb2xiYXI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiXFxpbWFnZXNcXFZWbG9nby5wbmdcIiBjbGFzc05hbWU9XCJwci01XCIgLz5cclxuICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICBlZGdlPVwic3RhcnRcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZW51QnV0dG9ufVxyXG4gICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIm9wZW4gZHJhd2VyXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxNZW51SWNvbiBzdHlsZT17eyBjb2xvcjogJyMxMDEwMTAnIH19IC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfSBub1dyYXAgY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgQ8O0bmcgdHkgVlYgU29sdXRpb25zXHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlYXJjaH0gc3R5bGU9e3sgYmFja2dyb3VuZDogXCIjRjdGN0Y3XCIgfX0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VhcmNoSWNvbn0+XHJcbiAgICAgICAgICAgICAgICA8U2VhcmNoSWNvbiBzdHlsZT17eyBjb2xvcjogJyMxMDEwMTAnIH19IC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPElucHV0QmFzZVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2jigKZcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgICAgICAgICByb290OiBjbGFzc2VzLmlucHV0Um9vdCxcclxuICAgICAgICAgICAgICAgICAgaW5wdXQ6IGNsYXNzZXMuaW5wdXRJbnB1dCxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7IFwiYXJpYS1sYWJlbFwiOiBcInNlYXJjaFwiIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmdyb3d9IC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlY3Rpb25EZXNrdG9wfT5cclxuICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwic2hvdyBcIiBjb2xvcj1cInByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgIDxCYWRnZSBjb2xvcj1cInNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICA8U2V0dGluZ3NJY29uIHN0eWxlPXt7IGNvbG9yOiAnIzEwMTAxMCcgfX0gLz5cclxuICAgICAgICAgICAgICAgIDwvQmFkZ2U+XHJcbiAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9XCJzaG93IFwiIGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgPEJhZGdlIGNvbG9yPVwic2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxUcmVuZGluZ1VwSWNvbiBzdHlsZT17eyBjb2xvcjogJyMxMDEwMTAnIH19IC8+XHJcbiAgICAgICAgICAgICAgICA8L0JhZGdlPlxyXG4gICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwic2hvd1wiIGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgPEJhZGdlIGNvbG9yPVwic2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxIZWxwSWNvbiBzdHlsZT17eyBjb2xvcjogJyMxMDEwMTAnIH19IC8+XHJcbiAgICAgICAgICAgICAgICA8L0JhZGdlPlxyXG4gICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cInN1YnRpdGxlMVwiXHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgSOG7lyB0cuG7o1xyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuXHJcbiAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJzaG93IDE3IG5ldyBub3RpZmljYXRpb25zXCJcclxuICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8QmFkZ2UgYmFkZ2VDb250ZW50PXsxN30gY29sb3I9XCJzZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgICAgPE5vdGlmaWNhdGlvbnNJY29uIHN0eWxlPXt7IGNvbG9yOiAnIzEwMTAxMCcgfX0gLz5cclxuICAgICAgICAgICAgICAgIDwvQmFkZ2U+XHJcbiAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwic3VidGl0bGUxXCJcclxuICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBBY2NvdW50IE5hbWVcclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgIGVkZ2U9XCJlbmRcIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cImFjY291bnQgb2YgY3VycmVudCB1c2VyXCJcclxuICAgICAgICAgICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVByb2ZpbGVNZW51T3Blbn1cclxuICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8QWNjb3VudENpcmNsZSBzdHlsZT17eyBjb2xvcjogJyMxMDEwMTAnIH19IC8+XHJcbiAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VjdGlvbk1vYmlsZX0+XHJcbiAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJzaG93IG1vcmVcIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTW9iaWxlTWVudU9wZW59XHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPE1vcmVJY29uIC8+XHJcbiAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICA8L0FwcEJhcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb3BOYXY7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
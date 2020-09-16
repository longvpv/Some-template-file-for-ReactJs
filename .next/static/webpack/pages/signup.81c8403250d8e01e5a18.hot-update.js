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
      lineNumber: 119,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: classes.grow,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
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
      lineNumber: 121,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "\\images\\VVlogo.png",
    className: "pr-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
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
      lineNumber: 128,
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
      lineNumber: 134,
      columnNumber: 15
    }
  })), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
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
      color: '#2FAAFC'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L3RvcE5hdi90b3BuYXYudHN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJmbGV4R3JvdyIsIm1lbnVCdXR0b24iLCJtYXJnaW5SaWdodCIsInNwYWNpbmciLCJ0aXRsZSIsImNvbG9yIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImdyb3ciLCJzZWFyY2giLCJwb3NpdGlvbiIsImJvcmRlclJhZGl1cyIsImJhY2tncm91bmRDb2xvciIsImZhZGUiLCJwYWxldHRlIiwiY29tbW9uIiwid2hpdGUiLCJtYXJnaW5MZWZ0Iiwid2lkdGgiLCJicmVha3BvaW50cyIsInVwIiwic2VhcmNoSWNvbiIsInBhZGRpbmciLCJoZWlnaHQiLCJwb2ludGVyRXZlbnRzIiwiaW5wdXRSb290IiwiaW5wdXRJbnB1dCIsInBhZGRpbmdMZWZ0IiwidHJhbnNpdGlvbiIsInRyYW5zaXRpb25zIiwiY3JlYXRlIiwic2VjdGlvbkRlc2t0b3AiLCJzZWN0aW9uTW9iaWxlIiwiYWNjTmFtZSIsIlRvcE5hdiIsInByb3BzIiwiY2xhc3NlcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJhbmNob3JFbCIsInNldEFuY2hvckVsIiwibW9iaWxlTW9yZUFuY2hvckVsIiwic2V0TW9iaWxlTW9yZUFuY2hvckVsIiwiaXNNZW51T3BlbiIsIkJvb2xlYW4iLCJpc01vYmlsZU1lbnVPcGVuIiwiaGFuZGxlUHJvZmlsZU1lbnVPcGVuIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiaGFuZGxlTW9iaWxlTWVudUNsb3NlIiwiaGFuZGxlTWVudUNsb3NlIiwiaGFuZGxlTW9iaWxlTWVudU9wZW4iLCJtZW51SWQiLCJib3hTaGFkb3ciLCJmb250U2l6ZSIsImJhY2tncm91bmQiLCJpbnB1dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QkFoQ0YsRUF1Q0UsTUFBQyxvRUFBRDtBQUNFLFFBQUksRUFBQyxLQURQO0FBRUUsa0JBQVcseUJBRmI7QUFHRSxxQkFBYyxNQUhoQjtBQUlFLFdBQU8sRUFBRTJDLHFCQUpYO0FBS0UsU0FBSyxFQUFDLFdBTFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU9FLE1BQUMsZ0VBQUQ7QUFBZSxTQUFLLEVBQUU7QUFBRTFDLFdBQUssRUFBRTtBQUFULEtBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQRixDQXZDRixDQXpCRixFQTBFRTtBQUFLLGFBQVMsRUFBRWdDLE9BQU8sQ0FBQ0osYUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsb0VBQUQ7QUFDRSxrQkFBVyxXQURiO0FBRUUscUJBQWMsTUFGaEI7QUFHRSxXQUFPLEVBQUVtQixvQkFIWDtBQUlFLFNBQUssRUFBQyxXQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNRSxNQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFORixDQURGLENBMUVGLENBTEYsQ0FERixDQURGLENBREY7QUFpR0Q7O0dBOUhRakIsTTtVQUNTdkMsUzs7O0tBRFR1QyxNO0FBZ0lNQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zaWdudXAuODFjODQwMzI1MGQ4ZTAxZTVhMTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhZGdlLCBJbnB1dEJhc2UsIE1lbnUsIE1lbnVJdGVtIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBBcHBCYXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0FwcEJhclwiO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiO1xyXG5pbXBvcnQgeyBmYWRlLCBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgVG9vbGJhciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhclwiO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiO1xyXG5pbXBvcnQgeyBBY2NvdW50Q2lyY2xlIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29uc1wiO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uc0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL05vdGlmaWNhdGlvbnMnO1xyXG5pbXBvcnQgU2V0dGluZ3NJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TZXR0aW5ncyc7XHJcbmltcG9ydCBNZW51SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudSc7XHJcbmltcG9ydCBUcmVuZGluZ1VwSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvVHJlbmRpbmdVcCc7XHJcbmltcG9ydCBTZWFyY2hJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TZWFyY2gnO1xyXG5pbXBvcnQgSGVscEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0hlbHAnO1xyXG5pbXBvcnQgTW9yZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01vcmUnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBmbGV4R3JvdzogMSxcclxuICB9LFxyXG4gIG1lbnVCdXR0b246IHtcclxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gIH0sXHJcbiAgdGl0bGU6IHtcclxuICAgIGZsZXhHcm93OiAxLFxyXG4gICAgY29sb3I6ICcjMTAxMDEwJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInXHJcbiAgfSxcclxuICBncm93OiB7XHJcbiAgICBmbGV4R3JvdzogMSxcclxuICB9LFxyXG4gIHNlYXJjaDoge1xyXG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgIGJvcmRlclJhZGl1czogXCIxNnB4XCIsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGZhZGUodGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsIDAuMTUpLFxyXG4gICAgXCImOmhvdmVyXCI6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiBmYWRlKHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLCAwLjI1KSxcclxuICAgIH0sXHJcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygyKSxcclxuICAgIG1hcmdpbkxlZnQ6IDAsXHJcbiAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJzbVwiKV06IHtcclxuICAgICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygzKSxcclxuICAgICAgd2lkdGg6IFwiYXV0b1wiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHNlYXJjaEljb246IHtcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMCwgMiksXHJcbiAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgIHBvaW50ZXJFdmVudHM6IFwibm9uZVwiLFxyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgfSxcclxuICBpbnB1dFJvb3Q6IHtcclxuICAgIGNvbG9yOiAnIzEwMTAxMCcsXHJcbiAgfSxcclxuICBpbnB1dElucHV0OiB7XHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDEsIDEsIDEsIDApLFxyXG4gICAgLy8gdmVydGljYWwgcGFkZGluZyArIGZvbnQgc2l6ZSBmcm9tIHNlYXJjaEljb25cclxuICAgIHBhZGRpbmdMZWZ0OiBgY2FsYygxZW0gKyAke3RoZW1lLnNwYWNpbmcoNCl9cHgpYCxcclxuICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShcIndpZHRoXCIpLFxyXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwibWRcIildOiB7XHJcbiAgICAgIHdpZHRoOiBcIjIwY2hcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBzZWN0aW9uRGVza3RvcDoge1xyXG4gICAgZGlzcGxheTogXCJub25lXCIsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJtZFwiKV06IHtcclxuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc2VjdGlvbk1vYmlsZToge1xyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJtZFwiKV06IHtcclxuICAgICAgZGlzcGxheTogXCJub25lXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgYWNjTmFtZToge1xyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmZ1bmN0aW9uIFRvcE5hdihwcm9wcykge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBjb25zdCBbYW5jaG9yRWwsIHNldEFuY2hvckVsXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFttb2JpbGVNb3JlQW5jaG9yRWwsIHNldE1vYmlsZU1vcmVBbmNob3JFbF0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgY29uc3QgaXNNZW51T3BlbiA9IEJvb2xlYW4oYW5jaG9yRWwpO1xyXG4gIGNvbnN0IGlzTW9iaWxlTWVudU9wZW4gPSBCb29sZWFuKG1vYmlsZU1vcmVBbmNob3JFbCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVByb2ZpbGVNZW51T3BlbiA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0QW5jaG9yRWwoZXZlbnQuY3VycmVudFRhcmdldCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTW9iaWxlTWVudUNsb3NlID0gKCkgPT4ge1xyXG4gICAgc2V0TW9iaWxlTW9yZUFuY2hvckVsKG51bGwpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZU1lbnVDbG9zZSA9ICgpID0+IHtcclxuICAgIHNldEFuY2hvckVsKG51bGwpO1xyXG4gICAgaGFuZGxlTW9iaWxlTWVudUNsb3NlKCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTW9iaWxlTWVudU9wZW4gPSAoZXZlbnQpID0+IHtcclxuICAgIHNldE1vYmlsZU1vcmVBbmNob3JFbChldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBtZW51SWQgPSBcInByaW1hcnktc2VhcmNoLWFjY291bnQtbWVudVwiO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZ3Jvd30+XHJcbiAgICAgICAgPEFwcEJhclxyXG4gICAgICAgICAgcG9zaXRpb249XCJzdGF0aWNcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmctd2hpdGVcIlxyXG4gICAgICAgICAgc3R5bGU9e3sgYm94U2hhZG93OiBcIm5vbmVcIiB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxUb29sYmFyPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIlxcaW1hZ2VzXFxWVmxvZ28ucG5nXCIgY2xhc3NOYW1lPVwicHItNVwiIC8+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgZWRnZT1cInN0YXJ0XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubWVudUJ1dHRvbn1cclxuICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJvcGVuIGRyYXdlclwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8TWVudUljb24gc3R5bGU9e3sgY29sb3I6ICcjRENFMEUyJywgZm9udFNpemU6ICc0MCcgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8c3Bhbj5Dw7RuZyB0eSBWViBTb2x1dGlvbnM8L3NwYW4+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlYXJjaH0gc3R5bGU9e3sgYmFja2dyb3VuZDogXCIjRjdGN0Y3XCIgfX0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VhcmNoSWNvbn0+XHJcbiAgICAgICAgICAgICAgICA8U2VhcmNoSWNvbiBzdHlsZT17eyBjb2xvcjogJyMyRkFBRkMnIH19IC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPElucHV0QmFzZVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2jigKZcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgICAgICAgICByb290OiBjbGFzc2VzLmlucHV0Um9vdCxcclxuICAgICAgICAgICAgICAgICAgaW5wdXQ6IGNsYXNzZXMuaW5wdXRJbnB1dCxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7IFwiYXJpYS1sYWJlbFwiOiBcInNlYXJjaFwiIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmdyb3d9IC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlY3Rpb25EZXNrdG9wfT5cclxuICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwic2hvdyBcIiBjb2xvcj1cInByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgIDxCYWRnZSBjb2xvcj1cInNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICA8U2V0dGluZ3NJY29uIHN0eWxlPXt7IGNvbG9yOiAnIzEwMTAxMCcgfX0gLz5cclxuICAgICAgICAgICAgICAgIDwvQmFkZ2U+XHJcbiAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9XCJzaG93IFwiIGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgPEJhZGdlIGNvbG9yPVwic2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxUcmVuZGluZ1VwSWNvbiBzdHlsZT17eyBjb2xvcjogJyMxMDEwMTAnIH19IC8+XHJcbiAgICAgICAgICAgICAgICA8L0JhZGdlPlxyXG4gICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwic2hvd1wiIGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgPEJhZGdlIGNvbG9yPVwic2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxIZWxwSWNvbiBzdHlsZT17eyBjb2xvcjogJyMxMDEwMTAnIH19IC8+XHJcbiAgICAgICAgICAgICAgICA8L0JhZGdlPlxyXG4gICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cInN1YnRpdGxlMVwiXHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgSOG7lyB0cuG7o1xyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuXHJcbiAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJzaG93IDE3IG5ldyBub3RpZmljYXRpb25zXCJcclxuICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8QmFkZ2UgYmFkZ2VDb250ZW50PXsxN30gY29sb3I9XCJzZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgICAgPE5vdGlmaWNhdGlvbnNJY29uIHN0eWxlPXt7IGNvbG9yOiAnIzEwMTAxMCcgfX0gLz5cclxuICAgICAgICAgICAgICAgIDwvQmFkZ2U+XHJcbiAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwic3VidGl0bGUxXCJcclxuICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBBY2NvdW50IE5hbWVcclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgIGVkZ2U9XCJlbmRcIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cImFjY291bnQgb2YgY3VycmVudCB1c2VyXCJcclxuICAgICAgICAgICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVByb2ZpbGVNZW51T3Blbn1cclxuICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8QWNjb3VudENpcmNsZSBzdHlsZT17eyBjb2xvcjogJyMxMDEwMTAnIH19IC8+XHJcbiAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VjdGlvbk1vYmlsZX0+XHJcbiAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJzaG93IG1vcmVcIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTW9iaWxlTWVudU9wZW59XHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPE1vcmVJY29uIC8+XHJcbiAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICA8L0FwcEJhcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb3BOYXY7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
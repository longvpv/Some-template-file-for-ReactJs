module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./component/breadcrumb/Breadcrumb.tsx":
/*!*********************************************!*\
  !*** ./component/breadcrumb/Breadcrumb.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_NavigateNext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/NavigateNext */ "@material-ui/icons/NavigateNext");
/* harmony import */ var _material_ui_icons_NavigateNext__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_NavigateNext__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Long\\CODE\\ERP\\erp.webapp\\component\\breadcrumb\\Breadcrumb.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function Breadcrumb() {
  const handleClick = event => {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  };

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Breadcrumbs"], {
    "aria-label": "breadcrumb",
    separator: __jsx(_material_ui_icons_NavigateNext__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 55
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    color: "inherit",
    href: "/",
    onClick: handleClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, "Qu\u1EA3n tr\u1ECB h\u1EC7 th\u1ED1ng"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    color: "inherit",
    href: "/getting-started/installation/",
    onClick: handleClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, "Thi\u1EBFt l\u1EADp h\u1EC7 th\u1ED1ng"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    color: "textPrimary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, "C\xF4ng ty / Chi Nh\xE1nh")));
}

/* harmony default export */ __webpack_exports__["default"] = (Breadcrumb);

/***/ }),

/***/ "./component/sideBar/QuanTriHeThong/QuanTriHeThong.tsx":
/*!*************************************************************!*\
  !*** ./component/sideBar/QuanTriHeThong/QuanTriHeThong.tsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Collapse */ "@material-ui/core/Collapse");
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/List */ "@material-ui/core/List");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/ListItem */ "@material-ui/core/ListItem");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/ArrowRight */ "@material-ui/icons/ArrowRight");
/* harmony import */ var _material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_Cached__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Cached */ "@material-ui/icons/Cached");
/* harmony import */ var _material_ui_icons_Cached__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Cached__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/ExpandLess */ "@material-ui/icons/ExpandLess");
/* harmony import */ var _material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "@material-ui/icons/ExpandMore");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "C:\\Long\\CODE\\ERP\\erp.webapp\\component\\sideBar\\QuanTriHeThong\\QuanTriHeThong.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;










const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing(1)
  },
  titleText: {
    fontFamily: "Quicksand",
    fontSize: "14px",
    fontWeight: "bold"
  },
  itemText: {
    fontFamily: "Quicksand",
    fontSize: "12px"
  }
}));

function QuanTriHeThong() {
  const classes = useStyles();
  const [open1, setOpen1] = react__WEBPACK_IMPORTED_MODULE_9___default.a.useState(false);
  const [open2, setOpen2] = react__WEBPACK_IMPORTED_MODULE_9___default.a.useState(false);
  const [open3, setOpen3] = react__WEBPACK_IMPORTED_MODULE_9___default.a.useState(false);
  const [open4, setOpen4] = react__WEBPACK_IMPORTED_MODULE_9___default.a.useState(false);
  const [open5, setOpen5] = react__WEBPACK_IMPORTED_MODULE_9___default.a.useState(false);
  const [open6, setOpen6] = react__WEBPACK_IMPORTED_MODULE_9___default.a.useState(false);
  const [open7, setOpen7] = react__WEBPACK_IMPORTED_MODULE_9___default.a.useState(false);

  const handleClick = number => {
    number === 1 && setOpen1(!open1);
    number === 2 && setOpen2(!open2);
    number === 3 && setOpen3(!open3);
    number === 4 && setOpen4(!open4);
    number === 5 && setOpen5(!open5);
    number === 6 && setOpen6(!open6);
    number === 7 && setOpen7(!open7);
  };

  return __jsx("div", {
    className: "w-100",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2___default.a, {
    component: "nav",
    "aria-labelledby": "nested-list-subheader",
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    onClick: () => handleClick(1),
    className: "d-flex justify-content-between",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.titleText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }, "Thi\u1EBFt L\u1EADp H\u1EC7 Th\u1ED1ng"), open1 ? __jsx(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_7___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }) : __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_8___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 15
    }
  })), __jsx(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_1___default.a, {
    in: open1,
    timeout: "auto",
    unmountOnExit: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2___default.a, {
    component: "div",
    disablePadding: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 15
    }
  }, "SYS005 - C\xF4ng ty / Chi nh\xE1nh")), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 15
    }
  }, "SYS006 - Ph\xF2ng ban")), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 15
    }
  }, "SYS506 - Ng\xE2n h\xE0ng")), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 15
    }
  }, "SYS022 - M\xE1y ch\u1EE7")), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 15
    }
  }, "SYS509 - Quy \u0111\u1ECFi \u0111\u01A1n v\u1ECB ti\u1EC1n t\u1EC7")), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 15
    }
  }, "SYS520 - Ng\xE0y ngh\u1EC9 c\u1EE7a c\xF4ng ty")))), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    onClick: () => handleClick(2),
    className: "d-flex justify-content-between",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.titleText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 11
    }
  }, "Ph\xE2n quy\u1EC1n nh\xE2n vi\xEAn"), open2 ? __jsx(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_7___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 13
    }
  }) : __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_8___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 15
    }
  })), __jsx(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_1___default.a, {
    in: open2,
    timeout: "auto",
    unmountOnExit: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2___default.a, {
    component: "div",
    disablePadding: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 15
    }
  }, "SYS010 - Qu\u1EA3n l\xFD nh\xE2n vi\xEAn")), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 15
    }
  }, "SYS009 - L\u1EDBp ng\u01B0\u1EDDi d\xF9ng")), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 15
    }
  }, "SYS008 - Thi\u1EBFt l\u1EADp nh\xE2n vi\xEAn v\xE0o l\u1EDBp ng\u01B0\u1EDDi d\xF9ng")))), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    onClick: () => handleClick(3),
    className: "d-flex justify-content-between",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.titleText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 11
    }
  }, "Ph\xE2n quy\u1EC1n d\u1EEF li\u1EC7u"), open3 ? __jsx(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_7___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 13
    }
  }) : __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_8___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 15
    }
  })), __jsx(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_1___default.a, {
    in: open3,
    timeout: "auto",
    unmountOnExit: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2___default.a, {
    component: "div",
    disablePadding: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 15
    }
  }, "SYS504 - Ch\u1EC9 \u0111\u1ECBnh nh\xE2n vi\xEAn v\xE0o ph\xF2ng ban")), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 15
    }
  }, "SYS503 - Xem k\u1EBFt c\u1EA5u c\u1EE7a doanh nghi\u1EC7p")))), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    onClick: () => handleClick(4),
    className: "d-flex justify-content-between",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.titleText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 11
    }
  }, "Thi\u1EBFt l\u1EADp m\xE3 h\u1EC7 th\u1ED1ng"), open4 ? __jsx(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_7___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 13
    }
  }) : __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_8___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 15
    }
  })), __jsx(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_1___default.a, {
    in: open4,
    timeout: "auto",
    unmountOnExit: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2___default.a, {
    component: "div",
    disablePadding: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 15
    }
  }, "SYS302 - M\xE3 h\u1EC7 th\u1ED1ng ch\xEDnh")), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 15
    }
  }, "SYS501 - T\u1EA1o m\xE3 ch\u1EB7n")), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 15
    }
  }, "SYS601 - T\u1EA1o m\xE3 ph\xED")), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 15
    }
  }, "SYS602 - N\u1ED9i dung ph\xED")), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 15
    }
  }, "SYS502 - Thi\u1EBFt l\u1EADp l\u1EDBp ng\u01B0\u1EDDi d\xF9ng \u0111c x\xF3a stop")))), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    onClick: () => handleClick(5),
    className: "d-flex justify-content-between",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.titleText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 11
    }
  }, "Ti\u1EC7n \xEDch"), open5 ? __jsx(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_7___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 13
    }
  }) : __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_8___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 15
    }
  })), __jsx(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_1___default.a, {
    in: open5,
    timeout: "auto",
    unmountOnExit: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2___default.a, {
    component: "div",
    disablePadding: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 15
    }
  }, "SYS600 - D\u1ECBch ng\xF4n ng\u1EEF")), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 15
    }
  }, "SYS703 - T\u1EA1o Th\xE0nh ph\u1ED1")), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 15
    }
  }, "SYS704 - T\u1EA1o Qu\u1EADn, Huy\u1EC7n")), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 15
    }
  }, "SYS705 - T\u1EA1o Ph\u01B0\u1EDDng, X\xE3")), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 15
    }
  }, "SYS025 - Ki\u1EC3m tra ho\u1EA1t \u0111\u1ED9ng")), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 15
    }
  }, "SYS020 - Thi\u1EBFt l\u1EADp ho\u1EA1t \u0111\u1ED9ng ng\u01B0\u1EDDi d\xF9ng")), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 15
    }
  }, "SYS012 - Thay \u0111\u1ED5i m\u1EADt kh\u1EA9u")), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 15
    }
  }, "SYS150 - Location setting")))), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    onClick: () => handleClick(6),
    className: "d-flex justify-content-between",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.titleText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 11
    }
  }, "Th\xF4ng tin h\u1EC7 th\u1ED1ng"), open6 ? __jsx(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_7___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 13
    }
  }) : __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_8___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 15
    }
  })), __jsx(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_1___default.a, {
    in: open6,
    timeout: "auto",
    unmountOnExit: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2___default.a, {
    component: "div",
    disablePadding: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 15
    }
  }, "SYS811 - Ghi ch\xFA ph\xE1t h\xE0nh t\xEDnh n\u0103ng m\u1EDBi")), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 15
    }
  }, "SYS812 - Quy tr\xECnh c\xF4ng ty")), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 15
    }
  }, "-License Information")), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304,
      columnNumber: 15
    }
  }, "SYS888 - System Intergrity Management")))), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    onClick: () => handleClick(7),
    className: "d-flex justify-content-between",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.titleText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 11
    }
  }, "C\u1EADp nh\u1EADt m\u1EDBi"), __jsx(_material_ui_icons_Cached__WEBPACK_IMPORTED_MODULE_6___default.a, {
    style: {
      color: '#4EEFA2'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 11
    }
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (QuanTriHeThong);

/***/ }),

/***/ "./component/sideBar/sideBar.tsx":
/*!***************************************!*\
  !*** ./component/sideBar/sideBar.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _QuanTriHeThong_QuanTriHeThong__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./QuanTriHeThong/QuanTriHeThong */ "./component/sideBar/QuanTriHeThong/QuanTriHeThong.tsx");
var _jsxFileName = "C:\\Long\\CODE\\ERP\\erp.webapp\\component\\sideBar\\sideBar.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])({
  title: {
    fontFamily: "Quicksand",
    fontSize: "16px",
    fontWeight: 'bold',
    color: "#2FAAFC",
    paddingLeft: "6px",
    margin: '0'
  }
});

function SideBar(props) {
  const {
    0: key,
    1: setKey
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1);
  const classes = useStyles();
  return __jsx("div", {
    className: "container pr-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "d-flex bg-white ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "d-flex justify-content-start align-items-start pr-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: " d-flex flex-column justify-content-start align-items-center pt-2 ",
    style: {
      backgroundColor: "#2FAAFC",
      width: "52px",
      height: "100vh"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
    "aria-label": "show",
    color: "primary",
    style: {
      width: "52px",
      height: "52px"
    },
    onClick: () => setKey(1),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/images/icon/icon1.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
    "aria-label": "show",
    color: "primary",
    style: {
      width: "52px",
      height: "52px"
    },
    onClick: () => setKey(2),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/images/icon/icon2.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
    "aria-label": "show",
    color: "primary",
    style: {
      width: "52px",
      height: "52px"
    },
    onClick: () => setKey(3),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/images/icon/icon3.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
    "aria-label": "show",
    color: "primary",
    style: {
      width: "52px",
      height: "52px"
    },
    onClick: () => setKey(4),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/images/icon/icon4.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
    "aria-label": "show",
    color: "primary",
    style: {
      width: "52px",
      height: "52px"
    },
    onClick: () => setKey(5),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/images/icon/icon5.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
    "aria-label": "show",
    color: "primary",
    style: {
      width: "52px",
      height: "52px"
    },
    onClick: () => setKey(6),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/images/icon/icon6.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
    "aria-label": "show",
    color: "primary",
    style: {
      width: "52px",
      height: "52px"
    },
    onClick: () => setKey(7),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/images/icon/icon7.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
    "aria-label": "show",
    color: "primary",
    style: {
      width: "52px",
      height: "52px"
    },
    onClick: () => setKey(8),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/images/icon/icon8.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
    "aria-label": "show",
    color: "primary",
    style: {
      width: "52px",
      height: "52px"
    },
    onClick: () => setKey(9),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/images/icon/icon9.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 17
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
    "aria-label": "show",
    color: "primary",
    style: {
      width: "52px",
      height: "52px"
    },
    onClick: () => setKey(10),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/images/icon/icon10.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 17
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
    "aria-label": "show",
    color: "primary",
    style: {
      width: "52px",
      height: "52px"
    },
    onClick: () => setKey(11),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/images/icon/icon11.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 17
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
    "aria-label": "show",
    color: "primary",
    style: {
      width: "52px",
      height: "52px"
    },
    onClick: () => setKey(12),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/images/icon/icon12.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 17
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
    "aria-label": "show",
    color: "primary",
    style: {
      width: "52px",
      height: "52px"
    },
    onClick: () => setKey(13),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/images/icon/icon13.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 17
    }
  }))))), __jsx("div", {
    style: {
      width: 'calc(100% - 60px)',
      paddingLeft: '8px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 9
    }
  }, key === 1 && __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 15
    }
  }, "QU\u1EA2N TR\u1ECA H\u1EC6 TH\u1ED0NG"), __jsx(_QuanTriHeThong_QuanTriHeThong__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 15
    }
  })), key === 2 && __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 15
    }
  }, "B\xC1N L\u1EBA POS")), key === 3 && __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 15
    }
  }, "C\xD4NG VI\u1EC6C")), key === 4 && __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 15
    }
  }, "B\xC1O C\xC1O")), key === 5 && __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 15
    }
  }, "NH\xC2N S\u1EF0")), key === 6 && __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 15
    }
  }, "K\u1EBE TO\xC1N")), key === 7 && __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 15
    }
  }, "KH\xC1CH H\xC0NG & B\xC1N H\xC0NG")), key === 8 && __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 15
    }
  }, "S\u1EA2N PH\u1EA8M")), key === 9 && __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 15
    }
  }, "B\xC1O GI\xC1")), key === 10 && __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 15
    }
  }, "QU\u1EA2N L\xDD KHO")), key === 11 && __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 15
    }
  }, "THU MUA")), key === 12 && __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 15
    }
  }, "DASHBOARD")), key === 13 && __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 15
    }
  }, "IMPORT/EXPORT")))));
}

/* harmony default export */ __webpack_exports__["default"] = (SideBar);

/***/ }),

/***/ "./component/topNav/topnav.tsx":
/*!*************************************!*\
  !*** ./component/topNav/topnav.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "@material-ui/core/Toolbar");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons */ "@material-ui/icons");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Notifications */ "@material-ui/icons/Notifications");
/* harmony import */ var _material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Settings */ "@material-ui/icons/Settings");
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Menu */ "@material-ui/icons/Menu");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_TrendingUp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/TrendingUp */ "@material-ui/icons/TrendingUp");
/* harmony import */ var _material_ui_icons_TrendingUp__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_TrendingUp__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Search */ "@material-ui/icons/Search");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_Help__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Help */ "@material-ui/icons/Help");
/* harmony import */ var _material_ui_icons_Help__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Help__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
var _jsxFileName = "C:\\Long\\CODE\\ERP\\erp.webapp\\component\\topNav\\topnav.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement;














const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  root: {
    flexGrow: 1
  },
  companyTitle: {
    color: '#101010',
    fontSize: "16px",
    fontWeight: 'bold'
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
  search: {
    position: "relative",
    borderRadius: "16px",
    backgroundColor: Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["fade"])(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["fade"])(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  },
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
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch"
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  accName: {
    display: "flex",
    alignItems: "center"
  }
}));

function TopNav(props) {
  const classes = useStyles(); // -----------------------------

  const [anchorEl, setAnchorEl] = react__WEBPACK_IMPORTED_MODULE_13___default.a.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = react__WEBPACK_IMPORTED_MODULE_13___default.a.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
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
  }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1___default.a, {
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
  }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4___default.a, {
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
  }), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2___default.a, {
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
  }, __jsx(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_9___default.a, {
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
  }, __jsx(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_11___default.a, {
    style: {
      color: '#2FAAFC'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["InputBase"], {
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
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2___default.a, {
    "aria-label": "show ",
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Badge"], {
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 17
    }
  }, __jsx(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_8___default.a, {
    style: {
      color: '#5A5A5A'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 19
    }
  }))), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2___default.a, {
    "aria-label": "show ",
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Badge"], {
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 17
    }
  }, __jsx(_material_ui_icons_TrendingUp__WEBPACK_IMPORTED_MODULE_10___default.a, {
    style: {
      color: '#5A5A5A'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 19
    }
  }))), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2___default.a, {
    "aria-label": "show",
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Badge"], {
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 17
    }
  }, __jsx(_material_ui_icons_Help__WEBPACK_IMPORTED_MODULE_12___default.a, {
    style: {
      color: '#5A5A5A'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 19
    }
  }))), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: classes.title,
    variant: "subtitle1",
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 15
    }
  }, "H\u1ED7 tr\u1EE3"), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2___default.a, {
    "aria-label": "show 17 new notifications",
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Badge"], {
    badgeContent: 17,
    color: "error",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 17
    }
  }, __jsx(_material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_7___default.a, {
    style: {
      color: '#5A5A5A'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 19
    }
  }))), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: classes.title,
    variant: "subtitle1",
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 15
    }
  }, "Account Name"), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2___default.a, {
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
  }, __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_6__["AccountCircle"], {
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

/* harmony default export */ __webpack_exports__["default"] = (TopNav);

/***/ }),

/***/ "./fileSettings/appSettings.json":
/*!***************************************!*\
  !*** ./fileSettings/appSettings.json ***!
  \***************************************/
/*! exports provided: appLogo, appName, serverInfo, defaultAvatarSrc, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"appLogo\":\"header_logo.png\",\"appName\":\"Storii\",\"serverInfo\":{\"rootBackendURL\":\"https://storii.vn\",\"rootBackendURL1\":\"http://localhost\",\"parseServerURL1\":\"https://storii.vn/parse-server\",\"parseServerURL\":\"http://localhost:2337/parse\",\"nextJsBackendURL\":\"http://localhost:30002/self-api\",\"nextJsAppURL\":\"https://www.storii.vn\",\"storiiMediaServerAPI1\":\"https://www.storii.vn/api\",\"storiiMediaServerAPI11\":\"http://storii-api-staging.vastbit.com/api\",\"storiiMediaServerAPI\":\"http://localhost:53371/api\",\"storiiEcommerceServerAPI\":\"http://storii-ecommerce-api.vastbit.com/api\"},\"defaultAvatarSrc\":\"user-male-circle-filled.png\"}");

/***/ }),

/***/ "./layouts/mainLayout.tsx":
/*!********************************!*\
  !*** ./layouts/mainLayout.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainLayout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_breadcrumb_Breadcrumb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/breadcrumb/Breadcrumb */ "./component/breadcrumb/Breadcrumb.tsx");
/* harmony import */ var _component_sideBar_sideBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/sideBar/sideBar */ "./component/sideBar/sideBar.tsx");
/* harmony import */ var _component_topNav_topnav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/topNav/topnav */ "./component/topNav/topnav.tsx");
var _jsxFileName = "C:\\Long\\CODE\\ERP\\erp.webapp\\layouts\\mainLayout.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class MainLayout extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx("div", {
      id: "app-wrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: "sticky-top",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }
    }, __jsx(_component_topNav_topnav__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 11
      }
    })), __jsx("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "col-md-2 p-0",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 11
      }
    }, __jsx(_component_sideBar_sideBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 41
      }
    })), __jsx("div", {
      className: "col-md-10 pt-2",
      style: {
        backgroundColor: '#F2F2F2'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 11
      }
    }, __jsx(_component_breadcrumb_Breadcrumb__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 13
      }
    }), __jsx("div", {
      className: "mt-2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 13
      }
    }, this.props.children))));
  }

}

/***/ }),

/***/ "./libs/extensions.tsx":
/*!*****************************!*\
  !*** ./libs/extensions.tsx ***!
  \*****************************/
/*! exports provided: isDev */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDev", function() { return isDev; });
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! numeral */ "numeral");
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(numeral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fileSettings_appSettings_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fileSettings/appSettings.json */ "./fileSettings/appSettings.json");
var _fileSettings_appSettings_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../fileSettings/appSettings.json */ "./fileSettings/appSettings.json", 1);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);



function isDev() {
  const dev = true;
  return dev;
}

String.prototype.imageSrc = function (width, height) {
  const prefix = _fileSettings_appSettings_json__WEBPACK_IMPORTED_MODULE_1__.serverInfo.nextJsAppURL;

  if (width) {
    height = height || width / (16 / 9);
    return `${prefix}/static/images/${width}/${height}/${this}`;
  }

  return `/images/${this}`;
};

String.prototype.staticImage = function () {
  if (!Boolean(this)) return null;
  const imageFileName = this.split("/").pop();
  return `/images/${imageFileName}`;
};

String.prototype.toTitleCase = function () {
  let str = this.toLowerCase().split(' ');

  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }

  return str.join(' ');
};

Number.prototype.format = function (formatPatern) {
  const number = numeral__WEBPACK_IMPORTED_MODULE_0___default()(this || 0);
  if (formatPatern) return number.format(formatPatern);
  return number.format();
};

Number.prototype.formatFeetInch = function () {
  const centi = Number(this);
  const feet = Math.round(centi / 2.54 / 12);
  const inches = Math.round(centi / 2.54 - feet * 12);
  return `${feet}'${inches}"`;
};

Number.prototype.toFeetInch = function () {
  const centi = this;
  let inches = centi / 2.54;

  const feet = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.toInteger(inches / 12);

  inches = Math.round(inches - feet * 12);
  return {
    feet,
    inches
  };
};

String.prototype.buildQuery = function (data, prefixQuery = '?') {
  // If the data is already a string, return it as-is
  if (typeof data === 'string') return data; // Create a query array to hold the key/value pairs

  var query = []; // Loop through the data object

  for (var key in data) {
    if (data.hasOwnProperty(key)) {
      // Encode each key and value, concatenate them into a string, and push them to the array
      query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key] || ''));
    }
  } // Join each item in the array with a `&` and return the resulting string


  return `${this}${prefixQuery}${query.join('&')}`;
};

String.prototype.buildParams = function (data, prefixParams = ':') {
  let str = this || ''; // If the data is already a string, return it as-is

  if (typeof data === 'string') return data; // Create a query array to hold the key/value pairs
  // Loop through the data object

  for (var key in data) str = str.replace(`${prefixParams}${key}`, data[key] || ''); // Join each item in the array with a `&` and return the resulting string


  return str;
};

if (typeof document !== "undefined") {
  Storage.prototype.get = key => {
    return JSON.parse(localStorage.getItem(key) || "null");
  };

  Storage.prototype.set = (key, value) => {
    return localStorage.setItem(key, JSON.stringify(value || '{}'));
  };
}

function changeAlias(alias, replaceString = "-") {
  var str = alias || '';
  str = str.toLowerCase();
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, "");
  str = str.replace(/ + /g, "");
  str = str.replace(/ /g, replaceString);
  str = str.trim();
  return str;
}

String.prototype.toFriendlyUrl = function () {
  return changeAlias(this);
};

String.prototype.textIndex = function () {
  return changeAlias(this).split('-');
};

function createGuid() {
  function S4() {
    return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
  }

  return (S4() + S4() + "-" + S4() + "-4" + S4().substr(0, 3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase();
}

String.prototype.toGuid = function () {
  return createGuid();
};

String.prototype.log = function (message, ...optionalParams) {
  return  true && console.log(message, ...optionalParams);
};

/***/ }),

/***/ "./node_modules/animate.css/animate.css":
/*!**********************************************!*\
  !*** ./node_modules/animate.css/animate.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/react-lazy-load-image-component/src/effects/blur.css":
/*!***************************************************************************!*\
  !*** ./node_modules/react-lazy-load-image-component/src/effects/blur.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_extensions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../libs/extensions */ "./libs/extensions.tsx");
/* harmony import */ var _layouts_mainLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/mainLayout */ "./layouts/mainLayout.tsx");
/* harmony import */ var _redux_withRedux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/withRedux */ "./redux/withRedux.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nprogress */ "nprogress");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next-seo */ "next-seo");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux-persist */ "redux-persist");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! redux-persist/integration/react */ "redux-persist/integration/react");
/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_lazy_load_image_component_src_effects_blur_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-lazy-load-image-component/src/effects/blur.css */ "./node_modules/react-lazy-load-image-component/src/effects/blur.css");
/* harmony import */ var react_lazy_load_image_component_src_effects_blur_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component_src_effects_blur_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! animate.css */ "./node_modules/animate.css/animate.css");
/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(animate_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _public_css_index_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../public/css/index.css */ "./public/css/index.css");
/* harmony import */ var _public_css_index_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_public_css_index_css__WEBPACK_IMPORTED_MODULE_12__);
var _jsxFileName = "C:\\Long\\CODE\\ERP\\erp.webapp\\pages\\_app.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }














next_router__WEBPACK_IMPORTED_MODULE_6___default.a.events.on('routeChangeComplete', () => window.scrollTo(0, 0));
next_router__WEBPACK_IMPORTED_MODULE_6___default.a.events.on('routeChangeError', () => nprogress__WEBPACK_IMPORTED_MODULE_5___default.a.done());

const ERPApp = props => {
  const {
    Component,
    pageProps,
    store
  } = props;
  const AppLayout = Component.Layout || _layouts_mainLayout__WEBPACK_IMPORTED_MODULE_2__["default"];
  const persistor = Object(redux_persist__WEBPACK_IMPORTED_MODULE_8__["persistStore"])(store);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, __jsx(next_seo__WEBPACK_IMPORTED_MODULE_7__["NextSeo"], {
    title: "ERP Web Application",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }), __jsx(react_redux__WEBPACK_IMPORTED_MODULE_4__["Provider"], {
    store: store,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_9__["PersistGate"], {
    loading: __jsx(Component, _extends({}, pageProps, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 31
      }
    })),
    persistor: persistor,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx(AppLayout, _extends({}, pageProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }), __jsx(Component, _extends({}, pageProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_redux_withRedux__WEBPACK_IMPORTED_MODULE_3__["default"])(ERPApp));

/***/ }),

/***/ "./public/css/index.css":
/*!******************************!*\
  !*** ./public/css/index.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./redux/dynamic/actions.tsx":
/*!***********************************!*\
  !*** ./redux/dynamic/actions.tsx ***!
  \***********************************/
/*! exports provided: actionTypes, setDynamicLoading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDynamicLoading", function() { return setDynamicLoading; });
const actionTypes = {
  SET_DYNAMIC_LOADING: 'SET_DYNAMIC_LOADING'
};
const setDynamicLoading = (field, loading) => ({
  type: actionTypes.SET_DYNAMIC_LOADING,
  field,
  loading
});

/***/ }),

/***/ "./redux/dynamic/reducer.tsx":
/*!***********************************!*\
  !*** ./redux/dynamic/reducer.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return reducer; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./redux/dynamic/actions.tsx");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initializeState = {
  dynamicLoading: {}
};
function reducer(state = initializeState, action) {
  const {
    dynamicLoading
  } = state;

  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].SET_DYNAMIC_LOADING:
      return _objectSpread(_objectSpread({}, state), {}, {
        dynamicLoading: _objectSpread(_objectSpread({}, dynamicLoading), {}, {
          [action.field]: action.loading
        })
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./redux/rootReducer.tsx":
/*!*******************************!*\
  !*** ./redux/rootReducer.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dynamic_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dynamic/reducer */ "./redux/dynamic/reducer.tsx");


/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  dynamicState: _dynamic_reducer__WEBPACK_IMPORTED_MODULE_1__["default"]
}));

/***/ }),

/***/ "./redux/rootSaga.tsx":
/*!****************************!*\
  !*** ./redux/rootSaga.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var es6_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! es6-promise */ "es6-promise");
/* harmony import */ var es6_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(es6_promise__WEBPACK_IMPORTED_MODULE_1__);


es6_promise__WEBPACK_IMPORTED_MODULE_1___default.a.polyfill();
function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([// fork(loginWatcher),
  ]);
}

/***/ }),

/***/ "./redux/withRedux.tsx":
/*!*****************************!*\
  !*** ./redux/withRedux.tsx ***!
  \*****************************/
/*! exports provided: configureStore, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configureStore", function() { return configureStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return withRedux; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _rootReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rootReducer */ "./redux/rootReducer.tsx");
/* harmony import */ var _rootSaga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rootSaga */ "./redux/rootSaga.tsx");






const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_2___default()();

const bindMiddleware = middleware => {
  if (true) {
    const {
      composeWithDevTools
    } = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");

    return composeWithDevTools(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware));
  }

  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware);
};

function configureStore(initialState = {}) {
  let store = {};

  const {
    persistReducer
  } = __webpack_require__(/*! redux-persist */ "redux-persist");

  const storage = __webpack_require__(/*! redux-persist/lib/storage */ "redux-persist/lib/storage").default;

  const persistConfig = {
    key: '.rosterspot.localstorage.app.key',
    storage,
    whitelist: ['userProfileState']
  };
  const persistedReducer = persistReducer(persistConfig, _rootReducer__WEBPACK_IMPORTED_MODULE_4__["default"]);
  store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(persistedReducer, initialState, bindMiddleware([redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a, sagaMiddleware]));
  store.sagaTask = sagaMiddleware.run(_rootSaga__WEBPACK_IMPORTED_MODULE_5__["default"]);
  return store;
}
function withRedux(BaseComponent) {
  return next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default()(configureStore)(BaseComponent);
}

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./pages/_app.tsx");


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "@material-ui/core/Collapse":
/*!*********************************************!*\
  !*** external "@material-ui/core/Collapse" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Collapse");

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "@material-ui/core/List":
/*!*****************************************!*\
  !*** external "@material-ui/core/List" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),

/***/ "@material-ui/core/ListItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/ListItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),

/***/ "@material-ui/core/Toolbar":
/*!********************************************!*\
  !*** external "@material-ui/core/Toolbar" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons":
/*!*************************************!*\
  !*** external "@material-ui/icons" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons");

/***/ }),

/***/ "@material-ui/icons/ArrowRight":
/*!************************************************!*\
  !*** external "@material-ui/icons/ArrowRight" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ArrowRight");

/***/ }),

/***/ "@material-ui/icons/Cached":
/*!********************************************!*\
  !*** external "@material-ui/icons/Cached" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Cached");

/***/ }),

/***/ "@material-ui/icons/ExpandLess":
/*!************************************************!*\
  !*** external "@material-ui/icons/ExpandLess" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ExpandLess");

/***/ }),

/***/ "@material-ui/icons/ExpandMore":
/*!************************************************!*\
  !*** external "@material-ui/icons/ExpandMore" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ExpandMore");

/***/ }),

/***/ "@material-ui/icons/Help":
/*!******************************************!*\
  !*** external "@material-ui/icons/Help" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Help");

/***/ }),

/***/ "@material-ui/icons/Menu":
/*!******************************************!*\
  !*** external "@material-ui/icons/Menu" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Menu");

/***/ }),

/***/ "@material-ui/icons/NavigateNext":
/*!**************************************************!*\
  !*** external "@material-ui/icons/NavigateNext" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/NavigateNext");

/***/ }),

/***/ "@material-ui/icons/Notifications":
/*!***************************************************!*\
  !*** external "@material-ui/icons/Notifications" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Notifications");

/***/ }),

/***/ "@material-ui/icons/Search":
/*!********************************************!*\
  !*** external "@material-ui/icons/Search" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Search");

/***/ }),

/***/ "@material-ui/icons/Settings":
/*!**********************************************!*\
  !*** external "@material-ui/icons/Settings" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Settings");

/***/ }),

/***/ "@material-ui/icons/TrendingUp":
/*!************************************************!*\
  !*** external "@material-ui/icons/TrendingUp" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/TrendingUp");

/***/ }),

/***/ "es6-promise":
/*!******************************!*\
  !*** external "es6-promise" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("es6-promise");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next-seo":
/*!***************************!*\
  !*** external "next-seo" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-seo");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),

/***/ "numeral":
/*!**************************!*\
  !*** external "numeral" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("numeral");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-persist":
/*!********************************!*\
  !*** external "redux-persist" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-persist");

/***/ }),

/***/ "redux-persist/integration/react":
/*!**************************************************!*\
  !*** external "redux-persist/integration/react" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-persist/integration/react");

/***/ }),

/***/ "redux-persist/lib/storage":
/*!********************************************!*\
  !*** external "redux-persist/lib/storage" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-persist/lib/storage");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L2JyZWFkY3J1bWIvQnJlYWRjcnVtYi50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L3NpZGVCYXIvUXVhblRyaUhlVGhvbmcvUXVhblRyaUhlVGhvbmcudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudC9zaWRlQmFyL3NpZGVCYXIudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudC90b3BOYXYvdG9wbmF2LnRzeCIsIndlYnBhY2s6Ly8vLi9sYXlvdXRzL21haW5MYXlvdXQudHN4Iiwid2VicGFjazovLy8uL2xpYnMvZXh0ZW5zaW9ucy50c3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvZHluYW1pYy9hY3Rpb25zLnRzeCIsIndlYnBhY2s6Ly8vLi9yZWR1eC9keW5hbWljL3JlZHVjZXIudHN4Iiwid2VicGFjazovLy8uL3JlZHV4L3Jvb3RSZWR1Y2VyLnRzeCIsIndlYnBhY2s6Ly8vLi9yZWR1eC9yb290U2FnYS50c3giLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvd2l0aFJlZHV4LnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0FwcEJhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0NvbGxhcHNlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93UmlnaHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2FjaGVkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0V4cGFuZExlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRXhwYW5kTW9yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9IZWxwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL01lbnVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTmF2aWdhdGVOZXh0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL05vdGlmaWNhdGlvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2VhcmNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1NldHRpbmdzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1RyZW5kaW5nVXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJlczYtcHJvbWlzZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtcmVkdXgtd3JhcHBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtc2VvXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJucHJvZ3Jlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJudW1lcmFsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtcGVyc2lzdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXBlcnNpc3QvaW50ZWdyYXRpb24vcmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXRodW5rXCIiXSwibmFtZXMiOlsiQnJlYWRjcnVtYiIsImhhbmRsZUNsaWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJpbmZvIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsIndpZHRoIiwiYmFja2dyb3VuZENvbG9yIiwicGFsZXR0ZSIsImJhY2tncm91bmQiLCJwYXBlciIsIm5lc3RlZCIsInBhZGRpbmdMZWZ0Iiwic3BhY2luZyIsInRpdGxlVGV4dCIsImZvbnRGYW1pbHkiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJpdGVtVGV4dCIsIlF1YW5UcmlIZVRob25nIiwiY2xhc3NlcyIsIm9wZW4xIiwic2V0T3BlbjEiLCJSZWFjdCIsInVzZVN0YXRlIiwib3BlbjIiLCJzZXRPcGVuMiIsIm9wZW4zIiwic2V0T3BlbjMiLCJvcGVuNCIsInNldE9wZW40Iiwib3BlbjUiLCJzZXRPcGVuNSIsIm9wZW42Iiwic2V0T3BlbjYiLCJvcGVuNyIsInNldE9wZW43IiwibnVtYmVyIiwiY29sb3IiLCJ0aXRsZSIsIm1hcmdpbiIsIlNpZGVCYXIiLCJwcm9wcyIsImtleSIsInNldEtleSIsImhlaWdodCIsImZsZXhHcm93IiwiY29tcGFueVRpdGxlIiwibWVudUJ1dHRvbiIsIm1hcmdpblJpZ2h0IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImdyb3ciLCJzZWFyY2giLCJwb3NpdGlvbiIsImJvcmRlclJhZGl1cyIsImZhZGUiLCJjb21tb24iLCJ3aGl0ZSIsIm1hcmdpbkxlZnQiLCJicmVha3BvaW50cyIsInVwIiwic2VhcmNoSWNvbiIsInBhZGRpbmciLCJwb2ludGVyRXZlbnRzIiwiaW5wdXRSb290IiwiaW5wdXRJbnB1dCIsInRyYW5zaXRpb24iLCJ0cmFuc2l0aW9ucyIsImNyZWF0ZSIsInNlY3Rpb25EZXNrdG9wIiwic2VjdGlvbk1vYmlsZSIsImFjY05hbWUiLCJUb3BOYXYiLCJhbmNob3JFbCIsInNldEFuY2hvckVsIiwibW9iaWxlTW9yZUFuY2hvckVsIiwic2V0TW9iaWxlTW9yZUFuY2hvckVsIiwiaXNNZW51T3BlbiIsIkJvb2xlYW4iLCJpc01vYmlsZU1lbnVPcGVuIiwiaGFuZGxlUHJvZmlsZU1lbnVPcGVuIiwiY3VycmVudFRhcmdldCIsImhhbmRsZU1vYmlsZU1lbnVDbG9zZSIsImhhbmRsZU1lbnVDbG9zZSIsImhhbmRsZU1vYmlsZU1lbnVPcGVuIiwibWVudUlkIiwiYm94U2hhZG93IiwiaW5wdXQiLCJNYWluTGF5b3V0IiwiQ29tcG9uZW50IiwicmVuZGVyIiwiY2hpbGRyZW4iLCJpc0RldiIsImRldiIsIlN0cmluZyIsInByb3RvdHlwZSIsImltYWdlU3JjIiwicHJlZml4IiwiYXBwU2V0dGluZ3MiLCJzZXJ2ZXJJbmZvIiwibmV4dEpzQXBwVVJMIiwic3RhdGljSW1hZ2UiLCJpbWFnZUZpbGVOYW1lIiwic3BsaXQiLCJwb3AiLCJ0b1RpdGxlQ2FzZSIsInN0ciIsInRvTG93ZXJDYXNlIiwiaSIsImxlbmd0aCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJqb2luIiwiTnVtYmVyIiwiZm9ybWF0IiwiZm9ybWF0UGF0ZXJuIiwibnVtZXJhbCIsImZvcm1hdEZlZXRJbmNoIiwiY2VudGkiLCJmZWV0IiwiTWF0aCIsInJvdW5kIiwiaW5jaGVzIiwidG9GZWV0SW5jaCIsIl8iLCJ0b0ludGVnZXIiLCJidWlsZFF1ZXJ5IiwiZGF0YSIsInByZWZpeFF1ZXJ5IiwicXVlcnkiLCJoYXNPd25Qcm9wZXJ0eSIsInB1c2giLCJlbmNvZGVVUklDb21wb25lbnQiLCJidWlsZFBhcmFtcyIsInByZWZpeFBhcmFtcyIsInJlcGxhY2UiLCJkb2N1bWVudCIsIlN0b3JhZ2UiLCJnZXQiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0IiwidmFsdWUiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiY2hhbmdlQWxpYXMiLCJhbGlhcyIsInJlcGxhY2VTdHJpbmciLCJ0cmltIiwidG9GcmllbmRseVVybCIsInRleHRJbmRleCIsImNyZWF0ZUd1aWQiLCJTNCIsInJhbmRvbSIsInRvU3RyaW5nIiwic3Vic3RyaW5nIiwic3Vic3RyIiwidG9HdWlkIiwibG9nIiwibWVzc2FnZSIsIm9wdGlvbmFsUGFyYW1zIiwiUm91dGVyIiwiZXZlbnRzIiwib24iLCJ3aW5kb3ciLCJzY3JvbGxUbyIsIk5Qcm9ncmVzcyIsImRvbmUiLCJFUlBBcHAiLCJwYWdlUHJvcHMiLCJzdG9yZSIsIkFwcExheW91dCIsIkxheW91dCIsInBlcnNpc3RvciIsInBlcnNpc3RTdG9yZSIsIndpdGhSZWR1eCIsImFjdGlvblR5cGVzIiwiU0VUX0RZTkFNSUNfTE9BRElORyIsInNldER5bmFtaWNMb2FkaW5nIiwiZmllbGQiLCJsb2FkaW5nIiwidHlwZSIsImluaXRpYWxpemVTdGF0ZSIsImR5bmFtaWNMb2FkaW5nIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwiY29tYmluZVJlZHVjZXJzIiwiZHluYW1pY1N0YXRlIiwiZXM2cHJvbWlzZSIsInBvbHlmaWxsIiwicm9vdFNhZ2EiLCJhbGwiLCJzYWdhTWlkZGxld2FyZSIsImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwiYmluZE1pZGRsZXdhcmUiLCJtaWRkbGV3YXJlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsInJlcXVpcmUiLCJhcHBseU1pZGRsZXdhcmUiLCJjb25maWd1cmVTdG9yZSIsImluaXRpYWxTdGF0ZSIsInBlcnNpc3RSZWR1Y2VyIiwic3RvcmFnZSIsImRlZmF1bHQiLCJwZXJzaXN0Q29uZmlnIiwid2hpdGVsaXN0IiwicGVyc2lzdGVkUmVkdWNlciIsInJvb3RSZWR1Y2VyIiwiY3JlYXRlU3RvcmUiLCJ0aHVua01pZGRsZXdhcmUiLCJzYWdhVGFzayIsInJ1biIsIkJhc2VDb21wb25lbnQiLCJuZXh0UmVkdXhXcmFwcGVyIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFB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Ozs7Ozs7Ozs7QUNBQSx5RDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSwwRDs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSwwRDs7Ozs7Ozs7Ozs7QUNBQSwwRDs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSw0RDs7Ozs7Ozs7Ozs7QUNBQSw2RDs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSwwRDs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSw0RDs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSx3QyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCcmVhZGNydW1icywgTGluaywgVHlwb2dyYXBoeSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgTmF2aWdhdGVOZXh0SWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL05hdmlnYXRlTmV4dFwiO1xyXG5cclxuZnVuY3Rpb24gQnJlYWRjcnVtYigpIHtcclxuICBjb25zdCBoYW5kbGVDbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnNvbGUuaW5mbyhcIllvdSBjbGlja2VkIGEgYnJlYWRjcnVtYi5cIik7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEJyZWFkY3J1bWJzIGFyaWEtbGFiZWw9XCJicmVhZGNydW1iXCIgc2VwYXJhdG9yPXs8TmF2aWdhdGVOZXh0SWNvbiAvPn0+XHJcbiAgICAgICAgPExpbmsgY29sb3I9XCJpbmhlcml0XCIgaHJlZj1cIi9cIiBvbkNsaWNrPXtoYW5kbGVDbGlja30+XHJcbiAgICAgICAgICBRdeG6o24gdHLhu4sgaOG7hyB0aOG7kW5nXHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxMaW5rXHJcbiAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgaHJlZj1cIi9nZXR0aW5nLXN0YXJ0ZWQvaW5zdGFsbGF0aW9uL1wiXHJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cclxuICAgICAgICA+XHJcbiAgICAgICAgICBUaGnhur90IGzhuq1wIGjhu4cgdGjhu5FuZ1xyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8VHlwb2dyYXBoeSBjb2xvcj1cInRleHRQcmltYXJ5XCI+Q8O0bmcgdHkgLyBDaGkgTmjDoW5oPC9UeXBvZ3JhcGh5PlxyXG4gICAgICA8L0JyZWFkY3J1bWJzPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnJlYWRjcnVtYjtcclxuIiwiaW1wb3J0IHsgVHlwb2dyYXBoeSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgQ29sbGFwc2UgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NvbGxhcHNlXCI7XHJcbmltcG9ydCBMaXN0IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0XCI7XHJcbmltcG9ydCBMaXN0SXRlbSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1cIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBBcnJvd1JpZ2h0SWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93UmlnaHRcIjtcclxuaW1wb3J0IENhY2hlZEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9DYWNoZWRcIjtcclxuaW1wb3J0IEV4cGFuZExlc3MgZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9FeHBhbmRMZXNzXCI7XHJcbmltcG9ydCBFeHBhbmRNb3JlIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRXhwYW5kTW9yZVwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcclxuICB9LFxyXG4gIG5lc3RlZDoge1xyXG4gICAgcGFkZGluZ0xlZnQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgfSxcclxuICB0aXRsZVRleHQ6IHtcclxuICAgIGZvbnRGYW1pbHk6IFwiUXVpY2tzYW5kXCIsXHJcbiAgICBmb250U2l6ZTogXCIxNHB4XCIsXHJcbiAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcclxuICB9LFxyXG4gIGl0ZW1UZXh0OiB7XHJcbiAgICBmb250RmFtaWx5OiBcIlF1aWNrc2FuZFwiLFxyXG4gICAgZm9udFNpemU6IFwiMTJweFwiLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmZ1bmN0aW9uIFF1YW5UcmlIZVRob25nKCkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCBbb3BlbjEsIHNldE9wZW4xXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbb3BlbjIsIHNldE9wZW4yXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbb3BlbjMsIHNldE9wZW4zXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbb3BlbjQsIHNldE9wZW40XSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbb3BlbjUsIHNldE9wZW41XSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbb3BlbjYsIHNldE9wZW42XSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbb3BlbjcsIHNldE9wZW43XSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAobnVtYmVyKSA9PiB7XHJcbiAgICBudW1iZXIgPT09IDEgJiYgc2V0T3BlbjEoIW9wZW4xKTtcclxuICAgIG51bWJlciA9PT0gMiAmJiBzZXRPcGVuMighb3BlbjIpO1xyXG4gICAgbnVtYmVyID09PSAzICYmIHNldE9wZW4zKCFvcGVuMyk7XHJcbiAgICBudW1iZXIgPT09IDQgJiYgc2V0T3BlbjQoIW9wZW40KTtcclxuICAgIG51bWJlciA9PT0gNSAmJiBzZXRPcGVuNSghb3BlbjUpO1xyXG4gICAgbnVtYmVyID09PSA2ICYmIHNldE9wZW42KCFvcGVuNik7XHJcbiAgICBudW1iZXIgPT09IDcgJiYgc2V0T3BlbjcoIW9wZW43KTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAwXCI+XHJcbiAgICAgIDxMaXN0XHJcbiAgICAgICAgY29tcG9uZW50PVwibmF2XCJcclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJuZXN0ZWQtbGlzdC1zdWJoZWFkZXJcIlxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fVxyXG4gICAgICA+XHJcbiAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljaygxKX0gY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGVUZXh0fT5cclxuICAgICAgICAgICAgVGhp4bq/dCBM4bqtcCBI4buHIFRo4buRbmdcclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIHtvcGVuMSA/IChcclxuICAgICAgICAgICAgPEV4cGFuZExlc3MgZm9udFNpemU9XCJzbWFsbFwiIGNvbG9yPVwiZGlzYWJsZWRcIiAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8RXhwYW5kTW9yZSBmb250U2l6ZT1cInNtYWxsXCIgY29sb3I9XCJkaXNhYmxlZFwiIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICA8Q29sbGFwc2UgaW49e29wZW4xfSB0aW1lb3V0PVwiYXV0b1wiIHVubW91bnRPbkV4aXQ+XHJcbiAgICAgICAgICA8TGlzdCBjb21wb25lbnQ9XCJkaXZcIiBkaXNhYmxlUGFkZGluZz5cclxuICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMubmVzdGVkfT5cclxuICAgICAgICAgICAgICA8QXJyb3dSaWdodEljb24gZm9udFNpemU9XCJzbWFsbFwiIGNvbG9yPVwiZGlzYWJsZWRcIiAvPlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtVGV4dH0+XHJcbiAgICAgICAgICAgICAgICBTWVMwMDUgLSBDw7RuZyB0eSAvIENoaSBuaMOhbmhcclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLm5lc3RlZH0+XHJcbiAgICAgICAgICAgICAgPEFycm93UmlnaHRJY29uIGZvbnRTaXplPVwic21hbGxcIiBjb2xvcj1cImRpc2FibGVkXCIgLz5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbVRleHR9PlxyXG4gICAgICAgICAgICAgICAgU1lTMDA2IC0gUGjDsm5nIGJhblxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMubmVzdGVkfT5cclxuICAgICAgICAgICAgICA8QXJyb3dSaWdodEljb24gZm9udFNpemU9XCJzbWFsbFwiIGNvbG9yPVwiZGlzYWJsZWRcIiAvPlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtVGV4dH0+XHJcbiAgICAgICAgICAgICAgICBTWVM1MDYgLSBOZ8OibiBow6BuZ1xyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMubmVzdGVkfT5cclxuICAgICAgICAgICAgICA8QXJyb3dSaWdodEljb24gZm9udFNpemU9XCJzbWFsbFwiIGNvbG9yPVwiZGlzYWJsZWRcIiAvPlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtVGV4dH0+XHJcbiAgICAgICAgICAgICAgICBTWVMwMjIgLSBNw6F5IGNo4bunXHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5uZXN0ZWR9PlxyXG4gICAgICAgICAgICAgIDxBcnJvd1JpZ2h0SWNvbiBmb250U2l6ZT1cInNtYWxsXCIgY29sb3I9XCJkaXNhYmxlZFwiIC8+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW1UZXh0fT5cclxuICAgICAgICAgICAgICAgIFNZUzUwOSAtIFF1eSDEkeG7j2kgxJHGoW4gduG7iyB0aeG7gW4gdOG7h1xyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMubmVzdGVkfT5cclxuICAgICAgICAgICAgICA8QXJyb3dSaWdodEljb24gZm9udFNpemU9XCJzbWFsbFwiIGNvbG9yPVwiZGlzYWJsZWRcIiAvPlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtVGV4dH0+XHJcbiAgICAgICAgICAgICAgICBTWVM1MjAgLSBOZ8OgeSBuZ2jhu4kgY+G7p2EgY8O0bmcgdHlcclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgPC9Db2xsYXBzZT5cclxuICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKDIpfSBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cclxuXHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGVUZXh0fT5cclxuICAgICAgICAgICAgUGjDom4gcXV54buBbiBuaMOibiB2acOqblxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAge29wZW4yID8gKFxyXG4gICAgICAgICAgICA8RXhwYW5kTGVzcyBmb250U2l6ZT1cInNtYWxsXCIgY29sb3I9XCJkaXNhYmxlZFwiIC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxFeHBhbmRNb3JlIGZvbnRTaXplPVwic21hbGxcIiBjb2xvcj1cImRpc2FibGVkXCIgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgIDxDb2xsYXBzZSBpbj17b3BlbjJ9IHRpbWVvdXQ9XCJhdXRvXCIgdW5tb3VudE9uRXhpdD5cclxuICAgICAgICAgIDxMaXN0IGNvbXBvbmVudD1cImRpdlwiIGRpc2FibGVQYWRkaW5nPlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5uZXN0ZWR9PlxyXG4gICAgICAgICAgICAgIDxBcnJvd1JpZ2h0SWNvbiBmb250U2l6ZT1cInNtYWxsXCIgY29sb3I9XCJkaXNhYmxlZFwiIC8+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW1UZXh0fT5cclxuICAgICAgICAgICAgICAgIFNZUzAxMCAtIFF14bqjbiBsw70gbmjDom4gdmnDqm5cclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLm5lc3RlZH0+XHJcbiAgICAgICAgICAgICAgPEFycm93UmlnaHRJY29uIGZvbnRTaXplPVwic21hbGxcIiBjb2xvcj1cImRpc2FibGVkXCIgLz5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbVRleHR9PlxyXG4gICAgICAgICAgICAgICAgU1lTMDA5IC0gTOG7m3AgbmfGsOG7nWkgZMO5bmdcclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLm5lc3RlZH0+XHJcbiAgICAgICAgICAgICAgPEFycm93UmlnaHRJY29uIGZvbnRTaXplPVwic21hbGxcIiBjb2xvcj1cImRpc2FibGVkXCIgLz5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbVRleHR9PlxyXG4gICAgICAgICAgICAgICAgU1lTMDA4IC0gVGhp4bq/dCBs4bqtcCBuaMOibiB2acOqbiB2w6BvIGzhu5twIG5nxrDhu51pIGTDuW5nXHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgIDwvQ29sbGFwc2U+XHJcbiAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljaygzKX0gY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGVUZXh0fT5cclxuICAgICAgICAgICAgUGjDom4gcXV54buBbiBk4buvIGxp4buHdVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAge29wZW4zID8gKFxyXG4gICAgICAgICAgICA8RXhwYW5kTGVzcyBmb250U2l6ZT1cInNtYWxsXCIgY29sb3I9XCJkaXNhYmxlZFwiIC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxFeHBhbmRNb3JlIGZvbnRTaXplPVwic21hbGxcIiBjb2xvcj1cImRpc2FibGVkXCIgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgIDxDb2xsYXBzZSBpbj17b3BlbjN9IHRpbWVvdXQ9XCJhdXRvXCIgdW5tb3VudE9uRXhpdD5cclxuICAgICAgICAgIDxMaXN0IGNvbXBvbmVudD1cImRpdlwiIGRpc2FibGVQYWRkaW5nPlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5uZXN0ZWR9PlxyXG4gICAgICAgICAgICAgIDxBcnJvd1JpZ2h0SWNvbiBmb250U2l6ZT1cInNtYWxsXCIgY29sb3I9XCJkaXNhYmxlZFwiIC8+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW1UZXh0fT5cclxuICAgICAgICAgICAgICAgIFNZUzUwNCAtIENo4buJIMSR4buLbmggbmjDom4gdmnDqm4gdsOgbyBwaMOybmcgYmFuXHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5uZXN0ZWR9PlxyXG4gICAgICAgICAgICAgIDxBcnJvd1JpZ2h0SWNvbiBmb250U2l6ZT1cInNtYWxsXCIgY29sb3I9XCJkaXNhYmxlZFwiIC8+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW1UZXh0fT5cclxuICAgICAgICAgICAgICAgIFNZUzUwMyAtIFhlbSBr4bq/dCBj4bqldSBj4bunYSBkb2FuaCBuZ2hp4buHcFxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICA8L0NvbGxhcHNlPlxyXG4gICAgICAgIDxMaXN0SXRlbSBidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soNCl9IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlVGV4dH0+XHJcbiAgICAgICAgICAgIFRoaeG6v3QgbOG6rXAgbcOjIGjhu4cgdGjhu5FuZ1xyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAge29wZW40ID8gKFxyXG4gICAgICAgICAgICA8RXhwYW5kTGVzcyBmb250U2l6ZT1cInNtYWxsXCIgY29sb3I9XCJkaXNhYmxlZFwiIC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxFeHBhbmRNb3JlIGZvbnRTaXplPVwic21hbGxcIiBjb2xvcj1cImRpc2FibGVkXCIgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgIDxDb2xsYXBzZSBpbj17b3BlbjR9IHRpbWVvdXQ9XCJhdXRvXCIgdW5tb3VudE9uRXhpdD5cclxuICAgICAgICAgIDxMaXN0IGNvbXBvbmVudD1cImRpdlwiIGRpc2FibGVQYWRkaW5nPlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5uZXN0ZWR9PlxyXG4gICAgICAgICAgICAgIDxBcnJvd1JpZ2h0SWNvbiBmb250U2l6ZT1cInNtYWxsXCIgY29sb3I9XCJkaXNhYmxlZFwiIC8+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW1UZXh0fT5cclxuICAgICAgICAgICAgICAgIFNZUzMwMiAtIE3DoyBo4buHIHRo4buRbmcgY2jDrW5oXHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5uZXN0ZWR9PlxyXG4gICAgICAgICAgICAgIDxBcnJvd1JpZ2h0SWNvbiBmb250U2l6ZT1cInNtYWxsXCIgY29sb3I9XCJkaXNhYmxlZFwiIC8+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW1UZXh0fT5cclxuICAgICAgICAgICAgICAgIFNZUzUwMSAtIFThuqFvIG3DoyBjaOG6t25cclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLm5lc3RlZH0+XHJcbiAgICAgICAgICAgICAgPEFycm93UmlnaHRJY29uIGZvbnRTaXplPVwic21hbGxcIiBjb2xvcj1cImRpc2FibGVkXCIgLz5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbVRleHR9PlxyXG4gICAgICAgICAgICAgICAgU1lTNjAxIC0gVOG6oW8gbcOjIHBow61cclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLm5lc3RlZH0+XHJcbiAgICAgICAgICAgICAgPEFycm93UmlnaHRJY29uIGZvbnRTaXplPVwic21hbGxcIiBjb2xvcj1cImRpc2FibGVkXCIgLz5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbVRleHR9PlxyXG4gICAgICAgICAgICAgICAgU1lTNjAyIC0gTuG7mWkgZHVuZyBwaMOtXHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5uZXN0ZWR9PlxyXG4gICAgICAgICAgICAgIDxBcnJvd1JpZ2h0SWNvbiBmb250U2l6ZT1cInNtYWxsXCIgY29sb3I9XCJkaXNhYmxlZFwiIC8+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW1UZXh0fT5cclxuICAgICAgICAgICAgICAgIFNZUzUwMiAtIFRoaeG6v3QgbOG6rXAgbOG7m3AgbmfGsOG7nWkgZMO5bmcgxJFjIHjDs2Egc3RvcFxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICA8L0NvbGxhcHNlPlxyXG4gICAgICAgIDxMaXN0SXRlbSBidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soNSl9IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlVGV4dH0+XHJcbiAgICAgICAgICAgIFRp4buHbiDDrWNoXHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICB7b3BlbjUgPyAoXHJcbiAgICAgICAgICAgIDxFeHBhbmRMZXNzIGZvbnRTaXplPVwic21hbGxcIiBjb2xvcj1cImRpc2FibGVkXCIgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPEV4cGFuZE1vcmUgZm9udFNpemU9XCJzbWFsbFwiIGNvbG9yPVwiZGlzYWJsZWRcIiAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgPENvbGxhcHNlIGluPXtvcGVuNX0gdGltZW91dD1cImF1dG9cIiB1bm1vdW50T25FeGl0PlxyXG4gICAgICAgICAgPExpc3QgY29tcG9uZW50PVwiZGl2XCIgZGlzYWJsZVBhZGRpbmc+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLm5lc3RlZH0+XHJcbiAgICAgICAgICAgICAgPEFycm93UmlnaHRJY29uIGZvbnRTaXplPVwic21hbGxcIiBjb2xvcj1cImRpc2FibGVkXCIgLz5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbVRleHR9PlxyXG4gICAgICAgICAgICAgICAgU1lTNjAwIC0gROG7i2NoIG5nw7RuIG5n4buvXHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5uZXN0ZWR9PlxyXG4gICAgICAgICAgICAgIDxBcnJvd1JpZ2h0SWNvbiBmb250U2l6ZT1cInNtYWxsXCIgY29sb3I9XCJkaXNhYmxlZFwiIC8+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW1UZXh0fT5cclxuICAgICAgICAgICAgICAgIFNZUzcwMyAtIFThuqFvIFRow6BuaCBwaOG7kVxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMubmVzdGVkfT5cclxuICAgICAgICAgICAgICA8QXJyb3dSaWdodEljb24gZm9udFNpemU9XCJzbWFsbFwiIGNvbG9yPVwiZGlzYWJsZWRcIiAvPlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtVGV4dH0+XHJcbiAgICAgICAgICAgICAgICBTWVM3MDQgLSBU4bqhbyBRdeG6rW4sIEh1eeG7h25cclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLm5lc3RlZH0+XHJcbiAgICAgICAgICAgICAgPEFycm93UmlnaHRJY29uIGZvbnRTaXplPVwic21hbGxcIiBjb2xvcj1cImRpc2FibGVkXCIgLz5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbVRleHR9PlxyXG4gICAgICAgICAgICAgICAgU1lTNzA1IC0gVOG6oW8gUGjGsOG7nW5nLCBYw6NcclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLm5lc3RlZH0+XHJcbiAgICAgICAgICAgICAgPEFycm93UmlnaHRJY29uIGZvbnRTaXplPVwic21hbGxcIiBjb2xvcj1cImRpc2FibGVkXCIgLz5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbVRleHR9PlxyXG4gICAgICAgICAgICAgICAgU1lTMDI1IC0gS2nhu4NtIHRyYSBob+G6oXQgxJHhu5luZ1xyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMubmVzdGVkfT5cclxuICAgICAgICAgICAgICA8QXJyb3dSaWdodEljb24gZm9udFNpemU9XCJzbWFsbFwiIGNvbG9yPVwiZGlzYWJsZWRcIiAvPlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtVGV4dH0+XHJcbiAgICAgICAgICAgICAgICBTWVMwMjAgLSBUaGnhur90IGzhuq1wIGhv4bqhdCDEkeG7mW5nIG5nxrDhu51pIGTDuW5nXHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5uZXN0ZWR9PlxyXG4gICAgICAgICAgICAgIDxBcnJvd1JpZ2h0SWNvbiBmb250U2l6ZT1cInNtYWxsXCIgY29sb3I9XCJkaXNhYmxlZFwiIC8+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW1UZXh0fT5cclxuICAgICAgICAgICAgICAgIFNZUzAxMiAtIFRoYXkgxJHhu5VpIG3huq10IGto4bqpdVxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMubmVzdGVkfT5cclxuICAgICAgICAgICAgICA8QXJyb3dSaWdodEljb24gZm9udFNpemU9XCJzbWFsbFwiIGNvbG9yPVwiZGlzYWJsZWRcIiAvPlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtVGV4dH0+XHJcbiAgICAgICAgICAgICAgICBTWVMxNTAgLSBMb2NhdGlvbiBzZXR0aW5nXHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgIDwvQ29sbGFwc2U+XHJcbiAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayg2KX0gY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGVUZXh0fT5cclxuICAgICAgICAgICAgVGjDtG5nIHRpbiBo4buHIHRo4buRbmdcclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIHtvcGVuNiA/IChcclxuICAgICAgICAgICAgPEV4cGFuZExlc3MgZm9udFNpemU9XCJzbWFsbFwiIGNvbG9yPVwiZGlzYWJsZWRcIiAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8RXhwYW5kTW9yZSBmb250U2l6ZT1cInNtYWxsXCIgY29sb3I9XCJkaXNhYmxlZFwiIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICA8Q29sbGFwc2UgaW49e29wZW42fSB0aW1lb3V0PVwiYXV0b1wiIHVubW91bnRPbkV4aXQ+XHJcbiAgICAgICAgICA8TGlzdCBjb21wb25lbnQ9XCJkaXZcIiBkaXNhYmxlUGFkZGluZz5cclxuICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMubmVzdGVkfT5cclxuICAgICAgICAgICAgICA8QXJyb3dSaWdodEljb24gZm9udFNpemU9XCJzbWFsbFwiIGNvbG9yPVwiZGlzYWJsZWRcIiAvPlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtVGV4dH0+XHJcbiAgICAgICAgICAgICAgICBTWVM4MTEgLSBHaGkgY2jDuiBwaMOhdCBow6BuaCB0w61uaCBuxINuZyBt4bubaVxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMubmVzdGVkfT5cclxuICAgICAgICAgICAgICA8QXJyb3dSaWdodEljb24gZm9udFNpemU9XCJzbWFsbFwiIGNvbG9yPVwiZGlzYWJsZWRcIiAvPlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtVGV4dH0+XHJcbiAgICAgICAgICAgICAgICBTWVM4MTIgLSBRdXkgdHLDrG5oIGPDtG5nIHR5XHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5uZXN0ZWR9PlxyXG4gICAgICAgICAgICAgIDxBcnJvd1JpZ2h0SWNvbiBmb250U2l6ZT1cInNtYWxsXCIgY29sb3I9XCJkaXNhYmxlZFwiIC8+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW1UZXh0fT5cclxuICAgICAgICAgICAgICAgIC1MaWNlbnNlIEluZm9ybWF0aW9uXHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5uZXN0ZWR9PlxyXG4gICAgICAgICAgICAgIDxBcnJvd1JpZ2h0SWNvbiBmb250U2l6ZT1cInNtYWxsXCIgY29sb3I9XCJkaXNhYmxlZFwiIC8+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW1UZXh0fT5cclxuICAgICAgICAgICAgICAgIFNZUzg4OCAtIFN5c3RlbSBJbnRlcmdyaXR5IE1hbmFnZW1lbnRcclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgPC9Db2xsYXBzZT5cclxuICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKDcpfSBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZVRleHR9PlxyXG4gICAgICAgICAgICBD4bqtcCBuaOG6rXQgbeG7m2lcclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxDYWNoZWRJY29uIHN0eWxlPXt7IGNvbG9yOiAnIzRFRUZBMicgfX0gLz5cclxuICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICA8L0xpc3Q+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBRdWFuVHJpSGVUaG9uZztcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEljb25CdXR0b24sIEJhZGdlLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgUXVhblRyaUhlVGhvbmcgZnJvbSBcIi4vUXVhblRyaUhlVGhvbmcvUXVhblRyaUhlVGhvbmdcIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gIHRpdGxlOiB7XHJcbiAgICBmb250RmFtaWx5OiBcIlF1aWNrc2FuZFwiLFxyXG4gICAgZm9udFNpemU6IFwiMTZweFwiLFxyXG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gICAgY29sb3I6IFwiIzJGQUFGQ1wiLFxyXG4gICAgcGFkZGluZ0xlZnQ6IFwiNnB4XCIsXHJcbiAgICBtYXJnaW46ICcwJ1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gU2lkZUJhcihwcm9wcykge1xyXG4gIGNvbnN0IFtrZXksIHNldEtleV0gPSB1c2VTdGF0ZSgxKTtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHByLTBcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYmctd2hpdGUgXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LXN0YXJ0IGFsaWduLWl0ZW1zLXN0YXJ0IHByLTBcIj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGQtZmxleCBmbGV4LWNvbHVtbiBqdXN0aWZ5LWNvbnRlbnQtc3RhcnQgYWxpZ24taXRlbXMtY2VudGVyIHB0LTIgXCJcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzJGQUFGQ1wiLFxyXG4gICAgICAgICAgICAgIHdpZHRoOiBcIjUycHhcIixcclxuICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwdmhcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gYXJpYS1sYWJlbD1cInNob3dcIiBjb2xvcj1cInByaW1hcnlcIiBzdHlsZT17eyB3aWR0aDogXCI1MnB4XCIsIGhlaWdodDogXCI1MnB4XCIgfX0gb25DbGljaz17KCkgPT4gc2V0S2V5KDEpfT5cclxuICAgICAgICAgICAgICA8QmFkZ2UgY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvaWNvbi9pY29uMS5wbmdcIiAvPlxyXG4gICAgICAgICAgICAgIDwvQmFkZ2U+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gYXJpYS1sYWJlbD1cInNob3dcIiBjb2xvcj1cInByaW1hcnlcIiBzdHlsZT17eyB3aWR0aDogXCI1MnB4XCIsIGhlaWdodDogXCI1MnB4XCIgfX0gb25DbGljaz17KCkgPT4gc2V0S2V5KDIpfT5cclxuICAgICAgICAgICAgICA8QmFkZ2UgY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvaWNvbi9pY29uMi5wbmdcIiAvPlxyXG4gICAgICAgICAgICAgIDwvQmFkZ2U+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gYXJpYS1sYWJlbD1cInNob3dcIiBjb2xvcj1cInByaW1hcnlcIiBzdHlsZT17eyB3aWR0aDogXCI1MnB4XCIsIGhlaWdodDogXCI1MnB4XCIgfX0gb25DbGljaz17KCkgPT4gc2V0S2V5KDMpfT5cclxuICAgICAgICAgICAgICA8QmFkZ2UgY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvaWNvbi9pY29uMy5wbmdcIiAvPlxyXG4gICAgICAgICAgICAgIDwvQmFkZ2U+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gYXJpYS1sYWJlbD1cInNob3dcIiBjb2xvcj1cInByaW1hcnlcIiBzdHlsZT17eyB3aWR0aDogXCI1MnB4XCIsIGhlaWdodDogXCI1MnB4XCIgfX0gb25DbGljaz17KCkgPT4gc2V0S2V5KDQpfT5cclxuICAgICAgICAgICAgICA8QmFkZ2UgY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvaWNvbi9pY29uNC5wbmdcIiAvPlxyXG4gICAgICAgICAgICAgIDwvQmFkZ2U+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gYXJpYS1sYWJlbD1cInNob3dcIiBjb2xvcj1cInByaW1hcnlcIiBzdHlsZT17eyB3aWR0aDogXCI1MnB4XCIsIGhlaWdodDogXCI1MnB4XCIgfX0gb25DbGljaz17KCkgPT4gc2V0S2V5KDUpfT5cclxuICAgICAgICAgICAgICA8QmFkZ2UgY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvaWNvbi9pY29uNS5wbmdcIiAvPlxyXG4gICAgICAgICAgICAgIDwvQmFkZ2U+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gYXJpYS1sYWJlbD1cInNob3dcIiBjb2xvcj1cInByaW1hcnlcIiBzdHlsZT17eyB3aWR0aDogXCI1MnB4XCIsIGhlaWdodDogXCI1MnB4XCIgfX0gb25DbGljaz17KCkgPT4gc2V0S2V5KDYpfT5cclxuICAgICAgICAgICAgICA8QmFkZ2UgY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvaWNvbi9pY29uNi5wbmdcIiAvPlxyXG4gICAgICAgICAgICAgIDwvQmFkZ2U+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gYXJpYS1sYWJlbD1cInNob3dcIiBjb2xvcj1cInByaW1hcnlcIiBzdHlsZT17eyB3aWR0aDogXCI1MnB4XCIsIGhlaWdodDogXCI1MnB4XCIgfX0gb25DbGljaz17KCkgPT4gc2V0S2V5KDcpfT5cclxuICAgICAgICAgICAgICA8QmFkZ2UgY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvaWNvbi9pY29uNy5wbmdcIiAvPlxyXG4gICAgICAgICAgICAgIDwvQmFkZ2U+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gYXJpYS1sYWJlbD1cInNob3dcIiBjb2xvcj1cInByaW1hcnlcIiBzdHlsZT17eyB3aWR0aDogXCI1MnB4XCIsIGhlaWdodDogXCI1MnB4XCIgfX0gb25DbGljaz17KCkgPT4gc2V0S2V5KDgpfT5cclxuICAgICAgICAgICAgICA8QmFkZ2UgY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvaWNvbi9pY29uOC5wbmdcIiAvPlxyXG4gICAgICAgICAgICAgIDwvQmFkZ2U+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gYXJpYS1sYWJlbD1cInNob3dcIiBjb2xvcj1cInByaW1hcnlcIiBzdHlsZT17eyB3aWR0aDogXCI1MnB4XCIsIGhlaWdodDogXCI1MnB4XCIgfX0gb25DbGljaz17KCkgPT4gc2V0S2V5KDkpfT5cclxuICAgICAgICAgICAgICA8QmFkZ2UgY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvaWNvbi9pY29uOS5wbmdcIiAvPlxyXG4gICAgICAgICAgICAgIDwvQmFkZ2U+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gYXJpYS1sYWJlbD1cInNob3dcIiBjb2xvcj1cInByaW1hcnlcIiBzdHlsZT17eyB3aWR0aDogXCI1MnB4XCIsIGhlaWdodDogXCI1MnB4XCIgfX0gb25DbGljaz17KCkgPT4gc2V0S2V5KDEwKX0+XHJcbiAgICAgICAgICAgICAgPEJhZGdlIGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2ljb24vaWNvbjEwLnBuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgPC9CYWRnZT5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwic2hvd1wiIGNvbG9yPVwicHJpbWFyeVwiIHN0eWxlPXt7IHdpZHRoOiBcIjUycHhcIiwgaGVpZ2h0OiBcIjUycHhcIiB9fSBvbkNsaWNrPXsoKSA9PiBzZXRLZXkoMTEpfT5cclxuICAgICAgICAgICAgICA8QmFkZ2UgY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvaWNvbi9pY29uMTEucG5nXCIgLz5cclxuICAgICAgICAgICAgICA8L0JhZGdlPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9XCJzaG93XCIgY29sb3I9XCJwcmltYXJ5XCIgc3R5bGU9e3sgd2lkdGg6IFwiNTJweFwiLCBoZWlnaHQ6IFwiNTJweFwiIH19IG9uQ2xpY2s9eygpID0+IHNldEtleSgxMil9PlxyXG4gICAgICAgICAgICAgIDxCYWRnZSBjb2xvcj1cInByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9pY29uL2ljb24xMi5wbmdcIiAvPlxyXG4gICAgICAgICAgICAgIDwvQmFkZ2U+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gYXJpYS1sYWJlbD1cInNob3dcIiBjb2xvcj1cInByaW1hcnlcIiBzdHlsZT17eyB3aWR0aDogXCI1MnB4XCIsIGhlaWdodDogXCI1MnB4XCIgfX0gb25DbGljaz17KCkgPT4gc2V0S2V5KDEzKX0+XHJcbiAgICAgICAgICAgICAgPEJhZGdlIGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2ljb24vaWNvbjEzLnBuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgPC9CYWRnZT5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG5cclxuXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnY2FsYygxMDAlIC0gNjBweCknLCBwYWRkaW5nTGVmdDogJzhweCcgfX0+XHJcbiAgICAgICAgICB7a2V5ID09PSAxICYmXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5cclxuICAgICAgICAgICAgICAgIFFV4bqiTiBUUuG7iiBI4buGIFRI4buQTkdcclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPFF1YW5UcmlIZVRob25nIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAge2tleSA9PT0gMiAmJlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICBCw4FOIEzhurogUE9TXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICB7LyogPFF1YW5UcmlIZVRob25nIC8+ICovfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHtrZXkgPT09IDMgJiZcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgQ8OUTkcgVknhu4ZDXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICB7LyogPFF1YW5UcmlIZVRob25nIC8+ICovfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHtrZXkgPT09IDQgJiZcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgQsOBTyBDw4FPXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICB7LyogPFF1YW5UcmlIZVRob25nIC8+ICovfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHtrZXkgPT09IDUgJiZcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgTkjDgk4gU+G7sFxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgey8qIDxRdWFuVHJpSGVUaG9uZyAvPiAqL31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB7a2V5ID09PSA2ICYmXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5cclxuICAgICAgICAgICAgICAgIEvhur4gVE/DgU5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIHsvKiA8UXVhblRyaUhlVGhvbmcgLz4gKi99XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAge2tleSA9PT0gNyAmJlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICBLSMOBQ0ggSMOATkcgJmFtcDsgQsOBTiBIw4BOR1xyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgey8qIDxRdWFuVHJpSGVUaG9uZyAvPiAqL31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB7a2V5ID09PSA4ICYmXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5cclxuICAgICAgICAgICAgICAgIFPhuqJOIFBI4bqoTVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgey8qIDxRdWFuVHJpSGVUaG9uZyAvPiAqL31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB7a2V5ID09PSA5ICYmXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5cclxuICAgICAgICAgICAgICAgIELDgU8gR0nDgVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgey8qIDxRdWFuVHJpSGVUaG9uZyAvPiAqL31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB7a2V5ID09PSAxMCAmJlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICBRVeG6ok4gTMOdIEtIT1xyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgey8qIDxRdWFuVHJpSGVUaG9uZyAvPiAqL31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB7a2V5ID09PSAxMSAmJlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICBUSFUgTVVBXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICB7LyogPFF1YW5UcmlIZVRob25nIC8+ICovfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHtrZXkgPT09IDEyICYmXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5cclxuICAgICAgICAgICAgICAgIERBU0hCT0FSRFxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgey8qIDxRdWFuVHJpSGVUaG9uZyAvPiAqL31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB7a2V5ID09PSAxMyAmJlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICBJTVBPUlQvRVhQT1JUXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICB7LyogPFF1YW5UcmlIZVRob25nIC8+ICovfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHsvKiA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxyXG4gICAgICAgICAgICB7a2V5ID09PSAxICYmIFwiUVXhuqJOIFRS4buKIEjhu4YgVEjhu5BOR1wifVxyXG4gICAgICAgICAgICB7a2V5ID09PSAyICYmIFwiQsOBTiBM4bq6IFBPU1wifVxyXG4gICAgICAgICAgICB7a2V5ID09PSAzICYmIFwiQ8OUTkcgVknhu4ZDXCJ9XHJcbiAgICAgICAgICAgIHtrZXkgPT09IDQgJiYgXCJCw4FPIEPDgU9cIn1cclxuICAgICAgICAgICAge2tleSA9PT0gNSAmJiBcIk5Iw4JOIFPhu7BcIn1cclxuICAgICAgICAgICAge2tleSA9PT0gNiAmJiBcIkvhur4gVE/DgU5cIn1cclxuICAgICAgICAgICAge2tleSA9PT0gNyAmJiBcIktIw4FDSCBIw4BORyAmIELDgU4gSMOATkdcIn1cclxuICAgICAgICAgICAge2tleSA9PT0gOCAmJiBcIlPhuqJOIFBI4bqoTVwifVxyXG4gICAgICAgICAgICB7a2V5ID09PSA5ICYmIFwiQsOBTyBHScOBXCJ9XHJcbiAgICAgICAgICAgIHtrZXkgPT09IDEwICYmIFwiUVXhuqJOIEzDnSBLSE9cIn1cclxuICAgICAgICAgICAge2tleSA9PT0gMTEgJiYgXCJUSFUgTVVBXCJ9XHJcbiAgICAgICAgICAgIHtrZXkgPT09IDEyICYmIFwiREFTSEJPQVJEXCJ9XHJcbiAgICAgICAgICAgIHtrZXkgPT09IDEzICYmIFwiSU1QT1JUL0VYUE9SVFwifVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPFF1YW5UcmlIZVRob25nIC8+ICovfVxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWRlQmFyO1xyXG4iLCJpbXBvcnQgeyBCYWRnZSwgSW5wdXRCYXNlLCBNZW51LCBNZW51SXRlbSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgQXBwQmFyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXJcIjtcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIjtcclxuaW1wb3J0IHsgZmFkZSwgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IFRvb2xiYXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXJcIjtcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIjtcclxuaW1wb3J0IHsgQWNjb3VudENpcmNsZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnNcIjtcclxuaW1wb3J0IE5vdGlmaWNhdGlvbnNJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Ob3RpZmljYXRpb25zJztcclxuaW1wb3J0IFNldHRpbmdzSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU2V0dGluZ3MnO1xyXG5pbXBvcnQgTWVudUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01lbnUnO1xyXG5pbXBvcnQgVHJlbmRpbmdVcEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1RyZW5kaW5nVXAnO1xyXG5pbXBvcnQgU2VhcmNoSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU2VhcmNoJztcclxuaW1wb3J0IEhlbHBJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9IZWxwJztcclxuaW1wb3J0IE1vcmVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Nb3JlJztcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgZmxleEdyb3c6IDEsXHJcbiAgfSxcclxuICBjb21wYW55VGl0bGU6IHtcclxuICAgIGNvbG9yOiAnIzEwMTAxMCcsXHJcbiAgICBmb250U2l6ZTogXCIxNnB4XCIsXHJcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgfSxcclxuICBtZW51QnV0dG9uOiB7XHJcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygyKSxcclxuICB9LFxyXG4gIHRpdGxlOiB7XHJcbiAgICBjb2xvcjogJyMxMDEwMTAnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcidcclxuICB9LFxyXG4gIGdyb3c6IHtcclxuICAgIGZsZXhHcm93OiAxLFxyXG4gIH0sXHJcbiAgc2VhcmNoOiB7XHJcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgYm9yZGVyUmFkaXVzOiBcIjE2cHhcIixcclxuICAgIGJhY2tncm91bmRDb2xvcjogZmFkZSh0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSwgMC4xNSksXHJcbiAgICBcIiY6aG92ZXJcIjoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGZhZGUodGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsIDAuMjUpLFxyXG4gICAgfSxcclxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgbWFyZ2luTGVmdDogMCxcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcInNtXCIpXToge1xyXG4gICAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDMpLFxyXG4gICAgICB3aWR0aDogXCJhdXRvXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc2VhcmNoSWNvbjoge1xyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygwLCAyKSxcclxuICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgcG9pbnRlckV2ZW50czogXCJub25lXCIsXHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICB9LFxyXG4gIGlucHV0Um9vdDoge1xyXG4gICAgY29sb3I6ICcjMTAxMDEwJyxcclxuICB9LFxyXG4gIGlucHV0SW5wdXQ6IHtcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMSwgMSwgMSwgMCksXHJcbiAgICAvLyB2ZXJ0aWNhbCBwYWRkaW5nICsgZm9udCBzaXplIGZyb20gc2VhcmNoSWNvblxyXG4gICAgcGFkZGluZ0xlZnQ6IGBjYWxjKDFlbSArICR7dGhlbWUuc3BhY2luZyg0KX1weClgLFxyXG4gICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFwid2lkdGhcIiksXHJcbiAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJtZFwiKV06IHtcclxuICAgICAgd2lkdGg6IFwiMjBjaFwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHNlY3Rpb25EZXNrdG9wOiB7XHJcbiAgICBkaXNwbGF5OiBcIm5vbmVcIixcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcIm1kXCIpXToge1xyXG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBzZWN0aW9uTW9iaWxlOiB7XHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcIm1kXCIpXToge1xyXG4gICAgICBkaXNwbGF5OiBcIm5vbmVcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBhY2NOYW1lOiB7XHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuZnVuY3Rpb24gVG9wTmF2KHByb3BzKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIGNvbnN0IFthbmNob3JFbCwgc2V0QW5jaG9yRWxdID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW21vYmlsZU1vcmVBbmNob3JFbCwgc2V0TW9iaWxlTW9yZUFuY2hvckVsXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xyXG5cclxuICBjb25zdCBpc01lbnVPcGVuID0gQm9vbGVhbihhbmNob3JFbCk7XHJcbiAgY29uc3QgaXNNb2JpbGVNZW51T3BlbiA9IEJvb2xlYW4obW9iaWxlTW9yZUFuY2hvckVsKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUHJvZmlsZU1lbnVPcGVuID0gKGV2ZW50KSA9PiB7XHJcbiAgICBzZXRBbmNob3JFbChldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVNb2JpbGVNZW51Q2xvc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRNb2JpbGVNb3JlQW5jaG9yRWwobnVsbCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTWVudUNsb3NlID0gKCkgPT4ge1xyXG4gICAgc2V0QW5jaG9yRWwobnVsbCk7XHJcbiAgICBoYW5kbGVNb2JpbGVNZW51Q2xvc2UoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVNb2JpbGVNZW51T3BlbiA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0TW9iaWxlTW9yZUFuY2hvckVsKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG1lbnVJZCA9IFwicHJpbWFyeS1zZWFyY2gtYWNjb3VudC1tZW51XCI7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ncm93fT5cclxuICAgICAgICA8QXBwQmFyXHJcbiAgICAgICAgICBwb3NpdGlvbj1cInN0YXRpY1wiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZVwiXHJcbiAgICAgICAgICBzdHlsZT17eyBib3hTaGFkb3c6IFwibm9uZVwiIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFRvb2xiYXI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiXFxpbWFnZXNcXFZWbG9nby5wbmdcIiBjbGFzc05hbWU9XCJwci01XCIgLz5cclxuICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICBlZGdlPVwic3RhcnRcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZW51QnV0dG9ufVxyXG4gICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIm9wZW4gZHJhd2VyXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxNZW51SWNvbiBzdHlsZT17eyBjb2xvcjogJyNEQ0UwRTInLCBmb250U2l6ZTogJzQwJyB9fSAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb21wYW55VGl0bGV9PkPDtG5nIHR5IFZWIFNvbHV0aW9uczwvc3Bhbj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VhcmNofSBzdHlsZT17eyBiYWNrZ3JvdW5kOiBcIiNGN0Y3RjdcIiB9fT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWFyY2hJY29ufT5cclxuICAgICAgICAgICAgICAgIDxTZWFyY2hJY29uIHN0eWxlPXt7IGNvbG9yOiAnIzJGQUFGQycgfX0gLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8SW5wdXRCYXNlXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaOKAplwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc2VzPXt7XHJcbiAgICAgICAgICAgICAgICAgIHJvb3Q6IGNsYXNzZXMuaW5wdXRSb290LFxyXG4gICAgICAgICAgICAgICAgICBpbnB1dDogY2xhc3Nlcy5pbnB1dElucHV0LFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGlucHV0UHJvcHM9e3sgXCJhcmlhLWxhYmVsXCI6IFwic2VhcmNoXCIgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZ3Jvd30gLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VjdGlvbkRlc2t0b3B9PlxyXG4gICAgICAgICAgICAgIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9XCJzaG93IFwiIGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgPEJhZGdlIGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICA8U2V0dGluZ3NJY29uIHN0eWxlPXt7IGNvbG9yOiAnIzVBNUE1QScgfX0gLz5cclxuICAgICAgICAgICAgICAgIDwvQmFkZ2U+XHJcbiAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9XCJzaG93IFwiIGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgPEJhZGdlIGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICA8VHJlbmRpbmdVcEljb24gc3R5bGU9e3sgY29sb3I6ICcjNUE1QTVBJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9CYWRnZT5cclxuICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgPEljb25CdXR0b24gYXJpYS1sYWJlbD1cInNob3dcIiBjb2xvcj1cInByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgIDxCYWRnZSBjb2xvcj1cInByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgPEhlbHBJY29uIHN0eWxlPXt7IGNvbG9yOiAnIzVBNUE1QScgfX0gLz5cclxuICAgICAgICAgICAgICAgIDwvQmFkZ2U+XHJcbiAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwic3VidGl0bGUxXCJcclxuICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgSOG7lyB0cuG7o1xyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuXHJcbiAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJzaG93IDE3IG5ldyBub3RpZmljYXRpb25zXCJcclxuICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEJhZGdlIGJhZGdlQ29udGVudD17MTd9IGNvbG9yPVwiZXJyb3JcIj5cclxuICAgICAgICAgICAgICAgICAgPE5vdGlmaWNhdGlvbnNJY29uIHN0eWxlPXt7IGNvbG9yOiAnIzVBNUE1QScgfX0gLz5cclxuICAgICAgICAgICAgICAgIDwvQmFkZ2U+XHJcbiAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwic3VidGl0bGUxXCJcclxuICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQWNjb3VudCBOYW1lXHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICBlZGdlPVwiZW5kXCJcclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJhY2NvdW50IG9mIGN1cnJlbnQgdXNlclwiXHJcbiAgICAgICAgICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVQcm9maWxlTWVudU9wZW59XHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxBY2NvdW50Q2lyY2xlIHN0eWxlPXt7IGNvbG9yOiAnIzVBNUE1QScgfX0gLz5cclxuICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICA8L0FwcEJhcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb3BOYXY7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEJyZWFkY3J1bWIgZnJvbSBcIi4uL2NvbXBvbmVudC9icmVhZGNydW1iL0JyZWFkY3J1bWJcIjtcclxuaW1wb3J0IFNpZGVCYXIgZnJvbSBcIi4uL2NvbXBvbmVudC9zaWRlQmFyL3NpZGVCYXJcIjtcclxuaW1wb3J0IFRvcE5hdiBmcm9tIFwiLi4vY29tcG9uZW50L3RvcE5hdi90b3BuYXZcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5MYXlvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgaWQ9XCJhcHAtd3JhcHBlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RpY2t5LXRvcFwiPlxyXG4gICAgICAgICAgPFRvcE5hdiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0yIHAtMFwiPjxTaWRlQmFyIC8+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMCBwdC0yXCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnI0YyRjJGMicgfX0+XHJcblxyXG4gICAgICAgICAgICA8QnJlYWRjcnVtYiAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTJcIj5cclxuICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgbnVtZXJhbCBmcm9tICdudW1lcmFsJztcclxuaW1wb3J0IGFwcFNldHRpbmdzIGZyb20gJy4uL2ZpbGVTZXR0aW5ncy9hcHBTZXR0aW5ncy5qc29uJztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzRGV2KCkge1xyXG4gIGNvbnN0IGRldiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbic7XHJcbiAgcmV0dXJuIGRldjtcclxufVxyXG5cclxuZGVjbGFyZSBnbG9iYWwge1xyXG4gIGludGVyZmFjZSBTdHJpbmcge1xyXG4gICAgaW1hZ2VTcmMod2lkdGg6IG51bWJlciwgaGVpZ2h0PzogbnVtYmVyKTogc3RyaW5nO1xyXG5cclxuICAgIHN0YXRpY0ltYWdlKCk6IHN0cmluZztcclxuXHJcbiAgICB0b1RpdGxlQ2FzZSgpOiBzdHJpbmc7XHJcblxyXG4gICAgYnVpbGRRdWVyeShkYXRhOiBhbnksIHByZWZpeFF1ZXJ5OiBzdHJpbmcpOiBzdHJpbmc7XHJcblxyXG4gICAgYnVpbGRQYXJhbXMoZGF0YTogYW55LCBwcmVmaXhRdWVyeTogc3RyaW5nKTogc3RyaW5nO1xyXG5cclxuICAgIHRvRnJpZW5kbHlVcmwoKTogc3RyaW5nO1xyXG5cclxuICAgIHRleHRJbmRleCgpOiBBcnJheTxzdHJpbmc+O1xyXG5cclxuICAgIHRvR3VpZCgpOiBzdHJpbmc7XHJcblxyXG4gICAgbG9nKG1lc3NhZ2U/OiBhbnksIC4uLm9wdGlvbmFsUGFyYW1zOiBhbnlbXSk6IHZvaWQ7XHJcbiAgfVxyXG5cclxuICBpbnRlcmZhY2UgTnVtYmVyIHtcclxuICAgIGZvcm1hdChmb3JtYXRQYXRlcm4/OiBhbnkpOiBzdHJpbmdcclxuXHJcbiAgICBmb3JtYXRGZWV0SW5jaCgpOiBzdHJpbmc7XHJcblxyXG4gICAgdG9GZWV0SW5jaCgpOiB7IGZlZXQ6IG51bWJlciwgaW5jaGVzOiBudW1iZXIgfTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5TdHJpbmcucHJvdG90eXBlLmltYWdlU3JjID0gZnVuY3Rpb24gKHdpZHRoOiBudW1iZXIsIGhlaWdodD86IG51bWJlcikge1xyXG4gIGNvbnN0IHByZWZpeCA9IGFwcFNldHRpbmdzLnNlcnZlckluZm8ubmV4dEpzQXBwVVJMO1xyXG4gIGlmICh3aWR0aCkge1xyXG4gICAgaGVpZ2h0ID0gaGVpZ2h0IHx8ICh3aWR0aCAvICgxNiAvIDkpKTtcclxuICAgIHJldHVybiBgJHtwcmVmaXh9L3N0YXRpYy9pbWFnZXMvJHt3aWR0aH0vJHtoZWlnaHR9LyR7dGhpc31gXHJcbiAgfVxyXG5cclxuICByZXR1cm4gYC9pbWFnZXMvJHt0aGlzfWA7XHJcbn1cclxuXHJcblxyXG5TdHJpbmcucHJvdG90eXBlLnN0YXRpY0ltYWdlID0gZnVuY3Rpb24gKCkge1xyXG4gIGlmICghQm9vbGVhbih0aGlzKSlcclxuICAgIHJldHVybiBudWxsO1xyXG5cclxuICBjb25zdCBpbWFnZUZpbGVOYW1lID0gdGhpcy5zcGxpdChcIi9cIikucG9wKCk7XHJcbiAgcmV0dXJuIGAvaW1hZ2VzLyR7aW1hZ2VGaWxlTmFtZX1gXHJcbn1cclxuXHJcblN0cmluZy5wcm90b3R5cGUudG9UaXRsZUNhc2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgbGV0IHN0ciA9IHRoaXMudG9Mb3dlckNhc2UoKS5zcGxpdCgnICcpO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBzdHJbaV0gPSBzdHJbaV0uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHJbaV0uc2xpY2UoMSk7XHJcbiAgfVxyXG4gIHJldHVybiBzdHIuam9pbignICcpO1xyXG59XHJcblxyXG5cclxuTnVtYmVyLnByb3RvdHlwZS5mb3JtYXQgPSBmdW5jdGlvbiAoZm9ybWF0UGF0ZXJuKSB7XHJcbiAgY29uc3QgbnVtYmVyID0gbnVtZXJhbCh0aGlzIHx8IDApO1xyXG4gIGlmIChmb3JtYXRQYXRlcm4pXHJcbiAgICByZXR1cm4gbnVtYmVyLmZvcm1hdChmb3JtYXRQYXRlcm4pXHJcbiAgcmV0dXJuIG51bWJlci5mb3JtYXQoKTtcclxufVxyXG5cclxuTnVtYmVyLnByb3RvdHlwZS5mb3JtYXRGZWV0SW5jaCA9IGZ1bmN0aW9uICgpIHtcclxuICBjb25zdCBjZW50aSA9IE51bWJlcih0aGlzKTtcclxuICBjb25zdCBmZWV0ID0gTWF0aC5yb3VuZCgoY2VudGkgLyAyLjU0KSAvIDEyKVxyXG4gIGNvbnN0IGluY2hlcyA9IE1hdGgucm91bmQoKGNlbnRpIC8gMi41NCkgLSAoZmVldCAqIDEyKSlcclxuICByZXR1cm4gYCR7ZmVldH0nJHtpbmNoZXN9XCJgO1xyXG59XHJcblxyXG5OdW1iZXIucHJvdG90eXBlLnRvRmVldEluY2ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3QgY2VudGkgPSB0aGlzO1xyXG4gIGxldCBpbmNoZXMgPSBjZW50aSAvIDIuNTQ7XHJcbiAgY29uc3QgZmVldCA9IF8udG9JbnRlZ2VyKChpbmNoZXMgLyAxMikpO1xyXG4gIGluY2hlcyA9IE1hdGgucm91bmQoaW5jaGVzIC0gKGZlZXQgKiAxMikpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgZmVldCxcclxuICAgIGluY2hlc1xyXG4gIH1cclxufVxyXG5cclxuXHJcblN0cmluZy5wcm90b3R5cGUuYnVpbGRRdWVyeSA9IGZ1bmN0aW9uIChkYXRhOiBhbnksIHByZWZpeFF1ZXJ5ID0gJz8nKSB7XHJcblxyXG4gIC8vIElmIHRoZSBkYXRhIGlzIGFscmVhZHkgYSBzdHJpbmcsIHJldHVybiBpdCBhcy1pc1xyXG4gIGlmICh0eXBlb2YgKGRhdGEpID09PSAnc3RyaW5nJylcclxuICAgIHJldHVybiBkYXRhO1xyXG5cclxuICAvLyBDcmVhdGUgYSBxdWVyeSBhcnJheSB0byBob2xkIHRoZSBrZXkvdmFsdWUgcGFpcnNcclxuICB2YXIgcXVlcnkgPSBbXTtcclxuXHJcbiAgLy8gTG9vcCB0aHJvdWdoIHRoZSBkYXRhIG9iamVjdFxyXG4gIGZvciAodmFyIGtleSBpbiBkYXRhKSB7XHJcbiAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgIC8vIEVuY29kZSBlYWNoIGtleSBhbmQgdmFsdWUsIGNvbmNhdGVuYXRlIHRoZW0gaW50byBhIHN0cmluZywgYW5kIHB1c2ggdGhlbSB0byB0aGUgYXJyYXlcclxuICAgICAgcXVlcnkucHVzaChlbmNvZGVVUklDb21wb25lbnQoa2V5KSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCgoZGF0YVtrZXldIHx8ICcnKSkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gSm9pbiBlYWNoIGl0ZW0gaW4gdGhlIGFycmF5IHdpdGggYSBgJmAgYW5kIHJldHVybiB0aGUgcmVzdWx0aW5nIHN0cmluZ1xyXG4gIHJldHVybiBgJHt0aGlzfSR7cHJlZml4UXVlcnl9JHtxdWVyeS5qb2luKCcmJyl9YDtcclxuXHJcbn07XHJcblxyXG5TdHJpbmcucHJvdG90eXBlLmJ1aWxkUGFyYW1zID0gZnVuY3Rpb24gKGRhdGEsIHByZWZpeFBhcmFtcyA9ICc6Jykge1xyXG4gIGxldCBzdHIgPSB0aGlzIHx8ICcnO1xyXG4gIC8vIElmIHRoZSBkYXRhIGlzIGFscmVhZHkgYSBzdHJpbmcsIHJldHVybiBpdCBhcy1pc1xyXG4gIGlmICh0eXBlb2YgKGRhdGEpID09PSAnc3RyaW5nJylcclxuICAgIHJldHVybiBkYXRhO1xyXG4gIC8vIENyZWF0ZSBhIHF1ZXJ5IGFycmF5IHRvIGhvbGQgdGhlIGtleS92YWx1ZSBwYWlyc1xyXG4gIC8vIExvb3AgdGhyb3VnaCB0aGUgZGF0YSBvYmplY3RcclxuICBmb3IgKHZhciBrZXkgaW4gZGF0YSlcclxuICAgIHN0ciA9IHN0ci5yZXBsYWNlKGAke3ByZWZpeFBhcmFtc30ke2tleX1gLCAoZGF0YVtrZXldIHx8ICcnKSlcclxuICAvLyBKb2luIGVhY2ggaXRlbSBpbiB0aGUgYXJyYXkgd2l0aCBhIGAmYCBhbmQgcmV0dXJuIHRoZSByZXN1bHRpbmcgc3RyaW5nXHJcbiAgcmV0dXJuIHN0clxyXG59O1xyXG5cclxuaWYgKHR5cGVvZiAoZG9jdW1lbnQpICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgU3RvcmFnZS5wcm90b3R5cGUuZ2V0ID0ga2V5ID0+IHtcclxuICAgIHJldHVybiBKU09OLnBhcnNlKChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpIHx8IFwibnVsbFwiKSk7XHJcbiAgfVxyXG5cclxuICBTdG9yYWdlLnByb3RvdHlwZS5zZXQgPSAoa2V5LCB2YWx1ZSkgPT4ge1xyXG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkodmFsdWUgfHwgJ3t9JykpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGNoYW5nZUFsaWFzKGFsaWFzOiBzdHJpbmcsIHJlcGxhY2VTdHJpbmcgPSBcIi1cIikge1xyXG4gIHZhciBzdHIgPSBhbGlhcyB8fCAnJztcclxuICBzdHIgPSBzdHIudG9Mb3dlckNhc2UoKTtcclxuICBzdHIgPSBzdHIucmVwbGFjZSgvw6B8w6F84bqhfOG6o3zDo3zDonzhuqd84bqlfOG6rXzhuql84bqrfMSDfOG6sXzhuq984bq3fOG6s3zhurUvZywgXCJhXCIpO1xyXG4gIHN0ciA9IHN0ci5yZXBsYWNlKC/DqHzDqXzhurl84bq7fOG6vXzDqnzhu4F84bq/fOG7h3zhu4N84buFL2csIFwiZVwiKTtcclxuICBzdHIgPSBzdHIucmVwbGFjZSgvw6x8w6184buLfOG7iXzEqS9nLCBcImlcIik7XHJcbiAgc3RyID0gc3RyLnJlcGxhY2UoL8OyfMOzfOG7jXzhu498w7V8w7R84buTfOG7kXzhu5l84buVfOG7l3zGoXzhu5184bubfOG7o3zhu5984buhL2csIFwib1wiKTtcclxuICBzdHIgPSBzdHIucmVwbGFjZSgvw7l8w7p84bulfOG7p3zFqXzGsHzhu6t84bupfOG7sXzhu6184buvL2csIFwidVwiKTtcclxuICBzdHIgPSBzdHIucmVwbGFjZSgv4buzfMO9fOG7tXzhu7d84bu5L2csIFwieVwiKTtcclxuICBzdHIgPSBzdHIucmVwbGFjZSgvxJEvZywgXCJkXCIpO1xyXG4gIHN0ciA9IHN0ci5yZXBsYWNlKC8hfEB8JXxcXF58XFwqfFxcKHxcXCl8XFwrfFxcPXxcXDx8XFw+fFxcP3xcXC98LHxcXC58XFw6fFxcO3xcXCd8XFxcInxcXCZ8XFwjfFxcW3xcXF18fnxcXCR8X3xgfC18e3x9fFxcfHxcXFxcL2csIFwiXCIpO1xyXG4gIHN0ciA9IHN0ci5yZXBsYWNlKC8gKyAvZywgXCJcIik7XHJcbiAgc3RyID0gc3RyLnJlcGxhY2UoLyAvZywgcmVwbGFjZVN0cmluZyk7XHJcbiAgc3RyID0gc3RyLnRyaW0oKTtcclxuICByZXR1cm4gc3RyO1xyXG59XHJcblxyXG5TdHJpbmcucHJvdG90eXBlLnRvRnJpZW5kbHlVcmwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgcmV0dXJuIGNoYW5nZUFsaWFzKHRoaXMpO1xyXG59XHJcblxyXG5TdHJpbmcucHJvdG90eXBlLnRleHRJbmRleCA9IGZ1bmN0aW9uICgpIHtcclxuICByZXR1cm4gY2hhbmdlQWxpYXModGhpcykuc3BsaXQoJy0nKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlR3VpZCgpIHtcclxuICBmdW5jdGlvbiBTNCgpIHtcclxuICAgIHJldHVybiAoKCgxICsgTWF0aC5yYW5kb20oKSkgKiAweDEwMDAwKSB8IDApLnRvU3RyaW5nKDE2KS5zdWJzdHJpbmcoMSk7XHJcbiAgfVxyXG4gIHJldHVybiAoUzQoKSArIFM0KCkgKyBcIi1cIiArIFM0KCkgKyBcIi00XCIgKyBTNCgpLnN1YnN0cigwLCAzKSArIFwiLVwiICsgUzQoKSArIFwiLVwiICsgUzQoKSArIFM0KCkgKyBTNCgpKS50b0xvd2VyQ2FzZSgpO1xyXG59XHJcblxyXG5TdHJpbmcucHJvdG90eXBlLnRvR3VpZCA9IGZ1bmN0aW9uICgpIHtcclxuICByZXR1cm4gY3JlYXRlR3VpZCgpO1xyXG59O1xyXG5cclxuXHJcblN0cmluZy5wcm90b3R5cGUubG9nID0gZnVuY3Rpb24gKG1lc3NhZ2U/OiBhbnksIC4uLm9wdGlvbmFsUGFyYW1zOiBhbnlbXSkge1xyXG4gIHJldHVybiBwcm9jZXNzLmVudi5OT0RFX0VOViAmJiBjb25zb2xlLmxvZyhtZXNzYWdlLCAuLi5vcHRpb25hbFBhcmFtcyk7XHJcbn0iLCJpbXBvcnQgUmVhY3QsIHsgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0ICcuLi9saWJzL2V4dGVuc2lvbnMnO1xyXG5pbXBvcnQgTWFpbkxheW91dCBmcm9tICcuLi9sYXlvdXRzL21haW5MYXlvdXQnO1xyXG5pbXBvcnQgd2l0aFJlZHV4IGZyb20gJy4uL3JlZHV4L3dpdGhSZWR1eCc7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgTlByb2dyZXNzIGZyb20gJ25wcm9ncmVzcyc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IE5leHRTZW8gfSBmcm9tICduZXh0LXNlbyc7XHJcbmltcG9ydCB7IHBlcnNpc3RTdG9yZSB9IGZyb20gJ3JlZHV4LXBlcnNpc3QnXHJcbmltcG9ydCB7IFBlcnNpc3RHYXRlIH0gZnJvbSAncmVkdXgtcGVyc2lzdC9pbnRlZ3JhdGlvbi9yZWFjdCdcclxuaW1wb3J0ICdyZWFjdC1sYXp5LWxvYWQtaW1hZ2UtY29tcG9uZW50L3NyYy9lZmZlY3RzL2JsdXIuY3NzJztcclxuaW1wb3J0ICdhbmltYXRlLmNzcydcclxuaW1wb3J0ICcuLi9wdWJsaWMvY3NzL2luZGV4LmNzcydcclxuXHJcblJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCAoKSA9PiB3aW5kb3cuc2Nyb2xsVG8oMCwgMCkpO1xyXG5Sb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUVycm9yJywgKCkgPT4gTlByb2dyZXNzLmRvbmUoKSk7XHJcblxyXG5jb25zdCBFUlBBcHA6IEZ1bmN0aW9uQ29tcG9uZW50ID0gKHByb3BzOiBhbnkpID0+IHtcclxuICBjb25zdCB7IENvbXBvbmVudCwgcGFnZVByb3BzLCBzdG9yZSB9ID0gcHJvcHM7XHJcbiAgY29uc3QgQXBwTGF5b3V0ID0gQ29tcG9uZW50LkxheW91dCB8fCBNYWluTGF5b3V0O1xyXG4gIGNvbnN0IHBlcnNpc3RvciA9IHBlcnNpc3RTdG9yZShzdG9yZSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIDxOZXh0U2VvIHRpdGxlPVwiRVJQIFdlYiBBcHBsaWNhdGlvblwiIC8+XHJcbiAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgICAgIDxQZXJzaXN0R2F0ZSBsb2FkaW5nPXs8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+fSBwZXJzaXN0b3I9e3BlcnNpc3Rvcn0+XHJcbiAgICAgICAgICA8QXBwTGF5b3V0IHsuLi5wYWdlUHJvcHN9PlxyXG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgICA8L0FwcExheW91dD5cclxuICAgICAgICA8L1BlcnNpc3RHYXRlPlxyXG4gICAgICA8L1Byb3ZpZGVyPlxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSZWR1eChFUlBBcHApOyIsImV4cG9ydCBjb25zdCBhY3Rpb25UeXBlcyA9IHtcclxuICBTRVRfRFlOQU1JQ19MT0FESU5HOiAnU0VUX0RZTkFNSUNfTE9BRElORycsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzZXREeW5hbWljTG9hZGluZyA9IChmaWVsZDogc3RyaW5nLCBsb2FkaW5nOiBib29sZWFuKSA9PiAoe1xyXG4gIHR5cGU6IGFjdGlvblR5cGVzLlNFVF9EWU5BTUlDX0xPQURJTkcsXHJcbiAgZmllbGQsXHJcbiAgbG9hZGluZ1xyXG59KTsiLCJpbXBvcnQgRHluYW1pY1N0YXRlIGZyb20gXCIuLi8uLi9AdHlwZXMvZHluYW1pYy9keW5hbWljU3RhdGVcIjtcclxuXHJcbmltcG9ydCB7IGFjdGlvblR5cGVzIH0gZnJvbSAnLi9hY3Rpb25zJ1xyXG5cclxuY29uc3QgaW5pdGlhbGl6ZVN0YXRlOiBEeW5hbWljU3RhdGUgPSB7XHJcbiAgZHluYW1pY0xvYWRpbmc6IHt9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBpbml0aWFsaXplU3RhdGUsIGFjdGlvbjogYW55KSB7XHJcbiAgY29uc3QgeyBkeW5hbWljTG9hZGluZyB9ID0gc3RhdGU7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5TRVRfRFlOQU1JQ19MT0FESU5HOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGR5bmFtaWNMb2FkaW5nOiB7XHJcbiAgICAgICAgICAuLi5keW5hbWljTG9hZGluZyxcclxuICAgICAgICAgIFthY3Rpb24uZmllbGRdOiBhY3Rpb24ubG9hZGluZ1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IGR5bmFtaWNTdGF0ZSBmcm9tIFwiLi9keW5hbWljL3JlZHVjZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgZHluYW1pY1N0YXRlXHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBhbGwsIGZvcmsgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCBlczZwcm9taXNlIGZyb20gXCJlczYtcHJvbWlzZVwiO1xyXG5cclxuXHJcbmVzNnByb21pc2UucG9seWZpbGwoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpIHtcclxuICB5aWVsZCBhbGwoW1xyXG4gICAgLy8gZm9yayhsb2dpbldhdGNoZXIpLFxyXG4gIF0pO1xyXG59XHJcbiIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB0aHVua01pZGRsZXdhcmUgZnJvbSAncmVkdXgtdGh1bmsnO1xyXG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSAncmVkdXgtc2FnYSdcclxuaW1wb3J0IG5leHRSZWR1eFdyYXBwZXIgZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcclxuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gJy4vcm9vdFJlZHVjZXInO1xyXG5pbXBvcnQgcm9vdFNhZ2EgZnJvbSAnLi9yb290U2FnYSdcclxuXHJcbmNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKTtcclxuXHJcbmNvbnN0IGJpbmRNaWRkbGV3YXJlID0gKG1pZGRsZXdhcmU6IGFueSkgPT4ge1xyXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICBjb25zdCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSA9IHJlcXVpcmUoJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbicpXHJcbiAgICByZXR1cm4gY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZSkpXHJcbiAgfVxyXG4gIHJldHVybiBhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyZVN0b3JlKGluaXRpYWxTdGF0ZTogYW55ID0ge30pOiBhbnkge1xyXG4gIGxldCBzdG9yZTogYW55ID0ge307XHJcbiAgY29uc3QgeyBwZXJzaXN0UmVkdWNlciB9ID0gcmVxdWlyZSgncmVkdXgtcGVyc2lzdCcpO1xyXG4gIGNvbnN0IHN0b3JhZ2UgPSByZXF1aXJlKCdyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlJykuZGVmYXVsdDtcclxuICBjb25zdCBwZXJzaXN0Q29uZmlnOiBhbnkgPSB7XHJcbiAgICBrZXk6ICcucm9zdGVyc3BvdC5sb2NhbHN0b3JhZ2UuYXBwLmtleScsXHJcbiAgICBzdG9yYWdlLFxyXG4gICAgd2hpdGVsaXN0OiBbXHJcbiAgICAgICd1c2VyUHJvZmlsZVN0YXRlJ1xyXG4gICAgXSxcclxuICB9XHJcblxyXG4gIGNvbnN0IHBlcnNpc3RlZFJlZHVjZXIgPSBwZXJzaXN0UmVkdWNlcihwZXJzaXN0Q29uZmlnLCByb290UmVkdWNlcilcclxuICBzdG9yZSA9IGNyZWF0ZVN0b3JlKFxyXG4gICAgcGVyc2lzdGVkUmVkdWNlcixcclxuICAgIGluaXRpYWxTdGF0ZSxcclxuICAgIGJpbmRNaWRkbGV3YXJlKFt0aHVua01pZGRsZXdhcmUsIHNhZ2FNaWRkbGV3YXJlXSlcclxuICApO1xyXG5cclxuICBzdG9yZS5zYWdhVGFzayA9IHNhZ2FNaWRkbGV3YXJlLnJ1bihyb290U2FnYSk7XHJcbiAgcmV0dXJuIHN0b3JlO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJlZHV4KEJhc2VDb21wb25lbnQ6IGFueSkge1xyXG4gIHJldHVybiBuZXh0UmVkdXhXcmFwcGVyKGNvbmZpZ3VyZVN0b3JlKShCYXNlQ29tcG9uZW50KVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0NvbGxhcHNlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQXJyb3dSaWdodFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2FjaGVkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9FeHBhbmRMZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9FeHBhbmRNb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9IZWxwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9NZW51XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9OYXZpZ2F0ZU5leHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL05vdGlmaWNhdGlvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1NlYXJjaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2V0dGluZ3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1RyZW5kaW5nVXBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXM2LXByb21pc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9kYXNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXNlb1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJucHJvZ3Jlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibnVtZXJhbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtcGVyc2lzdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1wZXJzaXN0L2ludGVncmF0aW9uL3JlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhL2VmZmVjdHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtdGh1bmtcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==
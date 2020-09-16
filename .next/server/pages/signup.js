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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/signup.tsx");
/******/ })
/************************************************************************/
/******/ ({

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
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "@material-ui/core/ListItemText");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/ArrowRight */ "@material-ui/icons/ArrowRight");
/* harmony import */ var _material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_Cached__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Cached */ "@material-ui/icons/Cached");
/* harmony import */ var _material_ui_icons_Cached__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Cached__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/ExpandLess */ "@material-ui/icons/ExpandLess");
/* harmony import */ var _material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "@material-ui/icons/ExpandMore");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "C:\\Long\\CODE\\ERP\\erp.webapp\\component\\sideBar\\QuanTriHeThong\\QuanTriHeThong.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;











const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing(1)
  },
  itemText: {
    fontFamily: "Quicksand",
    fontSize: "12px"
  }
}));

function QuanTriHeThong() {
  const classes = useStyles();
  const [open1, setOpen1] = react__WEBPACK_IMPORTED_MODULE_10___default.a.useState(false);
  const [open2, setOpen2] = react__WEBPACK_IMPORTED_MODULE_10___default.a.useState(false);
  const [open3, setOpen3] = react__WEBPACK_IMPORTED_MODULE_10___default.a.useState(false);
  const [open4, setOpen4] = react__WEBPACK_IMPORTED_MODULE_10___default.a.useState(false);
  const [open5, setOpen5] = react__WEBPACK_IMPORTED_MODULE_10___default.a.useState(false);
  const [open6, setOpen6] = react__WEBPACK_IMPORTED_MODULE_10___default.a.useState(false);
  const [open7, setOpen7] = react__WEBPACK_IMPORTED_MODULE_10___default.a.useState(false);

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
    className: "w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2___default.a, {
    component: "nav",
    "aria-labelledby": "nested-list-subheader",
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    onClick: () => handleClick(1),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: classes.itemText,
    primary: "Thi\u1EBFt l\u1EADp h\u1EC7 th\u1ED1ng",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }), open1 ? __jsx(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_8___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }) : __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_9___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 15
    }
  })), __jsx(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_1___default.a, {
    in: open1,
    timeout: "auto",
    unmountOnExit: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2___default.a, {
    component: "div",
    disablePadding: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_6___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 15
    }
  }, "SYS005 - C\xF4ng ty / Chi nh\xE1nh")), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_6___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 15
    }
  }, "SYS006 - Ph\xF2ng ban")), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_6___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 15
    }
  }, "SYS506 - Ng\xE2n h\xE0ng")), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_6___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 15
    }
  }, "SYS022 - M\xE1y ch\u1EE7")), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_6___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 15
    }
  }, "SYS509 - Quy \u0111\u1ECFi \u0111\u01A1n v\u1ECB ti\u1EC1n t\u1EC7")), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_6___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 15
    }
  }, "SYS520 - Ng\xE0y ngh\u1EC9 c\u1EE7a c\xF4ng ty")))), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    onClick: () => handleClick(2),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4___default.a, {
    primary: "Ph\xE2n quy\u1EC1n nh\xE2n vi\xEAn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 11
    }
  }), open2 ? __jsx(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_8___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }
  }) : __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_9___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 15
    }
  })), __jsx(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_1___default.a, {
    in: open2,
    timeout: "auto",
    unmountOnExit: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2___default.a, {
    component: "div",
    disablePadding: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_6___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 15
    }
  }, "SYS010 - Qu\u1EA3n l\xFD nh\xE2n vi\xEAn")), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_6___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 15
    }
  }, "SYS009 - L\u1EDBp ng\u01B0\u1EDDi d\xF9ng")), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_6___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 15
    }
  }, "SYS008 - Thi\u1EBFt l\u1EADp nh\xE2n vi\xEAn v\xE0o l\u1EDBp ng\u01B0\u1EDDi d\xF9ng")))), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    onClick: () => handleClick(3),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4___default.a, {
    primary: "Ph\xE2n quy\u1EC1n d\u1EEF li\u1EC7u",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 11
    }
  }), open3 ? __jsx(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_8___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 13
    }
  }) : __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_9___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 15
    }
  })), __jsx(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_1___default.a, {
    in: open3,
    timeout: "auto",
    unmountOnExit: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2___default.a, {
    component: "div",
    disablePadding: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_6___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 15
    }
  }, "SYS504 - Ch\u1EC9 \u0111\u1ECBnh nh\xE2n vi\xEAn v\xE0o ph\xF2ng ban")), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_6___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 15
    }
  }, "SYS503 - Xem k\u1EBFt c\u1EA5u c\u1EE7a doanh nghi\u1EC7p")))), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    onClick: () => handleClick(4),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4___default.a, {
    primary: "Thi\u1EBFt l\u1EADp m\xE3 h\u1EC7 th\u1ED1ng",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 11
    }
  }), open4 ? __jsx(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_8___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 13
    }
  }) : __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_9___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 15
    }
  })), __jsx(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_1___default.a, {
    in: open4,
    timeout: "auto",
    unmountOnExit: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2___default.a, {
    component: "div",
    disablePadding: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_6___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 15
    }
  }, "SYS302 - M\xE3 h\u1EC7 th\u1ED1ng ch\xEDnh")), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_6___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 15
    }
  }, "SYS501 - T\u1EA1o m\xE3 ch\u1EB7n")), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_6___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 15
    }
  }, "SYS601 - T\u1EA1o m\xE3 ph\xED")), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_6___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 15
    }
  }, "SYS602 - N\u1ED9i dung ph\xED")), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_6___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 15
    }
  }, "SYS502 - Thi\u1EBFt l\u1EADp l\u1EDBp ng\u01B0\u1EDDi d\xF9ng \u0111c x\xF3a stop")))), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    onClick: () => handleClick(5),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4___default.a, {
    primary: "Ti\u1EC7n \xEDch",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 11
    }
  }), open5 ? __jsx(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_8___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 13
    }
  }) : __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_9___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 15
    }
  })), __jsx(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_1___default.a, {
    in: open5,
    timeout: "auto",
    unmountOnExit: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2___default.a, {
    component: "div",
    disablePadding: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_6___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 15
    }
  }, "SYS600 - D\u1ECBch ng\xF4n ng\u1EEF")), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_6___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 15
    }
  }, "SYS703 - T\u1EA1o Th\xE0nh ph\u1ED1")), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_6___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 15
    }
  }, "SYS704 - T\u1EA1o Qu\u1EADn, Huy\u1EC7n")), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_6___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 15
    }
  }, "SYS705 - T\u1EA1o Ph\u01B0\u1EDDng, X\xE3")), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_6___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 15
    }
  }, "SYS025 - Ki\u1EC3m tra ho\u1EA1t \u0111\u1ED9ng")), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_6___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 15
    }
  }, "SYS020 - Thi\u1EBFt l\u1EADp ho\u1EA1t \u0111\u1ED9ng ng\u01B0\u1EDDi d\xF9ng")), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_6___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 15
    }
  }, "SYS012 - Thay \u0111\u1ED5i m\u1EADt kh\u1EA9u")), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_6___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 15
    }
  }, "SYS150 - Location setting")))), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    onClick: () => handleClick(6),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4___default.a, {
    primary: "Th\xF4ng tin h\u1EC7 th\u1ED1ng",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 11
    }
  }), open6 ? __jsx(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_8___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 13
    }
  }) : __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_9___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 15
    }
  })), __jsx(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_1___default.a, {
    in: open6,
    timeout: "auto",
    unmountOnExit: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2___default.a, {
    component: "div",
    disablePadding: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_6___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 15
    }
  }, "SYS811 - Ghi ch\xFA ph\xE1t h\xE0nh t\xEDnh n\u0103ng m\u1EDBi")), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_6___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 15
    }
  }, "SYS812 - Quy tr\xECnh c\xF4ng ty")), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_6___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 15
    }
  }, "-License Information")), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_6___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 15
    }
  }, "SYS888 - System Intergrity Management")))), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    onClick: () => handleClick(7),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4___default.a, {
    primary: "C\u1EADp nh\u1EADt m\u1EDBi",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 11
    }
  }), __jsx(_material_ui_icons_Cached__WEBPACK_IMPORTED_MODULE_7___default.a, {
    style: {
      color: '#4EEFA2'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
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
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _QuanTriHeThong_QuanTriHeThong__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./QuanTriHeThong/QuanTriHeThong */ "./component/sideBar/QuanTriHeThong/QuanTriHeThong.tsx");
var _jsxFileName = "C:\\Long\\CODE\\ERP\\erp.webapp\\component\\sideBar\\sideBar.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



 // import QuanTriHeThong from "./QuanTriHeThong/QuanTriHeThong";

const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])({
  root: {},
  title: {
    fontFamily: "Quicksand",
    fontSize: "16px",
    fontWeight: 'bold',
    color: "#2FAAFC",
    paddingLeft: "6px"
  }
});

function SideBar(props) {
  const {
    0: key,
    1: setKey
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1);
  const classes = useStyles();
  return __jsx("div", {
    className: "container p-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "row h-full bg-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "col-md-2 d-flex justify-content-start align-items-start pr-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "h-full d-flex flex-column justify-content-start align-items-center pt-2 ",
    style: {
      backgroundColor: "#2FAAFC",
      width: "52px",
      height: "100vh"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
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
      lineNumber: 33,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/images/icon/icon1.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
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
      lineNumber: 38,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/images/icon/icon2.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
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
      lineNumber: 43,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/images/icon/icon3.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
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
      lineNumber: 48,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/images/icon/icon4.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
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
      lineNumber: 53,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/images/icon/icon5.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
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
      lineNumber: 58,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/images/icon/icon6.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
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
      lineNumber: 63,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/images/icon/icon7.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
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
      lineNumber: 68,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/images/icon/icon8.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
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
      lineNumber: 73,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/images/icon/icon9.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
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
      lineNumber: 78,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/images/icon/icon10.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
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
      lineNumber: 83,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/images/icon/icon11.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
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
      lineNumber: 88,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/images/icon/icon12.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
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
      lineNumber: 93,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/images/icon/icon13.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 17
    }
  }))))), __jsx("div", {
    className: "col-md-10 pr-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 11
    }
  }, key === 1 && "QUẢN TRỊ HỆ THỐNG", key === 2 && "Bán lẻ POS", key === 3 && "Công việc", key === 4 && "Báo cáo", key === 5 && "Nhân sự", key === 6 && "Kế toán", key === 7 && "Khách hàng & bán hàng", key === 8 && "Sản phẩm", key === 9 && "Báo giá", key === 10 && "Quản lý kho", key === 11 && "Thu mua", key === 12 && "Dashboard", key === 13 && "Import/Export"), __jsx(_QuanTriHeThong_QuanTriHeThong__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 11
    }
  }))));
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
    color: "secondary",
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
/* harmony import */ var _component_sideBar_sideBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/sideBar/sideBar */ "./component/sideBar/sideBar.tsx");
/* harmony import */ var _component_topNav_topnav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/topNav/topnav */ "./component/topNav/topnav.tsx");
var _jsxFileName = "C:\\Long\\CODE\\ERP\\erp.webapp\\layouts\\mainLayout.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class MainLayout extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx("div", {
      id: "app-wrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: "sticky-top",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }
    }, __jsx(_component_topNav_topnav__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 11
      }
    })), __jsx("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "col-md-2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 11
      }
    }, __jsx(_component_sideBar_sideBar__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 37
      }
    })), __jsx("div", {
      className: "col-md-10",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 11
      }
    }, "text", this.props.children)));
  }

}

/***/ }),

/***/ "./pages/signup.tsx":
/*!**************************!*\
  !*** ./pages/signup.tsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layouts_mainLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layouts/mainLayout */ "./layouts/mainLayout.tsx");
var _jsxFileName = "C:\\Long\\CODE\\ERP\\erp.webapp\\pages\\signup.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const SignUp = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  });
};

SignUp.Layout = _layouts_mainLayout__WEBPACK_IMPORTED_MODULE_1__["default"];
/* harmony default export */ __webpack_exports__["default"] = (SignUp);

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

/***/ "@material-ui/core/ListItemText":
/*!*************************************************!*\
  !*** external "@material-ui/core/ListItemText" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemText");

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

/***/ "@material-ui/styles":
/*!**************************************!*\
  !*** external "@material-ui/styles" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/styles");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L3NpZGVCYXIvUXVhblRyaUhlVGhvbmcvUXVhblRyaUhlVGhvbmcudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudC9zaWRlQmFyL3NpZGVCYXIudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudC90b3BOYXYvdG9wbmF2LnRzeCIsIndlYnBhY2s6Ly8vLi9sYXlvdXRzL21haW5MYXlvdXQudHN4Iiwid2VicGFjazovLy8uL3BhZ2VzL3NpZ251cC50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Db2xsYXBzZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9BcnJvd1JpZ2h0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0NhY2hlZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9FeHBhbmRMZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0V4cGFuZE1vcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvSGVscFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9NZW51XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL05vdGlmaWNhdGlvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2VhcmNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1NldHRpbmdzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1RyZW5kaW5nVXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvc3R5bGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290Iiwid2lkdGgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwiYmFja2dyb3VuZCIsInBhcGVyIiwibmVzdGVkIiwicGFkZGluZ0xlZnQiLCJzcGFjaW5nIiwiaXRlbVRleHQiLCJmb250RmFtaWx5IiwiZm9udFNpemUiLCJRdWFuVHJpSGVUaG9uZyIsImNsYXNzZXMiLCJvcGVuMSIsInNldE9wZW4xIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIm9wZW4yIiwic2V0T3BlbjIiLCJvcGVuMyIsInNldE9wZW4zIiwib3BlbjQiLCJzZXRPcGVuNCIsIm9wZW41Iiwic2V0T3BlbjUiLCJvcGVuNiIsInNldE9wZW42Iiwib3BlbjciLCJzZXRPcGVuNyIsImhhbmRsZUNsaWNrIiwibnVtYmVyIiwiY29sb3IiLCJ0aXRsZSIsImZvbnRXZWlnaHQiLCJTaWRlQmFyIiwicHJvcHMiLCJrZXkiLCJzZXRLZXkiLCJoZWlnaHQiLCJmbGV4R3JvdyIsImNvbXBhbnlUaXRsZSIsIm1lbnVCdXR0b24iLCJtYXJnaW5SaWdodCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJncm93Iiwic2VhcmNoIiwicG9zaXRpb24iLCJib3JkZXJSYWRpdXMiLCJmYWRlIiwiY29tbW9uIiwid2hpdGUiLCJtYXJnaW5MZWZ0IiwiYnJlYWtwb2ludHMiLCJ1cCIsInNlYXJjaEljb24iLCJwYWRkaW5nIiwicG9pbnRlckV2ZW50cyIsImlucHV0Um9vdCIsImlucHV0SW5wdXQiLCJ0cmFuc2l0aW9uIiwidHJhbnNpdGlvbnMiLCJjcmVhdGUiLCJzZWN0aW9uRGVza3RvcCIsInNlY3Rpb25Nb2JpbGUiLCJhY2NOYW1lIiwiVG9wTmF2IiwiYW5jaG9yRWwiLCJzZXRBbmNob3JFbCIsIm1vYmlsZU1vcmVBbmNob3JFbCIsInNldE1vYmlsZU1vcmVBbmNob3JFbCIsImlzTWVudU9wZW4iLCJCb29sZWFuIiwiaXNNb2JpbGVNZW51T3BlbiIsImhhbmRsZVByb2ZpbGVNZW51T3BlbiIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsImhhbmRsZU1vYmlsZU1lbnVDbG9zZSIsImhhbmRsZU1lbnVDbG9zZSIsImhhbmRsZU1vYmlsZU1lbnVPcGVuIiwibWVudUlkIiwiYm94U2hhZG93IiwiaW5wdXQiLCJNYWluTGF5b3V0IiwiQ29tcG9uZW50IiwicmVuZGVyIiwiY2hpbGRyZW4iLCJTaWduVXAiLCJMYXlvdXQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7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Ozs7Ozs7QUNBQSx5RDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSwwRDs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSwwRDs7Ozs7Ozs7Ozs7QUNBQSwwRDs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSw2RDs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSwwRDs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJwYWdlcy9zaWdudXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL3NpZ251cC50c3hcIik7XG4iLCJpbXBvcnQgeyBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBDb2xsYXBzZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ29sbGFwc2VcIjtcclxuaW1wb3J0IHsgZ3JlZW4gfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzXCI7XHJcbmltcG9ydCBMaXN0IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0XCI7XHJcbmltcG9ydCBMaXN0SXRlbSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1cIjtcclxuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0XCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBBcnJvd1JpZ2h0SWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93UmlnaHRcIjtcclxuaW1wb3J0IENhY2hlZEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9DYWNoZWRcIjtcclxuaW1wb3J0IEV4cGFuZExlc3MgZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9FeHBhbmRMZXNzXCI7XHJcbmltcG9ydCBFeHBhbmRNb3JlIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRXhwYW5kTW9yZVwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcclxuICB9LFxyXG4gIG5lc3RlZDoge1xyXG4gICAgcGFkZGluZ0xlZnQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgfSxcclxuICBpdGVtVGV4dDoge1xyXG4gICAgZm9udEZhbWlseTogXCJRdWlja3NhbmRcIixcclxuICAgIGZvbnRTaXplOiBcIjEycHhcIixcclxuICB9LFxyXG59KSk7XHJcblxyXG5mdW5jdGlvbiBRdWFuVHJpSGVUaG9uZygpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgW29wZW4xLCBzZXRPcGVuMV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW29wZW4yLCBzZXRPcGVuMl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW29wZW4zLCBzZXRPcGVuM10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW29wZW40LCBzZXRPcGVuNF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW29wZW41LCBzZXRPcGVuNV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW29wZW42LCBzZXRPcGVuNl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW29wZW43LCBzZXRPcGVuN10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKG51bWJlcikgPT4ge1xyXG4gICAgbnVtYmVyID09PSAxICYmIHNldE9wZW4xKCFvcGVuMSk7XHJcbiAgICBudW1iZXIgPT09IDIgJiYgc2V0T3BlbjIoIW9wZW4yKTtcclxuICAgIG51bWJlciA9PT0gMyAmJiBzZXRPcGVuMyghb3BlbjMpO1xyXG4gICAgbnVtYmVyID09PSA0ICYmIHNldE9wZW40KCFvcGVuNCk7XHJcbiAgICBudW1iZXIgPT09IDUgJiYgc2V0T3BlbjUoIW9wZW41KTtcclxuICAgIG51bWJlciA9PT0gNiAmJiBzZXRPcGVuNighb3BlbjYpO1xyXG4gICAgbnVtYmVyID09PSA3ICYmIHNldE9wZW43KCFvcGVuNyk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cclxuICAgICAgPExpc3RcclxuICAgICAgICBjb21wb25lbnQ9XCJuYXZcIlxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm5lc3RlZC1saXN0LXN1YmhlYWRlclwiXHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9XHJcbiAgICAgID5cclxuICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKDEpfT5cclxuICAgICAgICAgIDxMaXN0SXRlbVRleHRcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW1UZXh0fVxyXG4gICAgICAgICAgICBwcmltYXJ5PVwiVGhp4bq/dCBs4bqtcCBo4buHIHRo4buRbmdcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIHtvcGVuMSA/IChcclxuICAgICAgICAgICAgPEV4cGFuZExlc3MgZm9udFNpemU9XCJzbWFsbFwiIGNvbG9yPVwiZGlzYWJsZWRcIiAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8RXhwYW5kTW9yZSBmb250U2l6ZT1cInNtYWxsXCIgY29sb3I9XCJkaXNhYmxlZFwiIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICA8Q29sbGFwc2UgaW49e29wZW4xfSB0aW1lb3V0PVwiYXV0b1wiIHVubW91bnRPbkV4aXQ+XHJcbiAgICAgICAgICA8TGlzdCBjb21wb25lbnQ9XCJkaXZcIiBkaXNhYmxlUGFkZGluZz5cclxuICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMubmVzdGVkfT5cclxuICAgICAgICAgICAgICA8QXJyb3dSaWdodEljb24gZm9udFNpemU9XCJzbWFsbFwiIGNvbG9yPVwiZGlzYWJsZWRcIiAvPlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtVGV4dH0+XHJcbiAgICAgICAgICAgICAgICBTWVMwMDUgLSBDw7RuZyB0eSAvIENoaSBuaMOhbmhcclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLm5lc3RlZH0+XHJcbiAgICAgICAgICAgICAgPEFycm93UmlnaHRJY29uIGZvbnRTaXplPVwic21hbGxcIiBjb2xvcj1cImRpc2FibGVkXCIgLz5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbVRleHR9PlxyXG4gICAgICAgICAgICAgICAgU1lTMDA2IC0gUGjDsm5nIGJhblxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMubmVzdGVkfT5cclxuICAgICAgICAgICAgICA8QXJyb3dSaWdodEljb24gZm9udFNpemU9XCJzbWFsbFwiIGNvbG9yPVwiZGlzYWJsZWRcIiAvPlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtVGV4dH0+XHJcbiAgICAgICAgICAgICAgICBTWVM1MDYgLSBOZ8OibiBow6BuZ1xyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMubmVzdGVkfT5cclxuICAgICAgICAgICAgICA8QXJyb3dSaWdodEljb24gZm9udFNpemU9XCJzbWFsbFwiIGNvbG9yPVwiZGlzYWJsZWRcIiAvPlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtVGV4dH0+XHJcbiAgICAgICAgICAgICAgICBTWVMwMjIgLSBNw6F5IGNo4bunXHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5uZXN0ZWR9PlxyXG4gICAgICAgICAgICAgIDxBcnJvd1JpZ2h0SWNvbiBmb250U2l6ZT1cInNtYWxsXCIgY29sb3I9XCJkaXNhYmxlZFwiIC8+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW1UZXh0fT5cclxuICAgICAgICAgICAgICAgIFNZUzUwOSAtIFF1eSDEkeG7j2kgxJHGoW4gduG7iyB0aeG7gW4gdOG7h1xyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMubmVzdGVkfT5cclxuICAgICAgICAgICAgICA8QXJyb3dSaWdodEljb24gZm9udFNpemU9XCJzbWFsbFwiIGNvbG9yPVwiZGlzYWJsZWRcIiAvPlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtVGV4dH0+XHJcbiAgICAgICAgICAgICAgICBTWVM1MjAgLSBOZ8OgeSBuZ2jhu4kgY+G7p2EgY8O0bmcgdHlcclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgPC9Db2xsYXBzZT5cclxuICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKDIpfT5cclxuICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIlBow6JuIHF1eeG7gW4gbmjDom4gdmnDqm5cIiAvPlxyXG4gICAgICAgICAge29wZW4yID8gKFxyXG4gICAgICAgICAgICA8RXhwYW5kTGVzcyBmb250U2l6ZT1cInNtYWxsXCIgY29sb3I9XCJkaXNhYmxlZFwiIC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxFeHBhbmRNb3JlIGZvbnRTaXplPVwic21hbGxcIiBjb2xvcj1cImRpc2FibGVkXCIgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgIDxDb2xsYXBzZSBpbj17b3BlbjJ9IHRpbWVvdXQ9XCJhdXRvXCIgdW5tb3VudE9uRXhpdD5cclxuICAgICAgICAgIDxMaXN0IGNvbXBvbmVudD1cImRpdlwiIGRpc2FibGVQYWRkaW5nPlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5uZXN0ZWR9PlxyXG4gICAgICAgICAgICAgIDxBcnJvd1JpZ2h0SWNvbiBmb250U2l6ZT1cInNtYWxsXCIgY29sb3I9XCJkaXNhYmxlZFwiIC8+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW1UZXh0fT5cclxuICAgICAgICAgICAgICAgIFNZUzAxMCAtIFF14bqjbiBsw70gbmjDom4gdmnDqm5cclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLm5lc3RlZH0+XHJcbiAgICAgICAgICAgICAgPEFycm93UmlnaHRJY29uIGZvbnRTaXplPVwic21hbGxcIiBjb2xvcj1cImRpc2FibGVkXCIgLz5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbVRleHR9PlxyXG4gICAgICAgICAgICAgICAgU1lTMDA5IC0gTOG7m3AgbmfGsOG7nWkgZMO5bmdcclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLm5lc3RlZH0+XHJcbiAgICAgICAgICAgICAgPEFycm93UmlnaHRJY29uIGZvbnRTaXplPVwic21hbGxcIiBjb2xvcj1cImRpc2FibGVkXCIgLz5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbVRleHR9PlxyXG4gICAgICAgICAgICAgICAgU1lTMDA4IC0gVGhp4bq/dCBs4bqtcCBuaMOibiB2acOqbiB2w6BvIGzhu5twIG5nxrDhu51pIGTDuW5nXHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgIDwvQ29sbGFwc2U+XHJcbiAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljaygzKX0+XHJcbiAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJQaMOibiBxdXnhu4FuIGThu68gbGnhu4d1XCIgLz5cclxuICAgICAgICAgIHtvcGVuMyA/IChcclxuICAgICAgICAgICAgPEV4cGFuZExlc3MgZm9udFNpemU9XCJzbWFsbFwiIGNvbG9yPVwiZGlzYWJsZWRcIiAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8RXhwYW5kTW9yZSBmb250U2l6ZT1cInNtYWxsXCIgY29sb3I9XCJkaXNhYmxlZFwiIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICA8Q29sbGFwc2UgaW49e29wZW4zfSB0aW1lb3V0PVwiYXV0b1wiIHVubW91bnRPbkV4aXQ+XHJcbiAgICAgICAgICA8TGlzdCBjb21wb25lbnQ9XCJkaXZcIiBkaXNhYmxlUGFkZGluZz5cclxuICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMubmVzdGVkfT5cclxuICAgICAgICAgICAgICA8QXJyb3dSaWdodEljb24gZm9udFNpemU9XCJzbWFsbFwiIGNvbG9yPVwiZGlzYWJsZWRcIiAvPlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtVGV4dH0+XHJcbiAgICAgICAgICAgICAgICBTWVM1MDQgLSBDaOG7iSDEkeG7i25oIG5ow6JuIHZpw6puIHbDoG8gcGjDsm5nIGJhblxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMubmVzdGVkfT5cclxuICAgICAgICAgICAgICA8QXJyb3dSaWdodEljb24gZm9udFNpemU9XCJzbWFsbFwiIGNvbG9yPVwiZGlzYWJsZWRcIiAvPlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtVGV4dH0+XHJcbiAgICAgICAgICAgICAgICBTWVM1MDMgLSBYZW0ga+G6v3QgY+G6pXUgY+G7p2EgZG9hbmggbmdoaeG7h3BcclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgPC9Db2xsYXBzZT5cclxuICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKDQpfT5cclxuICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIlRoaeG6v3QgbOG6rXAgbcOjIGjhu4cgdGjhu5FuZ1wiIC8+XHJcbiAgICAgICAgICB7b3BlbjQgPyAoXHJcbiAgICAgICAgICAgIDxFeHBhbmRMZXNzIGZvbnRTaXplPVwic21hbGxcIiBjb2xvcj1cImRpc2FibGVkXCIgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPEV4cGFuZE1vcmUgZm9udFNpemU9XCJzbWFsbFwiIGNvbG9yPVwiZGlzYWJsZWRcIiAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgPENvbGxhcHNlIGluPXtvcGVuNH0gdGltZW91dD1cImF1dG9cIiB1bm1vdW50T25FeGl0PlxyXG4gICAgICAgICAgPExpc3QgY29tcG9uZW50PVwiZGl2XCIgZGlzYWJsZVBhZGRpbmc+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLm5lc3RlZH0+XHJcbiAgICAgICAgICAgICAgPEFycm93UmlnaHRJY29uIGZvbnRTaXplPVwic21hbGxcIiBjb2xvcj1cImRpc2FibGVkXCIgLz5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbVRleHR9PlxyXG4gICAgICAgICAgICAgICAgU1lTMzAyIC0gTcOjIGjhu4cgdGjhu5FuZyBjaMOtbmhcclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLm5lc3RlZH0+XHJcbiAgICAgICAgICAgICAgPEFycm93UmlnaHRJY29uIGZvbnRTaXplPVwic21hbGxcIiBjb2xvcj1cImRpc2FibGVkXCIgLz5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbVRleHR9PlxyXG4gICAgICAgICAgICAgICAgU1lTNTAxIC0gVOG6oW8gbcOjIGNo4bq3blxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMubmVzdGVkfT5cclxuICAgICAgICAgICAgICA8QXJyb3dSaWdodEljb24gZm9udFNpemU9XCJzbWFsbFwiIGNvbG9yPVwiZGlzYWJsZWRcIiAvPlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtVGV4dH0+XHJcbiAgICAgICAgICAgICAgICBTWVM2MDEgLSBU4bqhbyBtw6MgcGjDrVxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMubmVzdGVkfT5cclxuICAgICAgICAgICAgICA8QXJyb3dSaWdodEljb24gZm9udFNpemU9XCJzbWFsbFwiIGNvbG9yPVwiZGlzYWJsZWRcIiAvPlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtVGV4dH0+XHJcbiAgICAgICAgICAgICAgICBTWVM2MDIgLSBO4buZaSBkdW5nIHBow61cclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLm5lc3RlZH0+XHJcbiAgICAgICAgICAgICAgPEFycm93UmlnaHRJY29uIGZvbnRTaXplPVwic21hbGxcIiBjb2xvcj1cImRpc2FibGVkXCIgLz5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbVRleHR9PlxyXG4gICAgICAgICAgICAgICAgU1lTNTAyIC0gVGhp4bq/dCBs4bqtcCBs4bubcCBuZ8aw4budaSBkw7luZyDEkWMgeMOzYSBzdG9wXHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgIDwvQ29sbGFwc2U+XHJcbiAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayg1KX0+XHJcbiAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJUaeG7h24gw61jaFwiIC8+XHJcbiAgICAgICAgICB7b3BlbjUgPyAoXHJcbiAgICAgICAgICAgIDxFeHBhbmRMZXNzIGZvbnRTaXplPVwic21hbGxcIiBjb2xvcj1cImRpc2FibGVkXCIgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPEV4cGFuZE1vcmUgZm9udFNpemU9XCJzbWFsbFwiIGNvbG9yPVwiZGlzYWJsZWRcIiAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgPENvbGxhcHNlIGluPXtvcGVuNX0gdGltZW91dD1cImF1dG9cIiB1bm1vdW50T25FeGl0PlxyXG4gICAgICAgICAgPExpc3QgY29tcG9uZW50PVwiZGl2XCIgZGlzYWJsZVBhZGRpbmc+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLm5lc3RlZH0+XHJcbiAgICAgICAgICAgICAgPEFycm93UmlnaHRJY29uIGZvbnRTaXplPVwic21hbGxcIiBjb2xvcj1cImRpc2FibGVkXCIgLz5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbVRleHR9PlxyXG4gICAgICAgICAgICAgICAgU1lTNjAwIC0gROG7i2NoIG5nw7RuIG5n4buvXHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5uZXN0ZWR9PlxyXG4gICAgICAgICAgICAgIDxBcnJvd1JpZ2h0SWNvbiBmb250U2l6ZT1cInNtYWxsXCIgY29sb3I9XCJkaXNhYmxlZFwiIC8+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW1UZXh0fT5cclxuICAgICAgICAgICAgICAgIFNZUzcwMyAtIFThuqFvIFRow6BuaCBwaOG7kVxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMubmVzdGVkfT5cclxuICAgICAgICAgICAgICA8QXJyb3dSaWdodEljb24gZm9udFNpemU9XCJzbWFsbFwiIGNvbG9yPVwiZGlzYWJsZWRcIiAvPlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtVGV4dH0+XHJcbiAgICAgICAgICAgICAgICBTWVM3MDQgLSBU4bqhbyBRdeG6rW4sIEh1eeG7h25cclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLm5lc3RlZH0+XHJcbiAgICAgICAgICAgICAgPEFycm93UmlnaHRJY29uIGZvbnRTaXplPVwic21hbGxcIiBjb2xvcj1cImRpc2FibGVkXCIgLz5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbVRleHR9PlxyXG4gICAgICAgICAgICAgICAgU1lTNzA1IC0gVOG6oW8gUGjGsOG7nW5nLCBYw6NcclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLm5lc3RlZH0+XHJcbiAgICAgICAgICAgICAgPEFycm93UmlnaHRJY29uIGZvbnRTaXplPVwic21hbGxcIiBjb2xvcj1cImRpc2FibGVkXCIgLz5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbVRleHR9PlxyXG4gICAgICAgICAgICAgICAgU1lTMDI1IC0gS2nhu4NtIHRyYSBob+G6oXQgxJHhu5luZ1xyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMubmVzdGVkfT5cclxuICAgICAgICAgICAgICA8QXJyb3dSaWdodEljb24gZm9udFNpemU9XCJzbWFsbFwiIGNvbG9yPVwiZGlzYWJsZWRcIiAvPlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtVGV4dH0+XHJcbiAgICAgICAgICAgICAgICBTWVMwMjAgLSBUaGnhur90IGzhuq1wIGhv4bqhdCDEkeG7mW5nIG5nxrDhu51pIGTDuW5nXHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5uZXN0ZWR9PlxyXG4gICAgICAgICAgICAgIDxBcnJvd1JpZ2h0SWNvbiBmb250U2l6ZT1cInNtYWxsXCIgY29sb3I9XCJkaXNhYmxlZFwiIC8+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW1UZXh0fT5cclxuICAgICAgICAgICAgICAgIFNZUzAxMiAtIFRoYXkgxJHhu5VpIG3huq10IGto4bqpdVxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMubmVzdGVkfT5cclxuICAgICAgICAgICAgICA8QXJyb3dSaWdodEljb24gZm9udFNpemU9XCJzbWFsbFwiIGNvbG9yPVwiZGlzYWJsZWRcIiAvPlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtVGV4dH0+XHJcbiAgICAgICAgICAgICAgICBTWVMxNTAgLSBMb2NhdGlvbiBzZXR0aW5nXHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgIDwvQ29sbGFwc2U+XHJcbiAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayg2KX0+XHJcbiAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJUaMO0bmcgdGluIGjhu4cgdGjhu5FuZ1wiIC8+XHJcbiAgICAgICAgICB7b3BlbjYgPyAoXHJcbiAgICAgICAgICAgIDxFeHBhbmRMZXNzIGZvbnRTaXplPVwic21hbGxcIiBjb2xvcj1cImRpc2FibGVkXCIgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPEV4cGFuZE1vcmUgZm9udFNpemU9XCJzbWFsbFwiIGNvbG9yPVwiZGlzYWJsZWRcIiAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgPENvbGxhcHNlIGluPXtvcGVuNn0gdGltZW91dD1cImF1dG9cIiB1bm1vdW50T25FeGl0PlxyXG4gICAgICAgICAgPExpc3QgY29tcG9uZW50PVwiZGl2XCIgZGlzYWJsZVBhZGRpbmc+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLm5lc3RlZH0+XHJcbiAgICAgICAgICAgICAgPEFycm93UmlnaHRJY29uIGZvbnRTaXplPVwic21hbGxcIiBjb2xvcj1cImRpc2FibGVkXCIgLz5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbVRleHR9PlxyXG4gICAgICAgICAgICAgICAgU1lTODExIC0gR2hpIGNow7ogcGjDoXQgaMOgbmggdMOtbmggbsSDbmcgbeG7m2lcclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLm5lc3RlZH0+XHJcbiAgICAgICAgICAgICAgPEFycm93UmlnaHRJY29uIGZvbnRTaXplPVwic21hbGxcIiBjb2xvcj1cImRpc2FibGVkXCIgLz5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbVRleHR9PlxyXG4gICAgICAgICAgICAgICAgU1lTODEyIC0gUXV5IHRyw6xuaCBjw7RuZyB0eVxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMubmVzdGVkfT5cclxuICAgICAgICAgICAgICA8QXJyb3dSaWdodEljb24gZm9udFNpemU9XCJzbWFsbFwiIGNvbG9yPVwiZGlzYWJsZWRcIiAvPlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtVGV4dH0+XHJcbiAgICAgICAgICAgICAgICAtTGljZW5zZSBJbmZvcm1hdGlvblxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMubmVzdGVkfT5cclxuICAgICAgICAgICAgICA8QXJyb3dSaWdodEljb24gZm9udFNpemU9XCJzbWFsbFwiIGNvbG9yPVwiZGlzYWJsZWRcIiAvPlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtVGV4dH0+XHJcbiAgICAgICAgICAgICAgICBTWVM4ODggLSBTeXN0ZW0gSW50ZXJncml0eSBNYW5hZ2VtZW50XHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgIDwvQ29sbGFwc2U+XHJcbiAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayg3KX0+XHJcbiAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJD4bqtcCBuaOG6rXQgbeG7m2lcIiAvPlxyXG4gICAgICAgICAgPENhY2hlZEljb24gc3R5bGU9e3sgY29sb3I6ICcjNEVFRkEyJyB9fSAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgIDwvTGlzdD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFF1YW5UcmlIZVRob25nO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSWNvbkJ1dHRvbiwgQmFkZ2UsIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvc3R5bGVzXCI7XHJcbmltcG9ydCBRdWFuVHJpSGVUaG9uZyBmcm9tIFwiLi9RdWFuVHJpSGVUaG9uZy9RdWFuVHJpSGVUaG9uZ1wiO1xyXG4vLyBpbXBvcnQgUXVhblRyaUhlVGhvbmcgZnJvbSBcIi4vUXVhblRyaUhlVGhvbmcvUXVhblRyaUhlVGhvbmdcIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gIHJvb3Q6IHt9LFxyXG4gIHRpdGxlOiB7XHJcbiAgICBmb250RmFtaWx5OiBcIlF1aWNrc2FuZFwiLFxyXG4gICAgZm9udFNpemU6IFwiMTZweFwiLFxyXG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gICAgY29sb3I6IFwiIzJGQUFGQ1wiLFxyXG4gICAgcGFkZGluZ0xlZnQ6IFwiNnB4XCIsXHJcbiAgfSxcclxufSk7XHJcblxyXG5mdW5jdGlvbiBTaWRlQmFyKHByb3BzKSB7XHJcbiAgY29uc3QgW2tleSwgc2V0S2V5XSA9IHVzZVN0YXRlKDEpO1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcC0wXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGgtZnVsbCBiZy13aGl0ZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTIgZC1mbGV4IGp1c3RpZnktY29udGVudC1zdGFydCBhbGlnbi1pdGVtcy1zdGFydCBwci0wXCI+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtZnVsbCBkLWZsZXggZmxleC1jb2x1bW4ganVzdGlmeS1jb250ZW50LXN0YXJ0IGFsaWduLWl0ZW1zLWNlbnRlciBwdC0yIFwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMyRkFBRkNcIixcclxuICAgICAgICAgICAgICB3aWR0aDogXCI1MnB4XCIsXHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMHZoXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9XCJzaG93XCIgY29sb3I9XCJwcmltYXJ5XCIgc3R5bGU9e3sgd2lkdGg6IFwiNTJweFwiLCBoZWlnaHQ6IFwiNTJweFwiIH19IG9uQ2xpY2s9eygpID0+IHNldEtleSgxKX0+XHJcbiAgICAgICAgICAgICAgPEJhZGdlIGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2ljb24vaWNvbjEucG5nXCIgLz5cclxuICAgICAgICAgICAgICA8L0JhZGdlPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9XCJzaG93XCIgY29sb3I9XCJwcmltYXJ5XCIgc3R5bGU9e3sgd2lkdGg6IFwiNTJweFwiLCBoZWlnaHQ6IFwiNTJweFwiIH19IG9uQ2xpY2s9eygpID0+IHNldEtleSgyKX0+XHJcbiAgICAgICAgICAgICAgPEJhZGdlIGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2ljb24vaWNvbjIucG5nXCIgLz5cclxuICAgICAgICAgICAgICA8L0JhZGdlPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9XCJzaG93XCIgY29sb3I9XCJwcmltYXJ5XCIgc3R5bGU9e3sgd2lkdGg6IFwiNTJweFwiLCBoZWlnaHQ6IFwiNTJweFwiIH19IG9uQ2xpY2s9eygpID0+IHNldEtleSgzKX0+XHJcbiAgICAgICAgICAgICAgPEJhZGdlIGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2ljb24vaWNvbjMucG5nXCIgLz5cclxuICAgICAgICAgICAgICA8L0JhZGdlPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9XCJzaG93XCIgY29sb3I9XCJwcmltYXJ5XCIgc3R5bGU9e3sgd2lkdGg6IFwiNTJweFwiLCBoZWlnaHQ6IFwiNTJweFwiIH19IG9uQ2xpY2s9eygpID0+IHNldEtleSg0KX0+XHJcbiAgICAgICAgICAgICAgPEJhZGdlIGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2ljb24vaWNvbjQucG5nXCIgLz5cclxuICAgICAgICAgICAgICA8L0JhZGdlPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9XCJzaG93XCIgY29sb3I9XCJwcmltYXJ5XCIgc3R5bGU9e3sgd2lkdGg6IFwiNTJweFwiLCBoZWlnaHQ6IFwiNTJweFwiIH19IG9uQ2xpY2s9eygpID0+IHNldEtleSg1KX0+XHJcbiAgICAgICAgICAgICAgPEJhZGdlIGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2ljb24vaWNvbjUucG5nXCIgLz5cclxuICAgICAgICAgICAgICA8L0JhZGdlPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9XCJzaG93XCIgY29sb3I9XCJwcmltYXJ5XCIgc3R5bGU9e3sgd2lkdGg6IFwiNTJweFwiLCBoZWlnaHQ6IFwiNTJweFwiIH19IG9uQ2xpY2s9eygpID0+IHNldEtleSg2KX0+XHJcbiAgICAgICAgICAgICAgPEJhZGdlIGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2ljb24vaWNvbjYucG5nXCIgLz5cclxuICAgICAgICAgICAgICA8L0JhZGdlPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9XCJzaG93XCIgY29sb3I9XCJwcmltYXJ5XCIgc3R5bGU9e3sgd2lkdGg6IFwiNTJweFwiLCBoZWlnaHQ6IFwiNTJweFwiIH19IG9uQ2xpY2s9eygpID0+IHNldEtleSg3KX0+XHJcbiAgICAgICAgICAgICAgPEJhZGdlIGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2ljb24vaWNvbjcucG5nXCIgLz5cclxuICAgICAgICAgICAgICA8L0JhZGdlPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9XCJzaG93XCIgY29sb3I9XCJwcmltYXJ5XCIgc3R5bGU9e3sgd2lkdGg6IFwiNTJweFwiLCBoZWlnaHQ6IFwiNTJweFwiIH19IG9uQ2xpY2s9eygpID0+IHNldEtleSg4KX0+XHJcbiAgICAgICAgICAgICAgPEJhZGdlIGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2ljb24vaWNvbjgucG5nXCIgLz5cclxuICAgICAgICAgICAgICA8L0JhZGdlPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9XCJzaG93XCIgY29sb3I9XCJwcmltYXJ5XCIgc3R5bGU9e3sgd2lkdGg6IFwiNTJweFwiLCBoZWlnaHQ6IFwiNTJweFwiIH19IG9uQ2xpY2s9eygpID0+IHNldEtleSg5KX0+XHJcbiAgICAgICAgICAgICAgPEJhZGdlIGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2ljb24vaWNvbjkucG5nXCIgLz5cclxuICAgICAgICAgICAgICA8L0JhZGdlPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9XCJzaG93XCIgY29sb3I9XCJwcmltYXJ5XCIgc3R5bGU9e3sgd2lkdGg6IFwiNTJweFwiLCBoZWlnaHQ6IFwiNTJweFwiIH19IG9uQ2xpY2s9eygpID0+IHNldEtleSgxMCl9PlxyXG4gICAgICAgICAgICAgIDxCYWRnZSBjb2xvcj1cInByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9pY29uL2ljb24xMC5wbmdcIiAvPlxyXG4gICAgICAgICAgICAgIDwvQmFkZ2U+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gYXJpYS1sYWJlbD1cInNob3dcIiBjb2xvcj1cInByaW1hcnlcIiBzdHlsZT17eyB3aWR0aDogXCI1MnB4XCIsIGhlaWdodDogXCI1MnB4XCIgfX0gb25DbGljaz17KCkgPT4gc2V0S2V5KDExKX0+XHJcbiAgICAgICAgICAgICAgPEJhZGdlIGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2ljb24vaWNvbjExLnBuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgPC9CYWRnZT5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwic2hvd1wiIGNvbG9yPVwicHJpbWFyeVwiIHN0eWxlPXt7IHdpZHRoOiBcIjUycHhcIiwgaGVpZ2h0OiBcIjUycHhcIiB9fSBvbkNsaWNrPXsoKSA9PiBzZXRLZXkoMTIpfT5cclxuICAgICAgICAgICAgICA8QmFkZ2UgY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvaWNvbi9pY29uMTIucG5nXCIgLz5cclxuICAgICAgICAgICAgICA8L0JhZGdlPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9XCJzaG93XCIgY29sb3I9XCJwcmltYXJ5XCIgc3R5bGU9e3sgd2lkdGg6IFwiNTJweFwiLCBoZWlnaHQ6IFwiNTJweFwiIH19IG9uQ2xpY2s9eygpID0+IHNldEtleSgxMyl9PlxyXG4gICAgICAgICAgICAgIDxCYWRnZSBjb2xvcj1cInByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9pY29uL2ljb24xMy5wbmdcIiAvPlxyXG4gICAgICAgICAgICAgIDwvQmFkZ2U+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuXHJcblxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTAgcHItMFwiPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5cclxuICAgICAgICAgICAge2tleSA9PT0gMSAmJiBcIlFV4bqiTiBUUuG7iiBI4buGIFRI4buQTkdcIn1cclxuICAgICAgICAgICAge2tleSA9PT0gMiAmJiBcIkLDoW4gbOG6uyBQT1NcIn1cclxuICAgICAgICAgICAge2tleSA9PT0gMyAmJiBcIkPDtG5nIHZp4buHY1wifVxyXG4gICAgICAgICAgICB7a2V5ID09PSA0ICYmIFwiQsOhbyBjw6FvXCJ9XHJcbiAgICAgICAgICAgIHtrZXkgPT09IDUgJiYgXCJOaMOibiBz4buxXCJ9XHJcbiAgICAgICAgICAgIHtrZXkgPT09IDYgJiYgXCJL4bq/IHRvw6FuXCJ9XHJcbiAgICAgICAgICAgIHtrZXkgPT09IDcgJiYgXCJLaMOhY2ggaMOgbmcgJiBiw6FuIGjDoG5nXCJ9XHJcbiAgICAgICAgICAgIHtrZXkgPT09IDggJiYgXCJT4bqjbiBwaOG6qW1cIn1cclxuICAgICAgICAgICAge2tleSA9PT0gOSAmJiBcIkLDoW8gZ2nDoVwifVxyXG4gICAgICAgICAgICB7a2V5ID09PSAxMCAmJiBcIlF14bqjbiBsw70ga2hvXCJ9XHJcbiAgICAgICAgICAgIHtrZXkgPT09IDExICYmIFwiVGh1IG11YVwifVxyXG4gICAgICAgICAgICB7a2V5ID09PSAxMiAmJiBcIkRhc2hib2FyZFwifVxyXG4gICAgICAgICAgICB7a2V5ID09PSAxMyAmJiBcIkltcG9ydC9FeHBvcnRcIn1cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxRdWFuVHJpSGVUaG9uZyAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGVCYXI7XHJcbiIsImltcG9ydCB7IEJhZGdlLCBJbnB1dEJhc2UsIE1lbnUsIE1lbnVJdGVtIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBBcHBCYXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0FwcEJhclwiO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiO1xyXG5pbXBvcnQgeyBmYWRlLCBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgVG9vbGJhciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhclwiO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiO1xyXG5pbXBvcnQgeyBBY2NvdW50Q2lyY2xlIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29uc1wiO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uc0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL05vdGlmaWNhdGlvbnMnO1xyXG5pbXBvcnQgU2V0dGluZ3NJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TZXR0aW5ncyc7XHJcbmltcG9ydCBNZW51SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudSc7XHJcbmltcG9ydCBUcmVuZGluZ1VwSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvVHJlbmRpbmdVcCc7XHJcbmltcG9ydCBTZWFyY2hJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TZWFyY2gnO1xyXG5pbXBvcnQgSGVscEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0hlbHAnO1xyXG5pbXBvcnQgTW9yZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01vcmUnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBmbGV4R3JvdzogMSxcclxuICB9LFxyXG4gIGNvbXBhbnlUaXRsZToge1xyXG4gICAgY29sb3I6ICcjMTAxMDEwJyxcclxuICAgIGZvbnRTaXplOiBcIjE2cHhcIixcclxuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICB9LFxyXG4gIG1lbnVCdXR0b246IHtcclxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gIH0sXHJcbiAgdGl0bGU6IHtcclxuICAgIGNvbG9yOiAnIzEwMTAxMCcsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJ1xyXG4gIH0sXHJcbiAgZ3Jvdzoge1xyXG4gICAgZmxleEdyb3c6IDEsXHJcbiAgfSxcclxuICBzZWFyY2g6IHtcclxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICBib3JkZXJSYWRpdXM6IFwiMTZweFwiLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiBmYWRlKHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLCAwLjE1KSxcclxuICAgIFwiJjpob3ZlclwiOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogZmFkZSh0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSwgMC4yNSksXHJcbiAgICB9LFxyXG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICBtYXJnaW5MZWZ0OiAwLFxyXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwic21cIildOiB7XHJcbiAgICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMyksXHJcbiAgICAgIHdpZHRoOiBcImF1dG9cIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBzZWFyY2hJY29uOiB7XHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDAsIDIpLFxyXG4gICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICBwb2ludGVyRXZlbnRzOiBcIm5vbmVcIixcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gIH0sXHJcbiAgaW5wdXRSb290OiB7XHJcbiAgICBjb2xvcjogJyMxMDEwMTAnLFxyXG4gIH0sXHJcbiAgaW5wdXRJbnB1dDoge1xyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygxLCAxLCAxLCAwKSxcclxuICAgIC8vIHZlcnRpY2FsIHBhZGRpbmcgKyBmb250IHNpemUgZnJvbSBzZWFyY2hJY29uXHJcbiAgICBwYWRkaW5nTGVmdDogYGNhbGMoMWVtICsgJHt0aGVtZS5zcGFjaW5nKDQpfXB4KWAsXHJcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoXCJ3aWR0aFwiKSxcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcIm1kXCIpXToge1xyXG4gICAgICB3aWR0aDogXCIyMGNoXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc2VjdGlvbkRlc2t0b3A6IHtcclxuICAgIGRpc3BsYXk6IFwibm9uZVwiLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwibWRcIildOiB7XHJcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHNlY3Rpb25Nb2JpbGU6IHtcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwibWRcIildOiB7XHJcbiAgICAgIGRpc3BsYXk6IFwibm9uZVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGFjY05hbWU6IHtcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICB9LFxyXG59KSk7XHJcblxyXG5mdW5jdGlvbiBUb3BOYXYocHJvcHMpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgY29uc3QgW2FuY2hvckVsLCBzZXRBbmNob3JFbF0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbbW9iaWxlTW9yZUFuY2hvckVsLCBzZXRNb2JpbGVNb3JlQW5jaG9yRWxdID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIGNvbnN0IGlzTWVudU9wZW4gPSBCb29sZWFuKGFuY2hvckVsKTtcclxuICBjb25zdCBpc01vYmlsZU1lbnVPcGVuID0gQm9vbGVhbihtb2JpbGVNb3JlQW5jaG9yRWwpO1xyXG5cclxuICBjb25zdCBoYW5kbGVQcm9maWxlTWVudU9wZW4gPSAoZXZlbnQpID0+IHtcclxuICAgIHNldEFuY2hvckVsKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZU1vYmlsZU1lbnVDbG9zZSA9ICgpID0+IHtcclxuICAgIHNldE1vYmlsZU1vcmVBbmNob3JFbChudWxsKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVNZW51Q2xvc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRBbmNob3JFbChudWxsKTtcclxuICAgIGhhbmRsZU1vYmlsZU1lbnVDbG9zZSgpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZU1vYmlsZU1lbnVPcGVuID0gKGV2ZW50KSA9PiB7XHJcbiAgICBzZXRNb2JpbGVNb3JlQW5jaG9yRWwoZXZlbnQuY3VycmVudFRhcmdldCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbWVudUlkID0gXCJwcmltYXJ5LXNlYXJjaC1hY2NvdW50LW1lbnVcIjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmdyb3d9PlxyXG4gICAgICAgIDxBcHBCYXJcclxuICAgICAgICAgIHBvc2l0aW9uPVwic3RhdGljXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlXCJcclxuICAgICAgICAgIHN0eWxlPXt7IGJveFNoYWRvdzogXCJub25lXCIgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8VG9vbGJhcj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCJcXGltYWdlc1xcVlZsb2dvLnBuZ1wiIGNsYXNzTmFtZT1cInByLTVcIiAvPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgIGVkZ2U9XCJzdGFydFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1lbnVCdXR0b259XHJcbiAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwib3BlbiBkcmF3ZXJcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPE1lbnVJY29uIHN0eWxlPXt7IGNvbG9yOiAnI0RDRTBFMicsIGZvbnRTaXplOiAnNDAnIH19IC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbXBhbnlUaXRsZX0+Q8O0bmcgdHkgVlYgU29sdXRpb25zPC9zcGFuPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWFyY2h9IHN0eWxlPXt7IGJhY2tncm91bmQ6IFwiI0Y3RjdGN1wiIH19PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlYXJjaEljb259PlxyXG4gICAgICAgICAgICAgICAgPFNlYXJjaEljb24gc3R5bGU9e3sgY29sb3I6ICcjMkZBQUZDJyB9fSAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxJbnB1dEJhc2VcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNo4oCmXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzZXM9e3tcclxuICAgICAgICAgICAgICAgICAgcm9vdDogY2xhc3Nlcy5pbnB1dFJvb3QsXHJcbiAgICAgICAgICAgICAgICAgIGlucHV0OiBjbGFzc2VzLmlucHV0SW5wdXQsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17eyBcImFyaWEtbGFiZWxcIjogXCJzZWFyY2hcIiB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ncm93fSAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWN0aW9uRGVza3RvcH0+XHJcbiAgICAgICAgICAgICAgPEljb25CdXR0b24gYXJpYS1sYWJlbD1cInNob3cgXCIgY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICA8QmFkZ2UgY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxTZXR0aW5nc0ljb24gc3R5bGU9e3sgY29sb3I6ICcjNUE1QTVBJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9CYWRnZT5cclxuICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgPEljb25CdXR0b24gYXJpYS1sYWJlbD1cInNob3cgXCIgY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICA8QmFkZ2UgY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxUcmVuZGluZ1VwSWNvbiBzdHlsZT17eyBjb2xvcjogJyM1QTVBNUEnIH19IC8+XHJcbiAgICAgICAgICAgICAgICA8L0JhZGdlPlxyXG4gICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwic2hvd1wiIGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgPEJhZGdlIGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICA8SGVscEljb24gc3R5bGU9e3sgY29sb3I6ICcjNUE1QTVBJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9CYWRnZT5cclxuICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX1cclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIlxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBI4buXIHRy4bujXHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG5cclxuICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cInNob3cgMTcgbmV3IG5vdGlmaWNhdGlvbnNcIlxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8QmFkZ2UgYmFkZ2VDb250ZW50PXsxN30gY29sb3I9XCJzZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgICAgPE5vdGlmaWNhdGlvbnNJY29uIHN0eWxlPXt7IGNvbG9yOiAnIzVBNUE1QScgfX0gLz5cclxuICAgICAgICAgICAgICAgIDwvQmFkZ2U+XHJcbiAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwic3VidGl0bGUxXCJcclxuICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQWNjb3VudCBOYW1lXHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICBlZGdlPVwiZW5kXCJcclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJhY2NvdW50IG9mIGN1cnJlbnQgdXNlclwiXHJcbiAgICAgICAgICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVQcm9maWxlTWVudU9wZW59XHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxBY2NvdW50Q2lyY2xlIHN0eWxlPXt7IGNvbG9yOiAnIzVBNUE1QScgfX0gLz5cclxuICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICA8L0FwcEJhcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb3BOYXY7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFNpZGVCYXIgZnJvbSBcIi4uL2NvbXBvbmVudC9zaWRlQmFyL3NpZGVCYXJcIjtcclxuaW1wb3J0IFRvcE5hdiBmcm9tIFwiLi4vY29tcG9uZW50L3RvcE5hdi90b3BuYXZcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5MYXlvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgaWQ9XCJhcHAtd3JhcHBlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RpY2t5LXRvcFwiPlxyXG4gICAgICAgICAgPFRvcE5hdiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0yXCI+PFNpZGVCYXIgLz48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEwXCI+dGV4dHt0aGlzLnByb3BzLmNoaWxkcmVufTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGF5b3V0RnVuY3Rpb25Db21wb25lbnQgZnJvbSBcIi4uL0B0eXBlcy9sYXlvdXRUeXBlcy9sYXlvdXRGdW5jdGlvbkNvbXBvbmVudFwiO1xyXG5pbXBvcnQgTWFpbkxheW91dCBmcm9tIFwiLi4vbGF5b3V0cy9tYWluTGF5b3V0XCI7XHJcblxyXG5jb25zdCBTaWduVXA6IExheW91dEZ1bmN0aW9uQ29tcG9uZW50ID0gcHJvcHMgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcblxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApXHJcbn1cclxuXHJcblNpZ25VcC5MYXlvdXQgPSBNYWluTGF5b3V0O1xyXG5leHBvcnQgZGVmYXVsdCBTaWduVXA7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0NvbGxhcHNlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93UmlnaHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0NhY2hlZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRXhwYW5kTGVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRXhwYW5kTW9yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvSGVscFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTm90aWZpY2F0aW9uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2VhcmNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9TZXR0aW5nc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvVHJlbmRpbmdVcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvc3R5bGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=
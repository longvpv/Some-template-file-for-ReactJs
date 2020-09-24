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

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "./component/sideBar/NhanSu/NhanSu.tsx":
/*!*********************************************!*\
  !*** ./component/sideBar/NhanSu/NhanSu.tsx ***!
  \*********************************************/
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
/* harmony import */ var _material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/ExpandLess */ "@material-ui/icons/ExpandLess");
/* harmony import */ var _material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "@material-ui/icons/ExpandMore");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "C:\\Long\\erp.webapp\\component\\sideBar\\NhanSu\\NhanSu.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;










const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    overflow: 'auto'
  },
  nested: {
    paddingLeft: theme.spacing(1)
  },
  titleText: {
    fontFamily: "Quicksand",
    fontSize: "14px" // fontWeight: "bold",

  },
  itemText: {
    fontFamily: "Quicksand",
    fontSize: "12px"
  }
}));

function NhanSu() {
  const classes = useStyles();
  const [open1, setOpen1] = react__WEBPACK_IMPORTED_MODULE_9___default.a.useState(false);
  const [open2, setOpen2] = react__WEBPACK_IMPORTED_MODULE_9___default.a.useState(false);
  const [open3, setOpen3] = react__WEBPACK_IMPORTED_MODULE_9___default.a.useState(false);
  const [open4, setOpen4] = react__WEBPACK_IMPORTED_MODULE_9___default.a.useState(false);
  const [open5, setOpen5] = react__WEBPACK_IMPORTED_MODULE_9___default.a.useState(false);

  const handleClick = number => {
    number === 1 && setOpen1(!open1);
    number === 2 && setOpen2(!open2);
    number === 3 && setOpen3(!open3);
    number === 4 && setOpen4(!open4);
    number === 5 && setOpen5(!open5);
  };

  return __jsx("div", {
    className: "w-100 overflow-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2___default.a, {
    component: "nav",
    "aria-labelledby": "nested-list-subheader",
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    onClick: () => handleClick(1),
    className: "d-flex justify-content-between",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.titleText,
    style: {
      fontWeight: open1 ? 'bold' : 'normal'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, "Qu\u1EA3n L\xFD Nh\xE2n Vi\xEAn"), open1 ? __jsx(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_6___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }) : __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_7___default.a, {
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
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
    href: "/QuanTriHeThong/PhanQuyenNhanVien/QuanLyNhanVien",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 15
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 17
    }
  }, "SYS010 - Qu\u1EA3n l\xFD nh\xE2n vi\xEAn"))), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 15
    }
  }, "HRM229 - H\u1EE3p \u0111\u1ED3ng nh\xE2n vi\xEAn")), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 15
    }
  }, "HRM406 - Ph\u1ECFng v\u1EA5n \u1EE9ng vi\xEAn")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
    href: "/QuanTriHeThong/ThietLapHeThong/MayChu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 15
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 17
    }
  }, "HRM405 - Th\xF4ng tin \u1EE9ng vi\xEAn"))), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 15
    }
  }, "HRM407 - Ngh\u1EC9 vi\u1EC7c")), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 15
    }
  }, "SYS015 - Giao d\u1ECBch ng\u01B0\u1EDDi d\xF9ng")), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 15
    }
  }, "HRM165 - Ki\u1EC3m to\xE1n")), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 15
    }
  }, "MIS050 - KPI nh\xE2n vi\xEAn")))), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    onClick: () => handleClick(2),
    className: "d-flex justify-content-between",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.titleText,
    style: {
      fontWeight: open2 ? 'bold' : 'normal'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 11
    }
  }, "Ch\u1EA5m C\xF4ng"), open2 ? __jsx(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_6___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 13
    }
  }) : __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_7___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 15
    }
  })), __jsx(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_1___default.a, {
    in: open2,
    timeout: "auto",
    unmountOnExit: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2___default.a, {
    component: "div",
    disablePadding: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 15
    }
  }, "HRM160 - Ch\u1EA5m c\xF4ng m\u1ED7i ng\xE0y")), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 15
    }
  }, "HRM206 - B\u1EA3ng c\xF4ng")), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 15
    }
  }, "HRM207 - Qu\u1EA3n l\xFD nh\xE2n vi\xEAn ngh\u1EC9 vi\u1EC7c")), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 15
    }
  }, "HRM401 - Qu\u1EA3n l\xFD ph\xE9p n\u0103m")))), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    onClick: () => handleClick(3),
    className: "d-flex justify-content-between",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.titleText,
    style: {
      fontWeight: open3 ? 'bold' : 'normal'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 11
    }
  }, "L\u01B0\u01A1ng"), open3 ? __jsx(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_6___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 13
    }
  }) : __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_7___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 15
    }
  })), __jsx(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_1___default.a, {
    in: open3,
    timeout: "auto",
    unmountOnExit: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2___default.a, {
    component: "div",
    disablePadding: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 15
    }
  }, "SYS504 - Ch\u1EC9 \u0111\u1ECBnh nh\xE2n vi\xEAn v\xE0o ph\xF2ng ban")), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 15
    }
  }, "SYS503 - Xem k\u1EBFt c\u1EA5u c\u1EE7a doanh nghi\u1EC7p")))), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    onClick: () => handleClick(4),
    className: "d-flex justify-content-between",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.titleText,
    style: {
      fontWeight: open4 ? 'bold' : 'normal'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 11
    }
  }, "Thi\u1EBFt l\u1EADp m\xE3 h\u1EC7 th\u1ED1ng"), open4 ? __jsx(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_6___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 13
    }
  }) : __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_7___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 15
    }
  })), __jsx(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_1___default.a, {
    in: open4,
    timeout: "auto",
    unmountOnExit: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2___default.a, {
    component: "div",
    disablePadding: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 15
    }
  }, "SYS302 - M\xE3 h\u1EC7 th\u1ED1ng ch\xEDnh")), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 15
    }
  }, "SYS501 - T\u1EA1o m\xE3 ch\u1EB7n")), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 15
    }
  }, "SYS601 - T\u1EA1o m\xE3 ph\xED")), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 15
    }
  }, "SYS602 - N\u1ED9i dung ph\xED")), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 15
    }
  }, "SYS502 - Thi\u1EBFt l\u1EADp l\u1EDBp ng\u01B0\u1EDDi d\xF9ng \u0111c x\xF3a stop")))), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    onClick: () => handleClick(5),
    className: "d-flex justify-content-between",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.titleText,
    style: {
      fontWeight: open5 ? 'bold' : 'normal'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 11
    }
  }, "H\u1ED7 tr\u1EE3"))));
}

/* harmony default export */ __webpack_exports__["default"] = (NhanSu);

/***/ }),

/***/ "./component/sideBar/SystemsManagement/SystemsManagement.tsx":
/*!*******************************************************************!*\
  !*** ./component/sideBar/SystemsManagement/SystemsManagement.tsx ***!
  \*******************************************************************/
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
/* harmony import */ var _material_ui_icons_Help__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Help */ "@material-ui/icons/Help");
/* harmony import */ var _material_ui_icons_Help__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Help__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
var _jsxFileName = "C:\\Long\\erp.webapp\\component\\sideBar\\SystemsManagement\\SystemsManagement.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement;












const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    overflow: 'auto'
  },
  nested: {
    paddingLeft: theme.spacing(1)
  },
  titleText: {
    fontFamily: "Quicksand",
    fontSize: "14px" // fontWeight: "bold",

  },
  itemText: {
    fontFamily: "Quicksand",
    fontSize: "12px"
  }
}));

function SystemsManagement() {
  const classes = useStyles();
  const [open1, setOpen1] = react__WEBPACK_IMPORTED_MODULE_11___default.a.useState(false);
  const [open2, setOpen2] = react__WEBPACK_IMPORTED_MODULE_11___default.a.useState(false);
  const [open3, setOpen3] = react__WEBPACK_IMPORTED_MODULE_11___default.a.useState(false);
  const [open4, setOpen4] = react__WEBPACK_IMPORTED_MODULE_11___default.a.useState(false);
  const [open5, setOpen5] = react__WEBPACK_IMPORTED_MODULE_11___default.a.useState(false);
  const [open6, setOpen6] = react__WEBPACK_IMPORTED_MODULE_11___default.a.useState(false);
  const [open7, setOpen7] = react__WEBPACK_IMPORTED_MODULE_11___default.a.useState(false);

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
      lineNumber: 53,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2___default.a, {
    component: "nav",
    "aria-labelledby": "nested-list-subheader",
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    onClick: () => handleClick(1),
    className: "d-flex justify-content-between",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.titleText,
    style: {
      fontWeight: open1 ? 'bold' : 'normal'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  }, "Thi\u1EBFt L\u1EADp H\u1EC7 Th\u1ED1ng"), open1 ? __jsx(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_7___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }) : __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_8___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 15
    }
  })), __jsx(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_1___default.a, {
    in: open1,
    timeout: "auto",
    unmountOnExit: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2___default.a, {
    component: "div",
    disablePadding: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
    href: "/SystemsManagement/SystemsControl/Company",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 15
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 17
    }
  }, "SYS005 - C\xF4ng ty / Chi nh\xE1nh"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
    href: "/SystemsManagement/SystemsControl/Department",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 15
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 17
    }
  }, "SYS006 - Ph\xF2ng ban"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
    href: "/SystemsManagement/SystemsControl/Bank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 15
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 17
    }
  }, "SYS506 - Ng\xE2n h\xE0ng"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
    href: "/SystemsManagement/SystemsControl/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 15
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 17
    }
  }, "SYS022 - M\xE1y ch\u1EE7"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
    href: "/SystemsManagement/SystemsControl/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 15
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 17
    }
  }, "SYS509 - Quy \u0111\u1ECFi \u0111\u01A1n v\u1ECB ti\u1EC1n t\u1EC7"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
    href: "/SystemsManagement/SystemsControl/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 15
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 17
    }
  }, "SYS520 - Ng\xE0y ngh\u1EC9 c\u1EE7a c\xF4ng ty"))))), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    onClick: () => handleClick(2),
    className: "d-flex justify-content-between",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.titleText,
    style: {
      fontWeight: open2 ? 'bold' : 'normal'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 11
    }
  }, "Ph\xE2n quy\u1EC1n nh\xE2n vi\xEAn"), open2 ? __jsx(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_7___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 13
    }
  }) : __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_8___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 15
    }
  })), __jsx(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_1___default.a, {
    in: open2,
    timeout: "auto",
    unmountOnExit: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2___default.a, {
    component: "div",
    disablePadding: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
    href: "/SystemsManagement/Staff/StaffManagement",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 15
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 17
    }
  }, "SYS010 - Qu\u1EA3n l\xFD nh\xE2n vi\xEAn"))), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 15
    }
  }, "SYS009 - L\u1EDBp ng\u01B0\u1EDDi d\xF9ng")), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 15
    }
  }, "SYS008 - Thi\u1EBFt l\u1EADp nh\xE2n vi\xEAn v\xE0o l\u1EDBp ng\u01B0\u1EDDi d\xF9ng")))), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    onClick: () => handleClick(3),
    className: "d-flex justify-content-between",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.titleText,
    style: {
      fontWeight: open3 ? 'bold' : 'normal'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 11
    }
  }, "Ph\xE2n quy\u1EC1n d\u1EEF li\u1EC7u"), open3 ? __jsx(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_7___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 13
    }
  }) : __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_8___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 15
    }
  })), __jsx(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_1___default.a, {
    in: open3,
    timeout: "auto",
    unmountOnExit: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2___default.a, {
    component: "div",
    disablePadding: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 15
    }
  }, "SYS504 - Ch\u1EC9 \u0111\u1ECBnh nh\xE2n vi\xEAn v\xE0o ph\xF2ng ban")), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 15
    }
  }, "SYS503 - Xem k\u1EBFt c\u1EA5u c\u1EE7a doanh nghi\u1EC7p")))), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    onClick: () => handleClick(4),
    className: "d-flex justify-content-between",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.titleText,
    style: {
      fontWeight: open4 ? 'bold' : 'normal'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 11
    }
  }, "Thi\u1EBFt l\u1EADp m\xE3 h\u1EC7 th\u1ED1ng"), open4 ? __jsx(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_7___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 13
    }
  }) : __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_8___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 15
    }
  })), __jsx(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_1___default.a, {
    in: open4,
    timeout: "auto",
    unmountOnExit: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2___default.a, {
    component: "div",
    disablePadding: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 15
    }
  }, "SYS302 - M\xE3 h\u1EC7 th\u1ED1ng ch\xEDnh")), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 15
    }
  }, "SYS501 - T\u1EA1o m\xE3 ch\u1EB7n")), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 15
    }
  }, "SYS601 - T\u1EA1o m\xE3 ph\xED")), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 15
    }
  }, "SYS602 - N\u1ED9i dung ph\xED")), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 15
    }
  }, "SYS502 - Thi\u1EBFt l\u1EADp l\u1EDBp ng\u01B0\u1EDDi d\xF9ng \u0111c x\xF3a stop")))), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    onClick: () => handleClick(5),
    className: "d-flex justify-content-between",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.titleText,
    style: {
      fontWeight: open5 ? 'bold' : 'normal'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 11
    }
  }, "Ti\u1EC7n \xEDch"), open5 ? __jsx(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_7___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 13
    }
  }) : __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_8___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 15
    }
  })), __jsx(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_1___default.a, {
    in: open5,
    timeout: "auto",
    unmountOnExit: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2___default.a, {
    component: "div",
    disablePadding: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 15
    }
  }, "SYS600 - D\u1ECBch ng\xF4n ng\u1EEF")), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 15
    }
  }, "SYS703 - T\u1EA1o Th\xE0nh ph\u1ED1")), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 15
    }
  }, "SYS704 - T\u1EA1o Qu\u1EADn, Huy\u1EC7n")), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 15
    }
  }, "SYS705 - T\u1EA1o Ph\u01B0\u1EDDng, X\xE3")), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 15
    }
  }, "SYS025 - Ki\u1EC3m tra ho\u1EA1t \u0111\u1ED9ng")), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 15
    }
  }, "SYS020 - Thi\u1EBFt l\u1EADp ho\u1EA1t \u0111\u1ED9ng ng\u01B0\u1EDDi d\xF9ng")), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 15
    }
  }, "SYS012 - Thay \u0111\u1ED5i m\u1EADt kh\u1EA9u")), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 15
    }
  }, "SYS150 - Location setting")))), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    onClick: () => handleClick(6),
    className: "d-flex justify-content-between",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.titleText,
    style: {
      fontWeight: open6 ? 'bold' : 'normal'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 11
    }
  }, "Th\xF4ng tin h\u1EC7 th\u1ED1ng"), open6 ? __jsx(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_7___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 13
    }
  }) : __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_8___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 15
    }
  })), __jsx(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_1___default.a, {
    in: open6,
    timeout: "auto",
    unmountOnExit: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2___default.a, {
    component: "div",
    disablePadding: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 15
    }
  }, "SYS811 - Ghi ch\xFA ph\xE1t h\xE0nh t\xEDnh n\u0103ng m\u1EDBi")), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 15
    }
  }, "SYS812 - Quy tr\xECnh c\xF4ng ty")), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 15
    }
  }, "-License Information")), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fontSize: "small",
    color: "disabled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.itemText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 15
    }
  }, "SYS888 - System Intergrity Management")))), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: "d-flex justify-content-between",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.titleText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 11
    }
  }, "C\u1EADp nh\u1EADt m\u1EDBi"), __jsx(_material_ui_icons_Cached__WEBPACK_IMPORTED_MODULE_6___default.a, {
    style: {
      color: '#4EEFA2'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    className: "d-flex justify-content-between",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    className: classes.titleText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333,
      columnNumber: 11
    }
  }, "H\u1ED7 tr\u1EE3"), __jsx(_material_ui_icons_Help__WEBPACK_IMPORTED_MODULE_9___default.a, {
    style: {
      color: '#2FAAFC'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336,
      columnNumber: 11
    }
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (SystemsManagement);

/***/ }),

/***/ "./component/sideBar/sideBar.tsx":
/*!***************************************!*\
  !*** ./component/sideBar/sideBar.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-custom-scrollbars */ "react-custom-scrollbars");
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _NhanSu_NhanSu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NhanSu/NhanSu */ "./component/sideBar/NhanSu/NhanSu.tsx");
/* harmony import */ var _SystemsManagement_SystemsManagement__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SystemsManagement/SystemsManagement */ "./component/sideBar/SystemsManagement/SystemsManagement.tsx");
var _jsxFileName = "C:\\Long\\erp.webapp\\component\\sideBar\\sideBar.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  root: {
    overflow: 'auto'
  },
  title: {
    fontFamily: "Quicksand",
    fontSize: "16px",
    fontWeight: 'bold',
    color: "#2FAAFC",
    paddingLeft: "6px",
    paddingTop: "12px",
    margin: '0'
  }
});

function SideBar(props) {
  const {
    0: key,
    1: setKey
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(1);
  const classes = useStyles();
  return __jsx("div", {
    className: "container pr-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "d-flex bg-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "d-flex justify-content-start align-items-start pr-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: " d-flex flex-column justify-content-start align-items-center pt-2 sticky",
    style: {
      backgroundColor: "#2FAAFC",
      width: "52px",
      height: "100vh"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["IconButton"], {
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
      lineNumber: 39,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Badge"], {
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 15
    }
  }, key === 1 ? __jsx("img", {
    src: "/images/icon/icon1active.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 30
    }
  }) : __jsx("img", {
    src: "/images/icon/icon1.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 75
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["IconButton"], {
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
      lineNumber: 44,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Badge"], {
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 15
    }
  }, key === 2 ? __jsx("img", {
    src: "/images/icon/icon2active.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 30
    }
  }) : __jsx("img", {
    src: "/images/icon/icon2.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 75
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["IconButton"], {
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
      lineNumber: 49,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Badge"], {
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 15
    }
  }, key === 3 ? __jsx("img", {
    src: "/images/icon/icon3active.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 30
    }
  }) : __jsx("img", {
    src: "/images/icon/icon3.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 75
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["IconButton"], {
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
      lineNumber: 54,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Badge"], {
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 15
    }
  }, key === 4 ? __jsx("img", {
    src: "/images/icon/icon4active.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 30
    }
  }) : __jsx("img", {
    src: "/images/icon/icon4.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 75
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["IconButton"], {
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
      lineNumber: 59,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Badge"], {
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 15
    }
  }, key === 5 ? __jsx("img", {
    src: "/images/icon/icon5active.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 30
    }
  }) : __jsx("img", {
    src: "/images/icon/icon5.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 75
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["IconButton"], {
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
      lineNumber: 64,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Badge"], {
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 15
    }
  }, key === 6 ? __jsx("img", {
    src: "/images/icon/icon6active.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 30
    }
  }) : __jsx("img", {
    src: "/images/icon/icon6.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 75
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["IconButton"], {
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
      lineNumber: 69,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Badge"], {
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 15
    }
  }, key === 7 ? __jsx("img", {
    src: "/images/icon/icon7active.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 30
    }
  }) : __jsx("img", {
    src: "/images/icon/icon7.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 75
    }
  }), "              ")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["IconButton"], {
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
      lineNumber: 73,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Badge"], {
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 15
    }
  }, key === 8 ? __jsx("img", {
    src: "/images/icon/icon8active.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 30
    }
  }) : __jsx("img", {
    src: "/images/icon/icon8.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 75
    }
  }), "              ")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["IconButton"], {
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
      lineNumber: 77,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Badge"], {
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 15
    }
  }, key === 9 ? __jsx("img", {
    src: "/images/icon/icon9active.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 30
    }
  }) : __jsx("img", {
    src: "/images/icon/icon9.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 75
    }
  }), "              ")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["IconButton"], {
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
      lineNumber: 81,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Badge"], {
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 15
    }
  }, key === 10 ? __jsx("img", {
    src: "/images/icon/icon10active.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 31
    }
  }) : __jsx("img", {
    src: "/images/icon/icon10.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 77
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["IconButton"], {
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
      lineNumber: 86,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Badge"], {
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 15
    }
  }, key === 11 ? __jsx("img", {
    src: "/images/icon/icon11active.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 31
    }
  }) : __jsx("img", {
    src: "/images/icon/icon11.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 77
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["IconButton"], {
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
      lineNumber: 91,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Badge"], {
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 15
    }
  }, key === 12 ? __jsx("img", {
    src: "/images/icon/icon12active.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 31
    }
  }) : __jsx("img", {
    src: "/images/icon/icon12.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 77
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["IconButton"], {
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
      lineNumber: 96,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Badge"], {
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 15
    }
  }, key === 13 ? __jsx("img", {
    src: "/images/icon/icon13active.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 31
    }
  }) : __jsx("img", {
    src: "/images/icon/icon13.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 77
    }
  }))))), __jsx("div", {
    style: {
      width: 'calc(100% - 60px)',
      paddingLeft: '8px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 9
    }
  }, key === 1 && __jsx("div", {
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
  }, "QU\u1EA2N TR\u1ECA H\u1EC6 TH\u1ED0NG"), __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 15
    }
  }, __jsx(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_3___default.a, {
    style: {
      height: '90vh'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 17
    }
  }, __jsx(_SystemsManagement_SystemsManagement__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 19
    }
  })))), key === 2 && __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 15
    }
  }, "NH\xC2N S\u1EF0"), __jsx(_NhanSu_NhanSu__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 15
    }
  })), key === 3 && __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 15
    }
  }, "C\xD4NG VI\u1EC6C")), key === 4 && __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 15
    }
  }, "B\xC1O C\xC1O")), key === 5 && __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 15
    }
  }, "B\xC1N L\u1EBA POS")), key === 6 && __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 15
    }
  }, "K\u1EBE TO\xC1N")), key === 7 && __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 15
    }
  }, "KH\xC1CH H\xC0NG & B\xC1N H\xC0NG")), key === 8 && __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 15
    }
  }, "S\u1EA2N PH\u1EA8M")), key === 9 && __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 15
    }
  }, "B\xC1O GI\xC1")), key === 10 && __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 15
    }
  }, "QU\u1EA2N L\xDD KHO")), key === 11 && __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 15
    }
  }, "THU MUA")), key === 12 && __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 15
    }
  }, "DASHBOARD")), key === 13 && __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
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
var _jsxFileName = "C:\\Long\\erp.webapp\\component\\topNav\\topnav.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement;














const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  root: {
    flexGrow: 1
  },
  fullwidth: {
    width: '100vw'
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

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  return __jsx("div", {
    className: classes.fullwidth,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: classes.grow,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
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
      lineNumber: 115,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "\\images\\VVlogo1.png",
    className: "px-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
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
      lineNumber: 122,
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
      lineNumber: 128,
      columnNumber: 15
    }
  })), __jsx("span", {
    className: classes.companyTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
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
      lineNumber: 131,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: classes.searchIcon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 15
    }
  }, __jsx(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_11___default.a, {
    style: {
      color: '#2FAAFC'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
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
      lineNumber: 135,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: classes.grow,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: classes.sectionDesktop,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2___default.a, {
    "aria-label": "show ",
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Badge"], {
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 17
    }
  }, __jsx(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_8___default.a, {
    style: {
      color: '#5A5A5A'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 19
    }
  }))), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2___default.a, {
    "aria-label": "show ",
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Badge"], {
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 17
    }
  }, __jsx(_material_ui_icons_TrendingUp__WEBPACK_IMPORTED_MODULE_10___default.a, {
    style: {
      color: '#5A5A5A'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 19
    }
  }))), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2___default.a, {
    "aria-label": "show",
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
  }, __jsx(_material_ui_icons_Help__WEBPACK_IMPORTED_MODULE_12___default.a, {
    style: {
      color: '#5A5A5A'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 19
    }
  }))), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: classes.title,
    variant: "subtitle1",
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 15
    }
  }, "H\u1ED7 tr\u1EE3"), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2___default.a, {
    "aria-label": "show 17 new notifications",
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Badge"], {
    badgeContent: 17,
    color: "error",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 17
    }
  }, __jsx(_material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_7___default.a, {
    style: {
      color: '#5A5A5A'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 19
    }
  }))), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: classes.title,
    variant: "subtitle1",
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
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
      lineNumber: 184,
      columnNumber: 15
    }
  }, __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_6__["AccountCircle"], {
    style: {
      color: '#5A5A5A'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
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

/***/ "./fileSettings/authenticateSettings.json":
/*!************************************************!*\
  !*** ./fileSettings/authenticateSettings.json ***!
  \************************************************/
/*! exports provided: tokenName, refreshToken, jwtSecretKey, authHeaderName, cookiesDomain, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"tokenName\":\".vvs.erp.access.token\",\"refreshToken\":\".vvs.erp.refresh.token\",\"jwtSecretKey\":\"jYHfzP9WfE2BU1qSoOjxQQ==\",\"authHeaderName\":\"Authorization\",\"cookiesDomain\":\"localhost\"}");

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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _component_sideBar_sideBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/sideBar/sideBar */ "./component/sideBar/sideBar.tsx");
/* harmony import */ var _component_topNav_topnav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/topNav/topnav */ "./component/topNav/topnav.tsx");
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-custom-scrollbars */ "react-custom-scrollbars");
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Long\\erp.webapp\\layouts\\mainLayout.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




class MainLayout extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    return __jsx("div", {
      className: "jsx-643724708" + " " + "app-wrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: "jsx-643724708" + " " + "sticky-top",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }
    }, __jsx(_component_topNav_topnav__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 11
      }
    })), __jsx("div", {
      className: "jsx-643724708" + " " + "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "jsx-643724708" + " " + "col-md-2 p-0 ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 11
      }
    }, __jsx(_component_sideBar_sideBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 13
      }
    })), __jsx("div", {
      style: {
        backgroundColor: '#F2F2F2'
      },
      className: "jsx-643724708" + " " + "col-md-10 pt-2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 11
      }
    }, __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }
    }, __jsx(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_4__["Scrollbars"], {
      style: {
        height: '90vh'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 15
      }
    }, this.props.children)))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "643724708",
      __self: this
    }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxMb25nXFxlcnAud2ViYXBwXFxsYXlvdXRzXFxtYWluTGF5b3V0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQlciLCJmaWxlIjoiQzpcXExvbmdcXGVycC53ZWJhcHBcXGxheW91dHNcXG1haW5MYXlvdXQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU2lkZUJhciBmcm9tIFwiLi4vY29tcG9uZW50L3NpZGVCYXIvc2lkZUJhclwiO1xyXG5pbXBvcnQgVG9wTmF2IGZyb20gXCIuLi9jb21wb25lbnQvdG9wTmF2L3RvcG5hdlwiO1xyXG5pbXBvcnQgeyBTY3JvbGxiYXJzIH0gZnJvbSAncmVhY3QtY3VzdG9tLXNjcm9sbGJhcnMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbkxheW91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwLXdyYXBwZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0aWNreS10b3BcIj5cclxuICAgICAgICAgIDxUb3BOYXYgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMiBwLTAgXCI+XHJcbiAgICAgICAgICAgIDxTaWRlQmFyIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEwIHB0LTJcIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjRjJGMkYyJyB9fT5cclxuXHJcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICA8U2Nyb2xsYmFycyBzdHlsZT17eyBoZWlnaHQ6ICc5MHZoJyB9fT5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICAgIDwvU2Nyb2xsYmFycz5cclxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICB7YFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Long\\\\erp.webapp\\\\layouts\\\\mainLayout.tsx */"));
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

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/animate.css/animate.css":
/*!**********************************************!*\
  !*** ./node_modules/animate.css/animate.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      if (key === 'as') {
        if (props[key] && typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: typeof props[key]
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && typeof props[key] !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const resolvedHref = (0, _router.resolveHref)(pathname, props.href);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)(as);
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/compiled/path-to-regexp/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return basePath && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(basePath) : basePath + path : path;
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname); // if the origin didn't change, it means we received a relative href

    return finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
  } catch (_) {
    return urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    const cleanedAs = hasBasePath(as) ? delBasePath(as) : as;
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to


    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      searchParams
    } = parsed;
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    }

    const query = (0, _querystring.searchParamsToUrlQuery)(searchParams); // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (true) {
      resolvedAs = (0, _resolveRewrites.default)(as, pages, basePath, rewrites, query, p => this._resolveHref({
        pathname: p
      }, pages).pathname);
    }

    resolvedAs = delBasePath(resolvedAs);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const {
        pathname: asPathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

      if (!routeMatch) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`);
        }
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error
      } = routeInfo;
      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component,
        styleSheets
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        styleSheets,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _denormalizePagePath.denormalizePagePath)(delBasePath(pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = addBasePath(page);
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (true) {
      return;
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    searchParams,
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/path-match.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.pathToRegexp = exports.default = exports.customRouteMatcherOptions = exports.matcherOptions = void 0;

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

exports.pathToRegexp = pathToRegexp;

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

const matcherOptions = {
  sensitive: false,
  delimiter: '/',
  decode: decodeParam
};
exports.matcherOptions = matcherOptions;

const customRouteMatcherOptions = _objectSpread(_objectSpread({}, matcherOptions), {}, {
  strict: true
});

exports.customRouteMatcherOptions = customRouteMatcherOptions;

var _default = (customRoute = false) => {
  return path => {
    const keys = [];
    const matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? customRouteMatcherOptions : matcherOptions);
    const matcher = pathToRegexp.regexpToFunction(matcherRegex, keys, matcherOptions);
    return (pathname, params) => {
      const res = pathname == null ? false : matcher(pathname);

      if (!res) {
        return false;
      }

      if (customRoute) {
        for (const key of keys) {
          // unnamed params should be removed as they
          // are not allowed to be used in the destination
          if (typeof key.name === 'number') {
            delete res.params[key.name];
          }
        }
      }

      return _objectSpread(_objectSpread({}, params), res.params);
    };
  };
};

exports.default = _default;

function decodeParam(param) {
  try {
    return decodeURIComponent(param);
  } catch (_) {
    const err = new Error('failed to decode param');
    err.code = 'DECODE_FAILED';
    throw err;
  }
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.default = prepareDestination;

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _parseRelativeUrl = __webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function prepareDestination(destination, params, query, appendParamsToQuery, basePath) {
  let parsedDestination = {};

  if (destination.startsWith('/')) {
    parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
  } else {
    const {
      pathname,
      searchParams,
      hash,
      hostname,
      port,
      protocol,
      search,
      href
    } = new URL(destination);
    parsedDestination = {
      pathname,
      searchParams,
      hash,
      protocol,
      hostname,
      port,
      search,
      href
    };
  }

  parsedDestination.query = (0, _querystring.searchParamsToUrlQuery)(parsedDestination.searchParams);
  const destQuery = parsedDestination.query;
  const destPath = `${parsedDestination.pathname}${parsedDestination.hash || ''}`;
  const destPathParamKeys = [];
  pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
  const destPathParams = destPathParamKeys.map(key => key.name);
  let destinationCompiler = pathToRegexp.compile(destPath, // we don't validate while compiling the destination since we should
  // have already validated before we got to this point and validating
  // breaks compiling destinations with named pattern params from the source
  // e.g. /something:hello(.*) -> /another/:hello is broken with validation
  // since compile validation is meant for reversing and not for inserting
  // params from a separate path-regex into another
  {
    validate: false
  });
  let newUrl; // update any params in query values

  for (const [key, strOrArray] of Object.entries(destQuery)) {
    let value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;

    if (value) {
      // the value needs to start with a forward-slash to be compiled
      // correctly
      value = `/${value}`;
      const queryCompiler = pathToRegexp.compile(value, {
        validate: false
      });
      value = queryCompiler(params).substr(1);
    }

    destQuery[key] = value;
  } // add path params to query if it's not a redirect and not
  // already defined in destination query or path


  const paramKeys = Object.keys(params);

  if (appendParamsToQuery && !paramKeys.some(key => destPathParams.includes(key))) {
    for (const key of paramKeys) {
      if (!(key in destQuery)) {
        destQuery[key] = params[key];
      }
    }
  }

  const shouldAddBasePath = destination.startsWith('/') && basePath;

  try {
    newUrl = `${shouldAddBasePath ? basePath : ''}${encodeURI(destinationCompiler(params))}`;
    const [pathname, hash] = newUrl.split('#');
    parsedDestination.pathname = pathname;
    parsedDestination.hash = `${hash ? '#' : ''}${hash || ''}`;
    delete parsedDestination.search;
    delete parsedDestination.searchParams;
  } catch (err) {
    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
      throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://err.sh/vercel/next.js/invalid-multi-match`);
    }

    throw err;
  } // Query merge order lowest priority to highest
  // 1. initial URL query values
  // 2. path segment values
  // 3. destination specified query values


  parsedDestination.query = _objectSpread(_objectSpread({}, query), parsedDestination.query);
  return {
    newUrl,
    parsedDestination
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, item));
    } else {
      result.set(key, value);
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

var _pathMatch = _interopRequireDefault(__webpack_require__(/*! ./path-match */ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js"));

var _prepareDestination = _interopRequireDefault(__webpack_require__(/*! ./prepare-destination */ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const customRouteMatcher = (0, _pathMatch.default)(true);

function resolveRewrites(asPath, pages, basePath, rewrites, query, resolveHref) {
  if (!pages.includes(asPath)) {
    for (const rewrite of rewrites) {
      const matcher = customRouteMatcher(rewrite.source);
      const params = matcher(asPath);

      if (params) {
        if (!rewrite.destination) {
          // this is a proxied rewrite which isn't handled on the client
          break;
        }

        const destRes = (0, _prepareDestination.default)(rewrite.destination, params, query, true, rewrite.basePath === false ? '' : basePath);
        asPath = destRes.parsedDestination.pathname;
        Object.assign(query, destRes.parsedDestination.query);

        if (pages.includes(asPath)) {
          // check if we now match a page as this means we are done
          // resolving the rewrites
          break;
        } // check if we match a dynamic-route, if so we break the rewrites chain


        const resolvedHref = resolveHref(asPath);

        if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
          break;
        }
      }
    }
  }

  return asPath;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) === null || _App$prototype === void 0 ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


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
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__);
var _jsxFileName = "C:\\Long\\erp.webapp\\pages\\_app.tsx";
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
  const theme = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["createMuiTheme"])({
    palette: {
      primary: {
        main: '#2FAAFC'
      },
      secondary: {
        main: '#d32f2f'
      }
    }
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, __jsx(next_seo__WEBPACK_IMPORTED_MODULE_7__["NextSeo"], {
    title: "ERP Web Application",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["ThemeProvider"], {
    theme: theme,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, __jsx(react_redux__WEBPACK_IMPORTED_MODULE_4__["Provider"], {
    store: store,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, __jsx(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_9__["PersistGate"], {
    loading: __jsx(Component, _extends({}, pageProps, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 33
      }
    })),
    persistor: persistor,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }, __jsx(AppLayout, _extends({}, pageProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }), __jsx(Component, _extends({}, pageProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 15
    }
  })))))));
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

/***/ "./redux/location/actions.tsx":
/*!************************************!*\
  !*** ./redux/location/actions.tsx ***!
  \************************************/
/*! exports provided: actionTypes, setLocations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLocations", function() { return setLocations; });
const actionTypes = {
  SET_LOCATIONS: 'SET_LOCATIONS'
};
const setLocations = locations => ({
  type: actionTypes.SET_LOCATIONS,
  locations
});

/***/ }),

/***/ "./redux/location/reducer.tsx":
/*!************************************!*\
  !*** ./redux/location/reducer.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return reducer; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./redux/location/actions.tsx");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initializeState = {
  locations: []
};
function reducer(state = initializeState, action) {
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].SET_LOCATIONS:
      return _objectSpread(_objectSpread({}, state), {}, {
        locations: action.locations
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./redux/login/actions.tsx":
/*!*********************************!*\
  !*** ./redux/login/actions.tsx ***!
  \*********************************/
/*! exports provided: actionTypes, login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
const actionTypes = {
  LOGIN: 'LOGIN',
  SOCIAL_LOGIN: 'SOCIAL_LOGIN',
  SAVE_COOKIE_AND_PREPARE_DATA: 'SAVE_COOKIE_AND_PREPARE_DATA',
  SAVE_TOKEN: 'SAVE_TOKEN'
};
function login(loginModal) {
  return {
    type: actionTypes.LOGIN,
    loginModal
  };
}

/***/ }),

/***/ "./redux/login/reducer.tsx":
/*!*********************************!*\
  !*** ./redux/login/reducer.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return reducer; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./redux/login/actions.tsx");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initializeState = {
  loginModal: ''
};
function reducer(state = initializeState, action) {
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].LOGIN:
      return _objectSpread(_objectSpread({}, state), {}, {
        loginModal: action.loginModal
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
/* harmony import */ var _login_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/reducer */ "./redux/login/reducer.tsx");
/* harmony import */ var _systemsManagement_company_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./systemsManagement/company/reducer */ "./redux/systemsManagement/company/reducer.tsx");
/* harmony import */ var _location_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./location/reducer */ "./redux/location/reducer.tsx");
/* harmony import */ var _systemsManagement_companyBank_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./systemsManagement/companyBank/reducer */ "./redux/systemsManagement/companyBank/reducer.tsx");






/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  dynamicState: _dynamic_reducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  loginState: _login_reducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  systemsCompanyState: _systemsManagement_company_reducer__WEBPACK_IMPORTED_MODULE_3__["default"],
  locationState: _location_reducer__WEBPACK_IMPORTED_MODULE_4__["default"],
  companyBankState: _systemsManagement_companyBank_reducer__WEBPACK_IMPORTED_MODULE_5__["default"]
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
/* harmony import */ var _watchers_loginWatcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./watchers/loginWatcher */ "./redux/watchers/loginWatcher.tsx");
/* harmony import */ var _watchers_companyWatcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./watchers/companyWatcher */ "./redux/watchers/companyWatcher.tsx");
/* harmony import */ var _watchers_bankWatcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./watchers/bankWatcher */ "./redux/watchers/bankWatcher.tsx");





es6_promise__WEBPACK_IMPORTED_MODULE_1___default.a.polyfill();
function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_watchers_loginWatcher__WEBPACK_IMPORTED_MODULE_2__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_watchers_companyWatcher__WEBPACK_IMPORTED_MODULE_3__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_watchers_bankWatcher__WEBPACK_IMPORTED_MODULE_4__["default"])]);
}

/***/ }),

/***/ "./redux/systemsManagement/company/actions.tsx":
/*!*****************************************************!*\
  !*** ./redux/systemsManagement/company/actions.tsx ***!
  \*****************************************************/
/*! exports provided: actionTypes, createCompany, changeCompany, getCompanyList, deleteCompany, getCompany, setCompany, setCompanyList, uploadLogo, setPrinter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCompany", function() { return createCompany; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeCompany", function() { return changeCompany; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCompanyList", function() { return getCompanyList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteCompany", function() { return deleteCompany; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCompany", function() { return getCompany; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCompany", function() { return setCompany; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCompanyList", function() { return setCompanyList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadLogo", function() { return uploadLogo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPrinter", function() { return setPrinter; });
const actionTypes = {
  CREAT_COMPANY: 'CREAT_COMPANY',
  GET_COMPANY: 'GET_COMPANY',
  SET_COMPANY: 'SET_COMPANY',
  UPLOAD_LOGO: 'UPLOAD_LOGO',
  GET_COMPANY_LIST: 'GET_COMPANY_LIST',
  SET_COMPANY_LIST: 'SET_COMPANY_LIST',
  DELETE_COMPANY: 'DELETE_COMPANY',
  SET_PRINTER: 'SET_PRINTER',
  CHANGE_COMPANY: 'CHANGE_COMPANY'
};
function createCompany(createCompanyModal) {
  return {
    type: actionTypes.CREAT_COMPANY,
    createCompanyModal
  };
}
function changeCompany(changeCompanyModal) {
  return {
    type: actionTypes.CHANGE_COMPANY,
    changeCompanyModal
  };
}
const getCompanyList = () => ({
  type: actionTypes.GET_COMPANY_LIST
});
const deleteCompany = companyId => ({
  type: actionTypes.DELETE_COMPANY,
  companyId
});
const getCompany = companyId => ({
  type: actionTypes.GET_COMPANY,
  companyId
});
const setCompany = company => ({
  type: actionTypes.SET_COMPANY,
  company
});
function setCompanyList(companyData) {
  return {
    type: actionTypes.SET_COMPANY_LIST,
    companyData
  };
}
function uploadLogo(file) {
  return {
    type: actionTypes.UPLOAD_LOGO,
    file
  };
}
function setPrinter(printer) {
  return {
    type: actionTypes.SET_PRINTER,
    printer
  };
}

/***/ }),

/***/ "./redux/systemsManagement/company/reducer.tsx":
/*!*****************************************************!*\
  !*** ./redux/systemsManagement/company/reducer.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return reducer; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./redux/systemsManagement/company/actions.tsx");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import DynamicState from "../../@types/dynamic/dynamicState";

const initializeState = {
  createCompanyModal: null,
  companyData: [],
  company: {
    id: 0,
    companyName: '',
    companyAddress: '',
    companyPhone: '',
    addressToPrintReport: '',
    orderDocPrefix: '',
    companySupportEmail: '',
    nameToPrintReport: '',
    countryId: 0,
    provinceId: 0,
    districtId: 0,
    wardId: 0,
    companyEnglishName: '',
    companyRegistration: '',
    companyTitle: '',
    companyFax: '',
    companyHotline: '',
    companySaleEmail: '',
    website: '',
    visiblePOSMobileApp: true,
    companyLogo: '',
    posCustomerBill: 0,
    posSavedBill: 0,
    posWarehouseBill: 0,
    posDefaultPrinter: 0,
    stampDefaultPrinter: 0,
    numberGroupSeparator: 0,
    active: true,
    parentId: 0,
    companyCode: null
  },
  printer: []
};
function reducer(state = initializeState, action) {
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].CREAT_COMPANY:
      return _objectSpread(_objectSpread({}, state), {}, {
        createCompanyModal: action.createCompanyModal
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].SET_COMPANY_LIST:
      return _objectSpread(_objectSpread({}, state), {}, {
        companyData: action.companyData
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].SET_COMPANY:
      return _objectSpread(_objectSpread({}, state), {}, {
        company: _objectSpread({}, action.company)
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].SET_PRINTER:
      return _objectSpread(_objectSpread({}, state), {}, {
        printer: action.printer
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./redux/systemsManagement/companyBank/actions.tsx":
/*!*********************************************************!*\
  !*** ./redux/systemsManagement/companyBank/actions.tsx ***!
  \*********************************************************/
/*! exports provided: actionTypes, createCompanyBank, getCompanyBankInfo, getBankInfo, setBankInfo, getBankType, setBankType, setCompanyBankInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCompanyBank", function() { return createCompanyBank; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCompanyBankInfo", function() { return getCompanyBankInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBankInfo", function() { return getBankInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBankInfo", function() { return setBankInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBankType", function() { return getBankType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBankType", function() { return setBankType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCompanyBankInfo", function() { return setCompanyBankInfo; });
const actionTypes = {
  CREAT_COMPANY_BANK: 'CREAT_COMPANY_BANK',
  GET_COMPANY_BANK_INFO: 'GET_COMPANY_BANK_INFO',
  SET_COMPANY_BANK_INFO: 'SET_COMPANY_BANK_INFO',
  GET_BANK_INFO: 'GET_BANK_INFO',
  SET_BANK_INFO: 'SET_BANK_INFO',
  GET_BANK_TYPE: 'GET_BANK_TYPE',
  SET_BANK_TYPE: 'SET_BANK_TYPE'
};
function createCompanyBank(createCompanyBankModal) {
  return {
    type: actionTypes.CREAT_COMPANY_BANK,
    createCompanyBankModal
  };
}
const getCompanyBankInfo = () => ({
  type: actionTypes.GET_COMPANY_BANK_INFO
});
const getBankInfo = bankId => ({
  type: actionTypes.GET_BANK_INFO,
  bankId
});
const setBankInfo = bankInfo => ({
  type: actionTypes.SET_BANK_INFO,
  bankInfo
});
const getBankType = () => ({
  type: actionTypes.GET_BANK_TYPE
});
const setBankType = bankType => ({
  type: actionTypes.SET_BANK_TYPE,
  bankType
});
function setCompanyBankInfo(companyBankInfo) {
  return {
    type: actionTypes.SET_COMPANY_BANK_INFO,
    companyBankInfo
  };
}

/***/ }),

/***/ "./redux/systemsManagement/companyBank/reducer.tsx":
/*!*********************************************************!*\
  !*** ./redux/systemsManagement/companyBank/reducer.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return reducer; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./redux/systemsManagement/companyBank/actions.tsx");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import DynamicState from "../../@types/dynamic/dynamicState";

const initializeState = {
  //:SystemsCompanyState 
  companyBankInfo: [],
  bankInfo: {
    id: null,
    bankCode: '',
    bankName: '',
    bankAddress: '',
    bankAccountName: '',
    bankAccountNumber: '',
    accountingCodeId: null,
    paypalAccount: '',
    paypalNumber: '',
    cifCode: '',
    iebCode: '',
    companyId: null
  },
  bankType: []
};
function reducer(state = initializeState, action) {
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].SET_COMPANY_BANK_INFO:
      return _objectSpread(_objectSpread({}, state), {}, {
        companyBankInfo: action.companyBankInfo
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].SET_BANK_INFO:
      return _objectSpread(_objectSpread({}, state), {}, {
        bankInfo: action.bankInfo
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].SET_BANK_TYPE:
      return _objectSpread(_objectSpread({}, state), {}, {
        bankType: action.bankType
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./redux/watchers/bankWatcher.tsx":
/*!****************************************!*\
  !*** ./redux/watchers/bankWatcher.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return companyBankWatcher; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_httpService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/httpService */ "./services/httpService.tsx");
/* harmony import */ var _systemsManagement_companyBank_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../systemsManagement/companyBank/actions */ "./redux/systemsManagement/companyBank/actions.tsx");




function* createCompanyBank(action) {
  const createCompanyBankModal = action.createCompanyBankModal;

  try {
    const result = yield _services_httpService__WEBPACK_IMPORTED_MODULE_1__["default"].post('/SystemsManagement/CompanyBank', createCompanyBankModal);
    console.log(result);
  } catch (e) {} finally {}
}

function* getBankType(action) {
  try {
    const result = yield _services_httpService__WEBPACK_IMPORTED_MODULE_1__["default"].get('/SystemsManagement/CompanyBankType');
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_systemsManagement_companyBank_actions__WEBPACK_IMPORTED_MODULE_2__["setBankType"])(result.data));
  } catch (e) {} finally {}
}

function* getCompanyBankInfo(action) {
  try {
    const result = yield _services_httpService__WEBPACK_IMPORTED_MODULE_1__["default"].get('/SystemsManagement/CompanyBank');
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_systemsManagement_companyBank_actions__WEBPACK_IMPORTED_MODULE_2__["setCompanyBankInfo"])(result.data));
  } catch (e) {} finally {}
}

function* getBankInfo(action) {
  const bankId = action.bankId;

  try {
    const result = yield _services_httpService__WEBPACK_IMPORTED_MODULE_1__["default"].get(`/SystemsManagement/CompanyBank/${bankId}`);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_systemsManagement_companyBank_actions__WEBPACK_IMPORTED_MODULE_2__["setBankInfo"])(result));
  } catch (e) {} finally {}
}

function* companyBankWatcher() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_systemsManagement_companyBank_actions__WEBPACK_IMPORTED_MODULE_2__["actionTypes"].CREAT_COMPANY_BANK, createCompanyBank), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_systemsManagement_companyBank_actions__WEBPACK_IMPORTED_MODULE_2__["actionTypes"].GET_COMPANY_BANK_INFO, getCompanyBankInfo), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_systemsManagement_companyBank_actions__WEBPACK_IMPORTED_MODULE_2__["actionTypes"].GET_BANK_INFO, getBankInfo), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_systemsManagement_companyBank_actions__WEBPACK_IMPORTED_MODULE_2__["actionTypes"].GET_BANK_TYPE, getBankType)]);
}

/***/ }),

/***/ "./redux/watchers/companyWatcher.tsx":
/*!*******************************************!*\
  !*** ./redux/watchers/companyWatcher.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return companyWatcher; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _systemsManagement_company_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../systemsManagement/company/actions */ "./redux/systemsManagement/company/actions.tsx");
/* harmony import */ var _services_httpService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/httpService */ "./services/httpService.tsx");




function* createCompany(action) {
  const createCompanyModal = action.createCompanyModal;

  try {
    const result = yield _services_httpService__WEBPACK_IMPORTED_MODULE_2__["default"].post('/SystemsManagement/Company', createCompanyModal);
  } catch (e) {} finally {}
}

function* changeCompany(action) {
  const changeCompanyModal = action.changeCompanyModal;

  try {
    const result = yield _services_httpService__WEBPACK_IMPORTED_MODULE_2__["default"].put(`/SystemsManagement/Company`, changeCompanyModal);
  } catch (e) {} finally {}
}

function* uploadLogo(action) {
  const file = action.file;

  try {
    const result = yield _services_httpService__WEBPACK_IMPORTED_MODULE_2__["default"].post('/api/Upload', file);
  } catch (e) {} finally {}
}

function* getCompanyList(action) {
  try {
    const result = yield _services_httpService__WEBPACK_IMPORTED_MODULE_2__["default"].get('SystemsManagement/Company');
    const companyList = result.data;
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_systemsManagement_company_actions__WEBPACK_IMPORTED_MODULE_1__["setCompanyList"])(companyList));
  } catch (e) {} finally {}
}

function* getCompany(action) {
  const companyId = action.companyId;

  try {
    const result = yield _services_httpService__WEBPACK_IMPORTED_MODULE_2__["default"].get(`SystemsManagement/Company/${companyId}`);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_systemsManagement_company_actions__WEBPACK_IMPORTED_MODULE_1__["setCompany"])(result));
  } catch (e) {} finally {}
}

function* deleteCompany(action) {
  const companyId = action.companyId;
  console.log(companyId);

  try {
    const result = yield _services_httpService__WEBPACK_IMPORTED_MODULE_2__["default"].delete(`SystemsManagement/Company/${companyId}`);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_systemsManagement_company_actions__WEBPACK_IMPORTED_MODULE_1__["setCompanyList"])(result));
  } catch (error) {}
}

function* companyWatcher() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_systemsManagement_company_actions__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].CREAT_COMPANY, createCompany), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_systemsManagement_company_actions__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].CHANGE_COMPANY, changeCompany), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_systemsManagement_company_actions__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].UPLOAD_LOGO, uploadLogo), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_systemsManagement_company_actions__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].GET_COMPANY_LIST, getCompanyList), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_systemsManagement_company_actions__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].GET_COMPANY, getCompany), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_systemsManagement_company_actions__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].DELETE_COMPANY, deleteCompany)]);
}

/***/ }),

/***/ "./redux/watchers/loginWatcher.tsx":
/*!*****************************************!*\
  !*** ./redux/watchers/loginWatcher.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return loginWatcher; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _login_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../login/actions */ "./redux/login/actions.tsx");
/* harmony import */ var _services_httpService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/httpService */ "./services/httpService.tsx");
/* harmony import */ var _services_authorizationService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/authorizationService */ "./services/authorizationService.tsx");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
// import { actionTypes, setUserProfile, setUserSettings, setAlert, prepareUserProfileData } from "../profile/actions";






function* login(action) {
  const loginModal = action.loginModal;

  try {
    // action.onLoading(true);
    const result = yield _services_httpService__WEBPACK_IMPORTED_MODULE_2__["default"].post('/Account/SystemAccount/Login', loginModal);

    if (!lodash__WEBPACK_IMPORTED_MODULE_4___default.a.isEmpty(result.accessToken) && !lodash__WEBPACK_IMPORTED_MODULE_4___default.a.isEmpty(result.refreshToken)) {
      _services_authorizationService__WEBPACK_IMPORTED_MODULE_3__["default"].setCookies(result.accessToken, result.refreshToken);
      window.location.href = '/';
    }
  } catch (e) {} finally {// action.onLoading(false);
  }
}

function* loginWatcher() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_login_actions__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].LOGIN, login)]);
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
    whitelist: ['userProfileState', 'locationState']
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

/***/ "./services/authorizationService.tsx":
/*!*******************************************!*\
  !*** ./services/authorizationService.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-cookie */ "react-cookie");
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_cookie__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fileSettings_authenticateSettings_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fileSettings/authenticateSettings.json */ "./fileSettings/authenticateSettings.json");
var _fileSettings_authenticateSettings_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../fileSettings/authenticateSettings.json */ "./fileSettings/authenticateSettings.json", 1);



class AuthorizationService {
  setCookies(authToken, refreshToken) {
    const cookies = new react_cookie__WEBPACK_IMPORTED_MODULE_0__["Cookies"]();
    cookies.set(_fileSettings_authenticateSettings_json__WEBPACK_IMPORTED_MODULE_1__.tokenName, authToken, {
      path: '/',
      maxAge: 1000 * 3600 * 24 * 30 * 2
    });
    cookies.set(_fileSettings_authenticateSettings_json__WEBPACK_IMPORTED_MODULE_1__.refreshToken, refreshToken, {
      path: '/',
      maxAge: 1000 * 3600 * 24 * 30 * 2
    });
  }

  logout() {
    const cookies = new react_cookie__WEBPACK_IMPORTED_MODULE_0__["Cookies"]();
    cookies.remove(_fileSettings_authenticateSettings_json__WEBPACK_IMPORTED_MODULE_1__.tokenName, {
      path: '/'
    });
    localStorage.removeItem('persist:.rosterspot.localstorage.app.key');
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new AuthorizationService());

/***/ }),

/***/ "./services/httpService.tsx":
/*!**********************************!*\
  !*** ./services/httpService.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fileSettings_authenticateSettings_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fileSettings/authenticateSettings.json */ "./fileSettings/authenticateSettings.json");
var _fileSettings_authenticateSettings_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../fileSettings/authenticateSettings.json */ "./fileSettings/authenticateSettings.json", 1);



const httpClient = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: "http://erp-api-dev.vvs.vn" // baseURL: "http://192.168.1.21",

});
httpClient.interceptors.request.use(function (config) {
  if (typeof document !== "undefined") {
    const auToken = js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get(_fileSettings_authenticateSettings_json__WEBPACK_IMPORTED_MODULE_2__.tokenName);
    if (auToken) config.headers.common["Authorization"] = 'Bearer ' + js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get(_fileSettings_authenticateSettings_json__WEBPACK_IMPORTED_MODULE_2__.tokenName);
  }

  return config;
}, function (error) {
  console.log(JSON.stringify(error));
  return Promise.reject(error);
});
httpClient.interceptors.response.use(response => {
  if (response.data.result) return response.data.result;
  return response.data;
}, error => {
  if (error.response && error.response.data) {
    const {
      data
    } = error.response;
    return data;
  }

  return Promise.reject(error);
});
/* harmony default export */ __webpack_exports__["default"] = (httpClient);

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

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "es6-promise":
/*!******************************!*\
  !*** external "es6-promise" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("es6-promise");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

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

/***/ "react-cookie":
/*!*******************************!*\
  !*** external "react-cookie" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-cookie");

/***/ }),

/***/ "react-custom-scrollbars":
/*!******************************************!*\
  !*** external "react-custom-scrollbars" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-custom-scrollbars");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

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

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudC9zaWRlQmFyL05oYW5TdS9OaGFuU3UudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudC9zaWRlQmFyL1N5c3RlbXNNYW5hZ2VtZW50L1N5c3RlbXNNYW5hZ2VtZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvc2lkZUJhci9zaWRlQmFyLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvdG9wTmF2L3RvcG5hdi50c3giLCJ3ZWJwYWNrOi8vLy4vbGF5b3V0cy9tYWluTGF5b3V0LnRzeCIsIndlYnBhY2s6Ly8vLi9saWJzL2V4dGVuc2lvbnMudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhdGgtbWF0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcHJlcGFyZS1kZXN0aW5hdGlvbi50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yZXNvbHZlLXJld3JpdGVzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLnRzeCIsIndlYnBhY2s6Ly8vLi9yZWR1eC9keW5hbWljL2FjdGlvbnMudHN4Iiwid2VicGFjazovLy8uL3JlZHV4L2R5bmFtaWMvcmVkdWNlci50c3giLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvbG9jYXRpb24vYWN0aW9ucy50c3giLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvbG9jYXRpb24vcmVkdWNlci50c3giLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvbG9naW4vYWN0aW9ucy50c3giLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvbG9naW4vcmVkdWNlci50c3giLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvcm9vdFJlZHVjZXIudHN4Iiwid2VicGFjazovLy8uL3JlZHV4L3Jvb3RTYWdhLnRzeCIsIndlYnBhY2s6Ly8vLi9yZWR1eC9zeXN0ZW1zTWFuYWdlbWVudC9jb21wYW55L2FjdGlvbnMudHN4Iiwid2VicGFjazovLy8uL3JlZHV4L3N5c3RlbXNNYW5hZ2VtZW50L2NvbXBhbnkvcmVkdWNlci50c3giLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvc3lzdGVtc01hbmFnZW1lbnQvY29tcGFueUJhbmsvYWN0aW9ucy50c3giLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvc3lzdGVtc01hbmFnZW1lbnQvY29tcGFueUJhbmsvcmVkdWNlci50c3giLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvd2F0Y2hlcnMvYmFua1dhdGNoZXIudHN4Iiwid2VicGFjazovLy8uL3JlZHV4L3dhdGNoZXJzL2NvbXBhbnlXYXRjaGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9yZWR1eC93YXRjaGVycy9sb2dpbldhdGNoZXIudHN4Iiwid2VicGFjazovLy8uL3JlZHV4L3dpdGhSZWR1eC50c3giLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvYXV0aG9yaXphdGlvblNlcnZpY2UudHN4Iiwid2VicGFjazovLy8uL3NlcnZpY2VzL2h0dHBTZXJ2aWNlLnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0FwcEJhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0NvbGxhcHNlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93UmlnaHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2FjaGVkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0V4cGFuZExlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRXhwYW5kTW9yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9IZWxwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL01lbnVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTm90aWZpY2F0aW9uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9TZWFyY2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2V0dGluZ3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvVHJlbmRpbmdVcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXM2LXByb21pc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcy1jb29raWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2Rhc2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXNlb1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibnByb2dyZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibnVtZXJhbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtY29va2llXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtY3VzdG9tLXNjcm9sbGJhcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1wZXJzaXN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtcGVyc2lzdC9pbnRlZ3JhdGlvbi9yZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYS9lZmZlY3RzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtdGh1bmtcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCIiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsIndpZHRoIiwiYmFja2dyb3VuZENvbG9yIiwicGFsZXR0ZSIsImJhY2tncm91bmQiLCJwYXBlciIsIm92ZXJmbG93IiwibmVzdGVkIiwicGFkZGluZ0xlZnQiLCJzcGFjaW5nIiwidGl0bGVUZXh0IiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwiaXRlbVRleHQiLCJOaGFuU3UiLCJjbGFzc2VzIiwib3BlbjEiLCJzZXRPcGVuMSIsIlJlYWN0IiwidXNlU3RhdGUiLCJvcGVuMiIsInNldE9wZW4yIiwib3BlbjMiLCJzZXRPcGVuMyIsIm9wZW40Iiwic2V0T3BlbjQiLCJvcGVuNSIsInNldE9wZW41IiwiaGFuZGxlQ2xpY2siLCJudW1iZXIiLCJmb250V2VpZ2h0IiwiU3lzdGVtc01hbmFnZW1lbnQiLCJvcGVuNiIsInNldE9wZW42Iiwib3BlbjciLCJzZXRPcGVuNyIsImNvbG9yIiwidGl0bGUiLCJwYWRkaW5nVG9wIiwibWFyZ2luIiwiU2lkZUJhciIsInByb3BzIiwia2V5Iiwic2V0S2V5IiwiaGVpZ2h0IiwiZmxleEdyb3ciLCJmdWxsd2lkdGgiLCJjb21wYW55VGl0bGUiLCJtZW51QnV0dG9uIiwibWFyZ2luUmlnaHQiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiZ3JvdyIsInNlYXJjaCIsInBvc2l0aW9uIiwiYm9yZGVyUmFkaXVzIiwiZmFkZSIsImNvbW1vbiIsIndoaXRlIiwibWFyZ2luTGVmdCIsImJyZWFrcG9pbnRzIiwidXAiLCJzZWFyY2hJY29uIiwicGFkZGluZyIsInBvaW50ZXJFdmVudHMiLCJpbnB1dFJvb3QiLCJpbnB1dElucHV0IiwidHJhbnNpdGlvbiIsInRyYW5zaXRpb25zIiwiY3JlYXRlIiwic2VjdGlvbkRlc2t0b3AiLCJzZWN0aW9uTW9iaWxlIiwiYWNjTmFtZSIsIlRvcE5hdiIsImFuY2hvckVsIiwic2V0QW5jaG9yRWwiLCJtb2JpbGVNb3JlQW5jaG9yRWwiLCJzZXRNb2JpbGVNb3JlQW5jaG9yRWwiLCJoYW5kbGVQcm9maWxlTWVudU9wZW4iLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJoYW5kbGVNb2JpbGVNZW51Q2xvc2UiLCJib3hTaGFkb3ciLCJpbnB1dCIsIk1haW5MYXlvdXQiLCJDb21wb25lbnQiLCJyZW5kZXIiLCJjaGlsZHJlbiIsImlzRGV2IiwiZGV2IiwiU3RyaW5nIiwicHJvdG90eXBlIiwiaW1hZ2VTcmMiLCJwcmVmaXgiLCJhcHBTZXR0aW5ncyIsInNlcnZlckluZm8iLCJuZXh0SnNBcHBVUkwiLCJzdGF0aWNJbWFnZSIsIkJvb2xlYW4iLCJpbWFnZUZpbGVOYW1lIiwic3BsaXQiLCJwb3AiLCJ0b1RpdGxlQ2FzZSIsInN0ciIsInRvTG93ZXJDYXNlIiwiaSIsImxlbmd0aCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJqb2luIiwiTnVtYmVyIiwiZm9ybWF0IiwiZm9ybWF0UGF0ZXJuIiwibnVtZXJhbCIsImZvcm1hdEZlZXRJbmNoIiwiY2VudGkiLCJmZWV0IiwiTWF0aCIsInJvdW5kIiwiaW5jaGVzIiwidG9GZWV0SW5jaCIsIl8iLCJ0b0ludGVnZXIiLCJidWlsZFF1ZXJ5IiwiZGF0YSIsInByZWZpeFF1ZXJ5IiwicXVlcnkiLCJoYXNPd25Qcm9wZXJ0eSIsInB1c2giLCJlbmNvZGVVUklDb21wb25lbnQiLCJidWlsZFBhcmFtcyIsInByZWZpeFBhcmFtcyIsInJlcGxhY2UiLCJkb2N1bWVudCIsIlN0b3JhZ2UiLCJnZXQiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0IiwidmFsdWUiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiY2hhbmdlQWxpYXMiLCJhbGlhcyIsInJlcGxhY2VTdHJpbmciLCJ0cmltIiwidG9GcmllbmRseVVybCIsInRleHRJbmRleCIsImNyZWF0ZUd1aWQiLCJTNCIsInJhbmRvbSIsInRvU3RyaW5nIiwic3Vic3RyaW5nIiwic3Vic3RyIiwidG9HdWlkIiwibG9nIiwibWVzc2FnZSIsIm9wdGlvbmFsUGFyYW1zIiwiY29uc29sZSIsImxpc3RlbmVycyIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwid2luZG93IiwicHJlZmV0Y2hlZCIsImNhY2hlZE9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiY2IiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwib2JzZXJ2ZXIiLCJnZXRPYnNlcnZlciIsInJvdXRlciIsImVyciIsImhyZWYiLCJ0YXJnZXQiLCJlIiwibm9kZU5hbWUiLCJpc01vZGlmaWVkRXZlbnQiLCJzY3JvbGwiLCJhcyIsInN1Y2Nlc3MiLCJhcmdzIiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwiT2JqZWN0IiwiY3JlYXRlUHJvcEVycm9yIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwic2hhbGxvdyIsInBhc3NIcmVmIiwicHJlZmV0Y2giLCJvcHRpb25hbFByb3BzIiwiaGFzV2FybmVkIiwicCIsInBhdGhuYW1lIiwicmVzb2x2ZWRIcmVmIiwiY2hpbGRFbG0iLCJpc1ByZWZldGNoZWQiLCJjaGlsZCIsIkNoaWxkcmVuIiwiY2hpbGRQcm9wcyIsInJlZiIsImVsIiwic2V0Q2hpbGRFbG0iLCJvbkNsaWNrIiwibGlua0NsaWNrZWQiLCJwcmlvcml0eSIsIkxpbmsiLCJwYXRoIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJwcm9jZXNzIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsIlJvdXRlciIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwibmFtZSIsImFsbCIsIm9uIiwib2ZmIiwiZW1pdCIsImhhbmRsZXIiLCJiYXNlUGF0aCIsImNhbmNlbGxlZCIsInVybCIsImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJoYXNCYXNlUGF0aCIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImZpbmFsVXJsIiwiUEFHRV9MT0FEX0VSUk9SIiwiU3ltYm9sIiwiYWRkQmFzZVBhdGgiLCJyZXNvbHZlSHJlZiIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiY3JlZGVudGlhbHMiLCJyZXMiLCJhdHRlbXB0cyIsImZldGNoUmV0cnkiLCJpc1NlcnZlclJlbmRlciIsIm1hcmtMb2FkaW5nRXJyb3IiLCJjb25zdHJ1Y3RvciIsInJvdXRlIiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93Iiwic3RhdGUiLCJvcHRpb25zIiwic3R5bGVTaGVldHMiLCJfX05fU1NHIiwiaW5pdGlhbFByb3BzIiwiX19OX1NTUCIsIl9fTkVYVF9EQVRBX18iLCJyZWxvYWQiLCJiYWNrIiwicHJlcGFyZVVybEFzIiwiaXNMb2NhbFVSTCIsIlNUIiwicGVyZm9ybWFuY2UiLCJjbGVhbmVkQXMiLCJkZWxCYXNlUGF0aCIsInBhZ2VzIiwiX19yZXdyaXRlcyIsInBhcnNlZCIsIm1ldGhvZCIsInJlc29sdmVkQXMiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsIm1pc3NpbmdQYXJhbXMiLCJwYXJhbSIsImFzUGF0aG5hbWUiLCJyb3V0ZUluZm8iLCJhcHBDb21wIiwiZXJyb3IiLCJjaGFuZ2VTdGF0ZSIsIl9fTiIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJwYWdlIiwiY2FjaGVkUm91dGVJbmZvIiwicmVxdWlyZSIsImlzVmFsaWRFbGVtZW50VHlwZSIsImRhdGFIcmVmIiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImhhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJfcmVzb2x2ZUhyZWYiLCJjbGVhblBhdGhuYW1lIiwicGFyc2VkSHJlZiIsIlByb21pc2UiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJfZ2V0RGF0YSIsImZuIiwiX2dldFN0YXRpY0RhdGEiLCJmZXRjaE5leHREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5Iiwic2xhc2hlZFByb3RvY29scyIsInByb3RvY29sIiwidXJsT2JqIiwiaG9zdCIsImF1dGgiLCJob3N0bmFtZSIsInF1ZXJ5c3RyaW5nIiwiVEVTVF9ST1VURSIsIkRVTU1ZX0JBU0UiLCJyZXNvbHZlZEJhc2UiLCJvcmlnaW4iLCJtYXRjaGVyT3B0aW9ucyIsInNlbnNpdGl2ZSIsImRlbGltaXRlciIsImRlY29kZSIsImN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMiLCJzdHJpY3QiLCJjdXN0b21Sb3V0ZSIsImtleXMiLCJtYXRjaGVyUmVnZXgiLCJwYXRoVG9SZWdleHAiLCJtYXRjaGVyIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicGFyc2VkRGVzdGluYXRpb24iLCJkZXN0aW5hdGlvbiIsImRlc3RRdWVyeSIsImRlc3RQYXRoIiwiZGVzdFBhdGhQYXJhbUtleXMiLCJkZXN0UGF0aFBhcmFtcyIsImRlc3RpbmF0aW9uQ29tcGlsZXIiLCJ2YWxpZGF0ZSIsIkFycmF5Iiwic3RyT3JBcnJheSIsInF1ZXJ5Q29tcGlsZXIiLCJwYXJhbUtleXMiLCJhcHBlbmRQYXJhbXNUb1F1ZXJ5IiwicGFyYW1zIiwic2hvdWxkQWRkQmFzZVBhdGgiLCJuZXdVcmwiLCJlbmNvZGVVUkkiLCJzZWFyY2hQYXJhbXMiLCJyZXN1bHQiLCJpdGVtIiwic2VhcmNoUGFyYW1zTGlzdCIsImN1c3RvbVJvdXRlTWF0Y2hlciIsInJld3JpdGUiLCJkZXN0UmVzIiwicmUiLCJzbHVnTmFtZSIsImciLCJncm91cHMiLCJtIiwib3B0aW9uYWwiLCJyZXBlYXQiLCJzZWdtZW50cyIsIm5vcm1hbGl6ZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJzZWdtZW50IiwicGFyc2VQYXJhbWV0ZXIiLCJwb3MiLCJlc2NhcGVSZWdleCIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJpc05hTiIsInBhcnNlSW50IiwibmFtZWRSZWdleCIsInVzZWQiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJzY3JvbGxUbyIsIk5Qcm9ncmVzcyIsImRvbmUiLCJFUlBBcHAiLCJzdG9yZSIsIkFwcExheW91dCIsIkxheW91dCIsInBlcnNpc3RvciIsInBlcnNpc3RTdG9yZSIsImNyZWF0ZU11aVRoZW1lIiwicHJpbWFyeSIsIm1haW4iLCJzZWNvbmRhcnkiLCJ3aXRoUmVkdXgiLCJhY3Rpb25UeXBlcyIsIlNFVF9EWU5BTUlDX0xPQURJTkciLCJzZXREeW5hbWljTG9hZGluZyIsImxvYWRpbmciLCJ0eXBlIiwiaW5pdGlhbGl6ZVN0YXRlIiwiZHluYW1pY0xvYWRpbmciLCJyZWR1Y2VyIiwiYWN0aW9uIiwiU0VUX0xPQ0FUSU9OUyIsInNldExvY2F0aW9ucyIsImxvY2F0aW9ucyIsIkxPR0lOIiwiU09DSUFMX0xPR0lOIiwiU0FWRV9DT09LSUVfQU5EX1BSRVBBUkVfREFUQSIsIlNBVkVfVE9LRU4iLCJsb2dpbiIsImxvZ2luTW9kYWwiLCJjb21iaW5lUmVkdWNlcnMiLCJkeW5hbWljU3RhdGUiLCJsb2dpblN0YXRlIiwic3lzdGVtc0NvbXBhbnlTdGF0ZSIsImxvY2F0aW9uU3RhdGUiLCJjb21wYW55QmFua1N0YXRlIiwiZXM2cHJvbWlzZSIsInBvbHlmaWxsIiwicm9vdFNhZ2EiLCJmb3JrIiwibG9naW5XYXRjaGVyIiwiY29tcGFueVdhdGNoZXIiLCJjb21wYW55QmFua1dhdGNoZXIiLCJDUkVBVF9DT01QQU5ZIiwiR0VUX0NPTVBBTlkiLCJTRVRfQ09NUEFOWSIsIlVQTE9BRF9MT0dPIiwiR0VUX0NPTVBBTllfTElTVCIsIlNFVF9DT01QQU5ZX0xJU1QiLCJERUxFVEVfQ09NUEFOWSIsIlNFVF9QUklOVEVSIiwiQ0hBTkdFX0NPTVBBTlkiLCJjcmVhdGVDb21wYW55IiwiY3JlYXRlQ29tcGFueU1vZGFsIiwiY2hhbmdlQ29tcGFueSIsImNoYW5nZUNvbXBhbnlNb2RhbCIsImdldENvbXBhbnlMaXN0IiwiZGVsZXRlQ29tcGFueSIsImNvbXBhbnlJZCIsImdldENvbXBhbnkiLCJzZXRDb21wYW55IiwiY29tcGFueSIsInNldENvbXBhbnlMaXN0IiwiY29tcGFueURhdGEiLCJ1cGxvYWRMb2dvIiwiZmlsZSIsInNldFByaW50ZXIiLCJwcmludGVyIiwiaWQiLCJjb21wYW55TmFtZSIsImNvbXBhbnlBZGRyZXNzIiwiY29tcGFueVBob25lIiwiYWRkcmVzc1RvUHJpbnRSZXBvcnQiLCJvcmRlckRvY1ByZWZpeCIsImNvbXBhbnlTdXBwb3J0RW1haWwiLCJuYW1lVG9QcmludFJlcG9ydCIsImNvdW50cnlJZCIsInByb3ZpbmNlSWQiLCJkaXN0cmljdElkIiwid2FyZElkIiwiY29tcGFueUVuZ2xpc2hOYW1lIiwiY29tcGFueVJlZ2lzdHJhdGlvbiIsImNvbXBhbnlGYXgiLCJjb21wYW55SG90bGluZSIsImNvbXBhbnlTYWxlRW1haWwiLCJ3ZWJzaXRlIiwidmlzaWJsZVBPU01vYmlsZUFwcCIsImNvbXBhbnlMb2dvIiwicG9zQ3VzdG9tZXJCaWxsIiwicG9zU2F2ZWRCaWxsIiwicG9zV2FyZWhvdXNlQmlsbCIsInBvc0RlZmF1bHRQcmludGVyIiwic3RhbXBEZWZhdWx0UHJpbnRlciIsIm51bWJlckdyb3VwU2VwYXJhdG9yIiwiYWN0aXZlIiwicGFyZW50SWQiLCJjb21wYW55Q29kZSIsIkNSRUFUX0NPTVBBTllfQkFOSyIsIkdFVF9DT01QQU5ZX0JBTktfSU5GTyIsIlNFVF9DT01QQU5ZX0JBTktfSU5GTyIsIkdFVF9CQU5LX0lORk8iLCJTRVRfQkFOS19JTkZPIiwiR0VUX0JBTktfVFlQRSIsIlNFVF9CQU5LX1RZUEUiLCJjcmVhdGVDb21wYW55QmFuayIsImNyZWF0ZUNvbXBhbnlCYW5rTW9kYWwiLCJnZXRDb21wYW55QmFua0luZm8iLCJnZXRCYW5rSW5mbyIsImJhbmtJZCIsInNldEJhbmtJbmZvIiwiYmFua0luZm8iLCJnZXRCYW5rVHlwZSIsInNldEJhbmtUeXBlIiwiYmFua1R5cGUiLCJzZXRDb21wYW55QmFua0luZm8iLCJjb21wYW55QmFua0luZm8iLCJiYW5rQ29kZSIsImJhbmtOYW1lIiwiYmFua0FkZHJlc3MiLCJiYW5rQWNjb3VudE5hbWUiLCJiYW5rQWNjb3VudE51bWJlciIsImFjY291bnRpbmdDb2RlSWQiLCJwYXlwYWxBY2NvdW50IiwicGF5cGFsTnVtYmVyIiwiY2lmQ29kZSIsImllYkNvZGUiLCJodHRwQ2xpZW50IiwicG9zdCIsInB1dCIsInRha2VMYXRlc3QiLCJjb21wYW55TGlzdCIsImRlbGV0ZSIsImlzRW1wdHkiLCJhY2Nlc3NUb2tlbiIsInJlZnJlc2hUb2tlbiIsImF1dGhvcml6YXRpb25TZXJ2aWNlIiwic2V0Q29va2llcyIsImxvY2F0aW9uIiwic2FnYU1pZGRsZXdhcmUiLCJjcmVhdGVTYWdhTWlkZGxld2FyZSIsImJpbmRNaWRkbGV3YXJlIiwibWlkZGxld2FyZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJjb25maWd1cmVTdG9yZSIsImluaXRpYWxTdGF0ZSIsInBlcnNpc3RSZWR1Y2VyIiwic3RvcmFnZSIsImRlZmF1bHQiLCJwZXJzaXN0Q29uZmlnIiwid2hpdGVsaXN0IiwicGVyc2lzdGVkUmVkdWNlciIsInJvb3RSZWR1Y2VyIiwiY3JlYXRlU3RvcmUiLCJ0aHVua01pZGRsZXdhcmUiLCJzYWdhVGFzayIsInJ1biIsIkJhc2VDb21wb25lbnQiLCJuZXh0UmVkdXhXcmFwcGVyIiwiQXV0aG9yaXphdGlvblNlcnZpY2UiLCJhdXRoVG9rZW4iLCJjb29raWVzIiwiQ29va2llcyIsImF1dGhlbnRpY2F0ZVNldHRpbmdzIiwidG9rZW5OYW1lIiwibWF4QWdlIiwibG9nb3V0IiwicmVtb3ZlIiwicmVtb3ZlSXRlbSIsImF4aW9zIiwiYmFzZVVSTCIsImludGVyY2VwdG9ycyIsInJlcXVlc3QiLCJ1c2UiLCJjb25maWciLCJhdVRva2VuIiwianNDb29raWUiLCJoZWFkZXJzIiwicmVqZWN0IiwicmVzcG9uc2UiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtR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QSx1RDs7Ozs7Ozs7Ozs7QUNBQSx5RDs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSx5RDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSwwRDs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSwwRDs7Ozs7Ozs7Ozs7QUNBQSwwRDs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSw2RDs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSwwRDs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSw0RDs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSw2QyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJpbXBvcnQgeyBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBDb2xsYXBzZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ29sbGFwc2VcIjtcclxuaW1wb3J0IExpc3QgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RcIjtcclxuaW1wb3J0IExpc3RJdGVtIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IEFycm93UmlnaHRJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQXJyb3dSaWdodFwiO1xyXG5pbXBvcnQgQ2FjaGVkSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0NhY2hlZFwiO1xyXG5pbXBvcnQgRXhwYW5kTGVzcyBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0V4cGFuZExlc3NcIjtcclxuaW1wb3J0IEV4cGFuZE1vcmUgZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9FeHBhbmRNb3JlXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXHJcbiAgICBvdmVyZmxvdzogJ2F1dG8nXHJcbiAgfSxcclxuICBuZXN0ZWQ6IHtcclxuICAgIHBhZGRpbmdMZWZ0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gIH0sXHJcbiAgdGl0bGVUZXh0OiB7XHJcbiAgICBmb250RmFtaWx5OiBcIlF1aWNrc2FuZFwiLFxyXG4gICAgZm9udFNpemU6IFwiMTRweFwiLFxyXG4gICAgLy8gZm9udFdlaWdodDogXCJib2xkXCIsXHJcbiAgfSxcclxuICBpdGVtVGV4dDoge1xyXG4gICAgZm9udEZhbWlseTogXCJRdWlja3NhbmRcIixcclxuICAgIGZvbnRTaXplOiBcIjEycHhcIixcclxuICB9LFxyXG59KSk7XHJcblxyXG5mdW5jdGlvbiBOaGFuU3UoKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IFtvcGVuMSwgc2V0T3BlbjFdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtvcGVuMiwgc2V0T3BlbjJdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtvcGVuMywgc2V0T3BlbjNdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtvcGVuNCwgc2V0T3BlbjRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtvcGVuNSwgc2V0T3BlbjVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9IChudW1iZXIpID0+IHtcclxuICAgIG51bWJlciA9PT0gMSAmJiBzZXRPcGVuMSghb3BlbjEpO1xyXG4gICAgbnVtYmVyID09PSAyICYmIHNldE9wZW4yKCFvcGVuMik7XHJcbiAgICBudW1iZXIgPT09IDMgJiYgc2V0T3BlbjMoIW9wZW4zKTtcclxuICAgIG51bWJlciA9PT0gNCAmJiBzZXRPcGVuNCghb3BlbjQpO1xyXG4gICAgbnVtYmVyID09PSA1ICYmIHNldE9wZW41KCFvcGVuNSk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwMCBvdmVyZmxvdy1hdXRvXCI+XHJcbiAgICAgIDxMaXN0XHJcbiAgICAgICAgY29tcG9uZW50PVwibmF2XCJcclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJuZXN0ZWQtbGlzdC1zdWJoZWFkZXJcIlxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fVxyXG4gICAgICA+XHJcbiAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljaygxKX0gY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGVUZXh0fSBzdHlsZT17eyBmb250V2VpZ2h0OiAob3BlbjEgPyAnYm9sZCcgOiAnbm9ybWFsJykgfX0+XHJcbiAgICAgICAgICAgIFF14bqjbiBMw70gTmjDom4gVmnDqm5cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIHtvcGVuMSA/IChcclxuICAgICAgICAgICAgPEV4cGFuZExlc3MgZm9udFNpemU9XCJzbWFsbFwiIGNvbG9yPVwiZGlzYWJsZWRcIiAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8RXhwYW5kTW9yZSBmb250U2l6ZT1cInNtYWxsXCIgY29sb3I9XCJkaXNhYmxlZFwiIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICA8Q29sbGFwc2UgaW49e29wZW4xfSB0aW1lb3V0PVwiYXV0b1wiIHVubW91bnRPbkV4aXQ+XHJcbiAgICAgICAgICA8TGlzdCBjb21wb25lbnQ9XCJkaXZcIiBkaXNhYmxlUGFkZGluZz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9RdWFuVHJpSGVUaG9uZy9QaGFuUXV5ZW5OaGFuVmllbi9RdWFuTHlOaGFuVmllblwiPlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLm5lc3RlZH0+XHJcbiAgICAgICAgICAgICAgICA8QXJyb3dSaWdodEljb24gZm9udFNpemU9XCJzbWFsbFwiIGNvbG9yPVwiZGlzYWJsZWRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW1UZXh0fT5cclxuICAgICAgICAgICAgICAgICAgU1lTMDEwIC0gUXXhuqNuIGzDvSBuaMOibiB2acOqblxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIHsvKiA8TGluayBocmVmPVwiL1F1YW5UcmlIZVRob25nL1RoaWV0TGFwSGVUaG9uZy9QaG9uZ0JhblwiPiAqL31cclxuICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMubmVzdGVkfT5cclxuICAgICAgICAgICAgICA8QXJyb3dSaWdodEljb24gZm9udFNpemU9XCJzbWFsbFwiIGNvbG9yPVwiZGlzYWJsZWRcIiAvPlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtVGV4dH0+XHJcbiAgICAgICAgICAgICAgICBIUk0yMjkgLSBI4bujcCDEkeG7k25nIG5ow6JuIHZpw6puXHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICB7LyogPC9MaW5rPiAqL31cclxuICAgICAgICAgICAgey8qIDxMaW5rIGhyZWY9XCIvUXVhblRyaUhlVGhvbmcvVGhpZXRMYXBIZVRob25nL05nYW5IYW5nXCI+ICovfVxyXG4gICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5uZXN0ZWR9PlxyXG4gICAgICAgICAgICAgIDxBcnJvd1JpZ2h0SWNvbiBmb250U2l6ZT1cInNtYWxsXCIgY29sb3I9XCJkaXNhYmxlZFwiIC8+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW1UZXh0fT5cclxuICAgICAgICAgICAgICAgIEhSTTQwNiAtIFBo4buPbmcgduG6pW4g4bupbmcgdmnDqm5cclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgIHsvKiA8L0xpbms+ICovfVxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1F1YW5UcmlIZVRob25nL1RoaWV0TGFwSGVUaG9uZy9NYXlDaHVcIj5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5uZXN0ZWR9PlxyXG4gICAgICAgICAgICAgICAgPEFycm93UmlnaHRJY29uIGZvbnRTaXplPVwic21hbGxcIiBjb2xvcj1cImRpc2FibGVkXCIgLz5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtVGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgIEhSTTQwNSAtIFRow7RuZyB0aW4g4bupbmcgdmnDqm5cclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICB7LyogPExpbmsgaHJlZj1cIi9RdWFuVHJpSGVUaG9uZy9UaGlldExhcEhlVGhvbmcvUXV5RG9pRG9uVmlUaWVuVGVcIj4gKi99XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLm5lc3RlZH0+XHJcbiAgICAgICAgICAgICAgPEFycm93UmlnaHRJY29uIGZvbnRTaXplPVwic21hbGxcIiBjb2xvcj1cImRpc2FibGVkXCIgLz5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbVRleHR9PlxyXG4gICAgICAgICAgICAgICAgSFJNNDA3IC0gTmdo4buJIHZp4buHY1xyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgey8qIDwvTGluaz4gKi99XHJcbiAgICAgICAgICAgIHsvKiA8TGluayBocmVmPVwiL1F1YW5UcmlIZVRob25nL1RoaWV0TGFwSGVUaG9uZy9OZ2F5TmdoaUNvbmdUeVwiPiAqL31cclxuICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMubmVzdGVkfT5cclxuICAgICAgICAgICAgICA8QXJyb3dSaWdodEljb24gZm9udFNpemU9XCJzbWFsbFwiIGNvbG9yPVwiZGlzYWJsZWRcIiAvPlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtVGV4dH0+XHJcbiAgICAgICAgICAgICAgICBTWVMwMTUgLSBHaWFvIGThu4tjaCBuZ8aw4budaSBkw7luZ1xyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgey8qIDwvTGluaz4gKi99XHJcbiAgICAgICAgICAgIHsvKiA8TGluayBocmVmPVwiL1F1YW5UcmlIZVRob25nL1RoaWV0TGFwSGVUaG9uZy9OZ2F5TmdoaUNvbmdUeVwiPiAqL31cclxuICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMubmVzdGVkfT5cclxuICAgICAgICAgICAgICA8QXJyb3dSaWdodEljb24gZm9udFNpemU9XCJzbWFsbFwiIGNvbG9yPVwiZGlzYWJsZWRcIiAvPlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtVGV4dH0+XHJcbiAgICAgICAgICAgICAgICBIUk0xNjUgLSBLaeG7g20gdG/DoW5cclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgIHsvKiA8L0xpbms+ICovfVxyXG4gICAgICAgICAgICB7LyogPExpbmsgaHJlZj1cIi9RdWFuVHJpSGVUaG9uZy9UaGlldExhcEhlVGhvbmcvTmdheU5naGlDb25nVHlcIj4gKi99XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLm5lc3RlZH0+XHJcbiAgICAgICAgICAgICAgPEFycm93UmlnaHRJY29uIGZvbnRTaXplPVwic21hbGxcIiBjb2xvcj1cImRpc2FibGVkXCIgLz5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbVRleHR9PlxyXG4gICAgICAgICAgICAgICAgTUlTMDUwIC0gS1BJIG5ow6JuIHZpw6puXHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICB7LyogPC9MaW5rPiAqL31cclxuICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICA8L0NvbGxhcHNlPlxyXG4gICAgICAgIDxMaXN0SXRlbSBidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soMil9IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxyXG5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZVRleHR9IHN0eWxlPXt7IGZvbnRXZWlnaHQ6IChvcGVuMiA/ICdib2xkJyA6ICdub3JtYWwnKSB9fT5cclxuICAgICAgICAgICAgQ2jhuqVtIEPDtG5nXHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICB7b3BlbjIgPyAoXHJcbiAgICAgICAgICAgIDxFeHBhbmRMZXNzIGZvbnRTaXplPVwic21hbGxcIiBjb2xvcj1cImRpc2FibGVkXCIgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPEV4cGFuZE1vcmUgZm9udFNpemU9XCJzbWFsbFwiIGNvbG9yPVwiZGlzYWJsZWRcIiAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgPENvbGxhcHNlIGluPXtvcGVuMn0gdGltZW91dD1cImF1dG9cIiB1bm1vdW50T25FeGl0PlxyXG4gICAgICAgICAgPExpc3QgY29tcG9uZW50PVwiZGl2XCIgZGlzYWJsZVBhZGRpbmc+XHJcbiAgICAgICAgICAgIHsvKiA8TGluayBocmVmPVwiL1F1YW5UcmlIZVRob25nL1RoaWV0TGFwSGVUaG9uZy9OZ2F5TmdoaUNvbmdUeVwiPiAqL31cclxuICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMubmVzdGVkfT5cclxuICAgICAgICAgICAgICA8QXJyb3dSaWdodEljb24gZm9udFNpemU9XCJzbWFsbFwiIGNvbG9yPVwiZGlzYWJsZWRcIiAvPlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtVGV4dH0+XHJcbiAgICAgICAgICAgICAgICBIUk0xNjAgLSBDaOG6pW0gY8O0bmcgbeG7l2kgbmfDoHlcclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgIHsvKiA8L0xpbms+ICovfVxyXG4gICAgICAgICAgICB7LyogPExpbmsgaHJlZj1cIi9RdWFuVHJpSGVUaG9uZy9UaGlldExhcEhlVGhvbmcvTmdheU5naGlDb25nVHlcIj4gKi99XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLm5lc3RlZH0+XHJcbiAgICAgICAgICAgICAgPEFycm93UmlnaHRJY29uIGZvbnRTaXplPVwic21hbGxcIiBjb2xvcj1cImRpc2FibGVkXCIgLz5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbVRleHR9PlxyXG4gICAgICAgICAgICAgICAgSFJNMjA2IC0gQuG6o25nIGPDtG5nXHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICB7LyogPC9MaW5rPiAqL31cclxuICAgICAgICAgICAgey8qIDxMaW5rIGhyZWY9XCIvUXVhblRyaUhlVGhvbmcvVGhpZXRMYXBIZVRob25nL05nYXlOZ2hpQ29uZ1R5XCI+ICovfVxyXG4gICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5uZXN0ZWR9PlxyXG4gICAgICAgICAgICAgIDxBcnJvd1JpZ2h0SWNvbiBmb250U2l6ZT1cInNtYWxsXCIgY29sb3I9XCJkaXNhYmxlZFwiIC8+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW1UZXh0fT5cclxuICAgICAgICAgICAgICAgIEhSTTIwNyAtIFF14bqjbiBsw70gbmjDom4gdmnDqm4gbmdo4buJIHZp4buHY1xyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgey8qIDwvTGluaz4gKi99XHJcbiAgICAgICAgICAgIHsvKiA8TGluayBocmVmPVwiL1F1YW5UcmlIZVRob25nL1RoaWV0TGFwSGVUaG9uZy9OZ2F5TmdoaUNvbmdUeVwiPiAqL31cclxuICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMubmVzdGVkfT5cclxuICAgICAgICAgICAgICA8QXJyb3dSaWdodEljb24gZm9udFNpemU9XCJzbWFsbFwiIGNvbG9yPVwiZGlzYWJsZWRcIiAvPlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtVGV4dH0+XHJcbiAgICAgICAgICAgICAgICBIUk00MDEgLSBRdeG6o24gbMO9IHBow6lwIG7Eg21cclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgIHsvKiA8L0xpbms+ICovfVxyXG4gICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgIDwvQ29sbGFwc2U+XHJcbiAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljaygzKX0gY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGVUZXh0fSBzdHlsZT17eyBmb250V2VpZ2h0OiAob3BlbjMgPyAnYm9sZCcgOiAnbm9ybWFsJykgfX0+XHJcbiAgICAgICAgICAgIEzGsMahbmdcclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIHtvcGVuMyA/IChcclxuICAgICAgICAgICAgPEV4cGFuZExlc3MgZm9udFNpemU9XCJzbWFsbFwiIGNvbG9yPVwiZGlzYWJsZWRcIiAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8RXhwYW5kTW9yZSBmb250U2l6ZT1cInNtYWxsXCIgY29sb3I9XCJkaXNhYmxlZFwiIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICA8Q29sbGFwc2UgaW49e29wZW4zfSB0aW1lb3V0PVwiYXV0b1wiIHVubW91bnRPbkV4aXQ+XHJcbiAgICAgICAgICA8TGlzdCBjb21wb25lbnQ9XCJkaXZcIiBkaXNhYmxlUGFkZGluZz5cclxuICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMubmVzdGVkfT5cclxuICAgICAgICAgICAgICA8QXJyb3dSaWdodEljb24gZm9udFNpemU9XCJzbWFsbFwiIGNvbG9yPVwiZGlzYWJsZWRcIiAvPlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtVGV4dH0+XHJcbiAgICAgICAgICAgICAgICBTWVM1MDQgLSBDaOG7iSDEkeG7i25oIG5ow6JuIHZpw6puIHbDoG8gcGjDsm5nIGJhblxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMubmVzdGVkfT5cclxuICAgICAgICAgICAgICA8QXJyb3dSaWdodEljb24gZm9udFNpemU9XCJzbWFsbFwiIGNvbG9yPVwiZGlzYWJsZWRcIiAvPlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtVGV4dH0+XHJcbiAgICAgICAgICAgICAgICBTWVM1MDMgLSBYZW0ga+G6v3QgY+G6pXUgY+G7p2EgZG9hbmggbmdoaeG7h3BcclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgPC9Db2xsYXBzZT5cclxuICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKDQpfSBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZVRleHR9IHN0eWxlPXt7IGZvbnRXZWlnaHQ6IChvcGVuNCA/ICdib2xkJyA6ICdub3JtYWwnKSB9fT5cclxuICAgICAgICAgICAgVGhp4bq/dCBs4bqtcCBtw6MgaOG7hyB0aOG7kW5nXHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICB7b3BlbjQgPyAoXHJcbiAgICAgICAgICAgIDxFeHBhbmRMZXNzIGZvbnRTaXplPVwic21hbGxcIiBjb2xvcj1cImRpc2FibGVkXCIgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPEV4cGFuZE1vcmUgZm9udFNpemU9XCJzbWFsbFwiIGNvbG9yPVwiZGlzYWJsZWRcIiAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgPENvbGxhcHNlIGluPXtvcGVuNH0gdGltZW91dD1cImF1dG9cIiB1bm1vdW50T25FeGl0PlxyXG4gICAgICAgICAgPExpc3QgY29tcG9uZW50PVwiZGl2XCIgZGlzYWJsZVBhZGRpbmc+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLm5lc3RlZH0+XHJcbiAgICAgICAgICAgICAgPEFycm93UmlnaHRJY29uIGZvbnRTaXplPVwic21hbGxcIiBjb2xvcj1cImRpc2FibGVkXCIgLz5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbVRleHR9PlxyXG4gICAgICAgICAgICAgICAgU1lTMzAyIC0gTcOjIGjhu4cgdGjhu5FuZyBjaMOtbmhcclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLm5lc3RlZH0+XHJcbiAgICAgICAgICAgICAgPEFycm93UmlnaHRJY29uIGZvbnRTaXplPVwic21hbGxcIiBjb2xvcj1cImRpc2FibGVkXCIgLz5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbVRleHR9PlxyXG4gICAgICAgICAgICAgICAgU1lTNTAxIC0gVOG6oW8gbcOjIGNo4bq3blxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMubmVzdGVkfT5cclxuICAgICAgICAgICAgICA8QXJyb3dSaWdodEljb24gZm9udFNpemU9XCJzbWFsbFwiIGNvbG9yPVwiZGlzYWJsZWRcIiAvPlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtVGV4dH0+XHJcbiAgICAgICAgICAgICAgICBTWVM2MDEgLSBU4bqhbyBtw6MgcGjDrVxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMubmVzdGVkfT5cclxuICAgICAgICAgICAgICA8QXJyb3dSaWdodEljb24gZm9udFNpemU9XCJzbWFsbFwiIGNvbG9yPVwiZGlzYWJsZWRcIiAvPlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtVGV4dH0+XHJcbiAgICAgICAgICAgICAgICBTWVM2MDIgLSBO4buZaSBkdW5nIHBow61cclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLm5lc3RlZH0+XHJcbiAgICAgICAgICAgICAgPEFycm93UmlnaHRJY29uIGZvbnRTaXplPVwic21hbGxcIiBjb2xvcj1cImRpc2FibGVkXCIgLz5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbVRleHR9PlxyXG4gICAgICAgICAgICAgICAgU1lTNTAyIC0gVGhp4bq/dCBs4bqtcCBs4bubcCBuZ8aw4budaSBkw7luZyDEkWMgeMOzYSBzdG9wXHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgIDwvQ29sbGFwc2U+XHJcbiAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayg1KX0gY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGVUZXh0fSBzdHlsZT17eyBmb250V2VpZ2h0OiAob3BlbjUgPyAnYm9sZCcgOiAnbm9ybWFsJykgfX0+XHJcbiAgICAgICAgICAgIEjhu5cgdHLhu6NcclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuXHJcbiAgICAgICAgPC9MaXN0SXRlbT5cclxuXHJcbiAgICAgIDwvTGlzdD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5oYW5TdTtcclxuIiwiaW1wb3J0IHsgVHlwb2dyYXBoeSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgQ29sbGFwc2UgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NvbGxhcHNlXCI7XHJcbmltcG9ydCBMaXN0IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0XCI7XHJcbmltcG9ydCBMaXN0SXRlbSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1cIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBBcnJvd1JpZ2h0SWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93UmlnaHRcIjtcclxuaW1wb3J0IENhY2hlZEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9DYWNoZWRcIjtcclxuaW1wb3J0IEV4cGFuZExlc3MgZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9FeHBhbmRMZXNzXCI7XHJcbmltcG9ydCBFeHBhbmRNb3JlIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRXhwYW5kTW9yZVwiO1xyXG5pbXBvcnQgSGVscEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0hlbHAnO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXHJcbiAgICBvdmVyZmxvdzogJ2F1dG8nXHJcbiAgfSxcclxuICBuZXN0ZWQ6IHtcclxuICAgIHBhZGRpbmdMZWZ0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gIH0sXHJcbiAgdGl0bGVUZXh0OiB7XHJcbiAgICBmb250RmFtaWx5OiBcIlF1aWNrc2FuZFwiLFxyXG4gICAgZm9udFNpemU6IFwiMTRweFwiLFxyXG4gICAgLy8gZm9udFdlaWdodDogXCJib2xkXCIsXHJcbiAgfSxcclxuICBpdGVtVGV4dDoge1xyXG4gICAgZm9udEZhbWlseTogXCJRdWlja3NhbmRcIixcclxuICAgIGZvbnRTaXplOiBcIjEycHhcIixcclxuICB9LFxyXG59KSk7XHJcblxyXG5mdW5jdGlvbiBTeXN0ZW1zTWFuYWdlbWVudCgpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgW29wZW4xLCBzZXRPcGVuMV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW29wZW4yLCBzZXRPcGVuMl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW29wZW4zLCBzZXRPcGVuM10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW29wZW40LCBzZXRPcGVuNF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW29wZW41LCBzZXRPcGVuNV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW29wZW42LCBzZXRPcGVuNl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW29wZW43LCBzZXRPcGVuN10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKG51bWJlcikgPT4ge1xyXG4gICAgbnVtYmVyID09PSAxICYmIHNldE9wZW4xKCFvcGVuMSk7XHJcbiAgICBudW1iZXIgPT09IDIgJiYgc2V0T3BlbjIoIW9wZW4yKTtcclxuICAgIG51bWJlciA9PT0gMyAmJiBzZXRPcGVuMyghb3BlbjMpO1xyXG4gICAgbnVtYmVyID09PSA0ICYmIHNldE9wZW40KCFvcGVuNCk7XHJcbiAgICBudW1iZXIgPT09IDUgJiYgc2V0T3BlbjUoIW9wZW41KTtcclxuICAgIG51bWJlciA9PT0gNiAmJiBzZXRPcGVuNighb3BlbjYpO1xyXG4gICAgbnVtYmVyID09PSA3ICYmIHNldE9wZW43KCFvcGVuNyk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwMFwiPlxyXG4gICAgICA8TGlzdFxyXG4gICAgICAgIGNvbXBvbmVudD1cIm5hdlwiXHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibmVzdGVkLWxpc3Qtc3ViaGVhZGVyXCJcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH1cclxuICAgICAgPlxyXG4gICAgICAgIDxMaXN0SXRlbSBidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soMSl9IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlVGV4dH0gc3R5bGU9e3sgZm9udFdlaWdodDogKG9wZW4xID8gJ2JvbGQnIDogJ25vcm1hbCcpIH19PlxyXG4gICAgICAgICAgICBUaGnhur90IEzhuq1wIEjhu4cgVGjhu5FuZ1xyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAge29wZW4xID8gKFxyXG4gICAgICAgICAgICA8RXhwYW5kTGVzcyBmb250U2l6ZT1cInNtYWxsXCIgY29sb3I9XCJkaXNhYmxlZFwiIC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxFeHBhbmRNb3JlIGZvbnRTaXplPVwic21hbGxcIiBjb2xvcj1cImRpc2FibGVkXCIgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgIDxDb2xsYXBzZSBpbj17b3BlbjF9IHRpbWVvdXQ9XCJhdXRvXCIgdW5tb3VudE9uRXhpdD5cclxuICAgICAgICAgIDxMaXN0IGNvbXBvbmVudD1cImRpdlwiIGRpc2FibGVQYWRkaW5nPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1N5c3RlbXNNYW5hZ2VtZW50L1N5c3RlbXNDb250cm9sL0NvbXBhbnlcIj5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5uZXN0ZWR9PlxyXG4gICAgICAgICAgICAgICAgPEFycm93UmlnaHRJY29uIGZvbnRTaXplPVwic21hbGxcIiBjb2xvcj1cImRpc2FibGVkXCIgLz5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtVGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgIFNZUzAwNSAtIEPDtG5nIHR5IC8gQ2hpIG5ow6FuaFxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvU3lzdGVtc01hbmFnZW1lbnQvU3lzdGVtc0NvbnRyb2wvRGVwYXJ0bWVudFwiPlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLm5lc3RlZH0+XHJcbiAgICAgICAgICAgICAgICA8QXJyb3dSaWdodEljb24gZm9udFNpemU9XCJzbWFsbFwiIGNvbG9yPVwiZGlzYWJsZWRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW1UZXh0fT5cclxuICAgICAgICAgICAgICAgICAgU1lTMDA2IC0gUGjDsm5nIGJhblxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvU3lzdGVtc01hbmFnZW1lbnQvU3lzdGVtc0NvbnRyb2wvQmFua1wiPlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLm5lc3RlZH0+XHJcbiAgICAgICAgICAgICAgICA8QXJyb3dSaWdodEljb24gZm9udFNpemU9XCJzbWFsbFwiIGNvbG9yPVwiZGlzYWJsZWRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW1UZXh0fT5cclxuICAgICAgICAgICAgICAgICAgU1lTNTA2IC0gTmfDom4gaMOgbmdcclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1N5c3RlbXNNYW5hZ2VtZW50L1N5c3RlbXNDb250cm9sL1wiPlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLm5lc3RlZH0+XHJcbiAgICAgICAgICAgICAgICA8QXJyb3dSaWdodEljb24gZm9udFNpemU9XCJzbWFsbFwiIGNvbG9yPVwiZGlzYWJsZWRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW1UZXh0fT5cclxuICAgICAgICAgICAgICAgICAgU1lTMDIyIC0gTcOheSBjaOG7p1xyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvU3lzdGVtc01hbmFnZW1lbnQvU3lzdGVtc0NvbnRyb2wvXCI+XHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMubmVzdGVkfT5cclxuICAgICAgICAgICAgICAgIDxBcnJvd1JpZ2h0SWNvbiBmb250U2l6ZT1cInNtYWxsXCIgY29sb3I9XCJkaXNhYmxlZFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbVRleHR9PlxyXG4gICAgICAgICAgICAgICAgICBTWVM1MDkgLSBRdXkgxJHhu49pIMSRxqFuIHbhu4sgdGnhu4FuIHThu4dcclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1N5c3RlbXNNYW5hZ2VtZW50L1N5c3RlbXNDb250cm9sL1wiPlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLm5lc3RlZH0+XHJcbiAgICAgICAgICAgICAgICA8QXJyb3dSaWdodEljb24gZm9udFNpemU9XCJzbWFsbFwiIGNvbG9yPVwiZGlzYWJsZWRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW1UZXh0fT5cclxuICAgICAgICAgICAgICAgICAgU1lTNTIwIC0gTmfDoHkgbmdo4buJIGPhu6dhIGPDtG5nIHR5XHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICA8L0NvbGxhcHNlPlxyXG4gICAgICAgIDxMaXN0SXRlbSBidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soMil9IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxyXG5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZVRleHR9IHN0eWxlPXt7IGZvbnRXZWlnaHQ6IChvcGVuMiA/ICdib2xkJyA6ICdub3JtYWwnKSB9fT5cclxuICAgICAgICAgICAgUGjDom4gcXV54buBbiBuaMOibiB2acOqblxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAge29wZW4yID8gKFxyXG4gICAgICAgICAgICA8RXhwYW5kTGVzcyBmb250U2l6ZT1cInNtYWxsXCIgY29sb3I9XCJkaXNhYmxlZFwiIC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxFeHBhbmRNb3JlIGZvbnRTaXplPVwic21hbGxcIiBjb2xvcj1cImRpc2FibGVkXCIgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgIDxDb2xsYXBzZSBpbj17b3BlbjJ9IHRpbWVvdXQ9XCJhdXRvXCIgdW5tb3VudE9uRXhpdD5cclxuICAgICAgICAgIDxMaXN0IGNvbXBvbmVudD1cImRpdlwiIGRpc2FibGVQYWRkaW5nPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1N5c3RlbXNNYW5hZ2VtZW50L1N0YWZmL1N0YWZmTWFuYWdlbWVudFwiPlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLm5lc3RlZH0+XHJcbiAgICAgICAgICAgICAgICA8QXJyb3dSaWdodEljb24gZm9udFNpemU9XCJzbWFsbFwiIGNvbG9yPVwiZGlzYWJsZWRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW1UZXh0fT5cclxuICAgICAgICAgICAgICAgICAgU1lTMDEwIC0gUXXhuqNuIGzDvSBuaMOibiB2acOqblxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLm5lc3RlZH0+XHJcbiAgICAgICAgICAgICAgPEFycm93UmlnaHRJY29uIGZvbnRTaXplPVwic21hbGxcIiBjb2xvcj1cImRpc2FibGVkXCIgLz5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbVRleHR9PlxyXG4gICAgICAgICAgICAgICAgU1lTMDA5IC0gTOG7m3AgbmfGsOG7nWkgZMO5bmdcclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLm5lc3RlZH0+XHJcbiAgICAgICAgICAgICAgPEFycm93UmlnaHRJY29uIGZvbnRTaXplPVwic21hbGxcIiBjb2xvcj1cImRpc2FibGVkXCIgLz5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbVRleHR9PlxyXG4gICAgICAgICAgICAgICAgU1lTMDA4IC0gVGhp4bq/dCBs4bqtcCBuaMOibiB2acOqbiB2w6BvIGzhu5twIG5nxrDhu51pIGTDuW5nXHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgIDwvQ29sbGFwc2U+XHJcbiAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljaygzKX0gY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGVUZXh0fSBzdHlsZT17eyBmb250V2VpZ2h0OiAob3BlbjMgPyAnYm9sZCcgOiAnbm9ybWFsJykgfX0+XHJcbiAgICAgICAgICAgIFBow6JuIHF1eeG7gW4gZOG7ryBsaeG7h3VcclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIHtvcGVuMyA/IChcclxuICAgICAgICAgICAgPEV4cGFuZExlc3MgZm9udFNpemU9XCJzbWFsbFwiIGNvbG9yPVwiZGlzYWJsZWRcIiAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8RXhwYW5kTW9yZSBmb250U2l6ZT1cInNtYWxsXCIgY29sb3I9XCJkaXNhYmxlZFwiIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICA8Q29sbGFwc2UgaW49e29wZW4zfSB0aW1lb3V0PVwiYXV0b1wiIHVubW91bnRPbkV4aXQ+XHJcbiAgICAgICAgICA8TGlzdCBjb21wb25lbnQ9XCJkaXZcIiBkaXNhYmxlUGFkZGluZz5cclxuICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMubmVzdGVkfT5cclxuICAgICAgICAgICAgICA8QXJyb3dSaWdodEljb24gZm9udFNpemU9XCJzbWFsbFwiIGNvbG9yPVwiZGlzYWJsZWRcIiAvPlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtVGV4dH0+XHJcbiAgICAgICAgICAgICAgICBTWVM1MDQgLSBDaOG7iSDEkeG7i25oIG5ow6JuIHZpw6puIHbDoG8gcGjDsm5nIGJhblxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMubmVzdGVkfT5cclxuICAgICAgICAgICAgICA8QXJyb3dSaWdodEljb24gZm9udFNpemU9XCJzbWFsbFwiIGNvbG9yPVwiZGlzYWJsZWRcIiAvPlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtVGV4dH0+XHJcbiAgICAgICAgICAgICAgICBTWVM1MDMgLSBYZW0ga+G6v3QgY+G6pXUgY+G7p2EgZG9hbmggbmdoaeG7h3BcclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgPC9Db2xsYXBzZT5cclxuICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKDQpfSBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZVRleHR9IHN0eWxlPXt7IGZvbnRXZWlnaHQ6IChvcGVuNCA/ICdib2xkJyA6ICdub3JtYWwnKSB9fT5cclxuICAgICAgICAgICAgVGhp4bq/dCBs4bqtcCBtw6MgaOG7hyB0aOG7kW5nXHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICB7b3BlbjQgPyAoXHJcbiAgICAgICAgICAgIDxFeHBhbmRMZXNzIGZvbnRTaXplPVwic21hbGxcIiBjb2xvcj1cImRpc2FibGVkXCIgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPEV4cGFuZE1vcmUgZm9udFNpemU9XCJzbWFsbFwiIGNvbG9yPVwiZGlzYWJsZWRcIiAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgPENvbGxhcHNlIGluPXtvcGVuNH0gdGltZW91dD1cImF1dG9cIiB1bm1vdW50T25FeGl0PlxyXG4gICAgICAgICAgPExpc3QgY29tcG9uZW50PVwiZGl2XCIgZGlzYWJsZVBhZGRpbmc+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLm5lc3RlZH0+XHJcbiAgICAgICAgICAgICAgPEFycm93UmlnaHRJY29uIGZvbnRTaXplPVwic21hbGxcIiBjb2xvcj1cImRpc2FibGVkXCIgLz5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbVRleHR9PlxyXG4gICAgICAgICAgICAgICAgU1lTMzAyIC0gTcOjIGjhu4cgdGjhu5FuZyBjaMOtbmhcclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLm5lc3RlZH0+XHJcbiAgICAgICAgICAgICAgPEFycm93UmlnaHRJY29uIGZvbnRTaXplPVwic21hbGxcIiBjb2xvcj1cImRpc2FibGVkXCIgLz5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbVRleHR9PlxyXG4gICAgICAgICAgICAgICAgU1lTNTAxIC0gVOG6oW8gbcOjIGNo4bq3blxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMubmVzdGVkfT5cclxuICAgICAgICAgICAgICA8QXJyb3dSaWdodEljb24gZm9udFNpemU9XCJzbWFsbFwiIGNvbG9yPVwiZGlzYWJsZWRcIiAvPlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtVGV4dH0+XHJcbiAgICAgICAgICAgICAgICBTWVM2MDEgLSBU4bqhbyBtw6MgcGjDrVxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMubmVzdGVkfT5cclxuICAgICAgICAgICAgICA8QXJyb3dSaWdodEljb24gZm9udFNpemU9XCJzbWFsbFwiIGNvbG9yPVwiZGlzYWJsZWRcIiAvPlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtVGV4dH0+XHJcbiAgICAgICAgICAgICAgICBTWVM2MDIgLSBO4buZaSBkdW5nIHBow61cclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLm5lc3RlZH0+XHJcbiAgICAgICAgICAgICAgPEFycm93UmlnaHRJY29uIGZvbnRTaXplPVwic21hbGxcIiBjb2xvcj1cImRpc2FibGVkXCIgLz5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbVRleHR9PlxyXG4gICAgICAgICAgICAgICAgU1lTNTAyIC0gVGhp4bq/dCBs4bqtcCBs4bubcCBuZ8aw4budaSBkw7luZyDEkWMgeMOzYSBzdG9wXHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgIDwvQ29sbGFwc2U+XHJcbiAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayg1KX0gY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGVUZXh0fSBzdHlsZT17eyBmb250V2VpZ2h0OiAob3BlbjUgPyAnYm9sZCcgOiAnbm9ybWFsJykgfX0+XHJcbiAgICAgICAgICAgIFRp4buHbiDDrWNoXHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICB7b3BlbjUgPyAoXHJcbiAgICAgICAgICAgIDxFeHBhbmRMZXNzIGZvbnRTaXplPVwic21hbGxcIiBjb2xvcj1cImRpc2FibGVkXCIgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPEV4cGFuZE1vcmUgZm9udFNpemU9XCJzbWFsbFwiIGNvbG9yPVwiZGlzYWJsZWRcIiAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgPENvbGxhcHNlIGluPXtvcGVuNX0gdGltZW91dD1cImF1dG9cIiB1bm1vdW50T25FeGl0PlxyXG4gICAgICAgICAgPExpc3QgY29tcG9uZW50PVwiZGl2XCIgZGlzYWJsZVBhZGRpbmc+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLm5lc3RlZH0+XHJcbiAgICAgICAgICAgICAgPEFycm93UmlnaHRJY29uIGZvbnRTaXplPVwic21hbGxcIiBjb2xvcj1cImRpc2FibGVkXCIgLz5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbVRleHR9PlxyXG4gICAgICAgICAgICAgICAgU1lTNjAwIC0gROG7i2NoIG5nw7RuIG5n4buvXHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5uZXN0ZWR9PlxyXG4gICAgICAgICAgICAgIDxBcnJvd1JpZ2h0SWNvbiBmb250U2l6ZT1cInNtYWxsXCIgY29sb3I9XCJkaXNhYmxlZFwiIC8+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW1UZXh0fT5cclxuICAgICAgICAgICAgICAgIFNZUzcwMyAtIFThuqFvIFRow6BuaCBwaOG7kVxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMubmVzdGVkfT5cclxuICAgICAgICAgICAgICA8QXJyb3dSaWdodEljb24gZm9udFNpemU9XCJzbWFsbFwiIGNvbG9yPVwiZGlzYWJsZWRcIiAvPlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtVGV4dH0+XHJcbiAgICAgICAgICAgICAgICBTWVM3MDQgLSBU4bqhbyBRdeG6rW4sIEh1eeG7h25cclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLm5lc3RlZH0+XHJcbiAgICAgICAgICAgICAgPEFycm93UmlnaHRJY29uIGZvbnRTaXplPVwic21hbGxcIiBjb2xvcj1cImRpc2FibGVkXCIgLz5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbVRleHR9PlxyXG4gICAgICAgICAgICAgICAgU1lTNzA1IC0gVOG6oW8gUGjGsOG7nW5nLCBYw6NcclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLm5lc3RlZH0+XHJcbiAgICAgICAgICAgICAgPEFycm93UmlnaHRJY29uIGZvbnRTaXplPVwic21hbGxcIiBjb2xvcj1cImRpc2FibGVkXCIgLz5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbVRleHR9PlxyXG4gICAgICAgICAgICAgICAgU1lTMDI1IC0gS2nhu4NtIHRyYSBob+G6oXQgxJHhu5luZ1xyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMubmVzdGVkfT5cclxuICAgICAgICAgICAgICA8QXJyb3dSaWdodEljb24gZm9udFNpemU9XCJzbWFsbFwiIGNvbG9yPVwiZGlzYWJsZWRcIiAvPlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtVGV4dH0+XHJcbiAgICAgICAgICAgICAgICBTWVMwMjAgLSBUaGnhur90IGzhuq1wIGhv4bqhdCDEkeG7mW5nIG5nxrDhu51pIGTDuW5nXHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5uZXN0ZWR9PlxyXG4gICAgICAgICAgICAgIDxBcnJvd1JpZ2h0SWNvbiBmb250U2l6ZT1cInNtYWxsXCIgY29sb3I9XCJkaXNhYmxlZFwiIC8+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW1UZXh0fT5cclxuICAgICAgICAgICAgICAgIFNZUzAxMiAtIFRoYXkgxJHhu5VpIG3huq10IGto4bqpdVxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMubmVzdGVkfT5cclxuICAgICAgICAgICAgICA8QXJyb3dSaWdodEljb24gZm9udFNpemU9XCJzbWFsbFwiIGNvbG9yPVwiZGlzYWJsZWRcIiAvPlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtVGV4dH0+XHJcbiAgICAgICAgICAgICAgICBTWVMxNTAgLSBMb2NhdGlvbiBzZXR0aW5nXHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgIDwvQ29sbGFwc2U+XHJcbiAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayg2KX0gY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGVUZXh0fSBzdHlsZT17eyBmb250V2VpZ2h0OiAob3BlbjYgPyAnYm9sZCcgOiAnbm9ybWFsJykgfX0+XHJcbiAgICAgICAgICAgIFRow7RuZyB0aW4gaOG7hyB0aOG7kW5nXHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICB7b3BlbjYgPyAoXHJcbiAgICAgICAgICAgIDxFeHBhbmRMZXNzIGZvbnRTaXplPVwic21hbGxcIiBjb2xvcj1cImRpc2FibGVkXCIgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPEV4cGFuZE1vcmUgZm9udFNpemU9XCJzbWFsbFwiIGNvbG9yPVwiZGlzYWJsZWRcIiAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgPENvbGxhcHNlIGluPXtvcGVuNn0gdGltZW91dD1cImF1dG9cIiB1bm1vdW50T25FeGl0PlxyXG4gICAgICAgICAgPExpc3QgY29tcG9uZW50PVwiZGl2XCIgZGlzYWJsZVBhZGRpbmc+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLm5lc3RlZH0+XHJcbiAgICAgICAgICAgICAgPEFycm93UmlnaHRJY29uIGZvbnRTaXplPVwic21hbGxcIiBjb2xvcj1cImRpc2FibGVkXCIgLz5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbVRleHR9PlxyXG4gICAgICAgICAgICAgICAgU1lTODExIC0gR2hpIGNow7ogcGjDoXQgaMOgbmggdMOtbmggbsSDbmcgbeG7m2lcclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLm5lc3RlZH0+XHJcbiAgICAgICAgICAgICAgPEFycm93UmlnaHRJY29uIGZvbnRTaXplPVwic21hbGxcIiBjb2xvcj1cImRpc2FibGVkXCIgLz5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbVRleHR9PlxyXG4gICAgICAgICAgICAgICAgU1lTODEyIC0gUXV5IHRyw6xuaCBjw7RuZyB0eVxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMubmVzdGVkfT5cclxuICAgICAgICAgICAgICA8QXJyb3dSaWdodEljb24gZm9udFNpemU9XCJzbWFsbFwiIGNvbG9yPVwiZGlzYWJsZWRcIiAvPlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtVGV4dH0+XHJcbiAgICAgICAgICAgICAgICAtTGljZW5zZSBJbmZvcm1hdGlvblxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMubmVzdGVkfT5cclxuICAgICAgICAgICAgICA8QXJyb3dSaWdodEljb24gZm9udFNpemU9XCJzbWFsbFwiIGNvbG9yPVwiZGlzYWJsZWRcIiAvPlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtVGV4dH0+XHJcbiAgICAgICAgICAgICAgICBTWVM4ODggLSBTeXN0ZW0gSW50ZXJncml0eSBNYW5hZ2VtZW50XHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgIDwvQ29sbGFwc2U+XHJcbiAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZVRleHR9ID5cclxuICAgICAgICAgICAgQ+G6rXAgbmjhuq10IG3hu5tpXHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8Q2FjaGVkSWNvbiBzdHlsZT17eyBjb2xvcjogJyM0RUVGQTInIH19IC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlVGV4dH0gPlxyXG4gICAgICAgICAgICBI4buXIHRy4bujXHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8SGVscEljb24gc3R5bGU9e3sgY29sb3I6ICcjMkZBQUZDJyB9fSAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgIDwvTGlzdD5cclxuICAgIDwvZGl2PlxyXG5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTeXN0ZW1zTWFuYWdlbWVudDtcclxuIiwiaW1wb3J0IHsgQmFkZ2UsIEljb25CdXR0b24gfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU2Nyb2xsYmFycyBmcm9tICdyZWFjdC1jdXN0b20tc2Nyb2xsYmFycyc7XHJcbmltcG9ydCBOaGFuU3UgZnJvbSBcIi4vTmhhblN1L05oYW5TdVwiO1xyXG5pbXBvcnQgU3lzdGVtc01hbmFnZW1lbnQgZnJvbSBcIi4vU3lzdGVtc01hbmFnZW1lbnQvU3lzdGVtc01hbmFnZW1lbnRcIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gIHJvb3Q6IHtcclxuICAgIG92ZXJmbG93OiAnYXV0bydcclxuICB9LFxyXG4gIHRpdGxlOiB7XHJcbiAgICBmb250RmFtaWx5OiBcIlF1aWNrc2FuZFwiLFxyXG4gICAgZm9udFNpemU6IFwiMTZweFwiLFxyXG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gICAgY29sb3I6IFwiIzJGQUFGQ1wiLFxyXG4gICAgcGFkZGluZ0xlZnQ6IFwiNnB4XCIsXHJcbiAgICBwYWRkaW5nVG9wOiBcIjEycHhcIixcclxuICAgIG1hcmdpbjogJzAnXHJcbiAgfSxcclxuXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gU2lkZUJhcihwcm9wcykge1xyXG4gIGNvbnN0IFtrZXksIHNldEtleV0gPSB1c2VTdGF0ZSgxKTtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHByLTBcIiA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGJnLXdoaXRlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LXN0YXJ0IGFsaWduLWl0ZW1zLXN0YXJ0IHByLTBcIj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGQtZmxleCBmbGV4LWNvbHVtbiBqdXN0aWZ5LWNvbnRlbnQtc3RhcnQgYWxpZ24taXRlbXMtY2VudGVyIHB0LTIgc3RpY2t5XCJcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzJGQUFGQ1wiLFxyXG4gICAgICAgICAgICAgIHdpZHRoOiBcIjUycHhcIixcclxuICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwdmhcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gYXJpYS1sYWJlbD1cInNob3dcIiBjb2xvcj1cInByaW1hcnlcIiBzdHlsZT17eyB3aWR0aDogXCI1MnB4XCIsIGhlaWdodDogXCI1MnB4XCIgfX0gb25DbGljaz17KCkgPT4gc2V0S2V5KDEpfT5cclxuICAgICAgICAgICAgICA8QmFkZ2UgY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICB7a2V5ID09PSAxID8gPGltZyBzcmM9XCIvaW1hZ2VzL2ljb24vaWNvbjFhY3RpdmUucG5nXCIgLz4gOiA8aW1nIHNyYz1cIi9pbWFnZXMvaWNvbi9pY29uMS5wbmdcIiAvPn1cclxuICAgICAgICAgICAgICA8L0JhZGdlPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9XCJzaG93XCIgY29sb3I9XCJwcmltYXJ5XCIgc3R5bGU9e3sgd2lkdGg6IFwiNTJweFwiLCBoZWlnaHQ6IFwiNTJweFwiIH19IG9uQ2xpY2s9eygpID0+IHNldEtleSgyKX0+XHJcbiAgICAgICAgICAgICAgPEJhZGdlIGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAge2tleSA9PT0gMiA/IDxpbWcgc3JjPVwiL2ltYWdlcy9pY29uL2ljb24yYWN0aXZlLnBuZ1wiIC8+IDogPGltZyBzcmM9XCIvaW1hZ2VzL2ljb24vaWNvbjIucG5nXCIgLz59XHJcbiAgICAgICAgICAgICAgPC9CYWRnZT5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwic2hvd1wiIGNvbG9yPVwicHJpbWFyeVwiIHN0eWxlPXt7IHdpZHRoOiBcIjUycHhcIiwgaGVpZ2h0OiBcIjUycHhcIiB9fSBvbkNsaWNrPXsoKSA9PiBzZXRLZXkoMyl9PlxyXG4gICAgICAgICAgICAgIDxCYWRnZSBjb2xvcj1cInByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgIHtrZXkgPT09IDMgPyA8aW1nIHNyYz1cIi9pbWFnZXMvaWNvbi9pY29uM2FjdGl2ZS5wbmdcIiAvPiA6IDxpbWcgc3JjPVwiL2ltYWdlcy9pY29uL2ljb24zLnBuZ1wiIC8+fVxyXG4gICAgICAgICAgICAgIDwvQmFkZ2U+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gYXJpYS1sYWJlbD1cInNob3dcIiBjb2xvcj1cInByaW1hcnlcIiBzdHlsZT17eyB3aWR0aDogXCI1MnB4XCIsIGhlaWdodDogXCI1MnB4XCIgfX0gb25DbGljaz17KCkgPT4gc2V0S2V5KDQpfT5cclxuICAgICAgICAgICAgICA8QmFkZ2UgY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICB7a2V5ID09PSA0ID8gPGltZyBzcmM9XCIvaW1hZ2VzL2ljb24vaWNvbjRhY3RpdmUucG5nXCIgLz4gOiA8aW1nIHNyYz1cIi9pbWFnZXMvaWNvbi9pY29uNC5wbmdcIiAvPn1cclxuICAgICAgICAgICAgICA8L0JhZGdlPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9XCJzaG93XCIgY29sb3I9XCJwcmltYXJ5XCIgc3R5bGU9e3sgd2lkdGg6IFwiNTJweFwiLCBoZWlnaHQ6IFwiNTJweFwiIH19IG9uQ2xpY2s9eygpID0+IHNldEtleSg1KX0+XHJcbiAgICAgICAgICAgICAgPEJhZGdlIGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAge2tleSA9PT0gNSA/IDxpbWcgc3JjPVwiL2ltYWdlcy9pY29uL2ljb241YWN0aXZlLnBuZ1wiIC8+IDogPGltZyBzcmM9XCIvaW1hZ2VzL2ljb24vaWNvbjUucG5nXCIgLz59XHJcbiAgICAgICAgICAgICAgPC9CYWRnZT5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwic2hvd1wiIGNvbG9yPVwicHJpbWFyeVwiIHN0eWxlPXt7IHdpZHRoOiBcIjUycHhcIiwgaGVpZ2h0OiBcIjUycHhcIiB9fSBvbkNsaWNrPXsoKSA9PiBzZXRLZXkoNil9PlxyXG4gICAgICAgICAgICAgIDxCYWRnZSBjb2xvcj1cInByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgIHtrZXkgPT09IDYgPyA8aW1nIHNyYz1cIi9pbWFnZXMvaWNvbi9pY29uNmFjdGl2ZS5wbmdcIiAvPiA6IDxpbWcgc3JjPVwiL2ltYWdlcy9pY29uL2ljb242LnBuZ1wiIC8+fVxyXG4gICAgICAgICAgICAgIDwvQmFkZ2U+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gYXJpYS1sYWJlbD1cInNob3dcIiBjb2xvcj1cInByaW1hcnlcIiBzdHlsZT17eyB3aWR0aDogXCI1MnB4XCIsIGhlaWdodDogXCI1MnB4XCIgfX0gb25DbGljaz17KCkgPT4gc2V0S2V5KDcpfT5cclxuICAgICAgICAgICAgICA8QmFkZ2UgY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICB7a2V5ID09PSA3ID8gPGltZyBzcmM9XCIvaW1hZ2VzL2ljb24vaWNvbjdhY3RpdmUucG5nXCIgLz4gOiA8aW1nIHNyYz1cIi9pbWFnZXMvaWNvbi9pY29uNy5wbmdcIiAvPn0gICAgICAgICAgICAgIDwvQmFkZ2U+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gYXJpYS1sYWJlbD1cInNob3dcIiBjb2xvcj1cInByaW1hcnlcIiBzdHlsZT17eyB3aWR0aDogXCI1MnB4XCIsIGhlaWdodDogXCI1MnB4XCIgfX0gb25DbGljaz17KCkgPT4gc2V0S2V5KDgpfT5cclxuICAgICAgICAgICAgICA8QmFkZ2UgY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICB7a2V5ID09PSA4ID8gPGltZyBzcmM9XCIvaW1hZ2VzL2ljb24vaWNvbjhhY3RpdmUucG5nXCIgLz4gOiA8aW1nIHNyYz1cIi9pbWFnZXMvaWNvbi9pY29uOC5wbmdcIiAvPn0gICAgICAgICAgICAgIDwvQmFkZ2U+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gYXJpYS1sYWJlbD1cInNob3dcIiBjb2xvcj1cInByaW1hcnlcIiBzdHlsZT17eyB3aWR0aDogXCI1MnB4XCIsIGhlaWdodDogXCI1MnB4XCIgfX0gb25DbGljaz17KCkgPT4gc2V0S2V5KDkpfT5cclxuICAgICAgICAgICAgICA8QmFkZ2UgY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICB7a2V5ID09PSA5ID8gPGltZyBzcmM9XCIvaW1hZ2VzL2ljb24vaWNvbjlhY3RpdmUucG5nXCIgLz4gOiA8aW1nIHNyYz1cIi9pbWFnZXMvaWNvbi9pY29uOS5wbmdcIiAvPn0gICAgICAgICAgICAgIDwvQmFkZ2U+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gYXJpYS1sYWJlbD1cInNob3dcIiBjb2xvcj1cInByaW1hcnlcIiBzdHlsZT17eyB3aWR0aDogXCI1MnB4XCIsIGhlaWdodDogXCI1MnB4XCIgfX0gb25DbGljaz17KCkgPT4gc2V0S2V5KDEwKX0+XHJcbiAgICAgICAgICAgICAgPEJhZGdlIGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAge2tleSA9PT0gMTAgPyA8aW1nIHNyYz1cIi9pbWFnZXMvaWNvbi9pY29uMTBhY3RpdmUucG5nXCIgLz4gOiA8aW1nIHNyYz1cIi9pbWFnZXMvaWNvbi9pY29uMTAucG5nXCIgLz59XHJcbiAgICAgICAgICAgICAgPC9CYWRnZT5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwic2hvd1wiIGNvbG9yPVwicHJpbWFyeVwiIHN0eWxlPXt7IHdpZHRoOiBcIjUycHhcIiwgaGVpZ2h0OiBcIjUycHhcIiB9fSBvbkNsaWNrPXsoKSA9PiBzZXRLZXkoMTEpfT5cclxuICAgICAgICAgICAgICA8QmFkZ2UgY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICB7a2V5ID09PSAxMSA/IDxpbWcgc3JjPVwiL2ltYWdlcy9pY29uL2ljb24xMWFjdGl2ZS5wbmdcIiAvPiA6IDxpbWcgc3JjPVwiL2ltYWdlcy9pY29uL2ljb24xMS5wbmdcIiAvPn1cclxuICAgICAgICAgICAgICA8L0JhZGdlPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9XCJzaG93XCIgY29sb3I9XCJwcmltYXJ5XCIgc3R5bGU9e3sgd2lkdGg6IFwiNTJweFwiLCBoZWlnaHQ6IFwiNTJweFwiIH19IG9uQ2xpY2s9eygpID0+IHNldEtleSgxMil9PlxyXG4gICAgICAgICAgICAgIDxCYWRnZSBjb2xvcj1cInByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgIHtrZXkgPT09IDEyID8gPGltZyBzcmM9XCIvaW1hZ2VzL2ljb24vaWNvbjEyYWN0aXZlLnBuZ1wiIC8+IDogPGltZyBzcmM9XCIvaW1hZ2VzL2ljb24vaWNvbjEyLnBuZ1wiIC8+fVxyXG4gICAgICAgICAgICAgIDwvQmFkZ2U+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gYXJpYS1sYWJlbD1cInNob3dcIiBjb2xvcj1cInByaW1hcnlcIiBzdHlsZT17eyB3aWR0aDogXCI1MnB4XCIsIGhlaWdodDogXCI1MnB4XCIgfX0gb25DbGljaz17KCkgPT4gc2V0S2V5KDEzKX0+XHJcbiAgICAgICAgICAgICAgPEJhZGdlIGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAge2tleSA9PT0gMTMgPyA8aW1nIHNyYz1cIi9pbWFnZXMvaWNvbi9pY29uMTNhY3RpdmUucG5nXCIgLz4gOiA8aW1nIHNyYz1cIi9pbWFnZXMvaWNvbi9pY29uMTMucG5nXCIgLz59XHJcbiAgICAgICAgICAgICAgPC9CYWRnZT5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG5cclxuXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnY2FsYygxMDAlIC0gNjBweCknLCBwYWRkaW5nTGVmdDogJzhweCcgfX0+XHJcblxyXG4gICAgICAgICAge2tleSA9PT0gMSAmJlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICBRVeG6ok4gVFLhu4ogSOG7hiBUSOG7kE5HXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgIDxTY3JvbGxiYXJzIHN0eWxlPXt7IGhlaWdodDogJzkwdmgnIH19PlxyXG4gICAgICAgICAgICAgICAgICA8U3lzdGVtc01hbmFnZW1lbnQgLz5cclxuICAgICAgICAgICAgICAgIDwvU2Nyb2xsYmFycz5cclxuICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAge2tleSA9PT0gMiAmJlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICBOSMOCTiBT4buwXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8TmhhblN1IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAge2tleSA9PT0gMyAmJlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICBDw5RORyBWSeG7hkNcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIHsvKiA8UXVhblRyaUhlVGhvbmcgLz4gKi99XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAge2tleSA9PT0gNCAmJlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICBCw4FPIEPDgU9cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIHsvKiA8UXVhblRyaUhlVGhvbmcgLz4gKi99XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAge2tleSA9PT0gNSAmJlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICBCw4FOIEzhurogUE9TXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICB7LyogPFF1YW5UcmlIZVRob25nIC8+ICovfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHtrZXkgPT09IDYgJiZcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgS+G6viBUT8OBTlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgey8qIDxRdWFuVHJpSGVUaG9uZyAvPiAqL31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB7a2V5ID09PSA3ICYmXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5cclxuICAgICAgICAgICAgICAgIEtIw4FDSCBIw4BORyAmYW1wOyBCw4FOIEjDgE5HXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICB7LyogPFF1YW5UcmlIZVRob25nIC8+ICovfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHtrZXkgPT09IDggJiZcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgU+G6ok4gUEjhuqhNXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICB7LyogPFF1YW5UcmlIZVRob25nIC8+ICovfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHtrZXkgPT09IDkgJiZcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgQsOBTyBHScOBXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICB7LyogPFF1YW5UcmlIZVRob25nIC8+ICovfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHtrZXkgPT09IDEwICYmXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5cclxuICAgICAgICAgICAgICAgIFFV4bqiTiBMw50gS0hPXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICB7LyogPFF1YW5UcmlIZVRob25nIC8+ICovfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHtrZXkgPT09IDExICYmXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5cclxuICAgICAgICAgICAgICAgIFRIVSBNVUFcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIHsvKiA8UXVhblRyaUhlVGhvbmcgLz4gKi99XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAge2tleSA9PT0gMTIgJiZcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgREFTSEJPQVJEXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICB7LyogPFF1YW5UcmlIZVRob25nIC8+ICovfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHtrZXkgPT09IDEzICYmXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5cclxuICAgICAgICAgICAgICAgIElNUE9SVC9FWFBPUlRcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIHsvKiA8UXVhblRyaUhlVGhvbmcgLz4gKi99XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lkZUJhcjtcclxuIiwiaW1wb3J0IHsgQmFkZ2UsIElucHV0QmFzZSwgTWVudSwgTWVudUl0ZW0gfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IEFwcEJhciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyXCI7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCI7XHJcbmltcG9ydCB7IGZhZGUsIG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBUb29sYmFyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyXCI7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI7XHJcbmltcG9ydCB7IEFjY291bnRDaXJjbGUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zXCI7XHJcbmltcG9ydCBOb3RpZmljYXRpb25zSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTm90aWZpY2F0aW9ucyc7XHJcbmltcG9ydCBTZXR0aW5nc0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1NldHRpbmdzJztcclxuaW1wb3J0IE1lbnVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9NZW51JztcclxuaW1wb3J0IFRyZW5kaW5nVXBJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9UcmVuZGluZ1VwJztcclxuaW1wb3J0IFNlYXJjaEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1NlYXJjaCc7XHJcbmltcG9ydCBIZWxwSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvSGVscCc7XHJcbmltcG9ydCBNb3JlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTW9yZSc7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGZsZXhHcm93OiAxLFxyXG4gIH0sXHJcbiAgZnVsbHdpZHRoOiB7XHJcbiAgICB3aWR0aDogJzEwMHZ3J1xyXG4gIH0sXHJcbiAgY29tcGFueVRpdGxlOiB7XHJcbiAgICBjb2xvcjogJyMxMDEwMTAnLFxyXG4gICAgZm9udFNpemU6IFwiMTZweFwiLFxyXG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gIH0sXHJcbiAgbWVudUJ1dHRvbjoge1xyXG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgfSxcclxuICB0aXRsZToge1xyXG4gICAgY29sb3I6ICcjMTAxMDEwJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInXHJcbiAgfSxcclxuICBncm93OiB7XHJcbiAgICBmbGV4R3JvdzogMSxcclxuICB9LFxyXG4gIHNlYXJjaDoge1xyXG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgIGJvcmRlclJhZGl1czogXCIxNnB4XCIsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGZhZGUodGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsIDAuMTUpLFxyXG4gICAgXCImOmhvdmVyXCI6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiBmYWRlKHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLCAwLjI1KSxcclxuICAgIH0sXHJcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygyKSxcclxuICAgIG1hcmdpbkxlZnQ6IDAsXHJcbiAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJzbVwiKV06IHtcclxuICAgICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygzKSxcclxuICAgICAgd2lkdGg6IFwiYXV0b1wiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHNlYXJjaEljb246IHtcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMCwgMiksXHJcbiAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgIHBvaW50ZXJFdmVudHM6IFwibm9uZVwiLFxyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgfSxcclxuICBpbnB1dFJvb3Q6IHtcclxuICAgIGNvbG9yOiAnIzEwMTAxMCcsXHJcbiAgfSxcclxuICBpbnB1dElucHV0OiB7XHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDEsIDEsIDEsIDApLFxyXG4gICAgLy8gdmVydGljYWwgcGFkZGluZyArIGZvbnQgc2l6ZSBmcm9tIHNlYXJjaEljb25cclxuICAgIHBhZGRpbmdMZWZ0OiBgY2FsYygxZW0gKyAke3RoZW1lLnNwYWNpbmcoNCl9cHgpYCxcclxuICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShcIndpZHRoXCIpLFxyXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwibWRcIildOiB7XHJcbiAgICAgIHdpZHRoOiBcIjIwY2hcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBzZWN0aW9uRGVza3RvcDoge1xyXG4gICAgZGlzcGxheTogXCJub25lXCIsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJtZFwiKV06IHtcclxuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc2VjdGlvbk1vYmlsZToge1xyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJtZFwiKV06IHtcclxuICAgICAgZGlzcGxheTogXCJub25lXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgYWNjTmFtZToge1xyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmZ1bmN0aW9uIFRvcE5hdihwcm9wcykge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBjb25zdCBbYW5jaG9yRWwsIHNldEFuY2hvckVsXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFttb2JpbGVNb3JlQW5jaG9yRWwsIHNldE1vYmlsZU1vcmVBbmNob3JFbF0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUHJvZmlsZU1lbnVPcGVuID0gKGV2ZW50KSA9PiB7XHJcbiAgICBzZXRBbmNob3JFbChldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVNb2JpbGVNZW51Q2xvc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRNb2JpbGVNb3JlQW5jaG9yRWwobnVsbCk7XHJcbiAgfTtcclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5mdWxsd2lkdGh9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ncm93fT5cclxuICAgICAgICA8QXBwQmFyXHJcbiAgICAgICAgICBwb3NpdGlvbj1cInN0YXRpY1wiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZVwiXHJcbiAgICAgICAgICBzdHlsZT17eyBib3hTaGFkb3c6IFwibm9uZVwiIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFRvb2xiYXI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiXFxpbWFnZXNcXFZWbG9nbzEucG5nXCIgY2xhc3NOYW1lPVwicHgtNVwiIC8+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgZWRnZT1cInN0YXJ0XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubWVudUJ1dHRvbn1cclxuICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJvcGVuIGRyYXdlclwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8TWVudUljb24gc3R5bGU9e3sgY29sb3I6ICcjRENFMEUyJywgZm9udFNpemU6ICc0MCcgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuY29tcGFueVRpdGxlfT5Dw7RuZyB0eSBWViBTb2x1dGlvbnM8L3NwYW4+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlYXJjaH0gc3R5bGU9e3sgYmFja2dyb3VuZDogXCIjRjdGN0Y3XCIgfX0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VhcmNoSWNvbn0+XHJcbiAgICAgICAgICAgICAgICA8U2VhcmNoSWNvbiBzdHlsZT17eyBjb2xvcjogJyMyRkFBRkMnIH19IC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPElucHV0QmFzZVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2jigKZcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgICAgICAgICByb290OiBjbGFzc2VzLmlucHV0Um9vdCxcclxuICAgICAgICAgICAgICAgICAgaW5wdXQ6IGNsYXNzZXMuaW5wdXRJbnB1dCxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7IFwiYXJpYS1sYWJlbFwiOiBcInNlYXJjaFwiIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmdyb3d9IC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlY3Rpb25EZXNrdG9wfT5cclxuICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwic2hvdyBcIiBjb2xvcj1cInByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgIDxCYWRnZSBjb2xvcj1cInByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgPFNldHRpbmdzSWNvbiBzdHlsZT17eyBjb2xvcjogJyM1QTVBNUEnIH19IC8+XHJcbiAgICAgICAgICAgICAgICA8L0JhZGdlPlxyXG4gICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwic2hvdyBcIiBjb2xvcj1cInByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgIDxCYWRnZSBjb2xvcj1cInByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgPFRyZW5kaW5nVXBJY29uIHN0eWxlPXt7IGNvbG9yOiAnIzVBNUE1QScgfX0gLz5cclxuICAgICAgICAgICAgICAgIDwvQmFkZ2U+XHJcbiAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9XCJzaG93XCIgY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICA8QmFkZ2UgY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxIZWxwSWNvbiBzdHlsZT17eyBjb2xvcjogJyM1QTVBNUEnIH19IC8+XHJcbiAgICAgICAgICAgICAgICA8L0JhZGdlPlxyXG4gICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cInN1YnRpdGxlMVwiXHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIEjhu5cgdHLhu6NcclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcblxyXG4gICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwic2hvdyAxNyBuZXcgbm90aWZpY2F0aW9uc1wiXHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxCYWRnZSBiYWRnZUNvbnRlbnQ9ezE3fSBjb2xvcj1cImVycm9yXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxOb3RpZmljYXRpb25zSWNvbiBzdHlsZT17eyBjb2xvcjogJyM1QTVBNUEnIH19IC8+XHJcbiAgICAgICAgICAgICAgICA8L0JhZGdlPlxyXG4gICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cInN1YnRpdGxlMVwiXHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIEFjY291bnQgTmFtZVxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgZWRnZT1cImVuZFwiXHJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiYWNjb3VudCBvZiBjdXJyZW50IHVzZXJcIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlUHJvZmlsZU1lbnVPcGVufVxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8QWNjb3VudENpcmNsZSBzdHlsZT17eyBjb2xvcjogJyM1QTVBNUEnIH19IC8+XHJcbiAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgICAgPC9BcHBCYXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9wTmF2O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTaWRlQmFyIGZyb20gXCIuLi9jb21wb25lbnQvc2lkZUJhci9zaWRlQmFyXCI7XHJcbmltcG9ydCBUb3BOYXYgZnJvbSBcIi4uL2NvbXBvbmVudC90b3BOYXYvdG9wbmF2XCI7XHJcbmltcG9ydCB7IFNjcm9sbGJhcnMgfSBmcm9tICdyZWFjdC1jdXN0b20tc2Nyb2xsYmFycyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluTGF5b3V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcHAtd3JhcHBlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RpY2t5LXRvcFwiPlxyXG4gICAgICAgICAgPFRvcE5hdiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0yIHAtMCBcIj5cclxuICAgICAgICAgICAgPFNpZGVCYXIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTAgcHQtMlwiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyNGMkYyRjInIH19PlxyXG5cclxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgIDxTY3JvbGxiYXJzIHN0eWxlPXt7IGhlaWdodDogJzkwdmgnIH19PlxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgPC9TY3JvbGxiYXJzPlxyXG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgIHtgXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IG51bWVyYWwgZnJvbSAnbnVtZXJhbCc7XHJcbmltcG9ydCBhcHBTZXR0aW5ncyBmcm9tICcuLi9maWxlU2V0dGluZ3MvYXBwU2V0dGluZ3MuanNvbic7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0RldigpIHtcclxuICBjb25zdCBkZXYgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nO1xyXG4gIHJldHVybiBkZXY7XHJcbn1cclxuXHJcbmRlY2xhcmUgZ2xvYmFsIHtcclxuICBpbnRlcmZhY2UgU3RyaW5nIHtcclxuICAgIGltYWdlU3JjKHdpZHRoOiBudW1iZXIsIGhlaWdodD86IG51bWJlcik6IHN0cmluZztcclxuXHJcbiAgICBzdGF0aWNJbWFnZSgpOiBzdHJpbmc7XHJcblxyXG4gICAgdG9UaXRsZUNhc2UoKTogc3RyaW5nO1xyXG5cclxuICAgIGJ1aWxkUXVlcnkoZGF0YTogYW55LCBwcmVmaXhRdWVyeTogc3RyaW5nKTogc3RyaW5nO1xyXG5cclxuICAgIGJ1aWxkUGFyYW1zKGRhdGE6IGFueSwgcHJlZml4UXVlcnk6IHN0cmluZyk6IHN0cmluZztcclxuXHJcbiAgICB0b0ZyaWVuZGx5VXJsKCk6IHN0cmluZztcclxuXHJcbiAgICB0ZXh0SW5kZXgoKTogQXJyYXk8c3RyaW5nPjtcclxuXHJcbiAgICB0b0d1aWQoKTogc3RyaW5nO1xyXG5cclxuICAgIGxvZyhtZXNzYWdlPzogYW55LCAuLi5vcHRpb25hbFBhcmFtczogYW55W10pOiB2b2lkO1xyXG4gIH1cclxuXHJcbiAgaW50ZXJmYWNlIE51bWJlciB7XHJcbiAgICBmb3JtYXQoZm9ybWF0UGF0ZXJuPzogYW55KTogc3RyaW5nXHJcblxyXG4gICAgZm9ybWF0RmVldEluY2goKTogc3RyaW5nO1xyXG5cclxuICAgIHRvRmVldEluY2goKTogeyBmZWV0OiBudW1iZXIsIGluY2hlczogbnVtYmVyIH07XHJcbiAgfVxyXG59XHJcblxyXG5cclxuU3RyaW5nLnByb3RvdHlwZS5pbWFnZVNyYyA9IGZ1bmN0aW9uICh3aWR0aDogbnVtYmVyLCBoZWlnaHQ/OiBudW1iZXIpIHtcclxuICBjb25zdCBwcmVmaXggPSBhcHBTZXR0aW5ncy5zZXJ2ZXJJbmZvLm5leHRKc0FwcFVSTDtcclxuICBpZiAod2lkdGgpIHtcclxuICAgIGhlaWdodCA9IGhlaWdodCB8fCAod2lkdGggLyAoMTYgLyA5KSk7XHJcbiAgICByZXR1cm4gYCR7cHJlZml4fS9zdGF0aWMvaW1hZ2VzLyR7d2lkdGh9LyR7aGVpZ2h0fS8ke3RoaXN9YFxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGAvaW1hZ2VzLyR7dGhpc31gO1xyXG59XHJcblxyXG5cclxuU3RyaW5nLnByb3RvdHlwZS5zdGF0aWNJbWFnZSA9IGZ1bmN0aW9uICgpIHtcclxuICBpZiAoIUJvb2xlYW4odGhpcykpXHJcbiAgICByZXR1cm4gbnVsbDtcclxuXHJcbiAgY29uc3QgaW1hZ2VGaWxlTmFtZSA9IHRoaXMuc3BsaXQoXCIvXCIpLnBvcCgpO1xyXG4gIHJldHVybiBgL2ltYWdlcy8ke2ltYWdlRmlsZU5hbWV9YFxyXG59XHJcblxyXG5TdHJpbmcucHJvdG90eXBlLnRvVGl0bGVDYXNlID0gZnVuY3Rpb24gKCkge1xyXG4gIGxldCBzdHIgPSB0aGlzLnRvTG93ZXJDYXNlKCkuc3BsaXQoJyAnKTtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xyXG4gICAgc3RyW2ldID0gc3RyW2ldLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyW2ldLnNsaWNlKDEpO1xyXG4gIH1cclxuICByZXR1cm4gc3RyLmpvaW4oJyAnKTtcclxufVxyXG5cclxuXHJcbk51bWJlci5wcm90b3R5cGUuZm9ybWF0ID0gZnVuY3Rpb24gKGZvcm1hdFBhdGVybikge1xyXG4gIGNvbnN0IG51bWJlciA9IG51bWVyYWwodGhpcyB8fCAwKTtcclxuICBpZiAoZm9ybWF0UGF0ZXJuKVxyXG4gICAgcmV0dXJuIG51bWJlci5mb3JtYXQoZm9ybWF0UGF0ZXJuKVxyXG4gIHJldHVybiBudW1iZXIuZm9ybWF0KCk7XHJcbn1cclxuXHJcbk51bWJlci5wcm90b3R5cGUuZm9ybWF0RmVldEluY2ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3QgY2VudGkgPSBOdW1iZXIodGhpcyk7XHJcbiAgY29uc3QgZmVldCA9IE1hdGgucm91bmQoKGNlbnRpIC8gMi41NCkgLyAxMilcclxuICBjb25zdCBpbmNoZXMgPSBNYXRoLnJvdW5kKChjZW50aSAvIDIuNTQpIC0gKGZlZXQgKiAxMikpXHJcbiAgcmV0dXJuIGAke2ZlZXR9JyR7aW5jaGVzfVwiYDtcclxufVxyXG5cclxuTnVtYmVyLnByb3RvdHlwZS50b0ZlZXRJbmNoID0gZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IGNlbnRpID0gdGhpcztcclxuICBsZXQgaW5jaGVzID0gY2VudGkgLyAyLjU0O1xyXG4gIGNvbnN0IGZlZXQgPSBfLnRvSW50ZWdlcigoaW5jaGVzIC8gMTIpKTtcclxuICBpbmNoZXMgPSBNYXRoLnJvdW5kKGluY2hlcyAtIChmZWV0ICogMTIpKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGZlZXQsXHJcbiAgICBpbmNoZXNcclxuICB9XHJcbn1cclxuXHJcblxyXG5TdHJpbmcucHJvdG90eXBlLmJ1aWxkUXVlcnkgPSBmdW5jdGlvbiAoZGF0YTogYW55LCBwcmVmaXhRdWVyeSA9ICc/Jykge1xyXG5cclxuICAvLyBJZiB0aGUgZGF0YSBpcyBhbHJlYWR5IGEgc3RyaW5nLCByZXR1cm4gaXQgYXMtaXNcclxuICBpZiAodHlwZW9mIChkYXRhKSA9PT0gJ3N0cmluZycpXHJcbiAgICByZXR1cm4gZGF0YTtcclxuXHJcbiAgLy8gQ3JlYXRlIGEgcXVlcnkgYXJyYXkgdG8gaG9sZCB0aGUga2V5L3ZhbHVlIHBhaXJzXHJcbiAgdmFyIHF1ZXJ5ID0gW107XHJcblxyXG4gIC8vIExvb3AgdGhyb3VnaCB0aGUgZGF0YSBvYmplY3RcclxuICBmb3IgKHZhciBrZXkgaW4gZGF0YSkge1xyXG4gICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAvLyBFbmNvZGUgZWFjaCBrZXkgYW5kIHZhbHVlLCBjb25jYXRlbmF0ZSB0aGVtIGludG8gYSBzdHJpbmcsIGFuZCBwdXNoIHRoZW0gdG8gdGhlIGFycmF5XHJcbiAgICAgIHF1ZXJ5LnB1c2goZW5jb2RlVVJJQ29tcG9uZW50KGtleSkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQoKGRhdGFba2V5XSB8fCAnJykpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIEpvaW4gZWFjaCBpdGVtIGluIHRoZSBhcnJheSB3aXRoIGEgYCZgIGFuZCByZXR1cm4gdGhlIHJlc3VsdGluZyBzdHJpbmdcclxuICByZXR1cm4gYCR7dGhpc30ke3ByZWZpeFF1ZXJ5fSR7cXVlcnkuam9pbignJicpfWA7XHJcblxyXG59O1xyXG5cclxuU3RyaW5nLnByb3RvdHlwZS5idWlsZFBhcmFtcyA9IGZ1bmN0aW9uIChkYXRhLCBwcmVmaXhQYXJhbXMgPSAnOicpIHtcclxuICBsZXQgc3RyID0gdGhpcyB8fCAnJztcclxuICAvLyBJZiB0aGUgZGF0YSBpcyBhbHJlYWR5IGEgc3RyaW5nLCByZXR1cm4gaXQgYXMtaXNcclxuICBpZiAodHlwZW9mIChkYXRhKSA9PT0gJ3N0cmluZycpXHJcbiAgICByZXR1cm4gZGF0YTtcclxuICAvLyBDcmVhdGUgYSBxdWVyeSBhcnJheSB0byBob2xkIHRoZSBrZXkvdmFsdWUgcGFpcnNcclxuICAvLyBMb29wIHRocm91Z2ggdGhlIGRhdGEgb2JqZWN0XHJcbiAgZm9yICh2YXIga2V5IGluIGRhdGEpXHJcbiAgICBzdHIgPSBzdHIucmVwbGFjZShgJHtwcmVmaXhQYXJhbXN9JHtrZXl9YCwgKGRhdGFba2V5XSB8fCAnJykpXHJcbiAgLy8gSm9pbiBlYWNoIGl0ZW0gaW4gdGhlIGFycmF5IHdpdGggYSBgJmAgYW5kIHJldHVybiB0aGUgcmVzdWx0aW5nIHN0cmluZ1xyXG4gIHJldHVybiBzdHJcclxufTtcclxuXHJcbmlmICh0eXBlb2YgKGRvY3VtZW50KSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gIFN0b3JhZ2UucHJvdG90eXBlLmdldCA9IGtleSA9PiB7XHJcbiAgICByZXR1cm4gSlNPTi5wYXJzZSgobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSB8fCBcIm51bGxcIikpO1xyXG4gIH1cclxuXHJcbiAgU3RvcmFnZS5wcm90b3R5cGUuc2V0ID0gKGtleSwgdmFsdWUpID0+IHtcclxuICAgIHJldHVybiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlIHx8ICd7fScpKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VBbGlhcyhhbGlhczogc3RyaW5nLCByZXBsYWNlU3RyaW5nID0gXCItXCIpIHtcclxuICB2YXIgc3RyID0gYWxpYXMgfHwgJyc7XHJcbiAgc3RyID0gc3RyLnRvTG93ZXJDYXNlKCk7XHJcbiAgc3RyID0gc3RyLnJlcGxhY2UoL8OgfMOhfOG6oXzhuqN8w6N8w6J84bqnfOG6pXzhuq184bqpfOG6q3zEg3zhurF84bqvfOG6t3zhurN84bq1L2csIFwiYVwiKTtcclxuICBzdHIgPSBzdHIucmVwbGFjZSgvw6h8w6l84bq5fOG6u3zhur18w6p84buBfOG6v3zhu4d84buDfOG7hS9nLCBcImVcIik7XHJcbiAgc3RyID0gc3RyLnJlcGxhY2UoL8OsfMOtfOG7i3zhu4l8xKkvZywgXCJpXCIpO1xyXG4gIHN0ciA9IHN0ci5yZXBsYWNlKC/DsnzDs3zhu4184buPfMO1fMO0fOG7k3zhu5F84buZfOG7lXzhu5d8xqF84budfOG7m3zhu6N84buffOG7oS9nLCBcIm9cIik7XHJcbiAgc3RyID0gc3RyLnJlcGxhY2UoL8O5fMO6fOG7pXzhu6d8xal8xrB84burfOG7qXzhu7F84butfOG7ry9nLCBcInVcIik7XHJcbiAgc3RyID0gc3RyLnJlcGxhY2UoL+G7s3zDvXzhu7V84bu3fOG7uS9nLCBcInlcIik7XHJcbiAgc3RyID0gc3RyLnJlcGxhY2UoL8SRL2csIFwiZFwiKTtcclxuICBzdHIgPSBzdHIucmVwbGFjZSgvIXxAfCV8XFxefFxcKnxcXCh8XFwpfFxcK3xcXD18XFw8fFxcPnxcXD98XFwvfCx8XFwufFxcOnxcXDt8XFwnfFxcXCJ8XFwmfFxcI3xcXFt8XFxdfH58XFwkfF98YHwtfHt8fXxcXHx8XFxcXC9nLCBcIlwiKTtcclxuICBzdHIgPSBzdHIucmVwbGFjZSgvICsgL2csIFwiXCIpO1xyXG4gIHN0ciA9IHN0ci5yZXBsYWNlKC8gL2csIHJlcGxhY2VTdHJpbmcpO1xyXG4gIHN0ciA9IHN0ci50cmltKCk7XHJcbiAgcmV0dXJuIHN0cjtcclxufVxyXG5cclxuU3RyaW5nLnByb3RvdHlwZS50b0ZyaWVuZGx5VXJsID0gZnVuY3Rpb24gKCkge1xyXG4gIHJldHVybiBjaGFuZ2VBbGlhcyh0aGlzKTtcclxufVxyXG5cclxuU3RyaW5nLnByb3RvdHlwZS50ZXh0SW5kZXggPSBmdW5jdGlvbiAoKSB7XHJcbiAgcmV0dXJuIGNoYW5nZUFsaWFzKHRoaXMpLnNwbGl0KCctJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUd1aWQoKSB7XHJcbiAgZnVuY3Rpb24gUzQoKSB7XHJcbiAgICByZXR1cm4gKCgoMSArIE1hdGgucmFuZG9tKCkpICogMHgxMDAwMCkgfCAwKS50b1N0cmluZygxNikuc3Vic3RyaW5nKDEpO1xyXG4gIH1cclxuICByZXR1cm4gKFM0KCkgKyBTNCgpICsgXCItXCIgKyBTNCgpICsgXCItNFwiICsgUzQoKS5zdWJzdHIoMCwgMykgKyBcIi1cIiArIFM0KCkgKyBcIi1cIiArIFM0KCkgKyBTNCgpICsgUzQoKSkudG9Mb3dlckNhc2UoKTtcclxufVxyXG5cclxuU3RyaW5nLnByb3RvdHlwZS50b0d1aWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgcmV0dXJuIGNyZWF0ZUd1aWQoKTtcclxufTtcclxuXHJcblxyXG5TdHJpbmcucHJvdG90eXBlLmxvZyA9IGZ1bmN0aW9uIChtZXNzYWdlPzogYW55LCAuLi5vcHRpb25hbFBhcmFtczogYW55W10pIHtcclxuICByZXR1cm4gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgJiYgY29uc29sZS5sb2cobWVzc2FnZSwgLi4ub3B0aW9uYWxQYXJhbXMpO1xyXG59IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBhZGRCYXNlUGF0aCxcbiAgaXNMb2NhbFVSTCxcbiAgTmV4dFJvdXRlcixcbiAgUHJlZmV0Y2hPcHRpb25zLFxuICByZXNvbHZlSHJlZixcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcbnR5cGUgUmVxdWlyZWRLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBuZXZlciA6IEtcbn1ba2V5b2YgVF1cbnR5cGUgT3B0aW9uYWxLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBLIDogbmV2ZXJcbn1ba2V5b2YgVF1cblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG59XG50eXBlIExpbmtQcm9wc1JlcXVpcmVkID0gUmVxdWlyZWRLZXlzPExpbmtQcm9wcz5cbnR5cGUgTGlua1Byb3BzT3B0aW9uYWwgPSBPcHRpb25hbEtleXM8TGlua1Byb3BzPlxuXG5sZXQgY2FjaGVkT2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG5jb25zdCBsaXN0ZW5lcnMgPSBuZXcgTWFwPEVsZW1lbnQsICgpID0+IHZvaWQ+KClcbmNvbnN0IEludGVyc2VjdGlvbk9ic2VydmVyID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgOiBudWxsXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIoKTogSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgfCB1bmRlZmluZWQge1xuICAvLyBSZXR1cm4gc2hhcmVkIGluc3RhbmNlIG9mIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIGFscmVhZHkgY3JlYXRlZFxuICBpZiAoY2FjaGVkT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gY2FjaGVkT2JzZXJ2ZXJcbiAgfVxuXG4gIC8vIE9ubHkgY3JlYXRlIHNoYXJlZCBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBzdXBwb3J0ZWQgaW4gYnJvd3NlclxuICBpZiAoIUludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgcmV0dXJuIChjYWNoZWRPYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAoZW50cmllcykgPT4ge1xuICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICBpZiAoIWxpc3RlbmVycy5oYXMoZW50cnkudGFyZ2V0KSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2IgPSBsaXN0ZW5lcnMuZ2V0KGVudHJ5LnRhcmdldCkhXG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDApIHtcbiAgICAgICAgICBjYWNoZWRPYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGxpc3RlbmVycy5kZWxldGUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGNiKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHsgcm9vdE1hcmdpbjogJzIwMHB4JyB9XG4gICkpXG59XG5cbmNvbnN0IGxpc3RlblRvSW50ZXJzZWN0aW9ucyA9IChlbDogRWxlbWVudCwgY2I6ICgpID0+IHZvaWQpID0+IHtcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBnZXRPYnNlcnZlcigpXG4gIGlmICghb2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gKCkgPT4ge31cbiAgfVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWwpXG4gIGxpc3RlbmVycy5zZXQoZWwsIGNiKVxuICByZXR1cm4gKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBvYnNlcnZlci51bm9ic2VydmUoZWwpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICB9XG4gICAgbGlzdGVuZXJzLmRlbGV0ZShlbClcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmVmZXRjaChcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnNcbik6IHZvaWQge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVyblxuICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9KVxuICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc10gPSB0cnVlXG59XG5cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudDogUmVhY3QuTW91c2VFdmVudCkge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICByZXR1cm4gKFxuICAgICh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB8fFxuICAgIGV2ZW50Lm1ldGFLZXkgfHxcbiAgICBldmVudC5jdHJsS2V5IHx8XG4gICAgZXZlbnQuc2hpZnRLZXkgfHxcbiAgICBldmVudC5hbHRLZXkgfHwgLy8gdHJpZ2dlcnMgcmVzb3VyY2UgZG93bmxvYWRcbiAgICAoZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpXG4gIClcbn1cblxuZnVuY3Rpb24gbGlua0NsaWNrZWQoXG4gIGU6IFJlYWN0Lk1vdXNlRXZlbnQsXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICByZXBsYWNlPzogYm9vbGVhbixcbiAgc2hhbGxvdz86IGJvb2xlYW4sXG4gIHNjcm9sbD86IGJvb2xlYW5cbik6IHZvaWQge1xuICBjb25zdCB7IG5vZGVOYW1lIH0gPSBlLmN1cnJlbnRUYXJnZXRcblxuICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICFpc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgIHJldHVyblxuICB9XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHsgc2hhbGxvdyB9KS50aGVuKFxuICAgIChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAoIXN1Y2Nlc3MpIHJldHVyblxuICAgICAgaWYgKHNjcm9sbCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpXG4gICAgICB9XG4gICAgfVxuICApXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJnczoge1xuICAgICAga2V5OiBzdHJpbmdcbiAgICAgIGV4cGVjdGVkOiBzdHJpbmdcbiAgICAgIGFjdHVhbDogc3RyaW5nXG4gICAgfSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgK1xuICAgICAgICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCJcbiAgICAgICAgICAgIDogJycpXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNSZXF1aXJlZCwgdHJ1ZT4gPSB7XG4gICAgICBocmVmOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCByZXF1aXJlZFByb3BzOiBMaW5rUHJvcHNSZXF1aXJlZFtdID0gT2JqZWN0LmtleXMoXG4gICAgICByZXF1aXJlZFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc1JlcXVpcmVkW11cbiAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzUmVxdWlyZWQpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSA9PSBudWxsIHx8XG4gICAgICAgICAgKHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNPcHRpb25hbCwgdHJ1ZT4gPSB7XG4gICAgICBhczogdHJ1ZSxcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICBzY3JvbGw6IHRydWUsXG4gICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wczogTGlua1Byb3BzT3B0aW9uYWxbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgb3B0aW9uYWxQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNPcHRpb25hbFtdXG4gICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc09wdGlvbmFsKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnYXMnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldICYmXG4gICAgICAgICAgdHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmXG4gICAgICAgICAgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAga2V5ID09PSAncmVwbGFjZScgfHxcbiAgICAgICAga2V5ID09PSAnc2Nyb2xsJyB8fFxuICAgICAgICBrZXkgPT09ICdzaGFsbG93JyB8fFxuICAgICAgICBrZXkgPT09ICdwYXNzSHJlZicgfHxcbiAgICAgICAga2V5ID09PSAncHJlZmV0Y2gnXG4gICAgICApIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYGJvb2xlYW5gJyxcbiAgICAgICAgICAgIGFjdHVhbDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIGNvbnN0IGhhc1dhcm5lZCA9IFJlYWN0LnVzZVJlZihmYWxzZSlcbiAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgKVxuICAgIH1cbiAgfVxuICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG5cbiAgY29uc3QgW2NoaWxkRWxtLCBzZXRDaGlsZEVsbV0gPSBSZWFjdC51c2VTdGF0ZTxFbGVtZW50PigpXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcGF0aG5hbWUgPSAocm91dGVyICYmIHJvdXRlci5wYXRobmFtZSkgfHwgJy8nXG5cbiAgY29uc3QgeyBocmVmLCBhcyB9ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hcyA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcykgOiByZXNvbHZlZEhyZWYsXG4gICAgfVxuICB9LCBbcGF0aG5hbWUsIHByb3BzLmhyZWYsIHByb3BzLmFzXSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChcbiAgICAgIHAgJiZcbiAgICAgIEludGVyc2VjdGlvbk9ic2VydmVyICYmXG4gICAgICBjaGlsZEVsbSAmJlxuICAgICAgY2hpbGRFbG0udGFnTmFtZSAmJlxuICAgICAgaXNMb2NhbFVSTChocmVmKVxuICAgICkge1xuICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9IHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXVxuICAgICAgaWYgKCFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RlblRvSW50ZXJzZWN0aW9ucyhjaGlsZEVsbSwgKCkgPT4ge1xuICAgICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9LCBbcCwgY2hpbGRFbG0sIGhyZWYsIGFzLCByb3V0ZXJdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwgfSA9IHByb3BzXG4gIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgfVxuXG4gIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiAoZWw6IGFueSkgPT4ge1xuICAgICAgaWYgKGVsKSBzZXRDaGlsZEVsbShlbClcblxuICAgICAgaWYgKGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZC5yZWYoZWwpXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGQucmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbClcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgaWYgKHApIHtcbiAgICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgICB9XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gICAgfVxuICB9XG5cbiAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICBpZiAocHJvcHMucGFzc0hyZWYgfHwgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpKSB7XG4gICAgY2hpbGRQcm9wcy5ocmVmID0gYWRkQmFzZVBhdGgoYXMpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIXG4gID8gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpXG4gICAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLydcbiAgICAgIH1cbiAgICB9XG4gIDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2hcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oe30sIF9yb3V0ZXJbcHJvcGVydHldKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpIHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogVG9rZW5pemUgaW5wdXQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBsZXhlcihzdHIpIHtcbiAgICB2YXIgdG9rZW5zID0gW107XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHN0cltpXTtcbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKlwiIHx8IGNoYXIgPT09IFwiK1wiIHx8IGNoYXIgPT09IFwiP1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTU9ESUZJRVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVTQ0FQRURfQ0hBUlwiLCBpbmRleDogaSsrLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ7XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJPUEVOXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ9XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDTE9TRVwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiOlwiKSB7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvZGUgPSBzdHIuY2hhckNvZGVBdChqKTtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgLy8gYDAtOWBcbiAgICAgICAgICAgICAgICAoY29kZSA+PSA0OCAmJiBjb2RlIDw9IDU3KSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgQS1aYFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA2NSAmJiBjb2RlIDw9IDkwKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgYS16YFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA5NyAmJiBjb2RlIDw9IDEyMikgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYF9gXG4gICAgICAgICAgICAgICAgICAgIGNvZGUgPT09IDk1KSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUgKz0gc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghbmFtZSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXJhbWV0ZXIgbmFtZSBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk5BTUVcIiwgaW5kZXg6IGksIHZhbHVlOiBuYW1lIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgIHZhciBjb3VudCA9IDE7XG4gICAgICAgICAgICB2YXIgcGF0dGVybiA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUGF0dGVybiBjYW5ub3Qgc3RhcnQgd2l0aCBcXFwiP1xcXCIgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK10gKyBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiKVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50LS07XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc3RyW2pdID09PSBcIihcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RyW2ogKyAxXSAhPT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYXB0dXJpbmcgZ3JvdXBzIGFyZSBub3QgYWxsb3dlZCBhdCBcIiArIGopO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY291bnQpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuYmFsYW5jZWQgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgaWYgKCFwYXR0ZXJuKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJQQVRURVJOXCIsIGluZGV4OiBpLCB2YWx1ZTogcGF0dGVybiB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNIQVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICB9XG4gICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVORFwiLCBpbmRleDogaSwgdmFsdWU6IFwiXCIgfSk7XG4gICAgcmV0dXJuIHRva2Vucztcbn1cbi8qKlxuICogUGFyc2UgYSBzdHJpbmcgZm9yIHRoZSByYXcgdG9rZW5zLlxuICovXG5mdW5jdGlvbiBwYXJzZShzdHIsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciB0b2tlbnMgPSBsZXhlcihzdHIpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMucHJlZml4ZXMsIHByZWZpeGVzID0gX2EgPT09IHZvaWQgMCA/IFwiLi9cIiA6IF9hO1xuICAgIHZhciBkZWZhdWx0UGF0dGVybiA9IFwiW15cIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXSs/XCI7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBrZXkgPSAwO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgdmFyIHRyeUNvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICBpZiAoaSA8IHRva2Vucy5sZW5ndGggJiYgdG9rZW5zW2ldLnR5cGUgPT09IHR5cGUpXG4gICAgICAgICAgICByZXR1cm4gdG9rZW5zW2krK10udmFsdWU7XG4gICAgfTtcbiAgICB2YXIgbXVzdENvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICB2YXIgdmFsdWUgPSB0cnlDb25zdW1lKHR5cGUpO1xuICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgdmFyIF9hID0gdG9rZW5zW2ldLCBuZXh0VHlwZSA9IF9hLnR5cGUsIGluZGV4ID0gX2EuaW5kZXg7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmV4cGVjdGVkIFwiICsgbmV4dFR5cGUgKyBcIiBhdCBcIiArIGluZGV4ICsgXCIsIGV4cGVjdGVkIFwiICsgdHlwZSk7XG4gICAgfTtcbiAgICB2YXIgY29uc3VtZVRleHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBcIlwiO1xuICAgICAgICB2YXIgdmFsdWU7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICB3aGlsZSAoKHZhbHVlID0gdHJ5Q29uc3VtZShcIkNIQVJcIikgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKSkpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgd2hpbGUgKGkgPCB0b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gdHJ5Q29uc3VtZShcIkNIQVJcIik7XG4gICAgICAgIHZhciBuYW1lID0gdHJ5Q29uc3VtZShcIk5BTUVcIik7XG4gICAgICAgIHZhciBwYXR0ZXJuID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIik7XG4gICAgICAgIGlmIChuYW1lIHx8IHBhdHRlcm4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjaGFyIHx8IFwiXCI7XG4gICAgICAgICAgICBpZiAocHJlZml4ZXMuaW5kZXhPZihwcmVmaXgpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gcHJlZml4O1xuICAgICAgICAgICAgICAgIHByZWZpeCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUgfHwga2V5KyssXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IHBhdHRlcm4gfHwgZGVmYXVsdFBhdHRlcm4sXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciB2YWx1ZSA9IGNoYXIgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKTtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBwYXRoICs9IHZhbHVlO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG9wZW4gPSB0cnlDb25zdW1lKFwiT1BFTlwiKTtcbiAgICAgICAgaWYgKG9wZW4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgdmFyIG5hbWVfMSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgcGF0dGVybl8xID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgbXVzdENvbnN1bWUoXCJDTE9TRVwiKTtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lXzEgfHwgKHBhdHRlcm5fMSA/IGtleSsrIDogXCJcIiksXG4gICAgICAgICAgICAgICAgcGF0dGVybjogbmFtZV8xICYmICFwYXR0ZXJuXzEgPyBkZWZhdWx0UGF0dGVybiA6IHBhdHRlcm5fMSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IHN1ZmZpeCxcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgbXVzdENvbnN1bWUoXCJFTkRcIik7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnRzLnBhcnNlID0gcGFyc2U7XG4vKipcbiAqIENvbXBpbGUgYSBzdHJpbmcgdG8gYSB0ZW1wbGF0ZSBmdW5jdGlvbiBmb3IgdGhlIHBhdGguXG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGUoc3RyLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvRnVuY3Rpb24ocGFyc2Uoc3RyLCBvcHRpb25zKSwgb3B0aW9ucyk7XG59XG5leHBvcnRzLmNvbXBpbGUgPSBjb21waWxlO1xuLyoqXG4gKiBFeHBvc2UgYSBtZXRob2QgZm9yIHRyYW5zZm9ybWluZyB0b2tlbnMgaW50byB0aGUgcGF0aCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9GdW5jdGlvbih0b2tlbnMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciByZUZsYWdzID0gZmxhZ3Mob3B0aW9ucyk7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hLCBfYiA9IG9wdGlvbnMudmFsaWRhdGUsIHZhbGlkYXRlID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYjtcbiAgICAvLyBDb21waWxlIGFsbCB0aGUgdG9rZW5zIGludG8gcmVnZXhwcy5cbiAgICB2YXIgbWF0Y2hlcyA9IHRva2Vucy5tYXAoZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKFwiXig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSRcIiwgcmVGbGFncyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgdmFyIHBhdGggPSBcIlwiO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zW2ldO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW47XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBkYXRhID8gZGF0YVt0b2tlbi5uYW1lXSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHZhciBvcHRpb25hbCA9IHRva2VuLm1vZGlmaWVyID09PSBcIj9cIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCI7XG4gICAgICAgICAgICB2YXIgcmVwZWF0ID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIitcIjtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGlmICghcmVwZWF0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCBiZSBlbXB0eVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB2YWx1ZS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZSh2YWx1ZVtqXSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIGFsbCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZShTdHJpbmcodmFsdWUpLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB2YXIgdHlwZU9mTWVzc2FnZSA9IHJlcGVhdCA/IFwiYW4gYXJyYXlcIiA6IFwiYSBzdHJpbmdcIjtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIGJlIFwiICsgdHlwZU9mTWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfTtcbn1cbmV4cG9ydHMudG9rZW5zVG9GdW5jdGlvbiA9IHRva2Vuc1RvRnVuY3Rpb247XG4vKipcbiAqIENyZWF0ZSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBzcGVjLlxuICovXG5mdW5jdGlvbiBtYXRjaChzdHIsIG9wdGlvbnMpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIHZhciByZSA9IHBhdGhUb1JlZ2V4cChzdHIsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMubWF0Y2ggPSBtYXRjaDtcbi8qKlxuICogQ3JlYXRlIGEgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgb3V0cHV0LlxuICovXG5mdW5jdGlvbiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLmRlY29kZSwgZGVjb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2E7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwYXRobmFtZSkge1xuICAgICAgICB2YXIgbSA9IHJlLmV4ZWMocGF0aG5hbWUpO1xuICAgICAgICBpZiAoIW0pXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHZhciBwYXRoID0gbVswXSwgaW5kZXggPSBtLmluZGV4O1xuICAgICAgICB2YXIgcGFyYW1zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICBpZiAobVtpXSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHJldHVybiBcImNvbnRpbnVlXCI7XG4gICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tpIC0gMV07XG4gICAgICAgICAgICBpZiAoa2V5Lm1vZGlmaWVyID09PSBcIipcIiB8fCBrZXkubW9kaWZpZXIgPT09IFwiK1wiKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IG1baV0uc3BsaXQoa2V5LnByZWZpeCArIGtleS5zdWZmaXgpLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZSh2YWx1ZSwga2V5KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBkZWNvZGUobVtpXSwga2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBtLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBfbG9vcF8xKGkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHBhdGg6IHBhdGgsIGluZGV4OiBpbmRleCwgcGFyYW1zOiBwYXJhbXMgfTtcbiAgICB9O1xufVxuZXhwb3J0cy5yZWdleHBUb0Z1bmN0aW9uID0gcmVnZXhwVG9GdW5jdGlvbjtcbi8qKlxuICogRXNjYXBlIGEgcmVndWxhciBleHByZXNzaW9uIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gZXNjYXBlU3RyaW5nKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFsuKyo/PV4hOiR7fSgpW1xcXXwvXFxcXF0pL2csIFwiXFxcXCQxXCIpO1xufVxuLyoqXG4gKiBHZXQgdGhlIGZsYWdzIGZvciBhIHJlZ2V4cCBmcm9tIHRoZSBvcHRpb25zLlxuICovXG5mdW5jdGlvbiBmbGFncyhvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMgJiYgb3B0aW9ucy5zZW5zaXRpdmUgPyBcIlwiIDogXCJpXCI7XG59XG4vKipcbiAqIFB1bGwgb3V0IGtleXMgZnJvbSBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cykge1xuICAgIGlmICgha2V5cylcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgLy8gVXNlIGEgbmVnYXRpdmUgbG9va2FoZWFkIHRvIG1hdGNoIG9ubHkgY2FwdHVyaW5nIGdyb3Vwcy5cbiAgICB2YXIgZ3JvdXBzID0gcGF0aC5zb3VyY2UubWF0Y2goL1xcKCg/IVxcPykvZyk7XG4gICAgaWYgKGdyb3Vwcykge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdyb3Vwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAga2V5cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBpLFxuICAgICAgICAgICAgICAgIHByZWZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG4vKipcbiAqIFRyYW5zZm9ybSBhbiBhcnJheSBpbnRvIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiBhcnJheVRvUmVnZXhwKHBhdGhzLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgdmFyIHBhcnRzID0gcGF0aHMubWFwKGZ1bmN0aW9uIChwYXRoKSB7IHJldHVybiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykuc291cmNlOyB9KTtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChcIig/OlwiICsgcGFydHMuam9pbihcInxcIikgKyBcIilcIiwgZmxhZ3Mob3B0aW9ucykpO1xufVxuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIHJlZ2V4cCBmcm9tIHN0cmluZyBpbnB1dC5cbiAqL1xuZnVuY3Rpb24gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb1JlZ2V4cChwYXJzZShwYXRoLCBvcHRpb25zKSwga2V5cywgb3B0aW9ucyk7XG59XG4vKipcbiAqIEV4cG9zZSBhIGZ1bmN0aW9uIGZvciB0YWtpbmcgdG9rZW5zIGFuZCByZXR1cm5pbmcgYSBSZWdFeHAuXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvUmVnZXhwKHRva2Vucywga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5zdHJpY3QsIHN0cmljdCA9IF9hID09PSB2b2lkIDAgPyBmYWxzZSA6IF9hLCBfYiA9IG9wdGlvbnMuc3RhcnQsIHN0YXJ0ID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYiwgX2MgPSBvcHRpb25zLmVuZCwgZW5kID0gX2MgPT09IHZvaWQgMCA/IHRydWUgOiBfYywgX2QgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2QgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2Q7XG4gICAgdmFyIGVuZHNXaXRoID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5lbmRzV2l0aCB8fCBcIlwiKSArIFwiXXwkXCI7XG4gICAgdmFyIGRlbGltaXRlciA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdXCI7XG4gICAgdmFyIHJvdXRlID0gc3RhcnQgPyBcIl5cIiA6IFwiXCI7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIHRoZSB0b2tlbnMgYW5kIGNyZWF0ZSBvdXIgcmVnZXhwIHN0cmluZy5cbiAgICBmb3IgKHZhciBfaSA9IDAsIHRva2Vuc18xID0gdG9rZW5zOyBfaSA8IHRva2Vuc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNfMVtfaV07XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4pKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnByZWZpeCkpO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4uc3VmZml4KSk7XG4gICAgICAgICAgICBpZiAodG9rZW4ucGF0dGVybikge1xuICAgICAgICAgICAgICAgIGlmIChrZXlzKVxuICAgICAgICAgICAgICAgICAgICBrZXlzLnB1c2godG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmIChwcmVmaXggfHwgc3VmZml4KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbi5tb2RpZmllciA9PT0gXCIrXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbW9kID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiID8gXCI/XCIgOiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKCg/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSg/OlwiICsgc3VmZml4ICsgcHJlZml4ICsgXCIoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikpKilcIiArIHN1ZmZpeCArIFwiKVwiICsgbW9kO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZW5kKSB7XG4gICAgICAgIGlmICghc3RyaWN0KVxuICAgICAgICAgICAgcm91dGUgKz0gZGVsaW1pdGVyICsgXCI/XCI7XG4gICAgICAgIHJvdXRlICs9ICFvcHRpb25zLmVuZHNXaXRoID8gXCIkXCIgOiBcIig/PVwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBlbmRUb2tlbiA9IHRva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMV07XG4gICAgICAgIHZhciBpc0VuZERlbGltaXRlZCA9IHR5cGVvZiBlbmRUb2tlbiA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgPyBkZWxpbWl0ZXIuaW5kZXhPZihlbmRUb2tlbltlbmRUb2tlbi5sZW5ndGggLSAxXSkgPiAtMVxuICAgICAgICAgICAgOiAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgICAgICBlbmRUb2tlbiA9PT0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAoIXN0cmljdCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIGRlbGltaXRlciArIFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKSk/XCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc0VuZERlbGltaXRlZCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPz1cIiArIGRlbGltaXRlciArIFwifFwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFJlZ0V4cChyb3V0ZSwgZmxhZ3Mob3B0aW9ucykpO1xufVxuZXhwb3J0cy50b2tlbnNUb1JlZ2V4cCA9IHRva2Vuc1RvUmVnZXhwO1xuLyoqXG4gKiBOb3JtYWxpemUgdGhlIGdpdmVuIHBhdGggc3RyaW5nLCByZXR1cm5pbmcgYSByZWd1bGFyIGV4cHJlc3Npb24uXG4gKlxuICogQW4gZW1wdHkgYXJyYXkgY2FuIGJlIHBhc3NlZCBpbiBmb3IgdGhlIGtleXMsIHdoaWNoIHdpbGwgaG9sZCB0aGVcbiAqIHBsYWNlaG9sZGVyIGtleSBkZXNjcmlwdGlvbnMuIEZvciBleGFtcGxlLCB1c2luZyBgL3VzZXIvOmlkYCwgYGtleXNgIHdpbGxcbiAqIGNvbnRhaW4gYFt7IG5hbWU6ICdpZCcsIGRlbGltaXRlcjogJy8nLCBvcHRpb25hbDogZmFsc2UsIHJlcGVhdDogZmFsc2UgfV1gLlxuICovXG5mdW5jdGlvbiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChwYXRoIGluc3RhbmNlb2YgUmVnRXhwKVxuICAgICAgICByZXR1cm4gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cyk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocGF0aCkpXG4gICAgICAgIHJldHVybiBhcnJheVRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMucGF0aFRvUmVnZXhwID0gcGF0aFRvUmVnZXhwO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL1xuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoLFxuICByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCxcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcbmltcG9ydCB7IEdvb2RQYWdlQ2FjaGUsIFN0eWxlU2hlZXRUdXBsZSB9IGZyb20gJy4uLy4uLy4uL2NsaWVudC9wYWdlLWxvYWRlcidcbmltcG9ydCB7IGRlbm9ybWFsaXplUGFnZVBhdGggfSBmcm9tICcuLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vdXRpbHMvcXVlcnlzdHJpbmcnXG5pbXBvcnQgcmVzb2x2ZVJld3JpdGVzIGZyb20gJy4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuXG5pbnRlcmZhY2UgVHJhbnNpdGlvbk9wdGlvbnMge1xuICBzaGFsbG93PzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgTmV4dEhpc3RvcnlTdGF0ZSB7XG4gIHVybDogc3RyaW5nXG4gIGFzOiBzdHJpbmdcbiAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbn1cblxudHlwZSBIaXN0b3J5U3RhdGUgPSBudWxsIHwgeyBfX046IGZhbHNlIH0gfCAoeyBfX046IHRydWUgfSAmIE5leHRIaXN0b3J5U3RhdGUpXG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgY2FuY2VsbGVkOiB0cnVlLFxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICByZXR1cm4gYmFzZVBhdGggJiYgcGF0aC5zdGFydHNXaXRoKCcvJylcbiAgICA/IHBhdGggPT09ICcvJ1xuICAgICAgPyBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChiYXNlUGF0aClcbiAgICAgIDogYmFzZVBhdGggKyBwYXRoXG4gICAgOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpIHx8ICcvJ1xufVxuXG4vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0xvY2FsVVJMKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpKSByZXR1cm4gdHJ1ZVxuICB0cnkge1xuICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKVxuICAgIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luICYmIGhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKVxuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxuLyoqXG4gKiBSZXNvbHZlcyBhIGdpdmVuIGh5cGVybGluayB3aXRoIGEgY2VydGFpbiByb3V0ZXIgc3RhdGUgKGJhc2VQYXRoIG5vdCBpbmNsdWRlZCkuXG4gKiBQcmVzZXJ2ZXMgYWJzb2x1dGUgdXJscy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVIcmVmKGN1cnJlbnRQYXRoOiBzdHJpbmcsIGhyZWY6IFVybCk6IHN0cmluZyB7XG4gIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gIGNvbnN0IGJhc2UgPSBuZXcgVVJMKGN1cnJlbnRQYXRoLCAnaHR0cDovL24nKVxuICBjb25zdCB1cmxBc1N0cmluZyA9XG4gICAgdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnID8gaHJlZiA6IGZvcm1hdFdpdGhWYWxpZGF0aW9uKGhyZWYpXG4gIHRyeSB7XG4gICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKVxuICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICByZXR1cm4gZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpXG4gICAgICA6IGZpbmFsVXJsLmhyZWZcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiB1cmxBc1N0cmluZ1xuICB9XG59XG5cbmNvbnN0IFBBR0VfTE9BRF9FUlJPUiA9IFN5bWJvbCgnUEFHRV9MT0FEX0VSUk9SJylcbmV4cG9ydCBmdW5jdGlvbiBtYXJrTG9hZGluZ0Vycm9yKGVycjogRXJyb3IpOiBFcnJvciB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBQQUdFX0xPQURfRVJST1IsIHt9KVxufVxuXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyOiBOZXh0Um91dGVyLCB1cmw6IFVybCwgYXM6IFVybCkge1xuICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgcmV0dXJuIHtcbiAgICB1cmw6IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgdXJsKSksXG4gICAgYXM6IGFzID8gYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCBhcykpIDogYXMsXG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzID0gUGljazxQcml2YXRlUm91dGVJbmZvLCAnQ29tcG9uZW50JyB8ICdlcnInPiAmIHtcbiAgcm91dGVyOiBSb3V0ZXJcbn0gJiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5leHBvcnQgdHlwZSBBcHBDb21wb25lbnQgPSBDb21wb25lbnRUeXBlPEFwcFByb3BzPlxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChkYXRhOiBQcml2YXRlUm91dGVJbmZvLCBBcHA6IEFwcENvbXBvbmVudCkgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IE5leHRIaXN0b3J5U3RhdGUpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5XG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzLmpzb24oKVxuICB9KVxufVxuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmOiBzdHJpbmcsIGlzU2VydmVyUmVuZGVyOiBib29sZWFuKSB7XG4gIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgLy8gbG9vcC5cbiAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICBtYXJrTG9hZGluZ0Vycm9yKGVycilcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFByaXZhdGVSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuICBfaW5GbGlnaHRSb3V0ZT86IHN0cmluZ1xuICBfc2hhbGxvdz86IGJvb2xlYW5cblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBpbml0aWFsU3R5bGVTaGVldHMsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIGluaXRpYWxTdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgICAgIEFwcDogQXBwQ29tcG9uZW50XG4gICAgICB3cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHM6IGluaXRpYWxTdHlsZVNoZWV0cyxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7XG4gICAgICBDb21wb25lbnQ6IEFwcCBhcyBDb21wb25lbnRUeXBlLFxuICAgICAgc3R5bGVTaGVldHM6IFtcbiAgICAgICAgLyogL19hcHAgZG9lcyBub3QgbmVlZCBpdHMgc3R5bGVzaGVldHMgbWFuYWdlZCAqL1xuICAgICAgXSxcbiAgICB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIHRoaXMuYXNQYXRoID1cbiAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBfX05FWFRfREFUQV9fLmF1dG9FeHBvcnQgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICAgIGdldFVSTCgpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuXG4gICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnXG5cbiAgICAgICAgICBsZXQgc2Nyb2xsRGVib3VuY2VUaW1lb3V0OiB1bmRlZmluZWQgfCBOb2RlSlMuVGltZW91dFxuXG4gICAgICAgICAgY29uc3QgZGVib3VuY2VkU2Nyb2xsU2F2ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpIGNsZWFyVGltZW91dChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpXG5cbiAgICAgICAgICAgIHNjcm9sbERlYm91bmNlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB7IHVybCwgYXM6IGN1ckFzLCBvcHRpb25zIH0gPSBoaXN0b3J5LnN0YXRlXG4gICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGN1ckFzLFxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgICAgIF9OX1g6IHdpbmRvdy5zY3JvbGxYLFxuICAgICAgICAgICAgICAgICAgX05fWTogd2luZG93LnNjcm9sbFksXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSwgMTApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGRlYm91bmNlZFNjcm9sbFNhdmUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGUgYXMgSGlzdG9yeVN0YXRlXG5cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucyB9ID0gc3RhdGVcblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZShcbiAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgdXJsLFxuICAgICAgYXMsXG4gICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgIHNoYWxsb3c6IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLl9zaGFsbG93LFxuICAgICAgfSlcbiAgICApXG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIGFzeW5jIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmxcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgfVxuICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICBpZiAoU1QpIHtcbiAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSlcbiAgICB9XG5cbiAgICBjb25zdCBjbGVhbmVkQXMgPSBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhc1xuICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhc1xuXG4gICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKSB7XG4gICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBc1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcylcbiAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcylcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSlcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICBjb25zdCB7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIucHJvbWlzZWRCdWlsZE1hbmlmZXN0XG5cbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSwgc2VhcmNoUGFyYW1zIH0gPSBwYXJzZWRcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpXG5cbiAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgPyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZSkpXG4gICAgICA6IHBhdGhuYW1lXG5cbiAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSkge1xuICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG5cbiAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUykge1xuICAgICAgcmVzb2x2ZWRBcyA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgYXMsXG4gICAgICAgIHBhZ2VzLFxuICAgICAgICBiYXNlUGF0aCxcbiAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICAocDogc3RyaW5nKSA9PiB0aGlzLl9yZXNvbHZlSHJlZih7IHBhdGhuYW1lOiBwIH0sIHBhZ2VzKS5wYXRobmFtZSFcbiAgICAgIClcbiAgICB9XG4gICAgcmVzb2x2ZWRBcyA9IGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpXG5cbiAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICBjb25zdCB7IHBhdGhuYW1lOiBhc1BhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpXG4gICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGAgZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCArXG4gICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2luY29tcGF0aWJsZS1ocmVmLWFzYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcylcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHNoYWxsb3dcbiAgICAgIClcbiAgICAgIGxldCB7IGVycm9yIH0gPSByb3V0ZUluZm9cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUhLCBxdWVyeSwgY2xlYW5lZEFzLCByb3V0ZUluZm8pLmNhdGNoKFxuICAgICAgICAoZSkgPT4ge1xuICAgICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlXG4gICAgICAgICAgZWxzZSB0aHJvdyBlXG4gICAgICAgIH1cbiAgICAgIClcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiAmJiAnX05fWCcgaW4gb3B0aW9ucykge1xuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygob3B0aW9ucyBhcyBhbnkpLl9OX1gsIChvcHRpb25zIGFzIGFueSkuX05fWSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3dcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgIH0gYXMgSGlzdG9yeVN0YXRlLFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgaWYgKFBBR0VfTE9BRF9FUlJPUiBpbiBlcnIgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcylcblxuICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKClcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBwYWdlOiBDb21wb25lbnQsIHN0eWxlU2hlZXRzIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KFxuICAgICAgICAnL19lcnJvcidcbiAgICAgIClcbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgZXJyLFxuICAgICAgICBlcnJvcjogZXJyLFxuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICBlcnIsXG4gICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgIH0gYXMgYW55KVxuICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycilcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3Iocm91dGVJbmZvRXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCB0cnVlKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHNoYWxsb3c6IGJvb2xlYW4gPSBmYWxzZVxuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuXG4gICAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlZFJvdXRlSW5mb1xuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgPyBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpID0+ICh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSlcblxuICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIGRlbEJhc2VQYXRoKGFzKSxcbiAgICAgICAgICBfX05fU1NHXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhPFByaXZhdGVSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgIF9fTl9TU0dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgIClcbiAgICAgIClcbiAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMpXG4gICAgfVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWY6IFVybE9iamVjdCwgcGFnZXM6IHN0cmluZ1tdKSB7XG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VkSHJlZlxuICAgIGNvbnN0IGNsZWFuUGF0aG5hbWUgPSBkZW5vcm1hbGl6ZVBhZ2VQYXRoKGRlbEJhc2VQYXRoKHBhdGhuYW1lISkpXG5cbiAgICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgICB9XG5cbiAgICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gICAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lISkpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIHBhZ2VzLnNvbWUoKHBhZ2UpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGlzRHluYW1pY1JvdXRlKHBhZ2UpICYmXG4gICAgICAgICAgZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUhKVxuICAgICAgICApIHtcbiAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGFnZSlcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gcGFyc2VkSHJlZlxuICB9XG5cbiAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9cbiAgYXN5bmMgcHJlZmV0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXNQYXRoOiBzdHJpbmcgPSB1cmwsXG4gICAgb3B0aW9uczogUHJlZmV0Y2hPcHRpb25zID0ge31cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZFxuXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcykgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMucGFnZUxvYWRlci5wcmVmZXRjaERhdGEodXJsLCBhc1BhdGgpLFxuICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgIF0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxHb29kUGFnZUNhY2hlPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbY2FjaGVLZXldKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSlcbiAgICB9XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGFcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCBhcyBBcHBDb21wb25lbnQpXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLCBhcylcbiAgICAgIHRoaXMuY2xjKClcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeShkYXRhOiBQcml2YXRlUm91dGVJbmZvKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQgYXMgQXBwQ29tcG9uZW50KVxuICB9XG59XG4iLCIvLyBGb3JtYXQgZnVuY3Rpb24gbW9kaWZpZWQgZnJvbSBub2RlanNcbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0ICogYXMgcXVlcnlzdHJpbmcgZnJvbSAnLi9xdWVyeXN0cmluZydcblxuY29uc3Qgc2xhc2hlZFByb3RvY29scyA9IC9odHRwcz98ZnRwfGdvcGhlcnxmaWxlL1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VXJsKHVybE9iajogVXJsT2JqZWN0KSB7XG4gIGxldCB7IGF1dGgsIGhvc3RuYW1lIH0gPSB1cmxPYmpcbiAgbGV0IHByb3RvY29sID0gdXJsT2JqLnByb3RvY29sIHx8ICcnXG4gIGxldCBwYXRobmFtZSA9IHVybE9iai5wYXRobmFtZSB8fCAnJ1xuICBsZXQgaGFzaCA9IHVybE9iai5oYXNoIHx8ICcnXG4gIGxldCBxdWVyeSA9IHVybE9iai5xdWVyeSB8fCAnJ1xuICBsZXQgaG9zdDogc3RyaW5nIHwgZmFsc2UgPSBmYWxzZVxuXG4gIGF1dGggPSBhdXRoID8gZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpLnJlcGxhY2UoLyUzQS9pLCAnOicpICsgJ0AnIDogJydcblxuICBpZiAodXJsT2JqLmhvc3QpIHtcbiAgICBob3N0ID0gYXV0aCArIHVybE9iai5ob3N0XG4gIH0gZWxzZSBpZiAoaG9zdG5hbWUpIHtcbiAgICBob3N0ID0gYXV0aCArICh+aG9zdG5hbWUuaW5kZXhPZignOicpID8gYFske2hvc3RuYW1lfV1gIDogaG9zdG5hbWUpXG4gICAgaWYgKHVybE9iai5wb3J0KSB7XG4gICAgICBob3N0ICs9ICc6JyArIHVybE9iai5wb3J0XG4gICAgfVxuICB9XG5cbiAgaWYgKHF1ZXJ5ICYmIHR5cGVvZiBxdWVyeSA9PT0gJ29iamVjdCcpIHtcbiAgICBxdWVyeSA9IFN0cmluZyhxdWVyeXN0cmluZy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHF1ZXJ5IGFzIFBhcnNlZFVybFF1ZXJ5KSlcbiAgfVxuXG4gIGxldCBzZWFyY2ggPSB1cmxPYmouc2VhcmNoIHx8IChxdWVyeSAmJiBgPyR7cXVlcnl9YCkgfHwgJydcblxuICBpZiAocHJvdG9jb2wgJiYgcHJvdG9jb2wuc3Vic3RyKC0xKSAhPT0gJzonKSBwcm90b2NvbCArPSAnOidcblxuICBpZiAoXG4gICAgdXJsT2JqLnNsYXNoZXMgfHxcbiAgICAoKCFwcm90b2NvbCB8fCBzbGFzaGVkUHJvdG9jb2xzLnRlc3QocHJvdG9jb2wpKSAmJiBob3N0ICE9PSBmYWxzZSlcbiAgKSB7XG4gICAgaG9zdCA9ICcvLycgKyAoaG9zdCB8fCAnJylcbiAgICBpZiAocGF0aG5hbWUgJiYgcGF0aG5hbWVbMF0gIT09ICcvJykgcGF0aG5hbWUgPSAnLycgKyBwYXRobmFtZVxuICB9IGVsc2UgaWYgKCFob3N0KSB7XG4gICAgaG9zdCA9ICcnXG4gIH1cblxuICBpZiAoaGFzaCAmJiBoYXNoWzBdICE9PSAnIycpIGhhc2ggPSAnIycgKyBoYXNoXG4gIGlmIChzZWFyY2ggJiYgc2VhcmNoWzBdICE9PSAnPycpIHNlYXJjaCA9ICc/JyArIHNlYXJjaFxuXG4gIHBhdGhuYW1lID0gcGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLCBlbmNvZGVVUklDb21wb25lbnQpXG4gIHNlYXJjaCA9IHNlYXJjaC5yZXBsYWNlKCcjJywgJyUyMycpXG5cbiAgcmV0dXJuIGAke3Byb3RvY29sfSR7aG9zdH0ke3BhdGhuYW1lfSR7c2VhcmNofSR7aGFzaH1gXG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImltcG9ydCB7IGdldExvY2F0aW9uT3JpZ2luIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmNvbnN0IERVTU1ZX0JBU0UgPSBuZXcgVVJMKFxuICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/ICdodHRwOi8vbicgOiBnZXRMb2NhdGlvbk9yaWdpbigpXG4pXG5cbi8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsOiBzdHJpbmcsIGJhc2U/OiBzdHJpbmcpIHtcbiAgY29uc3QgcmVzb2x2ZWRCYXNlID0gYmFzZSA/IG5ldyBVUkwoYmFzZSwgRFVNTVlfQkFTRSkgOiBEVU1NWV9CQVNFXG4gIGNvbnN0IHtcbiAgICBwYXRobmFtZSxcbiAgICBzZWFyY2hQYXJhbXMsXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZixcbiAgICBvcmlnaW4sXG4gICAgcHJvdG9jb2wsXG4gIH0gPSBuZXcgVVJMKHVybCwgcmVzb2x2ZWRCYXNlKVxuICBpZiAoXG4gICAgb3JpZ2luICE9PSBEVU1NWV9CQVNFLm9yaWdpbiB8fFxuICAgIChwcm90b2NvbCAhPT0gJ2h0dHA6JyAmJiBwcm90b2NvbCAhPT0gJ2h0dHBzOicpXG4gICkge1xuICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCcpXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBzZWFyY2hQYXJhbXMsXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZjogaHJlZi5zbGljZShEVU1NWV9CQVNFLm9yaWdpbi5sZW5ndGgpLFxuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBwYXRoVG9SZWdleHAgZnJvbSAnbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwJ1xuXG5leHBvcnQgeyBwYXRoVG9SZWdleHAgfVxuXG5leHBvcnQgY29uc3QgbWF0Y2hlck9wdGlvbnMgPSB7XG4gIHNlbnNpdGl2ZTogZmFsc2UsXG4gIGRlbGltaXRlcjogJy8nLFxuICBkZWNvZGU6IGRlY29kZVBhcmFtLFxufVxuXG5leHBvcnQgY29uc3QgY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyA9IHtcbiAgLi4ubWF0Y2hlck9wdGlvbnMsXG4gIHN0cmljdDogdHJ1ZSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgKGN1c3RvbVJvdXRlID0gZmFsc2UpID0+IHtcbiAgcmV0dXJuIChwYXRoOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBrZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICAgIGNvbnN0IG1hdGNoZXJSZWdleCA9IHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoXG4gICAgICBwYXRoLFxuICAgICAga2V5cyxcbiAgICAgIGN1c3RvbVJvdXRlID8gY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyA6IG1hdGNoZXJPcHRpb25zXG4gICAgKVxuICAgIGNvbnN0IG1hdGNoZXIgPSBwYXRoVG9SZWdleHAucmVnZXhwVG9GdW5jdGlvbihcbiAgICAgIG1hdGNoZXJSZWdleCxcbiAgICAgIGtleXMsXG4gICAgICBtYXRjaGVyT3B0aW9uc1xuICAgIClcblxuICAgIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQsIHBhcmFtcz86IGFueSkgPT4ge1xuICAgICAgY29uc3QgcmVzID0gcGF0aG5hbWUgPT0gbnVsbCA/IGZhbHNlIDogbWF0Y2hlcihwYXRobmFtZSlcbiAgICAgIGlmICghcmVzKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuXG4gICAgICBpZiAoY3VzdG9tUm91dGUpIHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgICAgICAgIC8vIHVubmFtZWQgcGFyYW1zIHNob3VsZCBiZSByZW1vdmVkIGFzIHRoZXlcbiAgICAgICAgICAvLyBhcmUgbm90IGFsbG93ZWQgdG8gYmUgdXNlZCBpbiB0aGUgZGVzdGluYXRpb25cbiAgICAgICAgICBpZiAodHlwZW9mIGtleS5uYW1lID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgZGVsZXRlIChyZXMucGFyYW1zIGFzIGFueSlba2V5Lm5hbWVdXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7IC4uLnBhcmFtcywgLi4ucmVzLnBhcmFtcyB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGRlY29kZVBhcmFtKHBhcmFtOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICB9IGNhdGNoIChfKSB7XG4gICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKCdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJylcbiAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgIHRocm93IGVyclxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgKiBhcyBwYXRoVG9SZWdleHAgZnJvbSAnbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwJ1xuXG50eXBlIFBhcmFtcyA9IHsgW3BhcmFtOiBzdHJpbmddOiBhbnkgfVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmVwYXJlRGVzdGluYXRpb24oXG4gIGRlc3RpbmF0aW9uOiBzdHJpbmcsXG4gIHBhcmFtczogUGFyYW1zLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gIGFwcGVuZFBhcmFtc1RvUXVlcnk6IGJvb2xlYW4sXG4gIGJhc2VQYXRoOiBzdHJpbmdcbikge1xuICBsZXQgcGFyc2VkRGVzdGluYXRpb246IHtcbiAgICBxdWVyeT86IFBhcnNlZFVybFF1ZXJ5XG4gICAgcHJvdG9jb2w/OiBzdHJpbmdcbiAgICBob3N0bmFtZT86IHN0cmluZ1xuICAgIHBvcnQ/OiBzdHJpbmdcbiAgfSAmIFJldHVyblR5cGU8dHlwZW9mIHBhcnNlUmVsYXRpdmVVcmw+ID0ge30gYXMgYW55XG5cbiAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgIHBhcnNlZERlc3RpbmF0aW9uID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHNlYXJjaFBhcmFtcyxcbiAgICAgIGhhc2gsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBwcm90b2NvbCxcbiAgICAgIHNlYXJjaCxcbiAgICAgIGhyZWYsXG4gICAgfSA9IG5ldyBVUkwoZGVzdGluYXRpb24pXG5cbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgc2VhcmNoUGFyYW1zLFxuICAgICAgaGFzaCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9XG4gIH1cblxuICBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gICAgcGFyc2VkRGVzdGluYXRpb24uc2VhcmNoUGFyYW1zXG4gIClcbiAgY29uc3QgZGVzdFF1ZXJ5ID0gcGFyc2VkRGVzdGluYXRpb24ucXVlcnlcbiAgY29uc3QgZGVzdFBhdGggPSBgJHtwYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSF9JHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5oYXNoIHx8ICcnXG4gIH1gXG4gIGNvbnN0IGRlc3RQYXRoUGFyYW1LZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKGRlc3RQYXRoLCBkZXN0UGF0aFBhcmFtS2V5cylcblxuICBjb25zdCBkZXN0UGF0aFBhcmFtcyA9IGRlc3RQYXRoUGFyYW1LZXlzLm1hcCgoa2V5KSA9PiBrZXkubmFtZSlcblxuICBsZXQgZGVzdGluYXRpb25Db21waWxlciA9IHBhdGhUb1JlZ2V4cC5jb21waWxlKFxuICAgIGRlc3RQYXRoLFxuICAgIC8vIHdlIGRvbid0IHZhbGlkYXRlIHdoaWxlIGNvbXBpbGluZyB0aGUgZGVzdGluYXRpb24gc2luY2Ugd2Ugc2hvdWxkXG4gICAgLy8gaGF2ZSBhbHJlYWR5IHZhbGlkYXRlZCBiZWZvcmUgd2UgZ290IHRvIHRoaXMgcG9pbnQgYW5kIHZhbGlkYXRpbmdcbiAgICAvLyBicmVha3MgY29tcGlsaW5nIGRlc3RpbmF0aW9ucyB3aXRoIG5hbWVkIHBhdHRlcm4gcGFyYW1zIGZyb20gdGhlIHNvdXJjZVxuICAgIC8vIGUuZy4gL3NvbWV0aGluZzpoZWxsbyguKikgLT4gL2Fub3RoZXIvOmhlbGxvIGlzIGJyb2tlbiB3aXRoIHZhbGlkYXRpb25cbiAgICAvLyBzaW5jZSBjb21waWxlIHZhbGlkYXRpb24gaXMgbWVhbnQgZm9yIHJldmVyc2luZyBhbmQgbm90IGZvciBpbnNlcnRpbmdcbiAgICAvLyBwYXJhbXMgZnJvbSBhIHNlcGFyYXRlIHBhdGgtcmVnZXggaW50byBhbm90aGVyXG4gICAgeyB2YWxpZGF0ZTogZmFsc2UgfVxuICApXG4gIGxldCBuZXdVcmxcblxuICAvLyB1cGRhdGUgYW55IHBhcmFtcyBpbiBxdWVyeSB2YWx1ZXNcbiAgZm9yIChjb25zdCBba2V5LCBzdHJPckFycmF5XSBvZiBPYmplY3QuZW50cmllcyhkZXN0UXVlcnkpKSB7XG4gICAgbGV0IHZhbHVlID0gQXJyYXkuaXNBcnJheShzdHJPckFycmF5KSA/IHN0ck9yQXJyYXlbMF0gOiBzdHJPckFycmF5XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICAvLyB0aGUgdmFsdWUgbmVlZHMgdG8gc3RhcnQgd2l0aCBhIGZvcndhcmQtc2xhc2ggdG8gYmUgY29tcGlsZWRcbiAgICAgIC8vIGNvcnJlY3RseVxuICAgICAgdmFsdWUgPSBgLyR7dmFsdWV9YFxuICAgICAgY29uc3QgcXVlcnlDb21waWxlciA9IHBhdGhUb1JlZ2V4cC5jb21waWxlKHZhbHVlLCB7IHZhbGlkYXRlOiBmYWxzZSB9KVxuICAgICAgdmFsdWUgPSBxdWVyeUNvbXBpbGVyKHBhcmFtcykuc3Vic3RyKDEpXG4gICAgfVxuICAgIGRlc3RRdWVyeVtrZXldID0gdmFsdWVcbiAgfVxuXG4gIC8vIGFkZCBwYXRoIHBhcmFtcyB0byBxdWVyeSBpZiBpdCdzIG5vdCBhIHJlZGlyZWN0IGFuZCBub3RcbiAgLy8gYWxyZWFkeSBkZWZpbmVkIGluIGRlc3RpbmF0aW9uIHF1ZXJ5IG9yIHBhdGhcbiAgY29uc3QgcGFyYW1LZXlzID0gT2JqZWN0LmtleXMocGFyYW1zKVxuXG4gIGlmIChcbiAgICBhcHBlbmRQYXJhbXNUb1F1ZXJ5ICYmXG4gICAgIXBhcmFtS2V5cy5zb21lKChrZXkpID0+IGRlc3RQYXRoUGFyYW1zLmluY2x1ZGVzKGtleSkpXG4gICkge1xuICAgIGZvciAoY29uc3Qga2V5IG9mIHBhcmFtS2V5cykge1xuICAgICAgaWYgKCEoa2V5IGluIGRlc3RRdWVyeSkpIHtcbiAgICAgICAgZGVzdFF1ZXJ5W2tleV0gPSBwYXJhbXNba2V5XVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHNob3VsZEFkZEJhc2VQYXRoID0gZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpICYmIGJhc2VQYXRoXG5cbiAgdHJ5IHtcbiAgICBuZXdVcmwgPSBgJHtzaG91bGRBZGRCYXNlUGF0aCA/IGJhc2VQYXRoIDogJyd9JHtlbmNvZGVVUkkoXG4gICAgICBkZXN0aW5hdGlvbkNvbXBpbGVyKHBhcmFtcylcbiAgICApfWBcblxuICAgIGNvbnN0IFtwYXRobmFtZSwgaGFzaF0gPSBuZXdVcmwuc3BsaXQoJyMnKVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5oYXNoID0gYCR7aGFzaCA/ICcjJyA6ICcnfSR7aGFzaCB8fCAnJ31gXG4gICAgZGVsZXRlIHBhcnNlZERlc3RpbmF0aW9uLnNlYXJjaFxuICAgIGRlbGV0ZSBwYXJzZWREZXN0aW5hdGlvbi5zZWFyY2hQYXJhbXNcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgaWYgKGVyci5tZXNzYWdlLm1hdGNoKC9FeHBlY3RlZCAuKj8gdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhbiBhcnJheS8pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBUbyB1c2UgYSBtdWx0aS1tYXRjaCBpbiB0aGUgZGVzdGluYXRpb24geW91IG11c3QgYWRkIFxcYCpcXGAgYXQgdGhlIGVuZCBvZiB0aGUgcGFyYW0gbmFtZSB0byBzaWduaWZ5IGl0IHNob3VsZCByZXBlYXQuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2ludmFsaWQtbXVsdGktbWF0Y2hgXG4gICAgICApXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9XG5cbiAgLy8gUXVlcnkgbWVyZ2Ugb3JkZXIgbG93ZXN0IHByaW9yaXR5IHRvIGhpZ2hlc3RcbiAgLy8gMS4gaW5pdGlhbCBVUkwgcXVlcnkgdmFsdWVzXG4gIC8vIDIuIHBhdGggc2VnbWVudCB2YWx1ZXNcbiAgLy8gMy4gZGVzdGluYXRpb24gc3BlY2lmaWVkIHF1ZXJ5IHZhbHVlc1xuICBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeSA9IHtcbiAgICAuLi5xdWVyeSxcbiAgICAuLi5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSxcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbmV3VXJsLFxuICAgIHBhcnNlZERlc3RpbmF0aW9uLFxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShcbiAgc2VhcmNoUGFyYW1zOiBVUkxTZWFyY2hQYXJhbXNcbik6IFBhcnNlZFVybFF1ZXJ5IHtcbiAgY29uc3QgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cbiAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICBpZiAodHlwZW9mIHF1ZXJ5W2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBxdWVyeVtrZXldID0gdmFsdWVcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpIHtcbiAgICAgIDsocXVlcnlba2V5XSBhcyBzdHJpbmdbXSkucHVzaCh2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgcXVlcnlba2V5XSA9IFtxdWVyeVtrZXldIGFzIHN0cmluZywgdmFsdWVdXG4gICAgfVxuICB9KVxuICByZXR1cm4gcXVlcnlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMoXG4gIHVybFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgY29uc3QgcmVzdWx0ID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpXG4gIE9iamVjdC5lbnRyaWVzKHVybFF1ZXJ5KS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlLmZvckVhY2goKGl0ZW0pID0+IHJlc3VsdC5hcHBlbmQoa2V5LCBpdGVtKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0LnNldChrZXksIHZhbHVlKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduKFxuICB0YXJnZXQ6IFVSTFNlYXJjaFBhcmFtcyxcbiAgLi4uc2VhcmNoUGFyYW1zTGlzdDogVVJMU2VhcmNoUGFyYW1zW11cbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIHNlYXJjaFBhcmFtc0xpc3QuZm9yRWFjaCgoc2VhcmNoUGFyYW1zKSA9PiB7XG4gICAgQXJyYXkuZnJvbShzZWFyY2hQYXJhbXMua2V5cygpKS5mb3JFYWNoKChrZXkpID0+IHRhcmdldC5kZWxldGUoa2V5KSlcbiAgICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4gdGFyZ2V0LmFwcGVuZChrZXksIHZhbHVlKSlcbiAgfSlcbiAgcmV0dXJuIHRhcmdldFxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCBwYXRoTWF0Y2ggZnJvbSAnLi9wYXRoLW1hdGNoJ1xuaW1wb3J0IHByZXBhcmVEZXN0aW5hdGlvbiBmcm9tICcuL3ByZXBhcmUtZGVzdGluYXRpb24nXG5pbXBvcnQgeyBSZXdyaXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL2xvYWQtY3VzdG9tLXJvdXRlcydcblxuY29uc3QgY3VzdG9tUm91dGVNYXRjaGVyID0gcGF0aE1hdGNoKHRydWUpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc29sdmVSZXdyaXRlcyhcbiAgYXNQYXRoOiBzdHJpbmcsXG4gIHBhZ2VzOiBzdHJpbmdbXSxcbiAgYmFzZVBhdGg6IHN0cmluZyxcbiAgcmV3cml0ZXM6IFJld3JpdGVbXSxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICByZXNvbHZlSHJlZjogKHBhdGg6IHN0cmluZykgPT4gc3RyaW5nXG4pIHtcbiAgaWYgKCFwYWdlcy5pbmNsdWRlcyhhc1BhdGgpKSB7XG4gICAgZm9yIChjb25zdCByZXdyaXRlIG9mIHJld3JpdGVzKSB7XG4gICAgICBjb25zdCBtYXRjaGVyID0gY3VzdG9tUm91dGVNYXRjaGVyKHJld3JpdGUuc291cmNlKVxuICAgICAgY29uc3QgcGFyYW1zID0gbWF0Y2hlcihhc1BhdGgpXG5cbiAgICAgIGlmIChwYXJhbXMpIHtcbiAgICAgICAgaWYgKCFyZXdyaXRlLmRlc3RpbmF0aW9uKSB7XG4gICAgICAgICAgLy8gdGhpcyBpcyBhIHByb3hpZWQgcmV3cml0ZSB3aGljaCBpc24ndCBoYW5kbGVkIG9uIHRoZSBjbGllbnRcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRlc3RSZXMgPSBwcmVwYXJlRGVzdGluYXRpb24oXG4gICAgICAgICAgcmV3cml0ZS5kZXN0aW5hdGlvbixcbiAgICAgICAgICBwYXJhbXMsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICByZXdyaXRlLmJhc2VQYXRoID09PSBmYWxzZSA/ICcnIDogYmFzZVBhdGhcbiAgICAgICAgKVxuICAgICAgICBhc1BhdGggPSBkZXN0UmVzLnBhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lIVxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCBkZXN0UmVzLnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5KVxuXG4gICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhhc1BhdGgpKSB7XG4gICAgICAgICAgLy8gY2hlY2sgaWYgd2Ugbm93IG1hdGNoIGEgcGFnZSBhcyB0aGlzIG1lYW5zIHdlIGFyZSBkb25lXG4gICAgICAgICAgLy8gcmVzb2x2aW5nIHRoZSByZXdyaXRlc1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cblxuICAgICAgICAvLyBjaGVjayBpZiB3ZSBtYXRjaCBhIGR5bmFtaWMtcm91dGUsIGlmIHNvIHdlIGJyZWFrIHRoZSByZXdyaXRlcyBjaGFpblxuICAgICAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlSHJlZihhc1BhdGgpXG5cbiAgICAgICAgaWYgKHJlc29sdmVkSHJlZiAhPT0gYXNQYXRoICYmIHBhZ2VzLmluY2x1ZGVzKHJlc29sdmVkSHJlZikpIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBhc1BhdGhcbn1cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiaW50ZXJmYWNlIEdyb3VwIHtcbiAgcG9zOiBudW1iZXJcbiAgcmVwZWF0OiBib29sZWFuXG4gIG9wdGlvbmFsOiBib29sZWFuXG59XG5cbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3B0aW9uYWwgPSBwYXJhbS5zdGFydHNXaXRoKCdbJykgJiYgcGFyYW0uZW5kc1dpdGgoJ10nKVxuICBpZiAob3B0aW9uYWwpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDEsIC0xKVxuICB9XG4gIGNvbnN0IHJlcGVhdCA9IHBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpXG4gIGlmIChyZXBlYXQpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDMpXG4gIH1cbiAgcmV0dXJuIHsga2V5OiBwYXJhbSwgcmVwZWF0LCBvcHRpb25hbCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgcm91dGVLZXlzPzogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9XG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9XG59IHtcbiAgY29uc3Qgc2VnbWVudHMgPSAobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuICAgIC5zbGljZSgxKVxuICAgIC5zcGxpdCgnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgZ3JvdXBzW2tleV0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQsIG9wdGlvbmFsIH1cbiAgICAgICAgcmV0dXJuIHJlcGVhdCA/IChvcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgIGxldCByb3V0ZUtleUNoYXJMZW5ndGggPSAxXG5cbiAgICAvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgY29uc3QgZ2V0U2FmZVJvdXRlS2V5ID0gKCkgPT4ge1xuICAgICAgbGV0IHJvdXRlS2V5ID0gJydcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZUtleUNoYXJMZW5ndGg7IGkrKykge1xuICAgICAgICByb3V0ZUtleSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpXG4gICAgICAgIHJvdXRlS2V5Q2hhckNvZGUrK1xuXG4gICAgICAgIGlmIChyb3V0ZUtleUNoYXJDb2RlID4gMTIyKSB7XG4gICAgICAgICAgcm91dGVLZXlDaGFyTGVuZ3RoKytcbiAgICAgICAgICByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlS2V5XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVLZXlzOiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuXG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgICAvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4gICAgICAgICAgLy8gdGhlIG5hbWVkIHJlZ2V4XG4gICAgICAgICAgbGV0IGNsZWFuZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxXL2csICcnKVxuICAgICAgICAgIGxldCBpbnZhbGlkS2V5ID0gZmFsc2VcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuICAgICAgICAgIC8vIHNhZmUga2V5XG4gICAgICAgICAgaWYgKGNsZWFuZWRLZXkubGVuZ3RoID09PSAwIHx8IGNsZWFuZWRLZXkubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwgMSkpKSkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW52YWxpZEtleSkge1xuICAgICAgICAgICAgY2xlYW5lZEtleSA9IGdldFNhZmVSb3V0ZUtleSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVLZXlzW2NsZWFuZWRLZXldID0ga2V5XG4gICAgICAgICAgcmV0dXJuIHJlcGVhdFxuICAgICAgICAgICAgPyBvcHRpb25hbFxuICAgICAgICAgICAgICA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gXG4gICAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgXG4gICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgICBncm91cHMsXG4gICAgICByb3V0ZUtleXMsXG4gICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICBncm91cHMsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gJy4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJy4uLy4uL2xpYi9sb2FkLWVudi1jb25maWcnXG5pbXBvcnQgeyBCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vc2VydmVyL2dldC1wYWdlLWZpbGVzJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuLyoqXG4gKiBXZWIgdml0YWxzIHByb3ZpZGVkIHRvIF9hcHAucmVwb3J0V2ViVml0YWxzIGJ5IENvcmUgV2ViIFZpdGFscyBwbHVnaW4gZGV2ZWxvcGVkIGJ5IEdvb2dsZSBDaHJvbWUgdGVhbS5cbiAqIGh0dHBzOi8vbmV4dGpzLm9yZy9ibG9nL25leHQtOS00I2ludGVncmF0ZWQtd2ViLXZpdGFscy1yZXBvcnRpbmdcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dFdlYlZpdGFsc01ldHJpYyA9IHtcbiAgaWQ6IHN0cmluZ1xuICBsYWJlbDogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBzdGFydFRpbWU6IG51bWJlclxuICB2YWx1ZTogbnVtYmVyXG59XG5cbmV4cG9ydCB0eXBlIEVuaGFuY2VyPEM+ID0gKENvbXBvbmVudDogQykgPT4gQ1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRzRW5oYW5jZXIgPVxuICB8IHtcbiAgICAgIGVuaGFuY2VBcHA/OiBFbmhhbmNlcjxBcHBUeXBlPlxuICAgICAgZW5oYW5jZUNvbXBvbmVudD86IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuICAgIH1cbiAgfCBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZVJlc3VsdCA9IHtcbiAgaHRtbDogc3RyaW5nXG4gIGhlYWQ/OiBBcnJheTxKU1guRWxlbWVudCB8IG51bGw+XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2UgPSAoXG4gIG9wdGlvbnM/OiBDb21wb25lbnRzRW5oYW5jZXJcbikgPT4gUmVuZGVyUGFnZVJlc3VsdCB8IFByb21pc2U8UmVuZGVyUGFnZVJlc3VsdD5cblxuZXhwb3J0IHR5cGUgQmFzZUNvbnRleHQgPSB7XG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgTkVYVF9EQVRBID0ge1xuICBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PlxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogc3RyaW5nW11cbiAgZXJyPzogRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfVxuICBnc3A/OiBib29sZWFuXG4gIGdzc3A/OiBib29sZWFuXG4gIGN1c3RvbVNlcnZlcj86IGJvb2xlYW5cbiAgZ2lwPzogYm9vbGVhblxuICBhcHBHaXA/OiBib29sZWFuXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBkb2NDb21wb25lbnRzUmVuZGVyZWQ6IHtcbiAgICBIdG1sPzogYm9vbGVhblxuICAgIE1haW4/OiBib29sZWFuXG4gICAgSGVhZD86IGJvb2xlYW5cbiAgICBOZXh0U2NyaXB0PzogYm9vbGVhblxuICB9XG4gIGJ1aWxkTWFuaWZlc3Q6IEJ1aWxkTWFuaWZlc3RcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkeW5hbWljSW1wb3J0czogTWFuaWZlc3RJdGVtW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxuICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZzogc3RyaW5nXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG5cbiAgcHJldmlldz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFByZXZpZXcgZGF0YSBzZXQgb24gdGhlIHJlcXVlc3QsIGlmIGFueVxuICAgKiAqL1xuICBwcmV2aWV3RGF0YT86IGFueVxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHN0YXR1czogbnVtYmVyLCB1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmw6IFVybE9iamVjdCk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXRVcmwodXJsKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVQYXRoU2VwPW5vcm1hbGl6ZVBhdGhTZXA7ZXhwb3J0cy5kZW5vcm1hbGl6ZVBhZ2VQYXRoPWRlbm9ybWFsaXplUGFnZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplUGF0aFNlcChwYXRoKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXFxcL2csJy8nKTt9ZnVuY3Rpb24gZGVub3JtYWxpemVQYWdlUGF0aChwYWdlKXtwYWdlPW5vcm1hbGl6ZVBhdGhTZXAocGFnZSk7aWYocGFnZS5zdGFydHNXaXRoKCcvaW5kZXgvJykpe3BhZ2U9cGFnZS5zbGljZSg2KTt9ZWxzZSBpZihwYWdlPT09Jy9pbmRleCcpe3BhZ2U9Jy8nO31yZXR1cm4gcGFnZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiaW1wb3J0IFJlYWN0LCB7IEZ1bmN0aW9uQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCAnLi4vbGlicy9leHRlbnNpb25zJztcclxuaW1wb3J0IE1haW5MYXlvdXQgZnJvbSAnLi4vbGF5b3V0cy9tYWluTGF5b3V0JztcclxuaW1wb3J0IHdpdGhSZWR1eCBmcm9tICcuLi9yZWR1eC93aXRoUmVkdXgnO1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tICducHJvZ3Jlc3MnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyBOZXh0U2VvIH0gZnJvbSAnbmV4dC1zZW8nO1xyXG5pbXBvcnQgeyBwZXJzaXN0U3RvcmUgfSBmcm9tICdyZWR1eC1wZXJzaXN0J1xyXG5pbXBvcnQgeyBQZXJzaXN0R2F0ZSB9IGZyb20gJ3JlZHV4LXBlcnNpc3QvaW50ZWdyYXRpb24vcmVhY3QnXHJcbmltcG9ydCAncmVhY3QtbGF6eS1sb2FkLWltYWdlLWNvbXBvbmVudC9zcmMvZWZmZWN0cy9ibHVyLmNzcyc7XHJcbmltcG9ydCAnYW5pbWF0ZS5jc3MnO1xyXG5pbXBvcnQgJy4uL3B1YmxpYy9jc3MvaW5kZXguY3NzJztcclxuaW1wb3J0IHsgY3JlYXRlTXVpVGhlbWUsIFRoZW1lUHJvdmlkZXIgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuXHJcblJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCAoKSA9PiB3aW5kb3cuc2Nyb2xsVG8oMCwgMCkpO1xyXG5Sb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUVycm9yJywgKCkgPT4gTlByb2dyZXNzLmRvbmUoKSk7XHJcblxyXG5jb25zdCBFUlBBcHA6IEZ1bmN0aW9uQ29tcG9uZW50ID0gKHByb3BzOiBhbnkpID0+IHtcclxuICBjb25zdCB7IENvbXBvbmVudCwgcGFnZVByb3BzLCBzdG9yZSB9ID0gcHJvcHM7XHJcbiAgY29uc3QgQXBwTGF5b3V0ID0gQ29tcG9uZW50LkxheW91dCB8fCBNYWluTGF5b3V0O1xyXG4gIGNvbnN0IHBlcnNpc3RvciA9IHBlcnNpc3RTdG9yZShzdG9yZSk7XHJcblxyXG4gIGNvbnN0IHRoZW1lID0gY3JlYXRlTXVpVGhlbWUoe1xyXG4gICAgcGFsZXR0ZToge1xyXG4gICAgICBwcmltYXJ5OiB7XHJcbiAgICAgICAgbWFpbjogJyMyRkFBRkMnLFxyXG4gICAgICB9LFxyXG4gICAgICBzZWNvbmRhcnk6IHtcclxuICAgICAgICBtYWluOiAnI2QzMmYyZicsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICA8TmV4dFNlbyB0aXRsZT1cIkVSUCBXZWIgQXBwbGljYXRpb25cIiAvPlxyXG4gICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxyXG4gICAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgICAgICAgPFBlcnNpc3RHYXRlIGxvYWRpbmc9ezxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz59IHBlcnNpc3Rvcj17cGVyc2lzdG9yfT5cclxuICAgICAgICAgICAgPEFwcExheW91dCB7Li4ucGFnZVByb3BzfT5cclxuICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgICAgIDwvQXBwTGF5b3V0PlxyXG4gICAgICAgICAgPC9QZXJzaXN0R2F0ZT5cclxuICAgICAgICA8L1Byb3ZpZGVyPlxyXG4gICAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJlZHV4KEVSUEFwcCk7IiwiZXhwb3J0IGNvbnN0IGFjdGlvblR5cGVzID0ge1xyXG4gIFNFVF9EWU5BTUlDX0xPQURJTkc6ICdTRVRfRFlOQU1JQ19MT0FESU5HJyxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNldER5bmFtaWNMb2FkaW5nID0gKGZpZWxkOiBzdHJpbmcsIGxvYWRpbmc6IGJvb2xlYW4pID0+ICh7XHJcbiAgdHlwZTogYWN0aW9uVHlwZXMuU0VUX0RZTkFNSUNfTE9BRElORyxcclxuICBmaWVsZCxcclxuICBsb2FkaW5nXHJcbn0pO1xyXG5cclxuXHJcbiIsImltcG9ydCB7IFN5c3RlbXNDb21wYW55U3RhdGUgfSBmcm9tIFwiLi4vLi4vQHR5cGVzL2NvbXBhbnkvY3JlYXRlQ29tcGFueVwiO1xyXG5pbXBvcnQgRHluYW1pY1N0YXRlIGZyb20gXCIuLi8uLi9AdHlwZXMvZHluYW1pYy9keW5hbWljU3RhdGVcIjtcclxuXHJcbmltcG9ydCB7IGFjdGlvblR5cGVzIH0gZnJvbSAnLi9hY3Rpb25zJ1xyXG5cclxuY29uc3QgaW5pdGlhbGl6ZVN0YXRlOiBEeW5hbWljU3RhdGUgPSB7XHJcbiAgZHluYW1pY0xvYWRpbmc6IHt9LFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gaW5pdGlhbGl6ZVN0YXRlLCBhY3Rpb246IGFueSkge1xyXG4gIGNvbnN0IHsgZHluYW1pY0xvYWRpbmcgfSA9IHN0YXRlO1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuU0VUX0RZTkFNSUNfTE9BRElORzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBkeW5hbWljTG9hZGluZzoge1xyXG4gICAgICAgICAgLi4uZHluYW1pY0xvYWRpbmcsXHJcbiAgICAgICAgICBbYWN0aW9uLmZpZWxkXTogYWN0aW9uLmxvYWRpbmdcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcblxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufSIsImV4cG9ydCBjb25zdCBhY3Rpb25UeXBlcyA9IHtcclxuICBTRVRfTE9DQVRJT05TOiAnU0VUX0xPQ0FUSU9OUydcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNldExvY2F0aW9ucyA9IChsb2NhdGlvbnM6IEFycmF5PGFueT4pID0+ICh7XHJcbiAgdHlwZTogYWN0aW9uVHlwZXMuU0VUX0xPQ0FUSU9OUyxcclxuICBsb2NhdGlvbnNcclxufSlcclxuIiwiaW1wb3J0IExvY2F0aW9uU3RhdGUgZnJvbSBcIi4uLy4uL0B0eXBlcy9hcHBUeXBlcy9sb2NhdGlvblN0YXRlXCI7XHJcbmltcG9ydCB7IGFjdGlvblR5cGVzIH0gZnJvbSAnLi9hY3Rpb25zJztcclxuXHJcblxyXG5jb25zdCBpbml0aWFsaXplU3RhdGU6IExvY2F0aW9uU3RhdGUgPSB7XHJcbiAgbG9jYXRpb25zOiBbXVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gaW5pdGlhbGl6ZVN0YXRlLCBhY3Rpb246IGFueSkge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlNFVF9MT0NBVElPTlM6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbG9jYXRpb25zOiBhY3Rpb24ubG9jYXRpb25zXHJcbiAgICAgIH1cclxuXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59IiwiZXhwb3J0IGNvbnN0IGFjdGlvblR5cGVzID0ge1xyXG4gIExPR0lOOiAnTE9HSU4nLFxyXG4gIFNPQ0lBTF9MT0dJTjogJ1NPQ0lBTF9MT0dJTicsXHJcbiAgU0FWRV9DT09LSUVfQU5EX1BSRVBBUkVfREFUQTogJ1NBVkVfQ09PS0lFX0FORF9QUkVQQVJFX0RBVEEnLFxyXG4gIFNBVkVfVE9LRU46ICdTQVZFX1RPS0VOJ1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9naW4obG9naW5Nb2RhbDogT2JqZWN0KSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IGFjdGlvblR5cGVzLkxPR0lOLFxyXG4gICAgbG9naW5Nb2RhbCxcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuIiwiXHJcbmltcG9ydCB7IExvZ2luU3RhdGUgfSBmcm9tICcuLi8uLi9AdHlwZXMvdXNlcnMvbG9naW5PdXRwdXRNb2RlbCc7XHJcbmltcG9ydCB7IGFjdGlvblR5cGVzIH0gZnJvbSAnLi9hY3Rpb25zJ1xyXG5cclxuY29uc3QgaW5pdGlhbGl6ZVN0YXRlOiBMb2dpblN0YXRlID0ge1xyXG4gIGxvZ2luTW9kYWw6ICcnLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gaW5pdGlhbGl6ZVN0YXRlLCBhY3Rpb246IGFueSkge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLkxPR0lOOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGxvZ2luTW9kYWw6IGFjdGlvbi5sb2dpbk1vZGFsXHJcbiAgICAgIH1cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IGR5bmFtaWNTdGF0ZSBmcm9tIFwiLi9keW5hbWljL3JlZHVjZXJcIjtcclxuaW1wb3J0IGxvZ2luU3RhdGUgZnJvbSBcIi4vbG9naW4vcmVkdWNlclwiXHJcbmltcG9ydCBzeXN0ZW1zQ29tcGFueVN0YXRlIGZyb20gXCIuL3N5c3RlbXNNYW5hZ2VtZW50L2NvbXBhbnkvcmVkdWNlclwiXHJcbmltcG9ydCBsb2NhdGlvblN0YXRlIGZyb20gXCIuL2xvY2F0aW9uL3JlZHVjZXJcIlxyXG5pbXBvcnQgY29tcGFueUJhbmtTdGF0ZSBmcm9tIFwiLi9zeXN0ZW1zTWFuYWdlbWVudC9jb21wYW55QmFuay9yZWR1Y2VyXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgZHluYW1pY1N0YXRlLFxyXG4gIGxvZ2luU3RhdGUsXHJcbiAgc3lzdGVtc0NvbXBhbnlTdGF0ZSxcclxuICBsb2NhdGlvblN0YXRlLFxyXG4gIGNvbXBhbnlCYW5rU3RhdGVcclxufSk7XHJcbiIsImltcG9ydCB7IGFsbCwgZm9yayB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IGVzNnByb21pc2UgZnJvbSBcImVzNi1wcm9taXNlXCI7XHJcbmltcG9ydCBsb2dpbldhdGNoZXIgZnJvbSBcIi4vd2F0Y2hlcnMvbG9naW5XYXRjaGVyXCI7XHJcbmltcG9ydCBjb21wYW55V2F0Y2hlciBmcm9tIFwiLi93YXRjaGVycy9jb21wYW55V2F0Y2hlclwiO1xyXG5pbXBvcnQgY29tcGFueUJhbmtXYXRjaGVyIGZyb20gXCIuL3dhdGNoZXJzL2JhbmtXYXRjaGVyXCI7XHJcblxyXG5cclxuZXM2cHJvbWlzZS5wb2x5ZmlsbCgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xyXG4gIHlpZWxkIGFsbChbXHJcbiAgICBmb3JrKGxvZ2luV2F0Y2hlciksXHJcbiAgICBmb3JrKGNvbXBhbnlXYXRjaGVyKSxcclxuICAgIGZvcmsoY29tcGFueUJhbmtXYXRjaGVyKSxcclxuICBdKTtcclxufVxyXG4iLCJpbXBvcnQgY3JlYXRlQ29tcGFueU1vZGFsLCB7IENvbXBhbnlQcm9wcywgUHJpbnRlclByb3BzIH0gZnJvbSBcIi4uLy4uLy4uL0B0eXBlcy9jb21wYW55L2NyZWF0ZUNvbXBhbnlcIlxyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGlvblR5cGVzID0ge1xyXG4gIENSRUFUX0NPTVBBTlk6ICdDUkVBVF9DT01QQU5ZJyxcclxuICBHRVRfQ09NUEFOWTogJ0dFVF9DT01QQU5ZJyxcclxuICBTRVRfQ09NUEFOWTogJ1NFVF9DT01QQU5ZJyxcclxuICBVUExPQURfTE9HTzogJ1VQTE9BRF9MT0dPJyxcclxuICBHRVRfQ09NUEFOWV9MSVNUOiAnR0VUX0NPTVBBTllfTElTVCcsXHJcbiAgU0VUX0NPTVBBTllfTElTVDogJ1NFVF9DT01QQU5ZX0xJU1QnLFxyXG4gIERFTEVURV9DT01QQU5ZOiAnREVMRVRFX0NPTVBBTlknLFxyXG4gIFNFVF9QUklOVEVSOiAnU0VUX1BSSU5URVInLFxyXG4gIENIQU5HRV9DT01QQU5ZOiAnQ0hBTkdFX0NPTVBBTlknXHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29tcGFueShjcmVhdGVDb21wYW55TW9kYWw6IGNyZWF0ZUNvbXBhbnlNb2RhbCkge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBhY3Rpb25UeXBlcy5DUkVBVF9DT01QQU5ZLFxyXG4gICAgY3JlYXRlQ29tcGFueU1vZGFsLFxyXG4gIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlQ29tcGFueShjaGFuZ2VDb21wYW55TW9kYWw6IENvbXBhbnlQcm9wcykge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBhY3Rpb25UeXBlcy5DSEFOR0VfQ09NUEFOWSxcclxuICAgIGNoYW5nZUNvbXBhbnlNb2RhbCxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDb21wYW55TGlzdCA9ICgpID0+ICh7XHJcbiAgdHlwZTogYWN0aW9uVHlwZXMuR0VUX0NPTVBBTllfTElTVCxcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBkZWxldGVDb21wYW55ID0gKGNvbXBhbnlJZDogbnVtYmVyKSA9PiAoe1xyXG4gIHR5cGU6IGFjdGlvblR5cGVzLkRFTEVURV9DT01QQU5ZLFxyXG4gIGNvbXBhbnlJZFxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldENvbXBhbnkgPSAoY29tcGFueUlkOiBudW1iZXIpID0+ICh7XHJcbiAgdHlwZTogYWN0aW9uVHlwZXMuR0VUX0NPTVBBTlksXHJcbiAgY29tcGFueUlkXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3Qgc2V0Q29tcGFueSA9IChjb21wYW55OiBDb21wYW55UHJvcHMpID0+ICh7XHJcbiAgdHlwZTogYWN0aW9uVHlwZXMuU0VUX0NPTVBBTlksXHJcbiAgY29tcGFueVxyXG59KVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldENvbXBhbnlMaXN0KGNvbXBhbnlEYXRhOiBBcnJheTxDb21wYW55UHJvcHM+KSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IGFjdGlvblR5cGVzLlNFVF9DT01QQU5ZX0xJU1QsXHJcbiAgICBjb21wYW55RGF0YSxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGxvYWRMb2dvKGZpbGUpIHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogYWN0aW9uVHlwZXMuVVBMT0FEX0xPR08sXHJcbiAgICBmaWxlLFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFByaW50ZXIocHJpbnRlcjogQXJyYXk8UHJpbnRlclByb3BzPikge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBhY3Rpb25UeXBlcy5TRVRfUFJJTlRFUixcclxuICAgIHByaW50ZXIsXHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7IFN5c3RlbXNDb21wYW55U3RhdGUgfSBmcm9tICcuLi8uLi8uLi9AdHlwZXMvY29tcGFueS9jcmVhdGVDb21wYW55JztcclxuLy8gaW1wb3J0IER5bmFtaWNTdGF0ZSBmcm9tIFwiLi4vLi4vQHR5cGVzL2R5bmFtaWMvZHluYW1pY1N0YXRlXCI7XHJcblxyXG5pbXBvcnQgeyBhY3Rpb25UeXBlcyB9IGZyb20gJy4vYWN0aW9ucydcclxuXHJcbmNvbnN0IGluaXRpYWxpemVTdGF0ZTogU3lzdGVtc0NvbXBhbnlTdGF0ZSA9IHtcclxuICBjcmVhdGVDb21wYW55TW9kYWw6IG51bGwsXHJcbiAgY29tcGFueURhdGE6IFtdLFxyXG4gIGNvbXBhbnk6IHtcclxuICAgIGlkOiAwLFxyXG4gICAgY29tcGFueU5hbWU6ICcnLFxyXG4gICAgY29tcGFueUFkZHJlc3M6ICcnLFxyXG4gICAgY29tcGFueVBob25lOiAnJyxcclxuICAgIGFkZHJlc3NUb1ByaW50UmVwb3J0OiAnJyxcclxuICAgIG9yZGVyRG9jUHJlZml4OiAnJyxcclxuICAgIGNvbXBhbnlTdXBwb3J0RW1haWw6ICcnLFxyXG4gICAgbmFtZVRvUHJpbnRSZXBvcnQ6ICcnLFxyXG4gICAgY291bnRyeUlkOiAwLFxyXG4gICAgcHJvdmluY2VJZDogMCxcclxuICAgIGRpc3RyaWN0SWQ6IDAsXHJcbiAgICB3YXJkSWQ6IDAsXHJcbiAgICBjb21wYW55RW5nbGlzaE5hbWU6ICcnLFxyXG4gICAgY29tcGFueVJlZ2lzdHJhdGlvbjogJycsXHJcbiAgICBjb21wYW55VGl0bGU6ICcnLFxyXG4gICAgY29tcGFueUZheDogJycsXHJcbiAgICBjb21wYW55SG90bGluZTogJycsXHJcbiAgICBjb21wYW55U2FsZUVtYWlsOiAnJyxcclxuICAgIHdlYnNpdGU6ICcnLFxyXG4gICAgdmlzaWJsZVBPU01vYmlsZUFwcDogdHJ1ZSxcclxuICAgIGNvbXBhbnlMb2dvOiAnJyxcclxuICAgIHBvc0N1c3RvbWVyQmlsbDogMCxcclxuICAgIHBvc1NhdmVkQmlsbDogMCxcclxuICAgIHBvc1dhcmVob3VzZUJpbGw6IDAsXHJcbiAgICBwb3NEZWZhdWx0UHJpbnRlcjogMCxcclxuICAgIHN0YW1wRGVmYXVsdFByaW50ZXI6IDAsXHJcbiAgICBudW1iZXJHcm91cFNlcGFyYXRvcjogMCxcclxuICAgIGFjdGl2ZTogdHJ1ZSxcclxuICAgIHBhcmVudElkOiAwLFxyXG4gICAgY29tcGFueUNvZGU6IG51bGxcclxuXHJcbiAgfSxcclxuICBwcmludGVyOiBbXVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gaW5pdGlhbGl6ZVN0YXRlLCBhY3Rpb246IGFueSkge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuQ1JFQVRfQ09NUEFOWTpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjcmVhdGVDb21wYW55TW9kYWw6IGFjdGlvbi5jcmVhdGVDb21wYW55TW9kYWxcclxuICAgICAgfVxyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5TRVRfQ09NUEFOWV9MSVNUOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGNvbXBhbnlEYXRhOiBhY3Rpb24uY29tcGFueURhdGFcclxuICAgICAgfVxyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5TRVRfQ09NUEFOWTpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjb21wYW55OiB7XHJcbiAgICAgICAgICAuLi5hY3Rpb24uY29tcGFueVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5TRVRfUFJJTlRFUjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBwcmludGVyOiBhY3Rpb24ucHJpbnRlclxyXG4gICAgICB9XHJcblxyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBDb21wYW55QmFua1Byb3BzLCBDcmVhdGVDb21wYW55QmFua1Byb3BzIH0gZnJvbSBcIi4uLy4uLy4uL0B0eXBlcy9jb21wYW55L2NvbXBhbnlCYW5rXCJcclxuXHJcbmV4cG9ydCBjb25zdCBhY3Rpb25UeXBlcyA9IHtcclxuICBDUkVBVF9DT01QQU5ZX0JBTks6ICdDUkVBVF9DT01QQU5ZX0JBTksnLFxyXG4gIEdFVF9DT01QQU5ZX0JBTktfSU5GTzogJ0dFVF9DT01QQU5ZX0JBTktfSU5GTycsXHJcbiAgU0VUX0NPTVBBTllfQkFOS19JTkZPOiAnU0VUX0NPTVBBTllfQkFOS19JTkZPJyxcclxuICBHRVRfQkFOS19JTkZPOiAnR0VUX0JBTktfSU5GTycsXHJcbiAgU0VUX0JBTktfSU5GTzogJ1NFVF9CQU5LX0lORk8nLFxyXG4gIEdFVF9CQU5LX1RZUEU6ICdHRVRfQkFOS19UWVBFJyxcclxuICBTRVRfQkFOS19UWVBFOiAnU0VUX0JBTktfVFlQRSdcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbXBhbnlCYW5rKGNyZWF0ZUNvbXBhbnlCYW5rTW9kYWw6IENyZWF0ZUNvbXBhbnlCYW5rUHJvcHMpIHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogYWN0aW9uVHlwZXMuQ1JFQVRfQ09NUEFOWV9CQU5LLFxyXG4gICAgY3JlYXRlQ29tcGFueUJhbmtNb2RhbCxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDb21wYW55QmFua0luZm8gPSAoKSA9PiAoe1xyXG4gIHR5cGU6IGFjdGlvblR5cGVzLkdFVF9DT01QQU5ZX0JBTktfSU5GTyxcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRCYW5rSW5mbyA9IChiYW5rSWQ6IG51bWJlcikgPT4gKHtcclxuICB0eXBlOiBhY3Rpb25UeXBlcy5HRVRfQkFOS19JTkZPLFxyXG4gIGJhbmtJZFxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IHNldEJhbmtJbmZvID0gKGJhbmtJbmZvOiBDb21wYW55QmFua1Byb3BzKSA9PiAoe1xyXG4gIHR5cGU6IGFjdGlvblR5cGVzLlNFVF9CQU5LX0lORk8sXHJcbiAgYmFua0luZm9cclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRCYW5rVHlwZSA9ICgpID0+ICh7XHJcbiAgdHlwZTogYWN0aW9uVHlwZXMuR0VUX0JBTktfVFlQRSxcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRCYW5rVHlwZSA9IChiYW5rVHlwZTogQXJyYXk8YW55PikgPT4gKHtcclxuICB0eXBlOiBhY3Rpb25UeXBlcy5TRVRfQkFOS19UWVBFLFxyXG4gIGJhbmtUeXBlXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldENvbXBhbnlCYW5rSW5mbyhjb21wYW55QmFua0luZm86IGFueSkge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBhY3Rpb25UeXBlcy5TRVRfQ09NUEFOWV9CQU5LX0lORk8sXHJcbiAgICBjb21wYW55QmFua0luZm8sXHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgQ29tcGFueUJhbmtTdGF0ZSB9IGZyb20gJy4uLy4uLy4uL0B0eXBlcy9jb21wYW55L2NvbXBhbnlCYW5rJztcclxuaW1wb3J0IHsgU3lzdGVtc0NvbXBhbnlTdGF0ZSB9IGZyb20gJy4uLy4uLy4uL0B0eXBlcy9jb21wYW55L2NyZWF0ZUNvbXBhbnknO1xyXG4vLyBpbXBvcnQgRHluYW1pY1N0YXRlIGZyb20gXCIuLi8uLi9AdHlwZXMvZHluYW1pYy9keW5hbWljU3RhdGVcIjtcclxuXHJcbmltcG9ydCB7IGFjdGlvblR5cGVzIH0gZnJvbSAnLi9hY3Rpb25zJ1xyXG5cclxuY29uc3QgaW5pdGlhbGl6ZVN0YXRlOiBDb21wYW55QmFua1N0YXRlID0ge1xyXG4gIC8vOlN5c3RlbXNDb21wYW55U3RhdGUgXHJcbiAgY29tcGFueUJhbmtJbmZvOiBbXSxcclxuICBiYW5rSW5mbzoge1xyXG4gICAgaWQ6IG51bGwsXHJcbiAgICBiYW5rQ29kZTogJycsXHJcbiAgICBiYW5rTmFtZTogJycsXHJcbiAgICBiYW5rQWRkcmVzczogJycsXHJcbiAgICBiYW5rQWNjb3VudE5hbWU6ICcnLFxyXG4gICAgYmFua0FjY291bnROdW1iZXI6ICcnLFxyXG4gICAgYWNjb3VudGluZ0NvZGVJZDogbnVsbCxcclxuICAgIHBheXBhbEFjY291bnQ6ICcnLFxyXG4gICAgcGF5cGFsTnVtYmVyOiAnJyxcclxuICAgIGNpZkNvZGU6ICcnLFxyXG4gICAgaWViQ29kZTogJycsXHJcbiAgICBjb21wYW55SWQ6IG51bGxcclxuICB9LFxyXG4gIGJhbmtUeXBlOiBbXVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IGluaXRpYWxpemVTdGF0ZSwgYWN0aW9uOiBhbnkpIHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblxyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5TRVRfQ09NUEFOWV9CQU5LX0lORk86XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY29tcGFueUJhbmtJbmZvOiBhY3Rpb24uY29tcGFueUJhbmtJbmZvXHJcbiAgICAgIH07XHJcblxyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5TRVRfQkFOS19JTkZPOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGJhbmtJbmZvOiBhY3Rpb24uYmFua0luZm9cclxuICAgICAgfVxyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5TRVRfQkFOS19UWVBFOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGJhbmtUeXBlOiBhY3Rpb24uYmFua1R5cGVcclxuICAgICAgfTtcclxuXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgYWxsLCBwdXQsIHRha2VMYXRlc3QgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xyXG5pbXBvcnQgeyBDb21wYW55QmFua1Byb3BzLCBDcmVhdGVDb21wYW55QmFua1Byb3BzIH0gZnJvbSAnLi4vLi4vQHR5cGVzL2NvbXBhbnkvY29tcGFueUJhbmsnO1xyXG5pbXBvcnQgaHR0cENsaWVudCBmcm9tICcuLi8uLi9zZXJ2aWNlcy9odHRwU2VydmljZSc7XHJcbmltcG9ydCB7IGFjdGlvblR5cGVzLCBzZXRCYW5rSW5mbywgc2V0QmFua1R5cGUsIHNldENvbXBhbnlCYW5rSW5mbyB9IGZyb20gJy4uL3N5c3RlbXNNYW5hZ2VtZW50L2NvbXBhbnlCYW5rL2FjdGlvbnMnO1xyXG5cclxuZnVuY3Rpb24qIGNyZWF0ZUNvbXBhbnlCYW5rKGFjdGlvbjogeyB0eXBlOiBzdHJpbmcsIGNyZWF0ZUNvbXBhbnlCYW5rTW9kYWw6IENyZWF0ZUNvbXBhbnlCYW5rUHJvcHMgfSkge1xyXG5cclxuICBjb25zdCBjcmVhdGVDb21wYW55QmFua01vZGFsID0gYWN0aW9uLmNyZWF0ZUNvbXBhbnlCYW5rTW9kYWw7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGh0dHBDbGllbnQucG9zdCgnL1N5c3RlbXNNYW5hZ2VtZW50L0NvbXBhbnlCYW5rJywgY3JlYXRlQ29tcGFueUJhbmtNb2RhbCk7XHJcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG5cclxuICB9IGNhdGNoIChlKSB7XHJcblxyXG4gIH0gZmluYWxseSB7XHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uKiBnZXRCYW5rVHlwZShhY3Rpb246IHsgdHlwZTogc3RyaW5nIH0pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgaHR0cENsaWVudC5nZXQoJy9TeXN0ZW1zTWFuYWdlbWVudC9Db21wYW55QmFua1R5cGUnKTtcclxuICAgIHlpZWxkIHB1dChzZXRCYW5rVHlwZShyZXN1bHQuZGF0YSkpXHJcblxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuXHJcbiAgfSBmaW5hbGx5IHtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBnZXRDb21wYW55QmFua0luZm8oYWN0aW9uOiB7IHR5cGU6IHN0cmluZyB9KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGh0dHBDbGllbnQuZ2V0KCcvU3lzdGVtc01hbmFnZW1lbnQvQ29tcGFueUJhbmsnKTtcclxuICAgIHlpZWxkIHB1dChzZXRDb21wYW55QmFua0luZm8ocmVzdWx0LmRhdGEpKVxyXG5cclxuICB9IGNhdGNoIChlKSB7XHJcblxyXG4gIH0gZmluYWxseSB7XHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uKiBnZXRCYW5rSW5mbyhhY3Rpb246IHsgdHlwZTogc3RyaW5nLCBiYW5rSWQ6IG51bWJlciB9KSB7XHJcbiAgY29uc3QgYmFua0lkID0gYWN0aW9uLmJhbmtJZFxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBodHRwQ2xpZW50LmdldChgL1N5c3RlbXNNYW5hZ2VtZW50L0NvbXBhbnlCYW5rLyR7YmFua0lkfWApO1xyXG4gICAgeWllbGQgcHV0KHNldEJhbmtJbmZvKHJlc3VsdCkpXHJcblxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuXHJcbiAgfSBmaW5hbGx5IHtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBjb21wYW55QmFua1dhdGNoZXIoKSB7XHJcbiAgeWllbGQgYWxsKFtcclxuICAgIHRha2VMYXRlc3QoYWN0aW9uVHlwZXMuQ1JFQVRfQ09NUEFOWV9CQU5LLCBjcmVhdGVDb21wYW55QmFuayksXHJcbiAgICB0YWtlTGF0ZXN0KGFjdGlvblR5cGVzLkdFVF9DT01QQU5ZX0JBTktfSU5GTywgZ2V0Q29tcGFueUJhbmtJbmZvKSxcclxuICAgIHRha2VMYXRlc3QoYWN0aW9uVHlwZXMuR0VUX0JBTktfSU5GTywgZ2V0QmFua0luZm8pLFxyXG4gICAgdGFrZUxhdGVzdChhY3Rpb25UeXBlcy5HRVRfQkFOS19UWVBFLCBnZXRCYW5rVHlwZSlcclxuICBdKVxyXG59IiwiaW1wb3J0IHsgYWxsLCB0YWtlTGF0ZXN0LCBwdXQsIHRha2VFdmVyeSB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cydcclxuaW1wb3J0IHsgYWN0aW9uVHlwZXMsIHNldENvbXBhbnksIHNldENvbXBhbnlMaXN0IH0gZnJvbSAnLi4vc3lzdGVtc01hbmFnZW1lbnQvY29tcGFueS9hY3Rpb25zJ1xyXG5pbXBvcnQgaHR0cENsaWVudCBmcm9tICcuLi8uLi9zZXJ2aWNlcy9odHRwU2VydmljZSc7XHJcbmltcG9ydCB7IENvbXBhbnlQcm9wcyB9IGZyb20gJy4uLy4uL0B0eXBlcy9jb21wYW55L2NyZWF0ZUNvbXBhbnknO1xyXG5cclxuZnVuY3Rpb24qIGNyZWF0ZUNvbXBhbnkoYWN0aW9uOiB7IHR5cGU6IHN0cmluZywgY3JlYXRlQ29tcGFueU1vZGFsOiBDb21wYW55UHJvcHMgfSkge1xyXG5cclxuICBjb25zdCBjcmVhdGVDb21wYW55TW9kYWwgPSBhY3Rpb24uY3JlYXRlQ29tcGFueU1vZGFsO1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBodHRwQ2xpZW50LnBvc3QoJy9TeXN0ZW1zTWFuYWdlbWVudC9Db21wYW55JywgY3JlYXRlQ29tcGFueU1vZGFsKTtcclxuXHJcbiAgfSBjYXRjaCAoZSkge1xyXG5cclxuICB9IGZpbmFsbHkge1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIGNoYW5nZUNvbXBhbnkoYWN0aW9uOiB7IHR5cGU6IHN0cmluZywgY2hhbmdlQ29tcGFueU1vZGFsOiBDb21wYW55UHJvcHMgfSkge1xyXG5cclxuICBjb25zdCBjaGFuZ2VDb21wYW55TW9kYWwgPSBhY3Rpb24uY2hhbmdlQ29tcGFueU1vZGFsO1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBodHRwQ2xpZW50LnB1dChgL1N5c3RlbXNNYW5hZ2VtZW50L0NvbXBhbnlgLCBjaGFuZ2VDb21wYW55TW9kYWwpO1xyXG5cclxuICB9IGNhdGNoIChlKSB7XHJcblxyXG4gIH0gZmluYWxseSB7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24qIHVwbG9hZExvZ28oYWN0aW9uOiB7IHR5cGU6IHN0cmluZywgZmlsZSB9KSB7XHJcbiAgY29uc3QgZmlsZSA9IGFjdGlvbi5maWxlO1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBodHRwQ2xpZW50LnBvc3QoJy9hcGkvVXBsb2FkJywgZmlsZSk7XHJcblxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuXHJcbiAgfSBmaW5hbGx5IHtcclxuICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiogZ2V0Q29tcGFueUxpc3QoYWN0aW9uOiB7IHR5cGU6IHN0cmluZyB9KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGh0dHBDbGllbnQuZ2V0KCdTeXN0ZW1zTWFuYWdlbWVudC9Db21wYW55Jyk7XHJcbiAgICBjb25zdCBjb21wYW55TGlzdDogQXJyYXk8Q29tcGFueVByb3BzPiA9IHJlc3VsdC5kYXRhO1xyXG4gICAgeWllbGQgcHV0KHNldENvbXBhbnlMaXN0KGNvbXBhbnlMaXN0KSlcclxuXHJcbiAgfSBjYXRjaCAoZSkge1xyXG5cclxuICB9IGZpbmFsbHkge1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIGdldENvbXBhbnkoYWN0aW9uOiB7IHR5cGU6IHN0cmluZywgY29tcGFueUlkOiBudW1iZXIgfSkge1xyXG4gIGNvbnN0IGNvbXBhbnlJZCA9IGFjdGlvbi5jb21wYW55SWRcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0OiBDb21wYW55UHJvcHMgPSB5aWVsZCBodHRwQ2xpZW50LmdldChgU3lzdGVtc01hbmFnZW1lbnQvQ29tcGFueS8ke2NvbXBhbnlJZH1gKTtcclxuICAgIHlpZWxkIHB1dChzZXRDb21wYW55KHJlc3VsdCkpXHJcblxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuXHJcbiAgfSBmaW5hbGx5IHtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBkZWxldGVDb21wYW55KGFjdGlvbjogeyB0eXBlOiBzdHJpbmcsIGNvbXBhbnlJZDogbnVtYmVyIH0pIHtcclxuICBjb25zdCBjb21wYW55SWQgPSBhY3Rpb24uY29tcGFueUlkXHJcbiAgY29uc29sZS5sb2coY29tcGFueUlkKTtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgaHR0cENsaWVudC5kZWxldGUoYFN5c3RlbXNNYW5hZ2VtZW50L0NvbXBhbnkvJHtjb21wYW55SWR9YClcclxuICAgIHlpZWxkIHB1dChzZXRDb21wYW55TGlzdChyZXN1bHQpKVxyXG5cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG5cclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogY29tcGFueVdhdGNoZXIoKSB7XHJcbiAgeWllbGQgYWxsKFtcclxuICAgIHRha2VMYXRlc3QoYWN0aW9uVHlwZXMuQ1JFQVRfQ09NUEFOWSwgY3JlYXRlQ29tcGFueSksXHJcbiAgICB0YWtlTGF0ZXN0KGFjdGlvblR5cGVzLkNIQU5HRV9DT01QQU5ZLCBjaGFuZ2VDb21wYW55KSxcclxuICAgIHRha2VMYXRlc3QoYWN0aW9uVHlwZXMuVVBMT0FEX0xPR08sIHVwbG9hZExvZ28pLFxyXG4gICAgdGFrZUxhdGVzdChhY3Rpb25UeXBlcy5HRVRfQ09NUEFOWV9MSVNULCBnZXRDb21wYW55TGlzdCksXHJcbiAgICB0YWtlTGF0ZXN0KGFjdGlvblR5cGVzLkdFVF9DT01QQU5ZLCBnZXRDb21wYW55KSxcclxuICAgIHRha2VMYXRlc3QoYWN0aW9uVHlwZXMuREVMRVRFX0NPTVBBTlksIGRlbGV0ZUNvbXBhbnkpXHJcbiAgXSlcclxufSIsIi8vIGltcG9ydCB7IGFjdGlvblR5cGVzLCBzZXRVc2VyUHJvZmlsZSwgc2V0VXNlclNldHRpbmdzLCBzZXRBbGVydCwgcHJlcGFyZVVzZXJQcm9maWxlRGF0YSB9IGZyb20gXCIuLi9wcm9maWxlL2FjdGlvbnNcIjtcclxuaW1wb3J0IHsgYWxsLCB0YWtlTGF0ZXN0LCBwdXQsIHRha2VFdmVyeSB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cydcclxuaW1wb3J0IHsgYWN0aW9uVHlwZXMgfSBmcm9tICcuLi9sb2dpbi9hY3Rpb25zJ1xyXG5pbXBvcnQgaHR0cENsaWVudCBmcm9tICcuLi8uLi9zZXJ2aWNlcy9odHRwU2VydmljZSc7XHJcbmltcG9ydCBhdXRob3JpemF0aW9uU2VydmljZSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hdXRob3JpemF0aW9uU2VydmljZSc7XHJcbmltcG9ydCBMb2dpbk91dHB1dE1vZGVsIGZyb20gJy4uLy4uL0B0eXBlcy91c2Vycy9sb2dpbk91dHB1dE1vZGVsJztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xyXG5pbXBvcnQgTG9naW5JbnB1dE1vZGVsIGZyb20gJy4uLy4uL0B0eXBlcy91c2Vycy9sb2dpbklucHV0TW9kZWwnO1xyXG5cclxuZnVuY3Rpb24qIGxvZ2luKGFjdGlvbjogeyB0eXBlOiBzdHJpbmcsIGxvZ2luTW9kYWw6IExvZ2luSW5wdXRNb2RlbCB9KSB7XHJcblxyXG4gIGNvbnN0IGxvZ2luTW9kYWwgPSBhY3Rpb24ubG9naW5Nb2RhbDtcclxuICB0cnkge1xyXG4gICAgLy8gYWN0aW9uLm9uTG9hZGluZyh0cnVlKTtcclxuXHJcbiAgICBjb25zdCByZXN1bHQ6IExvZ2luT3V0cHV0TW9kZWwgPSB5aWVsZCBodHRwQ2xpZW50LnBvc3QoJy9BY2NvdW50L1N5c3RlbUFjY291bnQvTG9naW4nLCBsb2dpbk1vZGFsKTtcclxuICAgIGlmICghXy5pc0VtcHR5KHJlc3VsdC5hY2Nlc3NUb2tlbikgJiYgIV8uaXNFbXB0eShyZXN1bHQucmVmcmVzaFRva2VuKSkge1xyXG4gICAgICBhdXRob3JpemF0aW9uU2VydmljZS5zZXRDb29raWVzKHJlc3VsdC5hY2Nlc3NUb2tlbiwgcmVzdWx0LnJlZnJlc2hUb2tlbik7XHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy8nO1xyXG4gICAgfVxyXG5cclxuICB9IGNhdGNoIChlKSB7XHJcblxyXG4gIH0gZmluYWxseSB7XHJcbiAgICAvLyBhY3Rpb24ub25Mb2FkaW5nKGZhbHNlKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogbG9naW5XYXRjaGVyKCkge1xyXG4gIHlpZWxkIGFsbChbXHJcbiAgICB0YWtlTGF0ZXN0KGFjdGlvblR5cGVzLkxPR0lOLCBsb2dpbiksXHJcbiAgXSlcclxufSIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB0aHVua01pZGRsZXdhcmUgZnJvbSAncmVkdXgtdGh1bmsnO1xyXG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSAncmVkdXgtc2FnYSdcclxuaW1wb3J0IG5leHRSZWR1eFdyYXBwZXIgZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcclxuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gJy4vcm9vdFJlZHVjZXInO1xyXG5pbXBvcnQgcm9vdFNhZ2EgZnJvbSAnLi9yb290U2FnYSdcclxuXHJcbmNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKTtcclxuXHJcbmNvbnN0IGJpbmRNaWRkbGV3YXJlID0gKG1pZGRsZXdhcmU6IGFueSkgPT4ge1xyXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICBjb25zdCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSA9IHJlcXVpcmUoJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbicpXHJcbiAgICByZXR1cm4gY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZSkpXHJcbiAgfVxyXG4gIHJldHVybiBhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyZVN0b3JlKGluaXRpYWxTdGF0ZTogYW55ID0ge30pOiBhbnkge1xyXG4gIGxldCBzdG9yZTogYW55ID0ge307XHJcbiAgY29uc3QgeyBwZXJzaXN0UmVkdWNlciB9ID0gcmVxdWlyZSgncmVkdXgtcGVyc2lzdCcpO1xyXG4gIGNvbnN0IHN0b3JhZ2UgPSByZXF1aXJlKCdyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlJykuZGVmYXVsdDtcclxuICBjb25zdCBwZXJzaXN0Q29uZmlnOiBhbnkgPSB7XHJcbiAgICBrZXk6ICcucm9zdGVyc3BvdC5sb2NhbHN0b3JhZ2UuYXBwLmtleScsXHJcbiAgICBzdG9yYWdlLFxyXG4gICAgd2hpdGVsaXN0OiBbXHJcbiAgICAgICd1c2VyUHJvZmlsZVN0YXRlJyxcclxuICAgICAgJ2xvY2F0aW9uU3RhdGUnXHJcbiAgICBdLFxyXG4gIH1cclxuXHJcbiAgY29uc3QgcGVyc2lzdGVkUmVkdWNlciA9IHBlcnNpc3RSZWR1Y2VyKHBlcnNpc3RDb25maWcsIHJvb3RSZWR1Y2VyKVxyXG4gIHN0b3JlID0gY3JlYXRlU3RvcmUoXHJcbiAgICBwZXJzaXN0ZWRSZWR1Y2VyLFxyXG4gICAgaW5pdGlhbFN0YXRlLFxyXG4gICAgYmluZE1pZGRsZXdhcmUoW3RodW5rTWlkZGxld2FyZSwgc2FnYU1pZGRsZXdhcmVdKVxyXG4gICk7XHJcblxyXG4gIHN0b3JlLnNhZ2FUYXNrID0gc2FnYU1pZGRsZXdhcmUucnVuKHJvb3RTYWdhKTtcclxuICByZXR1cm4gc3RvcmU7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUmVkdXgoQmFzZUNvbXBvbmVudDogYW55KSB7XHJcbiAgcmV0dXJuIG5leHRSZWR1eFdyYXBwZXIoY29uZmlndXJlU3RvcmUpKEJhc2VDb21wb25lbnQpXHJcbn0iLCJpbXBvcnQgeyBDb29raWVzIH0gZnJvbSAncmVhY3QtY29va2llJztcclxuaW1wb3J0IGF1dGhlbnRpY2F0ZVNldHRpbmdzIGZyb20gJy4uL2ZpbGVTZXR0aW5ncy9hdXRoZW50aWNhdGVTZXR0aW5ncy5qc29uJztcclxuXHJcblxyXG5jbGFzcyBBdXRob3JpemF0aW9uU2VydmljZSB7XHJcbiAgc2V0Q29va2llcyhhdXRoVG9rZW46IHN0cmluZywgcmVmcmVzaFRva2VuOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IGNvb2tpZXMgPSBuZXcgQ29va2llcygpO1xyXG4gICAgY29va2llcy5zZXQoYXV0aGVudGljYXRlU2V0dGluZ3MudG9rZW5OYW1lLCBhdXRoVG9rZW4sIHtcclxuICAgICAgcGF0aDogJy8nLFxyXG4gICAgICBtYXhBZ2U6IDEwMDAgKiAzNjAwICogMjQgKiAzMCAqIDJcclxuICAgIH0pO1xyXG5cclxuICAgIGNvb2tpZXMuc2V0KGF1dGhlbnRpY2F0ZVNldHRpbmdzLnJlZnJlc2hUb2tlbiwgcmVmcmVzaFRva2VuLCB7XHJcbiAgICAgIHBhdGg6ICcvJyxcclxuICAgICAgbWF4QWdlOiAxMDAwICogMzYwMCAqIDI0ICogMzAgKiAyXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGxvZ291dCgpIHtcclxuICAgIGNvbnN0IGNvb2tpZXMgPSBuZXcgQ29va2llcygpO1xyXG4gICAgY29va2llcy5yZW1vdmUoYXV0aGVudGljYXRlU2V0dGluZ3MudG9rZW5OYW1lLCB7XHJcbiAgICAgIHBhdGg6ICcvJyxcclxuICAgIH0pO1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3BlcnNpc3Q6LnJvc3RlcnNwb3QubG9jYWxzdG9yYWdlLmFwcC5rZXknKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBBdXRob3JpemF0aW9uU2VydmljZSgpOyIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IGpzQ29va2llIGZyb20gXCJqcy1jb29raWVcIjtcclxuaW1wb3J0IGF1dGhlbnRpY2F0ZVNldHRpbmdzIGZyb20gXCIuLi9maWxlU2V0dGluZ3MvYXV0aGVudGljYXRlU2V0dGluZ3MuanNvblwiO1xyXG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XHJcbmNvbnN0IGh0dHBDbGllbnQgPSBheGlvcy5jcmVhdGUoe1xyXG4gIGJhc2VVUkw6IFwiaHR0cDovL2VycC1hcGktZGV2LnZ2cy52blwiLFxyXG4gIC8vIGJhc2VVUkw6IFwiaHR0cDovLzE5Mi4xNjguMS4yMVwiLFxyXG59KTtcclxuXHJcbmh0dHBDbGllbnQuaW50ZXJjZXB0b3JzLnJlcXVlc3QudXNlKFxyXG4gIGZ1bmN0aW9uIChjb25maWcpIHtcclxuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgY29uc3QgYXVUb2tlbiA9IGpzQ29va2llLmdldChhdXRoZW50aWNhdGVTZXR0aW5ncy50b2tlbk5hbWUpO1xyXG4gICAgICBpZiAoYXVUb2tlbilcclxuICAgICAgICBjb25maWcuaGVhZGVycy5jb21tb25bXCJBdXRob3JpemF0aW9uXCJdID0gJ0JlYXJlciAnICsganNDb29raWUuZ2V0KFxyXG4gICAgICAgICAgYXV0aGVudGljYXRlU2V0dGluZ3MudG9rZW5OYW1lXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIHJldHVybiBjb25maWc7XHJcbiAgfSxcclxuICBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVycm9yKSk7XHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xyXG4gIH1cclxuKTtcclxuXHJcbmh0dHBDbGllbnQuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLnVzZShcclxuICAocmVzcG9uc2UpID0+IHtcclxuICAgIGlmIChyZXNwb25zZS5kYXRhLnJlc3VsdCkgcmV0dXJuIHJlc3BvbnNlLmRhdGEucmVzdWx0O1xyXG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgfSxcclxuICAoZXJyb3IpID0+IHtcclxuICAgIGlmIChlcnJvci5yZXNwb25zZSAmJiBlcnJvci5yZXNwb25zZS5kYXRhKSB7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gZXJyb3IucmVzcG9uc2U7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XHJcbiAgfVxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaHR0cENsaWVudDtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0NvbGxhcHNlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQXJyb3dSaWdodFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2FjaGVkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9FeHBhbmRMZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9FeHBhbmRNb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9IZWxwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9NZW51XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9Ob3RpZmljYXRpb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9TZWFyY2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1NldHRpbmdzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9UcmVuZGluZ1VwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImVzNi1wcm9taXNlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtc2VvXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5wcm9ncmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJudW1lcmFsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWNvb2tpZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1jdXN0b20tc2Nyb2xsYmFyc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtcGVyc2lzdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1wZXJzaXN0L2ludGVncmF0aW9uL3JlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhL2VmZmVjdHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtdGh1bmtcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9
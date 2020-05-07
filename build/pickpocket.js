var pickpocket =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./dist/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist/index.js":
/*!***********************!*\
  !*** ./dist/index.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n'strict'; // SimpleCollection\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar PickPocket = function PickPocket() {\n  this.data = {};\n  /**\n   * Determine if there are items within any data field\n   * @returns {boolean}\n   */\n\n  this.any = function () {\n    var isEmpty = function isEmpty(value) {\n      return [value === null || value === '', Array.isArray(value) && value.length === 0, _typeof(value) === 'object' && Object.keys(value).length === 0].includes(true);\n    };\n\n    return !isEmpty(this.list());\n  };\n  /**\n   * Determine if data field has any items.\n   */\n\n\n  this.has = function (field) {\n    return Object.keys(this.data).includes(field) && this.data[field].length > 0;\n  };\n  /**\n   * Get all data\n   */\n\n\n  this.all = function () {\n    return this.data;\n  };\n  /**\n   * Array of items for every data field\n   */\n\n\n  this.list = function () {\n    var _this = this;\n\n    var field = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n    return field ? this.data[field] : Object.keys(this.data).map(function (field) {\n      return _this.data[field];\n    }).reduce(function (items, messages) {\n      return [].concat(_toConsumableArray(items), _toConsumableArray(messages));\n    }, []);\n  };\n  /**\n   * Get the data fields first item if it exists\n   */\n\n\n  this.get = function (field) {\n    if (this.has(field)) {\n      return this.data[field][0];\n    }\n  };\n  /**\n   * Add an item to a given data field\n   * @param field\n   * @param item\n   */\n\n\n  this.add = function (field, item) {\n    this.data[field] = Array.isArray(this.data[field]) ? this.data[field] : [];\n    this.data[field] = [].concat(_toConsumableArray(this.data[field]), [item]);\n  };\n  /**\n   * Set data\n   * OR\n   * Set items on specific data field\n   */\n\n\n  this.set = function (fieldOrData) {\n    var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];\n\n    if (_typeof(fieldOrData) === 'object') {\n      this.data = fieldOrData;\n    } else {\n      this.data[fieldOrData] = value;\n    }\n  };\n  /**\n   * Forget all data fields\n   * OR\n   * Forget items on a specific data field\n   */\n\n\n  this.forget = function (field) {\n    if (typeof field === 'undefined') {\n      this.data = {};\n    } else {\n      this.data[field] = [];\n    }\n  };\n};\n\nvar pickpocket = function pickpocket() {\n  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var pocket = new PickPocket();\n  pocket.set(data);\n  return pocket;\n};\n\nmodule.exports = pickpocket;\nmodule.exports[\"default\"] = pickpocket;\nmodule.exports.pickpocket = pickpocket;\nmodule.exports.PickPocket = PickPocket;\n\n//# sourceURL=webpack://pickpocket/./dist/index.js?");

/***/ })

/******/ });
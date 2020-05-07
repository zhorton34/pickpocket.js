"use strict";
'strict'; // SimpleCollection

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var PickPocket = function PickPocket() {
  this.data = {};
  /**
   * Determine if there are items within any data field
   * @returns {boolean}
   */

  this.any = function () {
    var isEmpty = function isEmpty(value) {
      return [value === null || value === '', Array.isArray(value) && value.length === 0, _typeof(value) === 'object' && Object.keys(value).length === 0].includes(true);
    };

    return !isEmpty(this.list());
  };
  /**
   * Determine if data field has any items.
   */


  this.has = function (field) {
    return Object.keys(this.data).includes(field) && this.data[field].length > 0;
  };
  /**
   * Get all data
   */


  this.all = function () {
    return this.data;
  };
  /**
   * Array of items for every data field
   */


  this.list = function () {
    var _this = this;

    var field = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    return field ? this.data[field] : Object.keys(this.data).map(function (field) {
      return _this.data[field];
    }).reduce(function (items, messages) {
      return [].concat(_toConsumableArray(items), _toConsumableArray(messages));
    }, []);
  };
  /**
   * Get the data fields first item if it exists
   */


  this.get = function (field) {
    if (this.has(field)) {
      return this.data[field][0];
    }
  };
  /**
   * Add an item to a given data field
   * @param field
   * @param item
   */


  this.add = function (field, item) {
    this.data[field] = Array.isArray(this.data[field]) ? this.data[field] : [];
    this.data[field] = [].concat(_toConsumableArray(this.data[field]), [item]);
  };
  /**
   * Set data
   * OR
   * Set items on specific data field
   */


  this.set = function (fieldOrData) {
    var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    if (_typeof(fieldOrData) === 'object') {
      this.data = fieldOrData;
    } else {
      this.data[fieldOrData] = value;
    }
  };
  /**
   * Forget all data fields
   * OR
   * Forget items on a specific data field
   */


  this.forget = function (field) {
    if (typeof field === 'undefined') {
      this.data = {};
    } else {
      this.data[field] = [];
    }
  };
};

var pickpocket = function pickpocket() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var pocket = new PickPocket();
  pocket.set(data);
  return pocket;
};

module.exports = pickpocket;
module.exports["default"] = pickpocket;
module.exports.pickpocket = pickpocket;
module.exports.PickPocket = PickPocket;
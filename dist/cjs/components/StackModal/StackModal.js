"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Modal = _interopRequireDefault(require("react-bootstrap/Modal"));

var _StackModal = _interopRequireDefault(require("./StackModal.styled"));

var _Button = _interopRequireDefault(require("react-bootstrap/Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var StackModal = function StackModal(props) {
  var modalBodyText = props.modalBodyText,
      LiveDemo = props.LiveDemo,
      modalTitle = props.modalTitle,
      children = props.children;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  var handleClose = function handleClose() {
    return setShow(false);
  };

  var handleShow = function handleShow() {
    return setShow(true);
  };

  return /*#__PURE__*/_react.default.createElement(_StackModal.default, props, LiveDemo ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "primary",
    onClick: handleShow
  }, "Launch demo modal"), /*#__PURE__*/_react.default.createElement(_Modal.default, {
    show: show,
    onHide: handleClose
  }, /*#__PURE__*/_react.default.createElement(_Modal.default.Header, {
    closeButton: true
  }, /*#__PURE__*/_react.default.createElement(_Modal.default.Title, null, " ", /*#__PURE__*/_react.default.createElement("h4", null, modalTitle), " ")), /*#__PURE__*/_react.default.createElement(_Modal.default.Body, null, modalBodyText && /*#__PURE__*/_react.default.createElement("p", null, modalBodyText), children), /*#__PURE__*/_react.default.createElement(_Modal.default.Footer, null, /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "secondary",
    onClick: handleClose
  }, "Close"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "primary",
    onClick: handleClose
  }, "Save Changes")))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Modal.default.Dialog, null, /*#__PURE__*/_react.default.createElement(_Modal.default.Header, {
    closeButton: true
  }, /*#__PURE__*/_react.default.createElement(_Modal.default.Title, null, /*#__PURE__*/_react.default.createElement("h4", null, modalTitle))), /*#__PURE__*/_react.default.createElement(_Modal.default.Body, null, /*#__PURE__*/_react.default.createElement("p", null, modalBodyText)), /*#__PURE__*/_react.default.createElement(_Modal.default.Footer, null, /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "secondary"
  }, "Close"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "primary"
  }, "Save changes")))));
};

var _default = StackModal;
exports.default = _default;
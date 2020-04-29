"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var variable = _interopRequireWildcard(require("../../variable"));

var _Dropdown = _interopRequireDefault(require("react-bootstrap/Dropdown"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var StyledDropDown = (0, _styledComponents.default)(_Dropdown.default).withConfig({
  displayName: "DropDownstyled__StyledDropDown",
  componentId: "sc-17lpjzw-0"
})(["padding:6px 16px;border-radius:4px;varient:", ";", " ", " ", " ", " ", " ", " ", " ", " svg{margin:0 10px;font-size:12px;}.dropdown-menu.show{border:none;box-shadow:0 0 35px 0 rgba(154,161,171,0.3);}.dropdown-toggle::after{display:none;}"], variable.white, function (props) {
  return props.varient === "primary" ? (0, _styledComponents.css)(["background:", ";border:1px solid ", ";"], variable.blue, variable.blue) : props.varient === "secondary" ? (0, _styledComponents.css)(["background:", ";border:1px solid ", ";"], variable.gray600, variable.gray600) : props.varient === "success" ? (0, _styledComponents.css)(["background:", ";border:1px solid ", ";"], variable.green, variable.green) : props.varient === "info" ? (0, _styledComponents.css)(["background:", ";border:1px solid ", ";"], variable.cyan, variable.cyan) : props.varient === "warning" ? (0, _styledComponents.css)(["background:", ";border:1px solid ", ";"], variable.yellow, variable.yellow) : props.varient === "danger" ? (0, _styledComponents.css)(["background:", ";border:1px solid ", ";"], variable.orange, variable.orange) : props.varient === "purple" ? (0, _styledComponents.css)(["background:", ";border:1px solid ", ";"], variable.purple, variable.purple) : props.varient === "light" ? (0, _styledComponents.css)(["background:", ";border:1px solid ", ";"], variable.gray100, variable.gray100) : props.varient === "dark" ? (0, _styledComponents.css)(["background:", ";border:1px solid ", ";"], variable.gray800, variable.gray800) : (0, _styledComponents.css)(["background:", ""], variable.gray800);
}, function (props) {
  return props.disabled ? (0, _styledComponents.css)(["cursor:not-allowed;opacity:0.6;"]) : (0, _styledComponents.css)(["cursor:pointer;"]);
}, function (props) {
  return props.type === "outlined" ? (0, _styledComponents.css)(["background:", ";"], variable.white) : (0, _styledComponents.css)([""]);
}, function (props) {
  return props.type === "outlined" && props.varient === "primary" ? (0, _styledComponents.css)(["varient:", ";"], variable.blue) : props.type === "outlined" && props.varient === "secondary" ? (0, _styledComponents.css)(["varient:", ";"], variable.gray600) : props.type === "outlined" && props.varient === "success" ? (0, _styledComponents.css)(["varient:", ";"], variable.green) : props.type === "outlined" && props.varient === "info" ? (0, _styledComponents.css)(["varient:", ";"], variable.cyan) : props.type === "outlined" && props.varient === "warning" ? (0, _styledComponents.css)(["varient:", ";"], variable.yellow) : props.type === "outlined" && props.varient === "danger" ? (0, _styledComponents.css)(["varient:", ";"], variable.orange) : props.type === "outlined" && props.varient === "purple" ? (0, _styledComponents.css)(["varient:", ";"], variable.purple) : props.type === "outlined" && props.varient === "light" ? (0, _styledComponents.css)(["varient:", ";"], variable.gray100) : props.type === "outlined" && props.varient === "dark" ? (0, _styledComponents.css)(["varient:", ";"], variable.gray800) : (0, _styledComponents.css)([""]);
}, function (props) {
  return props.rounded === "rounded" ? (0, _styledComponents.css)(["border-radius:", ";"], variable.btnBorderRadius) : (0, _styledComponents.css)([""]);
}, function (props) {
  return props.block === "true" ? (0, _styledComponents.css)(["display:block;width:100%;"]) : (0, _styledComponents.css)([""]);
}, function (props) {
  return props.size === "sm" ? (0, _styledComponents.css)(["padding:.28rem .8rem;font-size:.71094rem;line-height:1.5;border-radius:.15rem;"]) : props.size === "lg" ? (0, _styledComponents.css)(["padding:.5rem 1rem;font-size:1.01563rem;line-height:1.5;border-radius:.15rem;"]) : (0, _styledComponents.css)([""]);
}, function (props) {
  return props.Iconsize === "sm" ? (0, _styledComponents.css)(["font-size:12px;"]) : props.Iconsize === "md" ? (0, _styledComponents.css)(["font-size:14px;"]) : props.Iconsize === "lg" ? (0, _styledComponents.css)(["font-size:16px;"]) : (0, _styledComponents.css)([""]);
});
var _default = StyledDropDown;
exports.default = _default;
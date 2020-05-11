"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Box = require("./Box.styled");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Box = function Box(props) {
  var children = props.children,
      justifyItems = props.justifyItems,
      justifyContent = props.justifyContent,
      alignItems = props.alignItems,
      display = props.display,
      p = props.p,
      m = props.m,
      pt = props.pt,
      pm = props.pm,
      pl = props.pl,
      pr = props.pr,
      mr = props.mr,
      ml = props.ml,
      mp = props.mp,
      mb = props.mb;
  return /*#__PURE__*/_react["default"].createElement(_Box.StyledBox, _extends({
    justifyItems: justifyItems,
    justifyContent: justifyContent,
    alignItems: alignItems
  }, props), children);
};

var _default = Box;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _DropDown = _interopRequireDefault(require("./DropDown.styled"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var DropDown = function DropDown(props) {
  var btnType = props.btnType,
      id = props.id,
      isDisabled = props.isDisabled,
      className = props.className,
      btnVariant = props.btnVariant,
      children = props.children,
      rounded = props.rounded,
      size = props.size,
      block = props.block,
      Iconsize = props.Iconsize,
      icon = props.icon,
      iconVariant = props.iconVariant,
      options = props.options;
  return /*#__PURE__*/_react["default"].createElement(_DropDown["default"], null, /*#__PURE__*/_react["default"].createElement(_DropDown["default"].Toggle, _extends({
    variant: btnType,
    className: className,
    type: btnVariant,
    size: size,
    disabled: isDisabled,
    rounded: rounded,
    block: block,
    id: id
  }, props), "DropDown", icon && iconVariant === 'regular' ? /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: ['far', icon],
    Iconsize: Iconsize
  }) : iconVariant === 'solid' ? /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: ['fas', icon],
    Iconsize: Iconsize
  }) : /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: ['fas', icon],
    Iconsize: Iconsize
  }), children), /*#__PURE__*/_react["default"].createElement(_DropDown["default"].Menu, null, options.map(function (item, key) {
    return /*#__PURE__*/_react["default"].createElement(_DropDown["default"].Item, {
      href: item.link
    }, item.item);
  })));
};

var _default = DropDown;
exports["default"] = _default;
"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const React = require("react");
const Text_1 = require("./Text");
const SwitchSlider = styled_components_1.default.span `
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: transform 0.2s;
  transition: background-color 0 0.2s;
  border: 1px solid #000000;
  border-radius: 12px;
  background-color: #ffffff;

  &:before {
    position: absolute;
    top: -1px;
    left: -1px;
    width: 10px;
    height: 10px;
    content: "";
    transition: transform 0.2s;
    transition: background-color 0 0.2s;
    border: 1px solid #000000;
    border-radius: 50%;
    background-color: white;
  }
`;
const SwitchContainerFactory = (_a) => {
    var { onChange, checked } = _a, props = __rest(_a, ["onChange", "checked"]);
    return (React.createElement("div", Object.assign({}, props),
        React.createElement("input", { type: "checkbox", onChange: onChange, checked: checked }),
        React.createElement(SwitchSlider, null)));
};
const SwitchContainer = styled_components_1.default(SwitchContainerFactory) `
  position: relative;
  width: 24px;
  height: 12px;
  margin: 10px 16px 10px 8px;

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  input:checked + ${SwitchSlider} {
    background-color: #000000;
  }

  input:focus {
    outline: none;
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + ${SwitchSlider}:before {
    transform: translateX(12px);
  }
`;
const SwitchLabel = styled_components_1.default.span `
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 11px;
  line-height: 16px;
  letter-spacing: 0.005em;
`;
const SwitchFactory = (_a) => {
    var { checked, onChange, label } = _a, props = __rest(_a, ["checked", "onChange", "label"]);
    return (React.createElement("label", Object.assign({}, props),
        React.createElement(SwitchContainer, { onChange: () => { onChange; }, checked: checked || false }),
        React.createElement(Text_1.Text, null, label)));
};
exports.Switch = styled_components_1.default(SwitchFactory) `
  position: relative;
  display: flex;
  align-items: center;
  align-self: 1;
  flex-direction: row;
  cursor: default;
`;

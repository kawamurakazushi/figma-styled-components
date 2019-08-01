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
const CheckboxMark = styled_components_1.default.span `
  position: absolute;
  top: 10px;
  left: 10px;
  width: 12px;
  height: 12px;
  border: 1px solid #000000;
  border-radius: 2px;
  background-color: #ffffff;

  &:after {
    position: absolute;
    width: 12px;
    height: 12px;
    content: "";
    background-image: url("data:image/svg+xml;utf8,%3Csvg%20fill%3D%22none%22%20height%3D%227%22%20viewBox%3D%220%200%208%207%22%20width%3D%228%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20clip-rule%3D%22evenodd%22%20d%3D%22m1.17647%201.88236%201.88235%201.88236%203.76471-3.76472%201.17647%201.17648-4.94118%204.9412-3.05882-3.05884z%22%20fill%3D%22%23fff%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E");
    background-repeat: no-repeat;
    background-position: 2px 3px;
  }
`;
const CheckboxContainerFacotry = (_a) => {
    var { onChange, checked } = _a, props = __rest(_a, ["onChange", "checked"]);
    return (React.createElement("div", Object.assign({}, props),
        React.createElement("input", { type: "checkbox", onChange: onChange, checked: checked }),
        React.createElement(CheckboxMark, null)));
};
const CheckboxContainer = styled_components_1.default(CheckboxContainerFacotry) `
  position: relative;
  width: 32px;
  height: 32px;

  input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
  }

  input:checked + ${CheckboxMark} {
    border: 1px solid #18a0fb;
    background-color: #18a0fb;
  }

  input:checked ${CheckboxMark}:after {
    display: block;
  }
`;
const CheckboxFactory = (_a) => {
    var { onChange, label, checked } = _a, props = __rest(_a, ["onChange", "label", "checked"]);
    return (React.createElement("label", Object.assign({}, props),
        React.createElement(CheckboxContainer, { onChange: onChange, checked: checked }),
        React.createElement(Text_1.Text, null, label)));
};
exports.Checkbox = styled_components_1.default(CheckboxFactory) `
  display: flex;
  flex-direction: row;
  height: 28px;
  cursor: default;
  align-items: center;

  ${Text_1.Text} {
    padding-top: 4px;
  }
`;

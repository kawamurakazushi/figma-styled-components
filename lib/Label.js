"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const Text_1 = require("./Text");
exports.Label = styled_components_1.default(Text_1.Text) `
  display: flex;
  align-items: center;
  height: 32px;
  color: rgba(0, 0, 0, 0.3);
  background-color: #ffffff;
`;

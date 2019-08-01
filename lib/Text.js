"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const textAttributes = {
    small: {
        fontSize: `11px`,
        lineHeight: `16px`,
        letterSpacing: { positive: `0.005em`, negative: `.01em` }
    },
    medium: {
        fontSize: `12px`,
        lineHeight: `16px`,
        letterSpacing: { positive: `0`, negative: `.005em;` }
    },
    large: {
        fontSize: `13px`,
        lineHeight: `24px`,
        letterSpacing: { positive: `-.0025em`, negative: `.0025em` }
    },
    xlarge: {
        fontSize: `14px`,
        lineHeight: `24px`,
        letterSpacing: { positive: `-.001em`, negative: `-.001em` }
    }
};
const getTextWeight = (weight) => {
    switch (weight) {
        case "bold":
            return 600;
        case "medium":
            return 500;
        default:
            return 400;
    }
};
const getTextStyles = (size = "small", weight = "normal", negative = false) => {
    const textStyles = textAttributes[size];
    const variant = negative ? "negative" : "positive";
    return styled_components_1.css `
    font-weight: ${getTextWeight(weight)};
    font-size: ${textStyles.fontSize};
    letter-spacing: ${textStyles.letterSpacing[variant]};
    line-height: ${textStyles.lineHeight};
  `;
};
exports.Text = styled_components_1.default.span `
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Inter", sans-serif;
  color: ${props => (props.onNegative ? "#ffffff" : "rgba(0, 0, 0, 0.8)")};
  ${props => getTextStyles(props.size, props.weight, props.onNegative)}
`;

declare type TextSizes = "small" | "medium" | "large" | "xlarge";
declare type TextWeights = "normal" | "medium" | "bold";
export interface TextProps {
    size?: TextSizes;
    weight?: TextWeights;
    onNegative?: boolean;
}
export declare const Text: import("styled-components").StyledComponent<"span", any, TextProps, never>;
export {};

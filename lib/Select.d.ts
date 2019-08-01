import * as React from "react";
interface SelectOptionItem {
    label: string;
    value: string;
}
interface SelectOptions extends SelectOptionItem {
    group?: SelectOptions[];
}
interface SelectProps {
    options: SelectOptions[];
    onChange?: (item: SelectOptionItem) => void;
    placeholder?: string;
    noDefault?: boolean;
    value?: string;
}
export declare const SelectFactory: React.FC<SelectProps>;
export declare const Select: import("styled-components").StyledComponent<React.FunctionComponent<SelectProps>, any, {}, never>;
export {};

import styled from "styled-components";
import * as React from "react";
import { useEffect, useRef } from "react";

import { Text } from "./Text";

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

const SelectedCheck = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.2069 5.20724L7.70688 10.7072L6.99977 11.4144L6.29267 10.7072L3.29267 7.70724L4.70688 6.29303L6.99977 8.58592L11.7927 3.79303L13.2069 5.20724Z"
        fill="white"
        fill-opacity="1"
      />
    </svg>
  );
};

const SelectItem = styled.li<{ selected?: boolean }>`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%;
  height: 24px;
  padding: 0 16px 0 32px;
  list-style-type: none;
  text-align: left;
  cursor: pointer;
  position: relative;

  svg {
    position: absolute;
    left: 6px;
    top: 4px;
    pointer-events: none;
  }

  &:hover {
    background-color: #18a0fb;
  }
`;

const SelectGroup = styled.div``;

const SelectChevronIcon = (props: any) => {
  return (
    <div {...props}>
      <svg
        width="8"
        height="5"
        viewBox="0 0 8 5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3.64645 4.35359L0.646454 1.35359L1.35356 0.646484L4.00001 3.29293L6.64645 0.646484L7.35356 1.35359L4.35356 4.35359L4.00001 4.70714L3.64645 4.35359Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
};

const SelectChevron = styled(SelectChevronIcon)``;

const SelectTrigger = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  height: 30px;
  margin: 1px 0 1px 0 !important;
  padding: 0 8px 0 8px;
  text-align: left;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.8);
  border: 1px solid transparent;
  border-radius: 2px;
  background-color: #ffffff;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 11px;
  line-height: 16px;
  letter-spacing: 0.005em;

  ${SelectChevron} {
    margin-left: 8px;
    color: rgba(0, 0, 0, 0.2);
  }

  &:hover {
    border: 1px solid rgba(0, 0, 0, 0.1);
    justify-content: space-between;
    ${SelectChevron} {
      color: rgba(0, 0, 0, 1);
    }
  }

  &:focus {
    padding: 0 7px 0 7px;
    border: 2px solid #18a0fb;
    outline: none;
    justify-content: space-between;

    ${SelectChevron} {
      color: rgba(0, 0, 0, 1);
    }
  }
`;

function useOutsideAlerter(ref: any, callback: any) {
  function handleClickOutside(event: any) {
    if (ref && ref.current && !ref.current.contains(event.target)) {
      callback();
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
}

export const SelectFactory: React.FC<SelectProps> = ({
  options,
  onChange,
  placeholder,
  noDefault,
  value,
  ...props
}) => {
  const [showOptions, setOptionsVisibility] = React.useState(false);

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, () => {
    setOptionsVisibility(false);
  });

  const handleClick = ({ value, label }: SelectOptionItem) => {
    setOptionsVisibility(false);
  };

  const toggleSelect = (e: any) => {
    setOptionsVisibility(!showOptions);
  };

  return (
    <div ref={wrapperRef} {...props}>
      <select defaultValue={value}>
        {noDefault && <option />}
        {options.map(option => {
          return option.group ? (
            <optgroup label={option.label}>
              {option.group.map(item => {
                return (
                  <option
                    key={`group` + item.label}
                    value={item.value || item.label}
                  >
                    {item.label}
                  </option>
                );
              })}
            </optgroup>
          ) : (
            <option key={option.label} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
      <SelectTrigger onClick={toggleSelect}>
        <Text>
          {options.filter(o => o.value === value).length >= 0
            ? options.filter(o => o.value === value)[0].label
            : ""}
        </Text>
        <SelectChevron />
      </SelectTrigger>
      <ul className={showOptions ? "show-options" : undefined}>
        {options.map((option, i) => {
          return option.group ? (
            <SelectGroup>
              {option.group.map(item => {
                return (
                  <SelectItem
                    key={`group-` + item.label}
                    id={item.value || item.label}
                    onClick={() => {
                      if (onChange) {
                        onChange(item);
                      }
                      handleClick(item);
                    }}
                  >
                    {value === item.value && <SelectedCheck />}
                    <Text size="medium" onNegative>
                      {item.label}
                    </Text>
                  </SelectItem>
                );
              })}
            </SelectGroup>
          ) : (
            <SelectItem
              key={`list-` + i}
              id={option.value}
              onClick={() => {
                if (onChange) {
                  onChange(option);
                }
                handleClick(option);
              }}
            >
              {value === option.value && <SelectedCheck />}
              <Text size="medium" onNegative>
                {option.label}
              </Text>
            </SelectItem>
          );
        })}
      </ul>
    </div>
  );
};

export const Select = styled(SelectFactory)`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-grow: 2;
  flex-wrap: nowrap;
  width: 100%;

  select {
    display: none;
  }

  ul {
    position: absolute;
    z-index: 2;
    top: 31px;
    right: 0;
    left: 0;
    display: block;
    overflow: auto;
    width: 100%;
    margin: 0;
    padding: 8px 0 8px 0;
    list-style-type: none;
    opacity: 0;
    box-shadow: 0 5px 17px rgba(0, 0, 0, 0.2), 0 2px 7px rgba(0, 0, 0, 0.15);
    background-color: #222222;
    display: none;

    &.show-options {
      opacity: 1;
      display: block;
    }
  }

  ${SelectGroup}:not (:first-child) {
    padding: 8px 0 0 0;
    margin-top: 8px;
    border-top: solid 1px rgba(255, 255, 255, 0.2);
  }

  ${SelectGroup}:last-child {
    padding-bottom: 0;
  }
`;

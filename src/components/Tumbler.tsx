import React from "react";
import styled from "styled-components";

export interface TumblerProps {
  type?: "checkbox" | "radio";
  value?: any;
  onChange?: (e: any) => void;
  label?: string;
}
export const Tumbler1: React.FC<TumblerProps> = ({
  type = "checkbox",
  value,
  onChange,
  label
}) => (
  <Label>
    <Tumbler type={type} value={value} onChange={onChange} />
    {label && <span>{label}</span>}
  </Label>
);

export const Tumbler = styled.input.attrs(
  ({ type = "checkbox", ...props }) => ({
    type: type,
    ...props
  })
)<TumblerProps>`
  -webkit-appearance: none;
  -moz-appearance: none;

  background-color: #fff;
  border: 1px solid #bbc1e1;

  cursor: pointer;
  display: inline-block;

  height: 21px;
  width: 21px;
  margin: 0;

  outline: none;
  position: relative;
  transition: background-color 0.3s, border-color 0.3s, box-shadow 0.2s;

  vertical-align: top;

  &:checked {
    background-color: #275efe;
    border-color: #275efe;
    transition: transform 0.6s cubic-bezier(0.2, 0.85, 0.32, 1.2) 0.3s;
  }

  &:disabled {
    background-color: #f6f8ff;
    cursor: not-allowed;
    opacity: 0.9;
    &:checked {
      background-color: #e1e6f9;
      border-color: #bbc1e1;
    }
  }

  &:hover {
    &:not(:checked) {
      &:not(:disabled) {
        border-color: #275efe;
      }
    }
  }

  &:focus {
    box-shadow: 0 0 0 2px rgba(39, 94, 254, 0.3);
  }
`;

export const Label = styled.label`
  cursor: pointer;
  font-size: 14px;
  line-height: 21px;
  vertical-align: top;
  & input {
    margin-right: 8px;
  }
`;

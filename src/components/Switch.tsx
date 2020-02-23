import styled from "styled-components";
import { Checkbox, CheckboxProps } from "./Checkbox";

export interface SwitchProps extends CheckboxProps {}

export const Switch = styled(Checkbox).attrs({ type: "checkbox" })`
  border-radius: 11px;
  width: 38px;

  &:after {
    border-radius: 50%;
    border: none;
    content: "";
    display: block;
    height: 15px;
    width: 15px;
    left: 2px;
    top: 2px;
    transition: transform 0.3s ease, opacity 0.2s;

    background-color: #bbc1e1;
    transform: translateX(0);
    opacity: 1;
  }
  &:checked {
    &::after {
      background-color: #fff;
      transform: translateX(17px);
    }
  }
  &:disabled {
    &:not(:checked) {
      &:after {
        opacity: 0.6;
      }
    }
  }
`;

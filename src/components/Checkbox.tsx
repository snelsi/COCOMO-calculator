import styled from "styled-components";
import { Tumbler, TumblerProps } from "./Tumbler";

export interface CheckboxProps extends TumblerProps {}

export const Checkbox = styled(Tumbler).attrs({ type: "checkbox" })`
  border-radius: 7px;

  &:after {
    border: 2px solid #fff;
    border-top: 0;
    border-left: 0;
    content: "";
    display: block;
    height: 9px;
    width: 5px;

    position: absolute;
    left: 7px;
    top: 4px;

    opacity: 0;
    transition: transform 0.3s ease, opacity 0.2s;
    transform: rotate(20deg);
  }

  &:checked {
    &::after {
      opacity: 1;
      transform: rotate(43deg);
    }
  }
`;

import styled from "styled-components";
import { Tumbler, TumblerProps } from "./Tumbler";

export interface RadioProps extends TumblerProps {}

export const Radio = styled(Tumbler).attrs({ type: "radio" })`
  border-radius: 50%;

  &:after {
    background-color: #fff;
    border-radius: 50%;
    content: "";
    display: block;
    height: 19px;
    width: 19px;
    transition: transform 0.3s ease, opacity 0.2s;

    opacity: 0;
    transform: scale(0.7);
  }
  &:checked {
    &::after {
      opacity: 1;
      transform: scale(0.5);
    }
  }
`;

import React from "react";
import styled from "styled-components";

interface AboutProps {
  title: string | number;
  label: string | number;
}
export const ResultColumn: React.FC<AboutProps> = ({ title, label }) => (
  <Wrapper>
    <h3>{title}</h3>
    <label>{label}</label>
  </Wrapper>
);

const Wrapper = styled.div`
  white-space: nowrap;
  overflow: hidden;

  @media (min-width: 600px) {
    text-align: left;
    padding-left: 20px;
  }

  @media (max-width: 599px) {
    text-align: center;
    margin: 0;
    padding: 1.2em;

    & h3 {
      margin-top: 0;
      margin-bottom: 0.2em !important;
    }
  }

  & h3 {
    margin-bottom: 0.5em;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 600;
    font-size: 28px;
    line-height: 1.35;
  }
  & h3.no-select {
    user-select: none;
  }

  & .label {
    font-size: 16px;
    color: rgba(0, 0, 0, 0.65);
  }
`;

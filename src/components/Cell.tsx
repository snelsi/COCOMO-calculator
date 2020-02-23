import React from "react";
import styled from "styled-components";
import { Radio } from "components";

interface CellProps {
  value: number;
  selectRadio: (driver: string, newValue: number) => void;
  cellValue: number;
  group: string;
  index: number;
}
export const Cell: React.FC<CellProps> = ({
  selectRadio,
  value,
  group,
  cellValue,
  index
}) => (
  <Container>
    <Radio
      disabled={cellValue === null}
      checked={value === index}
      onChange={() => selectRadio(group, index)}
      name={group}
    />
    <span className="cellLabel">{cellValue || "-"}</span>
  </Container>
);

const Container = styled.label`
  align-items: center;
  cursor: pointer;
  display: flex;
  border-radius: 8px;
  border: 2px solid transparent;
  justify-content: center;
  flex-direction: column;
  height: 100px;
  width: 100%;

  :hover,
  :focus-within {
    border-color: rgba(39, 94, 254, 0.3);
  }

  & span {
    margin-top: 8px;
  }
`;

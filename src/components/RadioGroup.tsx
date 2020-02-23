import React from "react";
import styled from "styled-components";
import { Cell } from "components";

interface RadioGroupProps {
  selectRadio: (driver: string, newValue: number) => void;
  value: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  radioValues: number[];
  group: string;
  title: string;
}
export const RadioGroup: React.FC<RadioGroupProps> = ({
  value,
  selectRadio,
  radioValues,
  group,
  title
}) => (
  <>
    <Title>{title}</Title>
    <Grid>
      <Cell
        value={value}
        selectRadio={selectRadio}
        cellValue={radioValues[0]}
        group={group}
        index={1}
      />
      <Cell
        value={value}
        selectRadio={selectRadio}
        cellValue={radioValues[1]}
        group={group}
        index={2}
      />
      <Cell
        value={value}
        selectRadio={selectRadio}
        cellValue={radioValues[2]}
        group={group}
        index={3}
      />
      <Cell
        value={value}
        selectRadio={selectRadio}
        cellValue={radioValues[3]}
        group={group}
        index={4}
      />
      <Cell
        value={value}
        selectRadio={selectRadio}
        cellValue={radioValues[4]}
        group={group}
        index={5}
      />
      <Cell
        value={value}
        selectRadio={selectRadio}
        cellValue={radioValues[5]}
        group={group}
        index={6}
      />
    </Grid>
  </>
);

const Title = styled.header`
  align-items: center;
  display: flex;
  justify-content: center;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  min-height: 48px;
  padding: 1em 0;
  margin: 0 1em;
  text-align: center;

  @media (max-width: 920px) {
    border-bottom: 1px solid #e8e8e8;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-gap: 12px;
  grid-template-columns: repeat(6, 1fr);
`;

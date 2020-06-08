import React, { useState } from "react";
import styled from "styled-components";
import { Collapse, InputNumber, Select } from "antd";
import { IntermediateCocomo, CoefficientTable, Result } from "cocomo";

const { Panel } = Collapse;
const { Option } = Select;

type Team = "organic" | "semidetach" | "embedded";
export const Cocomo = () => {
  document.title = "Калькулятор COCOMO";

  const [team, setTeam] = useState<Team>("organic");
  const [KLoC, setKLoC] = useState(0);
  const handleSelect = (newValue: Team) => setTeam(newValue);

  return (
    <Wrapper>
      <InputContainer>
        <label>
          У нас
          <Select
            style={{ margin: "12px", width: "140px" }}
            value={team}
            onChange={handleSelect}
            size="large"
          >
            <Option value="organic">Organic</Option>
            <Option value="semidetach">Semidetach</Option>
            <Option value="embedded">Embedded</Option>
          </Select>
          команда
        </label>
        <label>
          и нам нужно написать
          <InputNumber
            value={KLoC}
            onChange={(num) => setKLoC(Number(num))}
            style={{ margin: "12px", width: "140px" }}
            size="large"
          />
          тысяч строк кода
        </label>
      </InputContainer>
      <hr />

      <Result team={team} KLoC={KLoC} />
      <hr />
      <HideBar>
        <Panel header="Таблица коэффициентов" key="1">
          <CoefficientTable />
        </Panel>
      </HideBar>

      <hr />

      <IntermediateCocomo team={team} KLoC={KLoC} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 20px auto;
  max-width: 920px;

  @media (max-width: 1150px) {
    max-width: 80vw;
  }

  @media (max-width: 420px) {
    max-width: calc(100vw - 48px);
  }
`;

const HideBar = styled(Collapse)`
  &:focus-within {
    box-shadow: 0 0 0 2px rgba(39, 94, 254, 0.3);
  }
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: space-around;

  @media (max-width: 599px) {
    flex-direction: column;
    & label {
      align-items: center;
      display: grid;
      text-align: center;
      justify-content: center;
    }
  }
`;

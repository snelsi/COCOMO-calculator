import React from "react";
import styled from "styled-components";
import { Result } from "antd";

export const NoResult = () => {
  document.title = "Страница не найдена";
  return (
    <Wrapper>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
      />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  align-items: center;
  height: calc(100vh - 48px);
  display: flex;
  justify-content: center;
`;

import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { Menu, Icon } from "antd";

export const Nav = () => {
  const { pathname } = useLocation();

  return (
    <Menu
      style={{ padding: "0 2vw" }}
      selectedKeys={[pathname]}
      mode="horizontal"
    >
      <Item key="/">
        <Link to="/">
          <Icon type="question-circle" />
          About
        </Link>
      </Item>
      <Item key="/calc">
        <Link to="/calc">
          <Icon type="calculator" />
          COCOMO
        </Link>
      </Item>
    </Menu>
  );
};

const Item = styled(Menu.Item)`
  line-height: 47px;
  &:focus-within {
    box-shadow: 0 0 0 2px rgba(39, 94, 254, 0.3);
  }
`;

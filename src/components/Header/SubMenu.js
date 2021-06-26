import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    background: #252831;
    border-left: 4px solid green;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const SubMenu = ({ item }) => {
  const [nav, setNav] = useState(false);

  const showNav = () => setNav(!nav);

  return (
    <>
      <SidebarLink to={item.path} onClick={item.nav && showNav}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.nav && nav
            ? item.iconOpened
            : item.nav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
    </>
  );
};

export default SubMenu;

/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../styles/assets/logo.svg";
import { ContainerLayout } from "../Common/Container";
/*
  Componentes style
*/
interface PropsStyles {
  size?: number;
}

export const NavBar = styled.header`
  height: 80px;
  width: 100%;
  color: #333;
  background-color: ${(p) => p.theme.colors.black};
  align-items: center;
`;

const GroupAvatar = styled.div`
  height: auto;
  color: ${(p) => p.theme.colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const GroupMessage = styled.div`
  height: auto;
  color: ${(p) => p.theme.colors.white};
  margin: 30px 0;
  @media (max-width: 1000px) {
    display: none;
  }
`;

const Logos = styled.img<PropsStyles>`
  align-item: center;
  margin: 8px 0;
  height: ${(p) => (p.size ? `${p.size}px` : "64px")};
`;
/*
  MAIN
  @TEX
*/
const NavBarC: React.FC = () => (
  <NavBar>
    <ContainerLayout>
      <GroupAvatar />

      <Link to="/home">
        <Logos src={Logo} />
      </Link>
    </ContainerLayout>
  </NavBar>
);
export default NavBarC;

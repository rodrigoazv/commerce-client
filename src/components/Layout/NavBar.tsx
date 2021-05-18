/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { TextField } from "@material-ui/core";
import { useSelector } from "react-redux";
import Logo from "../../styles/assets/logo.svg";
import { ApplicationState } from "../../store";
import Cart from "../../styles/assets/cart.svg";
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
  background-color: ${(p) => p.theme.colors.white};
  align-items: center;
`;

const GroupSearch = styled.form`
  height: auto;
  color: ${(p) => p.theme.colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 500px;
`;

const GroupActions = styled.div`
  height: auto;
  color: ${(p) => p.theme.colors.white};
  margin: 30px 0;
  display: flex;
  @media (max-width: 1000px) {
    display: none;
  }
`;

const Logos = styled.img<PropsStyles>`
  align-item: center;
  margin: 8px 0;
  height: ${(p) => (p.size ? `${p.size}px` : "64px")};
`;

const Ico = styled.img<PropsStyles>`
  align-item: center;
  margin: 8px 0;
  height: ${(p) => (p.size ? `${p.size}px` : "32px")};
`;

const Actions = styled.div`
  height: auto;
  color: ${(p) => p.theme.colors.black};
  display: flex;
  p {
    align-items: center;
    margin: auto 10px;
  }
  @media (max-width: 1000px) {
    display: none;
  }
`;

const Counter = styled.div<PropsStyles>`
  margin: auto 10px;
  border-radius: 50%;
  display: inline-block;
  height: ${(p) => (p.size ? `${p.size}px` : "22px")};
  width: ${(p) => (p.size ? `${p.size}px` : "22px")};
  padding: 3px 0 3px 7px;
  color: #fff;
  background-color: #f8475f;
`;
/*
  MAIN
  @TEX
*/
const NavBarC: React.FC = () => {
  const { cart } = useSelector((state: ApplicationState) => state.cart);
  return (
    <NavBar>
      <ContainerLayout>
        <Link to="/home">
          <Logos src={Logo} />
        </Link>
        <GroupSearch>
          <TextField
            fullWidth
            name="nome"
            placeholder="O que está procurando?"
            size="small"
          />
        </GroupSearch>
        <GroupActions>
          <Actions>
            <Ico src={Cart} />
            <p>Minha conta</p>
          </Actions>
          <Actions>
            <Ico src={Cart} />
            <Counter>{cart}</Counter>
          </Actions>
        </GroupActions>
      </ContainerLayout>
    </NavBar>
  );
};
export default NavBarC;

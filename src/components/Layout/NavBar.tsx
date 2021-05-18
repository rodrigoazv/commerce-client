/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { TextField } from "@material-ui/core";
import { useSelector } from "react-redux";
import { AiOutlineMenu } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
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
  display: flex;
  justify-content: space-between;
`;

const GroupSearch = styled.form`
  height: auto;
  color: ${(p) => p.theme.colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 500px;
  @media (max-width: 1000px) {
    display: none;
  }
`;

const GroupSearchR = styled.form`
  height: auto;
  color: ${(p) => p.theme.colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media (min-width: 1000px) {
    display: none;
  }
`;

const GroupActions = styled.div`
  height: auto;
  color: ${(p) => p.theme.colors.white};
  margin: 30px 0;
  display: flex;
`;

const Logos = styled.img<PropsStyles>`
  align-item: center;
  margin: 8px 0;
  height: ${(p) => (p.size ? `${p.size}px` : "48px")};
  @media (max-width: 1000px) {
    height: ${(p) => (p.size ? `${p.size}px` : "24px")};
  }
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
`;

const ActionsResp = styled.div`
  height: auto;
  color: ${(p) => p.theme.colors.black};
  display: flex;
  p {
    align-items: center;
    margin: auto 10px;
  }
  @media (min-width: 1000px) {
    display: none;
  }
`;

const ActionsNoResp = styled.div`
  height: auto;
  color: ${(p) => p.theme.colors.black};
  display: flex;
  p {
    align-items: center;
    margin: auto 10px;
  }
  svg {
    margin: 5px 0;
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

const Column = styled.div<PropsStyles>`
  display: flex;
  flex-direction: column;
  height: auto;
  color: ${(p) => p.theme.colors.white};
  justify-content: space-around;
  width: 100%;
  padding: 0 10px;
`;
/*
  MAIN
  @TEX
*/
const NavBarC: React.FC = () => {
  const { cart } = useSelector((state: ApplicationState) => state.cart);
  return (
    <ContainerLayout>
      <Column>
        <NavBar>
          <ActionsResp>
            <AiOutlineMenu size={32} />
          </ActionsResp>
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
            <ActionsNoResp>
              <BsPerson size={34} />
              <p>Minha conta</p>
            </ActionsNoResp>
            <Actions>
              <Ico src={Cart} />
              <Counter>{cart}</Counter>
            </Actions>
          </GroupActions>
        </NavBar>
        <GroupSearchR>
          <TextField
            fullWidth
            name="nome"
            placeholder="O que está procurando?"
            size="small"
          />
        </GroupSearchR>
      </Column>
    </ContainerLayout>
  );
};
export default NavBarC;

/* eslint-disable jsx-a11y/label-has-associated-control */
import styled from "styled-components";
import React, { ReactChild } from "react";
import Footer from "./Footer";

import NavBar from "./NavBar";

/*
  Componentes props
*/
interface Props {
  children: ReactChild;
}

const Main = styled.main`
  width: 100%;
  display: flex;
  margin: 0;
`;
/*
  MAIN
  @TEX
*/
const HomePage: React.FC<Props> = ({ children }: Props) => (
  <>
    <NavBar />

    <Main>{children}</Main>

    <Footer />
  </>
);
export default HomePage;

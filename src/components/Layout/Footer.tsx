/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import styled from "styled-components";
// import { Content } from "./styles";

export const ContainerLayout = styled.div`
  position: absolute;
  left: 0;
  width: ${(p) => p.theme.screen.xl};
  width: 100vw;
  color: #333;
  justify-content: space-between;
  flex-direction: row;
  margin: 0 auto;
  height: 100px;
  @media (max-width: 1000px) {
    width: 100vw;
  }
`;

export const ImageBanner = styled.div`
  height: 300px;
  width: 100%;
  background: #333;
`;

const Login: React.FC = () => {
  console.log("Oi");
  return (
    <ContainerLayout>
      <ImageBanner>
        <h2> Single Item</h2>
      </ImageBanner>
    </ContainerLayout>
  );
};

export default Login;

/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import styled from "styled-components";
// import { Content } from "./styles";

export const Container = styled.div`
  width: 100%;
`;

export const ContainerLayout = styled.div`
  box-sizing: border-box;
`;

export const ImageBanner = styled.div`
  height: 146px;
  width: 100%;
  background: #f2f2f2;
`;

const Login: React.FC = () => {
  console.log("Oi");
  return (
    <Container>
      <ContainerLayout>
        <ImageBanner>
          <h2> Single Item</h2>
        </ImageBanner>
      </ContainerLayout>
    </Container>
  );
};

export default Login;

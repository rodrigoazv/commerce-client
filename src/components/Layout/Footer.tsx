/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import styled from "styled-components";
import { MdEmail, MdPhone } from "react-icons/md";
import vtex from "../../styles/assets/vtex.svg";
import coreb from "../../styles/assets/logow.svg";
// import { Content } from "./styles";

export const ContainerLayout = styled.div`
  position: absolute;
  left: 0;
  width: ${(p) => p.theme.screen.xl};
  height: 300px;
  width: 100%;
  background: #333;
  color: #fff;
  justify-content: space-between;
  flex-direction: row;
  margin: 0 auto;
  @media (max-width: 1000px) {
    width: 100vw;
  }
`;

export const ImageBanner = styled.div`
  width: 50%;
  margin: 0 auto;
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 50px 0;
  p {
    width: 200px;
  }
`;

const Ico = styled.img`
  width: 100px;
  height: 50px;
`;

export const ContentTxt = styled.div``;

export const ContentLay = styled.div`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  a {
    background: #fff;
    padding: 10px;
    border-radius: 5px;
    margin: 10px;
    text-decoration: none;
    color: black;
    width: 200px;
    text-align: center;
    align-items: center;
  }
`;

export const ContentLayAut = styled.div`
  display: flex;
  flex-direction: row;
  text-decoration: none;
  height: 100px;
`;

const Login: React.FC = () => (
  <ContainerLayout>
    <ImageBanner>
      <Wrap>
        <ContentTxt>
          <h1>Localização</h1>
          <p>
            Avenida Andrômeda, 2000. Bloco 6 e 8 Alphavile SP brasil@corebiz.ag
            +55 11 3090 1039
          </p>
        </ContentTxt>
        <ContentLay>
          <a href="/main">
            <MdEmail size={24} />
            ENTRE EM CONTATO
          </a>
          <a href="/main">
            <MdPhone size={24} />
            FALE COM NOSSO CONSULTOR ONLINE
          </a>
        </ContentLay>
        <ContentLayAut>
          <div>
            <p>Created by</p>
            <Ico src={coreb} />
          </div>
          <div>
            <p>Powered by</p>
            <Ico src={vtex} />
          </div>
        </ContentLayAut>
      </Wrap>
    </ImageBanner>
  </ContainerLayout>
);

export default Login;

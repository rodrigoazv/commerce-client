/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import Slider from "react-slick";
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
  @media (max-width: 1000px) {
    width: 100vw;
  }
`;

export const ImageBanner = styled.div`
  height: 300px;
  background: #333;
`;

const Login: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots: any) => (
      <div
        style={{
          backgroundColor: "#ddd",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };
  return (
    <ContainerLayout>
      <h2> Single Item</h2>
      <Slider {...settings}>
        <ImageBanner />
        <ImageBanner />
        <ImageBanner />
        <ImageBanner />
      </Slider>
    </ContainerLayout>
  );
};

export default Login;

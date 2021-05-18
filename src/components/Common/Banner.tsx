/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
// import { Content } from "./styles";

export const Container = styled.div`
  width: 100%;
`;

export const ContainerLayout = styled.div`
  box-sizing: border-box;
  height: 300px;
  margin: 0 auto;
  width: 100%;
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
          backgroundColor: "transparent",
          padding: "10px",
          marginTop: "-50px",
          position: "absolute",
          color: "red",
        }}
      >
        <ul style={{ marginTop: "-50px" }}> {dots} </ul>
      </div>
    ),
  };
  return (
    <Container>
      <ContainerLayout>
        <Slider {...settings}>
          <ImageBanner />
          <ImageBanner />
          <ImageBanner />
          <ImageBanner />
        </Slider>
      </ContainerLayout>
    </Container>
  );
};

export default Login;

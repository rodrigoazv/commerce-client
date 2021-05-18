/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import { GoChevronRight, GoChevronLeft } from "react-icons/go";
import { ContainerLayout } from "../Common/Container";
import Card from "../Common/Card";

const Main = styled.main`
  width: 100%;
  margin: 100px 0;
`;

function SamplePrevArrow(props: any) {
  const { onClick, style, className } = props;
  return (
    <GoChevronRight
      className={className}
      onClick={onClick}
      style={{ ...style, height: "32px" }}
      color="#333"
    />
  );
}
function SampleBackArrow(props: any) {
  const { onClick, style, className } = props;
  return (
    <GoChevronLeft
      className={className}
      onClick={onClick}
      style={{ ...style, height: "32px" }}
      color="#333"
    />
  );
}
/*
  MAIN
  @TEX
*/
const HomePage: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <SamplePrevArrow />,
    prevArrow: <SampleBackArrow />,
    appendDots: (dots: any) => (
      <div style={{ display: "none" }}>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };

  const [product, setProduct] = useState([]);
  useEffect(() => {
    const getElements = async () => {
      const resp: any = await axios.get(
        `https://corebiz-test.herokuapp.com/api/v1/products`
      );
      setProduct(resp.data);
    };
    getElements();
  }, []);
  return (
    <>
      <ContainerLayout>
        <Main>
          <Slider {...settings}>
            {product.map((p: any) => (
              <Card
                promo={p.listPrice > p.price}
                oldPrice={p.listPrice / 100}
                price={p.price / 100}
                image={p.imageUrl}
                description={p.productName}
                id={p.productId}
                search="roupa"
                installments={p.installments}
              />
            ))}
          </Slider>
        </Main>
      </ContainerLayout>
    </>
  );
};
export default HomePage;

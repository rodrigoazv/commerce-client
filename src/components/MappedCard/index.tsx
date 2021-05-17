/* eslint-disable jsx-a11y/label-has-associated-control */
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { ContainerLayout } from "../Common/Container";
import Card from "../Common/Card";

const Main = styled.main`
  width: 100%;
  display: flex;
  margin: 100px 0;
`;
/*
  MAIN
  @TEX
*/
const HomePage: React.FC = () => {
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
          {product.map((p: any) => (
            <Card
              promo={p.listPrice > p.price}
              price={p.price / 100}
              image={p.imageUrl}
              description={p.productName}
              id="1"
              search="roupa"
              liked
            />
          ))}
        </Main>
      </ContainerLayout>
    </>
  );
};
export default HomePage;

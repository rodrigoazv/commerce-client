/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Father = styled.div`
  a {
    text-decoration: none;
  }
`;

const Card = styled.div`
  text-decoration: none;
  z-index: 5;
  margin: 0 0 20px 0;
  background: ${(p) => p.theme.colors.white};
  color: ${(p) => p.theme.colors.black};
  height: 450px;
  width: 280px;
  display: flex;
  flex-direction: column;
  span {
    width: 100px;
    height: 1px;
  }
`;
const Img = styled.img`
  z-index: 10;
  height: 300px;
  width: 280px;
  overflow: hidden;
  object-fit: cover;
  border-radius: 8px;
`;

const Ico = styled.img`
  position: relative;
  width: 10px;
  height: 10px;
`;

const Content = styled.div`
  height: 140px;
  margin: 20px 0 10px 0;
  width: 280px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  h1 {
    font-size: 20px;
    align-items: center;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  p {
    font-size: 15px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  transition: 0.3s;
  button {
    display: none;
  }
  &: hover {
    background: #e6e8ea;
    cursor: pointer;
    button {
      display: flex;
      background: #333;
      color: #fff;
      padding: 10px 30px;
      border-radius: 4px;
      border: none;
    }
  }
`;

const BtnFather = styled.div`
  margin: 10px 0;
  height: 30px;
`;

/*
  Componentes props
*/
interface Props {
  promo: boolean;
  image: string;
  oldPrice: number;
  description: string;
  id: string;
  search: "roupa" | "sapato";

  installments: [];
  price: number;
}
/*
  MAIN
  @TEX
*/
const CardComicsChar: React.FC<Props> = ({
  promo,
  image,
  oldPrice,
  description,
  id,
  search,

  installments,
  price,
}: Props) => (
  <Father>
    <Link to={`/${search}/${id}`}>
      <Card>
        {promo ? <Ico src={image} /> : null}

        <Img src={image} alt="none" />
        <span />
        <Content>
          <p>{description}</p>
          <p>{promo ? `de ${oldPrice} R$` : null}</p>
          <h1>por {price} R$</h1>
          {installments.map((i: any) => (
            <p>{i ? `ou ${i.quantity}x de ${i.value / 100} R$` : null}</p>
          ))}
          <BtnFather>
            <button type="button">COMPRAR</button>
          </BtnFather>
        </Content>
      </Card>
    </Link>
  </Father>
);
export default CardComicsChar;

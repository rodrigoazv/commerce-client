/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { addCart } from "../../store/ducks/product/actions";

const Father = styled.div`
  a {
    text-decoration: none;
  }
`;

const Card = styled.div`
  text-decoration: none;
  z-index: 5;
  margin: 0 0 20px 20px;
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
  @media (max-width: 1400px) {
    height: 350px;
    width: 140px;
  }
`;
const Img = styled.img`
  z-index: 10;
  height: 200px;
  width: 280px;
  overflow: hidden;
  object-fit: cover;
  border-radius: 8px;
  @media (max-width: 1400px) {
    height: 150px;
    width: 140px;
  }
`;

const Content = styled.div`
  height: 140px;
  margin: 20px 0 10px 0;
  width: 280px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  button {
    display: none;
  }
  @media (max-width: 1400px) {
    width: 140px;
    button {
      display: flex;
      background: #333;
      color: #fff;
      padding: 10px 30px;
      border-radius: 4px;
      border: none;
    }
  }
  h1 {
    font-size: 20px;
    align-items: center;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    @media (max-width: 1400px) {
      font-size: 15px;
    }
  }
  p {
    font-size: 15px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  transition: 0.3s;
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

const Promo = styled.div`
  width: 0;
  height: 0;
  margin-left: 80%;
  border-top: 40px solid #f8475f;
  border-bottom: 0px solid #f8475f;
  border-left: 40px solid transparent;
`;
const PromoNone = styled.div`
  width: 0;
  height: 0;
  margin-left: 80%;
  border-top: 70px solid transparent;
  border-bottom: 0px solid transparent;
  border-left: 70px solid transparent;
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
}: Props) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addCart());
  };
  return (
    <Father>
      <Card>
        <Link to={`/${search}/${id}`}>
          {promo ? <Promo /> : <PromoNone />}

          <Img src={image} alt="none" />
          <span />
        </Link>
        <Content>
          <p>{description}</p>
          <p>{promo ? `de ${oldPrice} R$` : null}</p>
          <h1>por {price} R$</h1>
          {installments.map((i: any) => (
            <p>{i ? `ou ${i.quantity}x de ${i.value / 100} R$` : null}</p>
          ))}

          <BtnFather>
            <button type="button" onClick={() => addToCart()}>
              COMPRAR
            </button>
          </BtnFather>
        </Content>
      </Card>
    </Father>
  );
};

export default CardComicsChar;

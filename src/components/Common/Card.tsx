/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";

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
  height: 350px;
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

const Content = styled.div`
  height: 140px;
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
`;

const Favor = styled.button`
  height: 40px;
  width: 50px;
  transform: translateX(2%);
  transition: 0.5s transform cubic-bezier(0.5, 0, 0, 1);
  margin-left: 80%;
  border: 1px solid ${(p) => p.theme.colors.gold};
  border-radius: 5px;
  background-color: ${(p) => p.theme.colors.secondary.main};
  color: ${(p) => p.theme.colors.gold};
  &: hover {
    background: ${(p) => p.theme.colors.secondary.contrastText};
    color: ${(p) => p.theme.colors.secondary.main};
    border: 1px solid ${(p) => p.theme.colors.secondary.main};
    border-radius: 4px;
    transform: translateX(0);
    cursor: pointer;
    -webkit-box-shadow: 0px 0px 7px -3px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 7px -3px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 7px -3px rgba(0, 0, 0, 0.75);
  }
`;

/*
  Componentes props
*/
interface Props {
  promo: boolean;
  image: string;
  description: string;
  id: string;
  search: "roupa" | "sapato";
  liked: boolean;
  price: number;
}
/*
  MAIN
  @TEX
*/
const CardComicsChar: React.FC<Props> = ({
  promo,
  image,
  description,
  id,
  search,
  liked,
  price,
}: Props) => {
  const likeOrDeslike = (data: any) => {
    console.log(data);
  };
  return (
    <Father>
      <Link to={`/${search}/${id}`}>
        <Card>
          {promo ? (
            <Favor
              onClick={() =>
                likeOrDeslike({
                  type: search,
                  id,
                  name: promo,
                  thumb: image,
                  like: liked,
                })
              }
            >
              <AiFillStar size={24} />
            </Favor>
          ) : null}

          <Img src={image} alt="none" />
          <span />
          <Content>
            <p>{description}</p>
            <h1>{promo}</h1>
            <p>por {price} R$</p>
          </Content>
        </Card>
      </Link>
    </Father>
  );
};
export default CardComicsChar;

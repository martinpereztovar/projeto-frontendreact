import styled from "styled-components";

export const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 25%;
  height: 25%;
  padding: 2px;
  border: 1px solid black;
`;

export const Picture = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 5px;
`;

export const Text = styled.p`
  font-size: 15px;
  word-wrap: break-wrap;
  text-align: center;
`;

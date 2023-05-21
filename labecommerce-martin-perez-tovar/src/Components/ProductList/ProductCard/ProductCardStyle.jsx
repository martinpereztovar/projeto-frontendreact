import styled from "styled-components";

export const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 160px;
  padding: 2px;
  border: 1px solid black;

  .img {
    width: 120px;
    height: 160px;
    margin-top: 5px;
    border-radius: 5px;

    .p {
      font-size: 10px;
      word-wrap: break-wrap;
      text-align: center;
    }
  }
`;

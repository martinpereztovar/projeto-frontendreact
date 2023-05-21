import Items from "../Items/Items";
import { CartContainer } from "./CartStyle";

export default function Cart() {
  return (
    <CartContainer>
      <p>Cart</p>
      <Items />
      <p>Valor total: 0</p>
    </CartContainer>
  );
}

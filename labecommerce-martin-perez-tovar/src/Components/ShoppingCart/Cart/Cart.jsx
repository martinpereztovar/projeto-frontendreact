import Items from "../Items/Items";
import { CartContainer } from "./CartStyle";

export default function Cart({ amount, cart, setAmount, setCart }) {
  return (
    <CartContainer>
      <h2>Cart</h2>
      <Items />
      <p
        onChange={(event) => {
          setAmount(event.target.value);
        }}
      >
        Valor total: {amount}
      </p>
    </CartContainer>
  );
}

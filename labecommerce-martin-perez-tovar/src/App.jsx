import { useState } from "react";
import Filters from "./Components/Filters/Filters";
import Home from "./Components/ProductList/Home/Home";
import Cart from "./Components/ShoppingCart/Cart/Cart";
import { Container } from "./AppStyle";
import products from "./assets/productList";

function App() {
  const [cart, setCart] = useState("");
  const [amount, setAmount] = useState("");
  const [minFilter, setMinFilter] = useState("");
  const [maxFilter, setMaxFilter] = useState("");
  const [nameFilter, setNameFilter] = useState("");

  return (
    <Container>
      <Filters products={products} />
      <Home products={products} />
      <Cart products={products} />
    </Container>
  );
}

export default App;

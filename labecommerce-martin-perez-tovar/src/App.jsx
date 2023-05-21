import { useState } from "react";
import Filters from "./Components/Filters/Filters";
import Home from "./Components/ProductList/Home/Home";
import Cart from "./Components/ShoppingCart/Cart/Cart";
import { Container } from "./AppStyle";
import products from "./assets/productList";

function App() {
  return (
    <Container>
      <Filters products={products} />
      <Home products={products} />
      <Cart products={products} />
    </Container>
  );
}

export default App;

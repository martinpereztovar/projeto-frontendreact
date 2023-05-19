import { useState } from "react";
import Filters from "./Components/Filters/Filters";
import Home from "./Components/ProductList/Home/Home";
import Cart from "./Components/ShoppingCart/Cart/Cart";
import { Container } from "./AppStyle";

function App() {
  return (
    <Container>
      <p>Bem vindo</p>
      <Filters />
      <Home />
      <Cart />
    </Container>
  );
}

export default App;

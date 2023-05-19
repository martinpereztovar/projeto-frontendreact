import { useState } from "react";
import Filters from "./Components/Filters/Filters";
import Home from "./Components/ProductList/Home/Home";
import Cart from "./Components/ShoppingCart/Cart/Cart";

function App() {
  return (
    <>
      <p>Bem vindo</p>
      <Filters />
      <Home />
      <Cart />
    </>
  );
}

export default App;

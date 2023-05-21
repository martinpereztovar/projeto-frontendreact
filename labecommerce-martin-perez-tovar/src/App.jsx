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
  const [productList, setProductList] = useState(products.length);

  return (
    <Container>
      <Filters
        products={products}
        minFilter={minFilter}
        maxFilter={maxFilter}
        nameFilter={nameFilter}
        setMinFilter={setMinFilter}
        setMaxFilter={setMaxFilter}
        setNameFilter={setNameFilter}
      />
      <Home
        products={products}
        productList={productList}
        amount={amount}
        cart={cart}
        setAmount={setAmount}
        setCart={setCart}
      />
      <Cart
        products={products}
        amount={amount}
        cart={cart}
        setAmount={setAmount}
        setCart={setCart}
      />
    </Container>
  );
}

export default App;

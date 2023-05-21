import ProductCard from "../ProductCard/ProductCard";
import { HomeContainer } from "./HomeStyle";

export default function Home() {
  return (
    <HomeContainer>
      <p>Produtos disponíveis:</p>
      <select>
        <option value="">Ordenar</option>
        <option value="asc">Crescente</option>
        <option value="desc">Decrescente</option>
      </select>
      <ProductCard />
    </HomeContainer>
  );
}

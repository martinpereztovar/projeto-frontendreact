import ProductCard from "../ProductCard/ProductCard";
import { HomeContainer, HeaderHome } from "./HomeStyle";

export default function Home({ products }) {
  return (
    <HomeContainer>
      <HeaderHome>
        <h2>Produtos disponíveis:</h2>
        <select>
          <option value="">Ordenar</option>
          <option value="asc">Crescente</option>
          <option value="desc">Decrescente</option>
        </select>
      </HeaderHome>
      <HomeContainer>
        {products.map((product) => {
          return (
            <ProductCard
              value={product.value}
              name={product.name}
              image={product.imageUrl}
              key={product.id}
            />
          );
        })}
      </HomeContainer>
    </HomeContainer>
  );
}

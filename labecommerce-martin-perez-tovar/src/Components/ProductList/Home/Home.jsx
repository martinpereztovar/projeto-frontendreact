import ProductCard from "../ProductCard/ProductCard";
import { HomeContainer, HeaderHome } from "./HomeStyle";

export default function Home({ products }) {
  const [ordination, setOrdination] = useState("");

  return (
    <HomeContainer>
      <HeaderHome>
        <h2>Produtos disponíveis:</h2>
        <select
          value={ordination}
          onChange={(event) => {
            setOrdination(event.target.value);
          }}
        >
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

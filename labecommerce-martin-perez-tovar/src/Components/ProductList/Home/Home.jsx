import ProductCard from "../ProductCard/ProductCard";

export default function Home() {
  return (
    <>
      <p>Produtos disponíveis:</p>
      <select>
        <option value="">Ordenar</option>
        <option value="asc">Crescente</option>
        <option value="desc">Decrescente</option>
      </select>
      <ProductCard />
    </>
  );
}

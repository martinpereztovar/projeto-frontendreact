import { ProductCardContainer, Picture, Text } from "./ProductCardStyle";

export default function ProductCard({ name, image, value }) {
  return (
    <ProductCardContainer>
      <Picture src={image} alt={name} />
      <Text>{name}</Text>
      <Text>{value}</Text>
      <button>Adicionar ao carrinho</button>
    </ProductCardContainer>
  );
}

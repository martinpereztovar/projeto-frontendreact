import { FilterContainer } from "./FiltersStyle";

export default function Filters() {
  return (
    <FilterContainer>
      <h2>Escolha sua busca</h2>
      <input type="number" placeholder="Valor mínimo" />
      <input type="number" placeholder="Valor máximo" />
      <input type="text" placeholder="Nombre del producto" />
    </FilterContainer>
  );
}

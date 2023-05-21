import { FilterContainer } from "./FiltersStyle";

export default function Filters({
  minFilter,
  maxFilter,
  nameFilter,
  setMinFilter,
  setMaxFilter,
  setNameFilter,
});

const handleMinChange = (event) => {
  const value = event.target.value;
  if (value < 0) {
    setMinFilter(0);
  } else {
    setMinFilter(value);
  }
};

const handleMaxChange = (event) => {
  const value = event.target.value;
  if (value < 0) {
    setMaxFilter(0);
  } else {
    setMaxFilter(value);
  }
};

{
  return (
    <FilterContainer>
      <h2>Escolha sua busca</h2>
      <input
        type="number"
        placeholder="Valor mínimo"
        value={minFilter}
        onChange={handleMinChange()}
      />
      <input
        type="number"
        placeholder="Valor máximo"
        value={maxFilter}
        onChange={handleMaxChange()}
      />
      <input
        type="text"
        placeholder="Nombre del producto"
        value={nameFilter}
        onChange={(event) => {
          setNameFilter(event.target.value);
        }}
      />
    </FilterContainer>
  );
}

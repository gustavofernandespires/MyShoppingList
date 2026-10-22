import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { Container } from "./styles";

export default function Header({
  hasError,
  qtyOfItems,
  qtyOfFilteredItems,
  search,
  setSearch,
}) {
  const alignment = hasError
    ? "flex-end"
    : qtyOfItems > 0
      ? "space-between"
      : "center";

  return (
    <Container $justifyContent={alignment}>
      {!hasError && qtyOfItems > 0 && (
        <div>
          <h1>Minha Lista</h1>
          <span>
            {qtyOfFilteredItems}
            {qtyOfFilteredItems === 1 ? " item " : " itens "}
            na lista
          </span>
        </div>
      )}

      <div className="toolbar">
        <div className="navigation">
          <Link to={"/new"}>+ Novo item</Link>
          <Link to={"/categories"}>Categorias</Link>
        </div>

        {!hasError && qtyOfItems > 0 && (
          <input
            placeholder="Buscar item..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          ></input>
        )}
      </div>
    </Container>
  );
}

Header.propTypes = {
  hasError: PropTypes.bool.isRequired,
  qtyOfItems: PropTypes.number.isRequired,
  qtyOfFilteredItems: PropTypes.number.isRequired,
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
};

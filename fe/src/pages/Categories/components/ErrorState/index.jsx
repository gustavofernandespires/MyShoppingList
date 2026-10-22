import PropTypes from "prop-types";

import Button from "../../../../components/Button";

import { Container } from "./styles";

export default function ErrorState({ loadCategories }) {
  return (
    <Container>
      <p>Não foi possível carregar as categorias</p>
      <Button onClick={loadCategories}>Tentar novamente</Button>
    </Container>
  );
}

ErrorState.propTypes = {
  loadCategories: PropTypes.func.isRequired,
};

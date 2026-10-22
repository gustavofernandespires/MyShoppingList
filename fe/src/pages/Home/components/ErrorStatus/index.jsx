import PropTypes from "prop-types";

import sad from "../../../../assets/images/sad.svg";
import Button from "../../../../components/Button";

import { Container } from "./styles";

export default function ErrorContainer({ onTryAgain }) {
  return (
    <Container>
      <img src={sad} alt="Sad" />

      <div className="details">
        <strong>Ocorreu um erro ao carregar os itens!</strong>
        <Button type="button" onClick={onTryAgain}>
          Tentar novamente
        </Button>
      </div>
    </Container>
  );
}

ErrorContainer.propTypes = {
  onTryAgain: PropTypes.func.isRequired,
};

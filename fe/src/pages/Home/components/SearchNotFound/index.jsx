import PropTypes from "prop-types";

import magnifierQuestion from "../../../../assets/images/magnifier-question.svg";

import { Container } from "./styles";

export default function SearchNotFound({ search }) {
  return (
    <Container>
      <img src={magnifierQuestion} alt="Magnifier Question" />
      <span>
        Nenhum resultado foi encontrado para <strong>{search}</strong>.
      </span>
    </Container>
  );
}

SearchNotFound.propTypes = {
  search: PropTypes.string.isRequired,
};

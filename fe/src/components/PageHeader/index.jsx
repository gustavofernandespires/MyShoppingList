import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { FiArrowLeft } from "react-icons/fi";

import { Container } from "./styles";

export default function PageHeader({ title, children }) {
  return (
    <Container>
      <Link to={"/"}>
        <FiArrowLeft />
        <span>Voltar para a lista</span>
      </Link>

      <h1>{title}</h1>
      {children}
    </Container>
  );
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

import PropTypes from "prop-types";

import Button from "../../../../components/Button";
import { Input } from "../../../../components/Input";

import { Container } from "./styles";

export default function Form({ onCreate, name, setName, isSaving }) {
  return (
    <Container onSubmit={onCreate}>
      <label htmlFor="new-category">Nova Categoria</label>
      <div className="form-row">
        <Input
          id="new-category"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Ex: Alimento"
          maxLength={80}
          disabled={isSaving}
        />

        <Button type="submit" isLoading={isSaving} disabled={!name.trim()}>
          Criar Categoria
        </Button>
      </div>
    </Container>
  );
}

Form.propTypes = {
  onCreate: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  setName: PropTypes.func.isRequired,
  isSaving: PropTypes.bool.isRequired,
};

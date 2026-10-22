import PropTypes from "prop-types";

import { FiCheck, FiEdit2, FiTrash2, FiX } from "react-icons/fi";
import { Input } from "../../../../components/Input";

import {
  Container,
  CategoryRow,
  CategoryForm,
  Actions,
  IconButton,
  CategoryName,
} from "./styles";

export default function CategoriesList({
  categories,
  editingId,
  editingName,
  isSaving,
  setEditingName,
  onUpdate,
  onCancelEditing,
  onStartEditing,
  setCategoryBeingDeleted,
}) {
  return (
    <Container>
      {categories.map((category) => (
        <CategoryRow key={category.id}>
          {editingId === category.id ? (
            <CategoryForm onSubmit={(event) => onUpdate(event, category)}>
              <Input
                aria-label="Nome da categoria"
                value={editingName}
                onChange={(event) => setEditingName(event.target.value)}
                maxLength={80}
                autoFocus
                disabled={isSaving}
              />

              <Actions>
                <IconButton
                  type="submit"
                  title="Salvar Categoria"
                  disabled={!editingName.trim() || isSaving}
                >
                  <FiCheck />
                </IconButton>

                <IconButton
                  type="button"
                  title="Cancelar edição"
                  onClick={onCancelEditing}
                  disabled={isSaving}
                >
                  <FiX />
                </IconButton>
              </Actions>
            </CategoryForm>
          ) : (
            <>
              <CategoryName>{category.name}</CategoryName>

              <Actions>
                <IconButton
                  type="button"
                  title={`Editar ${category.name}`}
                  onClick={() => onStartEditing(category)}
                >
                  <FiEdit2 />
                </IconButton>

                <IconButton
                  type="button"
                  title={`Excluir ${category.name}`}
                  $danger
                  onClick={() => setCategoryBeingDeleted(category)}
                >
                  <FiTrash2 />
                </IconButton>
              </Actions>
            </>
          )}
        </CategoryRow>
      ))}
    </Container>
  );
}

CategoriesList.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  editingId: PropTypes.string,
  editingName: PropTypes.string,
  isSaving: PropTypes.bool,
  setEditingName: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onCancelEditing: PropTypes.func.isRequired,
  onStartEditing: PropTypes.func.isRequired,
  setCategoryBeingDeleted: PropTypes.func.isRequired,
};

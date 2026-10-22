import { Container } from "./styles";

import PageHeader from "../../components/PageHeader";
import Loader from "../../components/Loader";
import Modal from "../../components/Modal";

import useCategories from "./useCategories";
import Form from "./components/Form";
import ErrorState from "./components/ErrorState";
import EmptyState from "./components/EmptyState";
import CategoriesList from "./components/CategoriesList";

export default function Categories() {
  const {
    isLoading,
    categoryBeingDeleted,
    isDeleting,
    setCategoryBeingDeleted,
    handleDelete,
    handleCreate,
    name,
    setName,
    isSaving,
    hasError,
    loadCategories,
    categories,
    editingId,
    handleUpdate,
    editingName,
    setEditingName,
    handleCancelEditing,
    handleStartEditing,
  } = useCategories();

  const emptyCategories = categories.length === 0 && !isLoading;

  return (
    <Container>
      <Loader isLoading={isLoading} />

      <PageHeader title="Categorias">
        <span>Crie, edite ou exclua categorias.</span>
      </PageHeader>

      <Form
        onCreate={handleCreate}
        name={name}
        setName={setName}
        isSaving={isSaving}
      />

      {hasError ? (
        <ErrorState loadCategories={loadCategories} />
      ) : emptyCategories ? (
        <EmptyState />
      ) : (
        <CategoriesList
          categories={categories}
          editingId={editingId}
          editingName={editingName}
          isSaving={isSaving}
          setEditingName={setEditingName}
          onUpdate={handleUpdate}
          onCancelEditing={handleCancelEditing}
          onStartEditing={handleStartEditing}
          setCategoryBeingDeleted={setCategoryBeingDeleted}
        />
      )}

      <Modal
        danger
        visible={categoryBeingDeleted}
        isLoading={isDeleting}
        title={`Tem certeza que deseja excluir a categoria "${categoryBeingDeleted?.name}"?`}
        confirmLabel="Excluir"
        onCancel={() => setCategoryBeingDeleted(null)}
        onConfirm={handleDelete}
      >
        <p>
          Essa ação não poderá ser desfeita! Categorias vinculadas a itens não
          podem ser excluídas.
        </p>
      </Modal>
    </Container>
  );
}

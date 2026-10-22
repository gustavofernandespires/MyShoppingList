import { Container } from "./styles";

import Loader from "../../components/Loader";
import Modal from "../../components/Modal";

import useHome from "./useHome";
import Header from "./components/Header";
import ErrorStatus from "./components/ErrorStatus";
import EmptyList from "./components/EmptyList";
import SearchNotFound from "./components/SearchNotFound";
import ItemsList from "./components/ItemList";

export default function Home() {
  const {
    isLoading,
    isDeleteModalVisible,
    isLoadingDelete,
    ItemBeingDeleted,
    handleCloseDeleteModal,
    handleConfirmDeleteContact,
    hasError,
    orderBy,
    items,
    filteredItems,
    search,
    setSearch,
    handleTryAgain,
    handleToggleOrderBy,
    handleTogglePurchased,
    handleDeleteItem,
  } = useHome();

  const hasItems = items.length > 0;
  const emptyList = !hasError && items.length < 1 && !isLoading;
  const isSearchNotFound =
    !hasError && items.length > 0 && filteredItems.length < 1;

  return (
    <Container>
      <Loader isLoading={isLoading} />

      <Header
        hasError={hasError}
        qtyOfItems={items.length}
        qtyOfFilteredItems={filteredItems.length}
        search={search}
        setSearch={setSearch}
      />

      {hasError && <ErrorStatus onTryAgain={handleTryAgain} />}
      {emptyList && <EmptyList />}
      {isSearchNotFound && <SearchNotFound search={search} />}

      {hasItems && (
        <>
          <ItemsList
            filteredItems={filteredItems}
            orderBy={orderBy}
            onToggleOrderBy={handleToggleOrderBy}
            onTogglePurchased={handleTogglePurchased}
            onDeleteItem={handleDeleteItem}
          />
        </>
      )}

      <Modal
        danger
        visible={isDeleteModalVisible}
        isLoading={isLoadingDelete}
        title={`Tem certeza que deseja excluir "${ItemBeingDeleted?.name}" da lista?`}
        confirmLabel="Deletar"
        onCancel={handleCloseDeleteModal}
        onConfirm={handleConfirmDeleteContact}
      >
        <p>Esta ação não poderá ser desfeita!</p>
      </Modal>
    </Container>
  );
}

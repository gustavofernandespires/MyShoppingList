/* eslint-disable react-hooks/set-state-in-effect */
import { useCallback, useEffect, useState } from "react";
import ItemsService from "../../services/ItemsService";

import toast from "../../utils/toast";

export default function useHome() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [orderBy, setOrderBy] = useState("ASC");
  const [hasError, setHasError] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [ItemBeingDeleted, setItemBeingDeleted] = useState(null);
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);

  const filteredItems = items.filter((item) =>
    item.name?.toLowerCase().includes(search.toLowerCase()),
  );

  const loadItems = useCallback(async () => {
    try {
      setIsLoading(true);

      const itemsList = await ItemsService.listItems(orderBy);

      setHasError(false);
      setItems(itemsList);
    } catch {
      setHasError(true);
      setItems([]);
    } finally {
      setIsLoading(false);
    }
  }, [orderBy]);

  useEffect(() => {
    loadItems();
  }, [loadItems]);

  function handleToggleOrderBy() {
    setOrderBy((currentOrderBy) => (currentOrderBy === "ASC" ? "DESC" : "ASC"));
  }

  async function handleTogglePurchased(item) {
    setIsLoading(true);

    const updatedItem = {
      name: item.name,
      quantity: item.quantity,
      category: item.category,
      purchased: !item.purchased,
    };

    try {
      const updatedItemResponse = await ItemsService.updateItem(
        item.id,
        updatedItem,
      );

      console.log("Resposta da API:", updatedItemResponse);

      setItems((currentItems) =>
        currentItems.map((currentItem) =>
          currentItem.id === item.id
            ? {
                ...currentItem,
                ...updatedItemResponse,
              }
            : currentItem,
        ),
      );
      setIsLoading(false);
    } catch (error) {
      console.log("Resposta da API:", error);
      alert("Não foi possível alterar o status do item.", error);
    }
  }

  function handleTryAgain() {
    loadItems();
  }

  function handleDeleteItem(item) {
    setItemBeingDeleted(item);
    setIsDeleteModalVisible(true);
  }

  function handleCloseDeleteModal() {
    setIsDeleteModalVisible(false);
  }

  async function handleConfirmDeleteContact() {
    try {
      setIsLoadingDelete(true);

      await ItemsService.deleteItem(ItemBeingDeleted.id);

      setItems((prevState) =>
        prevState.filter((items) => items.id !== ItemBeingDeleted.id),
      );

      handleCloseDeleteModal();

      toast({
        type: "success",
        text: "Item deletado com sucesso!",
      });
    } catch (error) {
      console.log(error);
      toast({
        type: "danger",
        text: "Ocorreu um erro ao deletar o item! Tente novamente.",
      });
    } finally {
      setIsLoadingDelete(false);
    }
  }

  return {
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
  };
}

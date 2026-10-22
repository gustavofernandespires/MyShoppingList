/* eslint-disable react-hooks/set-state-in-effect */
import { useCallback, useEffect, useState } from "react";
import CategoriesService from "../../services/CategoriesService";
import toast from "../../utils/toast";

export default function useCategories() {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingName, setEditingName] = useState("");
  const [categoryBeingDeleted, setCategoryBeingDeleted] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const loadCategories = useCallback(async () => {
    setIsLoading(true);

    try {
      const categoriesList = await CategoriesService.listCategories();
      setCategories(categoriesList);
      setHasError(false);
    } catch {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadCategories();
  }, [loadCategories]);

  async function handleCreate(event) {
    event.preventDefault();
    const categoryName = name.trim();

    if (!categoryName) return;

    setIsSaving(true);

    try {
      const category = await CategoriesService.createCategory({
        name: categoryName,
      });

      setCategories((current) =>
        [...current, category].sort((a, b) => a.name.localeCompare(b.name)),
      );
      setName("");

      toast({
        type: "success",
        text: "Categoria criada com sucesso!",
      });
    } catch {
      toast({
        type: "danger",
        text: "Não foi possível criar a categoria. Verifique se o nome já existe.",
      });
    } finally {
      setIsSaving(false);
    }
  }

  function handleCancelEditing() {
    setEditingId(null);
    setEditingName("");
  }

  async function handleUpdate(event, category) {
    event.preventDefault();
    const categoryName = editingName.trim();

    if (!categoryName) return;

    setIsSaving(true);

    try {
      const upatedCategory = await CategoriesService.updateCategory(
        category.id,
        {
          name: categoryName,
        },
      );

      setCategories((current) =>
        current
          .map((entry) => (entry.id === category.id ? upatedCategory : entry))
          .sort((a, b) => a.name.localeCompare(b.name)),
      );

      handleCancelEditing();

      toast({
        type: "success",
        text: "Categoria atualizada com sucesso!",
      });
    } catch {
      toast({
        type: "danger",
        text: "Não foi possível atualizar. Verifique se o nome já existe.",
      });
    } finally {
      setIsSaving(false);
    }
  }

  function handleStartEditing(category) {
    setEditingId(category.id);
    setEditingName(category.name);
  }

  async function handleDelete() {
    if (!categoryBeingDeleted) return;

    setIsDeleting(true);

    try {
      await CategoriesService.deleteCategory(categoryBeingDeleted.id);

      setCategories((current) =>
        current.filter((category) => category.id !== categoryBeingDeleted.id),
      );
      setCategoryBeingDeleted(null);

      toast({
        type: "success",
        text: "Categoria excluída com sucesso!",
      });
    } catch {
      toast({
        type: "danger",
        text: "Não foi possível excluir. Confira se há itens usando esta categoria.",
      });
    } finally {
      setIsDeleting(false);
    }
  }

  return {
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
  };
}

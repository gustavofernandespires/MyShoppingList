import { useState, useEffect, useImperativeHandle } from "react";

import useErrors from "../../hooks/useErros";
import CategoriesService from "../../services/CategoriesService";

export default function useItemForm(onSubmit, ref) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { setError, removeError, getErrorMessageByFieldName, errors } =
    useErrors();

  const isFormValid = name && errors.length === 0;

  useImperativeHandle(
    ref,
    () => ({
      setFieldValues: (item) => {
        setName(item.name ?? "");
        setQuantity(item.quantity ?? "");
        setCategory(item.category?.id ?? "");
      },
    }),
    [],
  );

  useEffect(() => {
    async function loadCategories() {
      try {
        const categoriesList = await CategoriesService.listCategories();

        setCategories(categoriesList);
      } catch {
      } finally {
        setIsLoadingCategories(false);
      }
    }

    loadCategories();
  }, []);

  function handleNameChange(event) {
    setName(event.target.value);

    if (!event.target.value) {
      setError({ field: "name", message: "Produto é obrigatório" });
    } else {
      removeError("name");
    }
  }

  function handleQuantityChange(event) {
    setQuantity(event.target.value);
  }

  function handleCategoryChange(event) {
    setCategory(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setIsSubmitting(true);

    await onSubmit({
      name,
      quantity: Number(quantity) || 1,
      category: category || null,
      purchased: false,
    });

    setIsSubmitting(false);
  }

  return {
    handleSubmit,
    getErrorMessageByFieldName,
    name,
    handleNameChange,
    isSubmitting,
    quantity,
    handleQuantityChange,
    isLoadingCategories,
    category,
    handleCategoryChange,
    categories,
    isFormValid,
  };
}

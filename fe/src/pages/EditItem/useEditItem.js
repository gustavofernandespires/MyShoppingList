import { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";

import toast from "../../utils/toast";

import ItemsService from "../../services/ItemsService";
import UseSafeAsyncAction from "../../hooks/useSafeAsyncAction";

export default function useEditItem() {
  const [isLoading, setIsLoading] = useState(true);
  const [itemName, setItemName] = useState("");

  const itemFormRef = useRef(null);

  const { id } = useParams();
  const navigate = useNavigate();
  const safeAsyncAction = UseSafeAsyncAction();

  useEffect(() => {
    async function loadItem() {
      try {
        const item = await ItemsService.getItem(id);

        safeAsyncAction(() => {
          itemFormRef.current.setFieldValues(item);
          setIsLoading(false);
          setItemName(item.name);
        });
      } catch {
        safeAsyncAction(() => {
          navigate("/");
          toast({
            type: "danger",
            text: "Item não encontrado!",
          });
        });
      }
    }

    loadItem();
  }, [id, navigate, safeAsyncAction]);

  async function handleSubmit(item) {
    try {
      const itemData = await ItemsService.updateItem(id, item);

      setItemName(itemData.name);
      toast({
        type: "success",
        text: "Item editado com sucesso!",
        duration: 3000,
      });
    } catch {
      toast({
        type: "danger",
        text: "Ocorreu um erro ao editar o item!",
      });
    }
  }

  return {
    isLoading,
    itemName,
    itemFormRef,
    handleSubmit,
  };
}

import ItemsService from "../../services/ItemsService";
import toast from "../../utils/toast";

export default function useNewItem() {
  async function handleSubmit(item) {
    try {
      await ItemsService.createItem(item);

      toast({
        type: "success",
        text: "Item cadastrado com sucesso!",
        duration: 3000,
      });
    } catch {
      toast({
        type: "danger",
        text: "Ocorreu um erro ao cadastrar o item!",
      });
    }
  }

  return { handleSubmit };
}

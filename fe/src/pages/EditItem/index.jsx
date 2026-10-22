import PageHeader from "../../components/PageHeader";
import ItemForm from "../../components/ItemForm";
import Loader from "../../components/Loader";

import useEditItem from "./useEditItem";

export default function EditItem() {
  const { isLoading, itemName, itemFormRef, handleSubmit } = useEditItem();

  return (
    <>
      <Loader isLoading={isLoading} />

      <PageHeader title={isLoading ? "Carregando..." : `Editar ${itemName}`}>
        <p>Edite os campos que você precisa mudar.</p>
      </PageHeader>

      <ItemForm
        ref={itemFormRef}
        buttonLabel="Editar item"
        onSubmit={handleSubmit}
      />
    </>
  );
}

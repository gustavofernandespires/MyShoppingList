import PageHeader from "../../components/PageHeader";
import ItemForm from "../../components/ItemForm";

import { Container } from "./styles";

import useNewItem from "./useNewItem";

export default function NewItem() {
  const { handleSubmit } = useNewItem();

  return (
    <Container>
      <PageHeader title="Novo Item">
        <p>Preencha os dados abaixo para adicionar um novo item à sua lista.</p>
      </PageHeader>

      <ItemForm buttonLabel="Adicionar item" onSubmit={handleSubmit} />
    </Container>
  );
}

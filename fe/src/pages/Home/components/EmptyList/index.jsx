import emptyBox from "../../../../assets/images/empty-box.svg";

import { Container } from "../../styles";

export default function EmptyList() {
  return (
    <Container>
      <img src={emptyBox} alt="" />

      <p>
        Você não tem itens na lista. Clique no botão{" "}
        <strong>"+ Novo item"</strong> à cima para cadastrar o seu primeiro
        item!
      </p>
    </Container>
  );
}

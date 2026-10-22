import { Link } from "react-router-dom";

import { FiCheckCircle, FiClock, FiEdit2, FiTrash2 } from "react-icons/fi";
import Button from "../../../../components/Button";

import {
  Container,
  ListHeader,
  Item,
  ItemName,
  StatusBadge,
  ItemsActions,
  IconButton,
} from "./styles";

export default function ItemsList({
  filteredItems,
  orderBy,
  onToggleOrderBy,
  onTogglePurchased,
  onDeleteItem,
}) {
  return (
    <Container>
      {filteredItems.length > 0 && (
        <ListHeader>
          <Button type="button" onClick={onToggleOrderBy}>
            Nome {orderBy === "ASC" ? "↑" : "↓"}
          </Button>
          <strong>Quantidade</strong>
          <strong>Categoria</strong>
          <strong>Status</strong>
          <strong>Ações</strong>
        </ListHeader>
      )}

      {filteredItems.map((item) => (
        <Item key={item.id}>
          <ItemName data-label="Item" $purchased={item.purchased}>
            {item.name}
          </ItemName>

          <span data-label="Quantidade">{item.quantity}</span>
          <span data-label="Categoria">{item.category?.name}</span>

          <StatusBadge
            data-label="Status"
            type="button"
            $purchased={item.purchased}
            onClick={() => onTogglePurchased(item)}
          >
            {item.purchased ? (
              <>
                <FiCheckCircle />
                Comprado
              </>
            ) : (
              <>
                <FiClock />
                Pendente
              </>
            )}
          </StatusBadge>

          <ItemsActions data-label="Ações">
            <Link to={`edit/${item.id}`}>
              <FiEdit2 />
            </Link>

            <IconButton
              type="button"
              title="Deletar item"
              $danger
              onClick={() => onDeleteItem(item)}
            >
              <FiTrash2 />
            </IconButton>
          </ItemsActions>
        </Item>
      ))}
    </Container>
  );
}

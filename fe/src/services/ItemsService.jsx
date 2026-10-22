import APIClient from "./utils/APIClient";
import ItemMapper from "./mappers/ItemMapper";

class ItemsService {
  async listItems(orderBy = "asc") {
    const items = await APIClient.get(`/items?orderBy=${orderBy}`);

    return items.map(ItemMapper.toDomain);
  }

  async getItem(id) {
    const item = await APIClient.get(`/items/${id}`);

    return ItemMapper.toDomain(item);
  }

  async createItem(item) {
    const body = ItemMapper.toPersistence(item);
    const createItem = await APIClient.post("/items", { body });

    return ItemMapper.toDomain(createItem);
  }

  async updateItem(id, item) {
    const body = ItemMapper.toPersistence(item);
    const upatedItem = await APIClient.put(`/items/${id}`, { body });

    return ItemMapper.toDomain(upatedItem);
  }

  deleteItem(id) {
    return APIClient.delete(`/items/${id}`);
  }
}

export default new ItemsService();

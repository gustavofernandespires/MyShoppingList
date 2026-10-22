const CategoriesRepository = require("../repositories/CategoriesRepository");
const ItemsRepository = require("../repositories/ItemsRepository");
const isValidUUID = require("../utils/isValidUUID");

class ItemController {
  async index(request, response) {
    const { orderBy } = request.query;
    const items = await ItemsRepository.findAll(orderBy);

    response.json(items);
  }

  async show(request, response) {
    const { id } = request.params;

    if (!isValidUUID(id)) {
      return response.status(400).json({
        error: "Invalid item ID",
      });
    }

    const item = await ItemsRepository.findById(id);

    if (!item) {
      return response.status(404).json({
        error: "Item not found",
      });
    }

    response.json(item);
  }

  async store(request, response) {
    const { name, quantity, purchased, category } = request.body;

    if (!name) {
      return response.status(400).json({
        error: "Name is required",
      });
    }

    if (category && !isValidUUID(category)) {
      return response.status(400).json({
        error: "Invalid category ID",
      });
    }

    const itemExists = await ItemsRepository.findByName(name);

    if (itemExists) {
      return response.status(400).json({
        error: "This item is already in the list.",
      });
    }

    if (category) {
      const categoryExists = await CategoriesRepository.findById(category);

      if (!categoryExists) {
        return response.status(400).json({
          error: "Category not found",
        });
      }
    }

    const item = await ItemsRepository.create({
      name,
      quantity,
      purchased,
      category: category || null,
    });

    response.status(201).json(item);
  }

  async update(request, response) {
    const { id } = request.params;
    const { name, quantity, purchased, category } = request.body;

    if (!isValidUUID(id)) {
      return response.status(400).json({
        error: "Invalid item ID",
      });
    }

    if (category && !isValidUUID(category)) {
      return response.status(400).json({
        error: "Invalid category ID",
      });
    }

    if (!name) {
      return response.status(400).json({
        error: "Name is required.",
      });
    }

    const itemExists = await ItemsRepository.findById(id);

    if (!itemExists) {
      return response.status(404).json({
        error: "Item not found.",
      });
    }

    const itemByName = await ItemsRepository.findByName(name);

    if (itemByName && itemByName.id !== id) {
      return response.status(400).json({
        error: "This item is already in the list.",
      });
    }

    if (category) {
      const categoryExists = await CategoriesRepository.findById(category);

      if (!categoryExists) {
        return response.status(400).json({
          error: "Category not found",
        });
      }
    }

    await ItemsRepository.update(id, {
      name,
      quantity,
      purchased,
      category: category || null,
    });

    const updatedItem = await ItemsRepository.findById(id);

    response.json(updatedItem);
  }

  async delete(request, response) {
    const { id } = request.params;

    if (!isValidUUID(id)) {
      return response.status(400).json({
        error: "Invalid item ID",
      });
    }

    await ItemsRepository.delete(id);

    response.sendStatus(204);
  }
}

module.exports = new ItemController();

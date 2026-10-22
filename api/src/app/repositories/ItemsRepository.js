const db = require("../../database");

class ItemsRepository {
  async findAll(orderBy = "ASC") {
    const direction = orderBy.toUpperCase() === "DESC" ? "DESC" : "ASC";
    const rows = await db.query(
      `
      SELECT items.*, categories.name as category_name
      FROM items
      LEFT JOIN categories ON categories.id = items.category
      ORDER BY items.name ${direction}`,
    );
    return rows;
  }

  async findById(id) {
    const [row] = await db.query(
      `
      SELECT items.*, categories.name as category_name
      FROM items
      LEFT JOIN categories ON categories.id = items.category
      WHERE items.id = $1`,
      [id],
    );
    return row;
  }

  async findByName(name) {
    const [row] = await db.query(
      `
      SELECT *
      FROM items
      WHERE name = $1`,
      [name],
    );
    return row;
  }

  async create({ name, quantity = 1, purchased = false, category }) {
    const [row] = await db.query(
      `
      INSERT INTO items(name, quantity, purchased, category)
      VALUES ($1, $2, $3, $4)
      RETURNING *`,
      [name, quantity, purchased, category],
    );
    return row;
  }

  async update(id, { name, quantity, purchased, category }) {
    const [row] = await db.query(
      `
      UPDATE items
      SET name = $1,
          quantity =$2,
          purchased = $3,
          category = $4
      WHERE id = $5
      RETURNING *`,
      [name, quantity, purchased, category, id],
    );
    return row;
  }

  async delete(id) {
    const deleteOp = await db.query(
      `DELETE FROM items
      WHERE id = $1`,
      [id],
    );
    return deleteOp;
  }
}

module.exports = new ItemsRepository();

const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  port: 5433,
  user: "root",
  password: "root",
  database: "my_shopping_list",
});

client.connect();

exports.query = async (query, values) => {
  const { rows } = await client.query(query, values);
  return rows;
};

CREATE DATABASE my_shopping_list;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS categories (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  name VARCHAR NOT NULL
);

CREATE TABLE IF NOT EXISTS items (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  name VARCHAR NOT NULL,
  quantity INTEGER NOT NULL DEFAULT 1,
  purchased BOOLEAN NOT NULL DEFAULT false,
  category UUID,
  FOREIGN KEY (category)
  REFERENCES categories(id)
);

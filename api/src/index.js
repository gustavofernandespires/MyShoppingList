const express = require("express");

const routes = require("./routes");
const errorHandler = require("./app/middlewares/errorHandler");
const cors = require("./app/middlewares/cors");

const app = express();

app.use(express.json());

app.use(cors);

app.use(routes);

app.use(errorHandler);

app.listen(3002, () =>
  console.log("Server is running on http://localhost:3002"),
);

const { Router } = require("express");

const router = Router();

const CategoryController = require("./app/controllers/CategoryController");
const ItemController = require("./app/controllers/ItemController");

router.get(
  "/items",
  (request, response, next) => {
    request.appId = "MeuAppId";
    next();
  },
  ItemController.index,
);
router.get("/items/:id", ItemController.show);
router.post("/items", ItemController.store);
router.put("/items/:id", ItemController.update);
router.delete("/items/:id", ItemController.delete);

router.get("/categories", CategoryController.index);
router.post("/categories", CategoryController.store);
router.get("/categories/:id", CategoryController.show);
router.put("/categories/:id", CategoryController.update);
router.delete("/categories/:id", CategoryController.delete);

module.exports = router;

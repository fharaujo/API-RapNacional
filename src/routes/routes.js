const routes = require("express").Router();

const DiscController = require("../controllers/DiscController");
const DiscMiddleware = require("../middlewares/DiscMiddlewares");

routes.get("/discs", DiscController.getAll);
routes.get("/discs/:id", DiscMiddleware.isValidId, DiscController.getById);
routes.post("/discs", DiscController.create);

module.exports = routes;

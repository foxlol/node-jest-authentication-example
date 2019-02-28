const routes = require("express").Router();
const authenticationMiddleware = require("./app/middleware/authentication");
const SessionController = require("./app/controllers/SessionController");

routes.post("/sessions", SessionController.store);

routes.use(authenticationMiddleware);

routes.get("/dashboard", (req, res) => {
  return res.status(200).send();
});

module.exports = routes;

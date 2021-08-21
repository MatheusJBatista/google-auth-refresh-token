const { Router } = require("express");
const ensureAuthentication = require("../middlewares/auth-middlewares");

const todoController = require("../controller/todo-controller");

const router = Router();

router.get("/", ensureAuthentication, todoController.get);

module.exports = router;

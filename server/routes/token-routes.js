const { Router } = require("express");

const tokenController = require("../controller/token-controller");

const router = Router();

router.get("/", tokenController.getToken);

module.exports = router;

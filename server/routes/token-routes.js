const { Router } = require("express");

const tokenController = require("../controller/token-controller");
const ensureAuthentication = require("../middlewares/auth-middlewares");

const router = Router();

router.get("/", tokenController.getToken);
router.post("/login", tokenController.login);
router.post("/revoke", ensureAuthentication, tokenController.revoke);

module.exports = router;

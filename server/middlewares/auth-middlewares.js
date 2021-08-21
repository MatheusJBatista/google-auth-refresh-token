const jwt = require("jsonwebtoken");

const tokenHelper = require("../helper/token-helper");
const googleAuthService = require("../external-services/google/google-auth");

const ensureAuthentication = async (req, res, next) => {
  const refreshToken = tokenHelper.getToken(req);

  if (refreshToken === null) return res.status(401).send("Unauthorized user");

  try {
    const token = await googleAuthService.refreshToken(refreshToken);
    const user = jwt.decode(token["id_token"]);

    req.user = user;
  } catch (error) {
    res.status(401).send("Unauthorized user");
    return;
  }

  next();
};

module.exports = ensureAuthentication;

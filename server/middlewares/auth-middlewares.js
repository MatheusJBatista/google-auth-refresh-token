const jwt = require("jsonwebtoken");

const tokenHelper = require("../helper/token-helper");
const googleAuthService = require("../external-services/google/google-auth");

const ensureAuthentication = async (req, res, next) => {
  const idToken = tokenHelper.getToken(req);

  if (!idToken) return res.status(401).send("Invalid or expired token");

  try {
    const user = await googleAuthService.verifyIdToken(idToken);

    req.user = user;
    next();
  } catch (error) {
    res.status(401).send("Invalid or expired token");
    return;
  }
};

module.exports = ensureAuthentication;

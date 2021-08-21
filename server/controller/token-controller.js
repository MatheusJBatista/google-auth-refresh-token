const tokenHelper = require("../helper/token-helper");
const googleAuthService = require("../external-services/google/google-auth");

const getToken = async (req, res) => {
  const refreshToken = tokenHelper.getToken(req);

  const token = await googleAuthService.refreshToken(refreshToken);

  res.send(token);
};

module.exports = { getToken };

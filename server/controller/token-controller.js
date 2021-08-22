const tokenHelper = require("../helper/token-helper");
const googleAuthService = require("../external-services/google/google-auth");

const getToken = async (req, res) => {
  try {
    const refreshToken = tokenHelper.getRefreshToken(req);
    if (!refreshToken) res.status(400).send("Invalid refresh token");

    const token = await googleAuthService.refreshToken(refreshToken);

    res.send(token);
  } catch (error) {
    res.status(400).send("Invalid refresh token");
  }
};

const login = async (req, res) => {
  try {
    const { code } = req.body;

    if (!code) return res.status(400).send("Code must be valid");

    const { refresh_token } = await googleAuthService.getRefreshToken(code);

    res.send(refresh_token);
  } catch (error) {
    res.status(400).send("Something goes wrong");
  }
};

const revoke = async (req, res) => {
  try {
    const refreshToken = tokenHelper.getRefreshToken(req);

    if (refreshToken) await googleAuthService.revokeToken(refreshToken);
  } catch (error) {
    res.status(400).send("Something goes wrong");
  }
};

module.exports = { getToken, login, revoke };

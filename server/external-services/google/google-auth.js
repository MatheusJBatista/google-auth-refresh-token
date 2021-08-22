const axios = require("axios");
const qs = require("qs");
const { OAuth2Client } = require("google-auth-library");

const CLIENT_ID = "YOUR_CLIENT_ID";
const CLIENT_SECRET = "YOUR_CLIENT_SECRET";

const client = new OAuth2Client(CLIENT_ID, CLIENT_SECRET);

const getRefreshToken = async (code) => {
  const requestBody = {
    code,
    redirect_uri: "http://localhost:3000/google/callback",
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    grant_type: "authorization_code",
  };

  const response = await axios.post(
    "https://oauth2.googleapis.com/token",
    qs.stringify(requestBody)
  );

  return response.data;
};

const refreshToken = async (refreshToken) => {
  const requestBody = {
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    refresh_token: refreshToken,
    grant_type: "refresh_token",
  };

  const response = await axios.post(
    "https://oauth2.googleapis.com/token",
    qs.stringify(requestBody)
  );

  return response.data;
};

const verifyIdToken = async (idToken) => {
  const ticket = await client.verifyIdToken({
    idToken,
    audience: CLIENT_ID,
  });

  return ticket.getPayload();
};

const revokeToken = async (token) => await client.revokeToken(token);

module.exports = { refreshToken, verifyIdToken, getRefreshToken, revokeToken };

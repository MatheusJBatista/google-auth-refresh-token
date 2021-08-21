const axios = require("axios");
const querystring = require("querystring");

const CLIENT_ID = "YOUR_CLIENT_ID_HERE";
const CLIENT_SECRET = "YOUT_CLIENT_SECRET_HERE";

const refreshToken = async (refreshToken) => {
  const requestBody = {
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    refresh_token: refreshToken,
    grant_type: "refresh_token",
  };

  const response = await axios.post(
    "https://oauth2.googleapis.com/token",
    querystring.stringify(requestBody)
  );

  return response.data;
};

module.exports = { refreshToken };

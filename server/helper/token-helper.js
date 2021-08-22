const getToken = (req) => {
  if (!req.headers.authorization) return null;

  const [, idToken] = req.headers.authorization?.split("Bearer ");

  return idToken;
};

const getRefreshToken = (req) => {
  const refreshToken = req.headers?.["x-refresh-token"];

  return refreshToken;
};

module.exports = { getToken, getRefreshToken };

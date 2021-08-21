const getToken = (req) => {
  if (!req.headers.authorization) return null;

  const [, refreshToken] = req.headers.authorization?.split("Bearer ");

  return refreshToken;
};

module.exports = { getToken };

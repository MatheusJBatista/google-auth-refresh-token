const refreshToken = "refresh_token";
const idToken = "id_token";

const onBrowser = () => !!process.browser;

const setRefreshToken = (token) =>
  onBrowser() && localStorage.setItem(refreshToken, token);

const getRefreshToken = () => onBrowser() && localStorage.getItem(refreshToken);

const setIdToken = (_idToken) =>
  onBrowser() && localStorage.setItem(idToken, _idToken);

const getIdToken = () => onBrowser() && localStorage.getItem(idToken);

const clearStorage = () => onBrowser() && localStorage.clear();

export {
  setRefreshToken,
  getRefreshToken,
  setIdToken,
  getIdToken,
  clearStorage,
};

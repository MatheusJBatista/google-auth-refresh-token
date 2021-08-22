import {
  createContext,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import * as api from "../api/token/token";
import { authenticate } from "../utility/google-auth-utility";
import * as localStorageUtility from "../utility/local-storage-utility";

const GoogleAuthContext = createContext();

const GoogleAuthProvider = ({ children }) => {
  const refreshToken = localStorageUtility.getRefreshToken();
  const [isAuthenticated, setIsAuthenticated] = useState(Boolean(refreshToken));
  const [user, setUser] = useState();

  useEffect(() => {
    if (isAuthenticated) setUser({}); // TODO: Get user
  }, [isAuthenticated]);

  const logout = () => {
    api.revoke().then((_) => {
      localStorageUtility.clearStorage();
      setIsAuthenticated(false);
    });
  };

  return (
    <GoogleAuthContext.Provider
      value={{
        user,
        isAuthenticated,
        setIsAuthenticated,
        authenticate,
        logout,
      }}
    >
      {children}
    </GoogleAuthContext.Provider>
  );
};

export default memo(GoogleAuthProvider);
export { GoogleAuthContext };

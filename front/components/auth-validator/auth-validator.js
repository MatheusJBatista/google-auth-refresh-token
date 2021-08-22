import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { GoogleAuthContext } from "../../context/google-auth-context";
import RoutesEnum from "../../enums/RoutesEnum";
import styles from "../../styles/Global.module.css";

const AuthValidator = ({ requiredAuth, children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const { isAuthenticated } = useContext(GoogleAuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated && requiredAuth) return router.push(RoutesEnum.Home);
    setIsLoading(false);
  }, [router, requiredAuth, isAuthenticated]);

  return (
    <main className={styles.main}>{isLoading ? null : <>{children}</>}</main>
  );
};

export default AuthValidator;

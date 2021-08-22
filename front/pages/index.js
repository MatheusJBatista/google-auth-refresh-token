import styles from "../styles/Global.module.css";
import { useRouter } from "next/router";
import RoutesEnum from "../enums/RoutesEnum";

import { GoogleAuthContext } from "../context/google-auth-context";
import { useContext } from "react";

export default function Home() {
  const router = useRouter();
  const { isAuthenticated, logout } = useContext(GoogleAuthContext);

  const goToAuthPage = () => router.push(RoutesEnum.Auth);
  const goToSecretPage = () => router.push(RoutesEnum.Secret);

  return (
    <main className={styles.main}>
      <h1>{isAuthenticated ? "Welcome" : "You are not logged"}</h1>
      {isAuthenticated ? (
        <div>
          <button onClick={logout} style={{ marginRight: "5px" }}>
            logout
          </button>
          <button onClick={goToSecretPage}>Go To Secret Page</button>
        </div>
      ) : (
        <button onClick={goToAuthPage}>Go to login</button>
      )}
    </main>
  );
}

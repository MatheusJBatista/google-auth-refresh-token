import { useContext } from "react";

import styles from "../../styles/Global.module.css";

import { GoogleAuthContext } from "../../context/google-auth-context";

const Auth = () => {
  const { authenticate } = useContext(GoogleAuthContext);
  return (
    <main className={styles.main}>
      <h1>Auth</h1>
      <button
        style={{
          backgroundColor: "tomato",
          color: "white",
        }}
        onClick={authenticate}
      >
        With Google
      </button>
    </main>
  );
};

export default Auth;

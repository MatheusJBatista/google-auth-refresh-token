import GoogleAuthProvider from "../context/google-auth-context";
import "../styles/globals.css";
import "font-awesome/css/font-awesome.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <GoogleAuthProvider>
      <Component {...pageProps} />
    </GoogleAuthProvider>
  );
}

export default MyApp;

import { useRouter } from "next/router";
import AuthValidator from "../../components/auth-validator/auth-validator";

const Secret = () => {
  const router = useRouter();

  const handlerGoBack = () => router.back();

  return (
    <AuthValidator requiredAuth={true}>
      <h1>Welcome to secret page :)</h1>
      <button onClick={handlerGoBack}>Go Back</button>
    </AuthValidator>
  );
};

export default Secret;

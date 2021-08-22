import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

import * as tokenApi from "../../api/token/token";
import * as localStorageUtility from "../../utility/local-storage-utility";
import Loader from "../../components/loader/loader";
import RoutesEnum from "../../enums/RoutesEnum";
import { GoogleAuthContext } from "../../context/google-auth-context";

const GoogleCallback = () => {
  const [successFullLogin, setSuccessFullLogin] = useState(false);
  const { isAuthenticated, setIsAuthenticated } = useContext(GoogleAuthContext);

  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) return;
    if (!(isAuthenticated && successFullLogin)) return;
    router.push(RoutesEnum.Home);
  }, [successFullLogin, isAuthenticated]);

  useEffect(() => {
    const code = router.query.code;

    if (!code || isAuthenticated) return;

    const runAsync = async () => {
      const refreshToken = await tokenApi.login({ code });
      localStorageUtility.setRefreshToken(refreshToken);

      const { id_token } = await tokenApi.getToken();
      localStorageUtility.setIdToken(id_token);

      setIsAuthenticated(true);
      setSuccessFullLogin(true);
    };
    runAsync();
  }, [router, isAuthenticated]);

  return <Loader isLoading={true} />;
};

export default GoogleCallback;

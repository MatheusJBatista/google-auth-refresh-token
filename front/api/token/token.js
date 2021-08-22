import api from "../api";

const getToken = async () => await api.get("/token");
const login = async (request) => await api.post("/token/login", request);
const revoke = async () => await api.post("/token/revoke");

export { getToken, login, revoke };

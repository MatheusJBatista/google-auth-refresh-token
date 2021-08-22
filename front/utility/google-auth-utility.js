import qs from "qs";

const clientId = process.env.NEXT_PUBLIC_GOOGLE_AUTH_CLIENT_ID;
const redirectUrl = process.env.NEXT_PUBLIC_GOOGLE_AUTH_REDIRECT_URL;
const authUrl = "https://accounts.google.com/o/oauth2/v2/auth";
const scopes = ["profile", "email", "openid"];
const params = {
  scope: scopes.join(" "),
  ["include_granted_scopes"]: true,
  ["response_type"]: "code",
  ["access_type"]: "offline",
  ["redirect_uri"]: redirectUrl,
  ["client_id"]: clientId,
  prompt: "consent",
  state: "state_parameter_passthrough_value",
};

const authenticate = () => {
  const stringParams = qs.stringify(params);
  window.location.href = `${authUrl}?${stringParams}`;
};

export { authenticate };

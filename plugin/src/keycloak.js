import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  realm: "somoffice",
  clientId: "somoffice-shell",
  url: "http://localhost:8080",
});

const initConfig = {
  onLoad: "login-required",
};

export function initKeycloak(config) {
  return keycloak
    .init({ ...initConfig, ...config })
    .then(function (authenticated) {
      alert(authenticated ? "authenticated" : "not authenticated");
    })
    .catch(function () {
      alert("failed to initialize");
    });
}

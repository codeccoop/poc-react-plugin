import React, { Component, useEffect, useState, createContext } from "react";
import {
  BrowserRouter,
  Redirect,
  Switch,
  Route,
  useLocation,
  useHistory,
} from "react-router-dom";

import "core-js";
import "regenerator-runtime";

function ScrollTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function PrivateRoute({ children, ...rest }) {
  return (
    <LoginContext.Consumer>
      {isLogged => {
        return (
          <Route
            {...rest}
            render={({ location }) => {
              if (isLogged) {
                return children;
              } else {
                return (
                  <Redirect to={{ pathname: "/login", state: { from: location } }} />
                );
              }
            }}
          />
        );
      }}
    </LoginContext.Consumer>
  );
}

function AppRoutes({ onLogin }) {
  return (
    <>
      <ScrollTop />
      <Switch>
        <Route path="/login">
          <Login onLogin={onLogin} />
        </Route>
        <PrivateRoute path="/">
          <Home />
        </PrivateRoute>
        <Route path="*" render={() => <Redirect to="/" />} />
      </Switch>
    </>
  );
}

function Home() {
  return (
    <h1 style={{ color: "steelblue", fontFamily: "sans-serif" }}>
      Hello from inside SomofficeShell
    </h1>
  );
}

function Login({ onLogin }) {
  return (
    <div style={{ color: "steelblue", fontFamily: "sans-serif" }}>
      <h1>Welcome to SomofficeShell</h1>
      <button onClick={onLogin}>Login</button>
    </div>
  );
}

const LoginContext = createContext(false);

export function SomofficeShell() {
  const [isLogged, authenticate] = useState(false);
  const history = useHistory();

  function onLogin() {
    authenticate(true);
  }

  useEffect(() => {
    if (isLogged) {
      history.push("/");
    }
  }, [isLogged]);

  return (
    <>
      <LoginContext.Provider value={isLogged}>
        <AppRoutes onLogin={onLogin} />
      </LoginContext.Provider>
    </>
  );
}

export default SomofficeShell;

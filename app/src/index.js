import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import SomofficeShell, { SomofficeRouter } from "poc-react-plugin";

function App() {
  return (
    <SomofficeRouter>
      <SomofficeShell />
    </SomofficeRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));

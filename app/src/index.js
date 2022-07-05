import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";

import SomofficeShell from "poc-react-plugin";

function App() {
  return (
    <Router>
      <SomofficeShell />
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));

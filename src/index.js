import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import IpProvider from "./store/ip-context";

ReactDOM.render(
  <React.StrictMode>
    <IpProvider>
      <App />
    </IpProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

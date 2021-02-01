import ReactDOM from "react-dom";
import App from "./App";
import React, { Suspense } from "react";
import "./i18n";

ReactDOM.render(
  <Suspense fallback={<div>Wait a moment please(กรุณารอสักครู่... )</div>}>
    <App />
  </Suspense>,
  document.getElementById("root")
);

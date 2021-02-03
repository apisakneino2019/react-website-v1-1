import ReactDOM from "react-dom";
import App from "./App";
import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

import "./i18n";

ReactDOM.render(
  <Suspense fallback={<div>Wait a moment please(กรุณารอสักครู่... )</div>}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Suspense>,

  document.getElementById("root")
);

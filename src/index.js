import ReactDOM from "react-dom";
import App from "./App";
import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

import "./i18n";

ReactDOM.render(
  <BrowserRouter>
    <Suspense fallback={<div>Wait a moment please(กรุณารอสักครู่... )</div>}>
      <App />
    </Suspense>
  </BrowserRouter>,

  document.getElementById("root")
);

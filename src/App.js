import React from "react";

import Navbar from "./components/Navbar";

import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Services from "./components/pages/Services";
import AboutUs from "./components/pages/AboutUs";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";
import Test from "./components/pages/Test";
import Annunciator from "./components/pages/Annunciator";
import Controlpanels from "./components/pages/Controlpanels";
import Devices from "./components/pages/Devices";
import Heatdetectors from "./components/pages/Heatdetectors";
import Manualpullstation from "./components/pages/Manualpullstation";
import Firealarmmodules from "./components/pages/Firealarmmodules";
import Productstest from "./components/pages/Productstest";
import ProductsFrist from "./components/pages/ProductsFrist";
import ProductsSecond from "./components/pages/ProductsSecond";
import ContactUs from "./components/ContactUs";

import Scrolltop from "./Scrolltop";

function App() {
  return (
    <>
      {" "}
      <React.Fragment>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />

            <Route path="/services" component={Services} />
            <Route path="/AboutUs" component={AboutUs} />
            <Route path="/products" component={Products} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/test" component={Test} />
            <Route path="/Annunciator" component={Annunciator} />
            <Route path="/Controlpanels" component={Controlpanels} />
            <Route path="/Devices" component={Devices} />
            <Route path="/Heatdetectors" component={Heatdetectors} />
            <Route path="/Manualpullstation" component={Manualpullstation} />
            <Route path="/Firealarmmodules" component={Firealarmmodules} />
            <Route path="/Productstest" component={Productstest} />
            <Route path="/ProductsFrist" component={ProductsFrist} />
            <Route path="/ProductsSecond" component={ProductsSecond} />
            <Route path="/ContactUs" component={ContactUs} />
          </Switch>

          <Scrolltop />
        </Router>
      </React.Fragment>
    </>
  );
}

export default App;

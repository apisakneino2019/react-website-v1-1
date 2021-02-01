import React, { useState, useEffect } from "react";

import { useTranslation } from "react-i18next";
import i18next from "i18next";

import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const { t } = useTranslation();

  function handleClick1(lang) {
    i18next.changeLanguage(lang);
  }

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="imglogo">
          {" "}
          <img
            src="/img-v1/Logohome.png"
            alt="LoGo"
            width="150px"
            height="60px"
          />
        </div>

        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}></Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                {t("nav.1")}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                {t("nav.2")}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/AboutUs"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                {t("nav.3")}
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                {t("nav.4")}
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/test" className="nav-links" onClick={closeMobileMenu}>
                {t("nav.5")}
              </Link>
            </li>
            <li className="nav-item">
              <button onClick={() => handleClick1("eng")}> {t("nav.7")}</button>
              <button onClick={() => handleClick1("th")}> {t("nav.6")}</button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

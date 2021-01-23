import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
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
            src="/img-v1/Logo AllWeb.png"
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
                หน้าแรก
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                สินค้าและบริการ
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/AboutUs"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                ติดต่อเรา
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                อุปกรณ์ทั้งหมด
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/test" className="nav-links" onClick={closeMobileMenu}>
                แนะนำและข้อมูลอุปกรณ์
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                EN/TH
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

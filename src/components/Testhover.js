import React from "react";
import "./testhover.css";
export default function Testhover() {
  return (
    <div>
      <div className="container">
        <div className="card">
          <img
            src="https://i.loli.net/2019/10/18/buDT4YS6zUMfHst.jpg"
            alt="Sora"
            className="card-img-top"
          />
          <div className="card-body">
            <h5 className="card-title">Sora</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a href="#" className="btn">
              More
            </a>
          </div>
        </div>
        <div className="card">
          <img
            src="https://i.loli.net/2019/10/18/Ujf6n75o8TtIsWX.jpg"
            alt="Umi"
            className="card-img-top"
          />
          <div className="card-body">
            <h5 className="card-title">Umi</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a href="#" className="btn">
              More
            </a>
          </div>
        </div>
        <div className="card">
          <img
            src="https://i.loli.net/2019/10/18/uXF1Kx7lzELB6wf.jpg"
            alt="Mori"
            className="card-img-top"
          />
          <div className="card-body">
            <h5 className="card-title">Mori</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a href="#" className="btn">
              More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

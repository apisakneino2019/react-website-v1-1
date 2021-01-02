import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>2021 Fire Alarms Products Catalog!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="/img-960px/an1.png" 
              text="Fire Alarm Control Panels"
              label="เรียนรู้เพิ่มเติม"
              path="/test"
            />
             <CardItem
              src="/img-960px/an1.png"
              text="Fire Alarm Annunciators"
              label="เรียนรู้เพิ่มเติม"
              path="/test"
            />
            <CardItem
              src="/img-960px/dev1.png"
              text="Notification Devices"
              label="เรียนรู้เพิ่มเติม"
              path="/test"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="/img-960px/an1.png"
              text="Heat & Smoke Detectors"
              label="เรียนรู้เพิ่มเติม"
              path="/test"
            />
            <CardItem
              src="/img-960px/heat1.png"
              text="Fire Alarm Manual Stations"
              label="เรียนรู้เพิ่มเติม"
              path="/test"
            />
            <CardItem
              src="/img-960px/panels1.png"
              text="Fire Alarm Modules"
              label="เรียนรู้เพิ่มเติม"
              path="/test"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

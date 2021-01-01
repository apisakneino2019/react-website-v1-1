import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="/img-960px/an1.png"
              text="Explore the hidden waterfall deep inside Jungle"
              label="เรียนรู้เพิ่มเติม"
              path="/test"
            />
            <CardItem
              src="/img-960px/dev1.png"
              text="Travel through the Islands of Bali "
              label="เรียนรู้เพิ่มเติม"
              path="/test"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="/img-960px/an1.png"
              text="Set Sail in the Atlantic Ocean visiting Uncharted "
              label="เรียนรู้เพิ่มเติม"
              path="/test"
            />
            <CardItem
              src="/img-960px/heat1.png"
              text="Experience Football on Top of the Himilayan Mountains"
              label="เรียนรู้เพิ่มเติม"
              path="/test"
            />
            <CardItem
              src="/img-960px/panels1.png"
              text="Fire Alarm Control Panels"
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

import React from "react";
import CardItem from "./CardItem";
import "../../assets/pages/Cards.css";
import crossmobile from "../../images/mobileprogramming.jpg";
import cloudsecurity from "../../images/cloudsecurity.jpg";
import computersociety from "../../images/computersociety.jpg";

function Cards() {
  return (
    <div className="cards">
      <h2>About The Recommendation</h2>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={crossmobile}
              text="Cross Platform Programming"
              path="/information"
            />
            <CardItem
              src={cloudsecurity}
              text="3D Game Design and Development"
              path="/information"
            />
            <CardItem
              src={computersociety}
              text="Cybersecurity: Firewall Configuration and Management"
              path="/information"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

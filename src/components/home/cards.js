import React from "react";
import CardItem from "./CardItem";
import "../../assets/pages/Cards.css";
import crossmobile from "../../images/mobile1.jpg";
import tridi from "../../images/3d2.jpeg";
import firewall from "../../images/firewall1.png";

function Cards() {
  return (
    <div className="cards">
      <h2>About The Recommendation</h2>
      <div className="cards__container">
        <ul className="cards__items">
          <CardItem
            src={crossmobile}
            text="Cross Platform Programming"
            path="/detailmobile"
          />
          <CardItem
            src={tridi}
            text="3D Game Design and Development"
            path="/detailtridi"
          />
          <CardItem
            src={firewall}
            text="Cybersecurity: Firewall Configuration and Management"
            path="/detailfirewall"
          />
        </ul>
      </div>
    </div>
  );
}

export default Cards;

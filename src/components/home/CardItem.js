import React from "react";
import { Link } from "react-router-dom";

function CardItem(props) {
  return (
    <>
      <Link className="cards__item" to={props.path}>
        <div class="card-item-img">
          <img alt="Travel" src={props.src} />
        </div>

        <div className="cards__item__info">
          <h5 className="cards__item__text">{props.text}</h5>
        </div>
      </Link>
    </>
  );
}

export default CardItem;

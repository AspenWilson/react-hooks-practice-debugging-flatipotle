import React, { useState } from "react";
import Side from "./Side";
import burritoImg from "../images/burrito-bowl.jpg";

function Order({proteinChoice, toppingsChoice, fillingsChoice, sidesChoice}) {
  const [showSides, setShowSides] = useState(false);

  function handleClick() {
    setShowSides((showSides) => !showSides);
  }

  return (
    <div className="ui centered raised card"> In-Progress Order
      <div className="image">
        <img src={burritoImg} alt="burrito bowl" />
      </div>
      <div className="content">
        <b>Protein:</b>
        <br />
        {proteinChoice.length > 0 ? proteinChoice.join(', ') : 'No Protein Selected'}
        <br />
        <b>Fillings:</b>
        <br />
        {fillingsChoice.length > 0 ? fillingsChoice.join(', ') : 'No Fillings Selected'}
        <br />
        <b>Toppings:</b>
        <br />
        {toppingsChoice.length > 0 ? toppingsChoice.join(', ') : 'No Toppings Selected'}
        <br />
      </div>
      <div className="extra content">
        {sidesChoice.length > 0 ? (
          <button className="ui button small" onClick={handleClick}>
            View Sides
          </button>
        ) : (
          <p>No sides</p>
        )}
        {showSides ? <Side sidesChoice={sidesChoice} /> : null}
      </div>
    </div>
  );
}

export default Order;

import React from 'react'
import burritoImg from "../images/burrito-bowl.jpg";

function OrderSummary({protein, topping, filling, sides}) {

    return (
        <div className="ui centered raised card" > Completed Order
            <div className="image">
                <img src={burritoImg} alt="burrito bowl" />
            </div>
            <div className="content">
                <b>Protein:</b>
                <br />
                  {protein.length > 0 ? protein : 'No Protein Selected'}
                <br />
                <b>Fillings:</b>
                <br />
                  {filling.length > 0 ? filling : 'No Filling Selected'}
                <br />
                <b>Toppings:</b>
                <br />
                  {topping.length > 0 ? topping : 'No Topping Selected'}
                <br />
                <b>Sides:</b>
                <br />
                    {sides.length > 0 ? sides : 'No Sides Selected'}
            </div>
        </div>
)}

  

export default OrderSummary
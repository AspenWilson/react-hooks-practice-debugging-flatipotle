import React, { useState } from "react";
import ProteinForm from "./ProteinForm";
import FillingForm from "./FillingForm";
import ToppingForm from "./ToppingForm";
import SideForm from "./SideForm";
import blackBeans from "../images/fillings/black-beans.png";
import brownRice from "../images/fillings/brown-rice.png";
import fajitaVeg from "../images/fillings/fajita-veggies.png";
import pintoBeans from "../images/fillings/pinto-beans.png";
import whiteRice from "../images/fillings/white-rice.png";
import chipsGuac from "../images/sides/chips-guac.png";
import chipsQueso from "../images/sides/chips-queso.png";
import chipssalsa from "../images/sides/chips-salsa.png";
import chips from "../images/sides/chips.png";
import drink from "../images/sides/drink.png";
import taco from "../images/sides/taco.png";
import tortilla from "../images/sides/tortilla.png";
import cheese from "../images/toppings/cheese.png";
import cornSalsa from "../images/toppings/corn-salsa.png";
import guac from "../images/toppings/guac.png";
import hot from "../images/toppings/hot.png";
import lettuce from "../images/toppings/lettuce.png";
import medium from "../images/toppings/medium.png";
import mild from "../images/toppings/mild.png";
import sourCream from "../images/toppings/sour-cream.png";
import barbacoa from "../images/protein/barbacoa.png";
import carnitas from "../images/protein/steak.png";
import chicken from "../images/protein/chicken.png";
import sofritas from "../images/protein/sofritas.png";
import steak from "../images/protein/steak.png";
//END OF IMPORTS

function Form({proteinChoice, setProteinChoice, toppingsChoice, setToppingsChoice, fillingsChoice, setFillingsChoice, sidesChoice, setSidesChoice, handleSubmit, isChecked, setisChecked, formSubmitted, setFormSubmitted}) {

  
  const [fillings, SetFillings] = useState ([
    {id: 'black-beans',name: 'Black Beans', img: blackBeans},
    {id: 'brown-rice', name: 'Brown Rice', img: brownRice},
    {id: 'veg',name: 'Fajita Veggies', img: fajitaVeg},
    {id: 'pinto-beans', name: 'Pinto Beans', img: pintoBeans},
    {id: 'white-rice', name: 'White Rice', img: whiteRice}
  ])

  const [sides, setSides] = useState ([
    {id: 'chips-guac', name: 'Chips & Gauc', img: chipsGuac},
    {id: 'chips-queso', name: 'Chips & Queso', img: chipsQueso},
    {id: 'chips-salsa', name: 'Chips & Salsa', img: chipssalsa},
    {id: 'chips', name: 'Chips', img: chips},
    {id: 'drink', name: 'Drink', img: drink},
    {id: 'taco', name: 'Taco', img: taco},
    {id: 'tortilla', name: 'Tortilla', img: tortilla}
  ])

  const [toppings, setToppings] = useState([
    {id: 'mild', name: 'Mild Hot Sauce', img: mild},
    {id: 'medium', name: 'Medium Hot Sauce', img: medium},
    {id: 'hot', name: 'HOT Hot Sauce', img: hot},
    {id: 'corn', name: 'Corn Salsa', img: cornSalsa},
    {id: 'sour cream', name: 'Sour Cream', img: sourCream},
    {id: 'lettuce', name: 'Lettuce', img: lettuce},
    {id: 'guac', name: 'Guac', img: guac},
    {id: 'cheese', name: 'Cheese', img: cheese}
  ])


  const [proteins, setProtein] = useState([
    {id: 'barbacoa', name: 'Barbacoa', img: barbacoa},
    {id: 'carnitas', name: 'Carnitas', img: carnitas},
    {id: 'chicken', name: 'Chicken', img: chicken},
    {id: 'sofritas', name: 'Sofritas', img: sofritas},
    {id: 'steak', name: 'Steak', img: steak}
  ])

  function submitForm () {
    setFormSubmitted(true)
  }

  return (
    <div className="ui raised container segment">
      <h1 className="ui block header">Order Form</h1>
      <form className="ui form" id="order-form" 
      onSubmit={(e) => {
        handleSubmit(e)
        submitForm(e)
      }}
      >
        <ProteinForm
        proteins={proteins}
        proteinChoice={proteinChoice}
        setProteinChoice={setProteinChoice}
        isChecked={isChecked}
        setisChecked={setisChecked}
        />

        <FillingForm
          fillings={fillings}
          fillingsChoice={fillingsChoice}
          setFillingsChoice={setFillingsChoice}
          isChecked={isChecked}
          setisChecked={setisChecked}
        />

        <ToppingForm
         toppings={toppings}
         toppingsChoice={toppingsChoice} 
         setToppingsChoice={setToppingsChoice}
         isChecked={isChecked}
         setisChecked={setisChecked}
        />

        <SideForm 
        sides={sides}
        sidesChoice={sidesChoice}
        setSidesChoice={setSidesChoice}
        isChecked={isChecked}
        setisChecked={setisChecked}
        />

        <br />

        <button className="ui blue big button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;

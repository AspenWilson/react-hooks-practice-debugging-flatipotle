import React, {useState} from "react";

function ToppingForm({toppings, toppingsChoice, setToppingsChoice, isChecked, setisChecked}) {


  const handleCheckBoxChange = (e) => {
   const {value, checked} = e.target;
   setisChecked ({...isChecked, [value]: checked})
   if (checked) {
     setToppingsChoice([...toppingsChoice, value])
   } else {
     setToppingsChoice(toppingsChoice.filter((topping) => topping !== value))
   }
  }

  const allToppings = toppings.map((topping) => {
    return (
      <div className="field" key={topping.id}>
      <div className="ui checkbox">
        <input
          id={topping.id}
          type="checkbox"
          value={topping.name}
          name="topping"
          checked={isChecked[topping.id]}
          onChange={handleCheckBoxChange}
        />
        <img src={topping.img} height="100px" width="100px" alt={topping.id} />
        <label htmlFor={topping.id}>{topping.name}</label>
      </div>
    </div>
  )})


  return (
    <>
      <h1>
        <label htmlFor="toppings">Toppings</label>
      </h1>
      <div className="inline fields ui centered grid">
        {allToppings}
      </div>
    </>
  );
}

export default ToppingForm;

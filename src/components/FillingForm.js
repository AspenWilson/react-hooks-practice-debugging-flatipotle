import React from "react";

function FillingForm({fillings, fillingsChoice, setFillingsChoice, isChecked, setisChecked}) {


  const handleCheckBoxChange = (e) => {
   const {value, checked} = e.target;
   setisChecked ({...isChecked, [value]: checked})
   if (checked) {
     setFillingsChoice([...fillingsChoice, value])
   } else {
     setFillingsChoice(fillingsChoice.filter((filling) => filling !== value))
   }
  }

  const fillingsOptions = fillings.map((filling) => {
    return (
    <div className="field" key={filling.id}>
      <div className="ui checkbox">
        <input
          id={filling.id}
          type="checkbox"
          value={filling.name}
          name="fillings"
          checked={isChecked[filling.id]}
          onChange={handleCheckBoxChange}
        />
        <img
          src={filling.img}
          height="100px"
          width="100px"
          alt={filling.name}
        />
        <label htmlFor={filling.id}>{filling.name}</label>
      </div>
    </div>
    )})



  return (
    <>
      <h1>
        <label htmlFor="fillings">Fillings</label>
      </h1>
      <div className="inline fields ui centered grid">
        {fillingsOptions}

      </div> 
    </>
  );
}

export default FillingForm;

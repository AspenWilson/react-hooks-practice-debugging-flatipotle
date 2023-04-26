import React from "react";


function SideForm({sides, sidesChoice, setSidesChoice, isChecked, setisChecked}) {

  const handleCheckBoxChange = (e) => {
   const {value, checked} = e.target;
   setisChecked ({...isChecked, [value]: checked})
   if (checked) {
     setSidesChoice([...sidesChoice, value])
   } else {
     setSidesChoice(sidesChoice.filter((side) => side !== value))
   }
  }

  const allSides = sides.map((side) => {
    return (
      <div className="field" key={side.id}>
      <div className="ui checkbox">
        <input
          id={side.id}
          type="checkbox"
          value={side.name}
          name="side"
          checked={isChecked[side.id]}
          onChange={handleCheckBoxChange}
        />
        <img src={side.img} height="100px" width="100px" alt={side.id} />
        <label htmlFor={side.id}>{side.name}</label>
      </div>
    </div>
  )})

  return (
    <>
      <h1>
        <label htmlFor="sides">Sides</label>
      </h1>
      <div className="inline fields ui centered grid">
        {allSides}
      </div>
    </>
  );
}

export default SideForm

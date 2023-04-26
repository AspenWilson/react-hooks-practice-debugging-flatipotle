import React from "react";

function ProteinForm({proteins, proteinChoice, setProteinChoice, isChecked, setisChecked}) {


 const handleCheckBoxChange = (e) => {
  const {value, checked} = e.target;
  setisChecked ({...isChecked, [value]: checked})
  if (checked) {
    setProteinChoice([...proteinChoice, value])
  } else {
    setProteinChoice(proteinChoice.filter((protein) => protein !== value))
  }
 }

  const allProtein = proteins.map((protein) => {
    return (
      <div className="field" key={protein.id}>
      <div className="ui checkbox">
        <input
          id={protein.id}
          type="checkbox"
          value={protein.name}
          name="protein"
          checked={isChecked[protein.id]}
          onChange={handleCheckBoxChange}
        />
        <img src={protein.img} height="100px" width="100px" alt={protein.id} />
        <label htmlFor={protein.id}>{protein.name}</label>
      </div>
    </div>
  )})


  return (
    <>
      <h1>
        <label htmlFor="protein">Protein</label>
      </h1>
      <div className="inline fields ui centered grid">
        {allProtein}
      </div>
    </>
  );
}

export default ProteinForm;

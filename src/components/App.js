import React, { useState, useEffect } from "react";
import Form from "./Form";
import Order from "./Order";
import logo from "../images/logo.png";
import OrderSummary from "./OrderSummary";
import "./App.css";

function App() {
  const [orders, setOrders] = useState([])
  const [proteinChoice, setProteinChoice] = useState([])
  const [fillingsChoice, setFillingsChoice] = useState([])
  const [toppingsChoice, setToppingsChoice] = useState([])
  const [sidesChoice, setSidesChoice] = useState([])
  const [isChecked, setisChecked] = useState({})
  const [formSubmitted, setFormSubmitted] = useState(false)

  // const displayOrders = orders.map((order, idx) => {
  //   <Order key={idx} {...order} />;
  // });

  function handleSubmit (e) {
    e.preventDefault()
    const newOrder = {
      protein: proteinChoice.join(', '),
      filling: fillingsChoice.join(', '), 
      topping: toppingsChoice.join(', '), 
      sides: sidesChoice.join(', ')
  }
    setOrders([...orders, newOrder])
    setFillingsChoice([])
    setProteinChoice([])
    setToppingsChoice([])
    setSidesChoice([])
  }

  useEffect(() => {
    if(formSubmitted) {
      setisChecked({})
      setFormSubmitted(false)
    }
  })

  const allOrders = orders.map((order, idx) => {
    return <OrderSummary key={idx} protein={order.protein} filling={order.filling} topping={order.topping} sides={order.sides}/> })

// console.log(proteinChoice,fillingsChoice,toppingsChoice,sidesChoice)
// console.log(orders)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Form 
        setFillingsChoice= {setFillingsChoice}
        setToppingsChoice={setToppingsChoice}
        setProteinChoice={setProteinChoice}
        setSidesChoice={setSidesChoice}
        proteinChoice={proteinChoice}
        toppingsChoice={toppingsChoice}
        sidesChoice={sidesChoice}
        fillingsChoice={fillingsChoice}
        orders={orders}
        setOrders={setOrders}
        handleSubmit={handleSubmit}
        isChecked={isChecked}
        setisChecked={setisChecked}
        formSubmitted={formSubmitted}
        setFormSubmitted={setFormSubmitted}
                />
      <div className="ui raised container segment">
        <h1 className="ui block header">All Orders</h1>
        <div className="ui three cards">
          <Order 
          proteinChoice={proteinChoice}
          toppingsChoice={toppingsChoice}
          sidesChoice={sidesChoice}
          fillingsChoice={fillingsChoice}
          />
        <div className="ui three cards">
          {allOrders}
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;

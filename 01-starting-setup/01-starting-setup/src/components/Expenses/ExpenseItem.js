import React from "react"
import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate"
import Card from "../UI/Card"
function ExpenseItem(props) {
 console.log("expense item evaluated!")
  return (
    <li>
    <Card className="expense-item">
     <div><ExpenseDate date={props.date}></ExpenseDate></div>
      <div className="expense-item__description ">
        <h2>{props.title}</h2>
        <div className="expense-item__price">₹{props.price} </div>
        {/* <button onClick={clickHandler}>Change Title</button> */}
      </div>
    </Card>
    </li>
  );
}
export default ExpenseItem;

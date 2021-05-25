import React,{useState} from "react"
import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate"
import Card from "../UI/Card"
function ExpenseItem(props) {
 console.log("expense item evaluated!")
  //array distructring
  // const [title,setTitle]=useState(props.title);
  // const clickHandler = () =>
  // {
  //     setTitle("Updated !");
  //     console.log(title);
  // }
  return (
    <Card className="expense-item">
     <div><ExpenseDate date={props.date}></ExpenseDate></div>
      <div className="expense-item__description ">
        <h2>{props.title}</h2>
        <div className="expense-item__price">₹{props.price} </div>
        {/* <button onClick={clickHandler}>Change Title</button> */}
      </div>
    </Card>
  );
}
export default ExpenseItem;

import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [buttonPosition,setButtonPosition]=useState(false);
  const [showCloseButton,setCloseButton]=useState(false);
  const[frmBtnDisplay,setFrmBtnDisplay]=useState(false);
 
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      date: new Date(enteredDate),
      price: enteredAmount,
    };
    props.onSaveExpenseData(expenseData);
    console.log("newform data", expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  const showFormHandler = () => {
    setShowForm(true);
    setButtonPosition(true);
    setCloseButton(true);
    setFrmBtnDisplay(true);
  };

  const clearFormHandler = () =>
  {
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    setShowForm(false);
    setCloseButton(false);
    setButtonPosition(false);
    setFrmBtnDisplay(false);
  }

  return (
    <div>
      <form onSubmit={formSubmitHandler}>
        <div
          className="new-expense__controls"
          style={{ display: showForm ? "flex" : "none" }}
        >
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            ></input>
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={enteredAmount}
              onChange={amountChangeHandler}
            ></input>
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              value={enteredDate}
              onChange={dateChangeHandler}
            ></input>
          </div>
        </div>
        
        <div className="btn-form" style={{display: frmBtnDisplay ? "flex" :"inherit"}}>
        <div className="close-button" style={{ textAlign: buttonPosition ? "right" : "center" , display: showCloseButton ? "block" : "none" }}>
            <button onClick={clearFormHandler}>Close</button>
        </div>
        <div className="new-expense__actions" style={{ textAlign: buttonPosition ? "right" : "center" }}>
          <button type="submit" onClick={showFormHandler}>
            Add Expense
          </button>
        </div>
        </div>
      </form>
    </div>
  );
};
export default ExpenseForm;

import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = (props) => {
  const expenses = props;
  console.log("filtered propds from expenses",expenses);
  const lng=expenses.expensesfiltered.length;
  console.log("here is the list of expense",lng)
  if (expenses.expensesfiltered.length === 0) {
    return <p className="expenses-list__fallback"> No Expense Found . </p>;
  }
  return (
    <ul className="expenses-list">
      {expenses.expensesfiltered.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          date={expense.date}
          price={expense.price}
        />
      ))}
    </ul>
  );
}
export default ExpenseList;

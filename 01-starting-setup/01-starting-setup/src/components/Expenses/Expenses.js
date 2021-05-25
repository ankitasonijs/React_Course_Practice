import React, { useState } from "react";
// import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";

function Expenses(props) {
  const expenses = props.expenses;
  const [filteredYear, setFilteredYear] = useState("2021");

  const yearChangeHandler = (selectedyear) => {
    // console.log(selectedyear);
    setFilteredYear(selectedyear);
  };
  console.log(filteredYear);

  const filteredExpense = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

 
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onYearChange={yearChangeHandler}
        />
        {/* //mysolution for filter */}
        {/* {expenses.filter(expense => expense.date.getFullYear() == filteredYear)
          .map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            date={expense.date}
            price={expense.price}
          />
        ))} */}

        <ExpenseList expensesfiltered={filteredExpense} />

      </Card>
    </div>
  );
}
export default Expenses;

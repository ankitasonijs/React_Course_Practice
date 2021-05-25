import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";

function Expenses(props) {
  const expenses = props.expenses;
  const [filteredYear, setFilteredYear] = useState("2020");

  const yearChangeHandler = (selectedyear) => {
    // console.log(selectedyear);
    setFilteredYear(selectedyear);
  };
  console.log(filteredYear);
  

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onYearChange={yearChangeHandler}
        />

{expenses.filter(expense => expense.date.getFullYear() == filteredYear)
          .map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            date={expense.date}
            price={expense.price}
          />
        ))}

        {/* {expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            date={expense.date}
            price={expense.price}
          />
        ))} */}



        {/* <ExpenseItem
          title={expenses[0].title}
          date={expenses[0].date}
          price={expenses[0].price}
        ></ExpenseItem>
        <ExpenseItem
          title={expenses[1].title}
          date={expenses[1].date}
          price={expenses[1].price}
        ></ExpenseItem>
        <ExpenseItem
          title={expenses[2].title}
          date={expenses[2].date}
          price={expenses[2].price}
        ></ExpenseItem>
        <ExpenseItem
          title={expenses[3].title}
          date={expenses[3].date}
          price={expenses[3].price}
        ></ExpenseItem> */}
      </Card>
    </div>
  );
}
export default Expenses;

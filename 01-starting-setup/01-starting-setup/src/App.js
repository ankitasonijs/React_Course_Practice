// import ExpenseItem from "./components/ExpenseItem";

import React,{useState} from "react" ;
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense"

const Dummyexpenses = [
  {
    id: 1,
    title: "Car Insurance",
    date: new Date(2020, 2, 2),
    price: "290.4",
  },
  {
    id: 2,
    title: "Grocery purchased",
    date: new Date(2021, 2, 12),
    price: "2000",
  },
  {
    id: 3,
    title: "Cycle Repaired",
    date: new Date(2021, 5, 2),
    price: "100",
  },
  {
    id: 4,
    title: "Course  Purchased",
    date: new Date(2021, 7, 27),
    price: "385",
  },
];
function App() {


  const [expenses,setNewExpense]=useState(Dummyexpenses);
  const addExpenseHandler = (expense) =>
  {
      console.log(expense);
      setNewExpense((prevExpenses)=>{
              return ([expense,...prevExpenses]);
      });
      
  };
  console.log("added expense" ,expenses);

  return (

  
    <div>
      <NewExpense onAddExpense={addExpenseHandler} ></NewExpense>
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = ({ expenses }) => {
  const [inputYear, setInputYear] = useState("2020");
  const dropDownChangeHandler = (selectedYear) => {
    setInputYear(selectedYear);
  };
  const filteredYear = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === inputYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={inputYear}
          onDropDownChange={dropDownChangeHandler}
        />
        <ExpensesChart expenses={filteredYear} />
        <ExpensesList item={filteredYear} />
      </Card>
    </div>
  );
};

export default Expenses;

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random(),
    };
    props.onAddExpense(expenseData);
    setIsButton(false);
  };

  const [isButton, setIsButton] = useState(false);

  const onClickHandler = () => {
    setIsButton(true);
  };

  const cancelHandler = () => {
    setIsButton(false);
  };

  return (
    <div className="new-expense">
      {isButton === false ? (
        <button type="button" onClick={onClickHandler}>
          Add New expense
        </button>
      ) : (
        <ExpenseForm
          onSaveExpenseDate={saveExpenseDataHandler}
          onCancel={cancelHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;

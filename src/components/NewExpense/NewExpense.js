import React, {useState} from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        // Lifting the data up to the App.js file
        props.onAddExpense(expenseData);
    }

    const [isFormShown, setIsFormShown] = useState(false);

    const handleAddNewExpenseButton = event => {
        event.preventDefault();
        setIsFormShown(true);
    }

    const hideExpenseFormFunction = (booleanResult) => {
        setIsFormShown(booleanResult);
    }

    if (isFormShown === false) {
        return (
            <div className="new-expense">
                <form onSubmit={handleAddNewExpenseButton}>
                    <button type="submit">Add New Expense</button>
                </form>
            </div>
        );
    }

    return (
        <div className="new-expense">
            <ExpenseForm hideExpenseForm={hideExpenseFormFunction} onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    );
}

export default NewExpense;
import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    // Individual useState declaration is used more often in projects.
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate]= useState('');

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

    const titleChangeHandler = event => {
        setEnteredTitle(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // });

        // This one is a safer way, react guaratees to use it.
        // You don't rely on the value on the previous state in this
        // method.
        // setUserInput(prevState => {
        //     return {...prevState, enteredTitle: event.target.value};
        // });

        console.log(event.target.value);
    }

    const amountChangeHandler = event => {
        setEnteredAmount(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // });

        // This one is a safer way, react guaratees to use it.
        // You don't rely on the value on the previous state in this
        // method.
        // setUserInput(prevState => {
        //     return {...prevState, enteredAmount: event.target.value};
        // });

        console.log(event.target.value);
    }

    const dateChangeHandler = event => {
        setEnteredDate(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // });

        // This one is a safer way, react guaratees to use it.
        // You don't rely on the value on the previous state in this
        // method.
        // setUserInput(prevState => {
        //     return {...prevState, enteredDate: event.target.value};
        // });

        console.log(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            // This converts enteredAmount to number
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }

        // This function is passed from "NewExpense.js" to pass expenseData
        // To the parent component
        props.onSaveExpenseData(expenseData);
        props.hideExpenseForm(false);

        // This section sets the changes back to
        // their original state, then we can use
        // enteredTitle, enteredAmount, enteredDate
        // back in inputs' value section such as
        // <input value={enteredTitle}></input>
        // This is called 2-way binding
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    const cancelButtonHandler = () => {
        props.hideExpenseForm(false);
    }

    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler} />
                </div>
                <div className="new-expense__actions">
                    <button type="reset" onClick={cancelButtonHandler}>Cancel</button>
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    );
}

export default ExpenseForm;
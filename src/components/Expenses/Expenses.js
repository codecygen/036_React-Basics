// You never need to import React module but in old
// project they used to import.
import React, { useState } from 'react';
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020');

    const onFilterDataHandler = (selectedFilterData) => {
        console.log('This is from Expenses.js');
        console.log(selectedFilterData);

        setFilteredYear(selectedFilterData);
    }

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    console.log(filteredExpenses);

    return(
        <Card className="expenses">
            {/* Expenses Filter is a controlled component, the selected value
            and handling fundtion is both controlled in the parent component "Expense.js"
            rather than "ExpenseFilter.js" 
            If there was no controlled stuff then ExpenseFilter would be an uncontrolled
            component. */}
            <ExpensesFilter selected={filteredYear} onFilterData={onFilterDataHandler} />
            {filteredExpenses.length === 0 ? <p>No Expenses Found!</p> : 
                filteredExpenses.map(expense => 
                    <ExpenseItem 
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                )
            }
        </Card>
    );
}

export default Expenses;
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

    return(
        <Card className="expenses">
            {/* Expenses Filter is a controlled component, the selected value
            and handling fundtion is both controlled in the parent component "Expense.js"
            rather than "ExpenseFilter.js" 
            If there was no controlled stuff then ExpenseFilter would be an uncontrolled
            component. */}
            <ExpensesFilter selected={filteredYear} onFilterData={onFilterDataHandler} />
            <ExpenseItem 
                title={props.expenses[0].title} 
                amount={props.expenses[0].amount} 
                date={props.expenses[0].date} 
            />
            <ExpenseItem 
                title={props.expenses[1].title} 
                amount={props.expenses[1].amount} 
                date={props.expenses[1].date} 
            />
            <ExpenseItem 
                title={props.expenses[2].title} 
                amount={props.expenses[2].amount} 
                date={props.expenses[2].date} 
            />
            <ExpenseItem 
                title={props.expenses[3].title} 
                amount={props.expenses[3].amount} 
                date={props.expenses[3].date} 
            />
        </Card>
    );
}

export default Expenses;
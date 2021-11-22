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

    {/* Alternative 3 */}

    let expensesContent = <p>No Expenses Found!</p>;

    if(filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map(expense => (
            <ExpenseItem 
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
            )
        );
    }

    {/* Alternative 3 Finishes */}

    return(
        <Card className="expenses">


            {/* Expenses Filter is a controlled component, the selected value
            and handling fundtion is both controlled in the parent component "Expense.js"
            rather than "ExpenseFilter.js" 
            If there was no controlled stuff then ExpenseFilter would be an uncontrolled
            component. */}
            <ExpensesFilter selected={filteredYear} onFilterData={onFilterDataHandler} />

            {/* Alternative 1 */}
            
            {/* {filteredExpenses.length === 0 ? <p>No Expenses Found!</p> : 
                filteredExpenses.map(expense => (
                    <ExpenseItem 
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                    
                    )
                )
            } */}

            {/* Alternative 2 */}


            {/* {filteredExpenses.length === 0 && <p>No Expenses Found!</p>}
            {filteredExpenses.length > 0 && 
                filteredExpenses.map(expense => (
                    <ExpenseItem 
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                    )
                )
            } */}

            {/* Alternative 3 */}

            {expensesContent}
        </Card>
    );
}

export default Expenses;
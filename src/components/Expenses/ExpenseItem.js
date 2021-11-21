// You never need to import React module but in old
// project they used to import.
// import React from 'react';
import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

// This component is a stateless component. It is out there to just
// show data.
// If there was a state (useState), then it will be a stateful component

const ExpenseItem = (props) => {

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">{`$${props.amount}`}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;
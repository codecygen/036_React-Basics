// You never need to import React module but in old
// project they used to import.
// import React from 'react';
import './Card.css';

const Card = (props) => {
    const classes = `card ${props.className}`;

    // Our aim is to use the Card component as a wrapper
    // on ExpenseItem.js and Expenses.js.
    // props.children is a reserved name.
    // Value is the content between opening and closing components.
    // It is important to show all the wrapped elements.
    // props.children is called composition.
    return <div className={classes}>{props.children}</div>;
}

// This is a reusable wrapper component
// It is used on both ExpenseItem.js and Expenses.js
// This is to prevent duplicate things such as same CSS values in every container.
export default Card;
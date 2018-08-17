import React from 'react';
import './ExpenseCard.css';

const ExpenseCard = ({ expense, username, deleteExpense }) => {
  return (
    <div className="box">
      <div className="block">
        <div className="columns">
          <div className="column">
            <div 
              className="button is-pulled-left is-danger" 
              onClick={deleteExpense.bind(this, username, expense.time)} 
            >
              DEL
            </div>
            <div 
              className="button is-pulled-left is-primary"
            >
              EDIT
            </div>
            <h1 className="is-pulled-left">{expense.title}</h1>
          </div>
          <div className="column">
            {expense.categorysel.map((category, index) => {
              return (
                <div className="tag is-large is-warning" key={index}>
                  {category.name}
                </div>
              );
            })}
          </div>
          <div className="column">
            <p className="is-pulled-right">{expense.amount}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExpenseCard;
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getExpenses } from '../../actions/expenseActions';
import { ExpenseForm } from './ExpenseForm';
import { Navbar } from '../Navbar';
import './Home.css';

class Home extends Component {
  componentDidMount() {
    this.props.getExpenses();
  }

  render() {
    const { expenses, categoryList } = this.props.expenses;

    return (
      <div className="container is-two-quarters">
        <Navbar />
        <div className="box">
          <div className="block">
            <div className="columns">
              <div className="column">
                <h1 className="title is-6">Expense Title</h1>
              </div>
              <div className="column">
                <h1 className="title is-6"> Tags </h1>
              </div>
              <div className="column">
                <p className="title is-6 is-pulled-right">Amount</p>
              </div>
            </div>
          </div>
        </div>
        {expenses ? expenses.map((expense, key) => {
          return (
            <div className="box" key={key}>
              <div className="block">
                <div className="columns">
                  <div className="column">
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
        }) : null}
        <ExpenseForm />
      </div>
    );
  }
}


const mapStateToProps = state => ({
  expenses: state.expenses
});

const connectedHome = connect(mapStateToProps, { getExpenses })(Home);
export { connectedHome as Home };
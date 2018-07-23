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
            <h1 className="is-pulled-left title is-6">Expense Title</h1>
            <p className="is-pulled-right title is-6">Amount</p>
          </div>
        </div>
        {expenses ? expenses.map((expense) => {
          return (
            <div className="box">
              <div className="block">
                <h1 className="is-pulled-left">{expense.title}</h1>
                <p className="is-pulled-right">{expense.amount}</p>
              </div>
              <div className="block">
                <div className="columns">
                  <div className="column">
                    {expense.categorysel.map((category) => {
                      return (
                        <div className="tag is-medium" style={{ background: category.color, color: 'red' }}>
                          {category.name}
                        </div>
                      );
                    })}
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
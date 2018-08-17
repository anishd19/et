import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getExpenses, deleteExpense } from '../../actions/expenseActions';
import { ExpenseForm } from './ExpenseForm';
import { Navbar } from '../Navbar';
import ExpenseCard from './ExpenseCard';
import './Home.css';

class Home extends Component {
  componentDidMount() {
    this.props.getExpenses();
  }

  render() {
    const { expenses } = this.props.expenses;

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
            <ExpenseCard 
              expense={expense} 
              key={key}
              username={this.props.auth.user.username}
              deleteExpense={this.props.deleteExpense} 
            />
          )
        }) : null}
        <ExpenseForm />
      </div>
    );
  }
}


const mapStateToProps = state => ({
  expenses: state.expenses,
  auth: state.auth
});

const connectedHome = connect(mapStateToProps, { getExpenses, deleteExpense })(Home);
export { connectedHome as Home };
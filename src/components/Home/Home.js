import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getExpenses } from '../../actions/expenseActions';
import './Home.css';

class Home extends Component {
  componentDidMount() {
    this.props.getExpenses();
  }

  render() {
    const { expenses, categoryList } = this.props.expenses;

    return (
      <div>
        {expenses.map((expense) => {
          return (
            <div className="box">
              <h1 className="title is-3">{expense.title}</h1>
              <p>{expense.amount}</p>
            </div>
          )
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  expenses: state.expenses,
  categoryList: state.categoryList
});

const connectedHome = connect(mapStateToProps, { getExpenses })(Home);
export { connectedHome as Home };
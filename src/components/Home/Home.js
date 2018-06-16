import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getExpenses } from '../../actions/expenseActions';
import { ExpenseForm } from './ExpenseForm';
import './Home.css';

class Home extends Component {
  componentDidMount() {
    this.props.getExpenses();
  }

  render() {
    const { expenses, categoryList } = this.props.expenses;
    
    return (
      <div className="container is-two-quarters">
        {expenses ? expenses.map((expense) => {
          return (
            <div className="box">
              <div className="block">
                <div className="columns">
                  <div className="column is-three-quarters">
                    <h1 className="title is-6">{expense.title}</h1>              
                  </div>
                  <div className="column is-one-quarters">
                    <p className="is-right">{expense.amount}</p>
                  </div>
              </div>
              </div>
              <div className="block">
                  <div className="columns">
                    <div className="column">
                      {expense.categorysel.map((category) => {
                        return (
                          <div className="tag is-medium" style={{background: category.color, color: 'red'}}>
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
        <ExpenseForm/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  expenses: state.expenses
});

const connectedHome = connect(mapStateToProps, { getExpenses })(Home);
export { connectedHome as Home };
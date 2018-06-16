import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addExpense } from '../../actions/expenseActions';
import './ExpenseForm.css';

class ExpenseForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      amount: '',
      categories: [],
      errors: {}
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.errors) {
      this.setState({ errors: newProps.errors });
    }
  }

  onSubmit(e) {
    const { user } = this.props.auth;

    const newExpense = {
      expenses: [{
        time: Date.now(),
        categorysel: [],
        title: this.state.title,
        amount: this.state.amount
      }],
      username: user.username
    };

    this.props.addExpense(newExpense);
    this.setState({ title: '', amount: '' });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="container" id="expense-form">
        <div className="field is-horizontal">
          <div className="field-body">
            <div className="field">
              <input 
                className="input" 
                type="text" 
                name="title" 
                placeholder="title" 
                value={this.state.title}
                onChange={this.onChange}
              />
            </div>
            <div className="field">
              <input 
                className="input" 
                type="number" 
                name="amount" 
                placeholder="amount" 
                value={this.state.amount}
                onChange={this.onChange}
              />
            </div>
            <div className="field">
              <p className="control">
                <button className="button is-success" onClick={this.onSubmit}>
                  Submit
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

const connectedExpenseForm = connect(mapStateToProps, { addExpense })(ExpenseForm);
export { connectedExpenseForm as ExpenseForm };
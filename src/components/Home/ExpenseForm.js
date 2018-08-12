import React, { Component, Fragment } from 'react';
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
      errors: {},
      showModal: false
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
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
    this.closeModal();
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  openModal() {
    this.setState({
      showModal: true
    })
  }

  closeModal() {
    this.setState({
      showModal: false
    })
  }

  render() {
    const { errors, showModal } = this.state;

    return (
      <Fragment>
        <button className="button is-success is-fullwidth" onClick={this.openModal}>
          Add Expense
        </button>
        <div className={"modal " + (showModal ? "is-active" : null)}>
          <div class="modal-background" onClick={this.closeModal}></div>
          <div className="modal-content">
            <div className="box" id="expense-form">
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
          </div>
          <button className="modal-close is-large" aria-label="close" onClick={this.closeModal}></button>
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

const connectedExpenseForm = connect(mapStateToProps, { addExpense })(ExpenseForm);
export { connectedExpenseForm as ExpenseForm };
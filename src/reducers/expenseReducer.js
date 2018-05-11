import {
  ADD_EXPENSE,
  GET_EXPENSES,
  EXPENSE_LOADING,
  DELETE_EXPENSE
} from '../actions/types';

const initialState = {
  categoryList: [],
  expenses: [],
  loading: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case EXPENSE_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_EXPENSES:
      return {
        ...state,
        expenses: action.payload.expenses,
        categoryList: action.payload.categorylist,
        loading: false
      };
    case DELETE_EXPENSE:
      return {
        ...state,
        expenses: state.expenses.filter(expense => expense.time !== action.payload)
      };
    default:
      return state;
  }
}
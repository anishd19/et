import axios from 'axios';
import { SERVICE_CONSTANT } from '../constants/service-constant';

import {
  ADD_EXPENSE,
  GET_ERRORS,
  CLEAR_ERRORS,
  GET_EXPENSES,
  EXPENSE_LOADING,
  DELETE_EXPENSE
} from './types';

export const getExpenses = () => dispatch => {
  dispatch(setExpenseLoading());
  axios
    .get(SERVICE_CONSTANT.READ_EXPENSES)
    .then(res =>
      dispatch({
        type: GET_EXPENSES,
        payload: res.data
      })
    ).catch(err => 
      dispatch({
        type: GET_EXPENSES,
        payload: {}
      })
    );
}

export const deleteExpense = ({username, time}) => dispatch => {
  axios
    .delete(SERVICE_CONSTANT.DELETE_EXPENSE, {username, time})
    .then(res =>
      dispatch({
        type: DELETE_EXPENSE,
        payload: time
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    )
}

export const setExpenseLoading = () => {
  return {
    type: EXPENSE_LOADING
  };
};
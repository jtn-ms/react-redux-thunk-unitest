import {createActions, handleActions} from 'redux-actions';

const defaultState = {
  counter: 0,
};

const {increment} = createActions({
  INCREMENT: amount => ({amount}),
});

const {decrement} = createActions({
  DECREMENT: amount => ({amount}),
});

export default handleActions({
  [increment]: (state, {payload: amount}) => ({
    ...state, counter: state.counter + amount*1
  }),
  [decrement]: (state, {payload: amount}) => ({
    ...state, counter: state.counter - amount*1
  }),
}, defaultState);

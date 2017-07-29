import * as types from '../actions/ActionTypes';
import { combineReducers } from 'redux';
import color from './color';
import number from './number';

const reducers = combineReducers({
  numberData: number,
  colorData: color,
})

// const initialState = {
//   color: 'black',
//   number: 11,
// }
//
// function counter(state = initialState, action) {
//   switch (action.type) {
//     case types.INCREMENT:
//       return {
//         ...state,
//         number: state.number + 1,
//       }
//     case types.DECREMENT:
//       return {
//         ...state,
//         number: state.number - 1,
//       }
//     case types.SET_COLOR:
//       return {
//         ...state,
//         color: action.color,
//       }
//     default:
//       return state;
//   }
// };

export default reducers;

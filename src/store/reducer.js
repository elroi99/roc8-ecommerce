import {
  SET_DATA,
  ADD_TO_CART,
  INCREASE_QUANTITY_IN_CART,
  DECREASE_QUANTITY_IN_CART,
} from "./constants";

export function rootReducer(state, action) {
  switch (action.type) {
    case SET_DATA:
      return { ...state };
      break;
    case ADD_TO_CART:
      return { counter: state.counter - 1 };
      break;
    case REMOVE_FROM_CART:
      return { ...state };
      break;
    case INCREASE_QUANTITY_IN_CART:
      return {};
      break;
    case DECREASE_QUANTITY_IN_CART:
      return {};
    default:
      return state;
  }
}

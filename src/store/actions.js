import {
  SET_DATA,
  ADD_TO_CART,
  INCREASE_QUANTITY_IN_CART,
  DECREASE_QUANTITY_IN_CART,
  SET_LOADING_STATE,
  SET_ERROR_STATE,
  REMOVE_FROM_CART,
} from "./constants";

export function setDataActionCreator(data) {
  return {
    type: SET_DATA,
    data: data,
  };
}

export function setLoadingActionCreator(isLoading) {
  return {
    type: SET_LOADING_STATE,
    isLoading: isLoading,
  };
}

export function setErrorStateActionCreator(errorObject) {
  return {
    type: SET_ERROR_STATE,
    isError: errorObject,
  };
}
export function addToCartActionCreator(id) {
  return {
    type: ADD_TO_CART,
    id: id,
  };
}

export function removeFromCartActionCreator(id) {
  return {
    type: REMOVE_FROM_CART,
    id: id,
  };
}

export function increaseQuantityInCartActionCreator(id) {
  return {
    type: INCREASE_QUANTITY_IN_CART,
    id: id,
  };
}

export function decreaseQuantityInCartActionCreator(id) {
  return {
    type: DECREASE_QUANTITY_IN_CART,
    id: id,
  };
}

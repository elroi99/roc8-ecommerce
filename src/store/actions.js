import {
  SET_DATA,
  ADD_TO_CART,
  INCREASE_QUANTITY_IN_CART,
  DECREASE_QUANTITY_IN_CART,
} from "./constants";

export function setData(data) {
  return {
    type: SET_DATA,
    data: data,
  };
}

export function addToCart(id) {
  return {
    type: ADD_TO_CART,
    id: id,
  };
}

export function removeFromCart(id) {
  return {
    type: ADD_TO_CART,
    id: id,
  };
}

export function increaseQuantityInCart(id) {
  return {
    type: INCREASE_QUANTITY_IN_CART,
    id: id,
  };
}

export function decreaseQuantityInCart(id) {
  return {
    type: DECREASE_QUANTITY_IN_CART,
    id: id,
  };
}

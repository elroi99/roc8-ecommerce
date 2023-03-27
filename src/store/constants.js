export const SET_DATA = "set-data";
export const ADD_TO_CART = "add-to-cart";
export const INCREASE_QUANTITY_IN_CART = "increase-quantity-in-cart";
export const DECREASE_QUANTITY_IN_CART = "decrease-quantity-in-cart";
export const REMOVE_FROM_CART = "remove-from-cart";
export const SET_LOADING_STATE = "set-loading-state";
export const SET_ERROR_STATE = "set-error-state";

export const initialState = {
  products: [],
  searchQuery: "",
  cartProductsList: [], // [ { id: action.id, qty: 1 } , { id: action.id, qty: 1 }]
  isLoading: false,
  isError: false,
  isOffline: false,
};

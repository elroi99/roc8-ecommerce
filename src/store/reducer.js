import {
  SET_DATA,
  ADD_TO_CART,
  INCREASE_QUANTITY_IN_CART,
  DECREASE_QUANTITY_IN_CART,
  REMOVE_FROM_CART,
} from "./constants";

// pasted here for reference
// export const initialState = {
//     products: [], // array of objects
//     searchQuery: "",
//     cartProductsList: [], // [ { id: action.id, qty: 1 } , { id: action.id, qty: 1 }]
//     isLoading: false,
//     isError: false,
//     isOffline: false,
//   };

export function rootReducer(state, action) {
  switch (action.type) {
    case SET_DATA:
      return { ...state, products: action.data };
    case ADD_TO_CART: {
      const productAlreadyInCart = state.cartProductsList.find(
        (product) => product.id === action.id
      );
      if (productAlreadyInCart) {
        return state;
      } else {
        return {
          ...state,
          cartProductsList: [
            ...state.cartProductsList,
            { id: action.id, qty: 1 },
          ],
        };
      }
    }
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartProductsList: state.cartProductsList.filter(
          (product) => product.id !== action.id
        ),
      };
    case INCREASE_QUANTITY_IN_CART: {
      let cartProductsListCopy = [...state.cartProductsList];
      let matchedProductId = state.cartProductsList.findIndex(
        (product) => product.id === action.id
      );
      cartProductsListCopy[matchedProductId] = {
        id: action.id,
        qty: cartProductsListCopy[matchedProductId].qty + 1,
      };

      return {
        ...state,
        cartProductsList: cartProductsListCopy,
      };
    }
    case DECREASE_QUANTITY_IN_CART: {
      let cartProductsListCopy = [...state.cartProductsList];
      let matchedProductId = state.cartProductsList.findIndex(
        (product) => product.id === action.id
      );
      let reducedQuantity = cartProductsListCopy[matchedProductId].qty - 1;
      // making sure it does not go into  the negatives
      reducedQuantity = reducedQuantity < 0 ? 0 : reducedQuantity;

      cartProductsListCopy[matchedProductId] = {
        id: action.id,
        qty: reducedQuantity,
      };

      return {
        ...state,
        cartProductsList: cartProductsListCopy,
        products:
          reducedQuantity === 0
            ? state.products.filter((product) => {
                return !(product.id === action.id);
              })
            : state.products,
      };
    }

    default:
      return state;
  }
}

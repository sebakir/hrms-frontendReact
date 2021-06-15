import { combineReducers } from "redux";

function cart(state = [], action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      const product = action.product;
      const current = state.find((f) => f.id === product.id);
      if (current === undefined) {
        product.count = action.qty;
        return [...state, product];
      } else {
        return state.map((i) =>
          i.id === product.id ? { ...i, count: i.count + action.qty } : i
        );
      }
    }
    case "UPDATE_IN_CART":
      return state.map((i) =>
        i.id === action.productId ? { ...i, count: action.qty } : i
      );
    case "REMOVE_FROM_CART":
      return state.filter((i) => i.id !== action.productId);
    default:
      return state;
  }
}

export default combineReducers({ cart });

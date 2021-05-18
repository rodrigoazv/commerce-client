import { Reducer } from "redux";
import { CartState, CartTypes } from "./types";

const INITIAL_STATE: CartState = {
  cart: 0,
};

const reducer: Reducer<CartState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartTypes.ADD_CART:
      return { ...state, cart: action.payload + state.cart };
    default:
      return state;
  }
};

export default reducer;

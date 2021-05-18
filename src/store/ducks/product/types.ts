/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/**
 * Action types
 */
export enum CartTypes {
  ADD_CART = "@cart/ADD_CART",
  REMOVE_CART = "@cart/REMOVE_CART",
}

export interface CartState {
  cart: number;
}

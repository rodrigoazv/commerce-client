import { ThunkAction } from "redux-thunk";
import { Action, Dispatch } from "redux";

import { ApplicationState } from "../../index";
import { CartTypes } from "./types";

export type AppThunk = ThunkAction<
  void,
  ApplicationState,
  null,
  Action<string>
>;
export const addCart = () => async (dispatch: Dispatch) => {
  try {
    dispatch({
      type: CartTypes.ADD_CART,
      payload: 1,
    });
  } catch (error) {
    console.log(error);
  }
};

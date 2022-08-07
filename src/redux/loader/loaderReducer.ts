import { Action, handleActions } from "redux-actions";
import { ILoader } from "../../types/Redux";
import { HIDE_LOADER, SHOW_LOADER } from "./loaderTypes";

const initialState: ILoader = {
  isLoading: false,
};

const loaderReducer = handleActions<ILoader, ILoader>(
  {
    [SHOW_LOADER]: (state: ILoader, action: Action<any>) => {
      return {
        isLoading: action.payload,
      };
    },
    [HIDE_LOADER]: (state: ILoader, action: Action<any>) => {
      return {
        isLoading: action.payload,
      };
    },
  },
  initialState
);

export default loaderReducer;

import { Action, handleActions } from "redux-actions";
import { getUserDetails, getUserToken } from "../../../helpers/LoginUserData";
import { IApiState } from "../../../types/Redux";
import { FETCH_USER_ACESS } from "./apiActionTypes";

const initialState: IApiState = {
  userData: getUserDetails(),
  user_token: getUserToken(),
  message: "",
};

const apiReducer = handleActions<IApiState, any>(
  {
    [FETCH_USER_ACESS]: (state: any, action: Action<any>) => {
      const data = action.payload.data;
      const token = data.access_token;
      const newToken = "Bearer " + token;
      return {
        ...state,
        userData: data.user_detail,
        user_token: newToken,
        message: action.payload.meta.message,
      };
    },
  },
  initialState
);

export default apiReducer;

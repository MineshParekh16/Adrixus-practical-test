import { FETCH_USER_ACESS } from "./apiActionTypes";

export const fetchUsers = (res: any) => {
  // console.log(res.data.data.user_detail);
  return {
    type: FETCH_USER_ACESS,
    payload: res.data,
  };
};

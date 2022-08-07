export const IsBrowser = typeof window !== "undefined";
export const setAuthUser = (data: any) => {
  localStorage.setItem("rowData", JSON.stringify(data));
};
export const getParseUser = () => {
  if (IsBrowser) {
    const currentUser = localStorage.getItem("rowData");
    let parseUser = null;
    if (currentUser) {
      parseUser = JSON.parse(currentUser);
    }
    return parseUser;
  }
};
export const defaultUserDetails = () => {
  return {
    id: null,
    uuid: "",
    email: "",
    first_name: "",
    last_name: "",
    mobile: "",
    username: "",
  };
};
export const getUserDetails = () => {
  return getParseUser() ? getParseUser().user_detail : defaultUserDetails();
};
export const getUserToken = () => {
  return getParseUser()
    ? getParseUser().token_type + " " + getParseUser().access_token
    : "";
};
export const removeLoginData = () => {
  localStorage.removeItem("rowData");
};
export const isEmpty = (val: string | null | undefined) => {
  if (val === "" || val === null || val === undefined) {
    return true;
  }
  return false;
};

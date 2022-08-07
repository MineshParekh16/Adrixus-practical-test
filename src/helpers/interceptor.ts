import axios from "axios";
import { IsBrowser } from "./LoginUserData";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  setInterceptors: () => {
    axios.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        const errorResponse = error.response;
        /**
         * API Response status 401 : Unauthorize
         * navigate : redirect to login page
         * event : Generate popup error!
         */
        if (errorResponse.status === 401) {
          // console.log("Your session has been expired!");
          // go to login page
          if (IsBrowser) {
            // Navigate("/");
            // localStorage.removeItem("rowData");
            // window.location.replace("/");
            // alert("Your session has been expired!");
          }
        }
        const err = errorResponse.data || errorResponse.statusText;
        return Promise.reject(err);
      }
    );
  },
};

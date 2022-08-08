import axios from "axios";

export const APIServices = {

  getUserData(url) {
    return axios.get(url);
  },

};

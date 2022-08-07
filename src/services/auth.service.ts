import axios from "axios";

const API_URL = "https://reqres.in/api/register";

class AuthService {

    register(username: string, email: string, password: string) {
        return axios.post(API_URL + "signup", {
        username,
        email,
        password
        });
    }

    getCurrentUser() {
        const userStr = localStorage.getItem("rowData");
        if (userStr) return JSON.parse(userStr);
        return null;
    }
}

export default new AuthService();
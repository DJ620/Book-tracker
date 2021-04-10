import axios from "axios";

export default {
    createUser: function(userData) {
        console.log(userData)
        return axios.post("/api/user/register", userData);
    },

    login: function(userData) {
        return axios.post("/api/user/login", userData);
    }
};
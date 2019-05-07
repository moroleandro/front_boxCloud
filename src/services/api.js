import axios from "axios";

const api = axios.create({
    baseURL: 'https://backend-boxcloud.herokuapp.com',
});

export default api;
import axios from "axios";

const instance = axios.create({
    baseURL: '...' //API (cloud fun) URL
});

export default instance;
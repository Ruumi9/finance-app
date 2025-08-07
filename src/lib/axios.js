import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com', // contoh dummy API,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 10000, // optional
});

export default axiosInstance;
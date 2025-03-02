import axios from "axios";


const BASE_URL=import.meta.env.VITE_BASE_URL;
console.log(BASE_URL);
export const axiosInstance = axios.create({
    baseURL: BASE_URL,
});
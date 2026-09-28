import axios from "axios";

const api = axios.create({
    baseURL: "https://api.adviceslip.com",
    timeout: 10000,
});

export async function getRandomAdvice() {
    const response = await api.get("/advice");
    return response.data.slip;
}

export default api;
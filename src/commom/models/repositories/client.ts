import axios, { AxiosInstance } from "axios";

const client: AxiosInstance = axios.create({
  baseURL: 'http://localhost:5000',
})

export default client;
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.API_URL || 'http:localhost:3000',
  timeout: 5000, // opcional, define o tempo de espera em ms
});

export default axiosInstance;

import axios from 'axios';

// URL base de tu API backend
const API_BASE_URL = 'http://localhost:3000/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

console.log('[FRONTEND][API_CLIENT] 🛠️ Cliente Axios configurado para:', API_BASE_URL);

export default apiClient;
// src/shared/api/client.ts
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000", // Пример адреса API
  timeout: 1000,
});

export default api; // Убедись, что экспорт правильно настроен

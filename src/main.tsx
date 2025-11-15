// src/main.tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";  // Подключаем роутер
import { router } from "./providers/routes";  // Подключаем маршруты
import './index.css';
import './styles/base.css';
import './styles/forms.css';
import './styles/buttons.css';
import './styles/layout.css';


// Инициализация корня приложения
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} /> {/* Используем роутер с маршрутизацией */}
  </StrictMode>
);

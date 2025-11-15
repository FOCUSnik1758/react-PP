// src/App.tsx
import React from "react";
import { RouterProvider } from "react-router-dom";  // Подключаем роутер
import { router } from "./providers/routes";  // Импортируем маршруты
import ErrorBoundary from "./shared/components/ErrorBoundary";  // Импортируем ErrorBoundary для обработки ошибок

const App: React.FC = () => {
  return (
    <ErrorBoundary>  {/* Оборачиваем приложение в ErrorBoundary */}
      <RouterProvider router={router} />  {/* Подключаем маршруты */}
    </ErrorBoundary>
  );
};

export default App;

// src/layout/AuthLayout.tsx
import React from "react";
import { Outlet } from "react-router-dom"; // Для отображения вложенных маршрутов

const AuthLayout: React.FC = () => {
  return (
    <div>
      <Outlet /> {/* Это место для вложенных страниц */}
    </div>
  );
};

export default AuthLayout;  // Обязательно экспортируем компонент

// src/shared/lib/guards.tsx
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../features/auth/model";  // Хук для получения информации о сессии

// Гвард для защищенных страниц (требуют авторизации)
export const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthed } = useAuth();  // Получаем состояние аутентификации
  if (!isAuthed) {
    return <Navigate to="/login" replace />;  // Если не авторизован, перенаправляем на страницу логина
  }
  return <>{children}</>;  // Отображаем дочерние компоненты (страницу)
};

// Гвард для публичных страниц (доступных только для незарегистрированных пользователей)
export const GuestRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthed } = useAuth();  // Получаем состояние аутентификации
  if (isAuthed) {
    return <Navigate to="/account/profile" replace />;  // Если авторизован, перенаправляем на личный кабинет
  }
  return <>{children}</>;  // Отображаем дочерние компоненты (страницу)
};

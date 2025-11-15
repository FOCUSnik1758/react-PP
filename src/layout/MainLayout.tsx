// src/layout/MainLayout.tsx
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "../styles/layout.css";

const MainLayout: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="app-shell">
      <header className="app-header">
        <nav className="app-nav">
          <span
            className="app-nav-text app-nav-text--active"
            onClick={() => navigate("/queues")}
          >
            Онлайн-очереди
          </span>
          <span
            className="app-nav-text"
            onClick={() => navigate("/my-queues")}
          >
            Мои очереди
          </span>
          <span className="app-nav-text">Лист ожидания</span>
          <span className="app-nav-text">Статистика</span>
        </nav>

        <div className="app-user-panel">
          <button className="icon-button" type="button">
            🔔
          </button>

          <div className="app-user-info">
            <span className="app-user-name">Имя Фамилия</span>
            <div className="app-user-avatar">👤</div>

            <div className="app-user-dropdown-menu">
              <div className="app-user-dropdown-item">Личный кабинет</div>
              <div className="app-user-dropdown-item">Настройки</div>
              <div className="app-user-dropdown-item">Выйти</div>
            </div>
          </div>
        </div>
      </header>

      <main className="app-main">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;

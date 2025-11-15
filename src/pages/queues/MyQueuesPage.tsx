// src/pages/queues/MyQueuesPage.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/queues.css";

const MyQueuesPage: React.FC = () => {
  const navigate = useNavigate();

  const myQueues = [
    { id: 1, title: "Название онлайн-очереди", date: "27.01.24" },
    { id: 2, title: "Название онлайн-очереди", date: "27.01.24" },
    { id: 3, title: "Название онлайн-очереди", date: "27.01.24" },
  ];

  return (
    <div className="queues-page">
      <div className="queues-top-bar">
        <button type="button" className="queues-filters-btn">
          Фильтры ▾
        </button>

        <button type="button" className="queues-create-btn">
          Создать онлайн-очередь +
        </button>
      </div>

      <div className="my-queue-list">
        {myQueues.map((q) => (
          <div key={q.id} className="my-queue-card">
            <div className="my-queue-card-header">
              <div className="my-queue-card-title">{q.title}</div>
              <div className="my-queue-card-date">{q.date}</div>
            </div>

            <div className="my-queue-card-footer">
              <button type="button" className="my-queue-card-btn">
                Список заявок
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="my-queues-calendar-wrapper">
        <button
          type="button"
          className="my-queues-calendar-btn"
          onClick={() => navigate("/calendar")}
        >
          Посмотреть в календаре
        </button>
      </div>
    </div>
  );
};

export default MyQueuesPage;

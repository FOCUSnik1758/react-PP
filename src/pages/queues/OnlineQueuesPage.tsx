// src/pages/queues/OnlineQueuesPage.tsx
import React from "react";
import "../../styles/queues.css";

const OnlineQueuesPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedTime, setSelectedTime] = React.useState<string | null>(null);

  const times = ["10:15", "12:00", "16:00"];

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="queues-page">
      {/* Верхняя панель: фильтры + кнопка создать */}
      <div className="queues-top-bar">
        <button type="button" className="queues-filters-btn">
          Фильтры ▾
        </button>

        <button
          type="button"
          className="queues-create-btn"
          onClick={openModal}
        >
          Создать онлайн-очередь +
        </button>
      </div>

      {/* Карточка очереди */}
      <div className="queue-card">
        <div className="queue-card-left">
          <div className="queue-card-avatar">
            <span>👤</span>
          </div>

          <div className="queue-card-info">
            <div className="queue-card-owner">Петров Петр Петрович</div>

            <div className="queue-card-title">
              Название онлайн-очереди
            </div>

            <div className="queue-card-description">"Описание"</div>
          </div>
        </div>

        <div className="queue-card-right">
          <div className="queue-card-date">01.01.25</div>

          <button type="button" className="queue-card-details-btn">
            Подробнее
          </button>
        </div>
      </div>

      {/* Модальное окно */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className="modal-window"
            onClick={(e) => e.stopPropagation()} // чтобы клик внутри не закрывал
          >
            <form className="modal-form">
              <div className="modal-row">
                <label className="modal-label">Выберите дату</label>
                <input
                  type="date"
                  className="modal-input-date"
                />
              </div>

              <div className="modal-row">
                <div className="modal-label">Выберите время</div>
                <div className="modal-time-list">
                  {times.map((t) => (
                    <button
                      key={t}
                      type="button"
                      className={
                        "time-slot-btn" +
                        (selectedTime === t ? " time-slot-btn--active" : "")
                      }
                      onClick={() => setSelectedTime(t)}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="modal-row">
                <label className="modal-label">Укажите приоритет</label>
                <div className="modal-priority-wrapper">
                  <select className="modal-select">
                    <option value="">Выбрать</option>
                    <option value="low">Низкий</option>
                    <option value="medium">Средний</option>
                    <option value="high">Высокий</option>
                  </select>
                  <span className="modal-select-arrow">▾</span>
                </div>
              </div>

              <div className="modal-row">
                <label className="modal-label">Цель визита</label>
                <textarea
                  className="modal-textarea"
                  rows={3}
                />
              </div>

              <div className="modal-bottom">
                <label className="modal-file-label">
                  Прикрепить файл
                  <input type="file" className="modal-file-input" />
                </label>

                <button type="submit" className="modal-submit-btn">
                  Отправить заявку
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default OnlineQueuesPage;

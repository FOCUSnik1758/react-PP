// src/pages/queues/CalendarPage.tsx
import React from "react";
import "../../styles/queues.css";

const CalendarPage: React.FC = () => {
  const days = ["ПН 01.02", "ВТ 01.02", "СР 01.02", "ЧТ 01.02", "ПТ 01.02", "СБ 01.02"];
  const slots = [
    "08:00–09:00",
    "09:00–10:00",
    "10:00–11:00",
    "11:00–12:00",
    "12:00–13:00",
    "13:00–14:00",
    "15:00–16:00",
    "16:00–17:00",
    "17:00–18:00",
  ];

  return (
    <div className="calendar-page">
      <h1 className="calendar-title">Календарь</h1>

      <div className="calendar-card">
        <div className="calendar-card-header">
          <button type="button" className="calendar-nav-btn">
            ‹
          </button>

          <div className="calendar-header-square" />

          <button type="button" className="calendar-nav-btn">
            ›
          </button>
        </div>

        <div className="calendar-grid-wrapper">
          <table className="calendar-table">
            <thead>
              <tr>
                <th className="calendar-time-col" />
                {days.map((d) => (
                  <th key={d}>{d}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {slots.map((s) => (
                <tr key={s}>
                  <td className="calendar-time-col">{s}</td>
                  {days.map((d) => (
                    <td key={d + s} />
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          {/* декоративная "полоса прокрутки" справа */}
          <div className="calendar-scrollbar" />
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;

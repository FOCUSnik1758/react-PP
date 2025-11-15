// src/pages/account/ProfilePage.tsx
import React from "react";
import "../../styles/profile.css";

const ProfilePage: React.FC = () => {
  return (
    <div className="profile-page">
      <div className="profile-container">
        <div className="profile-avatar-block">
          <div className="profile-avatar-circle">
            {/* заглушка-аватар */}
            <span>👤</span>
          </div>
          <button type="button" className="profile-upload-link">
            Загрузить
          </button>
        </div>

        <form className="profile-form">
          <div className="profile-form-row">
            <label className="profile-form-label">
              Имя<span className="required">*</span>
            </label>
            <input className="profile-form-input" type="text" />
          </div>

          <div className="profile-form-row">
            <label className="profile-form-label">
              Фамилия<span className="required">*</span>
            </label>
            <input className="profile-form-input" type="text" />
          </div>

          <div className="profile-form-row">
            <label className="profile-form-label">Отчество</label>
            <input className="profile-form-input" type="text" />
          </div>

          <div className="profile-form-row">
            <label className="profile-form-label">Почта</label>
            <input className="profile-form-input" type="email" />
          </div>

          <div className="profile-form-row">
            <label className="profile-form-label">Telegram-аккаунт</label>
            <input className="profile-form-input" type="text" />
          </div>

          <div className="profile-actions">
            <button type="submit" className="profile-save-btn">
              Сохранить
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;

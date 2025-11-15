// src/pages/auth/LoginPage.tsx
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate, Link } from "react-router-dom";

const Schema = z.object({
  email: z.string().email("Некорректный email"),
  password: z.string().min(6, "Пароль должен содержать не менее 6 символов"),
});

type FormData = z.infer<typeof Schema>;

const LoginPage: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(Schema),
  });

  const navigate = useNavigate();

  // ВРЕМЕННЫЙ фейковый логин – просто уходим на нужную страницу
  const handleLoginClick = () => {
    navigate("/account/profile"); // сюда поставь маршрут, куда нужно переходить
  };

  return (
    <div className="page-container">
      <div className="form-container">
        <h1 className="page-header">Вход</h1>

        {/* форму оставляем, но без onSubmit */}
        <form>
          <div className="form-group">
            <input
              type="email"
              {...register("email")}
              placeholder="Введите почту"
              className="input-field"
            />
            {errors.email && (
              <span className="error-text">{errors.email.message}</span>
            )}
          </div>

          <div className="form-group">
            <input
              type="password"
              {...register("password")}
              placeholder="Введите пароль"
              className="input-field"
            />
            {errors.password && (
              <span className="error-text">{errors.password.message}</span>
            )}
          </div>

          <button
            type="button"
            className="button-primary"
            onClick={handleLoginClick}
          >
            Войти
          </button>
        </form>

        <p className="page-footer">
          Нет аккаунта?{" "}
          <Link to="/register">Зарегистрироваться</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;

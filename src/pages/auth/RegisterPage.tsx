// src/pages/auth/RegisterPage.tsx
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const Schema = z.object({
  email: z.string().email("Некорректный email"),
  password: z.string().min(6, "Пароль должен содержать не менее 6 символов"),
});

type FormData = z.infer<typeof Schema>;

const RegisterPage: React.FC = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(Schema),
  });

  const onSubmit = (data: FormData) => {
    // Отправка данных регистрации
    console.log(data);
  };

  return (
    <div className="page-container">
      <div className="form-container">
        <h1 className="page-header">Регистрация</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="email"
            {...register("email")}
            placeholder="Введите почту"
            className="input-field"
          />
          {errors.email && <span className="input-error">{errors.email.message}</span>}

          <input
            type="password"
            {...register("password")}
            placeholder="Введите пароль"
            className="input-field"
          />
          {errors.password && <span className="input-error">{errors.password.message}</span>}

          <button type="submit" className="button-primary" disabled={isSubmitting}>
            Зарегистрироваться
          </button>
        </form>
        <div className="page-footer">
          <p>Уже есть аккаунт? <a href="/login">Войти</a></p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;

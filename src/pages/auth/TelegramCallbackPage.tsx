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
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-4">Регистрация</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <input
              type="email"
              {...register("email")}
              placeholder="Введите почту"
              className="w-full p-2 border rounded"
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
          </div>
          <div className="mb-4">
            <input
              type="password"
              {...register("password")}
              placeholder="Введите пароль"
              className="w-full p-2 border rounded"
            />
            {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
          </div>
          <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded" disabled={isSubmitting}>
            Зарегистрироваться
          </button>
        </form>
        <p className="mt-4 text-center">
          Уже есть аккаунт? <a href="/login" className="text-blue-500">Войти</a>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;

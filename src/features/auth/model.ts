// src/features/auth/model.ts
import { create } from "zustand";

// Тип данных для сессии
type Session = {
  accessToken: string;
  refreshToken?: string;
  name?: string;  // Добавлено свойство name
  lastName?: string;  // Добавлено свойство lastName
  email?: string;  // Добавлено свойство email
} | null;

type AuthState = {
  session: Session;
  isAuthed: boolean;
  setSession: (s: Session) => void;
  logout: () => void;
};

// Хранение состояния аутентификации
export const useAuth = create<AuthState>((set) => ({
  session: null,
  isAuthed: false,
  setSession: (session) => set({ session, isAuthed: !!session }),
  logout: () => set({ session: null, isAuthed: false }),
}));

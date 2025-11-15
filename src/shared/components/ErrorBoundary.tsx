// src/shared/components/ErrorBoundary.tsx
import React, { Component } from "react";

// Указываем тип для пропсов, включая children
interface ErrorBoundaryProps {
  children: React.ReactNode;  // children могут быть любого типа, который может быть отрендерен
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  // Метод для отлавливания ошибок
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error("Error caught by ErrorBoundary:", error);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Что-то пошло не так!</h1>;  // Сообщение об ошибке
    }

    return this.props.children;  // Отображаем дочерние компоненты
  }
}

export default ErrorBoundary;

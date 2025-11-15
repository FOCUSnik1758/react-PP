// src/routes.tsx
import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";
import MainLayout from "../layout/MainLayout";

import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import ProfilePage from "../pages/account/ProfilePage";
import OnlineQueuesPage from "../pages/queues/OnlineQueuesPage";
import MyQueuesPage from "../pages/queues/MyQueuesPage";
import CalendarPage from "../pages/queues/CalendarPage"; // <== НОВОЕ

import { PrivateRoute, GuestRoute } from "../shared/lib/guards";

export const router = createBrowserRouter([
  {
    element: (
      <GuestRoute>
        <AuthLayout />
      </GuestRoute>
    ),
    children: [
      { path: "/", element: <RegisterPage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage /> },
    ],
  },
  {
    element: <MainLayout />, // пока без PrivateRoute
    children: [
      { path: "/queues", element: <OnlineQueuesPage /> },
      { path: "/my-queues", element: <MyQueuesPage /> },      // НОВОЕ
      { path: "/calendar", element: <CalendarPage /> },      // <== НОВОЕ
      { path: "/account/profile", element: <ProfilePage /> },
    ],
  },
]);


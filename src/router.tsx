import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import LoginPage from "./pages/login/login.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/auth/login",
    element: <LoginPage />,
  },
]);

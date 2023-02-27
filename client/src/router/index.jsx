import { createBrowserRouter, Outlet } from "react-router-dom";
import AuthProvider from "../context/AuthProvider";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ErrorPage from "./ErrorPage";
import ProtectedRoute from "./ProtectectedRoute";

const AuthLayOut = () => {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  );
};

export default createBrowserRouter([
  {
    element: <AuthLayOut />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <Login />,
        path: "/login",
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            element: <Home />,
            path: "/",
          },
        ],
      },
    ],
  },
]);

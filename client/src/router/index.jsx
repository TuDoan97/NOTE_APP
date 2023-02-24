import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";

const AuthLayOut = () => {
  return <Outlet />;
};

export default createBrowserRouter([
  {
    element: <AuthLayOut/>,
    children: [
      {
        element: <Login />,
        path: "/login",
      },
      {
        element: <Home />,
        path: "/",
      },
    ],
  },
]);

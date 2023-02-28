import { createBrowserRouter, Outlet } from "react-router-dom";
import Note from "../components/Note";
import NoteList from "../components/NoteList";
import AuthProvider from "../context/AuthProvider";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ErrorPage from "./ErrorPage";
import ProtectedRoute from "./ProtectedRoute";

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
            loader: async () => {
              const query = `query ExampleQuery {
                folders {
                  id
                  name
                  createAt
                }
              }`;

              const res = await fetch("http://localhost:4000/graphql", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                },
                body: JSON.stringify({
                  query,
                }),
              });

              const { data } = await res.json();
              console.log({ data });
              return data;
            },
            children: [
              {
                element: <NoteList />,
                path: `folders/:folderId`,
                children: [
                  {
                    element: <Note />,
                    path: `note/:noteId`,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
]);

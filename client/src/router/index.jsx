import { createBrowserRouter, Outlet } from "react-router-dom";
import Note from "../components/Note";
import NoteList from "../components/NoteList";
import AuthProvider from "../context/AuthProvider";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ErrorPage from "../pages/ErrorPage";
import ProtectedRoute from "./ProtectedRoute";
import { noteLoader, notesLoader } from "../utils/noteUtils";
import { foldersLoader } from "../utils/folderUtils";

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
            loader: foldersLoader,
            children: [
              {
                element: <NoteList />,
                path: `folders/:folderId`,
                loader: notesLoader,
                children: [
                  {
                    element: <Note />,
                    path: `note/:noteId`,
                    loader: noteLoader,
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
